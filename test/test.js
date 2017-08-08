'use strict';

const { create, el, stateless } = require('../src/index');
const { expect } = require('chai');
const ReactDOM = require('react-dom/server');
const runtime = require('@yr/runtime');

describe('component', () => {
  describe('stateful', () => {
    before(() => {
      runtime.isServer = false;
    });
    after(() => {
      runtime.isServer = true;
    });

    it('should return a renderable element factory', () => {
      const foo = create({
        render(props, state) {
          return el('div', {}, props.text);
        }
      });

      expect(ReactDOM.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
    });
    it('should return a renderable element factory for a component with defaultProps', () => {
      const foo = create({
        defaultProps: {
          foo: 'bar'
        },
        render(props, state) {
          return el('div', {}, props.foo);
        }
      });

      expect(ReactDOM.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>bar</div>');
    });
    it('should return a renderable element factory for a component with state', () => {
      const foo = create({
        state: {
          foo: 'bar'
        },
        render(props, state) {
          return el('div', {}, state.foo);
        }
      });

      expect(ReactDOM.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>bar</div>');
    });
    it('should return a renderable element factory for a component tree with context', () => {
      const Bar = create({
        propTypes: {},
        render(props, state, context) {
          return el('span', {}, context.data.bar);
        }
      });
      const Bat = create({
        render(props, state, context) {
          return el('span', {}, context.data.bat);
        }
      });
      const Foo = create({
        getChildContext() {
          return {
            data: { bar: 'bar', bat: 'bat' },
            locale: {},
            settings: {}
          };
        },
        render(props, state, context) {
          return el('div', {}, props.text, Bar(), Bat());
        }
      });

      expect(ReactDOM.renderToStaticMarkup(Foo({ text: 'foo' }))).to.eql('<div>foo<span>bar</span><span>bat</span></div>');
    });
    it('should return a renderable element factory for an svg component', () => {
      const foo = create({
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

      expect(ReactDOM.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql(
        '<svg><use xlink:href="#foo" x="0" y="0" width="100" height="100"></use><text>foo</text></svg>'
      );
    });
  });
});

/*
describe('component', function () {
    it('should return a renderable element factory for a component with mixins', function () {
      let fired = false;
      const foo = create({
        render (props, state) {
          this.onClick();
          return el('a', { onClick: this.onClick }, props.text);
        }
      }, [{ onClick () { fired = true; } }]);

      expect(ReactDOM.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<a>foo</a>');
      expect(fired).to.be(true);
    });
  });

  describe('stateless', function () {
    it('should return a stateless renderable element factory', function () {
      const foo = stateless({
        render (props, state) {
          return el('div', {}, props.text);
        }
      });

      expect(ReactDOM.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
    });
    it('should return a stateless renderable element factory for a component with defaultProps', function () {
      const foo = stateless({
        defaultProps: {
          foo: 'bar'
        },
        render (props, state) {
          return el('div', {}, props.foo);
        }
      });

      expect(ReactDOM.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>bar</div>');
    });
    it('should return a stateless renderable element factory, passing initial state', function () {
      const foo = stateless({
        state: {
          foo: 'bar'
        },
        render (props, state) {
          return el('div', { className: state.foo }, props.text);
        }
      });

      expect(ReactDOM.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div class="bar">foo</div>');
    });
  });
});
*/
