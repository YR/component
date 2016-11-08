'use strict';

const component = require('../src/index');
const expect = require('expect.js');
const reactDom = require('react-dom/server');
const runtime = require('@yr/runtime');

describe('component', function () {
  describe('stateful', function () {
    before(function () {
      runtime.isServer = false;
    });
    after(function () {
      runtime.isServer = true;
    });

    it('should return a renderable element factory', function () {
      const foo = component.create({
        render (props, state) {
          return component.el('div', {}, props.text);
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
    });
    it('should return a renderable element factory for a component with defaultProps', function () {
      const foo = component.create({
        defaultProps: {
          foo: 'bar'
        },
        render (props, state) {
          return component.el('div', {}, props.foo);
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>bar</div>');
    });
    it('should return a renderable element factory for a component with state', function () {
      const foo = component.create({
        state: {
          foo: 'bar'
        },
        render (props, state) {
          return component.el('div', {}, state.foo);
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>bar</div>');
    });
    it('should return a renderable element factory for an svg component', function () {
      const foo = component.create({
        render (props, state) {
          return component.el('svg', {},
            component.el('use', {
              xlinkHref: '#foo',
              x: 0,
              y: 0,
              width: 100,
              height: 100
            }),
            component.el('text', null, props.text)
          );
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<svg><use xlink:href="#foo" x="0" y="0" width="100" height="100"></use><text>foo</text></svg>');
    });
    it('should return a renderable element factory for a component with mixins', function () {
      let fired = false;
      const foo = component.create({
        render (props, state) {
          this.onClick();
          return component.el('a', { onClick: this.onClick }, props.text);
        }
      }, [{ onClick () { fired = true; } }]);

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<a>foo</a>');
      expect(fired).to.be(true);
    });
  });

  describe('stateless', function () {
    it('should return a stateless renderable element factory', function () {
      const foo = component.stateless({
        render (props, state) {
          return component.el('div', {}, props.text);
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
    });
    it('should return a stateless renderable element factory for a component with defaultProps', function () {
      const foo = component.stateless({
        defaultProps: {
          foo: 'bar'
        },
        render (props, state) {
          return component.el('div', {}, props.foo);
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>bar</div>');
    });
    it('should return a stateless renderable element factory, passing initial state', function () {
      const foo = component.stateless({
        state: {
          foo: 'bar'
        },
        render (props, state) {
          return component.el('div', { className: state.foo }, props.text);
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div class="bar">foo</div>');
    });
  });
});