'use strict';

const component = require('../../src/index')
  , testComponent = require('./testComponent')

  , comp = testComponent.create()
  , reactDom = component.reactDom;

reactDom.render(comp({ text: 'foo' }), document.getElementById('container'));