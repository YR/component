'use strict';

/**
 * Base component class (client)
 */

var Preact = require('preact');
var assign = require('object-assign');
var clock = require('@yr/clock');
var Debug = require('debug');
var isEqual = require('@yr/is-equal');

var DEFAULT_TRANSITION_DURATION = 250;
var TIMEOUT = 20;

var debug = Debug('yr:component');

module.exports = function (_Preact$Component) {
  babelHelpers.inherits(Component, _Preact$Component);

  /**
   * Constructor
   * @param {Object} props
   */
  function Component(props) {
    babelHelpers.classCallCheck(this, Component);

    var _this = babelHelpers.possibleConstructorReturn(this, _Preact$Component.call(this, props));

    _this.__timerID = 0;
    _this.__transitionDuration = 'getTransitionDuration' in _this ? _this.getTransitionDuration() : DEFAULT_TRANSITION_DURATION;
    // Set up initial state
    _this.state = assign({}, _this.__state);
    // Autobind mixin methods
    if (_this.__bindableMethods) {
      _this.__bindableMethods.forEach(function (method) {
        _this[method] = _this[method].bind(_this);
      });
    }
    return _this;
  }

  /**
   * Render
   * @param {Object} props
   * @param {Object} state
   * @returns {Component}
   */


  Component.prototype.render = function render(props, state) {
    return this.__render(props, state);
  };

  /**
   * Determine if component should update based on incoming props/state
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */


  Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var changed = 'isEqual' in nextProps ? !this.props.isEqual(nextProps) : !isEqual(nextProps, this.props, null, debug);

    if (!changed) {
      changed = !isEqual(nextState, this.state, null, debug);
      if (changed) debug('state changed for %s', this.displayName);
    } else {
      debug('props changed for %s', this.displayName);
    }

    if (changed && this.shouldComponentTransition(nextProps, nextState)) {
      this.willTransition(nextState);
    }

    return changed;
  };

  /**
   * Determine if component should transition based on 'nextProps' or 'nextState'
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */


  Component.prototype.shouldComponentTransition = function shouldComponentTransition(nextProps, nextState) {
    return false;
  };

  /**
   * Update 'state' for transition
   * @param {Object} state
   */


  Component.prototype.willTransition = function willTransition(state) {
    var _this2 = this;

    if (this.__timerID) clock.cancel(this.__timerID);

    // Generally a bad idea...
    state.visibility = !state.visibility ? 1 : 2;

    // frame/immediate doesn't leave enough time for redraw between states
    this.__timerID = clock.timeout(TIMEOUT, function () {
      _this2.isTransitioning();
    });
  };

  /**
   * Trigger transition state change
   */


  Component.prototype.isTransitioning = function isTransitioning() {
    var _this3 = this;

    this.setState({
      visibility: this.state.visibility == 1 ? 2 : 1
    });

    this.__timerID = clock.timeout(this.__transitionDuration, function () {
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

  /**
   * Hook during component unmount
   */


  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    // Reset
    if (this.state && this.state.visibility) this.state.visibility = 0;
    if (this.__timerID) clock.cancel(this.__timerID);
    if (this.__componentWillUnmount) this.__componentWillUnmount();
  };

  return Component;
}(Preact.Component);