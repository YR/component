'use strict';

/**
 * A factory utility for creating Preact components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

const { render, createElement } = require('preact');
const { render: serverRender } = require('preact-render-to-string');
const Component = require('./Component');
const PropTypes = require('prop-types');
const runtime = require('@yr/runtime');

const STATIC_KEYS = ['displayName', 'defaultProps', 'propTypes'];
const RESERVED_KEYS = STATIC_KEYS.concat(['render', 'state']);

module.exports = {
  Component,
  define,
  el: createElement,
  PropTypes,
  render: runtime.isServer ? serverRender : render
};

/**
 * Convert 'definition' into a renderable component definition
 * Always returns class-based definition if 'preferStateless' is "false",
 * otherwise returns stateless function if server or no state/lifecycle methods defined
 * @param {Object} definition
 * @param {Boolean} preferStateless
 * @returns {Class|Function}
 */
function define(definition, preferStateless = true) {
  if (definition === undefined || definition.render === undefined) {
    throw Error('a component definition requires a "render" function');
  }

  const defaultProps = definition.defaultProps || {};
  const isStateless = shouldBeStateless(definition, preferStateless);
  const propTypes = definition.propTypes || {};
  const spec = {
    __bindableMethods: [],
    __render: definition.render,
    __state: definition.state !== undefined ? definition.state : {}
  };

  for (const prop in definition) {
    if (!~RESERVED_KEYS.indexOf(prop)) {
      const value = definition[prop];

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
    spec.render.displayName = definition.displayName || '<statelessComponent>';
    spec.render.defaultProps = defaultProps;
    spec.render.propTypes = propTypes;
    if ('getChildContext' in definition) {
      spec.render.childContextTypes = Component.contextTypes;
    } else {
      spec.render.contextTypes = Component.contextTypes;
    }
    return spec.render;
  }

  const comp = class extends Component {};

  // Handle static class properties
  comp.displayName = definition.displayName || '<component>';
  comp.defaultProps = defaultProps;
  comp.propTypes = propTypes;
  if ('getChildContext' in definition) {
    comp.childContextTypes = Component.contextTypes;
  }

  // Copy to comp prototype
  Object.assign(comp.prototype, spec);

  return comp;
}

/**
 * Determine if 'definition' is stateless
 * @param {Object} definition
 * @param {Boolean} preferStateless
 * @returns {Boolean}
 */
function shouldBeStateless(definition, preferStateless) {
  if (!preferStateless) {
    return false;
  }

  if (runtime.isServer && definition.getChildContext === undefined) {
    return true;
  }

  // Not stateless if contains anything more than render and static properties
  for (const prop in definition) {
    if (prop !== 'render' && !~STATIC_KEYS.indexOf(prop)) {
      return false;
    }
  }

  return true;
}
