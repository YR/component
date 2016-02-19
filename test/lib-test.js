'use strict';

const component = require('../src/index')
  , expect = require('expect.js');

describe('component', () => {
  it('should return a renderable element factory', () => {
    const foo = component.create({
      render () {
        return component.el.div({}, this.props.text);
      }
    });

    expect(component.reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
  });
  it('should return a stateless renderable element factory', () => {
    const foo = component.stateless({
      render (props) {
        return component.el.div({}, props.text);
      }
    });

    expect(component.reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
  });
});