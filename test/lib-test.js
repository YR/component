'use strict';

const component = require('../src/index')
  , expect = require('expect.js');

describe('component', () => {
  it('should return a renderable element factory', () => {
    const foo = component.create({
      render () {
        return component.dom.div({}, this.props.text);
      }
    });

    expect(component.reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
  });
  it('should return a stateless renderable element factory', () => {
    const foo = component.stateless({
      render (props) {
        return component.dom.div({}, props.text);
      }
    });

    expect(component.reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
  });
  it.only('should return an extendable class', () => {
    class Foo extends component.Component {
      render () {
        return component.dom.div({}, this.props.text);
      }
    }

    // console.log(typeof Foo, Foo.toString())

    console.log(component.reactDom.renderToStaticMarkup(component.react.createElement(Foo, { text: 'foo' })))

    // expect(component.reactDom.renderToStaticMarkup(Foo({ text: 'foo' }))).to.eql('<div>foo</div>');
  });
});