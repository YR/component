'use strict';

module.exports = {
  shouldComponentTransition (nextProps, nextState) {
    return nextState.active != this.state.active;
  },
  onClick (evt) {
    this.setState({
      active: !this.state.active
    });
  }
};