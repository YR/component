'use strict';

const { Component: PreactComponent } = require('preact');

class Component extends PreactComponent {
  /**
   * Constructor
   * @param {Object} props
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);

    // Set up initial state
    this.state = Object.assign({}, this.__state);
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
   * Render
   * @returns {Object}
   */
  render() {
    return this.__render(this.props, this.state, this.context);
  }
}

Component.contextTypes = {};

module.exports = Component;
