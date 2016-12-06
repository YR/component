'use strict';

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

const { h: el, render } = require('preact');
const assign = require('object-assign');
const Component = require('./lib/Component');
const dataTypes = require('./lib/dataTypes');
// This will be an empty object for browser
const renderToString = require('preact-render-to-string');
const runtime = require('@yr/runtime');

const LIFECYCLE_METHODS = [
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount'
];
const PROXY_KEYS = [
  'componentWillUnmount',
  'render',
  'state'
];
const RESERVED_METHODS = LIFECYCLE_METHODS.concat([
  'render',
  'shouldComponentUpdate',
  'shouldComponentTransition',
  'getTransitionDuration'
]);

module.exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  dataTypes,
  el,
  render: 'function' == typeof renderToString ? renderToString : render,

  /**
   * Convert 'specification' into React component class,
   * returning React element factory
   * @param {Object} specification
   * @param {Array} mixins
   * @returns {Function}
   */
  create (specification, mixins) {
    if (runtime.isServer) return this.stateless(specification);

    let comp = class extends Component {};

    // Handle mixins
    if (mixins && mixins.length) {
      // Merge/clone
      mixins = assign({}, ...mixins);
      // Store method names to autobind on instantiation
      specification.__bindableMethods = Object.keys(mixins)
        .filter((key) => {
          return !~RESERVED_METHODS.indexOf(key)
            && ('function' == typeof mixins[key]);
        });
      specification = assign(specification, mixins);
    }
    comp.displayName = specification.displayName || '<component>';
    delete specification.displayName;

    // Rename select keys to prevent overwriting
    proxyKeys(specification, PROXY_KEYS);
    // Copy to comp prototype
    assign(comp.prototype, specification);

    return function createElement (props, ...children) {
      processProps(props, specification);
      return el(comp, props, ...children);
    };
  },

  /**
   * Stateless component factory
   * @param {Object} specification
   * @returns {Function}
   */
  stateless (specification) {
    return function createStatelessElement (props) {
      processProps(props, specification);

      // Send in initial state
      return specification.render(props, specification.state || {});
    };
  }
};

/**
 * Proxy 'keys' of 'obj'
 * @param {Object} obj
 * @param {Array} keys
 */
function proxyKeys (obj, keys) {
  keys.forEach((key) => {
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
function processProps (props, specification) {
  props = props || {};
  const { data, defaultProps } = specification;

  // Extract missing props defined in 'data'
  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  // Copy default props
  if (defaultProps) {
    for (const prop in defaultProps) {
      if (props[prop] == null) props[prop] = defaultProps[prop];
    }
  }
}