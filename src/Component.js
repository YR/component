'use strict';

const { Component: PreactComponent } = require('preact');
const assign = require('object-assign');
const clock = require('@yr/clock');

const DEFAULT_TRANSITION_DURATION = 250;
const TIMEOUT = 20;

class Component extends PreactComponent {
  /**
   * Constructor
   * @param {Object} props
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);

    this.__timerID = 0;
    this.__transitionDuration =
      'getTransitionDuration' in this ? this.getTransitionDuration() : DEFAULT_TRANSITION_DURATION;
    // Set up initial state
    this.state = assign({}, this.__state);
    // Autobind mixin methods
    if (this.__bindableMethods) {
      this.__bindableMethods.forEach(method => {
        this[method] = this[method].bind(this);
      });
    }

    // Call pseudo constructor
    if (this.init !== undefined) {
      this.init(props, context);
    }
  }

  /**
   * React: render
   * @returns {React}
   */
  render() {
    return this.__render(this.props, this.state, this.context);
  }

  /**
   * Determine if component should transition based on 'nextProps' or 'nextState'
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */
  shouldComponentTransition(nextProps, nextState) {
    return false;
  }

  /**
   * Update 'state' for transition
   * @param {Object} state
   */
  willTransition(state) {
    if (this.__timerID) {
      clock.cancel(this.__timerID);
    }

    // Generally a bad idea...
    state.visibility = !state.visibility ? 1 : 2;

    // frame/immediate doesn't leave enough time for redraw between states
    this.__timerID = clock.timeout(TIMEOUT, () => {
      this.isTransitioning();
    });
  }

  /**
   * Trigger transition state change
   */
  isTransitioning() {
    this.setState({
      visibility: this.state.visibility == 1 ? 2 : 1
    });

    this.__timerID = clock.timeout(this.__transitionDuration, () => {
      this.didTransition();
    });
  }

  /**
   * Trigger transition state change
   */
  didTransition() {
    this.__timerID = 0;

    this.setState({
      visibility: this.state.visibility == 2 ? 3 : 0
    });
  }

  /**
   * React: componentWillUnmount
   */
  componentWillUnmount() {
    // Reset
    if (this.state && this.state.visibility) {
      this.state.visibility = 0;
    }
    if (this.__timerID) {
      clock.cancel(this.__timerID);
    }
    if (this.__componentWillUnmount) {
      this.__componentWillUnmount();
    }
  }
}

Component.contextTypes = {};

module.exports = Component;
