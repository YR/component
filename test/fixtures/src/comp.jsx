'use strict';

const { define } = require('../../../index.js');

module.exports = define({
  render(props, state) {
    return <div>Hello {props.toWhat}</div>;
  }
});