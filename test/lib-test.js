'use strict';

var component = require('../src/index')
  , expect = require('expect.js')
  , React = require('react')
  , ReactDOMServer = require('react-dom/server');

describe('component', function () {
  it('should return a renderable element factory', function () {
    var spec = {
      render: function () {
        return React.DOM.div({}, this.props.text);
      }
    };
    var foo = component(spec);
    expect(ReactDOMServer.renderToStaticMarkup(foo({text: 'foo'}))).to.eql('<div>foo</div>');
  });
  it('should return a stateless renderable element factory', function () {
    var spec = {
      render: function (props) {
        return React.DOM.div({}, props.text);
      }
    };
    var foo = component.stateless(spec);
    expect(ReactDOMServer.renderToStaticMarkup(foo({text: 'foo'}))).to.eql('<div>foo</div>');
  });
});