'use strict';

const assign = require('object-assign')
  , Debug = require('debug')
  , isEqual = require('@yr/is-equal')
  , runtime = require('@yr/runtime')
    // Use production builds for server (hide from static analysis)
  , react = runtime.isBrowser ? require('react') : require('react/dist/' + 'react.min')
  , reactDom = runtime.isBrowser ? require('react-dom') : require('react-dom/dist/' + 'react-dom-server.min')

  , DEFAULT_TRANSITION_DURATION = 250
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
    mixins = mixins || [];
    let comp = class extends Component {};

    if ('shouldComponentTransition' in specification) {
      specification.__timerID = 0;
    }

    assign.apply(null, [comp.prototype, specification].concat(mixins));

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
    if (mixins && mixins.length) {
      mixins.reduce((specification, mixin) => {
        return assign(specification, mixin);
      }, specification);
    }

    return function renderStateless (props) {
      processProps(props, specification);

      return specification.render(props);
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