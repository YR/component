[![NPM Version](https://img.shields.io/npm/v/@yr/component.svg?style=flat)](https://npmjs.org/package/@yr/component)
[![Build Status](https://img.shields.io/travis/YR/component.svg?style=flat)](https://travis-ci.org/YR/component?branch=master)

A utility for creating performant React.js components. Includes default handling of efficient rendering, basic support for transition state management, and property validation.

## Usage

```js
const component = require('@yr/component');
const dataTypes = component.dataTypes
const el = component.el;

const comp = component.create({
  displayName: 'myComponent',

  // Validate prop types (React.PropTypes)
  data: {
    height: dataTypes.number,
    width: dataTypes.number
  },

  // Declare initial state
  state: {
    active: false,
    // Current visibility state
    visibility: component.NOT_TRANSITIONING
  },

  // Determine if component should transition
  shouldComponentTransition (nextProps, nextState) {
    return nextState.active != this.state.active;
  },

  // render() is passed 'props' and 'state' for seamless interface
  // between stateful/stateless components
  render (props, state) {
    if (state.visibility >= component.WILL_TRANSITION) {
      let className = '';

      if (state.visibility >= component.IS_TRANSITIONING) {
        className += 'js-show';
      }

      return el('div', {
        className,
        style: {
          height: `${props.height}px`,
          width: `${props.width}px`
        }
      }, 'my component');
    }
  }
});
```

### About server rendering performance

Due to the synchronous, blocking nature of React's `renderToString()`, it is important to optimize component rendering as much as possible when rendering on the server. The following steps have been taken to speed up rendering:

- use minified production bundle of `React` and `ReactDOM` (available as `component.React` and `component.ReactDOM`) to avoid calls to `process.env.NODE_ENV` and other costly development-only code
- treat all components as *stateless functions*, avoiding the costs of instantiation via `class` inheritance or `React.createClass`

> Check out this presentation by [Sasha Aickin](https://www.youtube.com/watch?feature=player_embedded&v=PnpfGy7q96U) for more great performance tips.

### About component specifications

**Component** aims to provide a performant, seamless interface for React component creation on the server and in the browser. In the browser, components subclass `React.Component` *under the hood*, while on the server, instantiation is avoided altogether by treating all components as [stateless functions](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions). In order to use the same `specification` for both these use cases, `render()` should always accept `props` and `state`, regardless of whether `this.props` or `this.state` exist. Since lifecycle methods are never called on the server, `this.props` and `this.state` will still need to be referenced in these cases.

### About mixins

The primary use case for `mixins` is to separate rendering from interactive behaviour. By conditionally `require`ing this optional behaviour in the browser, unneeded code is never loaded or evaluted on the server, and the risk of referencing `window`, `document`, or other invalid globals is reduced. For an example of this pattern, see [here](https://github.com/YR/component/blob/master/test/fixtures/testComponent.js).

Although components subclass `React.Component`, and therefore miss out on the [autobinding](https://facebook.github.io/react/docs/reusable-components.html#no-autobinding) provided by `React.createClass`, methods passed via mixins will be automatically bound to the component backing instance:

```js
const mixin = {
  onClick: function onClick () {
    console.log(this.props);
  }
};

component.create({
  render (props, state) {
    // No arrow function for 'onClick' needed here
    return component.el('button', { onClick: this.onClick }, 'click me!');
  }
}, [mixin]);
```

## API

**React**: reference to `React` library (minified bundle on server).

**ReactDOM**: reference to `ReactDOM` library (minified bundle and `ReactDOM/server` on server).

**create(specification, mixins)**: returns a factory function for creating React elements based on `specification` and `mixins`. The following apply:

- array of `mixins` are assigned to `specification`, and all non-React lifecycle methods bound to the component instance
- if `data` is defined in `specification` or `mixins`, the property types of `props` will be validated when in development mode (`process.env.NODE_ENV == 'development'`)
- if `shouldComponentUpdate` is not defined in `specification` or `mixins`, a default is defined. See [efficient renders](#efficient-renders)
- if `shouldComponentTransition` is defined in `specification` or `mixins`, transition support is enabled. See [transitioning](#transitioning)

**el(type, props, ...children)**: alias for `React.createElement`.

**stateless(specification, mixins)**: returns a factory function for creating stateless React elements (no component lifecycle methods or backing instance), though property type validation will be performed when in development mode. **Note**: *this is the default for all components on the server.*

**NOT_TRANSITIONING**: value of `0`.

**WILL_TRANSITION**: value of `1`. This value will be stored in `this.state.visibility` if `component.shouldComponentTransition` returns `true`.

**IS_TRANSITIONING**: value of `2`. This value will be stored in `this.state.visibility` immediately after `WILL_TRANSITION` has been set.

**DID_TRANSITION**: value of `3`. This value will be stored in `this.state.visibility` after `IS_TRANSITIONING` has been set and the transition duration has elapsed (default 250ms or value returned by `getTransitionDuration()`).

**dataTypes**: alias for `React.PropTypes`


### Efficient Renders

If `shouldComponentUpdate` has not been specified, a default will be called that will determine if `props` and `state` have changed and the component re-rendered. If a custom `isEqual` method is defined on `props`, it will be called with the incoming `props` object, otherwise [isEqual](https://github.com/YR/is-equal) will be used to determine changes. `state` will always be compared using `isEqual`.

### Transitioning

If `shouldComponentTransition` is specified, it will be called with incoming `props` and `state` to determine if transition state should be handled. If `true` is returned, the following event sequence will take place:

- incoming `state.visibility` will be immediately set to `WILL_TRANSITION` (`1`)
- a new render will be triggered on the next frame with `state.visibility` set to `IS_TRANSITIONING` (`2`)
- if `getTransitionDuration` is defined in `specification` or `mixins`, the value returned (in milliseconds) will be used to delay the final transition render (default is `250`)
- after duration delay has elapsed, a new render will be triggered with `state.visibility` set to `DID_TRANSITION` (`3`)
