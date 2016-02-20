'use strict';

const assign = require('object-assign')
  , Debug = require('debug')
  , isEqual = require('@yr/is-equal')
  , runtime = require('@yr/runtime')
    // Use production builds for server (override with package.json browser field for client)
  , react = require('react/dist/react.min')
  , reactDom = require('react-dom/dist/react-dom-server.min')

  , DEFAULT_TRANSITION_DURATION = 250
  , RESERVED_METHODS = [
      'render',
      'componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount',
      'shouldComponentTransition',
      'getTransitionDuration'
    ]
  , TIMEOUT = 10

  , debug = Debug('yr:component')
  , isDev = (process.env.NODE_ENV == 'development');

class Component extends react.Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor (props) {
    super(props);

    this.__timerID = 0;
    // Autobind mixin methods
    if (this.__bindableMethods) {
      this.__bindableMethods.forEach((method) => {
        this[method] = this[method].bind(this);
      });
    }
  }

  /**
   * React: render
   * @returns {React}
   */
  render () {
    return this.__render(this.props, this.state);
  }

  /**
   * React: shouldComponentUpdate
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */
  shouldComponentUpdate (nextProps, nextState) {
    const propsChanged = ('isEqual' in nextProps)
        ? !this.props.isEqual(nextProps)
        : !isEqual(nextProps, this.props, null, debug)
      , stateChanged = !isEqual(nextState, this.state, null, debug)
      , changed = propsChanged || stateChanged;

    if (propsChanged) debug('props changed %s', this.displayName);
    if (stateChanged) debug('state changed %s', this.displayName);

    if (changed
      && 'shouldComponentTransition' in this
      && this.shouldComponentTransition(nextProps, nextState)) {
        this.willTransition(nextState);
    }

    return propsChanged || stateChanged;
  }

  /**
   * Update 'state' for transition
   * @param {Object} state
   */
  willTransition (state) {
    if (this.__timerID) clearTimeout(this.__timerID);
    // Beware: dangerous hack!
    state.visibility = !state.visibility ? 1 : 2;
    this.__timerID = setTimeout(() => {
      this.isTransitioning(component);
    }, TIMEOUT);
  }

  /**
   * Trigger transition state change
   */
  isTransitioning () {
    const duration = ('getTransitionDuration' in this)
      ? this.getTransitionDuration()
      : DEFAULT_TRANSITION_DURATION;

    this.setState({
      visibility: (this.state.visibility == 1) ? 2 : 1
    });

    this.__timerID = setTimeout(() => {
      this.didTransition();
    }, duration);
  }

  /**
   * Trigger transition state change
   */
  didTransition () {
    this.__timerID = 0;
    this.setState({
      visibility: (this.state.visibility == 2) ? 3 : 0
    });
  }
}

module.exports = {
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  el: react.DOM,
  react,
  reactDom,

  Component,

  /**
   * Convert 'specification' into React component class,
   * returning React element factory
   * @param {Object} specification
   * @param {Array} mixins
   * @returns {Function}
   */
  create (specification, mixins) {
    if (runtime.isServer) return this.stateless(specification, mixins);

    let comp = class extends Component {};

    // Handle mixins
    if (mixins && mixins.length) {
      mixins.unshift({});
      // Clone
      mixins = assign.apply(null, mixins);
      // Store method names to autobind on instantiation
      specification.__bindableMethods = Object.keys(mixins)
        .filter((key) => {
          return !~RESERVED_METHODS.indexOf(key)
            && ('function' == typeof mixins[key]);
        });
    } else {
      mixins = {};
    }

    // Rename render implementation
    specification.__render = specification.render;
    delete specification.render;

    // Copy to comp prototype
    assign(comp.prototype, specification, mixins);

    return function createElement (props) {
      processProps(props, specification);

      return react.createElement(comp, props);
    };
  },

  /**
   * Stateless component factory
   * @param {Object} specification
   * @param {Array} mixins
   * @returns {Function}
   */
  stateless (specification, mixins) {
    let state = {};

    mixins = mixins || [];
    mixins.unshift(specification);

    if ('getInitialState' in specification) {
      state = specification.getInitialState();
    }

    assign.apply(null, mixins);

    return function renderStateless (props) {
      processProps(props, specification);

      return specification.render(props, state);
    };
  }
};

/**
 * Process 'props'
 * @param {Props} props
 * @param {Object} specification
 */
function processProps (props, specification) {
  const data = specification.data;

  // Extract missing props
  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  if (!isDev || !data || !props) return;

  // Validate prop types
  for (const key in data) {
    const err = data[key](props, key, specification.displayName, 'prop');

    if (err) console.error(err);
  }
}