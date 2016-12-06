'use strict';

const { render } = require('preact');
const testComponent = require('./testComponent');

const comp = testComponent.create();

render(comp({ label: 'click here!' }), null, document.getElementById('container'));