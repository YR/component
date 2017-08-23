[![NPM Version](https://img.shields.io/npm/v/@yr/component.svg?style=flat)](https://npmjs.org/package/@yr/component)
[![Build Status](https://img.shields.io/travis/YR/component.svg?style=flat)](https://travis-ci.org/YR/component?branch=master)

A performant, seamless interface for React-like component creation on the server and in the browser (based on [Preact](https://preactjs.com)).

## Usage

```js
const { define, el, PropTypes } = require('@yr/component');

const comp = define({
  displayName: 'myComponent',

  propTypes: {
    height: PropTypes.number,
    width: PropTypes.number
  },

  state: {
    active: false
  },

  // render() is passed 'props' and 'state' for seamless interface
  // between stateful/stateless components
  render (props, state) {
    return el('div', {
      className,
      style: {
        height: `${props.height}px`,
        width: `${props.width}px`
      }
    }
  }
});
```

### About component definitions

In general, component definitions can be broadly considered either stateful or stateless (smart or dumb, container or presentational). **Component** removes the need to consider the technical implementation of these differences by automatically creating `Class` based definitions for stateful components, and `Function` based definitions for stateless components. Stateless (functional) components are prefered due to their reduced overhead, but stateful (class) components will be defined if at least one of the following are `true`:

- `preferStateless` argument passed to `define` is `false`
- is server and `getChildContext` is defined
- additional properties/methods other than `render`, `displayName`, `defaultProps`, and `propTypes` are defined

When a `class` based stateful definition is instantiated, any methods defined will be automatically bound to that instance. In addition, regardless of the format, a component's `render` method will always be passed `props`, `state`, and `context` references.

## API

**define(definition: Object, preferStateless: Boolean): Class|Function**
Returns a component render function, or component class, based on the passed `definition`.

If `preferStateless` is `false`, a class will be returned regardless of the shape of `definition`. When `true` (the default), a function will be returned unless one of the following rules outlined [above](#about-component-definitions) apply.

**el(type: String|Class|Function, props: Object, ...children)**
Alias for `Preact.createElement`.

**PropTypes**
Reference to the [PropTypes](https://github.com/facebook/prop-types) library.

**render(component: Object[, containerNode: DOMElement[, replaceNode: DOMElement]]): [String]**
On the server, accepts a `component` object (JSX element, or result of call to `el()`), and returns a string of HTML:

```js
const { el, render } = require('@yr/component');
const html = render(el(comp, { height: 10, width: 10 }));
```

In the browser, accepts a `component` object (JSX element, or result of call to `el()`), a `containerNode` to render into, and an optional `replaceNode` to replace inside of `containerNode`:

```js
const { el, render } = require('@yr/component');
render(el(comp, { height: 10, width: 10 }), rootElement, rootElement.firstChild);
```