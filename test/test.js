'use strict';

const { Component, define, el, render } = require('../src/index');
const { expect } = require('chai');
const PropTypes = require('prop-types');

describe('component', () => {
  before(() => {
    Component.contextTypes = {
      data: PropTypes.object,
      locale: PropTypes.object,
      settings: PropTypes.object
    };
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
    expect(render(el(Foo, { text: 'foo' }))).to.eql('<div>foo</div>');
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
    expect(render(el(Foo, { text: 'foo' }))).to.eql('<div>bar</div>');
  });
  it('should render a stateless component with default state', () => {
    const Foo = define({
      state: {
        foo: 'bar'
      },
      render(props, state) {
        return el('div', {}, state.foo);
      }
    });

    expect(Foo.__isStateless).to.equal(true);
    expect(render(el(Foo, { text: 'foo' }))).to.eql('<div>bar</div>');
  });
  it('should render a stateless svg component', () => {
    const Foo = define({
      render(props, state) {
        return el(
          'svg',
          {},
          el('use', {
            'xlink:href': '#foo',
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
    expect(render(el(Foo, { text: 'foo' }))).to.eql(
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
    expect(render(el(Foo, { text: 'foo' }))).to.eql('<div>foo<span>bar</span><span>bat</span></div>');
  });
  it('should render a stateful component', () => {
    const Foo = define(
      {
        state: {
          foo: 'foo'
        },
        render(props, state) {
          return el('div', {}, state.foo);
        }
      },
      false
    );

    expect(Foo.__isStateless).to.equal(undefined);
    expect(render(el(Foo, { text: 'foo' }))).to.eql('<div>foo</div>');
  });
  it('should render a stateful component with default props', () => {
    const Foo = define(
      {
        state: {
          foo: 'bar'
        },
        defaultProps: {
          foo: 'bar'
        },
        render(props, state) {
          return el('div', {}, props.foo);
        }
      },
      false
    );

    expect(Foo.__isStateless).to.equal(undefined);
    expect(render(el(Foo, { text: 'foo' }))).to.eql('<div>bar</div>');
  });
  it('should render a stateful component with default state', () => {
    const Foo = define(
      {
        state: {
          foo: 'bar'
        },
        render(props, state) {
          return el('div', {}, state.foo);
        }
      },
      false
    );

    expect(Foo.__isStateless).to.equal(undefined);
    expect(render(el(Foo, { text: 'foo' }))).to.eql('<div>bar</div>');
  });
  it('should render a stateful component with bound lifecycle method', () => {
    const Foo = define(
      {
        state: {
          foo: 'bar'
        },
        componentWillMount() {
          this.setState({ foo: 'foo' });
        },
        render(props, state) {
          return el('div', {}, state.foo);
        }
      },
      false
    );

    expect(Foo.__isStateless).to.equal(undefined);
    expect(render(el(Foo))).to.eql('<div>foo</div>');
  });
  it('should render a stateful component with pseudo constructor', () => {
    const Foo = define({
      init(props) {
        this.state = {
          foo: 'foo'
        };
      },
      render(props, state) {
        return el('div', {}, state.foo);
      }
    });

    expect(Foo.__isStateless).to.equal(undefined);
    expect(render(el(Foo))).to.eql('<div>foo</div>');
  });
  it('should render a stateful component tree with context', () => {
    const Bar = define({
      init(props, context) {
        this.bar = context.data.bar;
      },
      render(props, state, context) {
        return el('span', {}, this.bar);
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
    const Foo = define(
      {
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
      },
      false
    );

    expect(Bar.__isStateless).to.equal(undefined);
    expect(Bat.__isStateless).to.equal(true);
    expect(Foo.__isStateless).to.equal(undefined);
    expect(render(el(Foo, { text: 'foo' }))).to.eql('<div>foo<span>bar</span><span>bat</span></div>');
  });
});
