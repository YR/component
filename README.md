A factory utility for creating React.js components. Includes default handling of efficient rendering, basic support for transition state management, and property validation.

## Usage

```js
const component = require('@yr/component')
  , React = require('react');

const comp = component({
  displayName: 'myComponent',

  // Validate prop types
  data: {
    height: React.PropTypes.number,
    width: React.PropTypes.number
  },

  // Determine if component should transition
  shouldComponentTransition (nextProps, nextState) {
    return nextState.active != this.state.active;
  },

  getInitialState () {
    return {
      active: false,
      // Current visibility state
      visibility: 0
    }
  },

  render () {
    if (this.state.visibility >= component.WILL_TRANSITION) {
      let className = '';

      if (this.state.visibility >= component.IS_TRANSITIONING) {
        className += 'js-show';
      }

      return React.DOM.div({ 
        className,
        style: { 
          height: `${this.props.height}px`, 
          width: `${this.props.width}px`
        }
      }, 'myComponent');
    }
  }
});
```

## API

**component(specification, mixins)**: returns a factory function for creating React elements based on `specification` and `mixins`. The following apply:

- array of `mixins` are simply assigned to `specification`
- if `shouldComponentUpdate` is not defined in `specification` or `mixins`, a default is defined. See [efficient renders](#efficient-renders)
- if `shouldComponentTransition` is defined in `specification` or `mixins`, transition support is enabled. See [transitioning](#transitioning)
- if `data` is defined in `specification` or `mixins`, the property types of `this.props` will be validated when in dev mode (`process.env.NODE_ENV == 'development'`)

**component.stateless(specification, mixins)**: returns a factory function for creating stateless React elements (no component lifecycle methods or backing instance), though property type validation will be performed when in dev mode.

**component.WILL_TRANSITION**: value of 1. This value will be stored in `this.state.visibility` if `component.shouldComponentTransition` returns `true`.

**component.IS_TRANSITIONING**: value of 2. This value will be stored in `this.state.visibility` immediately after `WILL_TRANSITION` has been set.

**component.DID_TRANSITION**: value of 3. This value will be stored in `this.state.visibility` after `IS_TRANSITIONING` has been set and the transition duration has elapsed (default 250ms or value returned by `getTransitionDuration`).

### Efficient Renders

If `shouldComponentUpdate` has not been specified, a default will be created that will determine if `props` and `state` have changed and the component rerendered. If a custom `isEqual` method is defined on `props`, it will be called with the incoming `props` object, otherwise [isEqual](https://github.com/YR/is-equal) will be used to determine changes. `state` will always be compared using [isEqual](https://github.com/YR/is-equal).

### Transitioning

If `shouldComponentTransition` is specified, it will be called with incoming `props` and `state` to determine if transition state should be handled. If `true` is returned, the following event sequence will take place:

- incoming `state.visibility` will be immediately set to `WILL_TRANSITION` (1)
- a new render will be triggered on the next frame with `state.visibility` set to `IS_TRANSITIONING` (2)
- if `getTransitionDuration` is defined in `specification` or `mixins`, the value returned (in milliseconds) will be used to delay the final transition render (default is `250`)
- after duration delay has elapsed, a new render will be triggered with `state.visibility` set to `DID_TRANSITION` (3)