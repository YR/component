'use strict';

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

const assign = require('object-assign')
  , Component = require('./lib/Component')
  , runtime = require('@yr/runtime')
    // Use production build for server
    // Override with package.json "browser" field for client to enable debug during dev
  , React = require('react/dist/react.min')

  , REACT_ELEMENT_TYPE = (typeof Symbol === "function" && Symbol.for && Symbol.for('react.element')) || 0xeac7
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
    ];

module.exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  dataTypes: React.PropTypes,
  el: createReactElement,
  React,

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

    return function createElement (props/*, ...children*/) {
      // Non-leaky args conversion
      const n = arguments.length;
      let args = Array(n + 1);

      args[0] = comp;
      for (let i = 0; i < n; i++) {
        args[i + 1] = arguments[i];
      }

      processProps(props, specification);

      return createReactElement.apply(null, args);
    };
  },

  /**
   * Stateless component factory
   * @param {Object} specification
   * @returns {Function}
   */
  stateless (specification) {
    return function renderStateless (props) {
      processProps(props, specification);

      // Send in initial state
      return specification.render(props, specification.state || {});
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

  if (process.env.NODE_ENV == 'production' || !data || !props) return;

  // Validate prop types
  for (const key in data) {
    const err = data[key](props, key, specification.displayName, 'prop');

    if (err) console.error(err);
  }
}

/**
 * Fast 'inline' createElement
 * Mostly borrowed from babelHelpers.jsx
 * @param {Class|String} type
 * @param {Object} [props]
 * @returns {Object}
 */
function createReactElement (type, props/*, ...children*/) {
  props = props || {};

  // Non-leaky args conversion
  const n = arguments.length;
  let childArgs = Array(n > 2 ? n - 2 : 0);

  for (let i = 2; i < n; i++) {
    childArgs[i - 2] = arguments[i];
  }

  // Defer to React.createElement if 'ref' or not production
  if (props.ref !== undefined || process.env.NODE_ENV != 'production') return React.createElement.apply(null, [type, props].concat(childArgs));

  const defaultProps = type && type.defaultProps;

  // Copy default props
  if (defaultProps) {
    for (const prop in defaultProps) {
      if (props[prop] == null) props[prop] = defaultProps[prop];
    }
  }
  // Store children
  props.children = childArgs;

  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key: props.key !== undefined ? String(props.key) : null,
    ref: null,
    props,
    _owner: null
  };
}