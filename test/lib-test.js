'use strict';

const component = require('../src/index')
  , expect = require('expect.js')
  , runtime = require('@yr/runtime');

describe('component', () => {
  it('should return a renderable element factory', () => {
    runtime.isServer = false;
    const foo = component.create({
      render (props, state) {
        return component.el.div({}, props.text);
      }
    });

    console.log(component.reactDom.renderToString(foo({ text: 'foo' })))
    expect(component.reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
    runtime.isServer = true;
  });
  it('should return a stateless renderable element factory', () => {
    const foo = component.stateless({
      render (props, state) {
        return component.el.div({}, props.text);
      }
    });

    console.log(component.reactDom.renderToString(foo({ text: 'foo' })))
    expect(component.reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
  });
  it('should return a stateless renderable element factory, passing initial state', () => {
    const foo = component.stateless({
      render (props, state) {
        return component.el.div({ className: state.foo }, props.text);
      },
      getInitialState () {
        return {
          foo: 'bar'
        };
      }
    });

    expect(component.reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div class="bar">foo</div>');
  });
});