'use strict';

const ReactDom = require('react-dom')
  , testComponent = require('./testComponent')

  , comp = testComponent.create();

ReactDom.render(comp({ label: 'click here!' }), document.getElementById('container'));