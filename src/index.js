'use strict';

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

const assign = require('object-assign');
const Component = require('./lib/Component');
const React = require('react');
const runtime = require('@yr/runtime');

const LIFECYCLE_METHODS = [
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount',
  'componentDidCatch'
];
const PROXY_KEYS = ['componentWillUnmount', 'render', 'state'];
const RESERVED_METHODS = LIFECYCLE_METHODS.concat([
  'render',
  'shouldComponentUpdate',
  'shouldComponentTransition',
  'getTransitionDuration'
]);
const STATIC_PROPERTIES = [
  'displayName',
  'defaultProps',
  'propTypes'
];

module.exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  Component,
  el: React.createElement,

  /**
   * Convert 'specification' into a renderable component definition
   * Returns stateless function if server or no state/lifecycle methods defined
   * @param {Object} specification
   * @returns {Class|Function}
   */
  define(specification) {
    if (specification.render === undefined) {
      throw Error('a component specification requires a "render" function');
    }



    // Rename select keys to prevent overwriting
    proxyKeys(specification, PROXY_KEYS);

    if (isStateless(specification)) {
      return specification.__render;
    }

    const comp = class extends Component {};

    comp.displayName = specification.displayName || '<component>';
    comp.defaultProps = specification.defaultProps || {};
    comp.propTypes = specification.propTypes || {};
    if ('getChildContext' in specification) {
      comp.childContextTypes = Component.contextTypes;
    }

    // Copy to comp prototype
    assign(comp.prototype, specification);

    return comp;
  }
};

/**
 * Determine if 'specification' is stateless
 * @param {Object} specification
 * @returns {Boolean}
 */
function isStateless(specification) {
  if (runtime.isServer) {
    return true;
  }

  // Not stateless if contains anything more than render and static properties
  for (const prop in specification) {
    if (prop !== 'render' && !~STATIC_PROPERTIES.indexOf(prop)) {
      return false;
    }
  }

  return true;
}

/**
 * Stateless component factory
 * @param {Object} specification
 * @returns {Function}
 */
function createStateless(specification) {
  return function createStatelessElement(props, context) {
    processProps(props, specification);

    // Send in initial state
    return specification.render(props, specification.state !== undefined ? specification.state : {}, context);
  };
}

/**
 * Proxy 'keys' of 'obj'
 * @param {Object} obj
 * @param {Array} keys
 */
function proxyKeys(obj, keys) {
  keys.forEach(key => {
    if (key in obj) {
      obj[`__${key}`] = obj[key];
      delete obj[key];
    }
  });
}

/**
 * Process 'props'
 * @param {Props} props
 * @param {Object} specification
 */
function processProps(props, specification) {
  props = props || {};
  const { data, defaultProps, displayName } = specification;

  // Extract missing props defined in 'data'
  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  // Copy default props
  if (defaultProps) {
    for (const prop in defaultProps) {
      if (props[prop] == null) props[prop] = defaultProps[prop];
    }
  }

  if (!data) return;

  /*   if (process.env.NODE_ENV == 'development' && process.env.RUNTIME == 'browser') {
    const ReactSecret = require('react/lib/ReactPropTypesSecret');

    // Validate prop types
    for (const key in data) {
      const err = data[key](props, key, displayName, 'data property', key, ReactSecret);

      if (err) console.error(err);
    }
  }
 */
}
