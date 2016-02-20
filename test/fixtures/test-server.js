'use strict';

const ReactDom = require('react-dom/server')
  , testComponent = require('./testComponent')

  , comp = testComponent.create();

exports.render = function render () {
  return ReactDom.renderToString(comp({ label: 'click here!' }));
};