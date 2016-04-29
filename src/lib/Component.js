'use strict';

/**
 * Base component class (client)
 */

const clock = require('@yr/clock');
const Debug = require('debug');
const isEqual = require('@yr/is-equal');
const React = require('react');

const DEFAULT_TRANSITION_DURATION = 250;
const TIMEOUT = 20;

const debug = Debug('yr:component');

class Component extends React.Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor (props) {
    super(props);

    this.__timerID = 0;
    // Autobind mixin methods
    if (this.__bindableMethods) {
      this.__bindableMethods.forEach((method) => {
        this[method] = this[method].bind(this);
      });
    }
  }

  /**
   * React: render
   * @returns {React}
   */
  render () {
    return this.__render(this.props, this.state);
  }

  /**
   * React: shouldComponentUpdate
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */
  shouldComponentUpdate (nextProps, nextState) {
    const propsChanged = ('isEqual' in nextProps)
      ? !this.props.isEqual(nextProps)
      : !isEqual(nextProps, this.props, null, debug);
    const stateChanged = !isEqual(nextState, this.state, null, debug);
    const changed = propsChanged || stateChanged;

    if (propsChanged) debug('props changed %s', this.displayName);
    if (stateChanged) debug('state changed %s', this.displayName);

    if (changed
      && 'shouldComponentTransition' in this
      && this.shouldComponentTransition(nextProps, nextState)) {
        this.willTransition(nextState);
    }

    return propsChanged || stateChanged;
  }

  /**
   * Update 'state' for transition
   * @param {Object} state
   */
  willTransition (state) {
    if (this.__timerID) clock.cancel(this.__timerID);
    this.setState({
      visibility: !state.visibility ? 1 : 2
    });
    // frame/immediate don't leave enough time for redraw between states
    this.__timerID = clock.timeout(TIMEOUT, () => {
      this.isTransitioning();
    });
  }

  /**
   * Trigger transition state change
   */
  isTransitioning () {
    const duration = ('getTransitionDuration' in this)
      ? this.getTransitionDuration()
      : DEFAULT_TRANSITION_DURATION;

    this.setState({
      visibility: (this.state.visibility == 1) ? 2 : 1
    });

    this.__timerID = clock.timeout(duration, () => {
      this.didTransition();
    });
  }

  /**
   * Trigger transition state change
   */
  didTransition () {
    this.__timerID = 0;
    this.setState({
      visibility: (this.state.visibility == 2) ? 3 : 0
    });
  }
}

module.exports = Component;