'use strict';

const assign = require('object-assign')
  , Debug = require('debug')
  , isEqual = require('@yr/is-equal')
  , React = require('react')

  , DEFAULT_TRANSITION_DURATION = 250

  , debug = Debug('yr:component')
  , isDev = (process.env.NODE_ENV == 'development');

/**
 * Convert 'specification' into React component class,
 * returning React element factory
 * @param {Object} specification
 * @param {Array} mixins
 * @returns {Function}
 */
module.exports = function component (specification, mixins) {
  if (mixins && mixins.length) {
    mixins.reduce((specification, mixin) => {
      return assign(specification, mixin);
    }, specification);
  }

  if (!('shouldComponentUpdate' in specification)) {
    specification.shouldComponentUpdate = shouldComponentUpdateFactory(specification.displayName);
  }

  if ('shouldComponentTransition' in specification) {
    specification.__timerID = 0;
  }

  const comp = React.createClass(specification);

  return function createElement (props) {
    processProps(props, specification);

    return React.createElement(comp, props);
  };
};

/**
 * Stateless component factory
 * @param {Object} specification
 * @param {Array} mixins
 * @returns {Function}
 */
module.exports.stateless = function statelessComponent (specification, mixins) {
  if (mixins && mixins.length) {
    mixins.reduce((specification, mixin) => {
      return assign(specification, mixin);
    }, specification);
  }

  return function renderStateless (props) {
    processProps(props, specification);

    return specification.render(props);
  };
};

module.exports.WILL_TRANSITION = 1;
module.exports.IS_TRANSITIONING = 2;
module.exports.DID_TRANSITION = 3;

/**
 * shouldComponentUpdate factory
 * @param {String} name
 * @returns {Function}
 */
function shouldComponentUpdateFactory (name) {
  return function shouldComponentUpdate (nextProps, nextState) {
    const propsChanged = ('isEqual' in nextProps)
        ? !this.props.isEqual(nextProps)
        : !isEqual(nextProps, this.props, null, debug)
      , stateChanged = !isEqual(nextState, this.state, null, debug)
      , changed = propsChanged || stateChanged;

    if (propsChanged) debug('props changed %s', name);
    if (stateChanged) debug('state changed %s', name);

    if (changed
      && 'shouldComponentTransition' in this
      && this.shouldComponentTransition(nextProps, nextState)) {
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

/**
 * Update 'component' 'state' for transition
 * @param {React} component
 * @param {Object} state
 */
function willTransition (component, state) {
  if (component.__timerID) clearTimeout(component.__timerID);
  // Beware: dangerous hack!
  state.visibility = !state.visibility ? 1 : 2;
  component.__timerID = setTimeout(() => {
    isTransitioning(component);
  }, 0);
}

/**
 * Trigger transition state change for 'component'
 * @param {React} component
 */
function isTransitioning (component) {
  const duration = ('getTransitionDuration' in component)
    ? component.getTransitionDuration()
    : DEFAULT_TRANSITION_DURATION;

  component.setState({
    visibility: (component.state.visibility == 1) ? 2 : 1
  });

  component.__timerID = setTimeout(() => {
    didTransition(component);
  }, duration);
}

/**
 * Trigger transition state change for 'component'
 * @param {React} component
 */
function didTransition (component) {
  component.__timerID = 0;
  component.setState({
    visibility: (component.state.visibility == 2) ? 3 : 0
  });
}