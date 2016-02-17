'use strict';

var assign = require('object-assign'),
    Debug = require('debug'),
    isEqual = require('@yr/is-equal'),
    runtime = require('@yr/runtime')
// Use production builds for server (hide from static analysis)
,
    react = runtime.isBrowser ? require('react') : require('react/dist/' + 'react.min'),
    reactDom = runtime.isBrowser ? require('react-dom') : require('react/dist/' + 'react-dom-server.min'),
    DEFAULT_TRANSITION_DURATION = 250,
    TIMEOUT = 10,
    debug = Debug('yr:component'),
    isDev = undefined == 'development';

module.exports = {
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  react: react,
  reactDom: reactDom,

  /**
   * Convert 'specification' into React component class,
   * returning React element factory
   * @param {Object} specification
   * @param {Array} mixins
   * @returns {Function}
   */
  component: function component(specification, mixins) {
    if (mixins && mixins.length) {
      mixins.reduce(function (specification, mixin) {
        return assign(specification, mixin);
      }, specification);
    }

    if (!('shouldComponentUpdate' in specification)) {
      specification.shouldComponentUpdate = shouldComponentUpdateFactory(specification.displayName);
    }

    if ('shouldComponentTransition' in specification) {
      specification.__timerID = 0;
    }

    var comp = React.createClass(specification);

    return function createElement(props) {
      processProps(props, specification);

      return React.createElement(comp, props);
    };
  },


  /**
   * Stateless component factory
   * @param {Object} specification
   * @param {Array} mixins
   * @returns {Function}
   */
  stateless: function stateless(specification, mixins) {
    if (mixins && mixins.length) {
      mixins.reduce(function (specification, mixin) {
        return assign(specification, mixin);
      }, specification);
    }

    return function renderStateless(props) {
      processProps(props, specification);

      return specification.render(props);
    };
  }
};

/**
 * shouldComponentUpdate factory
 * @param {String} name
 * @returns {Function}
 */
function shouldComponentUpdateFactory(name) {
  return function shouldComponentUpdate(nextProps, nextState) {
    var propsChanged = 'isEqual' in nextProps ? !this.props.isEqual(nextProps) : !isEqual(nextProps, this.props, null, debug),
        stateChanged = !isEqual(nextState, this.state, null, debug),
        changed = propsChanged || stateChanged;

    if (propsChanged) debug('props changed %s', name);
    if (stateChanged) debug('state changed %s', name);

    if (changed && 'shouldComponentTransition' in this && this.shouldComponentTransition(nextProps, nextState)) {
      willTransition(this, nextState);
    }

    return propsChanged || stateChanged;
  };
}

/**
 * Process 'props'
 * @param {Props} props
 * @param {Object} specification
 */
function processProps(props, specification) {
  var data = specification.data;

  // Extract missing props
  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  if (!isDev || !data || !props) return;

  // Validate prop types
  for (var key in data) {
    var err = data[key](props, key, specification.displayName, 'prop');

    if (err) console.error(err);
  }
}

/**
 * Update 'component' 'state' for transition
 * @param {React} component
 * @param {Object} state
 */
function willTransition(component, state) {
  if (component.__timerID) clearTimeout(component.__timerID);
  // Beware: dangerous hack!
  state.visibility = !state.visibility ? 1 : 2;
  component.__timerID = setTimeout(function () {
    isTransitioning(component);
  }, TIMEOUT);
}

/**
 * Trigger transition state change for 'component'
 * @param {React} component
 */
function isTransitioning(component) {
  var duration = 'getTransitionDuration' in component ? component.getTransitionDuration() : DEFAULT_TRANSITION_DURATION;

  component.setState({
    visibility: component.state.visibility == 1 ? 2 : 1
  });

  component.__timerID = setTimeout(function () {
    didTransition(component);
  }, duration);
}

/**
 * Trigger transition state change for 'component'
 * @param {React} component
 */
function didTransition(component) {
  component.__timerID = 0;
  component.setState({
    visibility: component.state.visibility == 2 ? 3 : 0
  });
}