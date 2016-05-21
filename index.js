'use strict';

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

var assign = require('object-assign');
var Component = require('./lib/Component');
var runtime = require('@yr/runtime');
// Use production build for server
// Override with package.json "browser" field for client to enable debug during dev
var React = require('react/dist/react.min');

var LIFECYCLE_METHODS = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];
var PROXY_METHODS = ['componentWillUnmount', 'render'];
var RESERVED_METHODS = LIFECYCLE_METHODS.concat(['render', 'shouldComponentUpdate', 'shouldComponentTransition', 'getTransitionDuration']);

var isProduction = undefined == 'production';

module.exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  dataTypes: React.PropTypes,
  el: React.createElement,

  /**
   * Convert 'specification' into React component class,
   * returning React element factory
   * @param {Object} specification
   * @param {Array} mixins
   * @returns {Function}
   */
  create: function create(specification, mixins) {
    if (runtime.isServer) return this.stateless(specification);

    var comp = function (_Component) {
      babelHelpers.inherits(comp, _Component);

      function comp() {
        babelHelpers.classCallCheck(this, comp);
        return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      return comp;
    }(Component);

    // Handle mixins
    if (mixins && mixins.length) {
      // Merge/clone
      mixins = assign.apply(undefined, [{}].concat(mixins));
      // Store method names to autobind on instantiation
      specification.__bindableMethods = Object.keys(mixins).filter(function (key) {
        return ! ~RESERVED_METHODS.indexOf(key) && 'function' == typeof mixins[key];
      });
      specification = assign(specification, mixins);
    }

    // Rename select methods to prevent overwriting
    proxyMethods(specification, PROXY_METHODS);
    // Copy to comp prototype
    assign(comp.prototype, specification);

    return function createElement(props) {
      processProps(props, specification);

      for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        children[_key - 1] = arguments[_key];
      }

      return React.createElement.apply(React, [comp, props].concat(children));
    };
  },


  /**
   * Stateless component factory
   * @param {Object} specification
   * @returns {Function}
   */
  stateless: function stateless(specification) {
    return function createStatelessElement(props) {
      processProps(props, specification);

      // Send in initial state
      return specification.render(props, specification.state || {});
    };
  }
};

/**
 * Proxy 'methods' of 'obj'
 * @param {Object} obj
 * @param {Array} methods
 */
function proxyMethods(obj, methods) {
  methods.forEach(function (method) {
    if (method in obj) {
      obj['__' + method] = obj[method];
      delete obj[method];
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
  var data = specification.data;
  var defaultProps = specification.defaultProps;
  var displayName = specification.displayName;

  // Extract missing props defined in 'data'

  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  // Copy default props
  if (defaultProps) {
    for (var prop in defaultProps) {
      if (props[prop] == null) props[prop] = defaultProps[prop];
    }
  }

  if (!isProduction || !data) return;

  // Validate prop types
  for (var key in data) {
    var err = data[key](props, key, displayName, 'prop');

    if (err) console.error(err);
  }
}