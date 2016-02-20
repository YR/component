'use strict';

const component = require('../../src/index')
  , testComponent = require('./testComponent')

  , comp = testComponent.create()
  , reactDom = component.reactDom;

exports.render = function render () {
  return reactDom.renderToString(comp({ text: 'foo' }));
};