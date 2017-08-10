'use strict';

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

const { createElement } = require('react');
const assign = require('object-assign');
const Component = require('./Component');
const runtime = require('@yr/runtime');

const STATIC_KEYS = ['displayName', 'defaultProps', 'propTypes'];
const RESERVED_KEYS = STATIC_KEYS.concat(['componentWillUnmount', 'render', 'state']);

module.exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  Component,
  define,
  el: createElement
};

/**
 * Convert 'specification' into a renderable component definition
 * Always returns class-based definition if 'preferStateless' is "false",
 * otherwise returns stateless function if server or no state/lifecycle methods defined
 * @param {Object} specification
 * @param {Boolean} preferStateless
 * @returns {Class|Function}
 */
function define(specification, preferStateless = true) {
  if (specification === undefined || specification.render === undefined) {
    throw Error('a component specification requires a "render" function');
  }

  const defaultProps = specification.defaultProps || {};
  const isStateless = shouldBeStateless(specification, preferStateless);
  const propTypes = specification.propTypes || {};
  const spec = {
    __bindableMethods: [],
    __componentWillUnmount: specification.componentWillUnmount,
    __render: specification.render,
    __state: specification.state !== undefined ? specification.state : {}
  };

  for (const prop in specification) {
    if (!~RESERVED_KEYS.indexOf(prop)) {
      const value = specification[prop];

      if (!isStateless && typeof value === 'function') {
        spec.__bindableMethods.push(prop);
      }
      spec[prop] = value;
    }
  }

  if (isStateless) {
    spec.render = function renderStateless(props, context) {
      return this.__render(props, this.__state, context);
    }.bind(spec);
    spec.render.__isStateless = true;
    spec.render.displayName = specification.displayName || '<statelessComponent>';
    spec.render.defaultProps = defaultProps;
    spec.render.propTypes = propTypes;
    if ('getChildContext' in specification) {
      spec.render.childContextTypes = Component.contextTypes;
    } else {
      spec.render.contextTypes = Component.contextTypes;
    }
    return spec.render;
  }

  const comp = class extends Component {};

  // Handle static class properties
  comp.displayName = specification.displayName || '<component>';
  comp.defaultProps = defaultProps;
  comp.propTypes = propTypes;
  if ('getChildContext' in specification) {
    comp.childContextTypes = Component.contextTypes;
  }

  // Copy to comp prototype
  assign(comp.prototype, spec);

  return comp;
}

/**
 * Determine if 'specification' is stateless
 * @param {Object} specification
 * @param {Boolean} preferStateless
 * @returns {Boolean}
 */
function shouldBeStateless(specification, preferStateless) {
  if (!preferStateless) {
    return false;
  }

  if (runtime.isServer && specification.getChildContext === undefined) {
    return true;
  }

  // Not stateless if contains anything more than render and static properties
  for (const prop in specification) {
    if (prop !== 'render' && !~STATIC_KEYS.indexOf(prop)) {
      return false;
    }
  }

  return true;
}