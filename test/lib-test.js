'use strict';

const component = require('../src/index')
  , expect = require('expect.js')
  , reactDom = require('react-dom/server')
  , runtime = require('@yr/runtime');

describe('component', () => {
  describe('stateful', () => {
    before(() => {
      runtime.isServer = false;
    });
    after(() => {
      runtime.isServer = true;
    });

    it('should return a renderable element factory', () => {
      const foo = component.create({
        render (props, state) {
          return component.el('div', {}, props.text);
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
    });
    it('should return a renderable element factory for an svg component', () => {
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
  });

  describe('stateless', () => {
    it('should return a stateless renderable element factory', () => {
      const foo = component.stateless({
        render (props, state) {
          return component.el('div', {}, props.text);
        }
      });

      expect(reactDom.renderToStaticMarkup(foo({ text: 'foo' }))).to.eql('<div>foo</div>');
    });
    it('should return a stateless renderable element factory, passing initial state', () => {
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