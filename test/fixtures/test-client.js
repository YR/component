'use strict';

const ReactDom = require('react-dom');
const testComponent = require('./testComponent');

const comp = testComponent.create();

ReactDom.render(comp({ label: 'click here!' }), document.getElementById('container'));