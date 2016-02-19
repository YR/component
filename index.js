'use strict';

var assign = require('object-assign'),
    Debug = require('debug'),
    isEqual = require('@yr/is-equal'),
    runtime = require('@yr/runtime')
// Use production builds for server (hide from static analysis)
,
    react = runtime.isBrowser ? require('react') : require('react/dist/' + 'react.min'),
    reactDom = runtime.isBrowser ? require('react-dom') : require('react-dom/dist/' + 'react-dom-server.min'),
    DEFAULT_TRANSITION_DURATION = 250,
    TIMEOUT = 10,
    debug = Debug('yr:component'),
    isDev = undefined == 'development';

var Component = function (_react$Component) {
  babelHelpers.inherits(Component, _react$Component);

  /**
   * Constructor
   * @param {Object} props
   */

  function Component(props) {
    babelHelpers.classCallCheck(this, Component);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props));
  }

  /**
   * React: shouldComponentUpdate
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */


  babelHelpers.createClass(Component, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var propsChanged = 'isEqual' in nextProps ? !this.props.isEqual(nextProps) : !isEqual(nextProps, this.props, null, debug),
          stateChanged = !isEqual(nextState, this.state, null, debug),
          changed = propsChanged || stateChanged;

      if (propsChanged) debug('props changed %s', this.displayName);
      if (stateChanged) debug('state changed %s', this.displayName);

      if (changed && 'shouldComponentTransition' in this && this.shouldComponentTransition(nextProps, nextState)) {
        this.willTransition(nextState);
      }

      return propsChanged || stateChanged;
    }

    /**
     * Update 'state' for transition
     * @param {Object} state
     */

  }, {
    key: 'willTransition',
    value: function willTransition(state) {
      var _this2 = this;

      if (this.__timerID) clearTimeout(this.__timerID);
      // Beware: dangerous hack!
      state.visibility = !state.visibility ? 1 : 2;
      this.__timerID = setTimeout(function () {
        _this2.isTransitioning(component);
      }, TIMEOUT);
    }

    /**
     * Trigger transition state change
     */

  }, {
    key: 'isTransitioning',
    value: function isTransitioning() {
      var _this3 = this;

      var duration = 'getTransitionDuration' in this ? this.getTransitionDuration() : DEFAULT_TRANSITION_DURATION;

      this.setState({
        visibility: this.state.visibility == 1 ? 2 : 1
      });

      this.__timerID = setTimeout(function () {
        _this3.didTransition();
      }, duration);
    }

    /**
     * Trigger transition state change
     */

  }, {
    key: 'didTransition',
    value: function didTransition() {
      this.__timerID = 0;
      this.setState({
        visibility: this.state.visibility == 2 ? 3 : 0
      });
    }
  }]);
  return Component;
}(react.Component);

module.exports = {
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  el: react.DOM,
  react: react,
  reactDom: reactDom,

  Component: Component,

  /**
   * Convert 'specification' into React component class,
   * returning React element factory
   * @param {Object} specification
   * @param {Array} mixins
   * @returns {Function}
   */
  create: function create(specification, mixins) {
    mixins = mixins || [];
    var comp = function (_Component) {
      babelHelpers.inherits(comp, _Component);

      function comp() {
        babelHelpers.classCallCheck(this, comp);
        return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(comp).apply(this, arguments));
      }

      return comp;
    }(Component);

    if ('shouldComponentTransition' in specification) {
      specification.__timerID = 0;
    }

    assign.apply(null, [comp.prototype, specification].concat(mixins));

    return function createElement(props) {
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