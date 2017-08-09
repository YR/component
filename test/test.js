'use strict';

const { Component, define, el } = require('../src/index');
const { expect } = require('chai');
const propTypes = require('prop-types');
const ReactDOM = require('react-dom/server');
const runtime = require('@yr/runtime');

describe('component', () => {
  before(() => {
    runtime.isServer = false;
    Component.contextTypes = {
      data: propTypes.object,
      locale: propTypes.object,
      settings: propTypes.object
    };
  });
  after(() => {
    runtime.isServer = true;
  });

  it('should throw when defining an invalid component specification', () => {
    expect(define).to.throw();
  });
  it('should render a stateless component', () => {
    const Foo = define({
      render(props, state) {
        return el('div', {}, props.text);
      }
    });

    expect(Foo.__isStateless).to.equal(true);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql('<div>foo</div>');
  });
  it('should render a stateless component with default props', () => {
    const Foo = define({
      defaultProps: {
        foo: 'bar'
      },
      render(props, state) {
        return el('div', {}, props.foo);
      }
    });

    expect(Foo.__isStateless).to.equal(true);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql('<div>bar</div>');
  });
  it('should render a stateless component with default state', () => {
    runtime.isServer = true;
    const Foo = define({
      state: {
        foo: 'bar'
      },
      render(props, state) {
        return el('div', {}, state.foo);
      }
    });

    expect(Foo.__isStateless).to.equal(true);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql('<div>bar</div>');
    runtime.isServer = false;
  });
  it('should render a stateless svg component', () => {
    const Foo = define({
      render(props, state) {
        return el(
          'svg',
          {},
          el('use', {
            xlinkHref: '#foo',
            x: 0,
            y: 0,
            width: 100,
            height: 100
          }),
          el('text', null, props.text)
        );
      }
    });

    expect(Foo.__isStateless).to.equal(true);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql(
      '<svg><use xlink:href="#foo" x="0" y="0" width="100" height="100"></use><text>foo</text></svg>'
    );
  });
  it('should render a stateless component tree with context', () => {
    const Bar = define({
      render(props, state, context) {
        return el('span', {}, context.data.bar);
      }
    });
    const Bat = define({
      render(props, state, context) {
        return el('span', {}, context.data.bat);
      }
    });
    const Foo = define({
      getChildContext() {
        return {
          data: { bar: 'bar', bat: 'bat' },
          locale: {},
          settings: {}
        };
      },
      render(props, state, context) {
        return el('div', {}, props.text, el(Bar), el(Bat));
      }
    });

    expect(Bar.__isStateless).to.equal(true);
    expect(Bat.__isStateless).to.equal(true);
    expect(Foo.__isStateless).to.equal(undefined);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql(
      '<div>foo<span>bar</span><span>bat</span></div>'
    );
  });
  it('should render a stateful component', () => {
    const Foo = define({
      state: {
        foo: 'foo'
      },
      render(props, state) {
        return el('div', {}, state.foo);
      }
    });

    expect(Foo.__isStateless).to.equal(undefined);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql('<div>foo</div>');
  });
  it('should render a stateful component with default props', () => {
    const Foo = define({
      state: {
        foo: 'bar'
      },
      defaultProps: {
        foo: 'bar'
      },
      render(props, state) {
        return el('div', {}, props.foo);
      }
    });

    expect(Foo.__isStateless).to.equal(undefined);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql('<div>bar</div>');
  });
  it('should render a stateful component with default state', () => {
    const Foo = define({
      state: {
        foo: 'bar'
      },
      render(props, state) {
        return el('div', {}, state.foo);
      }
    });

    expect(Foo.__isStateless).to.equal(undefined);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql('<div>bar</div>');
  });
  it('should render a stateful component tree with context', () => {
    const Bar = define({
      state: {
        bar: 'bar'
      },
      render(props, state, context) {
        return el('span', {}, context.data.bar);
      }
    });
    const Bat = define({
      state: {
        bat: 'bat'
      },
      render(props, state, context) {
        return el('span', {}, context.data.bat);
      }
    });
    const Foo = define({
      getChildContext() {
        return {
          data: { bar: 'bar', bat: 'bat' },
          locale: {},
          settings: {}
        };
      },
      render(props, state, context) {
        return el('div', {}, props.text, el(Bar), el(Bat));
      }
    });

    expect(Bar.__isStateless).to.equal(undefined);
    expect(Bat.__isStateless).to.equal(undefined);
    expect(Foo.__isStateless).to.equal(undefined);
    expect(ReactDOM.renderToStaticMarkup(el(Foo, { text: 'foo' }))).to.eql(
      '<div>foo<span>bar</span><span>bat</span></div>'
    );
  });
});
