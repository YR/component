'use strict';

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

var assign = require('object-assign'),
    clock = require('@yr/clock'),
    Debug = require('debug'),
    isEqual = require('@yr/is-equal'),
    runtime = require('@yr/runtime')
// Use production build for server
// Override with package.json browser field for client to enable debug during dev
,
    React = require('react/dist/react.min'),
    DEFAULT_TRANSITION_DURATION = 250,
    RESERVED_METHODS = ['render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'shouldComponentTransition', 'getTransitionDuration'],
    TIMEOUT = 20,
    debug = Debug('yr:component'),
    isDev = undefined == 'development';

var Component = function (_React$Component) {
  babelHelpers.inherits(Component, _React$Component);

  /**
   * Constructor
   * @param {Object} props
   */

  function Component(props) {
    babelHelpers.classCallCheck(this, Component);

    var _this = babelHelpers.possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.__timerID = 0;
    // Autobind mixin methods
    if (_this.__bindableMethods) {
      _this.__bindableMethods.forEach(function (method) {
        _this[method] = _this[method].bind(_this);
      });
    }
    return _this;
  }

  /**
   * React: render
   * @returns {React}
   */


  Component.prototype.render = function render() {
    return this.__render(this.props, this.state);
  };

  /**
   * React: shouldComponentUpdate
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */


  Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var propsChanged = 'isEqual' in nextProps ? !this.props.isEqual(nextProps) : !isEqual(nextProps, this.props, null, debug),
        stateChanged = !isEqual(nextState, this.state, null, debug),
        changed = propsChanged || stateChanged;

    if (propsChanged) debug('props changed %s', this.displayName);
    if (stateChanged) debug('state changed %s', this.displayName);

    if (changed && 'shouldComponentTransition' in this && this.shouldComponentTransition(nextProps, nextState)) {
      this.willTransition(nextState);
    }

    return propsChanged || stateChanged;
  };

  /**
   * Update 'state' for transition
   * @param {Object} state
   */


  Component.prototype.willTransition = function willTransition(state) {
    var _this2 = this;

    if (this.__timerID) clock.cancel(this.__timerID);
    this.setState({
      visibility: !state.visibility ? 1 : 2
    });
    // frame/immediate don't leave enough time for redraw between states
    this.__timerID = clock.timeout(TIMEOUT, function () {
      _this2.isTransitioning();
    });
  };

  /**
   * Trigger transition state change
   */


  Component.prototype.isTransitioning = function isTransitioning() {
    var _this3 = this;

    var duration = 'getTransitionDuration' in this ? this.getTransitionDuration() : DEFAULT_TRANSITION_DURATION;

    this.setState({
      visibility: this.state.visibility == 1 ? 2 : 1
    });

    this.__timerID = clock.timeout(duration, function () {
      _this3.didTransition();
    });
  };

  /**
   * Trigger transition state change
   */


  Component.prototype.didTransition = function didTransition() {
    this.__timerID = 0;
    this.setState({
      visibility: this.state.visibility == 2 ? 3 : 0
    });
  };

  return Component;
}(React.Component);

module.exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  el: React.DOM,
  React: React,

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
      mixins.unshift({});
      // Clone
      mixins = assign.apply(null, mixins);
      // Store method names to autobind on instantiation
      specification.__bindableMethods = Object.keys(mixins).filter(function (key) {
        return ! ~RESERVED_METHODS.indexOf(key) && 'function' == typeof mixins[key];
      });
    } else {
      mixins = {};
    }

    // Rename render implementation
    specification.__render = specification.render;
    delete specification.render;

    // Copy to comp prototype
    assign(comp.prototype, specification, mixins);

    return function createElement(props) {
      processProps(props, specification);

      return React.createElement(comp, props);
    };
  },


  /**
   * Stateless component factory
   * @param {Object} specification
   * @returns {Function}
   */
  stateless: function stateless(specification) {
    return function renderStateless(props) {
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