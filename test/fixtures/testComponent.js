'use strict';

const component = require('../../src/index');
const runtime = require('@yr/runtime');

const el = component.el;
const mixins = runtime.isBrowser
  ? [require('./testComponentMixin')]
  : [];

exports.create = function create () {
  return component.create({
    state: {
      active: false,
      visibility: 0
    },
    render (props, state) {
      return el('div', {},
        el('button', { onClick: this.onClick }, props.label),
        this.renderPanel(props, state)
      );
    },
    renderPanel (props, state) {
      if (state.visibility > 0) {
        let className = 'panel';

        if (this.state.visibility > 1) className += ' js-show';
        return el('div', { className });
      }
    }
  }, mixins);
};