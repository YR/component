'use strict';

/** BUDDY BUILT **/

if ('undefined' === typeof self) var self = this;
if ('undefined' === typeof global) var global = self;
var $m = self.$m = self.$m || {};
if ('browser' != 'browser') {
  var $req = require;
  require = function buddyRequire (id) {
    if (!$m[id]) return $req(id);
    if ('function' == typeof $m[id]) $m[id]();
    return $m[id].exports;
  };
} else {
  if ('undefined' === typeof process) var process = {browser:true, env:{NODE_ENV:'development'}};
  self.require = self.require || function buddyRequire (id) {
    if ($m[id]) {
      if ('function' == typeof $m[id]) $m[id]();
      return $m[id].exports;
    }

    if ('development' == 'development') {
      console.warn('module ' + id + ' not found');
    }
  };
}

(function () {
/*== test/fixtures/testComponentMixin.js ==*/
$m['test/fixtures/testComponentMixin'] = { exports: {} };

$m['test/fixtures/testComponentMixin'].exports = {
  shouldComponentTransition(nextProps, nextState) {
    return nextState.active != this.state.active;
  },
  onClick(evt) {
    this.setState({
      active: !this.state.active
    });
  }
};
/*≠≠ test/fixtures/testComponentMixin.js ≠≠*/


/*== node_modules/fbjs/lib/ExecutionEnvironment.js ==*/
$m['fbjs/lib/ExecutionEnvironment'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var fbjslibExecutionEnvironment__canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var fbjslibExecutionEnvironment__ExecutionEnvironment = {

  canUseDOM: fbjslibExecutionEnvironment__canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: fbjslibExecutionEnvironment__canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: fbjslibExecutionEnvironment__canUseDOM && !!window.screen,

  isInWorker: !fbjslibExecutionEnvironment__canUseDOM // For now, this is true - might change in the future.

};

$m['fbjs/lib/ExecutionEnvironment'].exports = fbjslibExecutionEnvironment__ExecutionEnvironment;
/*≠≠ node_modules/fbjs/lib/ExecutionEnvironment.js ≠≠*/


/*== node_modules/fbjs/lib/emptyFunction.js ==*/
$m['fbjs/lib/emptyFunction'] = { exports: {} };
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function fbjslibemptyFunction__makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var fbjslibemptyFunction__emptyFunction = function emptyFunction() {};

fbjslibemptyFunction__emptyFunction.thatReturns = fbjslibemptyFunction__makeEmptyFunction;
fbjslibemptyFunction__emptyFunction.thatReturnsFalse = fbjslibemptyFunction__makeEmptyFunction(false);
fbjslibemptyFunction__emptyFunction.thatReturnsTrue = fbjslibemptyFunction__makeEmptyFunction(true);
fbjslibemptyFunction__emptyFunction.thatReturnsNull = fbjslibemptyFunction__makeEmptyFunction(null);
fbjslibemptyFunction__emptyFunction.thatReturnsThis = function () {
  return this;
};
fbjslibemptyFunction__emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

$m['fbjs/lib/emptyFunction'].exports = fbjslibemptyFunction__emptyFunction;
/*≠≠ node_modules/fbjs/lib/emptyFunction.js ≠≠*/


/*== node_modules/fbjs/lib/shallowEqual.js ==*/
$m['fbjs/lib/shallowEqual'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

var fbjslibshallowEqual__hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function fbjslibshallowEqual__is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function fbjslibshallowEqual__shallowEqual(objA, objB) {
  if (fbjslibshallowEqual__is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!fbjslibshallowEqual__hasOwnProperty.call(objB, keysA[i]) || !fbjslibshallowEqual__is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

$m['fbjs/lib/shallowEqual'].exports = fbjslibshallowEqual__shallowEqual;
/*≠≠ node_modules/fbjs/lib/shallowEqual.js ≠≠*/


/*== node_modules/fbjs/lib/invariant.js ==*/
$m['fbjs/lib/invariant'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var fbjslibinvariant__validateFormat = function validateFormat(format) {};

if ('development' !== 'production') {
  fbjslibinvariant__validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function fbjslibinvariant__invariant(condition, format, a, b, c, d, e, f) {
  fbjslibinvariant__validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

$m['fbjs/lib/invariant'].exports = fbjslibinvariant__invariant;
/*≠≠ node_modules/fbjs/lib/invariant.js ≠≠*/


/*== node_modules/fbjs/lib/camelize.js ==*/
$m['fbjs/lib/camelize'] = { exports: {} };
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibcamelize___hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function fbjslibcamelize__camelize(string) {
  return string.replace(fbjslibcamelize___hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

$m['fbjs/lib/camelize'].exports = fbjslibcamelize__camelize;
/*≠≠ node_modules/fbjs/lib/camelize.js ≠≠*/


/*== node_modules/fbjs/lib/emptyObject.js ==*/
$m['fbjs/lib/emptyObject'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var fbjslibemptyObject__emptyObject = {};

if ('development' !== 'production') {
  Object.freeze(fbjslibemptyObject__emptyObject);
}

$m['fbjs/lib/emptyObject'].exports = fbjslibemptyObject__emptyObject;
/*≠≠ node_modules/fbjs/lib/emptyObject.js ≠≠*/


/*== node_modules/object-assign/index.js ==*/
$m['object-assign'] = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var objectassign__getOwnPropertySymbols = Object.getOwnPropertySymbols;
var objectassign__hasOwnProperty = Object.prototype.hasOwnProperty;
var objectassign__propIsEnumerable = Object.prototype.propertyIsEnumerable;

function objectassign__toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function objectassign__shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

$m['object-assign'].exports = objectassign__shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = objectassign__toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (objectassign__hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (objectassign__getOwnPropertySymbols) {
			symbols = objectassign__getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (objectassign__propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};
/*≠≠ node_modules/object-assign/index.js ≠≠*/


/*== node_modules/fbjs/lib/hyphenate.js ==*/
$m['fbjs/lib/hyphenate'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibhyphenate___uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function fbjslibhyphenate__hyphenate(string) {
  return string.replace(fbjslibhyphenate___uppercasePattern, '-$1').toLowerCase();
}

$m['fbjs/lib/hyphenate'].exports = fbjslibhyphenate__hyphenate;
/*≠≠ node_modules/fbjs/lib/hyphenate.js ≠≠*/


/*== node_modules/fbjs/lib/isNode.js ==*/
$m['fbjs/lib/isNode'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function fbjslibisNode__isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

$m['fbjs/lib/isNode'].exports = fbjslibisNode__isNode;
/*≠≠ node_modules/fbjs/lib/isNode.js ≠≠*/


/*== node_modules/fbjs/lib/focusNode.js ==*/
$m['fbjs/lib/focusNode'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * @param {DOMElement} node input/textarea to focus
 */

function fbjslibfocusNode__focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

$m['fbjs/lib/focusNode'].exports = fbjslibfocusNode__focusNode;
/*≠≠ node_modules/fbjs/lib/focusNode.js ≠≠*/


/*== node_modules/@yr/is-equal/index.js ==*/
$m['@yr/is-equal'] = { exports: {} };
/**
 * Determine whether two objects are conceptually equal
 * https://github.com/yr/is-equal
 * @copyright Yr
 * @license MIT
 */

/**
 * Determine if 'obj1' and 'obj2' are conceptually equal,
 * optionally ignoring properties in 'ignore'
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Array} [ignore]
 * @param {Debug} [debug]
 * @returns {Boolean}
 */

$m['@yr/is-equal'].exports = function isEqual(obj1, obj2, ignore, debug) {
  ignore = ignore || [];

  if (yrisequal__equal(obj1, obj2)) return true;

  if (yrisequal__isObject(obj1) && yrisequal__isObject(obj2)) {
    var keys1 = yrisequal__keys(obj1, ignore);
    var keys2 = yrisequal__keys(obj2, ignore);

    if (keys1.length != keys2.length) return false;

    for (var i = 0, n = keys1.length; i < n; i++) {
      var prop = keys1[i];
      var val1 = obj1[prop];
      var val2 = obj2[prop];

      if (!yrisequal__equal(val1, val2)) {
        if (debug) debug('"%s" not equal %s:%s', prop, val1, val2);
        return false;
      }
    }
    return true;
  }
  return false;
};

/**
 * Determine if 'val1' and 'val2' are equal
 * @param {Object} val1
 * @param {Object} val2
 * @returns {Boolean}
 */
function yrisequal__equal(val1, val2) {
  var type1 = typeof val1;
  var type2 = typeof val2;

  // Convert NaN to null
  if (type1 == 'number' && isNaN(val1)) val1 = null;
  if (type2 == 'number' && isNaN(val2)) val2 = null;

  return val1 === val2 ||
  // Handle null & undefined
  val1 == null && val2 == null || yrisequal__isEqualArray(val1, val2);
}

/**
 * Determine if 'obj' is an object
 * @param {Object} obj
 * @returns {Boolean}
 */
function yrisequal__isObject(obj) {
  var type = typeof obj;

  return 'object' == type && 'function' != type && !Array.isArray(obj);
}

/**
 * Retrieve non-ignored keys of 'obj'
 * @param {Object} obj
 * @param {Array} ignore
 * @returns {Array}
 */
function yrisequal__keys(obj, ignore) {
  return Object.keys(obj).filter(function (key) {
    // Ignore functions
    return 'function' != typeof obj[key] && !~ignore.indexOf(key);
  });
}

/**
 * Determine if arrays 'arr1' and 'arr2' are equal
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */
function yrisequal__isEqualArray(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    var n1 = arr1.length;
    var n2 = arr2.length;

    if (n1 != n2) return false;
    // Equal if both empty
    if (n1 == 0 && n2 == 0) return true;

    // Not equal if items not strictly equal
    for (var i = 0; i < n1; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  return false;
}
/*≠≠ node_modules/@yr/is-equal/index.js ≠≠*/


/*== node_modules/ms/index.js ==*/
$m['ms'] = { exports: {} };
/**
 * Helpers.
 */

var ms__s = 1000;
var ms__m = ms__s * 60;
var ms__h = ms__m * 60;
var ms__d = ms__h * 24;
var ms__y = ms__d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

$m['ms'].exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return ms__parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? ms__fmtLong(val) : ms__fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function ms__parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * ms__y;
    case 'days':
    case 'day':
    case 'd':
      return n * ms__d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * ms__h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * ms__m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * ms__s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function ms__fmtShort(ms) {
  if (ms >= ms__d) {
    return Math.round(ms / ms__d) + 'd';
  }
  if (ms >= ms__h) {
    return Math.round(ms / ms__h) + 'h';
  }
  if (ms >= ms__m) {
    return Math.round(ms / ms__m) + 'm';
  }
  if (ms >= ms__s) {
    return Math.round(ms / ms__s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function ms__fmtLong(ms) {
  return ms__plural(ms, ms__d, 'day') || ms__plural(ms, ms__h, 'hour') || ms__plural(ms, ms__m, 'minute') || ms__plural(ms, ms__s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function ms__plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}
/*≠≠ node_modules/ms/index.js ≠≠*/


/*== node_modules/fbjs/lib/getActiveElement.js ==*/
$m['fbjs/lib/getActiveElement'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function fbjslibgetActiveElement__getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

$m['fbjs/lib/getActiveElement'].exports = fbjslibgetActiveElement__getActiveElement;
/*≠≠ node_modules/fbjs/lib/getActiveElement.js ≠≠*/


/*== node_modules/prop-types/lib/ReactPropTypesSecret.js ==*/
$m['prop-types/lib/ReactPropTypesSecret'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypeslibReactPropTypesSecret__ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

$m['prop-types/lib/ReactPropTypesSecret'].exports = proptypeslibReactPropTypesSecret__ReactPropTypesSecret;
/*≠≠ node_modules/prop-types/lib/ReactPropTypesSecret.js ≠≠*/


/*== node_modules/performance-now/lib/performance-now.js ==*/
$m['performance-now'] = { exports: {} };
// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    $m['performance-now'].exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    $m['performance-now'].exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function () {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    $m['performance-now'].exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    $m['performance-now'].exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(undefined);
/*≠≠ node_modules/performance-now/lib/performance-now.js ≠≠*/


/*== node_modules/@yr/runtime/index.js ==*/
$m['@yr/runtime'] = { exports: {} };

/**
 * Determine if the current runtime is server or browser
 * https://github.com/yr/runtime
 * @copyright Yr
 * @license MIT
 */

var yrruntime__isServer = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
var yrruntime__isBrowser = typeof window !== 'undefined';

$m['@yr/runtime'].exports.isServer = yrruntime__isServer;
$m['@yr/runtime'].exports.isBrowser = !yrruntime__isServer && yrruntime__isBrowser;
$m['@yr/runtime'].exports.isWorker = !yrruntime__isServer && !yrruntime__isBrowser;
/*≠≠ node_modules/@yr/runtime/index.js ≠≠*/


/*== node_modules/fbjs/lib/warning.js ==*/
$m['fbjs/lib/warning'] = { exports: {} };
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var fbjslibwarning__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var fbjslibwarning__warning = fbjslibwarning__emptyFunction;

if ('development' !== 'production') {
  var fbjslibwarning__printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  fbjslibwarning__warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      fbjslibwarning__printWarning.apply(undefined, [format].concat(args));
    }
  };
}

$m['fbjs/lib/warning'].exports = fbjslibwarning__warning;
/*≠≠ node_modules/fbjs/lib/warning.js ≠≠*/


/*== node_modules/prop-types/checkPropTypes.js ==*/
$m['prop-types/checkPropTypes'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if ('development' !== 'production') {
  var proptypescheckPropTypes__invariant = $m['fbjs/lib/invariant'].exports;
  var proptypescheckPropTypes__warning = $m['fbjs/lib/warning'].exports;
  var proptypescheckPropTypes__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;
  var proptypescheckPropTypes__loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function proptypescheckPropTypes__checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ('development' !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          proptypescheckPropTypes__invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, proptypescheckPropTypes__ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        proptypescheckPropTypes__warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in proptypescheckPropTypes__loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          proptypescheckPropTypes__loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          proptypescheckPropTypes__warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

$m['prop-types/checkPropTypes'].exports = proptypescheckPropTypes__checkPropTypes;
/*≠≠ node_modules/prop-types/checkPropTypes.js ≠≠*/


/*== node_modules/react/cjs/react.development.js ==*/
$m['react/cjs/react.development'] = { exports: {} };


if ('development' !== "production") {
  (function () {

    var objectAssign$1 = $m['object-assign'].exports;
    var require$$0 = $m['fbjs/lib/warning'].exports;
    var emptyObject = $m['fbjs/lib/emptyObject'].exports;
    var invariant = $m['fbjs/lib/invariant'].exports;
    var emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
    var checkPropTypes = $m['prop-types/checkPropTypes'].exports;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule reactProdInvariant
     * 
     */

    {
      var warning = require$$0;
    }

    function warnNoop(publicInstance, callerName) {
      {
        var constructor = publicInstance.constructor;
        warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
      }
    }

    /**
     * This is the abstract API for an update queue.
     */
    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function (publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function (publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };

    var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

    /**
     * Copyright 2014-2015, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule lowPriorityWarning
     */

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.warn(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var lowPriorityWarning_1 = lowPriorityWarning;

    /**
     * Base class helpers for the updating state of a component.
     */
    function ReactComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue_1;
    }

    ReactComponent.prototype.isReactComponent = {};

    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */
    ReactComponent.prototype.setState = function (partialState, callback) {
      !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */
    ReactComponent.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };

    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */
    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };
      var defineDeprecationWarning = function (methodName, info) {
        Object.defineProperty(ReactComponent.prototype, methodName, {
          get: function () {
            lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    /**
     * Base class helpers for the updating state of a component.
     */
    function ReactPureComponent(props, context, updater) {
      // Duplicated from ReactComponent.
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue_1;
    }

    function ComponentDummy() {}
    ComponentDummy.prototype = ReactComponent.prototype;
    var pureComponentPrototype = ReactPureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = ReactPureComponent;
    // Avoid an extra prototype jump for these methods.
    objectAssign$1(pureComponentPrototype, ReactComponent.prototype);
    pureComponentPrototype.isPureReactComponent = true;

    function ReactAsyncComponent(props, context, updater) {
      // Duplicated from ReactComponent.
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue_1;
    }

    var asyncComponentPrototype = ReactAsyncComponent.prototype = new ComponentDummy();
    asyncComponentPrototype.constructor = ReactAsyncComponent;
    // Avoid an extra prototype jump for these methods.
    objectAssign$1(asyncComponentPrototype, ReactComponent.prototype);
    asyncComponentPrototype.unstable_isAsyncReactComponent = true;
    asyncComponentPrototype.render = function () {
      return this.props.children;
    };

    var ReactBaseClasses = {
      Component: ReactComponent,
      PureComponent: ReactPureComponent,
      AsyncComponent: ReactAsyncComponent
    };

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule ReactCurrentOwner
     * 
     */

    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */
    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };

    var ReactCurrentOwner_1 = ReactCurrentOwner;

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    {
      var warning$2 = require$$0;
    }

    // The Symbol used to tag the ReactElement type. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };

    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function () {
        if (!specialPropKeyWarningShown) {
          specialPropKeyWarningShown = true;
          warning$2(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function () {
        if (!specialPropRefWarningShown) {
          specialPropRefWarningShown = true;
          warning$2(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };
      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, no instanceof check
     * will work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} key
     * @param {string|object} ref
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @param {*} owner
     * @param {*} props
     * @internal
     */
    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allow us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE$1,

        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,

        // Record the component responsible for creating this element.
        _owner: owner
      };

      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {};

        // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        });
        // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        });
        // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }

      return element;
    };

    /**
     * Create and return a new ReactElement of the given type.
     * See https://facebook.github.io/react/docs/react-api.html#createelement
     */
    ReactElement.createElement = function (type, config, children) {
      var propName;

      // Reserved names are extracted
      var props = {};

      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source;
        // Remaining properties are added to a new props object
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }

      // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      }

      // Resolve default props
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }
      {
        if (key || ref) {
          if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE$1) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
    };

    /**
     * Return a function that produces ReactElements of a given type.
     * See https://facebook.github.io/react/docs/react-api.html#createfactory
     */
    ReactElement.createFactory = function (type) {
      var factory = ReactElement.createElement.bind(null, type);
      // Expose the type on the factory and the prototype so that it can be
      // easily accessed on elements. E.g. `<Foo />.type === Foo`.
      // This should not be named `constructor` since this may not be the function
      // that created the element, and it may not even be a constructor.
      // Legacy hook TODO: Warn if this is accessed
      factory.type = type;
      return factory;
    };

    ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

      return newElement;
    };

    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://facebook.github.io/react/docs/react-api.html#cloneelement
     */
    ReactElement.cloneElement = function (element, config, children) {
      var propName;

      // Original props are copied
      var props = objectAssign$1({}, element.props);

      // Reserved names are extracted
      var key = element.key;
      var ref = element.ref;
      // Self is preserved since the owner is preserved.
      var self = element._self;
      // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.
      var source = element._source;

      // Owner will be preserved, unless ref is overridden
      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner_1.current;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        // Remaining properties override existing props
        var defaultProps;
        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      }

      // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    };

    /**
     * Verifies the object is a ReactElement.
     * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a valid component.
     * @final
     */
    ReactElement.isValidElement = function (object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE$1;
    };

    var ReactElement_1 = ReactElement;

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule ReactDebugCurrentFrame
     * 
     */

    var ReactDebugCurrentFrame = {};

    {
      // Component that is being worked on
      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) {
          return impl();
        }
        return null;
      };
    }

    var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame;

    {
      var warning$1 = require$$0;

      var _require = ReactDebugCurrentFrame_1,
          getStackAddendum = _require.getStackAddendum;
    }

    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    // The Symbol used to tag the ReactElement type. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';

    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */
    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });

      return '$' + escapedString;
    }

    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */

    var didWarnAboutMaps = false;

    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
    }

    var POOL_SIZE = 10;
    var traverseContextPool = [];
    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        var traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0
        };
      }
    }

    function releaseTraverseContext(traverseContext) {
      traverseContext.result = null;
      traverseContext.keyPrefix = null;
      traverseContext.func = null;
      traverseContext.context = null;
      traverseContext.count = 0;
      if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
      }
    }

    /**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */
    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children;

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      if (children === null || type === 'string' || type === 'number' ||
      // The following is inlined from ReactElement. This means we can optimize
      // some checks. React Fiber also inlines this logic for similar purposes.
      type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
        callback(traverseContext, children,
        // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.
      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];
        if (typeof iteratorFn === 'function') {
          {
            // Warn about using Maps as children
            if (iteratorFn === children.entries) {
              warning$1(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getStackAddendum());
              didWarnAboutMaps = true;
            }
          }

          var iterator = iteratorFn.call(children);
          var step;
          var ii = 0;
          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else if (type === 'object') {
          var addendum = '';
          {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + getStackAddendum();
          }
          var childrenString = '' + children;
          invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
        }
      }

      return subtreeCount;
    }

    /**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }

      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }

    /**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */
    function getComponentKey(component, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (typeof component === 'object' && component !== null && component.key != null) {
        // Explicit key
        return escape(component.key);
      }
      // Implicit key determined by the index in the set
      return index.toString(36);
    }

    function forEachSingleChild(bookKeeping, child, name) {
      var func = bookKeeping.func,
          context = bookKeeping.context;

      func.call(context, child, bookKeeping.count++);
    }

    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */
    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }
      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
      var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;

      var mappedChild = func.call(context, child, bookKeeping.count++);
      if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
      } else if (mappedChild != null) {
        if (ReactElement_1.isValidElement(mappedChild)) {
          mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }
        result.push(mappedChild);
      }
    }

    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
      var escapedPrefix = '';
      if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
      }
      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.map
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */
    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, func, context);
      return result;
    }

    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.count
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */
    function countChildren(children, context) {
      return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
    }

    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
     */
    function toArray(children) {
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
      return result;
    }

    var ReactChildren = {
      forEach: forEachChildren,
      map: mapChildren,
      count: countChildren,
      toArray: toArray
    };

    var ReactChildren_1 = ReactChildren;

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule ReactVersion
     */

    var ReactVersion = '16.0.0-beta.3';

    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.only
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */
    function onlyChild(children) {
      !ReactElement_1.isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
      return children;
    }

    var onlyChild_1 = onlyChild;

    /**
     * Copyright 2016-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * 
     * @providesModule describeComponentFrame
     */

    var describeComponentFrame$1 = function (name, source, ownerName) {
      return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
    };

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule getComponentName
     * 
     */

    function getComponentName$1(instanceOrFiber) {
      if (typeof instanceOrFiber.getName === 'function') {
        // Stack reconciler
        var instance = instanceOrFiber;
        return instance.getName();
      }
      if (typeof instanceOrFiber.tag === 'number') {
        // Fiber reconciler
        var fiber = instanceOrFiber;
        var type = fiber.type;

        if (typeof type === 'string') {
          return type;
        }
        if (typeof type === 'function') {
          return type.displayName || type.name;
        }
      }
      return null;
    }

    var getComponentName_1 = getComponentName$1;

    {
      var checkPropTypes$1 = checkPropTypes;
      var lowPriorityWarning$1 = lowPriorityWarning_1;
      var ReactDebugCurrentFrame$1 = ReactDebugCurrentFrame_1;
      var warning$3 = require$$0;
      var describeComponentFrame = describeComponentFrame$1;
      var getComponentName = getComponentName_1;

      var currentlyValidatingElement = null;

      var getDisplayName = function (element) {
        if (element == null) {
          return '#empty';
        } else if (typeof element === 'string' || typeof element === 'number') {
          return '#text';
        } else if (typeof element.type === 'string') {
          return element.type;
        } else {
          return element.type.displayName || element.type.name || 'Unknown';
        }
      };

      var getStackAddendum$1 = function () {
        var stack = '';
        if (currentlyValidatingElement) {
          var name = getDisplayName(currentlyValidatingElement);
          var owner = currentlyValidatingElement._owner;
          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
        }
        stack += ReactDebugCurrentFrame$1.getStackAddendum() || '';
        return stack;
      };
    }

    var ITERATOR_SYMBOL$1 = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL$1 = '@@iterator'; // Before Symbol spec.

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner_1.current) {
        var name = getComponentName(ReactCurrentOwner_1.current);
        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }
      return '';
    }

    function getSourceInfoErrorAddendum(elementProps) {
      if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
        var source = elementProps.__source;
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }
      return '';
    }

    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */
    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
        if (parentName) {
          info = '\n\nCheck the top-level render call using <' + parentName + '>.';
        }
      }
      return info;
    }

    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */
    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }
      element._store.validated = true;

      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }
      ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

      // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.
      var childOwner = '';
      if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
        // Give the component that originally created this child.
        childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
      }

      currentlyValidatingElement = element;
      warning$3(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum$1());
      currentlyValidatingElement = null;
    }

    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */
    function validateChildKeys(node, parentType) {
      if (typeof node !== 'object') {
        return;
      }
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (ReactElement_1.isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (ReactElement_1.isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = ITERATOR_SYMBOL$1 && node[ITERATOR_SYMBOL$1] || node[FAUX_ITERATOR_SYMBOL$1];
        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (ReactElement_1.isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }

    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */
    function validatePropTypes(element) {
      var componentClass = element.type;
      if (typeof componentClass !== 'function') {
        return;
      }
      var name = componentClass.displayName || componentClass.name;

      // ReactNative `View.propTypes` have been deprecated in favor of `ViewPropTypes`.
      // In their place a temporary getter has been added with a deprecated warning message.
      // Avoid triggering that warning during validation using the temporary workaround,
      // __propTypesSecretDontUseThesePlease.
      // TODO (bvaughn) Revert this particular change any time after April 1 ReactNative tag.
      var propTypes = typeof componentClass.__propTypesSecretDontUseThesePlease === 'object' ? componentClass.__propTypesSecretDontUseThesePlease : componentClass.propTypes;

      if (propTypes) {
        currentlyValidatingElement = element;
        checkPropTypes$1(propTypes, element.props, 'prop', name, getStackAddendum$1);
        currentlyValidatingElement = null;
      }
      if (typeof componentClass.getDefaultProps === 'function') {
        warning$3(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
      }
    }

    var ReactElementValidator$1 = {
      createElement: function (type, props, children) {
        var validType = typeof type === 'string' || typeof type === 'function';
        // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
          var info = '';
          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in.";
          }

          var sourceInfo = getSourceInfoErrorAddendum(props);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          info += ReactDebugCurrentFrame$1.getStackAddendum() || '';

          warning$3(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
        }

        var element = ReactElement_1.createElement.apply(this, arguments);

        // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) {
          return element;
        }

        // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        validatePropTypes(element);

        return element;
      },

      createFactory: function (type) {
        var validatedFactory = ReactElementValidator$1.createElement.bind(null, type);
        // Legacy hook TODO: Warn if this is accessed
        validatedFactory.type = type;

        {
          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function () {
              lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
              Object.defineProperty(this, 'type', {
                value: type
              });
              return type;
            }
          });
        }

        return validatedFactory;
      },

      cloneElement: function (element, props, children) {
        var newElement = ReactElement_1.cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
    };

    var ReactElementValidator_1 = ReactElementValidator$1;

    {
      var warning$4 = require$$0;
    }

    function isNative(fn) {
      // Based on isNative() from Lodash
      var funcToString = Function.prototype.toString;
      var reIsNative = RegExp('^' + funcToString
      // Take an example native function source for comparison
      .call(Object.prototype.hasOwnProperty)
      // Strip regex characters so we can use it for regex
      .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
      // Remove hasOwnProperty from the template to make it generic
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      try {
        var source = funcToString.call(fn);
        return reIsNative.test(source);
      } catch (err) {
        return false;
      }
    }

    var canUseCollections =
    // Array.from
    typeof Array.from === 'function' &&
    // Map
    typeof Map === 'function' && isNative(Map) &&
    // Map.prototype.keys
    Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
    // Set
    typeof Set === 'function' && isNative(Set) &&
    // Set.prototype.keys
    Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

    var setItem;
    var getItem;
    var removeItem;
    var getItemIDs;
    var addRoot;
    var removeRoot;
    var getRootIDs;

    if (canUseCollections) {
      var itemMap = new Map();
      var rootIDSet = new Set();

      setItem = function (id, item) {
        itemMap.set(id, item);
      };
      getItem = function (id) {
        return itemMap.get(id);
      };
      removeItem = function (id) {
        itemMap['delete'](id);
      };
      getItemIDs = function () {
        return Array.from(itemMap.keys());
      };

      addRoot = function (id) {
        rootIDSet.add(id);
      };
      removeRoot = function (id) {
        rootIDSet['delete'](id);
      };
      getRootIDs = function () {
        return Array.from(rootIDSet.keys());
      };
    } else {
      var itemByKey = {};
      var rootByKey = {};

      // Use non-numeric keys to prevent V8 performance issues:
      // https://github.com/facebook/react/pull/7232
      var getKeyFromID = function (id) {
        return '.' + id;
      };
      var getIDFromKey = function (key) {
        return parseInt(key.substr(1), 10);
      };

      setItem = function (id, item) {
        var key = getKeyFromID(id);
        itemByKey[key] = item;
      };
      getItem = function (id) {
        var key = getKeyFromID(id);
        return itemByKey[key];
      };
      removeItem = function (id) {
        var key = getKeyFromID(id);
        delete itemByKey[key];
      };
      getItemIDs = function () {
        return Object.keys(itemByKey).map(getIDFromKey);
      };

      addRoot = function (id) {
        var key = getKeyFromID(id);
        rootByKey[key] = true;
      };
      removeRoot = function (id) {
        var key = getKeyFromID(id);
        delete rootByKey[key];
      };
      getRootIDs = function () {
        return Object.keys(rootByKey).map(getIDFromKey);
      };
    }

    var unmountedIDs = [];

    function purgeDeep(id) {
      var item = getItem(id);
      if (item) {
        var childIDs = item.childIDs;

        removeItem(id);
        childIDs.forEach(purgeDeep);
      }
    }

    function getDisplayName$1(element) {
      if (element == null) {
        return '#empty';
      } else if (typeof element === 'string' || typeof element === 'number') {
        return '#text';
      } else if (typeof element.type === 'string') {
        return element.type;
      } else {
        return element.type.displayName || element.type.name || 'Unknown';
      }
    }

    function describeID(id) {
      var name = ReactComponentTreeHook.getDisplayName(id);
      var element = ReactComponentTreeHook.getElement(id);
      var ownerID = ReactComponentTreeHook.getOwnerID(id);
      var ownerName = void 0;

      if (ownerID) {
        ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
      }
      warning$4(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
      return describeComponentFrame$1(name || '', element && element._source, ownerName || '');
    }

    var ReactComponentTreeHook = {
      onSetChildren: function (id, nextChildIDs) {
        var item = getItem(id);
        !item ? invariant(false, 'Item must have been set') : void 0;
        item.childIDs = nextChildIDs;

        for (var i = 0; i < nextChildIDs.length; i++) {
          var nextChildID = nextChildIDs[i];
          var nextChild = getItem(nextChildID);
          !nextChild ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
          !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
          !nextChild.isMounted ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
          if (nextChild.parentID == null) {
            nextChild.parentID = id;
            // TODO: This shouldn't be necessary but mounting a new root during in
            // componentWillMount currently causes not-yet-mounted components to
            // be purged from our tree data so their parent id is missing.
          }
          !(nextChild.parentID === id) ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
        }
      },
      onBeforeMountComponent: function (id, element, parentID) {
        var item = {
          element: element,
          parentID: parentID,
          text: null,
          childIDs: [],
          isMounted: false,
          updateCount: 0
        };
        setItem(id, item);
      },
      onBeforeUpdateComponent: function (id, element) {
        var item = getItem(id);
        if (!item || !item.isMounted) {
          // We may end up here as a result of setState() in componentWillUnmount().
          // In this case, ignore the element.
          return;
        }
        item.element = element;
      },
      onMountComponent: function (id) {
        var item = getItem(id);
        !item ? invariant(false, 'Item must have been set') : void 0;
        item.isMounted = true;
        var isRoot = item.parentID === 0;
        if (isRoot) {
          addRoot(id);
        }
      },
      onUpdateComponent: function (id) {
        var item = getItem(id);
        if (!item || !item.isMounted) {
          // We may end up here as a result of setState() in componentWillUnmount().
          // In this case, ignore the element.
          return;
        }
        item.updateCount++;
      },
      onUnmountComponent: function (id) {
        var item = getItem(id);
        if (item) {
          // We need to check if it exists.
          // `item` might not exist if it is inside an error boundary, and a sibling
          // error boundary child threw while mounting. Then this instance never
          // got a chance to mount, but it still gets an unmounting event during
          // the error boundary cleanup.
          item.isMounted = false;
          var isRoot = item.parentID === 0;
          if (isRoot) {
            removeRoot(id);
          }
        }
        unmountedIDs.push(id);
      },
      purgeUnmountedComponents: function () {
        if (ReactComponentTreeHook._preventPurging) {
          // Should only be used for testing.
          return;
        }

        for (var i = 0; i < unmountedIDs.length; i++) {
          var id = unmountedIDs[i];
          purgeDeep(id);
        }
        unmountedIDs.length = 0;
      },
      isMounted: function (id) {
        var item = getItem(id);
        return item ? item.isMounted : false;
      },
      getCurrentStackAddendum: function () {
        var info = '';
        var currentOwner = ReactCurrentOwner_1.current;
        if (currentOwner) {
          invariant(typeof currentOwner.tag !== 'number', 'Fiber owners should not show up in Stack stack traces.');
          if (typeof currentOwner._debugID === 'number') {
            info += ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);
          }
        }
        return info;
      },
      getStackAddendumByID: function (id) {
        var info = '';
        while (id) {
          info += describeID(id);
          id = ReactComponentTreeHook.getParentID(id);
        }
        return info;
      },
      getChildIDs: function (id) {
        var item = getItem(id);
        return item ? item.childIDs : [];
      },
      getDisplayName: function (id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (!element) {
          return null;
        }
        return getDisplayName$1(element);
      },
      getElement: function (id) {
        var item = getItem(id);
        return item ? item.element : null;
      },
      getOwnerID: function (id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (!element || !element._owner) {
          return null;
        }
        return element._owner._debugID;
      },
      getParentID: function (id) {
        var item = getItem(id);
        return item ? item.parentID : null;
      },
      getSource: function (id) {
        var item = getItem(id);
        var element = item ? item.element : null;
        var source = element != null ? element._source : null;
        return source;
      },
      getText: function (id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (typeof element === 'string') {
          return element;
        } else if (typeof element === 'number') {
          return '' + element;
        } else {
          return null;
        }
      },
      getUpdateCount: function (id) {
        var item = getItem(id);
        return item ? item.updateCount : 0;
      },

      getRootIDs: getRootIDs,
      getRegisteredIDs: getItemIDs
    };

    var ReactComponentTreeHook_1 = ReactComponentTreeHook;

    var createElement = ReactElement_1.createElement;
    var createFactory = ReactElement_1.createFactory;
    var cloneElement = ReactElement_1.cloneElement;

    {
      var ReactElementValidator = ReactElementValidator_1;
      createElement = ReactElementValidator.createElement;
      createFactory = ReactElementValidator.createFactory;
      cloneElement = ReactElementValidator.cloneElement;
    }

    var React = {
      Children: {
        map: ReactChildren_1.map,
        forEach: ReactChildren_1.forEach,
        count: ReactChildren_1.count,
        toArray: ReactChildren_1.toArray,
        only: onlyChild_1
      },

      Component: ReactBaseClasses.Component,
      PureComponent: ReactBaseClasses.PureComponent,
      unstable_AsyncComponent: ReactBaseClasses.AsyncComponent,

      createElement: createElement,
      cloneElement: cloneElement,
      isValidElement: ReactElement_1.isValidElement,

      createFactory: createFactory,

      version: ReactVersion,

      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentOwner: ReactCurrentOwner_1
      }
    };

    {
      objectAssign$1(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
        // These should not be included in production.
        ReactComponentTreeHook: ReactComponentTreeHook_1,
        ReactDebugCurrentFrame: ReactDebugCurrentFrame_1
      });
    }

    var ReactEntry = React;

    $m['react/cjs/react.development'].exports = ReactEntry;
  })();
}
/*≠≠ node_modules/react/cjs/react.development.js ≠≠*/


/*== node_modules/react/cjs/react.production.min.js ==*/
$m['react/cjs/react.production.min'] = { exports: {} };
"use strict";
function reactcjsreactproductionmin__e(e) {
  for (var t = arguments.length - 1, n = "Minified React error #" + reactcjsreactproductionmin__e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + reactcjsreactproductionmin__e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o = new Error(n);throw o.name = "Invariant Violation", o.framesToPop = 1, o;
}function reactcjsreactproductionmin__t(e, t) {}function reactcjsreactproductionmin__n(e, t, n) {
  this.props = e, this.context = t, this.refs = reactcjsreactproductionmin__g, this.updater = reactcjsreactproductionmin__n || reactcjsreactproductionmin__R;
}function reactcjsreactproductionmin__r(e, t, n) {
  this.props = e, this.context = t, this.refs = reactcjsreactproductionmin__g, this.updater = n || reactcjsreactproductionmin__R;
}function reactcjsreactproductionmin__o() {}function reactcjsreactproductionmin__u(e, t, n) {
  this.props = e, this.context = t, this.refs = reactcjsreactproductionmin__g, this.updater = n || reactcjsreactproductionmin__R;
}function reactcjsreactproductionmin__l(e) {
  return void 0 !== e.ref;
}function reactcjsreactproductionmin__i(e) {
  return void 0 !== e.key;
}function reactcjsreactproductionmin__c(e) {
  var t = { "=": "=0", ":": "=2" };return "$" + ("" + e).replace(/[=:]/g, function (e) {
    return t[e];
  });
}function reactcjsreactproductionmin__a(e) {
  return ("" + e).replace(reactcjsreactproductionmin__B, "$&/");
}function reactcjsreactproductionmin__f(e, t, n, r) {
  if (reactcjsreactproductionmin__Y.length) {
    var o = reactcjsreactproductionmin__Y.pop();return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o;
  }return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
}function reactcjsreactproductionmin__p(e) {
  e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, reactcjsreactproductionmin__Y.length < reactcjsreactproductionmin__W && reactcjsreactproductionmin__Y.push(e);
}function reactcjsreactproductionmin__s(e, t, n, r) {
  var o = typeof e;if ("undefined" !== o && "boolean" !== o || (e = null), null === e || "string" === o || "number" === o || "object" === o && e.$$typeof === reactcjsreactproductionmin__D) return n(r, e, "" === t ? reactcjsreactproductionmin__K + reactcjsreactproductionmin__d(e, 0) : t), 1;var u,
      l,
      i = 0,
      c = "" === t ? reactcjsreactproductionmin__K : t + reactcjsreactproductionmin__M;if (Array.isArray(e)) for (var a = 0; a < e.length; a++) u = e[a], l = c + reactcjsreactproductionmin__d(u, a), i += reactcjsreactproductionmin__s(u, l, n, r);else {
    var f = reactcjsreactproductionmin__T && e[reactcjsreactproductionmin__T] || e[reactcjsreactproductionmin__L];if ("function" == typeof f) for (var p, y = f.call(e), m = 0; !(p = y.next()).done;) u = p.value, l = c + reactcjsreactproductionmin__d(u, m++), i += reactcjsreactproductionmin__s(u, l, n, r);else if ("object" === o) {
      var h = "" + e;reactcjsreactproductionmin__C("31", "[object Object]" === h ? "object with keys {" + Object.keys(e).join(", ") + "}" : h, "");
    }
  }return i;
}function reactcjsreactproductionmin__y(e, t, n) {
  return null == e ? 0 : reactcjsreactproductionmin__s(e, "", t, n);
}function reactcjsreactproductionmin__d(e, t) {
  return "object" == typeof e && null !== e && null != e.key ? reactcjsreactproductionmin__c(e.key) : t.toString(36);
}function reactcjsreactproductionmin__m(e, t, n) {
  var r = e.func,
      o = e.context;r.call(o, t, e.count++);
}function reactcjsreactproductionmin__h(e, t, n) {
  if (null == e) return e;var r = reactcjsreactproductionmin__f(null, null, t, n);reactcjsreactproductionmin__y(e, reactcjsreactproductionmin__m, r), reactcjsreactproductionmin__p(r);
}function reactcjsreactproductionmin__v(e, t, n) {
  var r = e.result,
      o = e.keyPrefix,
      u = e.func,
      l = e.context,
      i = u.call(l, t, e.count++);Array.isArray(i) ? reactcjsreactproductionmin__b(i, r, n, reactcjsreactproductionmin__j.thatReturnsArgument) : null != i && (reactcjsreactproductionmin__N.isValidElement(i) && (i = reactcjsreactproductionmin__N.cloneAndReplaceKey(i, o + (!i.key || t && t.key === i.key ? "" : reactcjsreactproductionmin__a(i.key) + "/") + n)), r.push(i));
}function reactcjsreactproductionmin__b(e, t, n, r, o) {
  var u = "";null != n && (u = reactcjsreactproductionmin__a(n) + "/");var l = reactcjsreactproductionmin__f(t, u, r, o);reactcjsreactproductionmin__y(e, reactcjsreactproductionmin__v, l), reactcjsreactproductionmin__p(l);
}function reactcjsreactproductionmin___(e, t, n) {
  if (null == e) return e;var r = [];return reactcjsreactproductionmin__b(e, r, null, t, n), r;
}function reactcjsreactproductionmin__E(e, t) {
  return reactcjsreactproductionmin__y(e, reactcjsreactproductionmin__j.thatReturnsNull, null);
}function reactcjsreactproductionmin__S(e) {
  var t = [];return reactcjsreactproductionmin__b(e, t, null, reactcjsreactproductionmin__j.thatReturnsArgument), t;
}function reactcjsreactproductionmin__k(e) {
  return reactcjsreactproductionmin__N.isValidElement(e) || reactcjsreactproductionmin__C("143"), e;
}var reactcjsreactproductionmin__A = $m['object-assign'].exports,
    reactcjsreactproductionmin__g = $m['fbjs/lib/emptyObject'].exports;$m['fbjs/lib/invariant'].exports;var reactcjsreactproductionmin__j = $m['fbjs/lib/emptyFunction'].exports,
    reactcjsreactproductionmin__C = e,
    reactcjsreactproductionmin__P = { isMounted: function (e) {
    return !1;
  }, enqueueForceUpdate: function (e, n, r) {
    t(e, "forceUpdate");
  }, enqueueReplaceState: function (e, n, r, o) {
    t(e, "replaceState");
  }, enqueueSetState: function (e, n, r, o) {
    t(e, "setState");
  } },
    reactcjsreactproductionmin__R = reactcjsreactproductionmin__P;n.prototype.isReactComponent = {}, n.prototype.setState = function (e, t) {
  "object" != typeof e && "function" != typeof e && null != e && reactcjsreactproductionmin__C("85"), this.updater.enqueueSetState(this, e, t, "setState");
}, n.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
}, reactcjsreactproductionmin__o.prototype = n.prototype;var reactcjsreactproductionmin__x = reactcjsreactproductionmin__r.prototype = new reactcjsreactproductionmin__o();reactcjsreactproductionmin__x.constructor = reactcjsreactproductionmin__r, reactcjsreactproductionmin__A(reactcjsreactproductionmin__x, n.prototype), reactcjsreactproductionmin__x.isPureReactComponent = !0;var reactcjsreactproductionmin__w = reactcjsreactproductionmin__u.prototype = new reactcjsreactproductionmin__o();reactcjsreactproductionmin__w.constructor = reactcjsreactproductionmin__u, reactcjsreactproductionmin__A(reactcjsreactproductionmin__w, n.prototype), reactcjsreactproductionmin__w.unstable_isAsyncReactComponent = !0, reactcjsreactproductionmin__w.render = function () {
  return this.props.children;
};var reactcjsreactproductionmin__O = { Component: n, PureComponent: reactcjsreactproductionmin__r, AsyncComponent: reactcjsreactproductionmin__u },
    reactcjsreactproductionmin__q = { current: null },
    reactcjsreactproductionmin__U = reactcjsreactproductionmin__q,
    reactcjsreactproductionmin__$ = Object.prototype.hasOwnProperty,
    reactcjsreactproductionmin__F = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    reactcjsreactproductionmin__V = { key: !0, ref: !0, __self: !0, __source: !0 },
    reactcjsreactproductionmin__I = function (e, t, n, r, o, u, l) {
  return { $$typeof: reactcjsreactproductionmin__F, type: e, key: t, ref: n, props: l, _owner: u };
};reactcjsreactproductionmin__I.createElement = function (e, t, n) {
  var r,
      o = {},
      u = null,
      c = null,
      a = null,
      f = null;if (null != t) {
    reactcjsreactproductionmin__l(t) && (c = t.ref), reactcjsreactproductionmin__i(t) && (u = "" + t.key), a = void 0 === t.__self ? null : t.__self, f = void 0 === t.__source ? null : t.__source;for (r in t) reactcjsreactproductionmin__$.call(t, r) && !reactcjsreactproductionmin__V.hasOwnProperty(r) && (o[r] = t[r]);
  }var p = arguments.length - 2;if (1 === p) o.children = n;else if (p > 1) {
    for (var s = Array(p), y = 0; y < p; y++) s[y] = arguments[y + 2];o.children = s;
  }if (e && e.defaultProps) {
    var d = e.defaultProps;for (r in d) void 0 === o[r] && (o[r] = d[r]);
  }return reactcjsreactproductionmin__I(e, u, c, a, f, reactcjsreactproductionmin__U.current, o);
}, reactcjsreactproductionmin__I.createFactory = function (e) {
  var t = reactcjsreactproductionmin__I.createElement.bind(null, e);return t.type = e, t;
}, reactcjsreactproductionmin__I.cloneAndReplaceKey = function (e, t) {
  return reactcjsreactproductionmin__I(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
}, reactcjsreactproductionmin__I.cloneElement = function (e, t, n) {
  var r,
      o = reactcjsreactproductionmin__A({}, e.props),
      u = e.key,
      c = e.ref,
      a = e._self,
      f = e._source,
      p = e._owner;if (null != t) {
    reactcjsreactproductionmin__l(t) && (c = t.ref, p = reactcjsreactproductionmin__U.current), reactcjsreactproductionmin__i(t) && (u = "" + t.key);var s;e.type && e.type.defaultProps && (s = e.type.defaultProps);for (r in t) reactcjsreactproductionmin__$.call(t, r) && !reactcjsreactproductionmin__V.hasOwnProperty(r) && (void 0 === t[r] && void 0 !== s ? o[r] = s[r] : o[r] = t[r]);
  }var y = arguments.length - 2;if (1 === y) o.children = n;else if (y > 1) {
    for (var d = Array(y), m = 0; m < y; m++) d[m] = arguments[m + 2];o.children = d;
  }return reactcjsreactproductionmin__I(e.type, u, c, a, f, p, o);
}, reactcjsreactproductionmin__I.isValidElement = function (e) {
  return "object" == typeof e && null !== e && e.$$typeof === reactcjsreactproductionmin__F;
};var reactcjsreactproductionmin__N = reactcjsreactproductionmin__I,
    reactcjsreactproductionmin__T = "function" == typeof Symbol && Symbol.iterator,
    reactcjsreactproductionmin__L = "@@iterator",
    reactcjsreactproductionmin__D = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    reactcjsreactproductionmin__K = ".",
    reactcjsreactproductionmin__M = ":",
    reactcjsreactproductionmin__B = /\/+/g,
    reactcjsreactproductionmin__W = 10,
    reactcjsreactproductionmin__Y = [],
    reactcjsreactproductionmin__z = { forEach: reactcjsreactproductionmin__h, map: reactcjsreactproductionmin___, count: reactcjsreactproductionmin__E, toArray: reactcjsreactproductionmin__S },
    reactcjsreactproductionmin__G = reactcjsreactproductionmin__z,
    reactcjsreactproductionmin__H = "16.0.0-beta.3",
    reactcjsreactproductionmin__J = reactcjsreactproductionmin__k,
    reactcjsreactproductionmin__Q = reactcjsreactproductionmin__N.createElement,
    reactcjsreactproductionmin__X = reactcjsreactproductionmin__N.createFactory,
    reactcjsreactproductionmin__Z = reactcjsreactproductionmin__N.cloneElement,
    reactcjsreactproductionmin__ee = { Children: { map: reactcjsreactproductionmin__G.map, forEach: reactcjsreactproductionmin__G.forEach, count: reactcjsreactproductionmin__G.count, toArray: reactcjsreactproductionmin__G.toArray, only: reactcjsreactproductionmin__J }, Component: reactcjsreactproductionmin__O.Component, PureComponent: reactcjsreactproductionmin__O.PureComponent, unstable_AsyncComponent: reactcjsreactproductionmin__O.AsyncComponent, createElement: reactcjsreactproductionmin__Q, cloneElement: reactcjsreactproductionmin__Z, isValidElement: reactcjsreactproductionmin__N.isValidElement, createFactory: reactcjsreactproductionmin__X, version: reactcjsreactproductionmin__H, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: reactcjsreactproductionmin__U } },
    reactcjsreactproductionmin__te = reactcjsreactproductionmin__ee;$m['react/cjs/react.production.min'].exports = reactcjsreactproductionmin__te;
/*≠≠ node_modules/react/cjs/react.production.min.js ≠≠*/


/*== node_modules/react/index.js ==*/
$m['react'] = { exports: {} };

if ('development' === 'production') {
  $m['react'].exports = $m['react/cjs/react.production.min'].exports;
} else {
  $m['react'].exports = $m['react/cjs/react.development'].exports;
}
/*≠≠ node_modules/react/index.js ≠≠*/


/*== node_modules/debug/src/debug.js ==*/
$m['debug/src/debug'] = { exports: {} };

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug/src/debug'].exports = $m['debug/src/debug'].exports = debugsrcdebug__createDebug.debug = debugsrcdebug__createDebug['default'] = debugsrcdebug__createDebug;
$m['debug/src/debug'].exports.coerce = debugsrcdebug__coerce;
$m['debug/src/debug'].exports.disable = debugsrcdebug__disable;
$m['debug/src/debug'].exports.enable = debugsrcdebug__enable;
$m['debug/src/debug'].exports.enabled = debugsrcdebug__enabled;
$m['debug/src/debug'].exports.humanize = $m['ms'].exports;

/**
 * The currently active debug mode names, and names to skip.
 */

$m['debug/src/debug'].exports.names = [];
$m['debug/src/debug'].exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

$m['debug/src/debug'].exports.formatters = {};

/**
 * Previous log timestamp.
 */

var debugsrcdebug__prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function debugsrcdebug__selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return $m['debug/src/debug'].exports.colors[Math.abs(hash) % $m['debug/src/debug'].exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debugsrcdebug__createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (debugsrcdebug__prevTime || curr);
    self.diff = ms;
    self.prev = debugsrcdebug__prevTime;
    self.curr = curr;
    debugsrcdebug__prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = $m['debug/src/debug'].exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = $m['debug/src/debug'].exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    $m['debug/src/debug'].exports.formatArgs.call(self, args);

    var logFn = debug.log || $m['debug/src/debug'].exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = $m['debug/src/debug'].exports.enabled(namespace);
  debug.useColors = $m['debug/src/debug'].exports.useColors();
  debug.color = debugsrcdebug__selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof $m['debug/src/debug'].exports.init) {
    $m['debug/src/debug'].exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function debugsrcdebug__enable(namespaces) {
  $m['debug/src/debug'].exports.save(namespaces);

  $m['debug/src/debug'].exports.names = [];
  $m['debug/src/debug'].exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      $m['debug/src/debug'].exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      $m['debug/src/debug'].exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function debugsrcdebug__disable() {
  $m['debug/src/debug'].exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function debugsrcdebug__enabled(name) {
  var i, len;
  for (i = 0, len = $m['debug/src/debug'].exports.skips.length; i < len; i++) {
    if ($m['debug/src/debug'].exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = $m['debug/src/debug'].exports.names.length; i < len; i++) {
    if ($m['debug/src/debug'].exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function debugsrcdebug__coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
/*≠≠ node_modules/debug/src/debug.js ≠≠*/


/*== node_modules/debug/src/browser.js ==*/
$m['debug'] = { exports: {} };
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug'].exports = $m['debug'].exports = $m['debug/src/debug'].exports;
$m['debug'].exports.log = debug__log;
$m['debug'].exports.formatArgs = debug__formatArgs;
$m['debug'].exports.save = debug__save;
$m['debug'].exports.load = debug__load;
$m['debug'].exports.useColors = debug__useColors;
$m['debug'].exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : debug__localstorage();

/**
 * Colors.
 */

$m['debug'].exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function debug__useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

$m['debug'].exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function debug__formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + $m['debug'].exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function debug__log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function debug__save(namespaces) {
  try {
    if (null == namespaces) {
      $m['debug'].exports.storage.removeItem('debug');
    } else {
      $m['debug'].exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function debug__load() {
  var r;
  try {
    r = $m['debug'].exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

$m['debug'].exports.enable(debug__load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function debug__localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/*≠≠ node_modules/debug/src/browser.js ≠≠*/


/*== node_modules/raf/index.js ==*/
$m['raf'] = { exports: {} };
var raf__now = $m['performance-now'].exports,
    raf__root = typeof window === 'undefined' ? global : window,
    raf__vendors = ['moz', 'webkit'],
    raf__suffix = 'AnimationFrame',
    raf__raf = raf__root['request' + raf__suffix],
    raf__caf = raf__root['cancel' + raf__suffix] || raf__root['cancelRequest' + raf__suffix];

for (var raf__i = 0; !raf__raf && raf__i < raf__vendors.length; raf__i++) {
  raf__raf = raf__root[raf__vendors[raf__i] + 'Request' + raf__suffix];
  raf__caf = raf__root[raf__vendors[raf__i] + 'Cancel' + raf__suffix] || raf__root[raf__vendors[raf__i] + 'CancelRequest' + raf__suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf__raf || !raf__caf) {
  var raf__last = 0,
      raf__id = 0,
      raf__queue = [],
      raf__frameDuration = 1000 / 60;

  raf__raf = function (callback) {
    if (raf__queue.length === 0) {
      var _now = raf__now(),
          next = Math.max(0, raf__frameDuration - (_now - raf__last));
      raf__last = next + _now;
      setTimeout(function () {
        var cp = raf__queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        raf__queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(raf__last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    raf__queue.push({
      handle: ++raf__id,
      callback: callback,
      cancelled: false
    });
    return raf__id;
  };

  raf__caf = function (handle) {
    for (var i = 0; i < raf__queue.length; i++) {
      if (raf__queue[i].handle === handle) {
        raf__queue[i].cancelled = true;
      }
    }
  };
}

$m['raf'].exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf__raf.call(raf__root, fn);
};
$m['raf'].exports.cancel = function () {
  raf__caf.apply(raf__root, arguments);
};
$m['raf'].exports.polyfill = function () {
  raf__root.requestAnimationFrame = raf__raf;
  raf__root.cancelAnimationFrame = raf__caf;
};
/*≠≠ node_modules/raf/index.js ≠≠*/


/*== node_modules/@yr/clock/index.js ==*/
$m['@yr/clock'] = { exports: {} };

/**
 * A global timer utility for managing immediate/timeout intervals
 * https://github.com/yr/clock
 * @copyright Yr
 * @license MIT
 */

var yrclock__debugFactory = $m['debug'].exports;
var yrclock__raf = $m['raf'].exports;
var yrclock__now = $m['performance-now'].exports;

var yrclock__INTERVAL_CUTOFF = 1000;
var yrclock__INTERVAL_MAX = 600000;

var yrclock__debug = yrclock__debugFactory('yr:clock');
var yrclock__isDev = 'development' === 'development';
var yrclock__resolved = Promise.resolve();
var yrclock__timeoutQueue = [];
var yrclock__hasNextTick = typeof process !== 'undefined' && 'nextTick' in process;
var yrclock__runRafId = 0;
var yrclock__runTimeoutId = 0;
var yrclock__uid = 0;

$m['@yr/clock'].exports = {
  /**
   * Initialize with visibility api "features"
   * @param {Object} features
   */
  init: function init(features) {
    var nextTick = features.nextTick,
        hidden = features.hidden,
        visibilityChange = features.visibilityChange;

    // Register for visibilityChange event

    if (hidden !== undefined && visibilityChange !== undefined) {
      document.addEventListener(visibilityChange, yrclock__onVisibilityChangeFactory(hidden), false);
    }
    // Disable nextTick (testing)
    if (nextTick !== undefined && !nextTick) {
      yrclock__hasNextTick = false;
    }
  },

  /**
   * Call 'fn' on next tick
   * @param {Function} fn
   */
  immediate: function immediate(fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (yrclock__hasNextTick) {
      var _process;

      (_process = process).nextTick.apply(_process, [fn].concat(args));
    } else {
      yrclock__resolved.then(function () {
        fn.apply(undefined, args);
      });
    }
  },

  /**
   * Call 'fn' on next animation frame
   * @param {Function} fn
   * @returns {Number}
   */
  frame: function frame(fn) {
    return yrclock__raf(fn);
  },

  /**
   * Call 'fn' after 'duration'
   * @param {Number} duration - ms
   * @param {Function} fn
   * @param {String} [id]
   * @returns {String|Number|Object}
   */
  timeout: function timeout(duration, fn, id) {
    for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      args[_key2 - 3] = arguments[_key2];
    }

    if (duration <= 0) {
      return this.immediate.apply(this, [fn].concat(args));
    }

    id = id || 'c::' + ++yrclock__uid;
    var time = yrclock__now() + duration;
    var exists = false;

    // Recycle existing
    for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
      if (yrclock__timeoutQueue[i].id === id) {
        yrclock__timeoutQueue[i].fn = fn;
        yrclock__timeoutQueue[i].args = args;
        yrclock__timeoutQueue[i].time = time;
        yrclock__timeoutQueue[i].cancelled = false;
        exists = true;
        break;
      }
    }
    if (!exists) {
      yrclock__timeoutQueue.push({ id: id, fn: fn, args: args, time: time, cancelled: false });
    }

    if (yrclock__isDev) {
      var date = new Date();

      date.setMilliseconds(date.getMilliseconds() + duration);
      yrclock__debug('timeout scheduled for "%s" at %s', id, date.toLocaleTimeString());
    }

    yrclock__run();

    return id;
  },

  /**
   * Cancel frame/timeout with 'id'
   * @param {String|Number} id
   */
  cancel: function cancel(id) {
    if (id === undefined) {
      return;
    }

    switch (typeof id) {
      // Frame
      case 'number':
        yrclock__debug('frame canceled for "%d"', id);
        yrclock__raf.cancel(id);
        break;
      // Timeout
      case 'string':
        for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
          if (yrclock__timeoutQueue[i].id === id) {
            yrclock__debug('timeout canceled for "%s"', id);
            yrclock__timeoutQueue[i].cancelled = true;
            break;
          }
        }
    }
  }
};

/**
 * Process outstanding queue items
 */
function yrclock__run() {
  var current = yrclock__now();
  var queue = yrclock__timeoutQueue.slice();
  var interval = yrclock__INTERVAL_MAX;

  yrclock__timeoutQueue.length = 0;

  // Reset
  if (yrclock__runRafId > 0 || yrclock__runTimeoutId > 0) {
    yrclock__stop();
  }

  for (var i = queue.length - 1; i >= 0; i--) {
    var item = queue[i];

    if (!item.cancelled) {
      var duration = item.time - current;

      if (duration <= 0) {
        if (yrclock__isDev) {
          yrclock__debug('timeout triggered for "%s" at %s', item.id, new Date().toLocaleTimeString());
        }
        item.fn.apply(item.fn, item.args);
      } else {
        // Store smallest duration
        if (duration < interval) {
          interval = duration;
        }
        yrclock__timeoutQueue.push(item);
      }
    }
  }

  // Loop
  if (yrclock__timeoutQueue.length > 0) {
    // Use raf if requested interval is less than cutoff
    if (interval < yrclock__INTERVAL_CUTOFF) {
      yrclock__runRafId = yrclock__raf(yrclock__run);
    } else {
      yrclock__runTimeoutId = setTimeout(yrclock__run, interval);
    }
  }
}

/**
 * Stop running
 */
function yrclock__stop() {
  if (yrclock__runRafId > 0) {
    yrclock__raf.cancel(yrclock__runRafId);
    yrclock__runRafId = 0;
  } else if (yrclock__runTimeoutId > 0) {
    clearTimeout(yrclock__runTimeoutId);
    yrclock__runTimeoutId = 0;
  }
}

/**
 * Generate visibilityChange handler
 * @param {String} hidden
 * @returns {Function}
 */
function yrclock__onVisibilityChangeFactory(hidden) {
  return function onVisibilityChange(evt) {
    if (document[hidden]) {
      yrclock__debug('disable while hidden');
      yrclock__stop();
    } else {
      yrclock__debug('enable while visible');
      if ('development' === 'development') {
        var current = yrclock__now();

        for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
          var item = yrclock__timeoutQueue[i];

          if (item.time <= current) {
            yrclock__debug('timeout should trigger for "%s"', item.id);
          } else {
            var date = new Date();

            date.setMilliseconds(date.getMilliseconds() + item.time - current);
            yrclock__debug('timeout for "%s" expected at %s', item.id, date.toLocaleTimeString());
          }
        }
      }
      yrclock__run();
    }
  };
}
/*≠≠ node_modules/@yr/clock/index.js ≠≠*/


/*== src/lib/Component.js ==*/
$m['src/lib/Component'] = { exports: {} };

/**
 * Base component class (client)
 */

const srclibComponent__React = $m['react'].exports;
const srclibComponent__assign = $m['object-assign'].exports;
const srclibComponent__clock = $m['@yr/clock'].exports;
const srclibComponent__Debug = $m['debug'].exports;
const srclibComponent__isEqual = $m['@yr/is-equal'].exports;

const srclibComponent__DEFAULT_TRANSITION_DURATION = 250;
const srclibComponent__TIMEOUT = 20;

const srclibComponent__debug = srclibComponent__Debug('yr:component');

$m['src/lib/Component'].exports = class Component extends srclibComponent__React.Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props, context) {
    super(props, context);
    console.log(context);

    this.__timerID = 0;
    this.__transitionDuration = 'getTransitionDuration' in this ? this.getTransitionDuration() : srclibComponent__DEFAULT_TRANSITION_DURATION;
    // Set up initial state
    this.state = srclibComponent__assign({}, this.__state);
    // Autobind mixin methods
    if (this.__bindableMethods) {
      this.__bindableMethods.forEach(method => {
        this[method] = this[method].bind(this);
      });
    }
  }

  /**
   * React: render
   * @returns {React}
   */
  render() {
    return this.__render(this.props, this.state);
  }

  /**
   * React: shouldComponentUpdate
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    let changed = 'isEqual' in nextProps ? !this.props.isEqual(nextProps) : !srclibComponent__isEqual(nextProps, this.props, null, srclibComponent__debug);

    if (!changed) {
      changed = !srclibComponent__isEqual(nextState, this.state, null, srclibComponent__debug);
      if (changed) srclibComponent__debug('state changed for %s', this.displayName);
    } else {
      srclibComponent__debug('props changed for %s', this.displayName);
    }

    if (changed && this.shouldComponentTransition(nextProps, nextState)) {
      this.willTransition(nextState);
    }

    return changed;
  }

  /**
   * Determine if component should transition based on 'nextProps' or 'nextState'
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */
  shouldComponentTransition(nextProps, nextState) {
    return false;
  }

  /**
   * Update 'state' for transition
   * @param {Object} state
   */
  willTransition(state) {
    if (this.__timerID) srclibComponent__clock.cancel(this.__timerID);

    // Generally a bad idea...
    state.visibility = !state.visibility ? 1 : 2;

    // frame/immediate doesn't leave enough time for redraw between states
    this.__timerID = srclibComponent__clock.timeout(srclibComponent__TIMEOUT, () => {
      this.isTransitioning();
    });
  }

  /**
   * Trigger transition state change
   */
  isTransitioning() {
    this.setState({
      visibility: this.state.visibility == 1 ? 2 : 1
    });

    this.__timerID = srclibComponent__clock.timeout(this.__transitionDuration, () => {
      this.didTransition();
    });
  }

  /**
   * Trigger transition state change
   */
  didTransition() {
    this.__timerID = 0;

    this.setState({
      visibility: this.state.visibility == 2 ? 3 : 0
    });
  }

  /**
   * React: componentWillUnmount
   */
  componentWillUnmount() {
    // Reset
    if (this.state && this.state.visibility) this.state.visibility = 0;
    if (this.__timerID) srclibComponent__clock.cancel(this.__timerID);
    if (this.__componentWillUnmount) this.__componentWillUnmount();
  }
};
/*≠≠ src/lib/Component.js ≠≠*/


/*== src/index.js ==*/
$m['src/index'] = { exports: {} };

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

const srcindex__assign = $m['object-assign'].exports;
const srcindex__Component = $m['src/lib/Component'].exports;
const srcindex__React = $m['react'].exports;
const srcindex__runtime = $m['@yr/runtime'].exports;

const srcindex__LIFECYCLE_METHODS = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];
const srcindex__PROXY_KEYS = ['componentWillUnmount', 'render', 'state'];
const srcindex__RESERVED_METHODS = srcindex__LIFECYCLE_METHODS.concat(['render', 'shouldComponentUpdate', 'shouldComponentTransition', 'getTransitionDuration']);

$m['src/index'].exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  dataTypes: srcindex__React.PropTypes,
  el: srcindex__React.createElement,

  /**
   * Convert 'specification' into React component class,
   * returning React element factory
   * @param {Object} specification
   * @returns {Function}
   */
  create(specification) {
    if (srcindex__runtime.isServer) {
      return this.stateless(specification);
    }

    const comp = class extends srcindex__Component {};

    comp.displayName = specification.displayName || '<component>';
    delete specification.displayName;

    // Rename select keys to prevent overwriting
    srcindex__proxyKeys(specification, srcindex__PROXY_KEYS);
    // Copy to comp prototype
    srcindex__assign(comp.prototype, specification);

    return function createElement(props, ...children) {
      srcindex__processProps(props, specification);

      return srcindex__React.createElement(comp, props, ...children);
    };
  },

  /**
   * Stateless component factory
   * @param {Object} specification
   * @returns {Function}
   */
  stateless(specification) {
    return function createStatelessElement(props) {
      srcindex__processProps(props, specification);

      // Send in initial state
      return specification.render(props, specification.state || {});
    };
  }
};

/**
 * Proxy 'keys' of 'obj'
 * @param {Object} obj
 * @param {Array} keys
 */
function srcindex__proxyKeys(obj, keys) {
  keys.forEach(key => {
    if (key in obj) {
      obj[`__${key}`] = obj[key];
      delete obj[key];
    }
  });
}

/**
 * Process 'props'
 * @param {Props} props
 * @param {Object} specification
 */
function srcindex__processProps(props, specification) {
  props = props || {};
  const { data, defaultProps, displayName } = specification;

  // Extract missing props defined in 'data'
  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  // Copy default props
  if (defaultProps) {
    for (const prop in defaultProps) {
      if (props[prop] == null) props[prop] = defaultProps[prop];
    }
  }

  if (!data) return;

  /*   if ('development' == 'development' && 'browser' == 'browser') {
      const ReactSecret = require('react/lib/ReactPropTypesSecret');
  
      // Validate prop types
      for (const key in data) {
        const err = data[key](props, key, displayName, 'data property', key, ReactSecret);
  
        if (err) console.error(err);
      }
    }
   */
}
/*≠≠ src/index.js ≠≠*/


/*== test/fixtures/testComponent.js ==*/
$m['test/fixtures/testComponent'] = { exports: {} };

const testfixturestestComponent__component = $m['src/index'].exports;
const testfixturestestComponent__runtime = $m['@yr/runtime'].exports;

const testfixturestestComponent__el = testfixturestestComponent__component.el;
const testfixturestestComponent__mixins = testfixturestestComponent__runtime.isBrowser ? [$m['test/fixtures/testComponentMixin'].exports] : [];

$m['test/fixtures/testComponent'].exports.create = function create() {
  return testfixturestestComponent__component.create({
    state: {
      active: false,
      visibility: 0
    },
    render(props, state) {
      return testfixturestestComponent__el('div', {}, testfixturestestComponent__el('button', { onClick: this.onClick }, props.label), this.renderPanel(props, state));
    },
    renderPanel(props, state) {
      if (state.visibility > 0) {
        let className = 'panel';

        if (this.state.visibility > 1) className += ' js-show';
        return testfixturestestComponent__el('div', { className });
      }
    }
  }, testfixturestestComponent__mixins);
};
/*≠≠ test/fixtures/testComponent.js ≠≠*/


/*== node_modules/fbjs/lib/isTextNode.js ==*/
$m['fbjs/lib/isTextNode'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibisTextNode__isNode = $m['fbjs/lib/isNode'].exports;

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function fbjslibisTextNode__isTextNode(object) {
  return fbjslibisTextNode__isNode(object) && object.nodeType == 3;
}

$m['fbjs/lib/isTextNode'].exports = fbjslibisTextNode__isTextNode;
/*≠≠ node_modules/fbjs/lib/isTextNode.js ≠≠*/


/*== node_modules/fbjs/lib/containsNode.js ==*/
$m['fbjs/lib/containsNode'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var fbjslibcontainsNode__isTextNode = $m['fbjs/lib/isTextNode'].exports;

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function fbjslibcontainsNode__containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (fbjslibcontainsNode__isTextNode(outerNode)) {
    return false;
  } else if (fbjslibcontainsNode__isTextNode(innerNode)) {
    return fbjslibcontainsNode__containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

$m['fbjs/lib/containsNode'].exports = fbjslibcontainsNode__containsNode;
/*≠≠ node_modules/fbjs/lib/containsNode.js ≠≠*/


/*== node_modules/prop-types/factoryWithThrowingShims.js ==*/
$m['prop-types/factoryWithThrowingShims'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypesfactoryWithThrowingShims__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var proptypesfactoryWithThrowingShims__invariant = $m['fbjs/lib/invariant'].exports;
var proptypesfactoryWithThrowingShims__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;

$m['prop-types/factoryWithThrowingShims'].exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === proptypesfactoryWithThrowingShims__ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    proptypesfactoryWithThrowingShims__invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = proptypesfactoryWithThrowingShims__emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/*≠≠ node_modules/prop-types/factoryWithThrowingShims.js ≠≠*/


/*== node_modules/prop-types/factoryWithTypeCheckers.js ==*/
$m['prop-types/factoryWithTypeCheckers'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypesfactoryWithTypeCheckers__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var proptypesfactoryWithTypeCheckers__invariant = $m['fbjs/lib/invariant'].exports;
var proptypesfactoryWithTypeCheckers__warning = $m['fbjs/lib/warning'].exports;

var proptypesfactoryWithTypeCheckers__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;
var proptypesfactoryWithTypeCheckers__checkPropTypes = $m['prop-types/checkPropTypes'].exports;

$m['prop-types/factoryWithTypeCheckers'].exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ('development' !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== proptypesfactoryWithTypeCheckers__ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          proptypesfactoryWithTypeCheckers__invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if ('development' !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            proptypesfactoryWithTypeCheckers__warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      'development' !== 'production' ? proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      'development' !== 'production' ? proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = proptypesfactoryWithTypeCheckers__checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/*≠≠ node_modules/prop-types/factoryWithTypeCheckers.js ≠≠*/


/*== node_modules/prop-types/index.js ==*/
$m['prop-types'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if ('development' !== 'production') {
  var proptypes__REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var proptypes__isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === proptypes__REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var proptypes__throwOnDirectAccess = true;
  $m['prop-types'].exports = $m['prop-types/factoryWithTypeCheckers'].exports(proptypes__isValidElement, proptypes__throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  $m['prop-types'].exports = $m['prop-types/factoryWithThrowingShims'].exports();
}
/*≠≠ node_modules/prop-types/index.js ≠≠*/


/*== node_modules/fbjs/lib/performance.js ==*/
$m['fbjs/lib/performance'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibperformance__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var fbjslibperformance__performance;

if (fbjslibperformance__ExecutionEnvironment.canUseDOM) {
  fbjslibperformance__performance = window.performance || window.msPerformance || window.webkitPerformance;
}

$m['fbjs/lib/performance'].exports = fbjslibperformance__performance || {};
/*≠≠ node_modules/fbjs/lib/performance.js ≠≠*/


/*== node_modules/fbjs/lib/performanceNow.js ==*/
$m['fbjs/lib/performanceNow'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibperformanceNow__performance = $m['fbjs/lib/performance'].exports;

var fbjslibperformanceNow__performanceNow;

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (fbjslibperformanceNow__performance.now) {
  fbjslibperformanceNow__performanceNow = function performanceNow() {
    return fbjslibperformanceNow__performance.now();
  };
} else {
  fbjslibperformanceNow__performanceNow = function performanceNow() {
    return Date.now();
  };
}

$m['fbjs/lib/performanceNow'].exports = fbjslibperformanceNow__performanceNow;
/*≠≠ node_modules/fbjs/lib/performanceNow.js ≠≠*/


/*== node_modules/fbjs/lib/camelizeStyleName.js ==*/
$m['fbjs/lib/camelizeStyleName'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibcamelizeStyleName__camelize = $m['fbjs/lib/camelize'].exports;

var fbjslibcamelizeStyleName__msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function fbjslibcamelizeStyleName__camelizeStyleName(string) {
  return fbjslibcamelizeStyleName__camelize(string.replace(fbjslibcamelizeStyleName__msPattern, 'ms-'));
}

$m['fbjs/lib/camelizeStyleName'].exports = fbjslibcamelizeStyleName__camelizeStyleName;
/*≠≠ node_modules/fbjs/lib/camelizeStyleName.js ≠≠*/


/*== node_modules/fbjs/lib/hyphenateStyleName.js ==*/
$m['fbjs/lib/hyphenateStyleName'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibhyphenateStyleName__hyphenate = $m['fbjs/lib/hyphenate'].exports;

var fbjslibhyphenateStyleName__msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function fbjslibhyphenateStyleName__hyphenateStyleName(string) {
  return fbjslibhyphenateStyleName__hyphenate(string).replace(fbjslibhyphenateStyleName__msPattern, '-ms-');
}

$m['fbjs/lib/hyphenateStyleName'].exports = fbjslibhyphenateStyleName__hyphenateStyleName;
/*≠≠ node_modules/fbjs/lib/hyphenateStyleName.js ≠≠*/


/*== node_modules/fbjs/lib/EventListener.js ==*/
$m['fbjs/lib/EventListener'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibEventListener__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var fbjslibEventListener__EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if ('development' !== 'production') {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: fbjslibEventListener__emptyFunction
      };
    }
  },

  registerDefault: function registerDefault() {}
};

$m['fbjs/lib/EventListener'].exports = fbjslibEventListener__EventListener;
/*≠≠ node_modules/fbjs/lib/EventListener.js ≠≠*/


/*== node_modules/react-dom/cjs/react-dom.development.js ==*/
$m['react-dom/cjs/react-dom.development'] = { exports: {} };
if('development'!=="production"){(function(){var ExecutionEnvironment=$m['fbjs/lib/ExecutionEnvironment'].exports;var _assign=$m['object-assign'].exports;var invariant=$m['fbjs/lib/invariant'].exports;var EventListener=$m['fbjs/lib/EventListener'].exports;var react=$m['react'].exports;var require$$0=$m['fbjs/lib/warning'].exports;var hyphenateStyleName=$m['fbjs/lib/hyphenateStyleName'].exports;var emptyFunction=$m['fbjs/lib/emptyFunction'].exports;var camelizeStyleName=$m['fbjs/lib/camelizeStyleName'].exports;var performanceNow=$m['fbjs/lib/performanceNow'].exports;var propTypes=$m['prop-types'].exports;var emptyObject=$m['fbjs/lib/emptyObject'].exports;var checkPropTypes=$m['prop-types/checkPropTypes'].exports;var shallowEqual=$m['fbjs/lib/shallowEqual'].exports;var containsNode=$m['fbjs/lib/containsNode'].exports;var focusNode=$m['fbjs/lib/focusNode'].exports;var getActiveElement=$m['fbjs/lib/getActiveElement'].exports;/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule reactProdInvariant
 * 
 *//**
 * Injectable ordering of event plugins.
 */var eventPluginOrder=null;/**
 * Injectable mapping from names to event plugin modules.
 */var namesToPlugins={};/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */function recomputePluginOrdering(){if(!eventPluginOrder){// Wait until an `eventPluginOrder` is injected.
return;}for(var pluginName in namesToPlugins){var pluginModule=namesToPlugins[pluginName];var pluginIndex=eventPluginOrder.indexOf(pluginName);!(pluginIndex>-1)?invariant(false,'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.',pluginName):void 0;if(EventPluginRegistry.plugins[pluginIndex]){continue;}!pluginModule.extractEvents?invariant(false,'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.',pluginName):void 0;EventPluginRegistry.plugins[pluginIndex]=pluginModule;var publishedEvents=pluginModule.eventTypes;for(var eventName in publishedEvents){!publishEventForPlugin(publishedEvents[eventName],pluginModule,eventName)?invariant(false,'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):void 0;}}}/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */function publishEventForPlugin(dispatchConfig,pluginModule,eventName){!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.',eventName):void 0;EventPluginRegistry.eventNameDispatchConfigs[eventName]=dispatchConfig;var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;if(phasedRegistrationNames){for(var phaseName in phasedRegistrationNames){if(phasedRegistrationNames.hasOwnProperty(phaseName)){var phasedRegistrationName=phasedRegistrationNames[phaseName];publishRegistrationName(phasedRegistrationName,pluginModule,eventName);}}return true;}else if(dispatchConfig.registrationName){publishRegistrationName(dispatchConfig.registrationName,pluginModule,eventName);return true;}return false;}/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */function publishRegistrationName(registrationName,pluginModule,eventName){!!EventPluginRegistry.registrationNameModules[registrationName]?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.',registrationName):void 0;EventPluginRegistry.registrationNameModules[registrationName]=pluginModule;EventPluginRegistry.registrationNameDependencies[registrationName]=pluginModule.eventTypes[eventName].dependencies;{var lowerCasedName=registrationName.toLowerCase();EventPluginRegistry.possibleRegistrationNames[lowerCasedName]=registrationName;if(registrationName==='onDoubleClick'){EventPluginRegistry.possibleRegistrationNames.ondblclick=registrationName;}}}/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */var EventPluginRegistry={/**
   * Ordered list of injected plugins.
   */plugins:[],/**
   * Mapping from event name to dispatch config
   */eventNameDispatchConfigs:{},/**
   * Mapping from registration name to plugin module
   */registrationNameModules:{},/**
   * Mapping from registration name to event name
   */registrationNameDependencies:{},/**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in true.
   * @type {Object}
   */possibleRegistrationNames:{},// Trust the developer to only use possibleRegistrationNames in true
/**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */injectEventPluginOrder:function(injectedEventPluginOrder){!!eventPluginOrder?invariant(false,'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.'):void 0;// Clone the ordering so it cannot be dynamically mutated.
eventPluginOrder=Array.prototype.slice.call(injectedEventPluginOrder);recomputePluginOrdering();},/**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */injectEventPluginsByName:function(injectedNamesToPlugins){var isOrderingDirty=false;for(var pluginName in injectedNamesToPlugins){if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){continue;}var pluginModule=injectedNamesToPlugins[pluginName];if(!namesToPlugins.hasOwnProperty(pluginName)||namesToPlugins[pluginName]!==pluginModule){!!namesToPlugins[pluginName]?invariant(false,'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.',pluginName):void 0;namesToPlugins[pluginName]=pluginModule;isOrderingDirty=true;}}if(isOrderingDirty){recomputePluginOrdering();}}};var EventPluginRegistry_1=EventPluginRegistry;/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */var oneArgumentPooler=function(copyFieldsFrom){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,copyFieldsFrom);return instance;}else{return new Klass(copyFieldsFrom);}};var twoArgumentPooler=function(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else{return new Klass(a1,a2);}};var threeArgumentPooler=function(a1,a2,a3){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3);return instance;}else{return new Klass(a1,a2,a3);}};var fourArgumentPooler=function(a1,a2,a3,a4){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4);return instance;}else{return new Klass(a1,a2,a3,a4);}};var standardReleaser=function(instance){var Klass=this;!(instance instanceof Klass)?invariant(false,'Trying to release an instance into a pool of a different type.'):void 0;instance.destructor();if(Klass.instancePool.length<Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=oneArgumentPooler;/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */var addPoolingTo=function(CopyConstructor,pooler){// Casting as any so that flow ignores the actual implementation and trusts
// it to match the type we declared
var NewKlass=CopyConstructor;NewKlass.instancePool=[];NewKlass.getPooled=pooler||DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize=DEFAULT_POOL_SIZE;}NewKlass.release=standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fourArgumentPooler:fourArgumentPooler};var PooledClass_1=PooledClass;function checkMask(value,bitmask){return(value&bitmask)===bitmask;}var DOMPropertyInjection={/**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */MUST_USE_PROPERTY:0x1,HAS_BOOLEAN_VALUE:0x4,HAS_NUMERIC_VALUE:0x8,HAS_POSITIVE_NUMERIC_VALUE:0x10|0x8,HAS_OVERLOADED_BOOLEAN_VALUE:0x20,/**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */injectDOMPropertyConfig:function(domPropertyConfig){var Injection=DOMPropertyInjection;var Properties=domPropertyConfig.Properties||{};var DOMAttributeNamespaces=domPropertyConfig.DOMAttributeNamespaces||{};var DOMAttributeNames=domPropertyConfig.DOMAttributeNames||{};var DOMPropertyNames=domPropertyConfig.DOMPropertyNames||{};var DOMMutationMethods=domPropertyConfig.DOMMutationMethods||{};if(domPropertyConfig.isCustomAttribute){DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);}for(var propName in Properties){!!DOMProperty.properties.hasOwnProperty(propName)?invariant(false,'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.',propName):void 0;var lowerCased=propName.toLowerCase();var propConfig=Properties[propName];var propertyInfo={attributeName:lowerCased,attributeNamespace:null,propertyName:propName,mutationMethod:null,mustUseProperty:checkMask(propConfig,Injection.MUST_USE_PROPERTY),hasBooleanValue:checkMask(propConfig,Injection.HAS_BOOLEAN_VALUE),hasNumericValue:checkMask(propConfig,Injection.HAS_NUMERIC_VALUE),hasPositiveNumericValue:checkMask(propConfig,Injection.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:checkMask(propConfig,Injection.HAS_OVERLOADED_BOOLEAN_VALUE)};!(propertyInfo.hasBooleanValue+propertyInfo.hasNumericValue+propertyInfo.hasOverloadedBooleanValue<=1)?invariant(false,'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s',propName):void 0;{DOMProperty.getPossibleStandardName[lowerCased]=propName;}if(DOMAttributeNames.hasOwnProperty(propName)){var attributeName=DOMAttributeNames[propName];propertyInfo.attributeName=attributeName;{DOMProperty.getPossibleStandardName[attributeName]=propName;}}if(DOMAttributeNamespaces.hasOwnProperty(propName)){propertyInfo.attributeNamespace=DOMAttributeNamespaces[propName];}if(DOMPropertyNames.hasOwnProperty(propName)){propertyInfo.propertyName=DOMPropertyNames[propName];}if(DOMMutationMethods.hasOwnProperty(propName)){propertyInfo.mutationMethod=DOMMutationMethods[propName];}DOMProperty.properties[propName]=propertyInfo;}}};/* eslint-disable max-len */var ATTRIBUTE_NAME_START_CHAR=':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';/* eslint-enable max-len *//**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */var DOMProperty={ID_ATTRIBUTE_NAME:'data-reactid',ROOT_ATTRIBUTE_NAME:'data-reactroot',ATTRIBUTE_NAME_START_CHAR:ATTRIBUTE_NAME_START_CHAR,ATTRIBUTE_NAME_CHAR:ATTRIBUTE_NAME_START_CHAR+'\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',/**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */properties:{},/**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in true.
   *
   * autofocus is predefined, because adding it to the property whitelist
   * causes unintended side effects.
   *
   * @type {Object}
   */getPossibleStandardName:{autofocus:'autoFocus'},/**
   * All of the isCustomAttribute() functions that have been injected.
   */_isCustomAttributeFunctions:[],/**
   * Checks whether a property name is a custom attribute.
   * @method
   */isCustomAttribute:function(attributeName){for(var i=0;i<DOMProperty._isCustomAttributeFunctions.length;i++){var isCustomAttributeFn=DOMProperty._isCustomAttributeFunctions[i];if(isCustomAttributeFn(attributeName)){return true;}}return false;},injection:DOMPropertyInjection};var DOMProperty_1=DOMProperty;/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentFlags
 */var ReactDOMComponentFlags={hasCachedChildNodes:1<<0};var ReactDOMComponentFlags_1=ReactDOMComponentFlags;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTypeOfWork
 * 
 */var ReactTypeOfWork={IndeterminateComponent:0,// Before we know whether it is functional or class
FunctionalComponent:1,ClassComponent:2,HostRoot:3,// Root of a host tree. Could be nested inside another node.
HostPortal:4,// A subtree. Could be an entry point to a different renderer.
HostComponent:5,HostText:6,CoroutineComponent:7,CoroutineHandlerPhase:8,YieldComponent:9,Fragment:10};/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLNodeType
 *//**
 * HTML nodeType values that represent the type of the node
 */var HTMLNodeType={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_FRAGMENT_NODE:11};var HTMLNodeType_1=HTMLNodeType;var HostComponent=ReactTypeOfWork.HostComponent;var HostText=ReactTypeOfWork.HostText;var ELEMENT_NODE$1=HTMLNodeType_1.ELEMENT_NODE;var COMMENT_NODE$1=HTMLNodeType_1.COMMENT_NODE;var ATTR_NAME=DOMProperty_1.ID_ATTRIBUTE_NAME;var Flags=ReactDOMComponentFlags_1;var randomKey=Math.random().toString(36).slice(2);var internalInstanceKey='__reactInternalInstance$'+randomKey;var internalEventHandlersKey='__reactEventHandlers$'+randomKey;/**
 * Check if a given node should be cached.
 */function shouldPrecacheNode(node,nodeID){return node.nodeType===ELEMENT_NODE$1&&node.getAttribute(ATTR_NAME)===''+nodeID||node.nodeType===COMMENT_NODE$1&&node.nodeValue===' react-text: '+nodeID+' '||node.nodeType===COMMENT_NODE$1&&node.nodeValue===' react-empty: '+nodeID+' ';}/**
 * Drill down (through composites and empty components) until we get a host or
 * host text component.
 *
 * This is pretty polymorphic but unavoidable with the current structure we have
 * for `_renderedChildren`.
 */function getRenderedHostOrTextFromComponent(component){var rendered;while(rendered=component._renderedComponent){component=rendered;}return component;}/**
 * Populate `_hostNode` on the rendered host/text component with the given
 * DOM node. The passed `inst` can be a composite.
 */function precacheNode(inst,node){var hostInst=getRenderedHostOrTextFromComponent(inst);hostInst._hostNode=node;node[internalInstanceKey]=hostInst;}function precacheFiberNode$1(hostInst,node){node[internalInstanceKey]=hostInst;}function uncacheNode(inst){var node=inst._hostNode;if(node){delete node[internalInstanceKey];inst._hostNode=null;}}/**
 * Populate `_hostNode` on each child of `inst`, assuming that the children
 * match up with the DOM (element) children of `node`.
 *
 * We cache entire levels at once to avoid an n^2 problem where we access the
 * children of a node sequentially and have to walk from the start to our target
 * node every time.
 *
 * Since we update `_renderedChildren` and the actual DOM at (slightly)
 * different times, we could race here and see a newer `_renderedChildren` than
 * the DOM nodes we see. To avoid this, ReactMultiChild calls
 * `prepareToManageChildren` before we change `_renderedChildren`, at which
 * time the container's child nodes are always cached (until it unmounts).
 */function precacheChildNodes(inst,node){if(inst._flags&Flags.hasCachedChildNodes){return;}var children=inst._renderedChildren;var childNode=node.firstChild;outer:for(var name in children){if(!children.hasOwnProperty(name)){continue;}var childInst=children[name];var childID=getRenderedHostOrTextFromComponent(childInst)._domID;if(childID===0){// We're currently unmounting this child in ReactMultiChild; skip it.
continue;}// We assume the child nodes are in the same order as the child instances.
for(;childNode!==null;childNode=childNode.nextSibling){if(shouldPrecacheNode(childNode,childID)){precacheNode(childInst,childNode);continue outer;}}// We reached the end of the DOM children without finding an ID match.
invariant(false,'Unable to find element with ID %s.',childID);}inst._flags|=Flags.hasCachedChildNodes;}/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */function getClosestInstanceFromNode(node){if(node[internalInstanceKey]){return node[internalInstanceKey];}// Walk up the tree until we find an ancestor whose instance we have cached.
var parents=[];while(!node[internalInstanceKey]){parents.push(node);if(node.parentNode){node=node.parentNode;}else{// Top of the tree. This node must not be part of a React tree (or is
// unmounted, potentially).
return null;}}var closest;var inst=node[internalInstanceKey];if(inst.tag===HostComponent||inst.tag===HostText){// In Fiber, this will always be the deepest root.
return inst;}for(;node&&(inst=node[internalInstanceKey]);node=parents.pop()){closest=inst;if(parents.length){precacheChildNodes(inst,node);}}return closest;}/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */function getInstanceFromNode(node){var inst=node[internalInstanceKey];if(inst){if(inst.tag===HostComponent||inst.tag===HostText){return inst;}else if(inst._hostNode===node){return inst;}else{return null;}}inst=getClosestInstanceFromNode(node);if(inst!=null&&inst._hostNode===node){return inst;}else{return null;}}/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */function getNodeFromInstance(inst){if(inst.tag===HostComponent||inst.tag===HostText){// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return inst.stateNode;}// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
!(inst._hostNode!==undefined)?invariant(false,'getNodeFromInstance: Invalid argument.'):void 0;if(inst._hostNode){return inst._hostNode;}// Walk up the tree until we find an ancestor whose DOM node we have cached.
var parents=[];while(!inst._hostNode){parents.push(inst);!inst._hostParent?invariant(false,'React DOM tree root should always have a node reference.'):void 0;inst=inst._hostParent;}// Now parents contains each ancestor that does *not* have a cached native
// node, and `inst` is the deepest ancestor that does.
for(;parents.length;inst=parents.pop()){precacheChildNodes(inst,inst._hostNode);}return inst._hostNode;}function getFiberCurrentPropsFromNode(node){return node[internalEventHandlersKey]||null;}function updateFiberProps$1(node,props){node[internalEventHandlersKey]=props;}var ReactDOMComponentTree={getClosestInstanceFromNode:getClosestInstanceFromNode,getInstanceFromNode:getInstanceFromNode,getNodeFromInstance:getNodeFromInstance,precacheChildNodes:precacheChildNodes,precacheNode:precacheNode,uncacheNode:uncacheNode,precacheFiberNode:precacheFiberNode$1,getFiberCurrentPropsFromNode:getFiberCurrentPropsFromNode,updateFiberProps:updateFiberProps$1};var ReactDOMComponentTree_1=ReactDOMComponentTree;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 *//**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
var ReactInstanceMap={/**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */remove:function(key){key._reactInternalInstance=undefined;},get:function(key){return key._reactInternalInstance;},has:function(key){return key._reactInternalInstance!==undefined;},set:function(key,value){key._reactInternalInstance=value;}};var ReactInstanceMap_1=ReactInstanceMap;var ReactInternals=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;var ReactGlobalSharedState={ReactCurrentOwner:ReactInternals.ReactCurrentOwner};{_assign(ReactGlobalSharedState,{ReactComponentTreeHook:ReactInternals.ReactComponentTreeHook,ReactDebugCurrentFrame:ReactInternals.ReactDebugCurrentFrame});}var ReactGlobalSharedState_1=ReactGlobalSharedState;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getComponentName
 * 
 */function getComponentName(instanceOrFiber){if(typeof instanceOrFiber.getName==='function'){// Stack reconciler
var instance=instanceOrFiber;return instance.getName();}if(typeof instanceOrFiber.tag==='number'){// Fiber reconciler
var fiber=instanceOrFiber;var type=fiber.type;if(typeof type==='string'){return type;}if(typeof type==='function'){return type.displayName||type.name;}}return null;}var getComponentName_1=getComponentName;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTypeOfSideEffect
 * 
 */var ReactTypeOfSideEffect={// Don't change these two values:
NoEffect:0,//           0b00000000
PerformedWork:1,//      0b00000001
// You can change the rest (and add more).
Placement:2,//          0b00000010
Update:4,//             0b00000100
PlacementAndUpdate:6,// 0b00000110
Deletion:8,//           0b00001000
ContentReset:16,//      0b00010000
Callback:32,//          0b00100000
Err:64,//               0b01000000
Ref:128};var ReactCurrentOwner=ReactGlobalSharedState_1.ReactCurrentOwner;{var warning$1=require$$0;}var ClassComponent=ReactTypeOfWork.ClassComponent;var HostComponent$1=ReactTypeOfWork.HostComponent;var HostRoot$1=ReactTypeOfWork.HostRoot;var HostPortal=ReactTypeOfWork.HostPortal;var HostText$1=ReactTypeOfWork.HostText;var NoEffect=ReactTypeOfSideEffect.NoEffect;var Placement=ReactTypeOfSideEffect.Placement;var MOUNTING=1;var MOUNTED=2;var UNMOUNTED=3;function isFiberMountedImpl(fiber){var node=fiber;if(!fiber.alternate){// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
if((node.effectTag&Placement)!==NoEffect){return MOUNTING;}while(node['return']){node=node['return'];if((node.effectTag&Placement)!==NoEffect){return MOUNTING;}}}else{while(node['return']){node=node['return'];}}if(node.tag===HostRoot$1){// TODO: Check if this was a nested HostRoot when used with
// renderContainerIntoSubtree.
return MOUNTED;}// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
return UNMOUNTED;}var isFiberMounted=function(fiber){return isFiberMountedImpl(fiber)===MOUNTED;};var isMounted=function(component){{var owner=ReactCurrentOwner.current;if(owner!==null&&owner.tag===ClassComponent){var ownerFiber=owner;var instance=ownerFiber.stateNode;warning$1(instance._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName_1(ownerFiber)||'A component');instance._warnedAboutRefsInRender=true;}}var fiber=ReactInstanceMap_1.get(component);if(!fiber){return false;}return isFiberMountedImpl(fiber)===MOUNTED;};function assertIsMounted(fiber){!(isFiberMountedImpl(fiber)===MOUNTED)?invariant(false,'Unable to find node on an unmounted component.'):void 0;}function findCurrentFiberUsingSlowPath(fiber){var alternate=fiber.alternate;if(!alternate){// If there is no alternate, then we only need to check if it is mounted.
var state=isFiberMountedImpl(fiber);!(state!==UNMOUNTED)?invariant(false,'Unable to find node on an unmounted component.'):void 0;if(state===MOUNTING){return null;}return fiber;}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
var a=fiber;var b=alternate;while(true){var parentA=a['return'];var parentB=parentA?parentA.alternate:null;if(!parentA||!parentB){// We're at the root.
break;}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(parentA.child===parentB.child){var child=parentA.child;while(child){if(child===a){// We've determined that A is the current branch.
assertIsMounted(parentA);return fiber;}if(child===b){// We've determined that B is the current branch.
assertIsMounted(parentA);return alternate;}child=child.sibling;}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
invariant(false,'Unable to find node on an unmounted component.');}if(a['return']!==b['return']){// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
a=parentA;b=parentB;}else{// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var didFindChild=false;var _child=parentA.child;while(_child){if(_child===a){didFindChild=true;a=parentA;b=parentB;break;}if(_child===b){didFindChild=true;b=parentA;a=parentB;break;}_child=_child.sibling;}if(!didFindChild){// Search parent B's child set
_child=parentB.child;while(_child){if(_child===a){didFindChild=true;a=parentB;b=parentA;break;}if(_child===b){didFindChild=true;b=parentB;a=parentA;break;}_child=_child.sibling;}!didFindChild?invariant(false,'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'):void 0;}}!(a.alternate===b)?invariant(false,'Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.'):void 0;}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
!(a.tag===HostRoot$1)?invariant(false,'Unable to find node on an unmounted component.'):void 0;if(a.stateNode.current===a){// We've determined that A is the current branch.
return fiber;}// Otherwise B has to be current branch.
return alternate;}var findCurrentFiberUsingSlowPath_1=findCurrentFiberUsingSlowPath;var findCurrentHostFiber=function(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
var node=currentParent;while(true){if(node.tag===HostComponent$1||node.tag===HostText$1){return node;}else if(node.child){node.child['return']=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node['return']||node['return']===currentParent){return null;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null;};var findCurrentHostFiberWithNoPortals=function(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
var node=currentParent;while(true){if(node.tag===HostComponent$1||node.tag===HostText$1){return node;}else if(node.child&&node.tag!==HostPortal){node.child['return']=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node['return']||node['return']===currentParent){return null;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null;};var ReactFiberTreeReflection={isFiberMounted:isFiberMounted,isMounted:isMounted,findCurrentFiberUsingSlowPath:findCurrentFiberUsingSlowPath_1,findCurrentHostFiber:findCurrentHostFiber,findCurrentHostFiberWithNoPortals:findCurrentHostFiberWithNoPortals};var ReactErrorUtils={// Used by Fiber to simulate a try-catch.
_caughtError:null,_hasCaughtError:false,// Used by event system to capture/rethrow the first error.
_rethrowError:null,_hasRethrowError:false,injection:{injectErrorUtils:function(injectedErrorUtils){!(typeof injectedErrorUtils.invokeGuardedCallback==='function')?invariant(false,'Injected invokeGuardedCallback() must be a function.'):void 0;invokeGuardedCallback=injectedErrorUtils.invokeGuardedCallback;}},/**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */invokeGuardedCallback:function(name,func,context,a,b,c,d,e,f){invokeGuardedCallback.apply(ReactErrorUtils,arguments);},/**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   * TODO: See if _caughtError and _rethrowError can be unified.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */invokeGuardedCallbackAndCatchFirstError:function(name,func,context,a,b,c,d,e,f){ReactErrorUtils.invokeGuardedCallback.apply(this,arguments);if(ReactErrorUtils.hasCaughtError()){var error=ReactErrorUtils.clearCaughtError();if(!ReactErrorUtils._hasRethrowError){ReactErrorUtils._hasRethrowError=true;ReactErrorUtils._rethrowError=error;}}},/**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */rethrowCaughtError:function(){return rethrowCaughtError.apply(ReactErrorUtils,arguments);},hasCaughtError:function(){return ReactErrorUtils._hasCaughtError;},clearCaughtError:function(){if(ReactErrorUtils._hasCaughtError){var error=ReactErrorUtils._caughtError;ReactErrorUtils._caughtError=null;ReactErrorUtils._hasCaughtError=false;return error;}else{invariant(false,'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.');}}};var invokeGuardedCallback=function(name,func,context,a,b,c,d,e,f){ReactErrorUtils._hasCaughtError=false;ReactErrorUtils._caughtError=null;var funcArgs=Array.prototype.slice.call(arguments,3);try{func.apply(context,funcArgs);}catch(error){ReactErrorUtils._caughtError=error;ReactErrorUtils._hasCaughtError=true;}};{// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// untintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');var invokeGuardedCallbackDev=function(name,func,context,a,b,c,d,e,f){// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
var didError=true;// Create an event handler for our fake event. We will synchronously
// dispatch our fake event using `dispatchEvent`. Inside the handler, we
// call the user-provided callback.
var funcArgs=Array.prototype.slice.call(arguments,3);function callCallback(){// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
fakeNode.removeEventListener(evtType,callCallback,false);func.apply(context,funcArgs);didError=false;}// Create a global error event handler. We use this to capture the value
// that was thrown. It's possible that this error handler will fire more
// than once; for example, if non-React code also calls `dispatchEvent`
// and a handler for that event throws. We should be resilient to most of
// those cases. Even if our error event handler fires more than once, the
// last error event is always used. If the callback actually does error,
// we know that the last error event is the correct one, because it's not
// possible for anything else to have happened in between our callback
// erroring and the code that follows the `dispatchEvent` call below. If
// the callback doesn't error, but the error event was fired, we know to
// ignore it because `didError` will be false, as described above.
var error=void 0;// Use this to track whether the error event is ever called.
var didSetError=false;var isCrossOriginError=false;function onError(event){error=event.error;didSetError=true;if(error===null&&event.colno===0&&event.lineno===0){isCrossOriginError=true;}}// Create a fake event type.
var evtType='react-'+(name?name:'invokeguardedcallback');// Attach our event handlers
window.addEventListener('error',onError);fakeNode.addEventListener(evtType,callCallback,false);// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
var evt=document.createEvent('Event');evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);if(didError){if(!didSetError){// The callback errored, but the error event never fired.
error=new Error('An error was thrown inside one of your components, but React '+"doesn't know what it was. This is likely due to browser "+'flakiness. React does its best to preserve the "Pause on '+'exceptions" behavior of the DevTools, which requires some '+"DEV-mode only tricks. It's possible that these don't work in "+'your browser. Try triggering the error in production mode, '+'or switching to a modern browser. If you suspect that this is '+'actually an issue with React, please file an issue.');}else if(isCrossOriginError){error=new Error("A cross-origin error was thrown. React doesn't have access to "+'the actual error because it catches errors using a global '+'error handler, in order to preserve the "Pause on exceptions" '+'behavior of the DevTools. This is only an issue in DEV-mode; '+'in production, React uses a normal try-catch statement.\n\n'+'If you are using React from a CDN, ensure that the <script> tag '+'has a `crossorigin` attribute, and that it is served with the '+'`Access-Control-Allow-Origin: *` HTTP header. '+'See https://fb.me/react-cdn-crossorigin');}ReactErrorUtils._hasCaughtError=true;ReactErrorUtils._caughtError=error;}else{ReactErrorUtils._hasCaughtError=false;ReactErrorUtils._caughtError=null;}// Remove our event listeners
window.removeEventListener('error',onError);};invokeGuardedCallback=invokeGuardedCallbackDev;}}var rethrowCaughtError=function(){if(ReactErrorUtils._hasRethrowError){var error=ReactErrorUtils._rethrowError;ReactErrorUtils._rethrowError=null;ReactErrorUtils._hasRethrowError=false;throw error;}};var ReactErrorUtils_1=ReactErrorUtils;{var warning$2=require$$0;}/**
 * Injected dependencies:
 *//**
 * - `ComponentTree`: [required] Module that can convert between React instances
 *   and actual node references.
 */var ComponentTree;var injection={injectComponentTree:function(Injected){ComponentTree=Injected;{warning$2(Injected&&Injected.getNodeFromInstance&&Injected.getInstanceFromNode,'EventPluginUtils.injection.injectComponentTree(...): Injected '+'module is missing getNodeFromInstance or getInstanceFromNode.');}}};function isEndish(topLevelType){return topLevelType==='topMouseUp'||topLevelType==='topTouchEnd'||topLevelType==='topTouchCancel';}function isMoveish(topLevelType){return topLevelType==='topMouseMove'||topLevelType==='topTouchMove';}function isStartish(topLevelType){return topLevelType==='topMouseDown'||topLevelType==='topTouchStart';}var validateEventDispatches;{validateEventDispatches=function(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;var listenersIsArr=Array.isArray(dispatchListeners);var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;var instancesIsArr=Array.isArray(dispatchInstances);var instancesLen=instancesIsArr?dispatchInstances.length:dispatchInstances?1:0;warning$2(instancesIsArr===listenersIsArr&&instancesLen===listenersLen,'EventPluginUtils: Invalid `event`.');};}/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */function executeDispatch(event,simulated,listener,inst){var type=event.type||'unknown-event';event.currentTarget=EventPluginUtils.getNodeFromInstance(inst);ReactErrorUtils_1.invokeGuardedCallbackAndCatchFirstError(type,listener,undefined,event);event.currentTarget=null;}/**
 * Standard/simple iteration through an event's collected dispatches.
 */function executeDispatchesInOrder(event,simulated){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;{validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;}// Listeners and Instances are two parallel arrays that are always in sync.
executeDispatch(event,simulated,dispatchListeners[i],dispatchInstances[i]);}}else if(dispatchListeners){executeDispatch(event,simulated,dispatchListeners,dispatchInstances);}event._dispatchListeners=null;event._dispatchInstances=null;}/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */function executeDispatchesInOrderStopAtTrueImpl(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;{validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;}// Listeners and Instances are two parallel arrays that are always in sync.
if(dispatchListeners[i](event,dispatchInstances[i])){return dispatchInstances[i];}}}else if(dispatchListeners){if(dispatchListeners(event,dispatchInstances)){return dispatchInstances;}}return null;}/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */function executeDispatchesInOrderStopAtTrue(event){var ret=executeDispatchesInOrderStopAtTrueImpl(event);event._dispatchInstances=null;event._dispatchListeners=null;return ret;}/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */function executeDirectDispatch(event){{validateEventDispatches(event);}var dispatchListener=event._dispatchListeners;var dispatchInstance=event._dispatchInstances;!!Array.isArray(dispatchListener)?invariant(false,'executeDirectDispatch(...): Invalid `event`.'):void 0;event.currentTarget=dispatchListener?EventPluginUtils.getNodeFromInstance(dispatchInstance):null;var res=dispatchListener?dispatchListener(event):null;event.currentTarget=null;event._dispatchListeners=null;event._dispatchInstances=null;return res;}/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */function hasDispatches(event){return!!event._dispatchListeners;}/**
 * General utilities that are useful in creating custom Event Plugins.
 */var EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,getFiberCurrentPropsFromNode:function(node){return ComponentTree.getFiberCurrentPropsFromNode(node);},getInstanceFromNode:function(node){return ComponentTree.getInstanceFromNode(node);},getNodeFromInstance:function(node){return ComponentTree.getNodeFromInstance(node);},injection:injection};var EventPluginUtils_1=EventPluginUtils;// Use to restore controlled state after a change event has fired.
var fiberHostComponent=null;var ReactControlledComponentInjection={injectFiberControlledHostComponent:function(hostComponentImpl){// The fiber implementation doesn't use dynamic dispatch so we need to
// inject the implementation.
fiberHostComponent=hostComponentImpl;}};var restoreTarget=null;var restoreQueue=null;function restoreStateOfTarget(target){// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var internalInstance=EventPluginUtils_1.getInstanceFromNode(target);if(!internalInstance){// Unmounted
return;}if(typeof internalInstance.tag==='number'){!(fiberHostComponent&&typeof fiberHostComponent.restoreControlledState==='function')?invariant(false,'Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.'):void 0;var props=EventPluginUtils_1.getFiberCurrentPropsFromNode(internalInstance.stateNode);fiberHostComponent.restoreControlledState(internalInstance.stateNode,internalInstance.type,props);return;}!(typeof internalInstance.restoreControlledState==='function')?invariant(false,'The internal instance must be a React host component. This error is likely caused by a bug in React. Please file an issue.'):void 0;// If it is not a Fiber, we can just use dynamic dispatch.
internalInstance.restoreControlledState();}var ReactControlledComponent={injection:ReactControlledComponentInjection,enqueueStateRestore:function(target){if(restoreTarget){if(restoreQueue){restoreQueue.push(target);}else{restoreQueue=[target];}}else{restoreTarget=target;}},restoreStateIfNeeded:function(){if(!restoreTarget){return;}var target=restoreTarget;var queuedTargets=restoreQueue;restoreTarget=null;restoreQueue=null;restoreStateOfTarget(target);if(queuedTargets){for(var i=0;i<queuedTargets.length;i++){restoreStateOfTarget(queuedTargets[i]);}}}};var ReactControlledComponent_1=ReactControlledComponent;// Used as a way to call batchedUpdates when we don't know if we're in a Fiber
// or Stack context. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaults
var stackBatchedUpdates=function(fn,a,b,c,d,e){return fn(a,b,c,d,e);};var fiberBatchedUpdates=function(fn,bookkeeping){return fn(bookkeeping);};function performFiberBatchedUpdates(fn,bookkeeping){// If we have Fiber loaded, we need to wrap this in a batching call so that
// Fiber can apply its default priority for this call.
return fiberBatchedUpdates(fn,bookkeeping);}function batchedUpdates(fn,bookkeeping){// We first perform work with the stack batching strategy, by passing our
// indirection to it.
return stackBatchedUpdates(performFiberBatchedUpdates,fn,bookkeeping);}var isNestingBatched=false;function batchedUpdatesWithControlledComponents(fn,bookkeeping){if(isNestingBatched){// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state. Therefore, we add the target to
// a queue of work.
return batchedUpdates(fn,bookkeeping);}isNestingBatched=true;try{return batchedUpdates(fn,bookkeeping);}finally{// Here we wait until all updates have propagated, which is important
// when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
// Then we restore state of any controlled component.
isNestingBatched=false;ReactControlledComponent_1.restoreStateIfNeeded();}}var ReactGenericBatchingInjection={injectStackBatchedUpdates:function(_batchedUpdates){stackBatchedUpdates=_batchedUpdates;},injectFiberBatchedUpdates:function(_batchedUpdates){fiberBatchedUpdates=_batchedUpdates;}};var ReactGenericBatching={batchedUpdates:batchedUpdatesWithControlledComponents,injection:ReactGenericBatchingInjection};var ReactGenericBatching_1=ReactGenericBatching;var TEXT_NODE$1=HTMLNodeType_1.TEXT_NODE;/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function getEventTarget(nativeEvent){var target=nativeEvent.target||nativeEvent.srcElement||window;// Normalize SVG <use> element events #4963
if(target.correspondingUseElement){target=target.correspondingUseElement;}// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return target.nodeType===TEXT_NODE$1?target.parentNode:target;}var getEventTarget_1=getEventTarget;var HostRoot=ReactTypeOfWork.HostRoot;/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */function findRootContainerNode(inst){// TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
if(typeof inst.tag==='number'){while(inst['return']){inst=inst['return'];}if(inst.tag!==HostRoot){// This can happen if we're in a detached tree.
return null;}return inst.stateNode.containerInfo;}else{while(inst._hostParent){inst=inst._hostParent;}var rootNode=ReactDOMComponentTree_1.getNodeFromInstance(inst);return rootNode.parentNode;}}// Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType,nativeEvent,targetInst){this.topLevelType=topLevelType;this.nativeEvent=nativeEvent;this.targetInst=targetInst;this.ancestors=[];}_assign(TopLevelCallbackBookKeeping.prototype,{destructor:function(){this.topLevelType=null;this.nativeEvent=null;this.targetInst=null;this.ancestors.length=0;}});PooledClass_1.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass_1.threeArgumentPooler);function handleTopLevelImpl(bookKeeping){var targetInst=bookKeeping.targetInst;// Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
var ancestor=targetInst;do{if(!ancestor){bookKeeping.ancestors.push(ancestor);break;}var root=findRootContainerNode(ancestor);if(!root){break;}bookKeeping.ancestors.push(ancestor);ancestor=ReactDOMComponentTree_1.getClosestInstanceFromNode(root);}while(ancestor);for(var i=0;i<bookKeeping.ancestors.length;i++){targetInst=bookKeeping.ancestors[i];ReactDOMEventListener._handleTopLevel(bookKeeping.topLevelType,targetInst,bookKeeping.nativeEvent,getEventTarget_1(bookKeeping.nativeEvent));}}var ReactDOMEventListener={_enabled:true,_handleTopLevel:null,setHandleTopLevel:function(handleTopLevel){ReactDOMEventListener._handleTopLevel=handleTopLevel;},setEnabled:function(enabled){ReactDOMEventListener._enabled=!!enabled;},isEnabled:function(){return ReactDOMEventListener._enabled;},/**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `BrowserEventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} element Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapBubbledEvent:function(topLevelType,handlerBaseName,element){if(!element){return null;}return EventListener.listen(element,handlerBaseName,ReactDOMEventListener.dispatchEvent.bind(null,topLevelType));},/**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `BrowserEventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} element Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapCapturedEvent:function(topLevelType,handlerBaseName,element){if(!element){return null;}return EventListener.capture(element,handlerBaseName,ReactDOMEventListener.dispatchEvent.bind(null,topLevelType));},dispatchEvent:function(topLevelType,nativeEvent){if(!ReactDOMEventListener._enabled){return;}var nativeEventTarget=getEventTarget_1(nativeEvent);var targetInst=ReactDOMComponentTree_1.getClosestInstanceFromNode(nativeEventTarget);if(targetInst!==null&&typeof targetInst.tag==='number'&&!ReactFiberTreeReflection.isFiberMounted(targetInst)){// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
targetInst=null;}var bookKeeping=TopLevelCallbackBookKeeping.getPooled(topLevelType,nativeEvent,targetInst);try{// Event queue being processed in the same cycle allows
// `preventDefault`.
ReactGenericBatching_1.batchedUpdates(handleTopLevelImpl,bookKeeping);}finally{TopLevelCallbackBookKeeping.release(bookKeeping);}}};var ReactDOMEventListener_1=ReactDOMEventListener;/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */function accumulateInto(current,next){!(next!=null)?invariant(false,'accumulateInto(...): Accumulated items must not be null or undefined.'):void 0;if(current==null){return next;}// Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
if(Array.isArray(current)){if(Array.isArray(next)){current.push.apply(current,next);return current;}current.push(next);return current;}if(Array.isArray(next)){// A bit too dangerous to mutate `next`.
return[current].concat(next);}return[current,next];}var accumulateInto_1=accumulateInto;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 * 
 *//**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 * @param {function} cb Callback invoked with each element or a collection.
 * @param {?} [scope] Scope used as `this` in a callback.
 */function forEachAccumulated(arr,cb,scope){if(Array.isArray(arr)){arr.forEach(cb,scope);}else if(arr){cb.call(scope,arr);}}var forEachAccumulated_1=forEachAccumulated;/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */var eventQueue=null;/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */var executeDispatchesAndRelease=function(event,simulated){if(event){EventPluginUtils_1.executeDispatchesInOrder(event,simulated);if(!event.isPersistent()){event.constructor.release(event);}}};var executeDispatchesAndReleaseSimulated=function(e){return executeDispatchesAndRelease(e,true);};var executeDispatchesAndReleaseTopLevel=function(e){return executeDispatchesAndRelease(e,false);};function isInteractive(tag){return tag==='button'||tag==='input'||tag==='select'||tag==='textarea';}function shouldPreventMouseEvent(name,type,props){switch(name){case'onClick':case'onClickCapture':case'onDoubleClick':case'onDoubleClickCapture':case'onMouseDown':case'onMouseDownCapture':case'onMouseMove':case'onMouseMoveCapture':case'onMouseUp':case'onMouseUpCapture':return!!(props.disabled&&isInteractive(type));default:return false;}}/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */var EventPluginHub={/**
   * Methods for injecting dependencies.
   */injection:{/**
     * @param {array} InjectedEventPluginOrder
     * @public
     */injectEventPluginOrder:EventPluginRegistry_1.injectEventPluginOrder,/**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */injectEventPluginsByName:EventPluginRegistry_1.injectEventPluginsByName},/**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */getListener:function(inst,registrationName){var listener;// TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
// live here; needs to be moved to a better place soon
if(typeof inst.tag==='number'){var stateNode=inst.stateNode;if(!stateNode){// Work in progress (ex: onload events in incremental mode).
return null;}var props=EventPluginUtils_1.getFiberCurrentPropsFromNode(stateNode);if(!props){// Work in progress.
return null;}listener=props[registrationName];if(shouldPreventMouseEvent(registrationName,inst.type,props)){return null;}}else{var currentElement=inst._currentElement;if(typeof currentElement==='string'||typeof currentElement==='number'){// Text node, let it bubble through.
return null;}if(!inst._rootNodeID){// If the instance is already unmounted, we have no listeners.
return null;}var _props=currentElement.props;listener=_props[registrationName];if(shouldPreventMouseEvent(registrationName,currentElement.type,_props)){return null;}}!(!listener||typeof listener==='function')?invariant(false,'Expected %s listener to be a function, instead got type %s',registrationName,typeof listener):void 0;return listener;},/**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @return {*} An accumulation of synthetic events.
   * @internal
   */extractEvents:function(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events;var plugins=EventPluginRegistry_1.plugins;for(var i=0;i<plugins.length;i++){// Not every plugin in the ordering may be loaded at runtime.
var possiblePlugin=plugins[i];if(possiblePlugin){var extractedEvents=possiblePlugin.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);if(extractedEvents){events=accumulateInto_1(events,extractedEvents);}}}return events;},/**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */enqueueEvents:function(events){if(events){eventQueue=accumulateInto_1(eventQueue,events);}},/**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */processEventQueue:function(simulated){// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var processingEventQueue=eventQueue;eventQueue=null;if(simulated){forEachAccumulated_1(processingEventQueue,executeDispatchesAndReleaseSimulated);}else{forEachAccumulated_1(processingEventQueue,executeDispatchesAndReleaseTopLevel);}!!eventQueue?invariant(false,'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.'):void 0;// This would be a good time to rethrow if any of the event handlers threw.
ReactErrorUtils_1.rethrowCaughtError();}};var EventPluginHub_1=EventPluginHub;function runEventQueueInBatch(events){EventPluginHub_1.enqueueEvents(events);EventPluginHub_1.processEventQueue(false);}var ReactEventEmitterMixin={/**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   */handleTopLevel:function(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events=EventPluginHub_1.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);runEventQueueInBatch(events);}};var ReactEventEmitterMixin_1=ReactEventEmitterMixin;var useHasFeature;if(ExecutionEnvironment.canUseDOM){useHasFeature=document.implementation&&document.implementation.hasFeature&&// always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature('','')!==true;}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(eventNameSuffix,capture){if(!ExecutionEnvironment.canUseDOM||capture&&!('addEventListener'in document)){return false;}var eventName='on'+eventNameSuffix;var isSupported=eventName in document;if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}if(!isSupported&&useHasFeature&&eventNameSuffix==='wheel'){// This is the only way to test support for the `wheel` event in IE9+.
isSupported=document.implementation.hasFeature('Events.wheel','3.0');}return isSupported;}var isEventSupported_1=isEventSupported;/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */function makePrefixMap(styleProp,eventName){var prefixes={};prefixes[styleProp.toLowerCase()]=eventName.toLowerCase();prefixes['Webkit'+styleProp]='webkit'+eventName;prefixes['Moz'+styleProp]='moz'+eventName;prefixes['ms'+styleProp]='MS'+eventName;prefixes['O'+styleProp]='o'+eventName.toLowerCase();return prefixes;}/**
 * A list of event names to a configurable list of vendor prefixes.
 */var vendorPrefixes={animationend:makePrefixMap('Animation','AnimationEnd'),animationiteration:makePrefixMap('Animation','AnimationIteration'),animationstart:makePrefixMap('Animation','AnimationStart'),transitionend:makePrefixMap('Transition','TransitionEnd')};/**
 * Event names that have already been detected and prefixed (if applicable).
 */var prefixedEventNames={};/**
 * Element to check for prefixes on.
 */var style={};/**
 * Bootstrap if a DOM exists.
 */if(ExecutionEnvironment.canUseDOM){style=document.createElement('div').style;// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
if(!('AnimationEvent'in window)){delete vendorPrefixes.animationend.animation;delete vendorPrefixes.animationiteration.animation;delete vendorPrefixes.animationstart.animation;}// Same as above
if(!('TransitionEvent'in window)){delete vendorPrefixes.transitionend.transition;}}/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */function getVendorPrefixedEventName(eventName){if(prefixedEventNames[eventName]){return prefixedEventNames[eventName];}else if(!vendorPrefixes[eventName]){return eventName;}var prefixMap=vendorPrefixes[eventName];for(var styleProp in prefixMap){if(prefixMap.hasOwnProperty(styleProp)&&styleProp in style){return prefixedEventNames[eventName]=prefixMap[styleProp];}}return'';}var getVendorPrefixedEventName_1=getVendorPrefixedEventName;/**
 * Types of raw signals from the browser caught at the top level.
 *
 * For events like 'submit' which don't consistently bubble (which we
 * trap at a lower node than `document`), binding at `document` would
 * cause duplicate events so we don't include them here.
 */var topLevelTypes$1={topAbort:'abort',topAnimationEnd:getVendorPrefixedEventName_1('animationend')||'animationend',topAnimationIteration:getVendorPrefixedEventName_1('animationiteration')||'animationiteration',topAnimationStart:getVendorPrefixedEventName_1('animationstart')||'animationstart',topBlur:'blur',topCancel:'cancel',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topChange:'change',topClick:'click',topClose:'close',topCompositionEnd:'compositionend',topCompositionStart:'compositionstart',topCompositionUpdate:'compositionupdate',topContextMenu:'contextmenu',topCopy:'copy',topCut:'cut',topDoubleClick:'dblclick',topDrag:'drag',topDragEnd:'dragend',topDragEnter:'dragenter',topDragExit:'dragexit',topDragLeave:'dragleave',topDragOver:'dragover',topDragStart:'dragstart',topDrop:'drop',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topFocus:'focus',topInput:'input',topKeyDown:'keydown',topKeyPress:'keypress',topKeyUp:'keyup',topLoadedData:'loadeddata',topLoad:'load',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topMouseDown:'mousedown',topMouseMove:'mousemove',topMouseOut:'mouseout',topMouseOver:'mouseover',topMouseUp:'mouseup',topPaste:'paste',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topScroll:'scroll',topSeeked:'seeked',topSeeking:'seeking',topSelectionChange:'selectionchange',topStalled:'stalled',topSuspend:'suspend',topTextInput:'textInput',topTimeUpdate:'timeupdate',topToggle:'toggle',topTouchCancel:'touchcancel',topTouchEnd:'touchend',topTouchMove:'touchmove',topTouchStart:'touchstart',topTransitionEnd:getVendorPrefixedEventName_1('transitionend')||'transitionend',topVolumeChange:'volumechange',topWaiting:'waiting',topWheel:'wheel'};var BrowserEventConstants={topLevelTypes:topLevelTypes$1};var BrowserEventConstants_1=BrowserEventConstants;var topLevelTypes=BrowserEventConstants_1.topLevelTypes;/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactDOMEventListener, which is injected and can therefore support
 *    pluggable event sources. This is the only work that occurs in the main
 *    thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */var alreadyListeningTo={};var reactTopListenersCounter=0;/**
 * To ensure no conflicts with other potential React instances on the page
 */var topListenersIDKey='_reactListenersID'+(''+Math.random()).slice(2);function getListeningForDocument(mountAt){// In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){mountAt[topListenersIDKey]=reactTopListenersCounter++;alreadyListeningTo[mountAt[topListenersIDKey]]={};}return alreadyListeningTo[mountAt[topListenersIDKey]];}var ReactBrowserEventEmitter=_assign({},ReactEventEmitterMixin_1,{/**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */setEnabled:function(enabled){if(ReactDOMEventListener_1){ReactDOMEventListener_1.setEnabled(enabled);}},/**
   * @return {boolean} True if callbacks are enabled.
   */isEnabled:function(){return!!(ReactDOMEventListener_1&&ReactDOMEventListener_1.isEnabled());},/**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */listenTo:function(registrationName,contentDocumentHandle){var mountAt=contentDocumentHandle;var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry_1.registrationNameDependencies[registrationName];for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){if(dependency==='topWheel'){if(isEventSupported_1('wheel')){ReactDOMEventListener_1.trapBubbledEvent('topWheel','wheel',mountAt);}else if(isEventSupported_1('mousewheel')){ReactDOMEventListener_1.trapBubbledEvent('topWheel','mousewheel',mountAt);}else{// Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
ReactDOMEventListener_1.trapBubbledEvent('topWheel','DOMMouseScroll',mountAt);}}else if(dependency==='topScroll'){ReactDOMEventListener_1.trapCapturedEvent('topScroll','scroll',mountAt);}else if(dependency==='topFocus'||dependency==='topBlur'){ReactDOMEventListener_1.trapCapturedEvent('topFocus','focus',mountAt);ReactDOMEventListener_1.trapCapturedEvent('topBlur','blur',mountAt);// to make sure blur and focus event listeners are only attached once
isListening.topBlur=true;isListening.topFocus=true;}else if(dependency==='topCancel'){if(isEventSupported_1('cancel',true)){ReactDOMEventListener_1.trapCapturedEvent('topCancel','cancel',mountAt);}isListening.topCancel=true;}else if(dependency==='topClose'){if(isEventSupported_1('close',true)){ReactDOMEventListener_1.trapCapturedEvent('topClose','close',mountAt);}isListening.topClose=true;}else if(topLevelTypes.hasOwnProperty(dependency)){ReactDOMEventListener_1.trapBubbledEvent(dependency,topLevelTypes[dependency],mountAt);}isListening[dependency]=true;}}},isListeningToAllDependencies:function(registrationName,mountAt){var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry_1.registrationNameDependencies[registrationName];for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){return false;}}return true;},trapBubbledEvent:function(topLevelType,handlerBaseName,handle){return ReactDOMEventListener_1.trapBubbledEvent(topLevelType,handlerBaseName,handle);},trapCapturedEvent:function(topLevelType,handlerBaseName,handle){return ReactDOMEventListener_1.trapCapturedEvent(topLevelType,handlerBaseName,handle);}});var ReactBrowserEventEmitter_1=ReactBrowserEventEmitter;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFeatureFlags
 * 
 */var ReactFeatureFlags={disableNewFiberFeatures:false,enableAsyncSubtreeAPI:false};var ReactFeatureFlags_1=ReactFeatureFlags;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFeatureFlags
 */var ReactDOMFeatureFlags={fiberAsyncScheduling:false,useFiber:true};var ReactDOMFeatureFlags_1=ReactDOMFeatureFlags;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 *//**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);}/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O'];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});});/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */var shorthandPropertyExpansions={background:{backgroundAttachment:true,backgroundColor:true,backgroundImage:true,backgroundPositionX:true,backgroundPositionY:true,backgroundRepeat:true},backgroundPosition:{backgroundPositionX:true,backgroundPositionY:true},border:{borderWidth:true,borderStyle:true,borderColor:true},borderBottom:{borderBottomWidth:true,borderBottomStyle:true,borderBottomColor:true},borderLeft:{borderLeftWidth:true,borderLeftStyle:true,borderLeftColor:true},borderRight:{borderRightWidth:true,borderRightStyle:true,borderRightColor:true},borderTop:{borderTopWidth:true,borderTopStyle:true,borderTopColor:true},font:{fontStyle:true,fontVariant:true,fontWeight:true,fontSize:true,lineHeight:true,fontFamily:true},outline:{outlineWidth:true,outlineStyle:true,outlineColor:true}};var CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};var CSSProperty_1=CSSProperty;var isUnitlessNumber$1=CSSProperty_1.isUnitlessNumber;/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */function dangerousStyleValue(name,value,isCustomProperty){// Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return'';}if(!isCustomProperty&&typeof value==='number'&&value!==0&&!(isUnitlessNumber$1.hasOwnProperty(name)&&isUnitlessNumber$1[name])){return value+'px';// Presumes implicit 'px' suffix for unitless numbers
}return(''+value).trim();}var dangerousStyleValue_1=dangerousStyleValue;/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @providesModule describeComponentFrame
 */var describeComponentFrame=function(name,source,ownerName){return'\n    in '+(name||'Unknown')+(source?' (at '+source.fileName.replace(/^.*[\\\/]/,'')+':'+source.lineNumber+')':ownerName?' (created by '+ownerName+')':'');};var IndeterminateComponent=ReactTypeOfWork.IndeterminateComponent;var FunctionalComponent=ReactTypeOfWork.FunctionalComponent;var ClassComponent$1=ReactTypeOfWork.ClassComponent;var HostComponent$2=ReactTypeOfWork.HostComponent;function describeFiber(fiber){switch(fiber.tag){case IndeterminateComponent:case FunctionalComponent:case ClassComponent$1:case HostComponent$2:var owner=fiber._debugOwner;var source=fiber._debugSource;var name=getComponentName_1(fiber);var ownerName=null;if(owner){ownerName=getComponentName_1(owner);}return describeComponentFrame(name,source,ownerName);default:return'';}}// This function can only be called with a work-in-progress fiber and
// only during begin or complete phase. Do not call it under any other
// circumstances.
function getStackAddendumByWorkInProgressFiber$1(workInProgress){var info='';var node=workInProgress;do{info+=describeFiber(node);// Otherwise this return pointer might point to the wrong tree:
node=node['return'];}while(node);return info;}var ReactFiberComponentTreeHook={getStackAddendumByWorkInProgressFiber:getStackAddendumByWorkInProgressFiber$1};var ReactDebugCurrentFrame=ReactGlobalSharedState_1.ReactDebugCurrentFrame;{var getComponentName$3=getComponentName_1;var _require2$2=ReactFiberComponentTreeHook,getStackAddendumByWorkInProgressFiber=_require2$2.getStackAddendumByWorkInProgressFiber;}function getCurrentFiberOwnerName$2(){{var fiber=ReactDebugCurrentFiber.current;if(fiber===null){return null;}if(fiber._debugOwner!=null){return getComponentName$3(fiber._debugOwner);}}return null;}function getCurrentFiberStackAddendum(){{var fiber=ReactDebugCurrentFiber.current;if(fiber===null){return null;}// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
return getStackAddendumByWorkInProgressFiber(fiber);}return null;}function resetCurrentFiber(){ReactDebugCurrentFrame.getCurrentStack=null;ReactDebugCurrentFiber.current=null;ReactDebugCurrentFiber.phase=null;}function setCurrentFiber(fiber,phase){ReactDebugCurrentFrame.getCurrentStack=getCurrentFiberStackAddendum;ReactDebugCurrentFiber.current=fiber;ReactDebugCurrentFiber.phase=phase;}var ReactDebugCurrentFiber={current:null,phase:null,resetCurrentFiber:resetCurrentFiber,setCurrentFiber:setCurrentFiber,getCurrentFiberOwnerName:getCurrentFiberOwnerName$2,getCurrentFiberStackAddendum:getCurrentFiberStackAddendum};var ReactDebugCurrentFiber_1=ReactDebugCurrentFiber;var warnValidStyle$1=emptyFunction;{var camelizeStyleName$1=camelizeStyleName;var getComponentName$2=getComponentName_1;var warning$4=require$$0;var _require$3=ReactDebugCurrentFiber_1,getCurrentFiberOwnerName$1=_require$3.getCurrentFiberOwnerName;// 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/;// style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnedForNaNValue=false;var warnedForInfinityValue=false;var warnHyphenatedStyleName=function(name,owner){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;warning$4(false,'Unsupported style property %s. Did you mean %s?%s',name,camelizeStyleName$1(name),checkRenderMessage(owner));};var warnBadVendoredStyleName=function(name,owner){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;warning$4(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?%s',name,name.charAt(0).toUpperCase()+name.slice(1),checkRenderMessage(owner));};var warnStyleValueWithSemicolon=function(name,value,owner){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;warning$4(false,"Style property values shouldn't contain a semicolon.%s "+'Try "%s: %s" instead.',checkRenderMessage(owner),name,value.replace(badStyleValueWithSemicolonPattern,''));};var warnStyleValueIsNaN=function(name,value,owner){if(warnedForNaNValue){return;}warnedForNaNValue=true;warning$4(false,'`NaN` is an invalid value for the `%s` css style property.%s',name,checkRenderMessage(owner));};var warnStyleValueIsInfinity=function(name,value,owner){if(warnedForInfinityValue){return;}warnedForInfinityValue=true;warning$4(false,'`Infinity` is an invalid value for the `%s` css style property.%s',name,checkRenderMessage(owner));};var checkRenderMessage=function(owner){var ownerName;if(owner!=null){// Stack passes the owner manually all the way to CSSPropertyOperations.
ownerName=getComponentName$2(owner);}else{// Fiber doesn't pass it but uses ReactDebugCurrentFiber to track it.
// It is only enabled in development and tracks host components too.
ownerName=getCurrentFiberOwnerName$1();// TODO: also report the stack.
}if(ownerName){return'\n\nCheck the render method of `'+ownerName+'`.';}return'';};warnValidStyle$1=function(name,value,component){var owner;if(component){// TODO: this only works with Stack. Seems like we need to add unit tests?
owner=component._currentElement._owner;}if(name.indexOf('-')>-1){warnHyphenatedStyleName(name,owner);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name,owner);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value,owner);}if(typeof value==='number'){if(isNaN(value)){warnStyleValueIsNaN(name,value,owner);}else if(!isFinite(value)){warnStyleValueIsInfinity(name,value,owner);}}};}var warnValidStyle_1=warnValidStyle$1;{var hyphenateStyleName$1=hyphenateStyleName;var warnValidStyle=warnValidStyle_1;}var hasShorthandPropertyBug=false;if(ExecutionEnvironment.canUseDOM){var tempStyle=document.createElement('div').style;try{// IE8 throws "Invalid argument." if resetting shorthand style properties.
tempStyle.font='';}catch(e){hasShorthandPropertyBug=true;}}/**
 * Operations for dealing with CSS properties.
 */var CSSPropertyOperations={/**
   * This creates a string that is expected to be equivalent to the style
   * attribute generated by server-side rendering. It by-passes warnings and
   * security checks so it's not safe to use this value for anything other than
   * comparison. It is only used in DEV for SSR validation.
   */createDangerousStringForStyles:function(styles){{var serialized='';var delimiter='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if(styleValue!=null){var isCustomProperty=styleName.indexOf('--')===0;serialized+=delimiter+hyphenateStyleName$1(styleName)+':';serialized+=dangerousStyleValue_1(styleName,styleValue,isCustomProperty);delimiter=';';}}return serialized||null;}},/**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   * @param {ReactDOMComponent} component
   */setValueForStyles:function(node,styles,component){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var isCustomProperty=styleName.indexOf('--')===0;{if(!isCustomProperty){warnValidStyle(styleName,styles[styleName],component);}}var styleValue=dangerousStyleValue_1(styleName,styles[styleName],isCustomProperty);if(styleName==='float'){styleName='cssFloat';}if(isCustomProperty){style.setProperty(styleName,styleValue);}else if(styleValue){style[styleName]=styleValue;}else{var expansion=hasShorthandPropertyBug&&CSSProperty_1.shorthandPropertyExpansions[styleName];if(expansion){// Shorthand property that IE8 won't like unsetting, so unset each
// component to placate it
for(var individualStyleName in expansion){style[individualStyleName]='';}}else{style[styleName]='';}}}}};var CSSPropertyOperations_1=CSSPropertyOperations;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMNamespaces
 */var DOMNamespaces={html:'http://www.w3.org/1999/xhtml',mathml:'http://www.w3.org/1998/Math/MathML',svg:'http://www.w3.org/2000/svg'};var DOMNamespaces_1=DOMNamespaces;var ReactInvalidSetStateWarningHook={};{var warning$7=require$$0;var processingChildContext=false;var warnInvalidSetState=function(){warning$7(!processingChildContext,'setState(...): Cannot call setState() inside getChildContext()');};ReactInvalidSetStateWarningHook={onBeginProcessingChildContext:function(){processingChildContext=true;},onEndProcessingChildContext:function(){processingChildContext=false;},onSetState:function(){warnInvalidSetState();}};}var ReactInvalidSetStateWarningHook_1=ReactInvalidSetStateWarningHook;/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactHostOperationHistoryHook
 * 
 */// Trust the developer to only use this with a true check
var ReactHostOperationHistoryHook=null;{var history=[];ReactHostOperationHistoryHook={onHostOperation:function(operation){history.push(operation);},clearHistory:function(){if(ReactHostOperationHistoryHook._preventClearing){// Should only be used for tests.
return;}history=[];},getHistory:function(){return history;}};}var ReactHostOperationHistoryHook_1=ReactHostOperationHistoryHook;var ReactComponentTreeHook=ReactGlobalSharedState_1.ReactComponentTreeHook;{var warning$6=require$$0;}// Trust the developer to only use this with a true check
var ReactDebugTool$1=null;{var hooks=[];var didHookThrowForEvent={};var callHook=function(event,fn,context,arg1,arg2,arg3,arg4,arg5){try{fn.call(context,arg1,arg2,arg3,arg4,arg5);}catch(e){warning$6(didHookThrowForEvent[event],'Exception thrown by hook while handling %s: %s',event,e+'\n'+e.stack);didHookThrowForEvent[event]=true;}};var emitEvent=function(event,arg1,arg2,arg3,arg4,arg5){for(var i=0;i<hooks.length;i++){var hook=hooks[i];var fn=hook[event];if(fn){callHook(event,fn,hook,arg1,arg2,arg3,arg4,arg5);}}};var isProfiling=false;var flushHistory=[];var lifeCycleTimerStack=[];var currentFlushNesting=0;var currentFlushMeasurements=[];var currentFlushStartTime=0;var currentTimerDebugID=null;var currentTimerStartTime=0;var currentTimerNestedFlushDuration=0;var currentTimerType=null;var lifeCycleTimerHasWarned=false;var clearHistory=function(){ReactComponentTreeHook.purgeUnmountedComponents();ReactHostOperationHistoryHook_1.clearHistory();};var getTreeSnapshot=function(registeredIDs){return registeredIDs.reduce(function(tree,id){var ownerID=ReactComponentTreeHook.getOwnerID(id);var parentID=ReactComponentTreeHook.getParentID(id);tree[id]={displayName:ReactComponentTreeHook.getDisplayName(id),text:ReactComponentTreeHook.getText(id),updateCount:ReactComponentTreeHook.getUpdateCount(id),childIDs:ReactComponentTreeHook.getChildIDs(id),// Text nodes don't have owners but this is close enough.
ownerID:ownerID||parentID&&ReactComponentTreeHook.getOwnerID(parentID)||0,parentID:parentID};return tree;},{});};var resetMeasurements=function(){var previousStartTime=currentFlushStartTime;var previousMeasurements=currentFlushMeasurements;var previousOperations=ReactHostOperationHistoryHook_1.getHistory();if(currentFlushNesting===0){currentFlushStartTime=0;currentFlushMeasurements=[];clearHistory();return;}if(previousMeasurements.length||previousOperations.length){var registeredIDs=ReactComponentTreeHook.getRegisteredIDs();flushHistory.push({duration:performanceNow()-previousStartTime,measurements:previousMeasurements||[],operations:previousOperations||[],treeSnapshot:getTreeSnapshot(registeredIDs)});}clearHistory();currentFlushStartTime=performanceNow();currentFlushMeasurements=[];};var checkDebugID=function(debugID){var allowRoot=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(allowRoot&&debugID===0){return;}if(!debugID){warning$6(false,'ReactDebugTool: debugID may not be empty.');}};var beginLifeCycleTimer=function(debugID,timerType){if(currentFlushNesting===0){return;}if(currentTimerType&&!lifeCycleTimerHasWarned){warning$6(false,'There is an internal error in the React performance measurement code.'+'\n\nDid not expect %s timer to start while %s timer is still in '+'progress for %s instance.',timerType,currentTimerType||'no',debugID===currentTimerDebugID?'the same':'another');lifeCycleTimerHasWarned=true;}currentTimerStartTime=performanceNow();currentTimerNestedFlushDuration=0;currentTimerDebugID=debugID;currentTimerType=timerType;};var endLifeCycleTimer=function(debugID,timerType){if(currentFlushNesting===0){return;}if(currentTimerType!==timerType&&!lifeCycleTimerHasWarned){warning$6(false,'There is an internal error in the React performance measurement code. '+'We did not expect %s timer to stop while %s timer is still in '+'progress for %s instance. Please report this as a bug in React.',timerType,currentTimerType||'no',debugID===currentTimerDebugID?'the same':'another');lifeCycleTimerHasWarned=true;}if(isProfiling){currentFlushMeasurements.push({timerType:timerType,instanceID:debugID,duration:performanceNow()-currentTimerStartTime-currentTimerNestedFlushDuration});}currentTimerStartTime=0;currentTimerNestedFlushDuration=0;currentTimerDebugID=null;currentTimerType=null;};var pauseCurrentLifeCycleTimer=function(){var currentTimer={startTime:currentTimerStartTime,nestedFlushStartTime:performanceNow(),debugID:currentTimerDebugID,timerType:currentTimerType};lifeCycleTimerStack.push(currentTimer);currentTimerStartTime=0;currentTimerNestedFlushDuration=0;currentTimerDebugID=null;currentTimerType=null;};var resumeCurrentLifeCycleTimer=function(){var _lifeCycleTimerStack$=lifeCycleTimerStack.pop(),startTime=_lifeCycleTimerStack$.startTime,nestedFlushStartTime=_lifeCycleTimerStack$.nestedFlushStartTime,debugID=_lifeCycleTimerStack$.debugID,timerType=_lifeCycleTimerStack$.timerType;var nestedFlushDuration=performanceNow()-nestedFlushStartTime;currentTimerStartTime=startTime;currentTimerNestedFlushDuration+=nestedFlushDuration;currentTimerDebugID=debugID;currentTimerType=timerType;};var lastMarkTimeStamp=0;var canUsePerformanceMeasure=typeof performance!=='undefined'&&typeof performance.mark==='function'&&typeof performance.clearMarks==='function'&&typeof performance.measure==='function'&&typeof performance.clearMeasures==='function';var shouldMark=function(debugID){if(!isProfiling||!canUsePerformanceMeasure){return false;}var element=ReactComponentTreeHook.getElement(debugID);if(element==null||typeof element!=='object'){return false;}var isHostElement=typeof element.type==='string';if(isHostElement){return false;}return true;};var markBegin=function(debugID,markType){if(!shouldMark(debugID)){return;}var markName=debugID+'::'+markType;lastMarkTimeStamp=performanceNow();performance.mark(markName);};var markEnd=function(debugID,markType){if(!shouldMark(debugID)){return;}var markName=debugID+'::'+markType;var displayName=ReactComponentTreeHook.getDisplayName(debugID)||'Unknown';// Chrome has an issue of dropping markers recorded too fast:
// https://bugs.chromium.org/p/chromium/issues/detail?id=640652
// To work around this, we will not report very small measurements.
// I determined the magic number by tweaking it back and forth.
// 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
// When the bug is fixed, we can `measure()` unconditionally if we want to.
var timeStamp=performanceNow();if(timeStamp-lastMarkTimeStamp>0.1){var measurementName=displayName+' ['+markType+']';performance.measure(measurementName,markName);}performance.clearMarks(markName);if(measurementName){performance.clearMeasures(measurementName);}};ReactDebugTool$1={addHook:function(hook){hooks.push(hook);},removeHook:function(hook){for(var i=0;i<hooks.length;i++){if(hooks[i]===hook){hooks.splice(i,1);i--;}}},isProfiling:function(){return isProfiling;},beginProfiling:function(){if(isProfiling){return;}isProfiling=true;flushHistory.length=0;resetMeasurements();ReactDebugTool$1.addHook(ReactHostOperationHistoryHook_1);},endProfiling:function(){if(!isProfiling){return;}isProfiling=false;resetMeasurements();ReactDebugTool$1.removeHook(ReactHostOperationHistoryHook_1);},getFlushHistory:function(){return flushHistory;},onBeginFlush:function(){currentFlushNesting++;resetMeasurements();pauseCurrentLifeCycleTimer();emitEvent('onBeginFlush');},onEndFlush:function(){resetMeasurements();currentFlushNesting--;resumeCurrentLifeCycleTimer();emitEvent('onEndFlush');},onBeginLifeCycleTimer:function(debugID,timerType){checkDebugID(debugID);emitEvent('onBeginLifeCycleTimer',debugID,timerType);markBegin(debugID,timerType);beginLifeCycleTimer(debugID,timerType);},onEndLifeCycleTimer:function(debugID,timerType){checkDebugID(debugID);endLifeCycleTimer(debugID,timerType);markEnd(debugID,timerType);emitEvent('onEndLifeCycleTimer',debugID,timerType);},onBeginProcessingChildContext:function(){emitEvent('onBeginProcessingChildContext');},onEndProcessingChildContext:function(){emitEvent('onEndProcessingChildContext');},onHostOperation:function(operation){checkDebugID(operation.instanceID);emitEvent('onHostOperation',operation);},onSetState:function(){emitEvent('onSetState');},onSetChildren:function(debugID,childDebugIDs){checkDebugID(debugID);childDebugIDs.forEach(checkDebugID);emitEvent('onSetChildren',debugID,childDebugIDs);},onBeforeMountComponent:function(debugID,element,parentDebugID){checkDebugID(debugID);checkDebugID(parentDebugID,true);emitEvent('onBeforeMountComponent',debugID,element,parentDebugID);markBegin(debugID,'mount');},onMountComponent:function(debugID){checkDebugID(debugID);markEnd(debugID,'mount');emitEvent('onMountComponent',debugID);},onBeforeUpdateComponent:function(debugID,element){checkDebugID(debugID);emitEvent('onBeforeUpdateComponent',debugID,element);markBegin(debugID,'update');},onUpdateComponent:function(debugID){checkDebugID(debugID);markEnd(debugID,'update');emitEvent('onUpdateComponent',debugID);},onBeforeUnmountComponent:function(debugID){checkDebugID(debugID);emitEvent('onBeforeUnmountComponent',debugID);markBegin(debugID,'unmount');},onUnmountComponent:function(debugID){checkDebugID(debugID);markEnd(debugID,'unmount');emitEvent('onUnmountComponent',debugID);},onTestEvent:function(){emitEvent('onTestEvent');}};ReactDebugTool$1.addHook(ReactInvalidSetStateWarningHook_1);ReactDebugTool$1.addHook(ReactComponentTreeHook);var url=ExecutionEnvironment.canUseDOM&&window.location.href||'';if(/[?&]react_perf\b/.test(url)){ReactDebugTool$1.beginProfiling();}}var ReactDebugTool_1=ReactDebugTool$1;// Trust the developer to only use ReactInstrumentation with a true check
var debugTool=null;{var ReactDebugTool=ReactDebugTool_1;debugTool=ReactDebugTool;}var ReactInstrumentation={debugTool:debugTool};{var warning$5=require$$0;}// isAttributeNameSafe() is currently duplicated in DOMMarkupOperations.
// TODO: Find a better place for this.
var VALID_ATTRIBUTE_NAME_REGEX=new RegExp('^['+DOMProperty_1.ATTRIBUTE_NAME_START_CHAR+']['+DOMProperty_1.ATTRIBUTE_NAME_CHAR+']*$');var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(validatedAttributeNameCache.hasOwnProperty(attributeName)){return true;}if(illegalAttributeNameCache.hasOwnProperty(attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;{warning$5(false,'Invalid attribute name: `%s`',attributeName);}return false;}// shouldIgnoreValue() is currently duplicated in DOMMarkupOperations.
// TODO: Find a better place for this.
function shouldIgnoreValue(propertyInfo,value){return value==null||propertyInfo.hasBooleanValue&&!value||propertyInfo.hasNumericValue&&isNaN(value)||propertyInfo.hasPositiveNumericValue&&value<1||propertyInfo.hasOverloadedBooleanValue&&value===false;}/**
 * Operations for dealing with DOM properties.
 */var DOMPropertyOperations={setAttributeForID:function(node,id){node.setAttribute(DOMProperty_1.ID_ATTRIBUTE_NAME,id);},setAttributeForRoot:function(node){node.setAttribute(DOMProperty_1.ROOT_ATTRIBUTE_NAME,'');},/**
   * Get the value for a property on a node. Only used in DEV for SSR validation.
   * The "expected" argument is used as a hint of what the expected value is.
   * Some properties have multiple equivalent values.
   */getValueForProperty:function(node,name,expected){{var propertyInfo=DOMProperty_1.properties.hasOwnProperty(name)?DOMProperty_1.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod||propertyInfo.mustUseProperty){return node[propertyInfo.propertyName];}else{var attributeName=propertyInfo.attributeName;var stringValue=null;if(propertyInfo.hasOverloadedBooleanValue){if(node.hasAttribute(attributeName)){var value=node.getAttribute(attributeName);if(value===''){return true;}if(shouldIgnoreValue(propertyInfo,expected)){return value;}if(value===''+expected){return expected;}return value;}}else if(node.hasAttribute(attributeName)){if(shouldIgnoreValue(propertyInfo,expected)){// We had an attribute but shouldn't have had one, so read it
// for the error message.
return node.getAttribute(attributeName);}if(propertyInfo.hasBooleanValue){// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return expected;}// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
stringValue=node.getAttribute(attributeName);}if(shouldIgnoreValue(propertyInfo,expected)){return stringValue===null?expected:stringValue;}else if(stringValue===''+expected){return expected;}else{return stringValue;}}}else if(DOMProperty_1.isCustomAttribute(name)){return DOMPropertyOperations.diffValueForAttribute(node,name,expected);}}},/**
   * Get the value for a attribute on a node. Only used in DEV for SSR validation.
   * The third argument is used as a hint of what the expected value is. Some
   * attributes have multiple equivalent values.
   */getValueForAttribute:function(node,name,expected){{if(!isAttributeNameSafe(name)){return;}if(!node.hasAttribute(name)){return expected===undefined?undefined:null;}var value=node.getAttribute(name);if(value===''+expected){return expected;}return value;}},/**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */setValueForProperty:function(node,name,value){var propertyInfo=DOMProperty_1.properties.hasOwnProperty(name)?DOMProperty_1.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,value);}else if(shouldIgnoreValue(propertyInfo,value)){DOMPropertyOperations.deleteValueForProperty(node,name);return;}else if(propertyInfo.mustUseProperty){// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propertyInfo.propertyName]=value;}else{var attributeName=propertyInfo.attributeName;var namespace=propertyInfo.attributeNamespace;// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
if(namespace){node.setAttributeNS(namespace,attributeName,''+value);}else if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){node.setAttribute(attributeName,'');}else{node.setAttribute(attributeName,''+value);}}}else if(DOMProperty_1.isCustomAttribute(name)){DOMPropertyOperations.setValueForAttribute(node,name,value);return;}{var payload={};payload[name]=value;ReactInstrumentation.debugTool.onHostOperation({instanceID:ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,type:'update attribute',payload:payload});}},setValueForAttribute:function(node,name,value){if(!isAttributeNameSafe(name)){return;}if(value==null){node.removeAttribute(name);}else{node.setAttribute(name,''+value);}{var payload={};payload[name]=value;ReactInstrumentation.debugTool.onHostOperation({instanceID:ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,type:'update attribute',payload:payload});}},/**
   * Deletes an attributes from a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */deleteValueForAttribute:function(node,name){node.removeAttribute(name);{ReactInstrumentation.debugTool.onHostOperation({instanceID:ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,type:'remove attribute',payload:name});}},/**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */deleteValueForProperty:function(node,name){var propertyInfo=DOMProperty_1.properties.hasOwnProperty(name)?DOMProperty_1.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,undefined);}else if(propertyInfo.mustUseProperty){var propName=propertyInfo.propertyName;if(propertyInfo.hasBooleanValue){node[propName]=false;}else{node[propName]='';}}else{node.removeAttribute(propertyInfo.attributeName);}}else if(DOMProperty_1.isCustomAttribute(name)){node.removeAttribute(name);}{ReactInstrumentation.debugTool.onHostOperation({instanceID:ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,type:'remove attribute',payload:name});}}};var DOMPropertyOperations_1=DOMPropertyOperations;var ReactControlledValuePropTypes={checkPropTypes:null};{var warning$9=require$$0;var emptyFunction$2=emptyFunction;var PropTypes=propTypes;var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';ReactControlledValuePropTypes.checkPropTypes=emptyFunction$2;var hasReadOnlyValue={button:true,checkbox:true,image:true,hidden:true,radio:true,reset:true,submit:true};var propTypes$1={value:function(props,propName,componentName){if(!props[propName]||hasReadOnlyValue[props.type]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');},checked:function(props,propName,componentName){if(!props[propName]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');},onChange:PropTypes.func};var loggedTypeFailures={};/**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */ReactControlledValuePropTypes.checkPropTypes=function(tagName,props,getStack){for(var propName in propTypes$1){if(propTypes$1.hasOwnProperty(propName)){var error=propTypes$1[propName](props,propName,tagName,'prop',null,ReactPropTypesSecret);}if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;warning$9(false,'Failed form propType: %s%s',error.message,getStack());}}};}var ReactControlledValuePropTypes_1=ReactControlledValuePropTypes;var getCurrentFiberOwnerName$3=ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;{var _require2$3=ReactDebugCurrentFiber_1,getCurrentFiberStackAddendum$1=_require2$3.getCurrentFiberStackAddendum;var warning$8=require$$0;}var didWarnValueDefaultValue=false;var didWarnCheckedDefaultChecked=false;var didWarnControlledToUncontrolled=false;var didWarnUncontrolledToControlled=false;function isControlled(props){var usesChecked=props.type==='checkbox'||props.type==='radio';return usesChecked?props.checked!=null:props.value!=null;}/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */var ReactDOMInput={getHostProps:function(element,props){var node=element;var value=props.value;var checked=props.checked;var hostProps=_assign({// Make sure we set .type before any other properties (setting .value
// before .type means .value is lost in IE11 and below)
type:undefined,// Make sure we set .step before .value (setting .value before .step
// means .value is rounded on mount, based upon step precision)
step:undefined,// Make sure we set .min & .max before .value (to ensure proper order
// in corner cases such as min or max deriving from value, e.g. Issue #7170)
min:undefined,max:undefined},props,{defaultChecked:undefined,defaultValue:undefined,value:value!=null?value:node._wrapperState.initialValue,checked:checked!=null?checked:node._wrapperState.initialChecked});return hostProps;},initWrapperState:function(element,props){{ReactControlledValuePropTypes_1.checkPropTypes('input',props,getCurrentFiberStackAddendum$1);if(props.checked!==undefined&&props.defaultChecked!==undefined&&!didWarnCheckedDefaultChecked){warning$8(false,'%s contains an input of type %s with both checked and defaultChecked props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the checked prop, or the defaultChecked prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',getCurrentFiberOwnerName$3()||'A component',props.type);didWarnCheckedDefaultChecked=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){warning$8(false,'%s contains an input of type %s with both value and defaultValue props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',getCurrentFiberOwnerName$3()||'A component',props.type);didWarnValueDefaultValue=true;}}var defaultValue=props.defaultValue;var node=element;node._wrapperState={initialChecked:props.checked!=null?props.checked:props.defaultChecked,initialValue:props.value!=null?props.value:defaultValue,controlled:isControlled(props)};},updateWrapper:function(element,props){var node=element;{var controlled=isControlled(props);if(!node._wrapperState.controlled&&controlled&&!didWarnUncontrolledToControlled){warning$8(false,'A component is changing an uncontrolled input of type %s to be controlled. '+'Input elements should not switch from uncontrolled to controlled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s',props.type,getCurrentFiberStackAddendum$1());didWarnUncontrolledToControlled=true;}if(node._wrapperState.controlled&&!controlled&&!didWarnControlledToUncontrolled){warning$8(false,'A component is changing a controlled input of type %s to be uncontrolled. '+'Input elements should not switch from controlled to uncontrolled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s',props.type,getCurrentFiberStackAddendum$1());didWarnControlledToUncontrolled=true;}}var checked=props.checked;if(checked!=null){DOMPropertyOperations_1.setValueForProperty(node,'checked',checked||false);}var value=props.value;if(value!=null){if(value===0&&node.value===''){node.value='0';// Note: IE9 reports a number inputs as 'text', so check props instead.
}else if(props.type==='number'){// Simulate `input.valueAsNumber`. IE9 does not support it
var valueAsNumber=parseFloat(node.value)||0;if(// eslint-disable-next-line
value!=valueAsNumber||// eslint-disable-next-line
value==valueAsNumber&&node.value!=value){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
node.value=''+value;}}else if(node.value!==''+value){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
node.value=''+value;}}else{if(props.value==null&&props.defaultValue!=null){// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
if(node.defaultValue!==''+props.defaultValue){node.defaultValue=''+props.defaultValue;}}if(props.checked==null&&props.defaultChecked!=null){node.defaultChecked=!!props.defaultChecked;}}},postMountWrapper:function(element,props){var node=element;// Detach value from defaultValue. We won't do anything if we're working on
// submit or reset inputs as those values & defaultValues are linked. They
// are not resetable nodes so this operation doesn't matter and actually
// removes browser-default values (eg "Submit Query") when no value is
// provided.
switch(props.type){case'submit':case'reset':break;case'color':case'date':case'datetime':case'datetime-local':case'month':case'time':case'week':// This fixes the no-show issue on iOS Safari and Android Chrome:
// https://github.com/facebook/react/issues/7233
node.value='';node.value=node.defaultValue;break;default:node.value=node.value;break;}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var name=node.name;if(name!==''){node.name='';}node.defaultChecked=!node.defaultChecked;node.defaultChecked=!node.defaultChecked;if(name!==''){node.name=name;}},restoreControlledState:function(element,props){var node=element;ReactDOMInput.updateWrapper(node,props);updateNamedCousins(node,props);}};function updateNamedCousins(rootNode,props){var name=props.name;if(props.type==='radio'&&name!=null){var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;}// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form. It might not even be in the
// document. Let's just use the local `querySelectorAll` to ensure we don't
// miss anything.
var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;}// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var otherProps=ReactDOMComponentTree_1.getFiberCurrentPropsFromNode(otherNode);!otherProps?invariant(false,'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'):void 0;// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
ReactDOMInput.updateWrapper(otherNode,otherProps);}}}var ReactDOMFiberInput=ReactDOMInput;{var warning$10=require$$0;}function flattenChildren(children){var content='';// Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
// We can silently skip them because invalid DOM nesting warning
// catches these cases in Fiber.
react.Children.forEach(children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){content+=child;}});return content;}/**
 * Implements an <option> host component that warns when `selected` is set.
 */var ReactDOMOption={validateProps:function(element,props){// TODO (yungsters): Remove support for `selected` in <option>.
{warning$10(props.selected==null,'Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.');}},postMountWrapper:function(element,props){// value="" should make a value attribute (#6219)
if(props.value!=null){element.setAttribute('value',props.value);}},getHostProps:function(element,props){var hostProps=_assign({children:undefined},props);var content=flattenChildren(props.children);if(content){hostProps.children=content;}return hostProps;}};var ReactDOMFiberOption=ReactDOMOption;var getCurrentFiberOwnerName$4=ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;{var didWarnValueDefaultValue$1=false;var warning$11=require$$0;var _require2$4=ReactDebugCurrentFiber_1,getCurrentFiberStackAddendum$2=_require2$4.getCurrentFiberStackAddendum;}function getDeclarationErrorAddendum(){var ownerName=getCurrentFiberOwnerName$4();if(ownerName){return'\n\nCheck the render method of `'+ownerName+'`.';}return'';}var valuePropNames=['value','defaultValue'];/**
 * Validation function for `value` and `defaultValue`.
 */function checkSelectPropTypes(props){ReactControlledValuePropTypes_1.checkPropTypes('select',props,getCurrentFiberStackAddendum$2);for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}var isArray=Array.isArray(props[propName]);if(props.multiple&&!isArray){warning$11(false,'The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum());}else if(!props.multiple&&isArray){warning$11(false,'The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum());}}}function updateOptions(node,multiple,propValue){var options=node.options;if(multiple){var selectedValues=propValue;var selectedValue={};for(var i=0;i<selectedValues.length;i++){// Prefix to avoid chaos with special keys.
selectedValue['$'+selectedValues[i]]=true;}for(var _i=0;_i<options.length;_i++){var selected=selectedValue.hasOwnProperty('$'+options[_i].value);if(options[_i].selected!==selected){options[_i].selected=selected;}}}else{// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
var _selectedValue=''+propValue;for(var _i2=0;_i2<options.length;_i2++){if(options[_i2].value===_selectedValue){options[_i2].selected=true;return;}}if(options.length){options[0].selected=true;}}}/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */var ReactDOMSelect={getHostProps:function(element,props){return _assign({},props,{value:undefined});},initWrapperState:function(element,props){var node=element;{checkSelectPropTypes(props);}var value=props.value;node._wrapperState={initialValue:value!=null?value:props.defaultValue,wasMultiple:!!props.multiple};{if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue$1){warning$11(false,'Select elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled select '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components');didWarnValueDefaultValue$1=true;}}},postMountWrapper:function(element,props){var node=element;node.multiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value);}else if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue);}},postUpdateWrapper:function(element,props){var node=element;// After the initial mount, we control selected-ness manually so don't pass
// this value down
node._wrapperState.initialValue=undefined;var wasMultiple=node._wrapperState.wasMultiple;node._wrapperState.wasMultiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value);}else if(wasMultiple!==!!props.multiple){// For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue);}else{// Revert the select back to its default unselected state.
updateOptions(node,!!props.multiple,props.multiple?[]:'');}}},restoreControlledState:function(element,props){var node=element;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value);}}};var ReactDOMFiberSelect=ReactDOMSelect;{var warning$12=require$$0;var _require$4=ReactDebugCurrentFiber_1,getCurrentFiberStackAddendum$3=_require$4.getCurrentFiberStackAddendum;}var didWarnValDefaultVal=false;/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */var ReactDOMTextarea={getHostProps:function(element,props){var node=element;!(props.dangerouslySetInnerHTML==null)?invariant(false,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):void 0;// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Ben seemed to like this solution.
// The value can be a boolean or object so that's why it's forced to be a string.
var hostProps=_assign({},props,{value:undefined,defaultValue:undefined,children:''+node._wrapperState.initialValue});return hostProps;},initWrapperState:function(element,props){var node=element;{ReactControlledValuePropTypes_1.checkPropTypes('textarea',props,getCurrentFiberStackAddendum$3);if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValDefaultVal){warning$12(false,'Textarea elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled textarea '+'and remove one of these props. More info: '+'https://fb.me/react-controlled-components');didWarnValDefaultVal=true;}}var value=props.value;var initialValue=value;// Only bother fetching default value if we're going to use it
if(value==null){var defaultValue=props.defaultValue;// TODO (yungsters): Remove support for children content in <textarea>.
var children=props.children;if(children!=null){{warning$12(false,'Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.');}!(defaultValue==null)?invariant(false,'If you supply `defaultValue` on a <textarea>, do not pass children.'):void 0;if(Array.isArray(children)){!(children.length<=1)?invariant(false,'<textarea> can only have at most one child.'):void 0;children=children[0];}defaultValue=''+children;}if(defaultValue==null){defaultValue='';}initialValue=defaultValue;}node._wrapperState={initialValue:''+initialValue};},updateWrapper:function(element,props){var node=element;var value=props.value;if(value!=null){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var newValue=''+value;// To avoid side effects (such as losing text selection), only set value if changed
if(newValue!==node.value){node.value=newValue;}if(props.defaultValue==null){node.defaultValue=newValue;}}if(props.defaultValue!=null){node.defaultValue=props.defaultValue;}},postMountWrapper:function(element,props){var node=element;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
var textContent=node.textContent;// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
if(textContent===node._wrapperState.initialValue){node.value=textContent;}},restoreControlledState:function(element,props){// DOM component is still mounted; update
ReactDOMTextarea.updateWrapper(element,props);}};var ReactDOMFiberTextarea=ReactDOMTextarea;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule omittedCloseTags
 */// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags={area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true};var omittedCloseTags_1=omittedCloseTags;var _extends=_assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var voidElementTags=_extends({menuitem:true},omittedCloseTags_1);var voidElementTags_1=voidElementTags;{var warning$13=require$$0;}var HTML$1='__html';function getDeclarationErrorAddendum$1(getCurrentOwnerName){{var ownerName=getCurrentOwnerName();if(ownerName){// TODO: also report the stack.
return'\n\nThis DOM node was rendered by `'+ownerName+'`.';}}return'';}function assertValidProps(tag,props,getCurrentOwnerName){if(!props){return;}// Note the use of `==` which checks for null or undefined.
if(voidElementTags_1[tag]){!(props.children==null&&props.dangerouslySetInnerHTML==null)?invariant(false,'%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s',tag,getDeclarationErrorAddendum$1(getCurrentOwnerName)):void 0;}if(props.dangerouslySetInnerHTML!=null){!(props.children==null)?invariant(false,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):void 0;!(typeof props.dangerouslySetInnerHTML==='object'&&HTML$1 in props.dangerouslySetInnerHTML)?invariant(false,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.'):void 0;}{warning$13(props.innerHTML==null,'Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.');warning$13(props.suppressContentEditableWarning||!props.contentEditable||props.children==null,'A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.');warning$13(props.onFocusIn==null&&props.onFocusOut==null,'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. '+'All React events are normalized to bubble, so onFocusIn and onFocusOut '+'are not needed/supported by React.');}!(props.style==null||typeof props.style==='object')?invariant(false,'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s',getDeclarationErrorAddendum$1(getCurrentOwnerName)):void 0;}var assertValidProps_1=assertValidProps;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule inputValueTracking
 * 
 */function isCheckable(elem){var type=elem.type;var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(type==='checkbox'||type==='radio');}function getTracker(node){return node._valueTracker;}function detachTracker(node){node._valueTracker=null;}function getValueFromNode(node){var value='';if(!node){return value;}if(isCheckable(node)){value=node.checked?'true':'false';}else{value=node.value;}return value;}function trackValueOnNode(node){var valueField=isCheckable(node)?'checked':'value';var descriptor=Object.getOwnPropertyDescriptor(node.constructor.prototype,valueField);var currentValue=''+node[valueField];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(node.hasOwnProperty(valueField)||typeof descriptor.get!=='function'||typeof descriptor.set!=='function'){return;}Object.defineProperty(node,valueField,{enumerable:descriptor.enumerable,configurable:true,get:function(){return descriptor.get.call(this);},set:function(value){currentValue=''+value;descriptor.set.call(this,value);}});var tracker={getValue:function(){return currentValue;},setValue:function(value){currentValue=''+value;},stopTracking:function(){detachTracker(node);delete node[valueField];}};return tracker;}var inputValueTracking={// exposed for testing
_getTrackerFromNode:getTracker,track:function(node){if(getTracker(node)){return;}// TODO: Once it's just Fiber we can move this to node._wrapperState
node._valueTracker=trackValueOnNode(node);},updateValueIfChanged:function(node){if(!node){return false;}var tracker=getTracker(node);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!tracker){return true;}var lastValue=tracker.getValue();var nextValue=getValueFromNode(node);if(nextValue!==lastValue){tracker.setValue(nextValue);return true;}return false;},stopTracking:function(node){var tracker=getTracker(node);if(tracker){tracker.stopTracking();}}};var inputValueTracking_1=inputValueTracking;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isCustomComponent
 */function isCustomComponent(tagName,props){return tagName.indexOf('-')>=0||props.is!=null;}var isCustomComponent_1=isCustomComponent;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createMicrosoftUnsafeLocalFunction
 *//* globals MSApp *//**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */var createMicrosoftUnsafeLocalFunction=function(func){if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){return function(arg0,arg1,arg2,arg3){MSApp.execUnsafeLocalFunction(function(){return func(arg0,arg1,arg2,arg3);});};}else{return func;}};var createMicrosoftUnsafeLocalFunction_1=createMicrosoftUnsafeLocalFunction;// SVG temp container for IE lacking innerHTML
var reusableSVGContainer;/**
 * Set the innerHTML property of a node
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var setInnerHTML=createMicrosoftUnsafeLocalFunction_1(function(node,html){// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
if(node.namespaceURI===DOMNamespaces_1.svg&&!('innerHTML'in node)){reusableSVGContainer=reusableSVGContainer||document.createElement('div');reusableSVGContainer.innerHTML='<svg>'+html+'</svg>';var svgNode=reusableSVGContainer.firstChild;while(svgNode.firstChild){node.appendChild(svgNode.firstChild);}}else{node.innerHTML=html;}});var setInnerHTML_1=setInnerHTML;/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Based on the escape-html library, which is used under the MIT License below:
 *
 * Copyright (c) 2012-2013 TJ Holowaychuk
 * Copyright (c) 2015 Andreas Lubbe
 * Copyright (c) 2015 Tiancheng "Timothy" Gu
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule escapeTextContentForBrowser
 */// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */var matchHtmlRegExp=/["'&<>]/;/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */function escapeHtml(string){var str=''+string;var match=matchHtmlRegExp.exec(str);if(!match){return str;}var escape;var html='';var index=0;var lastIndex=0;for(index=match.index;index<str.length;index++){switch(str.charCodeAt(index)){case 34:// "
escape='&quot;';break;case 38:// &
escape='&amp;';break;case 39:// '
escape='&#x27;';// modified from escape-html; used to be '&#39'
break;case 60:// <
escape='&lt;';break;case 62:// >
escape='&gt;';break;default:continue;}if(lastIndex!==index){html+=str.substring(lastIndex,index);}lastIndex=index+1;html+=escape;}return lastIndex!==index?html+str.substring(lastIndex,index):html;}// end code copied and modified from escape-html
/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */function escapeTextContentForBrowser(text){if(typeof text==='boolean'||typeof text==='number'){// this shortcircuit helps perf for types that we know will never have
// special characters, especially given that this function is used often
// for numeric dom ids.
return''+text;}return escapeHtml(text);}var escapeTextContentForBrowser_1=escapeTextContentForBrowser;var TEXT_NODE$2=HTMLNodeType_1.TEXT_NODE;/**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */var setTextContent=function(node,text){if(text){var firstChild=node.firstChild;if(firstChild&&firstChild===node.lastChild&&firstChild.nodeType===TEXT_NODE$2){firstChild.nodeValue=text;return;}}node.textContent=text;};if(ExecutionEnvironment.canUseDOM){if(!('textContent'in document.documentElement)){setTextContent=function(node,text){if(node.nodeType===TEXT_NODE$2){node.nodeValue=text;return;}setInnerHTML_1(node,escapeTextContentForBrowser_1(text));};}}var setTextContent_1=setTextContent;var warnedProperties={};var rARIA=new RegExp('^(aria)-['+DOMProperty_1.ATTRIBUTE_NAME_CHAR+']*$');{var warning$14=require$$0;var _require$5=ReactGlobalSharedState_1,ReactComponentTreeHook$1=_require$5.ReactComponentTreeHook,ReactDebugCurrentFrame$1=_require$5.ReactDebugCurrentFrame;var getStackAddendumByID=ReactComponentTreeHook$1.getStackAddendumByID;}function getStackAddendum(debugID){if(debugID!=null){// This can only happen on Stack
return getStackAddendumByID(debugID);}else{// This can only happen on Fiber / Server
var stack=ReactDebugCurrentFrame$1.getStackAddendum();return stack!=null?stack:'';}}function validateProperty(tagName,name,debugID){if(warnedProperties.hasOwnProperty(name)&&warnedProperties[name]){return true;}if(rARIA.test(name)){var lowerCasedName=name.toLowerCase();var standardName=DOMProperty_1.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty_1.getPossibleStandardName[lowerCasedName]:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(standardName==null){warnedProperties[name]=true;return false;}// aria-* attributes should be lowercase; suggest the lowercase version.
if(name!==standardName){warning$14(false,'Unknown ARIA attribute %s. Did you mean %s?%s',name,standardName,getStackAddendum(debugID));warnedProperties[name]=true;return true;}}return true;}function warnInvalidARIAProps(type,props,debugID){var invalidProps=[];for(var key in props){var isValid=validateProperty(type,key,debugID);if(!isValid){invalidProps.push(key);}}var unknownPropString=invalidProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(invalidProps.length===1){warning$14(false,'Invalid aria prop %s on <%s> tag. '+'For details, see https://fb.me/invalid-aria-prop%s',unknownPropString,type,getStackAddendum(debugID));}else if(invalidProps.length>1){warning$14(false,'Invalid aria props %s on <%s> tag. '+'For details, see https://fb.me/invalid-aria-prop%s',unknownPropString,type,getStackAddendum(debugID));}}function validateProperties(type,props,debugID/* Stack only */){if(type.indexOf('-')>=0||props.is){return;}warnInvalidARIAProps(type,props,debugID);}var ReactDOMInvalidARIAHook$1={// Fiber
validateProperties:validateProperties,// Stack
onBeforeMountComponent:function(debugID,element){if(true&&element!=null&&typeof element.type==='string'){validateProperties(element.type,element.props,debugID);}},onBeforeUpdateComponent:function(debugID,element){if(true&&element!=null&&typeof element.type==='string'){validateProperties(element.type,element.props,debugID);}}};var ReactDOMInvalidARIAHook_1=ReactDOMInvalidARIAHook$1;{var warning$15=require$$0;var _require$6=ReactGlobalSharedState_1,ReactComponentTreeHook$2=_require$6.ReactComponentTreeHook,ReactDebugCurrentFrame$2=_require$6.ReactDebugCurrentFrame;var getStackAddendumByID$1=ReactComponentTreeHook$2.getStackAddendumByID;}var didWarnValueNull=false;function getStackAddendum$1(debugID){if(debugID!=null){// This can only happen on Stack
return getStackAddendumByID$1(debugID);}else{// This can only happen on Fiber / Server
var stack=ReactDebugCurrentFrame$2.getStackAddendum();return stack!=null?stack:'';}}function validateProperties$1(type,props,debugID/* Stack only */){if(type!=='input'&&type!=='textarea'&&type!=='select'){return;}if(props!=null&&props.value===null&&!didWarnValueNull){warning$15(false,'`value` prop on `%s` should not be null. '+'Consider using the empty string to clear the component or `undefined` '+'for uncontrolled components.%s',type,getStackAddendum$1(debugID));didWarnValueNull=true;}}var ReactDOMNullInputValuePropHook$1={// Fiber
validateProperties:validateProperties$1,// Stack
onBeforeMountComponent:function(debugID,element){if(true&&element!=null&&typeof element.type==='string'){validateProperties$1(element.type,element.props,debugID);}},onBeforeUpdateComponent:function(debugID,element){if(true&&element!=null&&typeof element.type==='string'){validateProperties$1(element.type,element.props,debugID);}}};var ReactDOMNullInputValuePropHook_1=ReactDOMNullInputValuePropHook$1;{var warning$16=require$$0;var _require$7=ReactGlobalSharedState_1,ReactComponentTreeHook$3=_require$7.ReactComponentTreeHook,ReactDebugCurrentFrame$3=_require$7.ReactDebugCurrentFrame;var getStackAddendumByID$2=ReactComponentTreeHook$3.getStackAddendumByID;}function getStackAddendum$2(debugID){if(debugID!=null){// This can only happen on Stack
return getStackAddendumByID$2(debugID);}else{// This can only happen on Fiber / Server
var stack=ReactDebugCurrentFrame$3.getStackAddendum();return stack!=null?stack:'';}}{var reactProps={children:true,dangerouslySetInnerHTML:true,key:true,ref:true,autoFocus:true,defaultValue:true,defaultChecked:true,innerHTML:true,suppressContentEditableWarning:true,onFocusIn:true,onFocusOut:true};var warnedProperties$1={};var EVENT_NAME_REGEX=/^on[A-Z]/;var validateProperty$1=function(tagName,name,debugID){if(DOMProperty_1.properties.hasOwnProperty(name)||DOMProperty_1.isCustomAttribute(name)){return true;}if(reactProps.hasOwnProperty(name)&&reactProps[name]||warnedProperties$1.hasOwnProperty(name)&&warnedProperties$1[name]){return true;}if(EventPluginRegistry_1.registrationNameModules.hasOwnProperty(name)){return true;}if(EventPluginRegistry_1.plugins.length===0&&EVENT_NAME_REGEX.test(name)){// If no event plugins have been injected, we might be in a server environment.
// Don't check events in this case.
return true;}warnedProperties$1[name]=true;var lowerCasedName=name.toLowerCase();// data-* attributes should be lowercase; suggest the lowercase version
var standardName=DOMProperty_1.isCustomAttribute(lowerCasedName)?lowerCasedName:DOMProperty_1.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty_1.getPossibleStandardName[lowerCasedName]:null;var registrationName=EventPluginRegistry_1.possibleRegistrationNames.hasOwnProperty(lowerCasedName)?EventPluginRegistry_1.possibleRegistrationNames[lowerCasedName]:null;if(standardName!=null){warning$16(false,'Unknown DOM property %s. Did you mean %s?%s',name,standardName,getStackAddendum$2(debugID));return true;}else if(registrationName!=null){warning$16(false,'Unknown event handler property %s. Did you mean `%s`?%s',name,registrationName,getStackAddendum$2(debugID));return true;}else{// We were unable to guess which prop the user intended.
// It is likely that the user was just blindly spreading/forwarding props
// Components should be careful to only render valid props/attributes.
// Warning will be invoked in warnUnknownProperties to allow grouping.
return false;}};}var warnUnknownProperties=function(type,props,debugID){var unknownProps=[];for(var key in props){var isValid=validateProperty$1(type,key,debugID);if(!isValid){unknownProps.push(key);}}var unknownPropString=unknownProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(unknownProps.length===1){warning$16(false,'Unknown prop %s on <%s> tag. Remove this prop from the element. '+'For details, see https://fb.me/react-unknown-prop%s',unknownPropString,type,getStackAddendum$2(debugID));}else if(unknownProps.length>1){warning$16(false,'Unknown props %s on <%s> tag. Remove these props from the element. '+'For details, see https://fb.me/react-unknown-prop%s',unknownPropString,type,getStackAddendum$2(debugID));}};function validateProperties$2(type,props,debugID/* Stack only */){if(type.indexOf('-')>=0||props.is){return;}warnUnknownProperties(type,props,debugID);}var ReactDOMUnknownPropertyHook$1={// Fiber
validateProperties:validateProperties$2,// Stack
onBeforeMountComponent:function(debugID,element){if(true&&element!=null&&typeof element.type==='string'){validateProperties$2(element.type,element.props,debugID);}},onBeforeUpdateComponent:function(debugID,element){if(true&&element!=null&&typeof element.type==='string'){validateProperties$2(element.type,element.props,debugID);}}};var ReactDOMUnknownPropertyHook_1=ReactDOMUnknownPropertyHook$1;var getCurrentFiberOwnerName=ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;var DOCUMENT_NODE$1=HTMLNodeType_1.DOCUMENT_NODE;var DOCUMENT_FRAGMENT_NODE$1=HTMLNodeType_1.DOCUMENT_FRAGMENT_NODE;{var warning$3=require$$0;var ReactDOMInvalidARIAHook=ReactDOMInvalidARIAHook_1;var ReactDOMNullInputValuePropHook=ReactDOMNullInputValuePropHook_1;var ReactDOMUnknownPropertyHook=ReactDOMUnknownPropertyHook_1;var validateARIAProperties=ReactDOMInvalidARIAHook.validateProperties;var validateInputPropertes=ReactDOMNullInputValuePropHook.validateProperties;var validateUnknownPropertes=ReactDOMUnknownPropertyHook.validateProperties;}var didWarnInvalidHydration=false;var didWarnShadyDOM=false;var listenTo=ReactBrowserEventEmitter_1.listenTo;var registrationNameModules=EventPluginRegistry_1.registrationNameModules;var DANGEROUSLY_SET_INNER_HTML='dangerouslySetInnerHTML';var SUPPRESS_CONTENT_EDITABLE_WARNING='suppressContentEditableWarning';var CHILDREN='children';var STYLE='style';var HTML='__html';var HTML_NAMESPACE=DOMNamespaces_1.html;var SVG_NAMESPACE=DOMNamespaces_1.svg;var MATH_NAMESPACE=DOMNamespaces_1.mathml;{var warnedUnknownTags={// Chrome is the only major browser not shipping <time>. But as of July
// 2017 it intends to ship it due to widespread usage. We intentionally
// *don't* warn for <time> even if it's unrecognized by Chrome because
// it soon will be, and many apps have been using it anyway.
time:true};var validatePropertiesInDevelopment=function(type,props){validateARIAProperties(type,props);validateInputPropertes(type,props);validateUnknownPropertes(type,props);};var warnForTextDifference=function(serverText,clientText){if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning$3(false,'Text content did not match. Server: "%s" Client: "%s"',serverText,clientText);};var warnForPropDifference=function(propName,serverValue,clientValue){if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning$3(false,'Prop `%s` did not match. Server: %s Client: %s',propName,JSON.stringify(serverValue),JSON.stringify(clientValue));};var warnForExtraAttributes=function(attributeNames){if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;var names=[];attributeNames.forEach(function(name){names.push(name);});warning$3(false,'Extra attributes from the server: %s',names);};var testDocument;// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
var normalizeHTML=function(parent,html){if(!testDocument){testDocument=document.implementation.createHTMLDocument();}var testElement=parent.namespaceURI===HTML_NAMESPACE?testDocument.createElement(parent.tagName):testDocument.createElementNS(parent.namespaceURI,parent.tagName);testElement.innerHTML=html;return testElement.innerHTML;};}function ensureListeningTo(rootContainerElement,registrationName){var isDocumentOrFragment=rootContainerElement.nodeType===DOCUMENT_NODE$1||rootContainerElement.nodeType===DOCUMENT_FRAGMENT_NODE$1;var doc=isDocumentOrFragment?rootContainerElement:rootContainerElement.ownerDocument;listenTo(registrationName,doc);}// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents={topAbort:'abort',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topSeeked:'seeked',topSeeking:'seeking',topStalled:'stalled',topSuspend:'suspend',topTimeUpdate:'timeupdate',topVolumeChange:'volumechange',topWaiting:'waiting'};function trapClickOnNonInteractiveElement(node){// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
node.onclick=emptyFunction;}function setInitialDOMProperties(domElement,rootContainerElement,nextProps,isCustomComponentTag){for(var propKey in nextProps){if(!nextProps.hasOwnProperty(propKey)){continue;}var nextProp=nextProps[propKey];if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(nextProp);}}// Relies on `updateStylesByID` not mutating `styleUpdates`.
CSSPropertyOperations_1.setValueForStyles(domElement,nextProp);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML]:undefined;if(nextHtml!=null){setInnerHTML_1(domElement,nextHtml);}}else if(propKey===CHILDREN){if(typeof nextProp==='string'){setTextContent_1(domElement,nextProp);}else if(typeof nextProp==='number'){setTextContent_1(domElement,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING){// Noop
}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){ensureListeningTo(rootContainerElement,propKey);}}else if(isCustomComponentTag){DOMPropertyOperations_1.setValueForAttribute(domElement,propKey,nextProp);}else if(DOMProperty_1.properties[propKey]||DOMProperty_1.isCustomAttribute(propKey)){// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(nextProp!=null){DOMPropertyOperations_1.setValueForProperty(domElement,propKey,nextProp);}}}}function updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag){// TODO: Handle wasCustomComponentTag
for(var i=0;i<updatePayload.length;i+=2){var propKey=updatePayload[i];var propValue=updatePayload[i+1];if(propKey===STYLE){CSSPropertyOperations_1.setValueForStyles(domElement,propValue);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){setInnerHTML_1(domElement,propValue);}else if(propKey===CHILDREN){setTextContent_1(domElement,propValue);}else if(isCustomComponentTag){if(propValue!=null){DOMPropertyOperations_1.setValueForAttribute(domElement,propKey,propValue);}else{DOMPropertyOperations_1.deleteValueForAttribute(domElement,propKey);}}else if(DOMProperty_1.properties[propKey]||DOMProperty_1.isCustomAttribute(propKey)){// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(propValue!=null){DOMPropertyOperations_1.setValueForProperty(domElement,propKey,propValue);}else{DOMPropertyOperations_1.deleteValueForProperty(domElement,propKey);}}}}// Assumes there is no parent namespace.
function getIntrinsicNamespace(type){switch(type){case'svg':return SVG_NAMESPACE;case'math':return MATH_NAMESPACE;default:return HTML_NAMESPACE;}}var ReactDOMFiberComponent={getChildNamespace:function(parentNamespace,type){if(parentNamespace==null||parentNamespace===HTML_NAMESPACE){// No (or default) parent namespace: potential entry point.
return getIntrinsicNamespace(type);}if(parentNamespace===SVG_NAMESPACE&&type==='foreignObject'){// We're leaving SVG.
return HTML_NAMESPACE;}// By default, pass namespace below.
return parentNamespace;},createElement:function(type,props,rootContainerElement,parentNamespace){// We create tags in the namespace of their parent container, except HTML
var ownerDocument=rootContainerElement.nodeType===DOCUMENT_NODE$1?rootContainerElement:rootContainerElement.ownerDocument;var domElement;var namespaceURI=parentNamespace;if(namespaceURI===HTML_NAMESPACE){namespaceURI=getIntrinsicNamespace(type);}{var isCustomComponentTag=isCustomComponent_1(type,props);}if(namespaceURI===HTML_NAMESPACE){{warning$3(isCustomComponentTag||type===type.toLowerCase(),'<%s /> is using uppercase HTML. Always use lowercase HTML tags '+'in React.',type);}if(type==='script'){// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var div=ownerDocument.createElement('div');div.innerHTML='<script><'+'/script>';// eslint-disable-line
// This is guaranteed to yield a script element.
var firstChild=div.firstChild;domElement=div.removeChild(firstChild);}else if(props.is){// $FlowIssue `createElement` should be updated for Web Components
domElement=ownerDocument.createElement(type,{is:props.is});}else{// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
domElement=ownerDocument.createElement(type);}}else{domElement=ownerDocument.createElementNS(namespaceURI,type);}{if(namespaceURI===HTML_NAMESPACE){if(!isCustomComponentTag&&Object.prototype.toString.call(domElement)==='[object HTMLUnknownElement]'&&!Object.prototype.hasOwnProperty.call(warnedUnknownTags,type)){warnedUnknownTags[type]=true;warning$3(false,'The tag <%s> is unrecognized in this browser. '+'If you meant to render a React component, start its name with '+'an uppercase letter.',type);}}}return domElement;},setInitialProperties:function(domElement,tag,rawProps,rootContainerElement){var isCustomComponentTag=isCustomComponent_1(tag,rawProps);{validatePropertiesInDevelopment(tag,rawProps);if(isCustomComponentTag&&!didWarnShadyDOM&&domElement.shadyRoot){warning$3(false,'%s is using shady DOM. Using shady DOM with React can '+'cause things to break subtly.',getCurrentFiberOwnerName()||'A component');didWarnShadyDOM=true;}}// TODO: Make sure that we check isMounted before firing any of these events.
var props;switch(tag){case'iframe':case'object':ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad','load',domElement);props=rawProps;break;case'video':case'audio':// Create listener for each media event
for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){ReactBrowserEventEmitter_1.trapBubbledEvent(event,mediaEvents[event],domElement);}}props=rawProps;break;case'source':ReactBrowserEventEmitter_1.trapBubbledEvent('topError','error',domElement);props=rawProps;break;case'img':case'image':ReactBrowserEventEmitter_1.trapBubbledEvent('topError','error',domElement);ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad','load',domElement);props=rawProps;break;case'form':ReactBrowserEventEmitter_1.trapBubbledEvent('topReset','reset',domElement);ReactBrowserEventEmitter_1.trapBubbledEvent('topSubmit','submit',domElement);props=rawProps;break;case'details':ReactBrowserEventEmitter_1.trapBubbledEvent('topToggle','toggle',domElement);props=rawProps;break;case'input':ReactDOMFiberInput.initWrapperState(domElement,rawProps);props=ReactDOMFiberInput.getHostProps(domElement,rawProps);ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;case'option':ReactDOMFiberOption.validateProps(domElement,rawProps);props=ReactDOMFiberOption.getHostProps(domElement,rawProps);break;case'select':ReactDOMFiberSelect.initWrapperState(domElement,rawProps);props=ReactDOMFiberSelect.getHostProps(domElement,rawProps);ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;case'textarea':ReactDOMFiberTextarea.initWrapperState(domElement,rawProps);props=ReactDOMFiberTextarea.getHostProps(domElement,rawProps);ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;default:props=rawProps;}assertValidProps_1(tag,props,getCurrentFiberOwnerName);setInitialDOMProperties(domElement,rootContainerElement,props,isCustomComponentTag);switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
inputValueTracking_1.track(domElement);ReactDOMFiberInput.postMountWrapper(domElement,rawProps);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
inputValueTracking_1.track(domElement);ReactDOMFiberTextarea.postMountWrapper(domElement,rawProps);break;case'option':ReactDOMFiberOption.postMountWrapper(domElement,rawProps);break;case'select':ReactDOMFiberSelect.postMountWrapper(domElement,rawProps);break;default:if(typeof props.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}},// Calculate the diff between the two objects.
diffProperties:function(domElement,tag,lastRawProps,nextRawProps,rootContainerElement){{validatePropertiesInDevelopment(tag,nextRawProps);}var updatePayload=null;var lastProps;var nextProps;switch(tag){case'input':lastProps=ReactDOMFiberInput.getHostProps(domElement,lastRawProps);nextProps=ReactDOMFiberInput.getHostProps(domElement,nextRawProps);updatePayload=[];break;case'option':lastProps=ReactDOMFiberOption.getHostProps(domElement,lastRawProps);nextProps=ReactDOMFiberOption.getHostProps(domElement,nextRawProps);updatePayload=[];break;case'select':lastProps=ReactDOMFiberSelect.getHostProps(domElement,lastRawProps);nextProps=ReactDOMFiberSelect.getHostProps(domElement,nextRawProps);updatePayload=[];break;case'textarea':lastProps=ReactDOMFiberTextarea.getHostProps(domElement,lastRawProps);nextProps=ReactDOMFiberTextarea.getHostProps(domElement,nextRawProps);updatePayload=[];break;default:lastProps=lastRawProps;nextProps=nextRawProps;if(typeof lastProps.onClick!=='function'&&typeof nextProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}assertValidProps_1(tag,nextProps,getCurrentFiberOwnerName);var propKey;var styleName;var styleUpdates=null;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)||lastProps[propKey]==null){continue;}if(propKey===STYLE){var lastStyle=lastProps[propKey];for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}}else if(propKey===DANGEROUSLY_SET_INNER_HTML||propKey===CHILDREN){// Noop. This is handled by the clear text mechanism.
}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING){// Noop
}else if(registrationNameModules.hasOwnProperty(propKey)){// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
if(!updatePayload){updatePayload=[];}}else{// For all other deleted properties we add it to the queue. We use
// the whitelist in the commit phase instead.
(updatePayload=updatePayload||[]).push(propKey,null);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=lastProps!=null?lastProps[propKey]:undefined;if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){continue;}if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(nextProp);}}if(lastProp){// Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}// Update styles that changed since `lastProp`.
for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]=nextProp[styleName];}}}else{// Relies on `updateStylesByID` not mutating `styleUpdates`.
if(!styleUpdates){if(!updatePayload){updatePayload=[];}updatePayload.push(propKey,styleUpdates);}styleUpdates=nextProp;}}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML]:undefined;var lastHtml=lastProp?lastProp[HTML]:undefined;if(nextHtml!=null){if(lastHtml!==nextHtml){(updatePayload=updatePayload||[]).push(propKey,''+nextHtml);}}else{// TODO: It might be too late to clear this if we have children
// inserted already.
}}else if(propKey===CHILDREN){if(lastProp!==nextProp&&(typeof nextProp==='string'||typeof nextProp==='number')){(updatePayload=updatePayload||[]).push(propKey,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING){// Noop
}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){// We eagerly listen to this even though we haven't committed yet.
ensureListeningTo(rootContainerElement,propKey);}if(!updatePayload&&lastProp!==nextProp){// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
updatePayload=[];}}else{// For any other property we always add it to the queue and then we
// filter it out using the whitelist during the commit.
(updatePayload=updatePayload||[]).push(propKey,nextProp);}}if(styleUpdates){(updatePayload=updatePayload||[]).push(STYLE,styleUpdates);}return updatePayload;},// Apply the diff.
updateProperties:function(domElement,updatePayload,tag,lastRawProps,nextRawProps){var wasCustomComponentTag=isCustomComponent_1(tag,lastRawProps);var isCustomComponentTag=isCustomComponent_1(tag,nextRawProps);// Apply the diff.
updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag);// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(tag){case'input':// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
ReactDOMFiberInput.updateWrapper(domElement,nextRawProps);// We also check that we haven't missed a value update, such as a
// Radio group shifting the checked value to another named radio input.
inputValueTracking_1.updateValueIfChanged(domElement);break;case'textarea':ReactDOMFiberTextarea.updateWrapper(domElement,nextRawProps);break;case'select':// <select> value update needs to occur after <option> children
// reconciliation
ReactDOMFiberSelect.postUpdateWrapper(domElement,nextRawProps);break;}},diffHydratedProperties:function(domElement,tag,rawProps,rootContainerElement){{var isCustomComponentTag=isCustomComponent_1(tag,rawProps);validatePropertiesInDevelopment(tag,rawProps);if(isCustomComponentTag&&!didWarnShadyDOM&&domElement.shadyRoot){warning$3(false,'%s is using shady DOM. Using shady DOM with React can '+'cause things to break subtly.',getCurrentFiberOwnerName()||'A component');didWarnShadyDOM=true;}}// TODO: Make sure that we check isMounted before firing any of these events.
switch(tag){case'iframe':case'object':ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad','load',domElement);break;case'video':case'audio':// Create listener for each media event
for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){ReactBrowserEventEmitter_1.trapBubbledEvent(event,mediaEvents[event],domElement);}}break;case'source':ReactBrowserEventEmitter_1.trapBubbledEvent('topError','error',domElement);break;case'img':case'image':ReactBrowserEventEmitter_1.trapBubbledEvent('topError','error',domElement);ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad','load',domElement);break;case'form':ReactBrowserEventEmitter_1.trapBubbledEvent('topReset','reset',domElement);ReactBrowserEventEmitter_1.trapBubbledEvent('topSubmit','submit',domElement);break;case'details':ReactBrowserEventEmitter_1.trapBubbledEvent('topToggle','toggle',domElement);break;case'input':ReactDOMFiberInput.initWrapperState(domElement,rawProps);ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;case'option':ReactDOMFiberOption.validateProps(domElement,rawProps);break;case'select':ReactDOMFiberSelect.initWrapperState(domElement,rawProps);ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;case'textarea':ReactDOMFiberTextarea.initWrapperState(domElement,rawProps);ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;}assertValidProps_1(tag,rawProps,getCurrentFiberOwnerName);{var extraAttributeNames=new Set();var attributes=domElement.attributes;for(var i=0;i<attributes.length;i++){// TODO: Do we need to lower case this to get case insensitive matches?
var name=attributes[i].name;switch(name){// Built-in attributes are whitelisted
// TODO: Once these are gone from the server renderer, we don't need
// this whitelist aynymore.
case'data-reactroot':break;case'data-reactid':break;case'data-react-checksum':break;// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case'value':break;case'checked':break;case'selected':break;default:extraAttributeNames.add(attributes[i].name);}}}var updatePayload=null;for(var propKey in rawProps){if(!rawProps.hasOwnProperty(propKey)){continue;}var nextProp=rawProps[propKey];if(propKey===CHILDREN){// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
if(typeof nextProp==='string'){if(domElement.textContent!==nextProp){{warnForTextDifference(domElement.textContent,nextProp);}updatePayload=[CHILDREN,nextProp];}}else if(typeof nextProp==='number'){if(domElement.textContent!==''+nextProp){{warnForTextDifference(domElement.textContent,nextProp);}updatePayload=[CHILDREN,''+nextProp];}}}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){ensureListeningTo(rootContainerElement,propKey);}}else{// Validate that the properties correspond to their expected values.
var serverValue;var propertyInfo;if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
propKey==='value'||propKey==='checked'||propKey==='selected'){// Noop
}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var rawHtml=nextProp?nextProp[HTML]||'':'';var serverHTML=domElement.innerHTML;var expectedHTML=normalizeHTML(domElement,rawHtml);if(expectedHTML!==serverHTML){warnForPropDifference(propKey,serverHTML,expectedHTML);}}else if(propKey===STYLE){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames['delete'](propKey);var expectedStyle=CSSPropertyOperations_1.createDangerousStringForStyles(nextProp);serverValue=domElement.getAttribute('style');if(expectedStyle!==serverValue){warnForPropDifference(propKey,serverValue,expectedStyle);}}else if(isCustomComponentTag||DOMProperty_1.isCustomAttribute(propKey)){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames['delete'](propKey);serverValue=DOMPropertyOperations_1.getValueForAttribute(domElement,propKey,nextProp);if(nextProp!==serverValue){warnForPropDifference(propKey,serverValue,nextProp);}}else if(propertyInfo=DOMProperty_1.properties[propKey]){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames['delete'](propertyInfo.attributeName);serverValue=DOMPropertyOperations_1.getValueForProperty(domElement,propKey,nextProp);if(nextProp!==serverValue){warnForPropDifference(propKey,serverValue,nextProp);}}}}{// $FlowFixMe - Should be inferred as not undefined.
if(extraAttributeNames.size>0){// $FlowFixMe - Should be inferred as not undefined.
warnForExtraAttributes(extraAttributeNames);}}switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
inputValueTracking_1.track(domElement);ReactDOMFiberInput.postMountWrapper(domElement,rawProps);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
inputValueTracking_1.track(domElement);ReactDOMFiberTextarea.postMountWrapper(domElement,rawProps);break;case'select':case'option':// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:if(typeof rawProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}return updatePayload;},diffHydratedText:function(textNode,text){var isDifferent=textNode.nodeValue!==text;{if(isDifferent){warnForTextDifference(textNode.nodeValue,text);}}return isDifferent;},warnForDeletedHydratableElement:function(parentNode,child){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning$3(false,'Did not expect server HTML to contain a <%s> in <%s>.',child.nodeName.toLowerCase(),parentNode.nodeName.toLowerCase());}},warnForDeletedHydratableText:function(parentNode,child){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning$3(false,'Did not expect server HTML to contain the text node "%s" in <%s>.',child.nodeValue,parentNode.nodeName.toLowerCase());}},warnForInsertedHydratedElement:function(parentNode,tag,props){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning$3(false,'Expected server HTML to contain a matching <%s> in <%s>.',tag,parentNode.nodeName.toLowerCase());}},warnForInsertedHydratedText:function(parentNode,text){{if(text===''){// We expect to insert empty text nodes since they're not represented in
// the HTML.
// TODO: Remove this special case if we can just avoid inserting empty
// text nodes.
return;}if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning$3(false,'Expected server HTML to contain a matching text node for "%s" in <%s>.',text,parentNode.nodeName.toLowerCase());}},restoreControlledState:function(domElement,tag,props){switch(tag){case'input':ReactDOMFiberInput.restoreControlledState(domElement,props);return;case'textarea':ReactDOMFiberTextarea.restoreControlledState(domElement,props);return;case'select':ReactDOMFiberSelect.restoreControlledState(domElement,props);return;}}};var ReactDOMFiberComponent_1=ReactDOMFiberComponent;// This is a built-in polyfill for requestIdleCallback. It works by scheduling
// a requestAnimationFrame, storing the time for the start of the frame, then
// scheduling a postMessage which gets scheduled after paint. Within the
// postMessage handler do as much work as possible until time + frame rate.
// By separating the idle call into a separate event tick we ensure that
// layout, paint and other browser work is counted against the available time.
// The frame rate is dynamically adjusted.
{var warning$17=require$$0;if(ExecutionEnvironment.canUseDOM&&typeof requestAnimationFrame!=='function'){warning$17(false,'React depends on requestAnimationFrame. Make sure that you load a '+'polyfill in older browsers. http://fb.me/react-polyfills');}}// TODO: There's no way to cancel, because Fiber doesn't atm.
var rIC=void 0;if(!ExecutionEnvironment.canUseDOM){rIC=function(frameCallback){setTimeout(function(){frameCallback({timeRemaining:function(){return Infinity;}});});return 0;};}else if(typeof requestIdleCallback!=='function'){// Polyfill requestIdleCallback.
var scheduledRAFCallback=null;var scheduledRICCallback=null;var isIdleScheduled=false;var isAnimationFrameScheduled=false;var frameDeadline=0;// We start out assuming that we run at 30fps but then the heuristic tracking
// will adjust this value to a faster fps if we get more frequent animation
// frames.
var previousFrameTime=33;var activeFrameTime=33;var frameDeadlineObject={timeRemaining:typeof performance==='object'&&typeof performance.now==='function'?function(){// We assume that if we have a performance timer that the rAF callback
// gets a performance timer value. Not sure if this is always true.
return frameDeadline-performance.now();}:function(){// As a fallback we use Date.now.
return frameDeadline-Date.now();}};// We use the postMessage trick to defer idle work until after the repaint.
var messageKey='__reactIdleCallback$'+Math.random().toString(36).slice(2);var idleTick=function(event){if(event.source!==window||event.data!==messageKey){return;}isIdleScheduled=false;var callback=scheduledRICCallback;scheduledRICCallback=null;if(callback!==null){callback(frameDeadlineObject);}};// Assumes that we have addEventListener in this environment. Might need
// something better for old IE.
window.addEventListener('message',idleTick,false);var animationTick=function(rafTime){isAnimationFrameScheduled=false;var nextFrameTime=rafTime-frameDeadline+activeFrameTime;if(nextFrameTime<activeFrameTime&&previousFrameTime<activeFrameTime){if(nextFrameTime<8){// Defensive coding. We don't support higher frame rates than 120hz.
// If we get lower than that, it is probably a bug.
nextFrameTime=8;}// If one frame goes long, then the next one can be short to catch up.
// If two frames are short in a row, then that's an indication that we
// actually have a higher frame rate than what we're currently optimizing.
// We adjust our heuristic dynamically accordingly. For example, if we're
// running on 120hz display or 90hz VR display.
// Take the max of the two in case one of them was an anomaly due to
// missed frame deadlines.
activeFrameTime=nextFrameTime<previousFrameTime?previousFrameTime:nextFrameTime;}else{previousFrameTime=nextFrameTime;}frameDeadline=rafTime+activeFrameTime;if(!isIdleScheduled){isIdleScheduled=true;window.postMessage(messageKey,'*');}var callback=scheduledRAFCallback;scheduledRAFCallback=null;if(callback!==null){callback(rafTime);}};rIC=function(callback){// This assumes that we only schedule one callback at a time because that's
// how Fiber uses it.
scheduledRICCallback=callback;if(!isAnimationFrameScheduled){// If rAF didn't already schedule one, we need to schedule a frame.
// TODO: If this rAF doesn't materialize because the browser throttles, we
// might want to still have setTimeout trigger rIC as a backup to ensure
// that we keep performing work.
isAnimationFrameScheduled=true;requestAnimationFrame(animationTick);}return 0;};}else{rIC=requestIdleCallback;}var rIC_1=rIC;var ReactDOMFrameScheduling={rIC:rIC_1};/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPriorityLevel
 * 
 */var ReactPriorityLevel={NoWork:0,// No work is pending.
SynchronousPriority:1,// For controlled text inputs. Synchronous side-effects.
TaskPriority:2,// Completes at the end of the current tick.
HighPriority:3,// Interaction that needs to complete pretty soon to feel responsive.
LowPriority:4,// Data fetching, or result from updating stores.
OffscreenPriority:5};var CallbackEffect=ReactTypeOfSideEffect.Callback;var NoWork=ReactPriorityLevel.NoWork;var SynchronousPriority=ReactPriorityLevel.SynchronousPriority;var TaskPriority=ReactPriorityLevel.TaskPriority;var ClassComponent$2=ReactTypeOfWork.ClassComponent;var HostRoot$2=ReactTypeOfWork.HostRoot;{var warning$19=require$$0;}// Callbacks are not validated until invocation
// Singly linked-list of updates. When an update is scheduled, it is added to
// the queue of the current fiber and the work-in-progress fiber. The two queues
// are separate but they share a persistent structure.
//
// During reconciliation, updates are removed from the work-in-progress fiber,
// but they remain on the current fiber. That ensures that if a work-in-progress
// is aborted, the aborted updates are recovered by cloning from current.
//
// The work-in-progress queue is always a subset of the current queue.
//
// When the tree is committed, the work-in-progress becomes the current.
function comparePriority(a,b){// When comparing update priorities, treat sync and Task work as equal.
// TODO: Could we avoid the need for this by always coercing sync priority
// to Task when scheduling an update?
if((a===TaskPriority||a===SynchronousPriority)&&(b===TaskPriority||b===SynchronousPriority)){return 0;}if(a===NoWork&&b!==NoWork){return-255;}if(a!==NoWork&&b===NoWork){return 255;}return a-b;}function createUpdateQueue(){var queue={first:null,last:null,hasForceUpdate:false,callbackList:null};{queue.isProcessing=false;}return queue;}function cloneUpdate(update){return{priorityLevel:update.priorityLevel,partialState:update.partialState,callback:update.callback,isReplace:update.isReplace,isForced:update.isForced,isTopLevelUnmount:update.isTopLevelUnmount,next:null};}function insertUpdateIntoQueue(queue,update,insertAfter,insertBefore){if(insertAfter!==null){insertAfter.next=update;}else{// This is the first item in the queue.
update.next=queue.first;queue.first=update;}if(insertBefore!==null){update.next=insertBefore;}else{// This is the last item in the queue.
queue.last=update;}}// Returns the update after which the incoming update should be inserted into
// the queue, or null if it should be inserted at beginning.
function findInsertionPosition(queue,update){var priorityLevel=update.priorityLevel;var insertAfter=null;var insertBefore=null;if(queue.last!==null&&comparePriority(queue.last.priorityLevel,priorityLevel)<=0){// Fast path for the common case where the update should be inserted at
// the end of the queue.
insertAfter=queue.last;}else{insertBefore=queue.first;while(insertBefore!==null&&comparePriority(insertBefore.priorityLevel,priorityLevel)<=0){insertAfter=insertBefore;insertBefore=insertBefore.next;}}return insertAfter;}function ensureUpdateQueues(fiber){var alternateFiber=fiber.alternate;var queue1=fiber.updateQueue;if(queue1===null){queue1=fiber.updateQueue=createUpdateQueue();}var queue2=void 0;if(alternateFiber!==null){queue2=alternateFiber.updateQueue;if(queue2===null){queue2=alternateFiber.updateQueue=createUpdateQueue();}}else{queue2=null;}// TODO: Refactor to avoid returning a tuple.
return[queue1,// Return null if there is no alternate queue, or if its queue is the same.
queue2!==queue1?queue2:null];}// The work-in-progress queue is a subset of the current queue (if it exists).
// We need to insert the incoming update into both lists. However, it's possible
// that the correct position in one list will be different from the position in
// the other. Consider the following case:
//
//     Current:             3-5-6
//     Work-in-progress:        6
//
// Then we receive an update with priority 4 and insert it into each list:
//
//     Current:             3-4-5-6
//     Work-in-progress:        4-6
//
// In the current queue, the new update's `next` pointer points to the update
// with priority 5. But in the work-in-progress queue, the pointer points to the
// update with priority 6. Because these two queues share the same persistent
// data structure, this won't do. (This can only happen when the incoming update
// has higher priority than all the updates in the work-in-progress queue.)
//
// To solve this, in the case where the incoming update needs to be inserted
// into two different positions, we'll make a clone of the update and insert
// each copy into a separate queue. This forks the list while maintaining a
// persistent structure, because the update that is added to the work-in-progress
// is always added to the front of the list.
//
// However, if incoming update is inserted into the same position of both lists,
// we shouldn't make a copy.
//
// If the update is cloned, it returns the cloned update.
function insertUpdate(fiber,update){// We'll have at least one and at most two distinct update queues.
var _ensureUpdateQueues=ensureUpdateQueues(fiber),queue1=_ensureUpdateQueues[0],queue2=_ensureUpdateQueues[1];// Warn if an update is scheduled from inside an updater function.
{if(queue1.isProcessing||queue2!==null&&queue2.isProcessing){warning$19(false,'An update (setState, replaceState, or forceUpdate) was scheduled '+'from inside an update function. Update functions should be pure, '+'with zero side-effects. Consider using componentDidUpdate or a '+'callback.');}}// Find the insertion position in the first queue.
var insertAfter1=findInsertionPosition(queue1,update);var insertBefore1=insertAfter1!==null?insertAfter1.next:queue1.first;if(queue2===null){// If there's no alternate queue, there's nothing else to do but insert.
insertUpdateIntoQueue(queue1,update,insertAfter1,insertBefore1);return null;}// If there is an alternate queue, find the insertion position.
var insertAfter2=findInsertionPosition(queue2,update);var insertBefore2=insertAfter2!==null?insertAfter2.next:queue2.first;// Now we can insert into the first queue. This must come after finding both
// insertion positions because it mutates the list.
insertUpdateIntoQueue(queue1,update,insertAfter1,insertBefore1);// See if the insertion positions are equal. Be careful to only compare
// non-null values.
if(insertBefore1===insertBefore2&&insertBefore1!==null||insertAfter1===insertAfter2&&insertAfter1!==null){// The insertion positions are the same, so when we inserted into the first
// queue, it also inserted into the alternate. All we need to do is update
// the alternate queue's `first` and `last` pointers, in case they
// have changed.
if(insertAfter2===null){queue2.first=update;}if(insertBefore2===null){queue2.last=null;}return null;}else{// The insertion positions are different, so we need to clone the update and
// insert the clone into the alternate queue.
var update2=cloneUpdate(update);insertUpdateIntoQueue(queue2,update2,insertAfter2,insertBefore2);return update2;}}function addUpdate(fiber,partialState,callback,priorityLevel){var update={priorityLevel:priorityLevel,partialState:partialState,callback:callback,isReplace:false,isForced:false,isTopLevelUnmount:false,next:null};insertUpdate(fiber,update);}var addUpdate_1=addUpdate;function addReplaceUpdate(fiber,state,callback,priorityLevel){var update={priorityLevel:priorityLevel,partialState:state,callback:callback,isReplace:true,isForced:false,isTopLevelUnmount:false,next:null};insertUpdate(fiber,update);}var addReplaceUpdate_1=addReplaceUpdate;function addForceUpdate(fiber,callback,priorityLevel){var update={priorityLevel:priorityLevel,partialState:null,callback:callback,isReplace:false,isForced:true,isTopLevelUnmount:false,next:null};insertUpdate(fiber,update);}var addForceUpdate_1=addForceUpdate;function getUpdatePriority(fiber){var updateQueue=fiber.updateQueue;if(updateQueue===null){return NoWork;}if(fiber.tag!==ClassComponent$2&&fiber.tag!==HostRoot$2){return NoWork;}return updateQueue.first!==null?updateQueue.first.priorityLevel:NoWork;}var getUpdatePriority_1=getUpdatePriority;function addTopLevelUpdate$1(fiber,partialState,callback,priorityLevel){var isTopLevelUnmount=partialState.element===null;var update={priorityLevel:priorityLevel,partialState:partialState,callback:callback,isReplace:false,isForced:false,isTopLevelUnmount:isTopLevelUnmount,next:null};var update2=insertUpdate(fiber,update);if(isTopLevelUnmount){// TODO: Redesign the top-level mount/update/unmount API to avoid this
var _ensureUpdateQueues2=ensureUpdateQueues(fiber),queue1=_ensureUpdateQueues2[0],queue2=_ensureUpdateQueues2[1];// Drop all updates that are lower-priority, so that the tree is not
// remounted. We need to do this for both queues.
if(queue1!==null&&update.next!==null){update.next=null;queue1.last=update;}if(queue2!==null&&update2!==null&&update2.next!==null){update2.next=null;queue2.last=update;}}}var addTopLevelUpdate_1=addTopLevelUpdate$1;function getStateFromUpdate(update,instance,prevState,props){var partialState=update.partialState;if(typeof partialState==='function'){var updateFn=partialState;return updateFn.call(instance,prevState,props);}else{return partialState;}}function beginUpdateQueue(current,workInProgress,queue,instance,prevState,props,priorityLevel){if(current!==null&&current.updateQueue===queue){// We need to create a work-in-progress queue, by cloning the current queue.
var currentQueue=queue;queue=workInProgress.updateQueue={first:currentQueue.first,last:currentQueue.last,// These fields are no longer valid because they were already committed.
// Reset them.
callbackList:null,hasForceUpdate:false};}{// Set this flag so we can warn if setState is called inside the update
// function of another setState.
queue.isProcessing=true;}// Calculate these using the the existing values as a base.
var callbackList=queue.callbackList;var hasForceUpdate=queue.hasForceUpdate;// Applies updates with matching priority to the previous state to create
// a new state object.
var state=prevState;var dontMutatePrevState=true;var update=queue.first;while(update!==null&&comparePriority(update.priorityLevel,priorityLevel)<=0){// Remove each update from the queue right before it is processed. That way
// if setState is called from inside an updater function, the new update
// will be inserted in the correct position.
queue.first=update.next;if(queue.first===null){queue.last=null;}var _partialState=void 0;if(update.isReplace){state=getStateFromUpdate(update,instance,state,props);dontMutatePrevState=true;}else{_partialState=getStateFromUpdate(update,instance,state,props);if(_partialState){if(dontMutatePrevState){state=_assign({},state,_partialState);}else{state=_assign(state,_partialState);}dontMutatePrevState=false;}}if(update.isForced){hasForceUpdate=true;}// Second condition ignores top-level unmount callbacks if they are not the
// last update in the queue, since a subsequent update will cause a remount.
if(update.callback!==null&&!(update.isTopLevelUnmount&&update.next!==null)){callbackList=callbackList!==null?callbackList:[];callbackList.push(update.callback);workInProgress.effectTag|=CallbackEffect;}update=update.next;}queue.callbackList=callbackList;queue.hasForceUpdate=hasForceUpdate;if(queue.first===null&&callbackList===null&&!hasForceUpdate){// The queue is empty and there are no callbacks. We can reset it.
workInProgress.updateQueue=null;}{// No longer processing.
queue.isProcessing=false;}return state;}var beginUpdateQueue_1=beginUpdateQueue;function commitCallbacks(finishedWork,queue,context){var callbackList=queue.callbackList;if(callbackList===null){return;}// Set the list to null to make sure they don't get called more than once.
queue.callbackList=null;for(var i=0;i<callbackList.length;i++){var _callback=callbackList[i];!(typeof _callback==='function')?invariant(false,'Invalid argument passed as callback. Expected a function. Instead received: %s',_callback):void 0;_callback.call(context);}}var commitCallbacks_1=commitCallbacks;var ReactFiberUpdateQueue={addUpdate:addUpdate_1,addReplaceUpdate:addReplaceUpdate_1,addForceUpdate:addForceUpdate_1,getUpdatePriority:getUpdatePriority_1,addTopLevelUpdate:addTopLevelUpdate_1,beginUpdateQueue:beginUpdateQueue_1,commitCallbacks:commitCallbacks_1};{var warning$21=require$$0;}var valueStack=[];{var fiberStack=[];}var index=-1;var createCursor$1=function(defaultValue){return{current:defaultValue};};var isEmpty=function(){return index===-1;};var pop$1=function(cursor,fiber){if(index<0){{warning$21(false,'Unexpected pop.');}return;}{if(fiber!==fiberStack[index]){warning$21(false,'Unexpected Fiber popped.');}}cursor.current=valueStack[index];valueStack[index]=null;{fiberStack[index]=null;}index--;};var push$1=function(cursor,value,fiber){index++;valueStack[index]=cursor.current;{fiberStack[index]=fiber;}cursor.current=value;};var reset=function(){while(index>-1){valueStack[index]=null;{fiberStack[index]=null;}index--;}};var ReactFiberStack={createCursor:createCursor$1,isEmpty:isEmpty,pop:pop$1,push:push$1,reset:reset};// Trust the developer to only use this with a true check
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDebugFiberPerf
 * 
 */var ReactDebugFiberPerf=null;{var _require$8=ReactTypeOfWork,HostRoot$4=_require$8.HostRoot,HostComponent$4=_require$8.HostComponent,HostText$2=_require$8.HostText,HostPortal$1=_require$8.HostPortal,YieldComponent=_require$8.YieldComponent,Fragment=_require$8.Fragment;var getComponentName$5=getComponentName_1;// Prefix measurements so that it's possible to filter them.
// Longer prefixes are hard to read in DevTools.
var reactEmoji='\u269B';var warningEmoji='\u26D4';var supportsUserTiming=typeof performance!=='undefined'&&typeof performance.mark==='function'&&typeof performance.clearMarks==='function'&&typeof performance.measure==='function'&&typeof performance.clearMeasures==='function';// Keep track of current fiber so that we know the path to unwind on pause.
// TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
var currentFiber=null;// If we're in the middle of user code, which fiber and method is it?
// Reusing `currentFiber` would be confusing for this because user code fiber
// can change during commit phase too, but we don't need to unwind it (since
// lifecycles in the commit phase don't resemble a tree).
var currentPhase=null;var currentPhaseFiber=null;// Did lifecycle hook schedule an update? This is often a performance problem,
// so we will keep track of it, and include it in the report.
// Track commits caused by cascading updates.
var isCommitting=false;var hasScheduledUpdateInCurrentCommit=false;var hasScheduledUpdateInCurrentPhase=false;var commitCountInCurrentWorkLoop=0;var effectCountInCurrentCommit=0;// During commits, we only show a measurement once per method name
// to avoid stretch the commit phase with measurement overhead.
var labelsInCurrentCommit=new Set();var formatMarkName=function(markName){return reactEmoji+' '+markName;};var formatLabel=function(label,warning){var prefix=warning?warningEmoji+' ':reactEmoji+' ';var suffix=warning?' Warning: '+warning:'';return''+prefix+label+suffix;};var beginMark=function(markName){performance.mark(formatMarkName(markName));};var clearMark=function(markName){performance.clearMarks(formatMarkName(markName));};var endMark=function(label,markName,warning){var formattedMarkName=formatMarkName(markName);var formattedLabel=formatLabel(label,warning);try{performance.measure(formattedLabel,formattedMarkName);}catch(err){}// If previous mark was missing for some reason, this will throw.
// This could only happen if React crashed in an unexpected place earlier.
// Don't pile on with more errors.
// Clear marks immediately to avoid growing buffer.
performance.clearMarks(formattedMarkName);performance.clearMeasures(formattedLabel);};var getFiberMarkName=function(label,debugID){return label+' (#'+debugID+')';};var getFiberLabel=function(componentName,isMounted,phase){if(phase===null){// These are composite component total time measurements.
return componentName+' ['+(isMounted?'update':'mount')+']';}else{// Composite component methods.
return componentName+'.'+phase;}};var beginFiberMark=function(fiber,phase){var componentName=getComponentName$5(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);if(isCommitting&&labelsInCurrentCommit.has(label)){// During the commit phase, we don't show duplicate labels because
// there is a fixed overhead for every measurement, and we don't
// want to stretch the commit phase beyond necessary.
return false;}labelsInCurrentCommit.add(label);var markName=getFiberMarkName(label,debugID);beginMark(markName);return true;};var clearFiberMark=function(fiber,phase){var componentName=getComponentName$5(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);var markName=getFiberMarkName(label,debugID);clearMark(markName);};var endFiberMark=function(fiber,phase,warning){var componentName=getComponentName$5(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);var markName=getFiberMarkName(label,debugID);endMark(label,markName,warning);};var shouldIgnoreFiber=function(fiber){// Host components should be skipped in the timeline.
// We could check typeof fiber.type, but does this work with RN?
switch(fiber.tag){case HostRoot$4:case HostComponent$4:case HostText$2:case HostPortal$1:case YieldComponent:case Fragment:return true;default:return false;}};var clearPendingPhaseMeasurement=function(){if(currentPhase!==null&&currentPhaseFiber!==null){clearFiberMark(currentPhaseFiber,currentPhase);}currentPhaseFiber=null;currentPhase=null;hasScheduledUpdateInCurrentPhase=false;};var pauseTimers=function(){// Stops all currently active measurements so that they can be resumed
// if we continue in a later deferred loop from the same unit of work.
var fiber=currentFiber;while(fiber){if(fiber._debugIsCurrentlyTiming){endFiberMark(fiber,null,null);}fiber=fiber['return'];}};var resumeTimersRecursively=function(fiber){if(fiber['return']!==null){resumeTimersRecursively(fiber['return']);}if(fiber._debugIsCurrentlyTiming){beginFiberMark(fiber,null);}};var resumeTimers=function(){// Resumes all measurements that were active during the last deferred loop.
if(currentFiber!==null){resumeTimersRecursively(currentFiber);}};ReactDebugFiberPerf={recordEffect:function(){effectCountInCurrentCommit++;},recordScheduleUpdate:function(){if(isCommitting){hasScheduledUpdateInCurrentCommit=true;}if(currentPhase!==null&&currentPhase!=='componentWillMount'&&currentPhase!=='componentWillReceiveProps'){hasScheduledUpdateInCurrentPhase=true;}},startWorkTimer:function(fiber){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, this is the fiber to unwind from.
currentFiber=fiber;if(!beginFiberMark(fiber,null)){return;}fiber._debugIsCurrentlyTiming=true;},cancelWorkTimer:function(fiber){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// Remember we shouldn't complete measurement for this fiber.
// Otherwise flamechart will be deep even for small updates.
fiber._debugIsCurrentlyTiming=false;clearFiberMark(fiber,null);},stopWorkTimer:function(fiber){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, its parent is the fiber to unwind from.
currentFiber=fiber['return'];if(!fiber._debugIsCurrentlyTiming){return;}fiber._debugIsCurrentlyTiming=false;endFiberMark(fiber,null,null);},stopFailedWorkTimer:function(fiber){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, its parent is the fiber to unwind from.
currentFiber=fiber['return'];if(!fiber._debugIsCurrentlyTiming){return;}fiber._debugIsCurrentlyTiming=false;var warning='An error was thrown inside this error boundary';endFiberMark(fiber,null,warning);},startPhaseTimer:function(fiber,phase){if(!supportsUserTiming){return;}clearPendingPhaseMeasurement();if(!beginFiberMark(fiber,phase)){return;}currentPhaseFiber=fiber;currentPhase=phase;},stopPhaseTimer:function(){if(!supportsUserTiming){return;}if(currentPhase!==null&&currentPhaseFiber!==null){var warning=hasScheduledUpdateInCurrentPhase?'Scheduled a cascading update':null;endFiberMark(currentPhaseFiber,currentPhase,warning);}currentPhase=null;currentPhaseFiber=null;},startWorkLoopTimer:function(){if(!supportsUserTiming){return;}commitCountInCurrentWorkLoop=0;// This is top level call.
// Any other measurements are performed within.
beginMark('(React Tree Reconciliation)');// Resume any measurements that were in progress during the last loop.
resumeTimers();},stopWorkLoopTimer:function(){if(!supportsUserTiming){return;}var warning=commitCountInCurrentWorkLoop>1?'There were cascading updates':null;commitCountInCurrentWorkLoop=0;// Pause any measurements until the next loop.
pauseTimers();endMark('(React Tree Reconciliation)','(React Tree Reconciliation)',warning);},startCommitTimer:function(){if(!supportsUserTiming){return;}isCommitting=true;hasScheduledUpdateInCurrentCommit=false;labelsInCurrentCommit.clear();beginMark('(Committing Changes)');},stopCommitTimer:function(){if(!supportsUserTiming){return;}var warning=null;if(hasScheduledUpdateInCurrentCommit){warning='Lifecycle hook scheduled a cascading update';}else if(commitCountInCurrentWorkLoop>0){warning='Caused by a cascading update in earlier commit';}hasScheduledUpdateInCurrentCommit=false;commitCountInCurrentWorkLoop++;isCommitting=false;labelsInCurrentCommit.clear();endMark('(Committing Changes)','(Committing Changes)',warning);},startCommitHostEffectsTimer:function(){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Committing Host Effects)');},stopCommitHostEffectsTimer:function(){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark('(Committing Host Effects: '+count+' Total)','(Committing Host Effects)',null);},startCommitLifeCyclesTimer:function(){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Calling Lifecycle Methods)');},stopCommitLifeCyclesTimer:function(){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark('(Calling Lifecycle Methods: '+count+' Total)','(Calling Lifecycle Methods)',null);}};}var ReactDebugFiberPerf_1=ReactDebugFiberPerf;var _extends$1=_assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var isFiberMounted$1=ReactFiberTreeReflection.isFiberMounted;var ClassComponent$3=ReactTypeOfWork.ClassComponent;var HostRoot$3=ReactTypeOfWork.HostRoot;var createCursor=ReactFiberStack.createCursor;var pop=ReactFiberStack.pop;var push=ReactFiberStack.push;{var warning$20=require$$0;var checkPropTypes$1=checkPropTypes;var ReactDebugCurrentFiber$2=ReactDebugCurrentFiber_1;var _require4=ReactDebugFiberPerf_1,startPhaseTimer=_require4.startPhaseTimer,stopPhaseTimer=_require4.stopPhaseTimer;var warnedAboutMissingGetChildContext={};}// A cursor to the current merged context object on the stack.
var contextStackCursor=createCursor(emptyObject);// A cursor to a boolean indicating whether the context has changed.
var didPerformWorkStackCursor=createCursor(false);// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
var previousContext=emptyObject;function getUnmaskedContext(workInProgress){var hasOwnContext=isContextProvider$1(workInProgress);if(hasOwnContext){// If the fiber is a context provider itself, when we read its context
// we have already pushed its own child context on the stack. A context
// provider should not "see" its own child context. Therefore we read the
// previous (parent) context instead for a context provider.
return previousContext;}return contextStackCursor.current;}var getUnmaskedContext_1=getUnmaskedContext;function cacheContext(workInProgress,unmaskedContext,maskedContext){var instance=workInProgress.stateNode;instance.__reactInternalMemoizedUnmaskedChildContext=unmaskedContext;instance.__reactInternalMemoizedMaskedChildContext=maskedContext;}var cacheContext_1=cacheContext;var getMaskedContext=function(workInProgress,unmaskedContext){var type=workInProgress.type;var contextTypes=type.contextTypes;if(!contextTypes){return emptyObject;}// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var instance=workInProgress.stateNode;if(instance&&instance.__reactInternalMemoizedUnmaskedChildContext===unmaskedContext){return instance.__reactInternalMemoizedMaskedChildContext;}var context={};for(var key in contextTypes){context[key]=unmaskedContext[key];}{var name=getComponentName_1(workInProgress)||'Unknown';ReactDebugCurrentFiber$2.setCurrentFiber(workInProgress,null);checkPropTypes$1(contextTypes,context,'context',name,ReactDebugCurrentFiber$2.getCurrentFiberStackAddendum);ReactDebugCurrentFiber$2.resetCurrentFiber();}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
if(instance){cacheContext(workInProgress,unmaskedContext,context);}return context;};var hasContextChanged=function(){return didPerformWorkStackCursor.current;};function isContextConsumer(fiber){return fiber.tag===ClassComponent$3&&fiber.type.contextTypes!=null;}var isContextConsumer_1=isContextConsumer;function isContextProvider$1(fiber){return fiber.tag===ClassComponent$3&&fiber.type.childContextTypes!=null;}var isContextProvider_1=isContextProvider$1;function popContextProvider(fiber){if(!isContextProvider$1(fiber)){return;}pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}var popContextProvider_1=popContextProvider;var pushTopLevelContextObject=function(fiber,context,didChange){!(contextStackCursor.cursor==null)?invariant(false,'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'):void 0;push(contextStackCursor,context,fiber);push(didPerformWorkStackCursor,didChange,fiber);};function processChildContext$1(fiber,parentContext,isReconciling){var instance=fiber.stateNode;var childContextTypes=fiber.type.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if(typeof instance.getChildContext!=='function'){{var componentName=getComponentName_1(fiber)||'Unknown';if(!warnedAboutMissingGetChildContext[componentName]){warnedAboutMissingGetChildContext[componentName]=true;warning$20(false,'%s.childContextTypes is specified but there is no getChildContext() method '+'on the instance. You can either define getChildContext() on %s or remove '+'childContextTypes from it.',componentName,componentName);}}return parentContext;}var childContext=void 0;{ReactDebugCurrentFiber$2.setCurrentFiber(fiber,'getChildContext');startPhaseTimer(fiber,'getChildContext');childContext=instance.getChildContext();stopPhaseTimer();ReactDebugCurrentFiber$2.resetCurrentFiber();}for(var contextKey in childContext){!(contextKey in childContextTypes)?invariant(false,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',getComponentName_1(fiber)||'Unknown',contextKey):void 0;}{var name=getComponentName_1(fiber)||'Unknown';// We can only provide accurate element stacks if we pass work-in-progress tree
// during the begin or complete phase. However currently this function is also
// called from unstable_renderSubtree legacy implementation. In this case it unsafe to
// assume anything about the given fiber. We won't pass it down if we aren't sure.
// TODO: remove this hack when we delete unstable_renderSubtree in Fiber.
var workInProgress=isReconciling?fiber:null;ReactDebugCurrentFiber$2.setCurrentFiber(workInProgress,null);checkPropTypes$1(childContextTypes,childContext,'child context',name,ReactDebugCurrentFiber$2.getCurrentFiberStackAddendum);ReactDebugCurrentFiber$2.resetCurrentFiber();}return _extends$1({},parentContext,childContext);}var processChildContext_1=processChildContext$1;var pushContextProvider=function(workInProgress){if(!isContextProvider$1(workInProgress)){return false;}var instance=workInProgress.stateNode;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
var memoizedMergedChildContext=instance&&instance.__reactInternalMemoizedMergedChildContext||emptyObject;// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertantly blocking updates.
previousContext=contextStackCursor.current;push(contextStackCursor,memoizedMergedChildContext,workInProgress);push(didPerformWorkStackCursor,didPerformWorkStackCursor.current,workInProgress);return true;};var invalidateContextProvider=function(workInProgress,didChange){var instance=workInProgress.stateNode;!instance?invariant(false,'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'):void 0;if(didChange){// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var mergedContext=processChildContext$1(workInProgress,previousContext,true);instance.__reactInternalMemoizedMergedChildContext=mergedContext;// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
pop(didPerformWorkStackCursor,workInProgress);pop(contextStackCursor,workInProgress);// Now push the new context and mark that it has changed.
push(contextStackCursor,mergedContext,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}else{pop(didPerformWorkStackCursor,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}};var resetContext=function(){previousContext=emptyObject;contextStackCursor.current=emptyObject;didPerformWorkStackCursor.current=false;};var findCurrentUnmaskedContext$1=function(fiber){// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
!(isFiberMounted$1(fiber)&&fiber.tag===ClassComponent$3)?invariant(false,'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'):void 0;var node=fiber;while(node.tag!==HostRoot$3){if(isContextProvider$1(node)){return node.stateNode.__reactInternalMemoizedMergedChildContext;}var parent=node['return'];!parent?invariant(false,'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'):void 0;node=parent;}return node.stateNode.context;};var ReactFiberContext={getUnmaskedContext:getUnmaskedContext_1,cacheContext:cacheContext_1,getMaskedContext:getMaskedContext,hasContextChanged:hasContextChanged,isContextConsumer:isContextConsumer_1,isContextProvider:isContextProvider_1,popContextProvider:popContextProvider_1,pushTopLevelContextObject:pushTopLevelContextObject,processChildContext:processChildContext_1,pushContextProvider:pushContextProvider,invalidateContextProvider:invalidateContextProvider,resetContext:resetContext,findCurrentUnmaskedContext:findCurrentUnmaskedContext$1};/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTypeOfInternalContext
 * 
 */var ReactTypeOfInternalContext={NoContext:0,AsyncUpdates:1};var IndeterminateComponent$1=ReactTypeOfWork.IndeterminateComponent;var ClassComponent$4=ReactTypeOfWork.ClassComponent;var HostRoot$5=ReactTypeOfWork.HostRoot;var HostComponent$5=ReactTypeOfWork.HostComponent;var HostText$3=ReactTypeOfWork.HostText;var HostPortal$2=ReactTypeOfWork.HostPortal;var CoroutineComponent=ReactTypeOfWork.CoroutineComponent;var YieldComponent$1=ReactTypeOfWork.YieldComponent;var Fragment$1=ReactTypeOfWork.Fragment;var NoWork$1=ReactPriorityLevel.NoWork;var NoContext=ReactTypeOfInternalContext.NoContext;var NoEffect$1=ReactTypeOfSideEffect.NoEffect;{var getComponentName$6=getComponentName_1;var hasBadMapPolyfill=false;try{var nonExtensibleObject=Object.preventExtensions({});/* eslint-disable no-new */new Map([[nonExtensibleObject,null]]);new Set([nonExtensibleObject]);/* eslint-enable no-new */}catch(e){// TODO: Consider warning about bad polyfills
hasBadMapPolyfill=true;}}// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.
{var debugCounter=1;}// This is a constructor of a POJO instead of a constructor function for a few
// reasons:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We can easily go from a createFiber call to calling a constructor if that
//    is faster. The opposite is not true.
// 4) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber=function(tag,key,internalContextTag){var fiber={// Instance
tag:tag,key:key,type:null,stateNode:null,// Fiber
'return':null,child:null,sibling:null,index:0,ref:null,pendingProps:null,memoizedProps:null,updateQueue:null,memoizedState:null,internalContextTag:internalContextTag,effectTag:NoEffect$1,nextEffect:null,firstEffect:null,lastEffect:null,pendingWorkPriority:NoWork$1,alternate:null};{fiber._debugID=debugCounter++;fiber._debugSource=null;fiber._debugOwner=null;fiber._debugIsCurrentlyTiming=false;if(!hasBadMapPolyfill&&typeof Object.preventExtensions==='function'){Object.preventExtensions(fiber);}}return fiber;};function shouldConstruct(Component){return!!(Component.prototype&&Component.prototype.isReactComponent);}// This is used to create an alternate fiber to do work on.
var createWorkInProgress=function(current,renderPriority){var workInProgress=current.alternate;if(workInProgress===null){// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
workInProgress=createFiber(current.tag,current.key,current.internalContextTag);workInProgress.type=current.type;workInProgress.stateNode=current.stateNode;{// DEV-only fields
workInProgress._debugID=current._debugID;workInProgress._debugSource=current._debugSource;workInProgress._debugOwner=current._debugOwner;}workInProgress.alternate=current;current.alternate=workInProgress;}else{// We already have an alternate.
// Reset the effect tag.
workInProgress.effectTag=NoWork$1;// The effect list is no longer valid.
workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null;}workInProgress.pendingWorkPriority=renderPriority;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;// pendingProps is set by the parent during reconciliation.
// TODO: Pass this as an argument.
// These will be overridden during the parent's reconciliation
workInProgress.sibling=current.sibling;workInProgress.index=current.index;workInProgress.ref=current.ref;return workInProgress;};var createHostRootFiber$1=function(){var fiber=createFiber(HostRoot$5,null,NoContext);return fiber;};var createFiberFromElement=function(element,internalContextTag,priorityLevel){var owner=null;{owner=element._owner;}var fiber=createFiberFromElementType(element.type,element.key,internalContextTag,owner);fiber.pendingProps=element.props;fiber.pendingWorkPriority=priorityLevel;{fiber._debugSource=element._source;fiber._debugOwner=element._owner;}return fiber;};var createFiberFromFragment=function(elements,internalContextTag,priorityLevel){// TODO: Consider supporting keyed fragments. Technically, we accidentally
// support that in the existing React.
var fiber=createFiber(Fragment$1,null,internalContextTag);fiber.pendingProps=elements;fiber.pendingWorkPriority=priorityLevel;return fiber;};var createFiberFromText=function(content,internalContextTag,priorityLevel){var fiber=createFiber(HostText$3,null,internalContextTag);fiber.pendingProps=content;fiber.pendingWorkPriority=priorityLevel;return fiber;};function createFiberFromElementType(type,key,internalContextTag,debugOwner){var fiber=void 0;if(typeof type==='function'){fiber=shouldConstruct(type)?createFiber(ClassComponent$4,key,internalContextTag):createFiber(IndeterminateComponent$1,key,internalContextTag);fiber.type=type;}else if(typeof type==='string'){fiber=createFiber(HostComponent$5,key,internalContextTag);fiber.type=type;}else if(typeof type==='object'&&type!==null&&typeof type.tag==='number'){// Currently assumed to be a continuation and therefore is a fiber already.
// TODO: The yield system is currently broken for updates in some cases.
// The reified yield stores a fiber, but we don't know which fiber that is;
// the current or a workInProgress? When the continuation gets rendered here
// we don't know if we can reuse that fiber or if we need to clone it.
// There is probably a clever way to restructure this.
fiber=type;}else{var info='';{if(type===undefined||typeof type==='object'&&type!==null&&Object.keys(type).length===0){info+=' You likely forgot to export your component from the file '+"it's defined in.";}var ownerName=debugOwner?getComponentName$6(debugOwner):null;if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}}invariant(false,'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',type==null?type:typeof type,info);}return fiber;}var createFiberFromElementType_1=createFiberFromElementType;var createFiberFromHostInstanceForDeletion=function(){var fiber=createFiber(HostComponent$5,null,NoContext);fiber.type='DELETED';return fiber;};var createFiberFromCoroutine=function(coroutine,internalContextTag,priorityLevel){var fiber=createFiber(CoroutineComponent,coroutine.key,internalContextTag);fiber.type=coroutine.handler;fiber.pendingProps=coroutine;fiber.pendingWorkPriority=priorityLevel;return fiber;};var createFiberFromYield=function(yieldNode,internalContextTag,priorityLevel){var fiber=createFiber(YieldComponent$1,null,internalContextTag);return fiber;};var createFiberFromPortal=function(portal,internalContextTag,priorityLevel){var fiber=createFiber(HostPortal$2,portal.key,internalContextTag);fiber.pendingProps=portal.children||[];fiber.pendingWorkPriority=priorityLevel;fiber.stateNode={containerInfo:portal.containerInfo,implementation:portal.implementation};return fiber;};var largerPriority=function(p1,p2){return p1!==NoWork$1&&(p2===NoWork$1||p2>p1)?p1:p2;};var ReactFiber={createWorkInProgress:createWorkInProgress,createHostRootFiber:createHostRootFiber$1,createFiberFromElement:createFiberFromElement,createFiberFromFragment:createFiberFromFragment,createFiberFromText:createFiberFromText,createFiberFromElementType:createFiberFromElementType_1,createFiberFromHostInstanceForDeletion:createFiberFromHostInstanceForDeletion,createFiberFromCoroutine:createFiberFromCoroutine,createFiberFromYield:createFiberFromYield,createFiberFromPortal:createFiberFromPortal,largerPriority:largerPriority};var createHostRootFiber=ReactFiber.createHostRootFiber;var createFiberRoot$1=function(containerInfo){// Cyclic construction. This cheats the type system right now because
// stateNode is any.
var uninitializedFiber=createHostRootFiber();var root={current:uninitializedFiber,containerInfo:containerInfo,isScheduled:false,nextScheduledRoot:null,context:null,pendingContext:null};uninitializedFiber.stateNode=root;return root;};var ReactFiberRoot={createFiberRoot:createFiberRoot$1};var defaultShowDialog=function(capturedError){return true;};var showDialog=defaultShowDialog;function logCapturedError$1(capturedError){var logError=showDialog(capturedError);// Allow injected showDialog() to prevent default console.error logging.
// This enables renderers like ReactNative to better manage redbox behavior.
if(logError===false){return;}var error=capturedError.error;{var componentName=capturedError.componentName,componentStack=capturedError.componentStack,errorBoundaryName=capturedError.errorBoundaryName,errorBoundaryFound=capturedError.errorBoundaryFound,willRetry=capturedError.willRetry;var componentNameMessage=componentName?'The above error occurred in the <'+componentName+'> component:':'The above error occurred in one of your React components:';var errorBoundaryMessage=void 0;// errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
if(errorBoundaryFound&&errorBoundaryName){if(willRetry){errorBoundaryMessage='React will try to recreate this component tree from scratch '+('using the error boundary you provided, '+errorBoundaryName+'.');}else{errorBoundaryMessage='This error was initially handled by the error boundary '+errorBoundaryName+'.\n'+'Recreating the tree from scratch failed so React will unmount the tree.';}}else{errorBoundaryMessage='Consider adding an error boundary to your tree to customize error handling behavior.\n'+'You can learn more about error boundaries at https://fb.me/react-error-boundaries.';}var combinedMessage=''+componentNameMessage+componentStack+'\n\n'+(''+errorBoundaryMessage);// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(combinedMessage);}}var injection$1={/**
   * Display custom dialog for lifecycle errors.
   * Return false to prevent default behavior of logging to console.error.
   */injectDialog:function(fn){!(showDialog===defaultShowDialog)?invariant(false,'The custom dialog was already injected.'):void 0;!(typeof fn==='function')?invariant(false,'Injected showDialog() must be a function.'):void 0;showDialog=fn;}};var logCapturedError_1=logCapturedError$1;var ReactFiberErrorLogger={injection:injection$1,logCapturedError:logCapturedError_1};/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCoroutine
 * 
 */// The Symbol used to tag the special React types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_COROUTINE_TYPE$1;var REACT_YIELD_TYPE$1;if(typeof Symbol==='function'&&Symbol['for']){REACT_COROUTINE_TYPE$1=Symbol['for']('react.coroutine');REACT_YIELD_TYPE$1=Symbol['for']('react.yield');}else{REACT_COROUTINE_TYPE$1=0xeac8;REACT_YIELD_TYPE$1=0xeac9;}var createCoroutine=function(children,handler,props){var key=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var coroutine={// This tag allow us to uniquely identify this as a React Coroutine
$$typeof:REACT_COROUTINE_TYPE$1,key:key==null?null:''+key,children:children,handler:handler,props:props};{// TODO: Add _store property for marking this as validated.
if(Object.freeze){Object.freeze(coroutine.props);Object.freeze(coroutine);}}return coroutine;};var createYield=function(value){var yieldNode={// This tag allow us to uniquely identify this as a React Yield
$$typeof:REACT_YIELD_TYPE$1,value:value};{// TODO: Add _store property for marking this as validated.
if(Object.freeze){Object.freeze(yieldNode);}}return yieldNode;};/**
 * Verifies the object is a coroutine object.
 */var isCoroutine=function(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_COROUTINE_TYPE$1;};/**
 * Verifies the object is a yield object.
 */var isYield=function(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_YIELD_TYPE$1;};var REACT_YIELD_TYPE_1=REACT_YIELD_TYPE$1;var REACT_COROUTINE_TYPE_1=REACT_COROUTINE_TYPE$1;var ReactCoroutine={createCoroutine:createCoroutine,createYield:createYield,isCoroutine:isCoroutine,isYield:isYield,REACT_YIELD_TYPE:REACT_YIELD_TYPE_1,REACT_COROUTINE_TYPE:REACT_COROUTINE_TYPE_1};/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPortal
 * 
 */// The Symbol used to tag the special React types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_PORTAL_TYPE$1=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.portal')||0xeaca;var createPortal=function(children,containerInfo,// TODO: figure out the API for cross-renderer implementation.
implementation){var key=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;return{// This tag allow us to uniquely identify this as a React Portal
$$typeof:REACT_PORTAL_TYPE$1,key:key==null?null:''+key,children:children,containerInfo:containerInfo,implementation:implementation};};/**
 * Verifies the object is a portal object.
 */var isPortal=function(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_PORTAL_TYPE$1;};var REACT_PORTAL_TYPE_1=REACT_PORTAL_TYPE$1;var ReactPortal={createPortal:createPortal,isPortal:isPortal,REACT_PORTAL_TYPE:REACT_PORTAL_TYPE_1};var REACT_COROUTINE_TYPE=ReactCoroutine.REACT_COROUTINE_TYPE;var REACT_YIELD_TYPE=ReactCoroutine.REACT_YIELD_TYPE;var REACT_PORTAL_TYPE=ReactPortal.REACT_PORTAL_TYPE;{var _require3$3=ReactDebugCurrentFiber_1,getCurrentFiberStackAddendum$4=_require3$3.getCurrentFiberStackAddendum;var warning$24=require$$0;var didWarnAboutMaps=false;/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */var ownerHasKeyUseWarning={};var warnForMissingKey=function(child){if(child===null||typeof child!=='object'){return;}if(!child._store||child._store.validated||child.key!=null){return;}!(typeof child._store==='object')?invariant(false,'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'):void 0;child._store.validated=true;var currentComponentErrorInfo='Each child in an array or iterator should have a unique '+'"key" prop. See https://fb.me/react-warning-keys for '+'more information.'+(getCurrentFiberStackAddendum$4()||'');if(ownerHasKeyUseWarning[currentComponentErrorInfo]){return;}ownerHasKeyUseWarning[currentComponentErrorInfo]=true;warning$24(false,'Each child in an array or iterator should have a unique '+'"key" prop. See https://fb.me/react-warning-keys for '+'more information.%s',getCurrentFiberStackAddendum$4());};}var createWorkInProgress$2=ReactFiber.createWorkInProgress;var createFiberFromElement$1=ReactFiber.createFiberFromElement;var createFiberFromFragment$1=ReactFiber.createFiberFromFragment;var createFiberFromText$1=ReactFiber.createFiberFromText;var createFiberFromCoroutine$1=ReactFiber.createFiberFromCoroutine;var createFiberFromYield$1=ReactFiber.createFiberFromYield;var createFiberFromPortal$1=ReactFiber.createFiberFromPortal;var isArray=Array.isArray;var FunctionalComponent$2=ReactTypeOfWork.FunctionalComponent;var ClassComponent$7=ReactTypeOfWork.ClassComponent;var HostText$5=ReactTypeOfWork.HostText;var HostPortal$5=ReactTypeOfWork.HostPortal;var CoroutineComponent$2=ReactTypeOfWork.CoroutineComponent;var YieldComponent$3=ReactTypeOfWork.YieldComponent;var Fragment$3=ReactTypeOfWork.Fragment;var NoEffect$2=ReactTypeOfSideEffect.NoEffect;var Placement$3=ReactTypeOfSideEffect.Placement;var Deletion$1=ReactTypeOfSideEffect.Deletion;var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;function getIteratorFn(maybeIterable){if(maybeIterable===null||typeof maybeIterable==='undefined'){return null;}var iteratorFn=ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL];if(typeof iteratorFn==='function'){return iteratorFn;}return null;}function coerceRef(current,element){var mixedRef=element.ref;if(mixedRef!==null&&typeof mixedRef!=='function'){if(element._owner){var owner=element._owner;var inst=void 0;if(owner){if(typeof owner.tag==='number'){var ownerFiber=owner;!(ownerFiber.tag===ClassComponent$7)?invariant(false,'Stateless function components cannot have refs.'):void 0;inst=ownerFiber.stateNode;}else{// Stack
inst=owner.getPublicInstance();}}!inst?invariant(false,'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.',mixedRef):void 0;var stringRef=''+mixedRef;// Check if previous string ref matches new string ref
if(current!==null&&current.ref!==null&&current.ref._stringRef===stringRef){return current.ref;}var ref=function(value){var refs=inst.refs===emptyObject?inst.refs={}:inst.refs;if(value===null){delete refs[stringRef];}else{refs[stringRef]=value;}};ref._stringRef=stringRef;return ref;}else{!(typeof mixedRef==='string')?invariant(false,'Expected ref to be a function or a string.'):void 0;!element._owner?invariant(false,'Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://fb.me/react-refs-must-have-owner).',mixedRef):void 0;}}return mixedRef;}function throwOnInvalidObjectType(returnFiber,newChild){if(returnFiber.type!=='textarea'){var addendum='';{addendum=' If you meant to render a collection of children, use an array '+'instead.'+(getCurrentFiberStackAddendum$4()||'');}invariant(false,'Objects are not valid as a React child (found: %s).%s',Object.prototype.toString.call(newChild)==='[object Object]'?'object with keys {'+Object.keys(newChild).join(', ')+'}':newChild,addendum);}}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(shouldClone,shouldTrackSideEffects){function deleteChild(returnFiber,childToDelete){if(!shouldTrackSideEffects){// Noop.
return;}if(!shouldClone){// When we're reconciling in place we have a work in progress copy. We
// actually want the current copy. If there is no current copy, then we
// don't need to track deletion side-effects.
if(childToDelete.alternate===null){return;}childToDelete=childToDelete.alternate;}// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var last=returnFiber.lastEffect;if(last!==null){last.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else{returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}childToDelete.nextEffect=null;childToDelete.effectTag=Deletion$1;}function deleteRemainingChildren(returnFiber,currentFirstChild){if(!shouldTrackSideEffects){// Noop.
return null;}// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
var childToDelete=currentFirstChild;while(childToDelete!==null){deleteChild(returnFiber,childToDelete);childToDelete=childToDelete.sibling;}return null;}function mapRemainingChildren(returnFiber,currentFirstChild){// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
var existingChildren=new Map();var existingChild=currentFirstChild;while(existingChild!==null){if(existingChild.key!==null){existingChildren.set(existingChild.key,existingChild);}else{existingChildren.set(existingChild.index,existingChild);}existingChild=existingChild.sibling;}return existingChildren;}function useFiber(fiber,priority){// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
if(shouldClone){var clone=createWorkInProgress$2(fiber,priority);clone.index=0;clone.sibling=null;return clone;}else{// We override the pending priority even if it is higher, because if
// we're reconciling at a lower priority that means that this was
// down-prioritized.
fiber.pendingWorkPriority=priority;fiber.effectTag=NoEffect$2;fiber.index=0;fiber.sibling=null;return fiber;}}function placeChild(newFiber,lastPlacedIndex,newIndex){newFiber.index=newIndex;if(!shouldTrackSideEffects){// Noop.
return lastPlacedIndex;}var current=newFiber.alternate;if(current!==null){var oldIndex=current.index;if(oldIndex<lastPlacedIndex){// This is a move.
newFiber.effectTag=Placement$3;return lastPlacedIndex;}else{// This item can stay in place.
return oldIndex;}}else{// This is an insertion.
newFiber.effectTag=Placement$3;return lastPlacedIndex;}}function placeSingleChild(newFiber){// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
if(shouldTrackSideEffects&&newFiber.alternate===null){newFiber.effectTag=Placement$3;}return newFiber;}function updateTextNode(returnFiber,current,textContent,priority){if(current===null||current.tag!==HostText$5){// Insert
var created=createFiberFromText$1(textContent,returnFiber.internalContextTag,priority);created['return']=returnFiber;return created;}else{// Update
var existing=useFiber(current,priority);existing.pendingProps=textContent;existing['return']=returnFiber;return existing;}}function updateElement(returnFiber,current,element,priority){if(current===null||current.type!==element.type){// Insert
var created=createFiberFromElement$1(element,returnFiber.internalContextTag,priority);created.ref=coerceRef(current,element);created['return']=returnFiber;return created;}else{// Move based on index
var existing=useFiber(current,priority);existing.ref=coerceRef(current,element);existing.pendingProps=element.props;existing['return']=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}}function updateCoroutine(returnFiber,current,coroutine,priority){// TODO: Should this also compare handler to determine whether to reuse?
if(current===null||current.tag!==CoroutineComponent$2){// Insert
var created=createFiberFromCoroutine$1(coroutine,returnFiber.internalContextTag,priority);created['return']=returnFiber;return created;}else{// Move based on index
var existing=useFiber(current,priority);existing.pendingProps=coroutine;existing['return']=returnFiber;return existing;}}function updateYield(returnFiber,current,yieldNode,priority){if(current===null||current.tag!==YieldComponent$3){// Insert
var created=createFiberFromYield$1(yieldNode,returnFiber.internalContextTag,priority);created.type=yieldNode.value;created['return']=returnFiber;return created;}else{// Move based on index
var existing=useFiber(current,priority);existing.type=yieldNode.value;existing['return']=returnFiber;return existing;}}function updatePortal(returnFiber,current,portal,priority){if(current===null||current.tag!==HostPortal$5||current.stateNode.containerInfo!==portal.containerInfo||current.stateNode.implementation!==portal.implementation){// Insert
var created=createFiberFromPortal$1(portal,returnFiber.internalContextTag,priority);created['return']=returnFiber;return created;}else{// Update
var existing=useFiber(current,priority);existing.pendingProps=portal.children||[];existing['return']=returnFiber;return existing;}}function updateFragment(returnFiber,current,fragment,priority){if(current===null||current.tag!==Fragment$3){// Insert
var created=createFiberFromFragment$1(fragment,returnFiber.internalContextTag,priority);created['return']=returnFiber;return created;}else{// Update
var existing=useFiber(current,priority);existing.pendingProps=fragment;existing['return']=returnFiber;return existing;}}function createChild(returnFiber,newChild,priority){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes doesn't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var created=createFiberFromText$1(''+newChild,returnFiber.internalContextTag,priority);created['return']=returnFiber;return created;}if(typeof newChild==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _created=createFiberFromElement$1(newChild,returnFiber.internalContextTag,priority);_created.ref=coerceRef(null,newChild);_created['return']=returnFiber;return _created;}case REACT_COROUTINE_TYPE:{var _created2=createFiberFromCoroutine$1(newChild,returnFiber.internalContextTag,priority);_created2['return']=returnFiber;return _created2;}case REACT_YIELD_TYPE:{var _created3=createFiberFromYield$1(newChild,returnFiber.internalContextTag,priority);_created3.type=newChild.value;_created3['return']=returnFiber;return _created3;}case REACT_PORTAL_TYPE:{var _created4=createFiberFromPortal$1(newChild,returnFiber.internalContextTag,priority);_created4['return']=returnFiber;return _created4;}}if(isArray(newChild)||getIteratorFn(newChild)){var _created5=createFiberFromFragment$1(newChild,returnFiber.internalContextTag,priority);_created5['return']=returnFiber;return _created5;}throwOnInvalidObjectType(returnFiber,newChild);}return null;}function updateSlot(returnFiber,oldFiber,newChild,priority){// Update the fiber if the keys match, otherwise return null.
var key=oldFiber!==null?oldFiber.key:null;if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes doesn't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
if(key!==null){return null;}return updateTextNode(returnFiber,oldFiber,''+newChild,priority);}if(typeof newChild==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.key===key){return updateElement(returnFiber,oldFiber,newChild,priority);}else{return null;}}case REACT_COROUTINE_TYPE:{if(newChild.key===key){return updateCoroutine(returnFiber,oldFiber,newChild,priority);}else{return null;}}case REACT_YIELD_TYPE:{// Yields doesn't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a
// yield.
if(key===null){return updateYield(returnFiber,oldFiber,newChild,priority);}else{return null;}}case REACT_PORTAL_TYPE:{if(newChild.key===key){return updatePortal(returnFiber,oldFiber,newChild,priority);}else{return null;}}}if(isArray(newChild)||getIteratorFn(newChild)){// Fragments doesn't have keys so if the previous key is implicit we can
// update it.
if(key!==null){return null;}return updateFragment(returnFiber,oldFiber,newChild,priority);}throwOnInvalidObjectType(returnFiber,newChild);}return null;}function updateFromMap(existingChildren,returnFiber,newIdx,newChild,priority){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes doesn't have keys, so we neither have to check the old nor
// new node for the key. If both are text nodes, they match.
var matchedFiber=existingChildren.get(newIdx)||null;return updateTextNode(returnFiber,matchedFiber,''+newChild,priority);}if(typeof newChild==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _matchedFiber=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updateElement(returnFiber,_matchedFiber,newChild,priority);}case REACT_COROUTINE_TYPE:{var _matchedFiber2=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updateCoroutine(returnFiber,_matchedFiber2,newChild,priority);}case REACT_YIELD_TYPE:{// Yields doesn't have keys, so we neither have to check the old nor
// new node for the key. If both are yields, they match.
var _matchedFiber3=existingChildren.get(newIdx)||null;return updateYield(returnFiber,_matchedFiber3,newChild,priority);}case REACT_PORTAL_TYPE:{var _matchedFiber4=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updatePortal(returnFiber,_matchedFiber4,newChild,priority);}}if(isArray(newChild)||getIteratorFn(newChild)){var _matchedFiber5=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber5,newChild,priority);}throwOnInvalidObjectType(returnFiber,newChild);}return null;}/**
   * Warns if there is a duplicate or missing key
   */function warnOnInvalidKey(child,knownKeys){{if(typeof child!=='object'||child===null){return knownKeys;}switch(child.$$typeof){case REACT_ELEMENT_TYPE:case REACT_COROUTINE_TYPE:case REACT_PORTAL_TYPE:warnForMissingKey(child);var key=child.key;if(typeof key!=='string'){break;}if(knownKeys===null){knownKeys=new Set();knownKeys.add(key);break;}if(!knownKeys.has(key)){knownKeys.add(key);break;}warning$24(false,'Encountered two children with the same key, `%s`. '+'Keys should be unique so that components maintain their identity '+'across updates. Non-unique keys may cause children to be '+'duplicated and/or omitted — the behavior is unsupported and '+'could change in a future version.%s',key,getCurrentFiberStackAddendum$4());break;default:break;}}return knownKeys;}function reconcileChildrenArray(returnFiber,currentFirstChild,newChildren,priority){// This algorithm can't optimize by searching from boths ends since we
// don't have backpointers on fibers. I'm trying to see how far we can get
// with that model. If it ends up not being worth the tradeoffs, we can
// add it later.
// Even with a two ended optimization, we'd want to optimize for the case
// where there are few changes and brute force the comparison instead of
// going for the Map. It'd like to explore hitting that path first in
// forward-only mode and only go for the Map once we notice that we need
// lots of look ahead. This doesn't handle reversal as well as two ended
// search but that's unusual. Besides, for the two ended optimization to
// work on Iterables, we'd need to copy the whole set.
// In this first iteration, we'll just live with hitting the bad case
// (adding everything to a Map) in for every insert/move.
// If you change this code, also update reconcileChildrenIterator() which
// uses the same algorithm.
{// First, validate keys.
var knownKeys=null;for(var i=0;i<newChildren.length;i++){var child=newChildren[i];knownKeys=warnOnInvalidKey(child,knownKeys);}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;for(;oldFiber!==null&&newIdx<newChildren.length;newIdx++){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,newChildren[newIdx],priority);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(newIdx===newChildren.length){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;newIdx<newChildren.length;newIdx++){var _newFiber=createChild(returnFiber,newChildren[newIdx],priority);if(!_newFiber){continue;}lastPlacedIndex=placeChild(_newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber;}else{previousNewFiber.sibling=_newFiber;}previousNewFiber=_newFiber;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;newIdx<newChildren.length;newIdx++){var _newFiber2=updateFromMap(existingChildren,returnFiber,newIdx,newChildren[newIdx],priority);if(_newFiber2){if(shouldTrackSideEffects){if(_newFiber2.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren['delete'](_newFiber2.key===null?newIdx:_newFiber2.key);}}lastPlacedIndex=placeChild(_newFiber2,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber2;}else{previousNewFiber.sibling=_newFiber2;}previousNewFiber=_newFiber2;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileChildrenIterator(returnFiber,currentFirstChild,newChildrenIterable,priority){// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var iteratorFn=getIteratorFn(newChildrenIterable);!(typeof iteratorFn==='function')?invariant(false,'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'):void 0;{// Warn about using Maps as children
if(typeof newChildrenIterable.entries==='function'){var possibleMap=newChildrenIterable;if(possibleMap.entries===iteratorFn){warning$24(didWarnAboutMaps,'Using Maps as children is unsupported and will likely yield '+'unexpected results. Convert it to a sequence/iterable of keyed '+'ReactElements instead.%s',getCurrentFiberStackAddendum$4());didWarnAboutMaps=true;}}// First, validate keys.
// We'll get a different iterator later for the main pass.
var _newChildren=iteratorFn.call(newChildrenIterable);if(_newChildren){var knownKeys=null;var _step=_newChildren.next();for(;!_step.done;_step=_newChildren.next()){var child=_step.value;knownKeys=warnOnInvalidKey(child,knownKeys);}}}var newChildren=iteratorFn.call(newChildrenIterable);!(newChildren!=null)?invariant(false,'An iterable object provided no iterator.'):void 0;var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;var step=newChildren.next();for(;oldFiber!==null&&!step.done;newIdx++,step=newChildren.next()){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,step.value,priority);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(!oldFiber){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(step.done){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber3=createChild(returnFiber,step.value,priority);if(_newFiber3===null){continue;}lastPlacedIndex=placeChild(_newFiber3,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber3;}else{previousNewFiber.sibling=_newFiber3;}previousNewFiber=_newFiber3;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber4=updateFromMap(existingChildren,returnFiber,newIdx,step.value,priority);if(_newFiber4!==null){if(shouldTrackSideEffects){if(_newFiber4.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren['delete'](_newFiber4.key===null?newIdx:_newFiber4.key);}}lastPlacedIndex=placeChild(_newFiber4,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber4;}else{previousNewFiber.sibling=_newFiber4;}previousNewFiber=_newFiber4;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileSingleTextNode(returnFiber,currentFirstChild,textContent,priority){// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(currentFirstChild!==null&&currentFirstChild.tag===HostText$5){// We already have an existing node so let's just update it and delete
// the rest.
deleteRemainingChildren(returnFiber,currentFirstChild.sibling);var existing=useFiber(currentFirstChild,priority);existing.pendingProps=textContent;existing['return']=returnFiber;return existing;}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
deleteRemainingChildren(returnFiber,currentFirstChild);var created=createFiberFromText$1(textContent,returnFiber.internalContextTag,priority);created['return']=returnFiber;return created;}function reconcileSingleElement(returnFiber,currentFirstChild,element,priority){var key=element.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.type===element.type){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,priority);existing.ref=coerceRef(child,element);existing.pendingProps=element.props;existing['return']=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromElement$1(element,returnFiber.internalContextTag,priority);created.ref=coerceRef(currentFirstChild,element);created['return']=returnFiber;return created;}function reconcileSingleCoroutine(returnFiber,currentFirstChild,coroutine,priority){var key=coroutine.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===CoroutineComponent$2){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,priority);existing.pendingProps=coroutine;existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromCoroutine$1(coroutine,returnFiber.internalContextTag,priority);created['return']=returnFiber;return created;}function reconcileSingleYield(returnFiber,currentFirstChild,yieldNode,priority){// There's no need to check for keys on yields since they're stateless.
var child=currentFirstChild;if(child!==null){if(child.tag===YieldComponent$3){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,priority);existing.type=yieldNode.value;existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);}}var created=createFiberFromYield$1(yieldNode,returnFiber.internalContextTag,priority);created.type=yieldNode.value;created['return']=returnFiber;return created;}function reconcileSinglePortal(returnFiber,currentFirstChild,portal,priority){var key=portal.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===HostPortal$5&&child.stateNode.containerInfo===portal.containerInfo&&child.stateNode.implementation===portal.implementation){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,priority);existing.pendingProps=portal.children||[];existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromPortal$1(portal,returnFiber.internalContextTag,priority);created['return']=returnFiber;return created;}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function reconcileChildFibers(returnFiber,currentFirstChild,newChild,priority){// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
var disableNewFiberFeatures=ReactFeatureFlags_1.disableNewFiberFeatures;// Handle object types
var isObject=typeof newChild==='object'&&newChild!==null;if(isObject){// Support only the subset of return types that Stack supports. Treat
// everything else as empty, but log a warning.
if(disableNewFiberFeatures){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,priority));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,priority));}}else{switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,priority));case REACT_COROUTINE_TYPE:return placeSingleChild(reconcileSingleCoroutine(returnFiber,currentFirstChild,newChild,priority));case REACT_YIELD_TYPE:return placeSingleChild(reconcileSingleYield(returnFiber,currentFirstChild,newChild,priority));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,priority));}}}if(disableNewFiberFeatures){// The new child is not an element. If it's not null or false,
// and the return fiber is a composite component, throw an error.
switch(returnFiber.tag){case ClassComponent$7:{{var instance=returnFiber.stateNode;if(instance.render._isMockFunction&&typeof newChild==='undefined'){// We allow auto-mocks to proceed as if they're
// returning null.
break;}}var Component=returnFiber.type;!(newChild===null||newChild===false)?invariant(false,'%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',Component.displayName||Component.name||'Component'):void 0;break;}case FunctionalComponent$2:{// Composites accept elements, portals, null, or false
var _Component=returnFiber.type;!(newChild===null||newChild===false)?invariant(false,'%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',_Component.displayName||_Component.name||'Component'):void 0;break;}}}if(typeof newChild==='string'||typeof newChild==='number'){return placeSingleChild(reconcileSingleTextNode(returnFiber,currentFirstChild,''+newChild,priority));}if(isArray(newChild)){return reconcileChildrenArray(returnFiber,currentFirstChild,newChild,priority);}if(getIteratorFn(newChild)){return reconcileChildrenIterator(returnFiber,currentFirstChild,newChild,priority);}if(isObject){throwOnInvalidObjectType(returnFiber,newChild);}if(!disableNewFiberFeatures&&typeof newChild==='undefined'){// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(returnFiber.tag){case ClassComponent$7:{{var _instance=returnFiber.stateNode;if(_instance.render._isMockFunction){// We allow auto-mocks to proceed as if they're returning null.
break;}}}// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case FunctionalComponent$2:{var _Component2=returnFiber.type;invariant(false,'%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.',_Component2.displayName||_Component2.name||'Component');}}}// Remaining cases are all treated as empty.
return deleteRemainingChildren(returnFiber,currentFirstChild);}return reconcileChildFibers;}var reconcileChildFibers$1=ChildReconciler(true,true);var reconcileChildFibersInPlace$1=ChildReconciler(false,true);var mountChildFibersInPlace$1=ChildReconciler(false,false);var cloneChildFibers$1=function(current,workInProgress){!(current===null||workInProgress.child===current.child)?invariant(false,'Resuming work not yet implemented.'):void 0;if(workInProgress.child===null){return;}var currentChild=workInProgress.child;var newChild=createWorkInProgress$2(currentChild,currentChild.pendingWorkPriority);// TODO: Pass this as an argument, since it's easy to forget.
newChild.pendingProps=currentChild.pendingProps;workInProgress.child=newChild;newChild['return']=workInProgress;while(currentChild.sibling!==null){currentChild=currentChild.sibling;newChild=newChild.sibling=createWorkInProgress$2(currentChild,currentChild.pendingWorkPriority);newChild.pendingProps=currentChild.pendingProps;newChild['return']=workInProgress;}newChild.sibling=null;};var ReactChildFiber={reconcileChildFibers:reconcileChildFibers$1,reconcileChildFibersInPlace:reconcileChildFibersInPlace$1,mountChildFibersInPlace:mountChildFibersInPlace$1,cloneChildFibers:cloneChildFibers$1};var Update$1=ReactTypeOfSideEffect.Update;var AsyncUpdates$1=ReactTypeOfInternalContext.AsyncUpdates;var cacheContext$1=ReactFiberContext.cacheContext;var getMaskedContext$2=ReactFiberContext.getMaskedContext;var getUnmaskedContext$2=ReactFiberContext.getUnmaskedContext;var isContextConsumer$1=ReactFiberContext.isContextConsumer;var addUpdate$1=ReactFiberUpdateQueue.addUpdate;var addReplaceUpdate$1=ReactFiberUpdateQueue.addReplaceUpdate;var addForceUpdate$1=ReactFiberUpdateQueue.addForceUpdate;var beginUpdateQueue$2=ReactFiberUpdateQueue.beginUpdateQueue;var _require5=ReactFiberContext;var hasContextChanged$2=_require5.hasContextChanged;var isMounted$1=ReactFiberTreeReflection.isMounted;var isArray$1=Array.isArray;{var _require7$1=ReactDebugFiberPerf_1,startPhaseTimer$1=_require7$1.startPhaseTimer,stopPhaseTimer$1=_require7$1.stopPhaseTimer;var warning$25=require$$0;var warnOnInvalidCallback=function(callback,callerName){warning$25(callback===null||typeof callback==='function','%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,callback);};}var ReactFiberClassComponent=function(scheduleUpdate,getPriorityContext,memoizeProps,memoizeState){// Class component state updater
var updater={isMounted:isMounted$1,enqueueSetState:function(instance,partialState,callback){var fiber=ReactInstanceMap_1.get(instance);var priorityLevel=getPriorityContext(fiber,false);callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'setState');}addUpdate$1(fiber,partialState,callback,priorityLevel);scheduleUpdate(fiber,priorityLevel);},enqueueReplaceState:function(instance,state,callback){var fiber=ReactInstanceMap_1.get(instance);var priorityLevel=getPriorityContext(fiber,false);callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'replaceState');}addReplaceUpdate$1(fiber,state,callback,priorityLevel);scheduleUpdate(fiber,priorityLevel);},enqueueForceUpdate:function(instance,callback){var fiber=ReactInstanceMap_1.get(instance);var priorityLevel=getPriorityContext(fiber,false);callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'forceUpdate');}addForceUpdate$1(fiber,callback,priorityLevel);scheduleUpdate(fiber,priorityLevel);}};function checkShouldComponentUpdate(workInProgress,oldProps,newProps,oldState,newState,newContext){if(oldProps===null||workInProgress.updateQueue!==null&&workInProgress.updateQueue.hasForceUpdate){// If the workInProgress already has an Update effect, return true
return true;}var instance=workInProgress.stateNode;var type=workInProgress.type;if(typeof instance.shouldComponentUpdate==='function'){{startPhaseTimer$1(workInProgress,'shouldComponentUpdate');}var shouldUpdate=instance.shouldComponentUpdate(newProps,newState,newContext);{stopPhaseTimer$1();}{warning$25(shouldUpdate!==undefined,'%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',getComponentName_1(workInProgress)||'Unknown');}return shouldUpdate;}if(type.prototype&&type.prototype.isPureReactComponent){return!shallowEqual(oldProps,newProps)||!shallowEqual(oldState,newState);}return true;}function checkClassInstance(workInProgress){var instance=workInProgress.stateNode;var type=workInProgress.type;{var name=getComponentName_1(workInProgress);var renderPresent=instance.render;warning$25(renderPresent,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',name);var noGetInitialStateOnES6=!instance.getInitialState||instance.getInitialState.isReactClassApproved||instance.state;warning$25(noGetInitialStateOnES6,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',name);var noGetDefaultPropsOnES6=!instance.getDefaultProps||instance.getDefaultProps.isReactClassApproved;warning$25(noGetDefaultPropsOnES6,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',name);var noInstancePropTypes=!instance.propTypes;warning$25(noInstancePropTypes,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',name);var noInstanceContextTypes=!instance.contextTypes;warning$25(noInstanceContextTypes,'contextTypes was defined as an instance property on %s. Use a static '+'property to define contextTypes instead.',name);var noComponentShouldUpdate=typeof instance.componentShouldUpdate!=='function';warning$25(noComponentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',name);if(type.prototype&&type.prototype.isPureReactComponent&&typeof instance.shouldComponentUpdate!=='undefined'){warning$25(false,'%s has a method called shouldComponentUpdate(). '+'shouldComponentUpdate should not be used when extending React.PureComponent. '+'Please extend React.Component if shouldComponentUpdate is used.',getComponentName_1(workInProgress)||'A pure component');}var noComponentDidUnmount=typeof instance.componentDidUnmount!=='function';warning$25(noComponentDidUnmount,'%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',name);var noComponentWillRecieveProps=typeof instance.componentWillRecieveProps!=='function';warning$25(noComponentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',name);var hasMutatedProps=instance.props!==workInProgress.pendingProps;warning$25(instance.props===undefined||!hasMutatedProps,'%s(...): When calling super() in `%s`, make sure to pass '+"up the same props that your component's constructor was passed.",name,name);var noInstanceDefaultProps=!instance.defaultProps;warning$25(noInstanceDefaultProps,'Setting defaultProps as an instance property on %s is not supported and will be ignored.'+' Instead, define defaultProps as a static property on %s.',name,name);}var state=instance.state;if(state&&(typeof state!=='object'||isArray$1(state))){invariant(false,'%s.state: must be set to an object or null',getComponentName_1(workInProgress));}if(typeof instance.getChildContext==='function'){!(typeof workInProgress.type.childContextTypes==='object')?invariant(false,'%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',getComponentName_1(workInProgress)):void 0;}}function resetInputPointers(workInProgress,instance){instance.props=workInProgress.memoizedProps;instance.state=workInProgress.memoizedState;}function adoptClassInstance(workInProgress,instance){instance.updater=updater;workInProgress.stateNode=instance;// The instance needs access to the fiber so that it can schedule updates
ReactInstanceMap_1.set(instance,workInProgress);}function constructClassInstance(workInProgress,props){var ctor=workInProgress.type;var unmaskedContext=getUnmaskedContext$2(workInProgress);var needsContext=isContextConsumer$1(workInProgress);var context=needsContext?getMaskedContext$2(workInProgress,unmaskedContext):emptyObject;var instance=new ctor(props,context);adoptClassInstance(workInProgress,instance);// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
if(needsContext){cacheContext$1(workInProgress,unmaskedContext,context);}return instance;}function callComponentWillMount(workInProgress,instance){{startPhaseTimer$1(workInProgress,'componentWillMount');}var oldState=instance.state;instance.componentWillMount();{stopPhaseTimer$1();}if(oldState!==instance.state){{warning$25(false,'%s.componentWillMount(): Assigning directly to this.state is '+"deprecated (except inside a component's "+'constructor). Use setState instead.',getComponentName_1(workInProgress));}updater.enqueueReplaceState(instance,instance.state,null);}}function callComponentWillReceiveProps(workInProgress,instance,newProps,newContext){{startPhaseTimer$1(workInProgress,'componentWillReceiveProps');}var oldState=instance.state;instance.componentWillReceiveProps(newProps,newContext);{stopPhaseTimer$1();}if(instance.state!==oldState){{warning$25(false,'%s.componentWillReceiveProps(): Assigning directly to '+"this.state is deprecated (except inside a component's "+'constructor). Use setState instead.',getComponentName_1(workInProgress));}updater.enqueueReplaceState(instance,instance.state,null);}}// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(workInProgress,priorityLevel){var current=workInProgress.alternate;{checkClassInstance(workInProgress);}var instance=workInProgress.stateNode;var state=instance.state||null;var props=workInProgress.pendingProps;!props?invariant(false,'There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.'):void 0;var unmaskedContext=getUnmaskedContext$2(workInProgress);instance.props=props;instance.state=state;instance.refs=emptyObject;instance.context=getMaskedContext$2(workInProgress,unmaskedContext);if(ReactFeatureFlags_1.enableAsyncSubtreeAPI&&workInProgress.type!=null&&workInProgress.type.prototype!=null&&workInProgress.type.prototype.unstable_isAsyncReactComponent===true){workInProgress.internalContextTag|=AsyncUpdates$1;}if(typeof instance.componentWillMount==='function'){callComponentWillMount(workInProgress,instance);// If we had additional state updates during this life-cycle, let's
// process them now.
var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){instance.state=beginUpdateQueue$2(current,workInProgress,updateQueue,instance,state,props,priorityLevel);}}if(typeof instance.componentDidMount==='function'){workInProgress.effectTag|=Update$1;}}// Called on a preexisting class instance. Returns false if a resumed render
// could be reused.
// function resumeMountClassInstance(
//   workInProgress: Fiber,
//   priorityLevel: PriorityLevel,
// ): boolean {
//   const instance = workInProgress.stateNode;
//   resetInputPointers(workInProgress, instance);
//   let newState = workInProgress.memoizedState;
//   let newProps = workInProgress.pendingProps;
//   if (!newProps) {
//     // If there isn't any new props, then we'll reuse the memoized props.
//     // This could be from already completed work.
//     newProps = workInProgress.memoizedProps;
//     invariant(
//       newProps != null,
//       'There should always be pending or memoized props. This error is ' +
//         'likely caused by a bug in React. Please file an issue.',
//     );
//   }
//   const newUnmaskedContext = getUnmaskedContext(workInProgress);
//   const newContext = getMaskedContext(workInProgress, newUnmaskedContext);
//   const oldContext = instance.context;
//   const oldProps = workInProgress.memoizedProps;
//   if (
//     typeof instance.componentWillReceiveProps === 'function' &&
//     (oldProps !== newProps || oldContext !== newContext)
//   ) {
//     callComponentWillReceiveProps(
//       workInProgress,
//       instance,
//       newProps,
//       newContext,
//     );
//   }
//   // Process the update queue before calling shouldComponentUpdate
//   const updateQueue = workInProgress.updateQueue;
//   if (updateQueue !== null) {
//     newState = beginUpdateQueue(
//       workInProgress,
//       updateQueue,
//       instance,
//       newState,
//       newProps,
//       priorityLevel,
//     );
//   }
//   // TODO: Should we deal with a setState that happened after the last
//   // componentWillMount and before this componentWillMount? Probably
//   // unsupported anyway.
//   if (
//     !checkShouldComponentUpdate(
//       workInProgress,
//       workInProgress.memoizedProps,
//       newProps,
//       workInProgress.memoizedState,
//       newState,
//       newContext,
//     )
//   ) {
//     // Update the existing instance's state, props, and context pointers even
//     // though we're bailing out.
//     instance.props = newProps;
//     instance.state = newState;
//     instance.context = newContext;
//     return false;
//   }
//   // Update the input pointers now so that they are correct when we call
//   // componentWillMount
//   instance.props = newProps;
//   instance.state = newState;
//   instance.context = newContext;
//   if (typeof instance.componentWillMount === 'function') {
//     callComponentWillMount(workInProgress, instance);
//     // componentWillMount may have called setState. Process the update queue.
//     const newUpdateQueue = workInProgress.updateQueue;
//     if (newUpdateQueue !== null) {
//       newState = beginUpdateQueue(
//         workInProgress,
//         newUpdateQueue,
//         instance,
//         newState,
//         newProps,
//         priorityLevel,
//       );
//     }
//   }
//   if (typeof instance.componentDidMount === 'function') {
//     workInProgress.effectTag |= Update;
//   }
//   instance.state = newState;
//   return true;
// }
// Invokes the update life-cycles and returns false if it shouldn't rerender.
function updateClassInstance(current,workInProgress,priorityLevel){var instance=workInProgress.stateNode;resetInputPointers(workInProgress,instance);var oldProps=workInProgress.memoizedProps;var newProps=workInProgress.pendingProps;if(!newProps){// If there aren't any new props, then we'll reuse the memoized props.
// This could be from already completed work.
newProps=oldProps;!(newProps!=null)?invariant(false,'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}var oldContext=instance.context;var newUnmaskedContext=getUnmaskedContext$2(workInProgress);var newContext=getMaskedContext$2(workInProgress,newUnmaskedContext);// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
if(typeof instance.componentWillReceiveProps==='function'&&(oldProps!==newProps||oldContext!==newContext)){callComponentWillReceiveProps(workInProgress,instance,newProps,newContext);}// Compute the next state using the memoized state and the update queue.
var oldState=workInProgress.memoizedState;// TODO: Previous state can be null.
var newState=void 0;if(workInProgress.updateQueue!==null){newState=beginUpdateQueue$2(current,workInProgress,workInProgress.updateQueue,instance,oldState,newProps,priorityLevel);}else{newState=oldState;}if(oldProps===newProps&&oldState===newState&&!hasContextChanged$2()&&!(workInProgress.updateQueue!==null&&workInProgress.updateQueue.hasForceUpdate)){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Update$1;}}return false;}var shouldUpdate=checkShouldComponentUpdate(workInProgress,oldProps,newProps,oldState,newState,newContext);if(shouldUpdate){if(typeof instance.componentWillUpdate==='function'){{startPhaseTimer$1(workInProgress,'componentWillUpdate');}instance.componentWillUpdate(newProps,newState,newContext);{stopPhaseTimer$1();}}if(typeof instance.componentDidUpdate==='function'){workInProgress.effectTag|=Update$1;}}else{// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Update$1;}}// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
memoizeProps(workInProgress,newProps);memoizeState(workInProgress,newState);}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
instance.props=newProps;instance.state=newState;instance.context=newContext;return shouldUpdate;}return{adoptClassInstance:adoptClassInstance,constructClassInstance:constructClassInstance,mountClassInstance:mountClassInstance,// resumeMountClassInstance,
updateClassInstance:updateClassInstance};};var mountChildFibersInPlace=ReactChildFiber.mountChildFibersInPlace;var reconcileChildFibers=ReactChildFiber.reconcileChildFibers;var reconcileChildFibersInPlace=ReactChildFiber.reconcileChildFibersInPlace;var cloneChildFibers=ReactChildFiber.cloneChildFibers;var beginUpdateQueue$1=ReactFiberUpdateQueue.beginUpdateQueue;var getMaskedContext$1=ReactFiberContext.getMaskedContext;var getUnmaskedContext$1=ReactFiberContext.getUnmaskedContext;var hasContextChanged$1=ReactFiberContext.hasContextChanged;var pushContextProvider$1=ReactFiberContext.pushContextProvider;var pushTopLevelContextObject$1=ReactFiberContext.pushTopLevelContextObject;var invalidateContextProvider$1=ReactFiberContext.invalidateContextProvider;var IndeterminateComponent$2=ReactTypeOfWork.IndeterminateComponent;var FunctionalComponent$1=ReactTypeOfWork.FunctionalComponent;var ClassComponent$6=ReactTypeOfWork.ClassComponent;var HostRoot$7=ReactTypeOfWork.HostRoot;var HostComponent$7=ReactTypeOfWork.HostComponent;var HostText$4=ReactTypeOfWork.HostText;var HostPortal$4=ReactTypeOfWork.HostPortal;var CoroutineComponent$1=ReactTypeOfWork.CoroutineComponent;var CoroutineHandlerPhase=ReactTypeOfWork.CoroutineHandlerPhase;var YieldComponent$2=ReactTypeOfWork.YieldComponent;var Fragment$2=ReactTypeOfWork.Fragment;var NoWork$3=ReactPriorityLevel.NoWork;var OffscreenPriority$1=ReactPriorityLevel.OffscreenPriority;var PerformedWork$1=ReactTypeOfSideEffect.PerformedWork;var Placement$2=ReactTypeOfSideEffect.Placement;var ContentReset$1=ReactTypeOfSideEffect.ContentReset;var Err$1=ReactTypeOfSideEffect.Err;var Ref$1=ReactTypeOfSideEffect.Ref;var ReactCurrentOwner$2=ReactGlobalSharedState_1.ReactCurrentOwner;{var ReactDebugCurrentFiber$4=ReactDebugCurrentFiber_1;var _require7=ReactDebugFiberPerf_1,cancelWorkTimer=_require7.cancelWorkTimer;var warning$23=require$$0;var warnedAboutStatelessRefs={};}var ReactFiberBeginWork=function(config,hostContext,hydrationContext,scheduleUpdate,getPriorityContext){var shouldSetTextContent=config.shouldSetTextContent,useSyncScheduling=config.useSyncScheduling,shouldDeprioritizeSubtree=config.shouldDeprioritizeSubtree;var pushHostContext=hostContext.pushHostContext,pushHostContainer=hostContext.pushHostContainer;var enterHydrationState=hydrationContext.enterHydrationState,resetHydrationState=hydrationContext.resetHydrationState,tryToClaimNextHydratableInstance=hydrationContext.tryToClaimNextHydratableInstance;var _ReactFiberClassCompo=ReactFiberClassComponent(scheduleUpdate,getPriorityContext,memoizeProps,memoizeState),adoptClassInstance=_ReactFiberClassCompo.adoptClassInstance,constructClassInstance=_ReactFiberClassCompo.constructClassInstance,mountClassInstance=_ReactFiberClassCompo.mountClassInstance,updateClassInstance=_ReactFiberClassCompo.updateClassInstance;function reconcileChildren(current,workInProgress,nextChildren){var priorityLevel=workInProgress.pendingWorkPriority;reconcileChildrenAtPriority(current,workInProgress,nextChildren,priorityLevel);}function reconcileChildrenAtPriority(current,workInProgress,nextChildren,priorityLevel){if(current===null){// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
workInProgress.child=mountChildFibersInPlace(workInProgress,workInProgress.child,nextChildren,priorityLevel);}else if(current.child===workInProgress.child){// If the current child is the same as the work in progress, it means that
// we haven't yet started any work on these children. Therefore, we use
// the clone algorithm to create a copy of all the current children.
// If we had any progressed work already, that is invalid at this point so
// let's throw it out.
workInProgress.child=reconcileChildFibers(workInProgress,workInProgress.child,nextChildren,priorityLevel);}else{// If, on the other hand, it is already using a clone, that means we've
// already begun some work on this tree and we can continue where we left
// off by reconciling against the existing children.
workInProgress.child=reconcileChildFibersInPlace(workInProgress,workInProgress.child,nextChildren,priorityLevel);}}function updateFragment(current,workInProgress){var nextChildren=workInProgress.pendingProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
if(nextChildren===null){nextChildren=workInProgress.memoizedProps;}}else if(nextChildren===null||workInProgress.memoizedProps===nextChildren){return bailoutOnAlreadyFinishedWork(current,workInProgress);}reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextChildren);return workInProgress.child;}function markRef(current,workInProgress){var ref=workInProgress.ref;if(ref!==null&&(!current||current.ref!==ref)){// Schedule a Ref effect
workInProgress.effectTag|=Ref$1;}}function updateFunctionalComponent(current,workInProgress){var fn=workInProgress.type;var nextProps=workInProgress.pendingProps;var memoizedProps=workInProgress.memoizedProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
if(nextProps===null){nextProps=memoizedProps;}}else{if(nextProps===null||memoizedProps===nextProps){return bailoutOnAlreadyFinishedWork(current,workInProgress);}// TODO: consider bringing fn.shouldComponentUpdate() back.
// It used to be here.
}var unmaskedContext=getUnmaskedContext$1(workInProgress);var context=getMaskedContext$1(workInProgress,unmaskedContext);var nextChildren;{ReactCurrentOwner$2.current=workInProgress;ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress,'render');nextChildren=fn(nextProps,context);ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress,null);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork$1;reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextProps);return workInProgress.child;}function updateClassComponent(current,workInProgress,priorityLevel){// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext=pushContextProvider$1(workInProgress);var shouldUpdate=void 0;if(current===null){if(!workInProgress.stateNode){// In the initial pass we might need to construct the instance.
constructClassInstance(workInProgress,workInProgress.pendingProps);mountClassInstance(workInProgress,priorityLevel);shouldUpdate=true;}else{invariant(false,'Resuming work not yet implemented.');// In a resume, we'll already have an instance we can reuse.
// shouldUpdate = resumeMountClassInstance(workInProgress, priorityLevel);
}}else{shouldUpdate=updateClassInstance(current,workInProgress,priorityLevel);}return finishClassComponent(current,workInProgress,shouldUpdate,hasContext);}function finishClassComponent(current,workInProgress,shouldUpdate,hasContext){// Refs should update even if shouldComponentUpdate returns false
markRef(current,workInProgress);if(!shouldUpdate){// Context providers should defer to sCU for rendering
if(hasContext){invalidateContextProvider$1(workInProgress,false);}return bailoutOnAlreadyFinishedWork(current,workInProgress);}var instance=workInProgress.stateNode;// Rerender
ReactCurrentOwner$2.current=workInProgress;var nextChildren=void 0;{ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress,'render');nextChildren=instance.render();ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress,null);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork$1;reconcileChildren(current,workInProgress,nextChildren);// Memoize props and state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
memoizeState(workInProgress,instance.state);memoizeProps(workInProgress,instance.props);// The context might have changed so we need to recalculate it.
if(hasContext){invalidateContextProvider$1(workInProgress,true);}return workInProgress.child;}function updateHostRoot(current,workInProgress,priorityLevel){var root=workInProgress.stateNode;if(root.pendingContext){pushTopLevelContextObject$1(workInProgress,root.pendingContext,root.pendingContext!==root.context);}else if(root.context){// Should always be set
pushTopLevelContextObject$1(workInProgress,root.context,false);}pushHostContainer(workInProgress,root.containerInfo);var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){var prevState=workInProgress.memoizedState;var state=beginUpdateQueue$1(current,workInProgress,updateQueue,null,prevState,null,priorityLevel);if(prevState===state){// If the state is the same as before, that's a bailout because we had
// no work matching this priority.
resetHydrationState();return bailoutOnAlreadyFinishedWork(current,workInProgress);}var element=state.element;if((current===null||current.child===null)&&enterHydrationState(workInProgress)){// If we don't have any current children this might be the first pass.
// We always try to hydrate. If this isn't a hydration pass there won't
// be any children to hydrate which is effectively the same thing as
// not hydrating.
// This is a bit of a hack. We track the host root as a placement to
// know that we're currently in a mounting state. That way isMounted
// works as expected. We must reset this before committing.
// TODO: Delete this when we delete isMounted and findDOMNode.
workInProgress.effectTag|=Placement$2;// Ensure that children mount into this root without tracking
// side-effects. This ensures that we don't store Placement effects on
// nodes that will be hydrated.
workInProgress.child=mountChildFibersInPlace(workInProgress,workInProgress.child,element,priorityLevel);}else{// Otherwise reset hydration state in case we aborted and resumed another
// root.
resetHydrationState();reconcileChildren(current,workInProgress,element);}memoizeState(workInProgress,state);return workInProgress.child;}resetHydrationState();// If there is no update queue, that's a bailout because the root has no props.
return bailoutOnAlreadyFinishedWork(current,workInProgress);}function updateHostComponent(current,workInProgress,renderPriority){pushHostContext(workInProgress);if(current===null){tryToClaimNextHydratableInstance(workInProgress);}var type=workInProgress.type;var memoizedProps=workInProgress.memoizedProps;var nextProps=workInProgress.pendingProps;if(nextProps===null){nextProps=memoizedProps;!(nextProps!==null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}var prevProps=current!==null?current.memoizedProps:null;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
}else if(nextProps===null||memoizedProps===nextProps){return bailoutOnAlreadyFinishedWork(current,workInProgress);}var nextChildren=nextProps.children;var isDirectTextChild=shouldSetTextContent(type,nextProps);if(isDirectTextChild){// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also have access to this prop. That
// avoids allocating another HostText fiber and traversing it.
nextChildren=null;}else if(prevProps&&shouldSetTextContent(type,prevProps)){// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
workInProgress.effectTag|=ContentReset$1;}markRef(current,workInProgress);// Check the host config to see if the children are offscreen/hidden.
if(renderPriority!==OffscreenPriority$1&&!useSyncScheduling&&shouldDeprioritizeSubtree(type,nextProps)){// Down-prioritize the children.
workInProgress.pendingWorkPriority=OffscreenPriority$1;// Bailout and come back to this fiber later at OffscreenPriority.
return null;}reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextProps);return workInProgress.child;}function updateHostText(current,workInProgress){if(current===null){tryToClaimNextHydratableInstance(workInProgress);}var nextProps=workInProgress.pendingProps;if(nextProps===null){nextProps=workInProgress.memoizedProps;}memoizeProps(workInProgress,nextProps);// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null;}function mountIndeterminateComponent(current,workInProgress,priorityLevel){!(current===null)?invariant(false,'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.'):void 0;var fn=workInProgress.type;var props=workInProgress.pendingProps;var unmaskedContext=getUnmaskedContext$1(workInProgress);var context=getMaskedContext$1(workInProgress,unmaskedContext);var value;{ReactCurrentOwner$2.current=workInProgress;value=fn(props,context);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork$1;if(typeof value==='object'&&value!==null&&typeof value.render==='function'){// Proceed under the assumption that this is a class instance
workInProgress.tag=ClassComponent$6;// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext=pushContextProvider$1(workInProgress);adoptClassInstance(workInProgress,value);mountClassInstance(workInProgress,priorityLevel);return finishClassComponent(current,workInProgress,true,hasContext);}else{// Proceed under the assumption that this is a functional component
workInProgress.tag=FunctionalComponent$1;{var Component=workInProgress.type;if(Component){warning$23(!Component.childContextTypes,'%s(...): childContextTypes cannot be defined on a functional component.',Component.displayName||Component.name||'Component');}if(workInProgress.ref!==null){var info='';var ownerName=ReactDebugCurrentFiber$4.getCurrentFiberOwnerName();if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}var warningKey=ownerName||workInProgress._debugID||'';var debugSource=workInProgress._debugSource;if(debugSource){warningKey=debugSource.fileName+':'+debugSource.lineNumber;}if(!warnedAboutStatelessRefs[warningKey]){warnedAboutStatelessRefs[warningKey]=true;warning$23(false,'Stateless function components cannot be given refs. '+'Attempts to access this ref will fail.%s%s',info,ReactDebugCurrentFiber$4.getCurrentFiberStackAddendum());}}}reconcileChildren(current,workInProgress,value);memoizeProps(workInProgress,props);return workInProgress.child;}}function updateCoroutineComponent(current,workInProgress){var nextCoroutine=workInProgress.pendingProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
if(nextCoroutine===null){nextCoroutine=current&&current.memoizedProps;!(nextCoroutine!==null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}}else if(nextCoroutine===null||workInProgress.memoizedProps===nextCoroutine){nextCoroutine=workInProgress.memoizedProps;// TODO: When bailing out, we might need to return the stateNode instead
// of the child. To check it for work.
// return bailoutOnAlreadyFinishedWork(current, workInProgress);
}var nextChildren=nextCoroutine.children;var priorityLevel=workInProgress.pendingWorkPriority;// The following is a fork of reconcileChildrenAtPriority but using
// stateNode to store the child.
if(current===null){workInProgress.stateNode=mountChildFibersInPlace(workInProgress,workInProgress.stateNode,nextChildren,priorityLevel);}else if(current.child===workInProgress.child){workInProgress.stateNode=reconcileChildFibers(workInProgress,workInProgress.stateNode,nextChildren,priorityLevel);}else{workInProgress.stateNode=reconcileChildFibersInPlace(workInProgress,workInProgress.stateNode,nextChildren,priorityLevel);}memoizeProps(workInProgress,nextCoroutine);// This doesn't take arbitrary time so we could synchronously just begin
// eagerly do the work of workInProgress.child as an optimization.
return workInProgress.stateNode;}function updatePortalComponent(current,workInProgress){pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);var priorityLevel=workInProgress.pendingWorkPriority;var nextChildren=workInProgress.pendingProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
if(nextChildren===null){nextChildren=current&&current.memoizedProps;!(nextChildren!=null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}}else if(nextChildren===null||workInProgress.memoizedProps===nextChildren){return bailoutOnAlreadyFinishedWork(current,workInProgress);}if(current===null){// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
workInProgress.child=reconcileChildFibersInPlace(workInProgress,workInProgress.child,nextChildren,priorityLevel);memoizeProps(workInProgress,nextChildren);}else{reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextChildren);}return workInProgress.child;}/*
  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
    let child = firstChild;
    do {
      // Ensure that the first and last effect of the parent corresponds
      // to the children's first and last effect.
      if (!returnFiber.firstEffect) {
        returnFiber.firstEffect = child.firstEffect;
      }
      if (child.lastEffect) {
        if (returnFiber.lastEffect) {
          returnFiber.lastEffect.nextEffect = child.firstEffect;
        }
        returnFiber.lastEffect = child.lastEffect;
      }
    } while (child = child.sibling);
  }
  */function bailoutOnAlreadyFinishedWork(current,workInProgress){{cancelWorkTimer(workInProgress);}// TODO: We should ideally be able to bail out early if the children have no
// more work to do. However, since we don't have a separation of this
// Fiber's priority and its children yet - we don't know without doing lots
// of the same work we do anyway. Once we have that separation we can just
// bail out here if the children has no more work at this priority level.
// if (workInProgress.priorityOfChildren <= priorityLevel) {
//   // If there are side-effects in these children that have not yet been
//   // committed we need to ensure that they get properly transferred up.
//   if (current && current.child !== workInProgress.child) {
//     reuseChildrenEffects(workInProgress, child);
//   }
//   return null;
// }
cloneChildFibers(current,workInProgress);return workInProgress.child;}function bailoutOnLowPriority(current,workInProgress){{cancelWorkTimer(workInProgress);}// TODO: Handle HostComponent tags here as well and call pushHostContext()?
// See PR 8590 discussion for context
switch(workInProgress.tag){case ClassComponent$6:pushContextProvider$1(workInProgress);break;case HostPortal$4:pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);break;}// TODO: What if this is currently in progress?
// How can that happen? How is this not being cloned?
return null;}// TODO: Delete memoizeProps/State and move to reconcile/bailout instead
function memoizeProps(workInProgress,nextProps){workInProgress.memoizedProps=nextProps;}function memoizeState(workInProgress,nextState){workInProgress.memoizedState=nextState;// Don't reset the updateQueue, in case there are pending updates. Resetting
// is handled by beginUpdateQueue.
}function beginWork(current,workInProgress,priorityLevel){if(workInProgress.pendingWorkPriority===NoWork$3||workInProgress.pendingWorkPriority>priorityLevel){return bailoutOnLowPriority(current,workInProgress);}{ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress,null);}switch(workInProgress.tag){case IndeterminateComponent$2:return mountIndeterminateComponent(current,workInProgress,priorityLevel);case FunctionalComponent$1:return updateFunctionalComponent(current,workInProgress);case ClassComponent$6:return updateClassComponent(current,workInProgress,priorityLevel);case HostRoot$7:return updateHostRoot(current,workInProgress,priorityLevel);case HostComponent$7:return updateHostComponent(current,workInProgress,priorityLevel);case HostText$4:return updateHostText(current,workInProgress);case CoroutineHandlerPhase:// This is a restart. Reset the tag to the initial phase.
workInProgress.tag=CoroutineComponent$1;// Intentionally fall through since this is now the same.
case CoroutineComponent$1:return updateCoroutineComponent(current,workInProgress);case YieldComponent$2:// A yield component is just a placeholder, we can just run through the
// next one immediately.
return null;case HostPortal$4:return updatePortalComponent(current,workInProgress);case Fragment$2:return updateFragment(current,workInProgress);default:invariant(false,'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');}}function beginFailedWork(current,workInProgress,priorityLevel){// Push context providers here to avoid a push/pop context mismatch.
switch(workInProgress.tag){case ClassComponent$6:pushContextProvider$1(workInProgress);break;case HostRoot$7:var root=workInProgress.stateNode;pushHostContainer(workInProgress,root.containerInfo);break;default:invariant(false,'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');}// Add an error effect so we can handle the error during the commit phase
workInProgress.effectTag|=Err$1;// This is a weird case where we do "resume" work — work that failed on
// our first attempt. Because we no longer have a notion of "progressed
// deletions," reset the child to the current child to make sure we delete
// it again. TODO: Find a better way to handle this, perhaps during a more
// general overhaul of error handling.
if(current===null){workInProgress.child=null;}else if(workInProgress.child!==current.child){workInProgress.child=current.child;}if(workInProgress.pendingWorkPriority===NoWork$3||workInProgress.pendingWorkPriority>priorityLevel){return bailoutOnLowPriority(current,workInProgress);}// If we don't bail out, we're going be recomputing our children so we need
// to drop our effect list.
workInProgress.firstEffect=null;workInProgress.lastEffect=null;// Unmount the current children as if the component rendered null
var nextChildren=null;reconcileChildrenAtPriority(current,workInProgress,nextChildren,priorityLevel);if(workInProgress.tag===ClassComponent$6){var instance=workInProgress.stateNode;workInProgress.memoizedProps=instance.props;workInProgress.memoizedState=instance.state;}return workInProgress.child;}return{beginWork:beginWork,beginFailedWork:beginFailedWork};};var reconcileChildFibers$2=ReactChildFiber.reconcileChildFibers;var popContextProvider$2=ReactFiberContext.popContextProvider;var IndeterminateComponent$3=ReactTypeOfWork.IndeterminateComponent;var FunctionalComponent$3=ReactTypeOfWork.FunctionalComponent;var ClassComponent$8=ReactTypeOfWork.ClassComponent;var HostRoot$8=ReactTypeOfWork.HostRoot;var HostComponent$8=ReactTypeOfWork.HostComponent;var HostText$6=ReactTypeOfWork.HostText;var HostPortal$6=ReactTypeOfWork.HostPortal;var CoroutineComponent$3=ReactTypeOfWork.CoroutineComponent;var CoroutineHandlerPhase$1=ReactTypeOfWork.CoroutineHandlerPhase;var YieldComponent$4=ReactTypeOfWork.YieldComponent;var Fragment$4=ReactTypeOfWork.Fragment;var Placement$4=ReactTypeOfSideEffect.Placement;var Ref$2=ReactTypeOfSideEffect.Ref;var Update$2=ReactTypeOfSideEffect.Update;var OffscreenPriority$2=ReactPriorityLevel.OffscreenPriority;{var ReactDebugCurrentFiber$5=ReactDebugCurrentFiber_1;}var ReactFiberCompleteWork=function(config,hostContext,hydrationContext){var createInstance=config.createInstance,createTextInstance=config.createTextInstance,appendInitialChild=config.appendInitialChild,finalizeInitialChildren=config.finalizeInitialChildren,prepareUpdate=config.prepareUpdate;var getRootHostContainer=hostContext.getRootHostContainer,popHostContext=hostContext.popHostContext,getHostContext=hostContext.getHostContext,popHostContainer=hostContext.popHostContainer;var prepareToHydrateHostInstance=hydrationContext.prepareToHydrateHostInstance,prepareToHydrateHostTextInstance=hydrationContext.prepareToHydrateHostTextInstance,popHydrationState=hydrationContext.popHydrationState;function markUpdate(workInProgress){// Tag the fiber with an update effect. This turns a Placement into
// an UpdateAndPlacement.
workInProgress.effectTag|=Update$2;}function markRef(workInProgress){workInProgress.effectTag|=Ref$2;}function appendAllYields(yields,workInProgress){var node=workInProgress.stateNode;if(node){node['return']=workInProgress;}while(node!==null){if(node.tag===HostComponent$8||node.tag===HostText$6||node.tag===HostPortal$6){invariant(false,'A coroutine cannot have host component children.');}else if(node.tag===YieldComponent$4){yields.push(node.type);}else if(node.child!==null){node.child['return']=node;node=node.child;continue;}while(node.sibling===null){if(node['return']===null||node['return']===workInProgress){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function moveCoroutineToHandlerPhase(current,workInProgress){var coroutine=workInProgress.memoizedProps;!coroutine?invariant(false,'Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.'):void 0;// First step of the coroutine has completed. Now we need to do the second.
// TODO: It would be nice to have a multi stage coroutine represented by a
// single component, or at least tail call optimize nested ones. Currently
// that requires additional fields that we don't want to add to the fiber.
// So this requires nested handlers.
// Note: This doesn't mutate the alternate node. I don't think it needs to
// since this stage is reset for every pass.
workInProgress.tag=CoroutineHandlerPhase$1;// Build up the yields.
// TODO: Compare this to a generator or opaque helpers like Children.
var yields=[];appendAllYields(yields,workInProgress);var fn=coroutine.handler;var props=coroutine.props;var nextChildren=fn(props,yields);var currentFirstChild=current!==null?current.child:null;// Inherit the priority of the returnFiber.
var priority=workInProgress.pendingWorkPriority;workInProgress.child=reconcileChildFibers$2(workInProgress,currentFirstChild,nextChildren,priority);return workInProgress.child;}function appendAllChildren(parent,workInProgress){// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var node=workInProgress.child;while(node!==null){if(node.tag===HostComponent$8||node.tag===HostText$6){appendInitialChild(parent,node.stateNode);}else if(node.tag===HostPortal$6){// If we have a portal child, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.child!==null){node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node['return']===null||node['return']===workInProgress){return;}node=node['return'];}node=node.sibling;}}function completeWork(current,workInProgress,renderPriority){{ReactDebugCurrentFiber$5.setCurrentFiber(workInProgress,null);}// Get the latest props.
var newProps=workInProgress.pendingProps;if(newProps===null){newProps=workInProgress.memoizedProps;}else if(workInProgress.pendingWorkPriority!==OffscreenPriority$2||renderPriority===OffscreenPriority$2){// Reset the pending props, unless this was a down-prioritization.
workInProgress.pendingProps=null;}switch(workInProgress.tag){case FunctionalComponent$3:return null;case ClassComponent$8:{// We are leaving this subtree, so pop context if any.
popContextProvider$2(workInProgress);return null;}case HostRoot$8:{// TODO: Pop the host container after #8607 lands.
var fiberRoot=workInProgress.stateNode;if(fiberRoot.pendingContext){fiberRoot.context=fiberRoot.pendingContext;fiberRoot.pendingContext=null;}if(current===null||current.child===null){// If we hydrated, pop so that we can delete any remaining children
// that weren't hydrated.
popHydrationState(workInProgress);// This resets the hacky state to fix isMounted before committing.
// TODO: Delete this when we delete isMounted and findDOMNode.
workInProgress.effectTag&=~Placement$4;}return null;}case HostComponent$8:{popHostContext(workInProgress);var rootContainerInstance=getRootHostContainer();var type=workInProgress.type;if(current!==null&&workInProgress.stateNode!=null){// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var oldProps=current.memoizedProps;// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var instance=workInProgress.stateNode;var currentHostContext=getHostContext();var updatePayload=prepareUpdate(instance,type,oldProps,newProps,rootContainerInstance,currentHostContext);// TODO: Type this specific to this type of component.
workInProgress.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
if(updatePayload){markUpdate(workInProgress);}if(current.ref!==workInProgress.ref){markRef(workInProgress);}}else{if(!newProps){!(workInProgress.stateNode!==null)?invariant(false,'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'):void 0;// This can happen when we abort work.
return null;}var _currentHostContext=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
// "stack" as the parent. Then append children as we go in beginWork
// or completeWork depending on we want to add then top->down or
// bottom->up. Top->down is faster in IE11.
var wasHydrated=popHydrationState(workInProgress);if(wasHydrated){// TOOD: Move this and createInstance step into the beginPhase
// to consolidate.
if(prepareToHydrateHostInstance(workInProgress,rootContainerInstance)){// If changes to the hydrated node needs to be applied at the
// commit-phase we mark this as such.
markUpdate(workInProgress);}}else{var _instance=createInstance(type,newProps,rootContainerInstance,_currentHostContext,workInProgress);appendAllChildren(_instance,workInProgress);// Certain renderers require commit-time effects for initial mount.
// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
if(finalizeInitialChildren(_instance,type,newProps,rootContainerInstance)){markUpdate(workInProgress);}workInProgress.stateNode=_instance;}if(workInProgress.ref!==null){// If there is a ref on a host node we need to schedule a callback
markRef(workInProgress);}}return null;}case HostText$6:{var newText=newProps;if(current&&workInProgress.stateNode!=null){var oldText=current.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
if(oldText!==newText){markUpdate(workInProgress);}}else{if(typeof newText!=='string'){!(workInProgress.stateNode!==null)?invariant(false,'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'):void 0;// This can happen when we abort work.
return null;}var _rootContainerInstance=getRootHostContainer();var _currentHostContext2=getHostContext();var _wasHydrated=popHydrationState(workInProgress);if(_wasHydrated){if(prepareToHydrateHostTextInstance(workInProgress)){markUpdate(workInProgress);}}else{workInProgress.stateNode=createTextInstance(newText,_rootContainerInstance,_currentHostContext2,workInProgress);}}return null;}case CoroutineComponent$3:return moveCoroutineToHandlerPhase(current,workInProgress);case CoroutineHandlerPhase$1:// Reset the tag to now be a first phase coroutine.
workInProgress.tag=CoroutineComponent$3;return null;case YieldComponent$4:// Does nothing.
return null;case Fragment$4:return null;case HostPortal$6:// TODO: Only mark this as an update if we have any pending callbacks.
markUpdate(workInProgress);popHostContainer(workInProgress);return null;// Error cases
case IndeterminateComponent$3:invariant(false,'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');// eslint-disable-next-line no-fallthrough
default:invariant(false,'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');}}return{completeWork:completeWork};};{var warning$26=require$$0;}var onCommitFiberRoot=null;var onCommitFiberUnmount=null;var hasLoggedError=false;function catchErrors(fn){return function(arg){try{return fn(arg);}catch(err){if(true&&!hasLoggedError){hasLoggedError=true;warning$26(false,'React DevTools encountered an error: %s',err);}}};}function injectInternals$1(internals){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){// No DevTools
return false;}var hook=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hook.supportsFiber){{warning$26(false,'The installed version of React DevTools is too old and will not work '+'with the current version of React. Please update React DevTools. '+'https://fb.me/react-devtools');}// DevTools exists, even though it doesn't support Fiber.
return true;}try{var rendererID=hook.inject(internals);// We have successfully injected, so now it is safe to set up hooks.
onCommitFiberRoot=catchErrors(function(root){return hook.onCommitFiberRoot(rendererID,root);});onCommitFiberUnmount=catchErrors(function(fiber){return hook.onCommitFiberUnmount(rendererID,fiber);});}catch(err){// Catch all errors because it is unsafe to throw during initialization.
{warning$26(false,'React DevTools encountered an error: %s.',err);}}// DevTools exists
return true;}function onCommitRoot$1(root){if(typeof onCommitFiberRoot==='function'){onCommitFiberRoot(root);}}function onCommitUnmount$1(fiber){if(typeof onCommitFiberUnmount==='function'){onCommitFiberUnmount(fiber);}}var injectInternals_1=injectInternals$1;var onCommitRoot_1=onCommitRoot$1;var onCommitUnmount_1=onCommitUnmount$1;var ReactFiberDevToolsHook={injectInternals:injectInternals_1,onCommitRoot:onCommitRoot_1,onCommitUnmount:onCommitUnmount_1};var ClassComponent$9=ReactTypeOfWork.ClassComponent;var HostRoot$9=ReactTypeOfWork.HostRoot;var HostComponent$9=ReactTypeOfWork.HostComponent;var HostText$7=ReactTypeOfWork.HostText;var HostPortal$7=ReactTypeOfWork.HostPortal;var CoroutineComponent$4=ReactTypeOfWork.CoroutineComponent;var commitCallbacks$1=ReactFiberUpdateQueue.commitCallbacks;var onCommitUnmount=ReactFiberDevToolsHook.onCommitUnmount;var invokeGuardedCallback$2=ReactErrorUtils_1.invokeGuardedCallback;var hasCaughtError$1=ReactErrorUtils_1.hasCaughtError;var clearCaughtError$1=ReactErrorUtils_1.clearCaughtError;var Placement$5=ReactTypeOfSideEffect.Placement;var Update$3=ReactTypeOfSideEffect.Update;var Callback$1=ReactTypeOfSideEffect.Callback;var ContentReset$2=ReactTypeOfSideEffect.ContentReset;{var _require5$1=ReactDebugFiberPerf_1,startPhaseTimer$2=_require5$1.startPhaseTimer,stopPhaseTimer$2=_require5$1.stopPhaseTimer;}var ReactFiberCommitWork=function(config,captureError){var commitMount=config.commitMount,commitUpdate=config.commitUpdate,resetTextContent=config.resetTextContent,commitTextUpdate=config.commitTextUpdate,appendChild=config.appendChild,appendChildToContainer=config.appendChildToContainer,insertBefore=config.insertBefore,insertInContainerBefore=config.insertInContainerBefore,removeChild=config.removeChild,removeChildFromContainer=config.removeChildFromContainer,getPublicInstance=config.getPublicInstance;{var callComponentWillUnmountWithTimerInDev=function(current,instance){startPhaseTimer$2(current,'componentWillUnmount');instance.componentWillUnmount();stopPhaseTimer$2();};}// Capture errors so they don't interrupt unmounting.
function safelyCallComponentWillUnmount(current,instance){{invokeGuardedCallback$2(null,callComponentWillUnmountWithTimerInDev,null,current,instance);if(hasCaughtError$1()){var unmountError=clearCaughtError$1();captureError(current,unmountError);}}}function safelyDetachRef(current){var ref=current.ref;if(ref!==null){{invokeGuardedCallback$2(null,ref,null,null);if(hasCaughtError$1()){var refError=clearCaughtError$1();captureError(current,refError);}}}}function getHostParentFiber(fiber){var parent=fiber['return'];while(parent!==null){if(isHostParent(parent)){return parent;}parent=parent['return'];}invariant(false,'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');}function isHostParent(fiber){return fiber.tag===HostComponent$9||fiber.tag===HostRoot$9||fiber.tag===HostPortal$7;}function getHostSibling(fiber){// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
var node=fiber;siblings:while(true){// If we didn't find anything, let's try the next sibling.
while(node.sibling===null){if(node['return']===null||isHostParent(node['return'])){// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;while(node.tag!==HostComponent$9&&node.tag!==HostText$7){// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(node.effectTag&Placement$5){// If we don't have a child, try the siblings instead.
continue siblings;}// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(node.child===null||node.tag===HostPortal$7){continue siblings;}else{node.child['return']=node;node=node.child;}}// Check if this host node is stable or about to be placed.
if(!(node.effectTag&Placement$5)){// Found it!
return node.stateNode;}}}function commitPlacement(finishedWork){// Recursively insert all host nodes into the parent.
var parentFiber=getHostParentFiber(finishedWork);var parent=void 0;var isContainer=void 0;switch(parentFiber.tag){case HostComponent$9:parent=parentFiber.stateNode;isContainer=false;break;case HostRoot$9:parent=parentFiber.stateNode.containerInfo;isContainer=true;break;case HostPortal$7:parent=parentFiber.stateNode.containerInfo;isContainer=true;break;default:invariant(false,'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');}if(parentFiber.effectTag&ContentReset$2){// Reset the text content of the parent before doing any insertions
resetTextContent(parent);// Clear ContentReset from the effect tag
parentFiber.effectTag&=~ContentReset$2;}var before=getHostSibling(finishedWork);// We only have the top Fiber that was inserted but we need recurse down its
// children to find all the terminal nodes.
var node=finishedWork;while(true){if(node.tag===HostComponent$9||node.tag===HostText$7){if(before){if(isContainer){insertInContainerBefore(parent,node.stateNode,before);}else{insertBefore(parent,node.stateNode,before);}}else{if(isContainer){appendChildToContainer(parent,node.stateNode);}else{appendChild(parent,node.stateNode);}}}else if(node.tag===HostPortal$7){// If the insertion itself is a portal, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.child!==null){node.child['return']=node;node=node.child;continue;}if(node===finishedWork){return;}while(node.sibling===null){if(node['return']===null||node['return']===finishedWork){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function commitNestedUnmounts(root){// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
var node=root;while(true){commitUnmount(node);// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(node.child!==null&&node.tag!==HostPortal$7){node.child['return']=node;node=node.child;continue;}if(node===root){return;}while(node.sibling===null){if(node['return']===null||node['return']===root){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function unmountHostComponents(current){// We only have the top Fiber that was inserted but we need recurse down its
var node=current;// Each iteration, currentParent is populated with node's host parent if not
// currentParentIsValid.
var currentParentIsValid=false;var currentParent=void 0;var currentParentIsContainer=void 0;while(true){if(!currentParentIsValid){var parent=node['return'];findParent:while(true){!(parent!==null)?invariant(false,'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'):void 0;switch(parent.tag){case HostComponent$9:currentParent=parent.stateNode;currentParentIsContainer=false;break findParent;case HostRoot$9:currentParent=parent.stateNode.containerInfo;currentParentIsContainer=true;break findParent;case HostPortal$7:currentParent=parent.stateNode.containerInfo;currentParentIsContainer=true;break findParent;}parent=parent['return'];}currentParentIsValid=true;}if(node.tag===HostComponent$9||node.tag===HostText$7){commitNestedUnmounts(node);// After all the children have unmounted, it is now safe to remove the
// node from the tree.
if(currentParentIsContainer){removeChildFromContainer(currentParent,node.stateNode);}else{removeChild(currentParent,node.stateNode);}// Don't visit children because we already visited them.
}else if(node.tag===HostPortal$7){// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
currentParent=node.stateNode.containerInfo;// Visit children because portals might contain host components.
if(node.child!==null){node.child['return']=node;node=node.child;continue;}}else{commitUnmount(node);// Visit children because we may find more host components below.
if(node.child!==null){node.child['return']=node;node=node.child;continue;}}if(node===current){return;}while(node.sibling===null){if(node['return']===null||node['return']===current){return;}node=node['return'];if(node.tag===HostPortal$7){// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
currentParentIsValid=false;}}node.sibling['return']=node['return'];node=node.sibling;}}function commitDeletion(current){// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
unmountHostComponents(current);// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
current['return']=null;current.child=null;if(current.alternate){current.alternate.child=null;current.alternate['return']=null;}}// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(current){if(typeof onCommitUnmount==='function'){onCommitUnmount(current);}switch(current.tag){case ClassComponent$9:{safelyDetachRef(current);var instance=current.stateNode;if(typeof instance.componentWillUnmount==='function'){safelyCallComponentWillUnmount(current,instance);}return;}case HostComponent$9:{safelyDetachRef(current);return;}case CoroutineComponent$4:{commitNestedUnmounts(current.stateNode);return;}case HostPortal$7:{// TODO: this is recursive.
// We are also not using this parent because
// the portal will get pushed immediately.
unmountHostComponents(current);return;}}}function commitWork(current,finishedWork){switch(finishedWork.tag){case ClassComponent$9:{return;}case HostComponent$9:{var instance=finishedWork.stateNode;if(instance!=null){// Commit the work prepared earlier.
var newProps=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
var oldProps=current!==null?current.memoizedProps:newProps;var type=finishedWork.type;// TODO: Type the updateQueue to be specific to host components.
var updatePayload=finishedWork.updateQueue;finishedWork.updateQueue=null;if(updatePayload!==null){commitUpdate(instance,updatePayload,type,oldProps,newProps,finishedWork);}}return;}case HostText$7:{!(finishedWork.stateNode!==null)?invariant(false,'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'):void 0;var textInstance=finishedWork.stateNode;var newText=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
var oldText=current!==null?current.memoizedProps:newText;commitTextUpdate(textInstance,oldText,newText);return;}case HostRoot$9:{return;}case HostPortal$7:{return;}default:{invariant(false,'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');}}}function commitLifeCycles(current,finishedWork){switch(finishedWork.tag){case ClassComponent$9:{var instance=finishedWork.stateNode;if(finishedWork.effectTag&Update$3){if(current===null){{startPhaseTimer$2(finishedWork,'componentDidMount');}instance.componentDidMount();{stopPhaseTimer$2();}}else{var prevProps=current.memoizedProps;var prevState=current.memoizedState;{startPhaseTimer$2(finishedWork,'componentDidUpdate');}instance.componentDidUpdate(prevProps,prevState);{stopPhaseTimer$2();}}}if(finishedWork.effectTag&Callback$1&&finishedWork.updateQueue!==null){commitCallbacks$1(finishedWork,finishedWork.updateQueue,instance);}return;}case HostRoot$9:{var updateQueue=finishedWork.updateQueue;if(updateQueue!==null){var _instance=finishedWork.child&&finishedWork.child.stateNode;commitCallbacks$1(finishedWork,updateQueue,_instance);}return;}case HostComponent$9:{var _instance2=finishedWork.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(current===null&&finishedWork.effectTag&Update$3){var type=finishedWork.type;var props=finishedWork.memoizedProps;commitMount(_instance2,type,props,finishedWork);}return;}case HostText$7:{// We have no life-cycles associated with text.
return;}case HostPortal$7:{// We have no life-cycles associated with portals.
return;}default:{invariant(false,'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');}}}function commitAttachRef(finishedWork){var ref=finishedWork.ref;if(ref!==null){var instance=finishedWork.stateNode;switch(finishedWork.tag){case HostComponent$9:ref(getPublicInstance(instance));break;default:ref(instance);}}}function commitDetachRef(current){var currentRef=current.ref;if(currentRef!==null){currentRef(null);}}return{commitPlacement:commitPlacement,commitDeletion:commitDeletion,commitWork:commitWork,commitLifeCycles:commitLifeCycles,commitAttachRef:commitAttachRef,commitDetachRef:commitDetachRef};};var createCursor$2=ReactFiberStack.createCursor;var pop$2=ReactFiberStack.pop;var push$2=ReactFiberStack.push;var NO_CONTEXT={};var ReactFiberHostContext=function(config){var getChildHostContext=config.getChildHostContext,getRootHostContext=config.getRootHostContext;var contextStackCursor=createCursor$2(NO_CONTEXT);var contextFiberStackCursor=createCursor$2(NO_CONTEXT);var rootInstanceStackCursor=createCursor$2(NO_CONTEXT);function requiredContext(c){!(c!==NO_CONTEXT)?invariant(false,'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'):void 0;return c;}function getRootHostContainer(){var rootInstance=requiredContext(rootInstanceStackCursor.current);return rootInstance;}function pushHostContainer(fiber,nextRootInstance){// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
push$2(rootInstanceStackCursor,nextRootInstance,fiber);var nextRootContext=getRootHostContext(nextRootInstance);// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push$2(contextFiberStackCursor,fiber,fiber);push$2(contextStackCursor,nextRootContext,fiber);}function popHostContainer(fiber){pop$2(contextStackCursor,fiber);pop$2(contextFiberStackCursor,fiber);pop$2(rootInstanceStackCursor,fiber);}function getHostContext(){var context=requiredContext(contextStackCursor.current);return context;}function pushHostContext(fiber){var rootInstance=requiredContext(rootInstanceStackCursor.current);var context=requiredContext(contextStackCursor.current);var nextContext=getChildHostContext(context,fiber.type,rootInstance);// Don't push this Fiber's context unless it's unique.
if(context===nextContext){return;}// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push$2(contextFiberStackCursor,fiber,fiber);push$2(contextStackCursor,nextContext,fiber);}function popHostContext(fiber){// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
if(contextFiberStackCursor.current!==fiber){return;}pop$2(contextStackCursor,fiber);pop$2(contextFiberStackCursor,fiber);}function resetHostContainer(){contextStackCursor.current=NO_CONTEXT;rootInstanceStackCursor.current=NO_CONTEXT;}return{getHostContext:getHostContext,getRootHostContainer:getRootHostContainer,popHostContainer:popHostContainer,popHostContext:popHostContext,pushHostContainer:pushHostContainer,pushHostContext:pushHostContext,resetHostContainer:resetHostContainer};};var HostComponent$10=ReactTypeOfWork.HostComponent;var HostText$8=ReactTypeOfWork.HostText;var HostRoot$10=ReactTypeOfWork.HostRoot;var Deletion$2=ReactTypeOfSideEffect.Deletion;var Placement$6=ReactTypeOfSideEffect.Placement;var createFiberFromHostInstanceForDeletion$1=ReactFiber.createFiberFromHostInstanceForDeletion;var ReactFiberHydrationContext=function(config){var shouldSetTextContent=config.shouldSetTextContent,canHydrateInstance=config.canHydrateInstance,canHydrateTextInstance=config.canHydrateTextInstance,getNextHydratableSibling=config.getNextHydratableSibling,getFirstHydratableChild=config.getFirstHydratableChild,hydrateInstance=config.hydrateInstance,hydrateTextInstance=config.hydrateTextInstance,didNotHydrateInstance=config.didNotHydrateInstance,didNotFindHydratableInstance=config.didNotFindHydratableInstance,didNotFindHydratableTextInstance=config.didNotFindHydratableTextInstance;// If this doesn't have hydration mode.
if(!(canHydrateInstance&&canHydrateTextInstance&&getNextHydratableSibling&&getFirstHydratableChild&&hydrateInstance&&hydrateTextInstance&&didNotHydrateInstance&&didNotFindHydratableInstance&&didNotFindHydratableTextInstance)){return{enterHydrationState:function(){return false;},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){invariant(false,'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');},prepareToHydrateHostTextInstance:function(){invariant(false,'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');},popHydrationState:function(fiber){return false;}};}// The deepest Fiber on the stack involved in a hydration context.
// This may have been an insertion or a hydration.
var hydrationParentFiber=null;var nextHydratableInstance=null;var isHydrating=false;function enterHydrationState(fiber){var parentInstance=fiber.stateNode.containerInfo;nextHydratableInstance=getFirstHydratableChild(parentInstance);hydrationParentFiber=fiber;isHydrating=true;return true;}function deleteHydratableInstance(returnFiber,instance){{switch(returnFiber.tag){case HostRoot$10:didNotHydrateInstance(returnFiber.stateNode.containerInfo,instance);break;case HostComponent$10:didNotHydrateInstance(returnFiber.stateNode,instance);break;}}var childToDelete=createFiberFromHostInstanceForDeletion$1();childToDelete.stateNode=instance;childToDelete['return']=returnFiber;childToDelete.effectTag=Deletion$2;// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else{returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}}function insertNonHydratedInstance(returnFiber,fiber){fiber.effectTag|=Placement$6;{var parentInstance;switch(returnFiber.tag){// TODO: Currently we don't warn for insertions into the root because
// we always insert into the root in the non-hydrating case. We just
// delete the existing content. Reenable this once we have a better
// strategy for determining if we're hydrating or not.
// case HostRoot:
//   parentInstance = returnFiber.stateNode.containerInfo;
//   break;
case HostComponent$10:parentInstance=returnFiber.stateNode;break;default:return;}switch(fiber.tag){case HostComponent$10:var type=fiber.type;var props=fiber.pendingProps;didNotFindHydratableInstance(parentInstance,type,props);break;case HostText$8:var text=fiber.pendingProps;didNotFindHydratableTextInstance(parentInstance,text);break;}}}function canHydrate(fiber,nextInstance){switch(fiber.tag){case HostComponent$10:{var type=fiber.type;var props=fiber.pendingProps;return canHydrateInstance(nextInstance,type,props);}case HostText$8:{var text=fiber.pendingProps;return canHydrateTextInstance(nextInstance,text);}default:return false;}}function tryToClaimNextHydratableInstance(fiber){if(!isHydrating){return;}var nextInstance=nextHydratableInstance;if(!nextInstance){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}if(!canHydrate(fiber,nextInstance)){// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
nextInstance=getNextHydratableSibling(nextInstance);if(!nextInstance||!canHydrate(fiber,nextInstance)){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
deleteHydratableInstance(hydrationParentFiber,nextHydratableInstance);}fiber.stateNode=nextInstance;hydrationParentFiber=fiber;nextHydratableInstance=getFirstHydratableChild(nextInstance);}function prepareToHydrateHostInstance(fiber,rootContainerInstance){var instance=fiber.stateNode;var updatePayload=hydrateInstance(instance,fiber.type,fiber.memoizedProps,rootContainerInstance,fiber);// TODO: Type this specific to this type of component.
fiber.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
if(updatePayload!==null){return true;}return false;}function prepareToHydrateHostTextInstance(fiber){var textInstance=fiber.stateNode;var shouldUpdate=hydrateTextInstance(textInstance,fiber.memoizedProps,fiber);return shouldUpdate;}function popToNextHostParent(fiber){var parent=fiber['return'];while(parent!==null&&parent.tag!==HostComponent$10&&parent.tag!==HostRoot$10){parent=parent['return'];}hydrationParentFiber=parent;}function popHydrationState(fiber){if(fiber!==hydrationParentFiber){// We're deeper than the current hydration context, inside an inserted
// tree.
return false;}if(!isHydrating){// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
popToNextHostParent(fiber);isHydrating=true;return false;}var type=fiber.type;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(fiber.tag!==HostComponent$10||type!=='head'&&type!=='body'&&!shouldSetTextContent(type,fiber.memoizedProps)){var nextInstance=nextHydratableInstance;while(nextInstance){deleteHydratableInstance(fiber,nextInstance);nextInstance=getNextHydratableSibling(nextInstance);}}popToNextHostParent(fiber);nextHydratableInstance=hydrationParentFiber?getNextHydratableSibling(fiber.stateNode):null;return true;}function resetHydrationState(){hydrationParentFiber=null;nextHydratableInstance=null;isHydrating=false;}return{enterHydrationState:enterHydrationState,resetHydrationState:resetHydrationState,tryToClaimNextHydratableInstance:tryToClaimNextHydratableInstance,prepareToHydrateHostInstance:prepareToHydrateHostInstance,prepareToHydrateHostTextInstance:prepareToHydrateHostTextInstance,popHydrationState:popHydrationState};};/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFiberInstrumentation
 * 
 */// This lets us hook into Fiber to debug what it's doing.
// See https://github.com/facebook/react/pull/8033.
// This is not part of the public API, not even for React DevTools.
// You may only inject a debugTool if you work on React Fiber itself.
var ReactFiberInstrumentation$2={debugTool:null};var ReactFiberInstrumentation_1=ReactFiberInstrumentation$2;var popContextProvider$1=ReactFiberContext.popContextProvider;var reset$1=ReactFiberStack.reset;var getStackAddendumByWorkInProgressFiber$2=ReactFiberComponentTreeHook.getStackAddendumByWorkInProgressFiber;var logCapturedError=ReactFiberErrorLogger.logCapturedError;var invokeGuardedCallback$1=ReactErrorUtils_1.invokeGuardedCallback;var hasCaughtError=ReactErrorUtils_1.hasCaughtError;var clearCaughtError=ReactErrorUtils_1.clearCaughtError;var ReactCurrentOwner$1=ReactGlobalSharedState_1.ReactCurrentOwner;var createWorkInProgress$1=ReactFiber.createWorkInProgress;var largerPriority$1=ReactFiber.largerPriority;var onCommitRoot=ReactFiberDevToolsHook.onCommitRoot;var NoWork$2=ReactPriorityLevel.NoWork;var SynchronousPriority$1=ReactPriorityLevel.SynchronousPriority;var TaskPriority$1=ReactPriorityLevel.TaskPriority;var HighPriority=ReactPriorityLevel.HighPriority;var LowPriority=ReactPriorityLevel.LowPriority;var OffscreenPriority=ReactPriorityLevel.OffscreenPriority;var AsyncUpdates=ReactTypeOfInternalContext.AsyncUpdates;var PerformedWork=ReactTypeOfSideEffect.PerformedWork;var Placement$1=ReactTypeOfSideEffect.Placement;var Update=ReactTypeOfSideEffect.Update;var PlacementAndUpdate=ReactTypeOfSideEffect.PlacementAndUpdate;var Deletion=ReactTypeOfSideEffect.Deletion;var ContentReset=ReactTypeOfSideEffect.ContentReset;var Callback=ReactTypeOfSideEffect.Callback;var Err=ReactTypeOfSideEffect.Err;var Ref=ReactTypeOfSideEffect.Ref;var HostRoot$6=ReactTypeOfWork.HostRoot;var HostComponent$6=ReactTypeOfWork.HostComponent;var HostPortal$3=ReactTypeOfWork.HostPortal;var ClassComponent$5=ReactTypeOfWork.ClassComponent;var getUpdatePriority$1=ReactFiberUpdateQueue.getUpdatePriority;var _require14=ReactFiberContext;var resetContext$1=_require14.resetContext;{var warning$22=require$$0;var ReactFiberInstrumentation$1=ReactFiberInstrumentation_1;var ReactDebugCurrentFiber$3=ReactDebugCurrentFiber_1;var _require15=ReactDebugFiberPerf_1,recordEffect=_require15.recordEffect,recordScheduleUpdate=_require15.recordScheduleUpdate,startWorkTimer=_require15.startWorkTimer,stopWorkTimer=_require15.stopWorkTimer,stopFailedWorkTimer=_require15.stopFailedWorkTimer,startWorkLoopTimer=_require15.startWorkLoopTimer,stopWorkLoopTimer=_require15.stopWorkLoopTimer,startCommitTimer=_require15.startCommitTimer,stopCommitTimer=_require15.stopCommitTimer,startCommitHostEffectsTimer=_require15.startCommitHostEffectsTimer,stopCommitHostEffectsTimer=_require15.stopCommitHostEffectsTimer,startCommitLifeCyclesTimer=_require15.startCommitLifeCyclesTimer,stopCommitLifeCyclesTimer=_require15.stopCommitLifeCyclesTimer;var warnAboutUpdateOnUnmounted=function(instance){var ctor=instance.constructor;warning$22(false,'Can only update a mounted or mounting component. This usually means '+'you called setState, replaceState, or forceUpdate on an unmounted '+'component. This is a no-op.\n\nPlease check the code for the '+'%s component.',ctor&&(ctor.displayName||ctor.name)||'ReactClass');};var warnAboutInvalidUpdates=function(instance){switch(ReactDebugCurrentFiber$3.phase){case'getChildContext':warning$22(false,'setState(...): Cannot call setState() inside getChildContext()');break;case'render':warning$22(false,'Cannot update during an existing state transition (such as within '+"`render` or another component's constructor). Render methods should "+'be a pure function of props and state; constructor side-effects are '+'an anti-pattern, but can be moved to `componentWillMount`.');break;}};}var timeHeuristicForUnitOfWork=1;var ReactFiberScheduler=function(config){var hostContext=ReactFiberHostContext(config);var hydrationContext=ReactFiberHydrationContext(config);var popHostContainer=hostContext.popHostContainer,popHostContext=hostContext.popHostContext,resetHostContainer=hostContext.resetHostContainer;var _ReactFiberBeginWork=ReactFiberBeginWork(config,hostContext,hydrationContext,scheduleUpdate,getPriorityContext),beginWork=_ReactFiberBeginWork.beginWork,beginFailedWork=_ReactFiberBeginWork.beginFailedWork;var _ReactFiberCompleteWo=ReactFiberCompleteWork(config,hostContext,hydrationContext),completeWork=_ReactFiberCompleteWo.completeWork;var _ReactFiberCommitWork=ReactFiberCommitWork(config,captureError),commitPlacement=_ReactFiberCommitWork.commitPlacement,commitDeletion=_ReactFiberCommitWork.commitDeletion,commitWork=_ReactFiberCommitWork.commitWork,commitLifeCycles=_ReactFiberCommitWork.commitLifeCycles,commitAttachRef=_ReactFiberCommitWork.commitAttachRef,commitDetachRef=_ReactFiberCommitWork.commitDetachRef;var scheduleDeferredCallback=config.scheduleDeferredCallback,useSyncScheduling=config.useSyncScheduling,prepareForCommit=config.prepareForCommit,resetAfterCommit=config.resetAfterCommit;// The priority level to use when scheduling an update. We use NoWork to
// represent the default priority.
// TODO: Should we change this to an array instead of using the call stack?
// Might be less confusing.
var priorityContext=NoWork$2;// Keeps track of whether we're currently in a work loop.
var isPerformingWork=false;// Keeps track of whether the current deadline has expired.
var deadlineHasExpired=false;// Keeps track of whether we should should batch sync updates.
var isBatchingUpdates=false;// This is needed for the weird case where the initial mount is synchronous
// even inside batchedUpdates :(
var isUnbatchingUpdates=false;// The next work in progress fiber that we're currently working on.
var nextUnitOfWork=null;var nextPriorityLevel=NoWork$2;// The next fiber with an effect that we're currently committing.
var nextEffect=null;var pendingCommit=null;// Linked list of roots with scheduled work on them.
var nextScheduledRoot=null;var lastScheduledRoot=null;// Keep track of which host environment callbacks are scheduled.
var isCallbackScheduled=false;// Keep track of which fibers have captured an error that need to be handled.
// Work is removed from this collection after componentDidCatch is called.
var capturedErrors=null;// Keep track of which fibers have failed during the current batch of work.
// This is a different set than capturedErrors, because it is not reset until
// the end of the batch. This is needed to propagate errors correctly if a
// subtree fails more than once.
var failedBoundaries=null;// Error boundaries that captured an error during the current commit.
var commitPhaseBoundaries=null;var firstUncaughtError=null;var didFatal=false;var isCommitting=false;var isUnmounting=false;// Use these to prevent an infinite loop of nested updates
var NESTED_UPDATE_LIMIT=1000;var nestedUpdateCount=0;function resetContextStack(){// Reset the stack
reset$1();// Reset the cursors
resetContext$1();resetHostContainer();}// resetNextUnitOfWork mutates the current priority context. It is reset after
// after the workLoop exits, so never call resetNextUnitOfWork from outside
// the work loop.
function resetNextUnitOfWork(){// Clear out roots with no more work on them, or if they have uncaught errors
while(nextScheduledRoot!==null&&nextScheduledRoot.current.pendingWorkPriority===NoWork$2){// Unschedule this root.
nextScheduledRoot.isScheduled=false;// Read the next pointer now.
// We need to clear it in case this root gets scheduled again later.
var next=nextScheduledRoot.nextScheduledRoot;nextScheduledRoot.nextScheduledRoot=null;// Exit if we cleared all the roots and there's no work to do.
if(nextScheduledRoot===lastScheduledRoot){nextScheduledRoot=null;lastScheduledRoot=null;nextPriorityLevel=NoWork$2;return null;}// Continue with the next root.
// If there's no work on it, it will get unscheduled too.
nextScheduledRoot=next;}var root=nextScheduledRoot;var highestPriorityRoot=null;var highestPriorityLevel=NoWork$2;while(root!==null){if(root.current.pendingWorkPriority!==NoWork$2&&(highestPriorityLevel===NoWork$2||highestPriorityLevel>root.current.pendingWorkPriority)){highestPriorityLevel=root.current.pendingWorkPriority;highestPriorityRoot=root;}// We didn't find anything to do in this root, so let's try the next one.
root=root.nextScheduledRoot;}if(highestPriorityRoot!==null){nextPriorityLevel=highestPriorityLevel;// Before we start any new work, let's make sure that we have a fresh
// stack to work from.
// TODO: This call is buried a bit too deep. It would be nice to have
// a single point which happens right before any new work and
// unfortunately this is it.
resetContextStack();nextUnitOfWork=createWorkInProgress$1(highestPriorityRoot.current,highestPriorityLevel);return;}nextPriorityLevel=NoWork$2;nextUnitOfWork=null;return;}function commitAllHostEffects(){while(nextEffect!==null){{ReactDebugCurrentFiber$3.setCurrentFiber(nextEffect,null);recordEffect();}var effectTag=nextEffect.effectTag;if(effectTag&ContentReset){config.resetTextContent(nextEffect.stateNode);}if(effectTag&Ref){var current=nextEffect.alternate;if(current!==null){commitDetachRef(current);}}// The following switch statement is only concerned about placement,
// updates, and deletions. To avoid needing to add a case for every
// possible bitmap value, we remove the secondary effects from the
// effect tag and switch on that value.
var primaryEffectTag=effectTag&~(Callback|Err|ContentReset|Ref|PerformedWork);switch(primaryEffectTag){case Placement$1:{commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is inserted, before
// any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted
// does and isMounted is deprecated anyway so we should be able
// to kill this.
nextEffect.effectTag&=~Placement$1;break;}case PlacementAndUpdate:{// Placement
commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is inserted, before
// any life-cycles like componentDidMount gets called.
nextEffect.effectTag&=~Placement$1;// Update
var _current=nextEffect.alternate;commitWork(_current,nextEffect);break;}case Update:{var _current2=nextEffect.alternate;commitWork(_current2,nextEffect);break;}case Deletion:{isUnmounting=true;commitDeletion(nextEffect);isUnmounting=false;break;}}nextEffect=nextEffect.nextEffect;}{ReactDebugCurrentFiber$3.resetCurrentFiber();}}function commitAllLifeCycles(){while(nextEffect!==null){var effectTag=nextEffect.effectTag;// Use Task priority for lifecycle updates
if(effectTag&(Update|Callback)){{recordEffect();}var current=nextEffect.alternate;commitLifeCycles(current,nextEffect);}if(effectTag&Ref){{recordEffect();}commitAttachRef(nextEffect);}if(effectTag&Err){{recordEffect();}commitErrorHandling(nextEffect);}var next=nextEffect.nextEffect;// Ensure that we clean these up so that we don't accidentally keep them.
// I'm not actually sure this matters because we can't reset firstEffect
// and lastEffect since they're on every node, not just the effectful
// ones. So we have to clean everything as we reuse nodes anyway.
nextEffect.nextEffect=null;// Ensure that we reset the effectTag here so that we can rely on effect
// tags to reason about the current life-cycle.
nextEffect=next;}}function commitAllWork(finishedWork){// We keep track of this so that captureError can collect any boundaries
// that capture an error during the commit phase. The reason these aren't
// local to this function is because errors that occur during cWU are
// captured elsewhere, to prevent the unmount from being interrupted.
isCommitting=true;{startCommitTimer();}pendingCommit=null;var root=finishedWork.stateNode;!(root.current!==finishedWork)?invariant(false,'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.'):void 0;if(nextPriorityLevel===SynchronousPriority$1||nextPriorityLevel===TaskPriority$1){// Keep track of the number of iterations to prevent an infinite
// update loop.
nestedUpdateCount++;}// Reset this to null before calling lifecycles
ReactCurrentOwner$1.current=null;var firstEffect=void 0;if(finishedWork.effectTag>PerformedWork){// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if
// it had one; that is, all the effects in the tree including the root.
if(finishedWork.lastEffect!==null){finishedWork.lastEffect.nextEffect=finishedWork;firstEffect=finishedWork.firstEffect;}else{firstEffect=finishedWork;}}else{// There is no effect on the root.
firstEffect=finishedWork.firstEffect;}prepareForCommit();// Commit all the side-effects within a tree. We'll do this in two passes.
// The first pass performs all the host insertions, updates, deletions and
// ref unmounts.
nextEffect=firstEffect;{startCommitHostEffectsTimer();}while(nextEffect!==null){var didError=false;var _error=void 0;{invokeGuardedCallback$1(null,commitAllHostEffects,null);if(hasCaughtError()){didError=true;_error=clearCaughtError();}}if(didError){!(nextEffect!==null)?invariant(false,'Should have next effect. This error is likely caused by a bug in React. Please file an issue.'):void 0;captureError(nextEffect,_error);// Clean-up
if(nextEffect!==null){nextEffect=nextEffect.nextEffect;}}}{stopCommitHostEffectsTimer();}resetAfterCommit();// The work-in-progress tree is now the current tree. This must come after
// the first pass of the commit phase, so that the previous tree is still
// current during componentWillUnmount, but before the second pass, so that
// the finished work is current during componentDidMount/Update.
root.current=finishedWork;// In the second pass we'll perform all life-cycles and ref callbacks.
// Life-cycles happen as a separate pass so that all placements, updates,
// and deletions in the entire tree have already been invoked.
// This pass also triggers any renderer-specific initial effects.
nextEffect=firstEffect;{startCommitLifeCyclesTimer();}while(nextEffect!==null){var _didError=false;var _error2=void 0;{invokeGuardedCallback$1(null,commitAllLifeCycles,null);if(hasCaughtError()){_didError=true;_error2=clearCaughtError();}}if(_didError){!(nextEffect!==null)?invariant(false,'Should have next effect. This error is likely caused by a bug in React. Please file an issue.'):void 0;captureError(nextEffect,_error2);if(nextEffect!==null){nextEffect=nextEffect.nextEffect;}}}isCommitting=false;{stopCommitLifeCyclesTimer();stopCommitTimer();}if(typeof onCommitRoot==='function'){onCommitRoot(finishedWork.stateNode);}if(true&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onCommitWork(finishedWork);}// If we caught any errors during this commit, schedule their boundaries
// to update.
if(commitPhaseBoundaries){commitPhaseBoundaries.forEach(scheduleErrorRecovery);commitPhaseBoundaries=null;}// This tree is done. Reset the unit of work pointer to the next highest
// priority root. If there's no more work left, the pointer is set to null.
resetNextUnitOfWork();}function resetWorkPriority(workInProgress,renderPriority){if(workInProgress.pendingWorkPriority!==NoWork$2&&workInProgress.pendingWorkPriority>renderPriority){// This was a down-prioritization. Don't bubble priority from children.
return;}// Check for pending update priority.
var newPriority=getUpdatePriority$1(workInProgress);// TODO: Coroutines need to visit stateNode
var child=workInProgress.child;while(child!==null){// Ensure that remaining work priority bubbles up.
newPriority=largerPriority$1(newPriority,child.pendingWorkPriority);child=child.sibling;}workInProgress.pendingWorkPriority=newPriority;}function completeUnitOfWork(workInProgress){while(true){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var current=workInProgress.alternate;var next=completeWork(current,workInProgress,nextPriorityLevel);var returnFiber=workInProgress['return'];var siblingFiber=workInProgress.sibling;resetWorkPriority(workInProgress,nextPriorityLevel);if(next!==null){{stopWorkTimer(workInProgress);}if(true&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onCompleteWork(workInProgress);}// If completing this work spawned new work, do that next. We'll come
// back here again.
return next;}if(returnFiber!==null){// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
if(returnFiber.firstEffect===null){returnFiber.firstEffect=workInProgress.firstEffect;}if(workInProgress.lastEffect!==null){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress.firstEffect;}returnFiber.lastEffect=workInProgress.lastEffect;}// If this fiber had side-effects, we append it AFTER the children's
// side-effects. We can perform certain side-effects earlier if
// needed, by doing multiple passes over the effect list. We don't want
// to schedule our own side-effect on our own list because if end up
// reusing children we'll schedule this effect onto itself since we're
// at the end.
var effectTag=workInProgress.effectTag;// Skip both NoWork and PerformedWork tags when creating the effect list.
// PerformedWork effect is read by React DevTools but shouldn't be committed.
if(effectTag>PerformedWork){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress;}else{returnFiber.firstEffect=workInProgress;}returnFiber.lastEffect=workInProgress;}}{stopWorkTimer(workInProgress);}if(true&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onCompleteWork(workInProgress);}if(siblingFiber!==null){// If there is more work to do in this returnFiber, do that next.
return siblingFiber;}else if(returnFiber!==null){// If there's no more work in this returnFiber. Complete the returnFiber.
workInProgress=returnFiber;continue;}else{// We've reached the root. Mark the root as pending commit. Depending
// on how much time we have left, we'll either commit it now or in
// the next frame.
pendingCommit=workInProgress;return null;}}// Without this explicit null return Flow complains of invalid return type
// TODO Remove the above while(true) loop
// eslint-disable-next-line no-unreachable
return null;}function performUnitOfWork(workInProgress){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var current=workInProgress.alternate;// See if beginning this work spawns more work.
{startWorkTimer(workInProgress);}var next=beginWork(current,workInProgress,nextPriorityLevel);if(true&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onBeginWork(workInProgress);}if(next===null){// If this doesn't spawn new work, complete the current work.
next=completeUnitOfWork(workInProgress);}ReactCurrentOwner$1.current=null;{ReactDebugCurrentFiber$3.resetCurrentFiber();}return next;}function performFailedUnitOfWork(workInProgress){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var current=workInProgress.alternate;// See if beginning this work spawns more work.
{startWorkTimer(workInProgress);}var next=beginFailedWork(current,workInProgress,nextPriorityLevel);if(true&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onBeginWork(workInProgress);}if(next===null){// If this doesn't spawn new work, complete the current work.
next=completeUnitOfWork(workInProgress);}ReactCurrentOwner$1.current=null;{ReactDebugCurrentFiber$3.resetCurrentFiber();}return next;}function performDeferredWork(deadline){performWork(OffscreenPriority,deadline);}function handleCommitPhaseErrors(){// This is a special work loop for handling commit phase errors. It's
// similar to the syncrhonous work loop, but does an additional check on
// each fiber to see if it's an error boundary with an unhandled error. If
// so, it uses a forked version of performUnitOfWork that unmounts the
// failed subtree.
//
// The loop stops once the children have unmounted and error lifecycles are
// called. Then we return to the regular flow.
if(capturedErrors!==null&&capturedErrors.size>0){while(nextUnitOfWork!==null){if(hasCapturedError(nextUnitOfWork)){// Use a forked version of performUnitOfWork
nextUnitOfWork=performFailedUnitOfWork(nextUnitOfWork);}else{nextUnitOfWork=performUnitOfWork(nextUnitOfWork);}if(nextUnitOfWork===null){!(pendingCommit!==null)?invariant(false,'Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.'):void 0;// We just completed a root. Commit it now.
priorityContext=TaskPriority$1;commitAllWork(pendingCommit);priorityContext=nextPriorityLevel;if(capturedErrors===null||capturedErrors.size===0){// There are no more unhandled errors. We can exit this special
// work loop. If there's still additional work, we'll perform it
// using one of the normal work loops.
break;}// The commit phase produced additional errors. Continue working.
!(nextPriorityLevel===TaskPriority$1)?invariant(false,'Commit phase errors should be scheduled to recover with task priority. This error is likely caused by a bug in React. Please file an issue.'):void 0;}}}}function workLoop(minPriorityLevel,deadline){if(pendingCommit!==null){priorityContext=TaskPriority$1;commitAllWork(pendingCommit);handleCommitPhaseErrors();}else if(nextUnitOfWork===null){resetNextUnitOfWork();}if(nextPriorityLevel===NoWork$2||nextPriorityLevel>minPriorityLevel){return;}// During the render phase, updates should have the same priority at which
// we're rendering.
priorityContext=nextPriorityLevel;loop:do{if(nextPriorityLevel<=TaskPriority$1){// Flush all synchronous and task work.
while(nextUnitOfWork!==null){nextUnitOfWork=performUnitOfWork(nextUnitOfWork);if(nextUnitOfWork===null){!(pendingCommit!==null)?invariant(false,'Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.'):void 0;// We just completed a root. Commit it now.
priorityContext=TaskPriority$1;commitAllWork(pendingCommit);priorityContext=nextPriorityLevel;// Clear any errors that were scheduled during the commit phase.
handleCommitPhaseErrors();// The priority level may have changed. Check again.
if(nextPriorityLevel===NoWork$2||nextPriorityLevel>minPriorityLevel||nextPriorityLevel>TaskPriority$1){// The priority level does not match.
break;}}}}else if(deadline!==null){// Flush asynchronous work until the deadline expires.
while(nextUnitOfWork!==null&&!deadlineHasExpired){if(deadline.timeRemaining()>timeHeuristicForUnitOfWork){nextUnitOfWork=performUnitOfWork(nextUnitOfWork);// In a deferred work batch, iff nextUnitOfWork returns null, we just
// completed a root and a pendingCommit exists. Logically, we could
// omit either of the checks in the following condition, but we need
// both to satisfy Flow.
if(nextUnitOfWork===null){!(pendingCommit!==null)?invariant(false,'Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.'):void 0;// We just completed a root. If we have time, commit it now.
// Otherwise, we'll commit it in the next frame.
if(deadline.timeRemaining()>timeHeuristicForUnitOfWork){priorityContext=TaskPriority$1;commitAllWork(pendingCommit);priorityContext=nextPriorityLevel;// Clear any errors that were scheduled during the commit phase.
handleCommitPhaseErrors();// The priority level may have changed. Check again.
if(nextPriorityLevel===NoWork$2||nextPriorityLevel>minPriorityLevel||nextPriorityLevel<HighPriority){// The priority level does not match.
break;}}else{deadlineHasExpired=true;}}}else{deadlineHasExpired=true;}}}// There might be work left. Depending on the priority, we should
// either perform it now or schedule a callback to perform it later.
switch(nextPriorityLevel){case SynchronousPriority$1:case TaskPriority$1:// We have remaining synchronous or task work. Keep performing it,
// regardless of whether we're inside a callback.
if(nextPriorityLevel<=minPriorityLevel){continue loop;}break loop;case HighPriority:case LowPriority:case OffscreenPriority:// We have remaining async work.
if(deadline===null){// We're not inside a callback. Exit and perform the work during
// the next callback.
break loop;}// We are inside a callback.
if(!deadlineHasExpired&&nextPriorityLevel<=minPriorityLevel){// We still have time. Keep working.
continue loop;}// We've run out of time. Exit.
break loop;case NoWork$2:// No work left. We can exit.
break loop;default:invariant(false,'Switch statement should be exhuastive. This error is likely caused by a bug in React. Please file an issue.');}}while(true);}function performWorkCatchBlock(failedWork,boundary,minPriorityLevel,deadline){// We're going to restart the error boundary that captured the error.
// Conceptually, we're unwinding the stack. We need to unwind the
// context stack, too.
unwindContexts(failedWork,boundary);// Restart the error boundary using a forked version of
// performUnitOfWork that deletes the boundary's children. The entire
// failed subree will be unmounted. During the commit phase, a special
// lifecycle method is called on the error boundary, which triggers
// a re-render.
nextUnitOfWork=performFailedUnitOfWork(boundary);// Continue working.
workLoop(minPriorityLevel,deadline);}function performWork(minPriorityLevel,deadline){{startWorkLoopTimer();}!!isPerformingWork?invariant(false,'performWork was called recursively. This error is likely caused by a bug in React. Please file an issue.'):void 0;isPerformingWork=true;nestedUpdateCount=0;// The priority context changes during the render phase. We'll need to
// reset it at the end.
var previousPriorityContext=priorityContext;var didError=false;var error=null;{invokeGuardedCallback$1(null,workLoop,null,minPriorityLevel,deadline);if(hasCaughtError()){didError=true;error=clearCaughtError();}}// An error was thrown during the render phase.
while(didError){if(didFatal){// This was a fatal error. Don't attempt to recover from it.
firstUncaughtError=error;break;}var failedWork=nextUnitOfWork;if(failedWork===null){// An error was thrown but there's no current unit of work. This can
// happen during the commit phase if there's a bug in the renderer.
didFatal=true;continue;}// "Capture" the error by finding the nearest boundary. If there is no
// error boundary, we use the root.
var boundary=captureError(failedWork,error);!(boundary!==null)?invariant(false,'Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue.'):void 0;if(didFatal){// The error we just captured was a fatal error. This happens
// when the error propagates to the root more than once.
continue;}didError=false;error=null;{invokeGuardedCallback$1(null,performWorkCatchBlock,null,failedWork,boundary,minPriorityLevel,deadline);if(hasCaughtError()){didError=true;error=clearCaughtError();continue;}}// We're finished working. Exit the error loop.
break;}// Reset the priority context to its previous value.
priorityContext=previousPriorityContext;// If we're inside a callback, set this to false, since we just flushed it.
if(deadline!==null){isCallbackScheduled=false;}// If there's remaining async work, make sure we schedule another callback.
if(nextPriorityLevel>TaskPriority$1&&!isCallbackScheduled){scheduleDeferredCallback(performDeferredWork);isCallbackScheduled=true;}var errorToThrow=firstUncaughtError;// We're done performing work. Time to clean up.
isPerformingWork=false;deadlineHasExpired=false;didFatal=false;firstUncaughtError=null;capturedErrors=null;failedBoundaries=null;{stopWorkLoopTimer();}// It's safe to throw any unhandled errors.
if(errorToThrow!==null){throw errorToThrow;}}// Returns the boundary that captured the error, or null if the error is ignored
function captureError(failedWork,error){// It is no longer valid because we exited the user code.
ReactCurrentOwner$1.current=null;{ReactDebugCurrentFiber$3.resetCurrentFiber();}// Search for the nearest error boundary.
var boundary=null;// Passed to logCapturedError()
var errorBoundaryFound=false;var willRetry=false;var errorBoundaryName=null;// Host containers are a special case. If the failed work itself is a host
// container, then it acts as its own boundary. In all other cases, we
// ignore the work itself and only search through the parents.
if(failedWork.tag===HostRoot$6){boundary=failedWork;if(isFailedBoundary(failedWork)){// If this root already failed, there must have been an error when
// attempting to unmount it. This is a worst-case scenario and
// should only be possible if there's a bug in the renderer.
didFatal=true;}}else{var node=failedWork['return'];while(node!==null&&boundary===null){if(node.tag===ClassComponent$5){var instance=node.stateNode;if(typeof instance.componentDidCatch==='function'){errorBoundaryFound=true;errorBoundaryName=getComponentName_1(node);// Found an error boundary!
boundary=node;willRetry=true;}}else if(node.tag===HostRoot$6){// Treat the root like a no-op error boundary.
boundary=node;}if(isFailedBoundary(node)){// This boundary is already in a failed state.
// If we're currently unmounting, that means this error was
// thrown while unmounting a failed subtree. We should ignore
// the error.
if(isUnmounting){return null;}// If we're in the commit phase, we should check to see if
// this boundary already captured an error during this commit.
// This case exists because multiple errors can be thrown during
// a single commit without interruption.
if(commitPhaseBoundaries!==null&&(commitPhaseBoundaries.has(node)||node.alternate!==null&&commitPhaseBoundaries.has(node.alternate))){// If so, we should ignore this error.
return null;}// The error should propagate to the next boundary -— we keep looking.
boundary=null;willRetry=false;}node=node['return'];}}if(boundary!==null){// Add to the collection of failed boundaries. This lets us know that
// subsequent errors in this subtree should propagate to the next boundary.
if(failedBoundaries===null){failedBoundaries=new Set();}failedBoundaries.add(boundary);// This method is unsafe outside of the begin and complete phases.
// We might be in the commit phase when an error is captured.
// The risk is that the return path from this Fiber may not be accurate.
// That risk is acceptable given the benefit of providing users more context.
var _componentStack=getStackAddendumByWorkInProgressFiber$2(failedWork);var _componentName=getComponentName_1(failedWork);// Add to the collection of captured errors. This is stored as a global
// map of errors and their component stack location keyed by the boundaries
// that capture them. We mostly use this Map as a Set; it's a Map only to
// avoid adding a field to Fiber to store the error.
if(capturedErrors===null){capturedErrors=new Map();}var capturedError={componentName:_componentName,componentStack:_componentStack,error:error,errorBoundary:errorBoundaryFound?boundary.stateNode:null,errorBoundaryFound:errorBoundaryFound,errorBoundaryName:errorBoundaryName,willRetry:willRetry};capturedErrors.set(boundary,capturedError);try{logCapturedError(capturedError);}catch(e){// Prevent cycle if logCapturedError() throws.
// A cycle may still occur if logCapturedError renders a component that throws.
console.error(e);}// If we're in the commit phase, defer scheduling an update on the
// boundary until after the commit is complete
if(isCommitting){if(commitPhaseBoundaries===null){commitPhaseBoundaries=new Set();}commitPhaseBoundaries.add(boundary);}else{// Otherwise, schedule an update now.
// TODO: Is this actually necessary during the render phase? Is it
// possible to unwind and continue rendering at the same priority,
// without corrupting internal state?
scheduleErrorRecovery(boundary);}return boundary;}else if(firstUncaughtError===null){// If no boundary is found, we'll need to throw the error
firstUncaughtError=error;}return null;}function hasCapturedError(fiber){// TODO: capturedErrors should store the boundary instance, to avoid needing
// to check the alternate.
return capturedErrors!==null&&(capturedErrors.has(fiber)||fiber.alternate!==null&&capturedErrors.has(fiber.alternate));}function isFailedBoundary(fiber){// TODO: failedBoundaries should store the boundary instance, to avoid
// needing to check the alternate.
return failedBoundaries!==null&&(failedBoundaries.has(fiber)||fiber.alternate!==null&&failedBoundaries.has(fiber.alternate));}function commitErrorHandling(effectfulFiber){var capturedError=void 0;if(capturedErrors!==null){capturedError=capturedErrors.get(effectfulFiber);capturedErrors['delete'](effectfulFiber);if(capturedError==null){if(effectfulFiber.alternate!==null){effectfulFiber=effectfulFiber.alternate;capturedError=capturedErrors.get(effectfulFiber);capturedErrors['delete'](effectfulFiber);}}}!(capturedError!=null)?invariant(false,'No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.'):void 0;switch(effectfulFiber.tag){case ClassComponent$5:var instance=effectfulFiber.stateNode;var info={componentStack:capturedError.componentStack};// Allow the boundary to handle the error, usually by scheduling
// an update to itself
instance.componentDidCatch(capturedError.error,info);return;case HostRoot$6:if(firstUncaughtError===null){// If this is the host container, we treat it as a no-op error
// boundary. We'll throw the first uncaught error once it's safe to
// do so, at the end of the batch.
firstUncaughtError=capturedError.error;}return;default:invariant(false,'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');}}function unwindContexts(from,to){var node=from;while(node!==null){switch(node.tag){case ClassComponent$5:popContextProvider$1(node);break;case HostComponent$6:popHostContext(node);break;case HostRoot$6:popHostContainer(node);break;case HostPortal$3:popHostContainer(node);break;}if(node===to||node.alternate===to){{stopFailedWorkTimer(node);}break;}else{stopWorkTimer(node);}node=node['return'];}}function scheduleRoot(root,priorityLevel){if(priorityLevel===NoWork$2){return;}if(!root.isScheduled){root.isScheduled=true;if(lastScheduledRoot){// Schedule ourselves to the end.
lastScheduledRoot.nextScheduledRoot=root;lastScheduledRoot=root;}else{// We're the only work scheduled.
nextScheduledRoot=root;lastScheduledRoot=root;}}}function scheduleUpdate(fiber,priorityLevel){{recordScheduleUpdate();}if(nestedUpdateCount>NESTED_UPDATE_LIMIT){didFatal=true;invariant(false,'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.');}if(!isPerformingWork&&priorityLevel<=nextPriorityLevel){// We must reset the current unit of work pointer so that we restart the
// search from the root during the next tick, in case there is now higher
// priority work somewhere earlier than before.
nextUnitOfWork=null;}{if(fiber.tag===ClassComponent$5){var instance=fiber.stateNode;warnAboutInvalidUpdates(instance);}}var node=fiber;var shouldContinue=true;while(node!==null&&shouldContinue){// Walk the parent path to the root and update each node's priority. Once
// we reach a node whose priority matches (and whose alternate's priority
// matches) we can exit safely knowing that the rest of the path is correct.
shouldContinue=false;if(node.pendingWorkPriority===NoWork$2||node.pendingWorkPriority>priorityLevel){// Priority did not match. Update and keep going.
shouldContinue=true;node.pendingWorkPriority=priorityLevel;}if(node.alternate!==null){if(node.alternate.pendingWorkPriority===NoWork$2||node.alternate.pendingWorkPriority>priorityLevel){// Priority did not match. Update and keep going.
shouldContinue=true;node.alternate.pendingWorkPriority=priorityLevel;}}if(node['return']===null){if(node.tag===HostRoot$6){var root=node.stateNode;scheduleRoot(root,priorityLevel);if(!isPerformingWork){switch(priorityLevel){case SynchronousPriority$1:// Perform this update now.
if(isUnbatchingUpdates){// We're inside unbatchedUpdates, which is inside either
// batchedUpdates or a lifecycle. We should only flush
// synchronous work, not task work.
performWork(SynchronousPriority$1,null);}else{// Flush both synchronous and task work.
performWork(TaskPriority$1,null);}break;case TaskPriority$1:!isBatchingUpdates?invariant(false,'Task updates can only be scheduled as a nested update or inside batchedUpdates.'):void 0;break;default:// Schedule a callback to perform the work later.
if(!isCallbackScheduled){scheduleDeferredCallback(performDeferredWork);isCallbackScheduled=true;}}}}else{{if(fiber.tag===ClassComponent$5){warnAboutUpdateOnUnmounted(fiber.stateNode);}}return;}}node=node['return'];}}function getPriorityContext(fiber,forceAsync){var priorityLevel=priorityContext;if(priorityLevel===NoWork$2){if(!useSyncScheduling||fiber.internalContextTag&AsyncUpdates||forceAsync){priorityLevel=LowPriority;}else{priorityLevel=SynchronousPriority$1;}}// If we're in a batch, or if we're already performing work, downgrade sync
// priority to task priority
if(priorityLevel===SynchronousPriority$1&&(isPerformingWork||isBatchingUpdates)){return TaskPriority$1;}return priorityLevel;}function scheduleErrorRecovery(fiber){scheduleUpdate(fiber,TaskPriority$1);}function performWithPriority(priorityLevel,fn){var previousPriorityContext=priorityContext;priorityContext=priorityLevel;try{fn();}finally{priorityContext=previousPriorityContext;}}function batchedUpdates(fn,a){var previousIsBatchingUpdates=isBatchingUpdates;isBatchingUpdates=true;try{return fn(a);}finally{isBatchingUpdates=previousIsBatchingUpdates;// If we're not already inside a batch, we need to flush any task work
// that was created by the user-provided function.
if(!isPerformingWork&&!isBatchingUpdates){performWork(TaskPriority$1,null);}}}function unbatchedUpdates(fn){var previousIsUnbatchingUpdates=isUnbatchingUpdates;var previousIsBatchingUpdates=isBatchingUpdates;// This is only true if we're nested inside batchedUpdates.
isUnbatchingUpdates=isBatchingUpdates;isBatchingUpdates=false;try{return fn();}finally{isBatchingUpdates=previousIsBatchingUpdates;isUnbatchingUpdates=previousIsUnbatchingUpdates;}}function flushSync(batch){var previousIsBatchingUpdates=isBatchingUpdates;var previousPriorityContext=priorityContext;isBatchingUpdates=true;priorityContext=SynchronousPriority$1;try{return batch();}finally{isBatchingUpdates=previousIsBatchingUpdates;priorityContext=previousPriorityContext;!!isPerformingWork?invariant(false,'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.'):void 0;performWork(TaskPriority$1,null);}}function deferredUpdates(fn){var previousPriorityContext=priorityContext;priorityContext=LowPriority;try{return fn();}finally{priorityContext=previousPriorityContext;}}return{scheduleUpdate:scheduleUpdate,getPriorityContext:getPriorityContext,performWithPriority:performWithPriority,batchedUpdates:batchedUpdates,unbatchedUpdates:unbatchedUpdates,flushSync:flushSync,deferredUpdates:deferredUpdates};};/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getContextForSubtree
 * 
 */var getContextFiber=function(arg){invariant(false,'Missing injection for fiber getContextForSubtree');};function getContextForSubtree(parentComponent){if(!parentComponent){return emptyObject;}var instance=ReactInstanceMap_1.get(parentComponent);if(typeof instance.tag==='number'){return getContextFiber(instance);}else{return instance._processChildContext(instance._context);}}getContextForSubtree._injectFiber=function(fn){getContextFiber=fn;};var getContextForSubtree_1=getContextForSubtree;var addTopLevelUpdate=ReactFiberUpdateQueue.addTopLevelUpdate;var findCurrentUnmaskedContext=ReactFiberContext.findCurrentUnmaskedContext;var isContextProvider=ReactFiberContext.isContextProvider;var processChildContext=ReactFiberContext.processChildContext;var createFiberRoot=ReactFiberRoot.createFiberRoot;var HostComponent$3=ReactTypeOfWork.HostComponent;{var warning$18=require$$0;var ReactFiberInstrumentation=ReactFiberInstrumentation_1;var ReactDebugCurrentFiber$1=ReactDebugCurrentFiber_1;var getComponentName$4=getComponentName_1;}var findCurrentHostFiber$1=ReactFiberTreeReflection.findCurrentHostFiber;var findCurrentHostFiberWithNoPortals$1=ReactFiberTreeReflection.findCurrentHostFiberWithNoPortals;getContextForSubtree_1._injectFiber(function(fiber){var parentContext=findCurrentUnmaskedContext(fiber);return isContextProvider(fiber)?processChildContext(fiber,parentContext,false):parentContext;});var ReactFiberReconciler=function(config){var getPublicInstance=config.getPublicInstance;var _ReactFiberScheduler=ReactFiberScheduler(config),scheduleUpdate=_ReactFiberScheduler.scheduleUpdate,getPriorityContext=_ReactFiberScheduler.getPriorityContext,performWithPriority=_ReactFiberScheduler.performWithPriority,batchedUpdates=_ReactFiberScheduler.batchedUpdates,unbatchedUpdates=_ReactFiberScheduler.unbatchedUpdates,flushSync=_ReactFiberScheduler.flushSync,deferredUpdates=_ReactFiberScheduler.deferredUpdates;function scheduleTopLevelUpdate(current,element,callback){{if(ReactDebugCurrentFiber$1.phase==='render'&&ReactDebugCurrentFiber$1.current!==null){warning$18(false,'Render methods should be a pure function of props and state; '+'triggering nested component updates from render is not allowed. '+'If necessary, trigger nested updates in componentDidUpdate.\n\n'+'Check the render method of %s.',getComponentName$4(ReactDebugCurrentFiber$1.current)||'Unknown');}}// Check if the top-level element is an async wrapper component. If so, treat
// updates to the root as async. This is a bit weird but lets us avoid a separate
// `renderAsync` API.
var forceAsync=ReactFeatureFlags_1.enableAsyncSubtreeAPI&&element!=null&&element.type!=null&&element.type.prototype!=null&&element.type.prototype.unstable_isAsyncReactComponent===true;var priorityLevel=getPriorityContext(current,forceAsync);var nextState={element:element};callback=callback===undefined?null:callback;{warning$18(callback===null||typeof callback==='function','render(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callback);}addTopLevelUpdate(current,nextState,callback,priorityLevel);scheduleUpdate(current,priorityLevel);}return{createContainer:function(containerInfo){return createFiberRoot(containerInfo);},updateContainer:function(element,container,parentComponent,callback){// TODO: If this is a nested container, this won't be the root.
var current=container.current;{if(ReactFiberInstrumentation.debugTool){if(current.alternate===null){ReactFiberInstrumentation.debugTool.onMountContainer(container);}else if(element===null){ReactFiberInstrumentation.debugTool.onUnmountContainer(container);}else{ReactFiberInstrumentation.debugTool.onUpdateContainer(container);}}}var context=getContextForSubtree_1(parentComponent);if(container.context===null){container.context=context;}else{container.pendingContext=context;}scheduleTopLevelUpdate(current,element,callback);},performWithPriority:performWithPriority,batchedUpdates:batchedUpdates,unbatchedUpdates:unbatchedUpdates,deferredUpdates:deferredUpdates,flushSync:flushSync,getPublicRootInstance:function(container){var containerFiber=container.current;if(!containerFiber.child){return null;}switch(containerFiber.child.tag){case HostComponent$3:return getPublicInstance(containerFiber.child.stateNode);default:return containerFiber.child.stateNode;}},findHostInstance:function(fiber){var hostFiber=findCurrentHostFiber$1(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;},findHostInstanceWithNoPortals:function(fiber){var hostFiber=findCurrentHostFiberWithNoPortals$1(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;}};};var TEXT_NODE$3=HTMLNodeType_1.TEXT_NODE;/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(node){while(node&&node.firstChild){node=node.firstChild;}return node;}/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(node){while(node){if(node.nextSibling){return node.nextSibling;}node=node.parentNode;}}/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node){if(node.nodeType===TEXT_NODE$3){nodeEnd=nodeStart+node.textContent.length;if(nodeStart<=offset&&nodeEnd>=offset){return{node:node,offset:offset-nodeStart};}nodeStart=nodeEnd;}node=getLeafNode(getSiblingNode(node));}}var getNodeForCharacterOffset_1=getNodeForCharacterOffset;var contentKey=null;/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */function getTextContentAccessor(){if(!contentKey&&ExecutionEnvironment.canUseDOM){// Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
contentKey='textContent'in document.documentElement?'textContent':'innerText';}return contentKey;}var getTextContentAccessor_1=getTextContentAccessor;/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */function isCollapsed(anchorNode,anchorOffset,focusNode$$1,focusOffset){return anchorNode===focusNode$$1&&anchorOffset===focusOffset;}/**
 * @param {DOMElement} node
 * @return {?object}
 */function getModernOffsets(node){var selection=window.getSelection&&window.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode;var anchorOffset=selection.anchorOffset;var focusNode$$1=selection.focusNode;var focusOffset=selection.focusOffset;var currentRange=selection.getRangeAt(0);// In Firefox, range.startContainer and range.endContainer can be "anonymous
// divs", e.g. the up/down buttons on an <input type="number">. Anonymous
// divs do not seem to expose properties, triggering a "Permission denied
// error" if any of its properties are accessed. The only seemingly possible
// way to avoid erroring is to access a property that typically works for
// non-anonymous divs and catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */currentRange.startContainer.nodeType;currentRange.endContainer.nodeType;/* eslint-enable no-unused-expressions */}catch(e){return null;}// If the node and offset values are the same, the selection is collapsed.
// `Selection.isCollapsed` is available natively, but IE sometimes gets
// this value wrong.
var isSelectionCollapsed=isCollapsed(selection.anchorNode,selection.anchorOffset,selection.focusNode,selection.focusOffset);var rangeLength=isSelectionCollapsed?0:currentRange.toString().length;var tempRange=currentRange.cloneRange();tempRange.selectNodeContents(node);tempRange.setEnd(currentRange.startContainer,currentRange.startOffset);var isTempRangeCollapsed=isCollapsed(tempRange.startContainer,tempRange.startOffset,tempRange.endContainer,tempRange.endOffset);var start=isTempRangeCollapsed?0:tempRange.toString().length;var end=start+rangeLength;// Detect whether the selection is backward.
var detectionRange=document.createRange();detectionRange.setStart(anchorNode,anchorOffset);detectionRange.setEnd(focusNode$$1,focusOffset);var isBackward=detectionRange.collapsed;return{start:isBackward?end:start,end:isBackward?start:end};}/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setModernOffsets(node,offsets){if(!window.getSelection){return;}var selection=window.getSelection();var length=node[getTextContentAccessor_1()].length;var start=Math.min(offsets.start,length);var end=offsets.end===undefined?start:Math.min(offsets.end,length);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset_1(node,start);var endMarker=getNodeForCharacterOffset_1(node,end);if(startMarker&&endMarker){var range=document.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else{range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}var ReactDOMSelection={/**
   * @param {DOMElement} node
   */getOffsets:getModernOffsets,/**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */setOffsets:setModernOffsets};var ReactDOMSelection_1=ReactDOMSelection;var ELEMENT_NODE$2=HTMLNodeType_1.ELEMENT_NODE;function isInDocument(node){return containsNode(document.documentElement,node);}/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */var ReactInputSelection={hasSelectionCapabilities:function(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&elem.type==='text'||nodeName==='textarea'||elem.contentEditable==='true');},getSelectionInformation:function(){var focusedElem=getActiveElement();return{focusedElem:focusedElem,selectionRange:ReactInputSelection.hasSelectionCapabilities(focusedElem)?ReactInputSelection.getSelection(focusedElem):null};},/**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */restoreSelection:function(priorSelectionInformation){var curFocusedElem=getActiveElement();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)){ReactInputSelection.setSelection(priorFocusedElem,priorSelectionRange);}// Focusing a node can change the scroll position, which is undesirable
var ancestors=[];var ancestor=priorFocusedElem;while(ancestor=ancestor.parentNode){if(ancestor.nodeType===ELEMENT_NODE$2){ancestors.push({element:ancestor,left:ancestor.scrollLeft,top:ancestor.scrollTop});}}focusNode(priorFocusedElem);for(var i=0;i<ancestors.length;i++){var info=ancestors[i];info.element.scrollLeft=info.left;info.element.scrollTop=info.top;}}},/**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */getSelection:function(input){var selection;if('selectionStart'in input){// Modern browser with input or textarea.
selection={start:input.selectionStart,end:input.selectionEnd};}else{// Content editable or old IE textarea.
selection=ReactDOMSelection_1.getOffsets(input);}return selection||{start:0,end:0};},/**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */setSelection:function(input,offsets){var start=offsets.start;var end=offsets.end;if(end===undefined){end=start;}if('selectionStart'in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else{ReactDOMSelection_1.setOffsets(input,offsets);}}};var ReactInputSelection_1=ReactInputSelection;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactVersion
 */var ReactVersion='16.0.0-beta.3';/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 * 
 */var ELEMENT_NODE$3=HTMLNodeType_1.ELEMENT_NODE;var ReactCurrentOwner$3=ReactGlobalSharedState_1.ReactCurrentOwner;{var warning$27=require$$0;}var findFiber=function(arg){invariant(false,'Missing injection for fiber findDOMNode');};var findStack=function(arg){invariant(false,'Missing injection for stack findDOMNode');};var findDOMNode=function(componentOrElement){{var owner=ReactCurrentOwner$3.current;if(owner!==null){var isFiber=typeof owner.tag==='number';var warnedAboutRefsInRender=isFiber?owner.stateNode._warnedAboutRefsInRender:owner._warnedAboutRefsInRender;warning$27(warnedAboutRefsInRender,'%s is accessing findDOMNode inside its render(). '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName_1(owner)||'A component');if(isFiber){owner.stateNode._warnedAboutRefsInRender=true;}else{owner._warnedAboutRefsInRender=true;}}}if(componentOrElement==null){return null;}if(componentOrElement.nodeType===ELEMENT_NODE$3){return componentOrElement;}var inst=ReactInstanceMap_1.get(componentOrElement);if(inst){if(typeof inst.tag==='number'){return findFiber(inst);}else{return findStack(inst);}}if(typeof componentOrElement.render==='function'){invariant(false,'Unable to find node on an unmounted component.');}else{invariant(false,'Element appears to be neither ReactComponent nor DOMNode. Keys: %s',Object.keys(componentOrElement));}};findDOMNode._injectFiber=function(fn){findFiber=fn;};findDOMNode._injectStack=function(fn){findStack=fn;};var findDOMNode_1=findDOMNode;/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule lowPriorityWarning
 *//**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var lowPriorityWarning$1=function(){};{var printWarning=function(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.warn(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}};lowPriorityWarning$1=function(condition,format){if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(undefined,[format].concat(args));}};}var lowPriorityWarning_1=lowPriorityWarning$1;var validateDOMNesting$1=emptyFunction;{var warning$28=require$$0;var _require$13=ReactDebugCurrentFiber_1,getCurrentFiberStackAddendum$5=_require$13.getCurrentFiberStackAddendum;// This validation code was written based on the HTML5 parsing spec:
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
//
// Note: this does not catch all invalid nesting, nor does it try to (as it's
// not clear what practical benefit doing so provides); instead, we warn only
// for cases where the parser will give a parse tree differing from what React
// intended. For example, <b><div></div></b> is invalid but we don't warn
// because it still parses correctly; we do warn for other cases like nested
// <p> tags where the beginning of the second element implicitly closes the
// first, causing a confusing mess.
// https://html.spec.whatwg.org/multipage/syntax.html#special
var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template',// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
'foreignObject','desc','title'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
var buttonScopeTags=inScopeTags.concat(['button']);// https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];var emptyAncestorInfo={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};var updatedAncestorInfo$1=function(oldInfo,tag,instance){var ancestorInfo=_assign({},oldInfo||emptyAncestorInfo);var info={tag:tag,instance:instance};if(inScopeTags.indexOf(tag)!==-1){ancestorInfo.aTagInScope=null;ancestorInfo.buttonTagInScope=null;ancestorInfo.nobrTagInScope=null;}if(buttonScopeTags.indexOf(tag)!==-1){ancestorInfo.pTagInButtonScope=null;}// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){ancestorInfo.listItemTagAutoclosing=null;ancestorInfo.dlItemTagAutoclosing=null;}ancestorInfo.current=info;if(tag==='form'){ancestorInfo.formTag=info;}if(tag==='a'){ancestorInfo.aTagInScope=info;}if(tag==='button'){ancestorInfo.buttonTagInScope=info;}if(tag==='nobr'){ancestorInfo.nobrTagInScope=info;}if(tag==='p'){ancestorInfo.pTagInButtonScope=info;}if(tag==='li'){ancestorInfo.listItemTagAutoclosing=info;}if(tag==='dd'||tag==='dt'){ancestorInfo.dlItemTagAutoclosing=info;}return ancestorInfo;};/**
   * Returns whether
   */var isTagValidWithParent=function(tag,parentTag){// First, let's check if we're in an unusual parsing mode...
switch(parentTag){// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case'select':return tag==='option'||tag==='optgroup'||tag==='#text';case'optgroup':return tag==='option'||tag==='#text';// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case'option':return tag==='#text';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case'tr':return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case'tbody':case'thead':case'tfoot':return tag==='tr'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case'colgroup':return tag==='col'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case'table':return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case'head':return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case'html':return tag==='head'||tag==='body';case'#document':return tag==='html';}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(tag){case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';case'rp':case'rt':return impliedEndTags.indexOf(parentTag)===-1;case'body':case'caption':case'col':case'colgroup':case'frame':case'head':case'html':case'tbody':case'td':case'tfoot':case'th':case'thead':case'tr':// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return parentTag==null;}return true;};/**
   * Returns whether
   */var findInvalidAncestorForTag=function(tag,ancestorInfo){switch(tag){case'address':case'article':case'aside':case'blockquote':case'center':case'details':case'dialog':case'dir':case'div':case'dl':case'fieldset':case'figcaption':case'figure':case'footer':case'header':case'hgroup':case'main':case'menu':case'nav':case'ol':case'p':case'section':case'summary':case'ul':case'pre':case'listing':case'table':case'hr':case'xmp':case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return ancestorInfo.pTagInButtonScope;case'form':return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;case'li':return ancestorInfo.listItemTagAutoclosing;case'dd':case'dt':return ancestorInfo.dlItemTagAutoclosing;case'button':return ancestorInfo.buttonTagInScope;case'a':// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return ancestorInfo.aTagInScope;case'nobr':return ancestorInfo.nobrTagInScope;}return null;};/**
   * Given a ReactCompositeComponent instance, return a list of its recursive
   * owners, starting at the root and ending with the instance itself.
   */var findOwnerStack=function(instance){if(!instance){return[];}var stack=[];do{stack.push(instance);}while(instance=instance._currentElement._owner);stack.reverse();return stack;};var getOwnerInfo=function(childInstance,childTag,ancestorInstance,ancestorTag,isParent){var childOwner=childInstance&&childInstance._currentElement._owner;var ancestorOwner=ancestorInstance&&ancestorInstance._currentElement._owner;var childOwners=findOwnerStack(childOwner);var ancestorOwners=findOwnerStack(ancestorOwner);var minStackLen=Math.min(childOwners.length,ancestorOwners.length);var i;var deepestCommon=-1;for(i=0;i<minStackLen;i++){if(childOwners[i]===ancestorOwners[i]){deepestCommon=i;}else{break;}}var UNKNOWN='(unknown)';var childOwnerNames=childOwners.slice(deepestCommon+1).map(function(inst){return getComponentName_1(inst)||UNKNOWN;});var ancestorOwnerNames=ancestorOwners.slice(deepestCommon+1).map(function(inst){return getComponentName_1(inst)||UNKNOWN;});var ownerInfo=[].concat(// If the parent and child instances have a common owner ancestor, start
// with that -- otherwise we just start with the parent's owners.
deepestCommon!==-1?getComponentName_1(childOwners[deepestCommon])||UNKNOWN:[],ancestorOwnerNames,ancestorTag,// If we're warning about an invalid (non-parent) ancestry, add '...'
isParent?[]:['...'],childOwnerNames,childTag).join(' > ');return ownerInfo;};var didWarn={};validateDOMNesting$1=function(childTag,childText,childInstance,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;if(childText!=null){warning$28(childTag==null,'validateDOMNesting: when childText is passed, childTag should be null');childTag='#text';}var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);var invalidParentOrAncestor=invalidParent||invalidAncestor;if(!invalidParentOrAncestor){return;}var ancestorInstance=invalidParentOrAncestor.instance;var ancestorTag=invalidParentOrAncestor.tag;var addendum;if(childInstance!=null){addendum=' See '+getOwnerInfo(childInstance,childTag,ancestorInstance,ancestorTag,!!invalidParent)+'.';}else{addendum=getCurrentFiberStackAddendum$5();}var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag+'|'+addendum;if(didWarn[warnKey]){return;}didWarn[warnKey]=true;var tagDisplayName=childTag;var whitespaceInfo='';if(childTag==='#text'){if(/\S/.test(childText)){tagDisplayName='Text nodes';}else{tagDisplayName='Whitespace text nodes';whitespaceInfo=" Make sure you don't have any extra whitespace between tags on "+'each line of your source code.';}}else{tagDisplayName='<'+childTag+'>';}if(invalidParent){var info='';if(ancestorTag==='table'&&childTag==='tr'){info+=' Add a <tbody> to your code to match the DOM tree generated by '+'the browser.';}warning$28(false,'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s',tagDisplayName,ancestorTag,whitespaceInfo,info,addendum);}else{warning$28(false,'validateDOMNesting(...): %s cannot appear as a descendant of '+'<%s>.%s',tagDisplayName,ancestorTag,addendum);}};validateDOMNesting$1.updatedAncestorInfo=updatedAncestorInfo$1;// For testing
validateDOMNesting$1.isTagValidInContext=function(tag,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;return isTagValidWithParent(tag,parentTag)&&!findInvalidAncestorForTag(tag,ancestorInfo);};}var validateDOMNesting_1=validateDOMNesting$1;var HostComponent$11=ReactTypeOfWork.HostComponent;function getParent(inst){if(inst._hostParent!==undefined){return inst._hostParent;}if(typeof inst.tag==='number'){do{inst=inst['return'];// TODO: If this is a HostRoot we might want to bail out.
// That is depending on if we want nested subtrees (layers) to bubble
// events to their parent. We could also go through parentNode on the
// host node but that wouldn't work for React Native and doesn't let us
// do the portal feature.
}while(inst&&inst.tag!==HostComponent$11);if(inst){return inst;}}return null;}/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */function getLowestCommonAncestor(instA,instB){var depthA=0;for(var tempA=instA;tempA;tempA=getParent(tempA)){depthA++;}var depthB=0;for(var tempB=instB;tempB;tempB=getParent(tempB)){depthB++;}// If A is deeper, crawl up.
while(depthA-depthB>0){instA=getParent(instA);depthA--;}// If B is deeper, crawl up.
while(depthB-depthA>0){instB=getParent(instB);depthB--;}// Walk in lockstep until we find a match.
var depth=depthA;while(depth--){if(instA===instB||instA===instB.alternate){return instA;}instA=getParent(instA);instB=getParent(instB);}return null;}/**
 * Return if A is an ancestor of B.
 */function isAncestor(instA,instB){while(instB){if(instA===instB||instA===instB.alternate){return true;}instB=getParent(instB);}return false;}/**
 * Return the parent instance of the passed-in instance.
 */function getParentInstance(inst){return getParent(inst);}/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */function traverseTwoPhase(inst,fn,arg){var path=[];while(inst){path.push(inst);inst=getParent(inst);}var i;for(i=path.length;i-->0;){fn(path[i],'captured',arg);}for(i=0;i<path.length;i++){fn(path[i],'bubbled',arg);}}/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */function traverseEnterLeave(from,to,fn,argFrom,argTo){var common=from&&to?getLowestCommonAncestor(from,to):null;var pathFrom=[];while(from&&from!==common){pathFrom.push(from);from=getParent(from);}var pathTo=[];while(to&&to!==common){pathTo.push(to);to=getParent(to);}var i;for(i=0;i<pathFrom.length;i++){fn(pathFrom[i],'bubbled',argFrom);}for(i=pathTo.length;i-->0;){fn(pathTo[i],'captured',argTo);}}var ReactTreeTraversal={isAncestor:isAncestor,getLowestCommonAncestor:getLowestCommonAncestor,getParentInstance:getParentInstance,traverseTwoPhase:traverseTwoPhase,traverseEnterLeave:traverseEnterLeave};var getListener=EventPluginHub_1.getListener;{var warning$29=require$$0;}/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */function listenerAtPhase(inst,event,propagationPhase){var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];return getListener(inst,registrationName);}/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */function accumulateDirectionalDispatches(inst,phase,event){{warning$29(inst,'Dispatching inst must not be null');}var listener=listenerAtPhase(inst,event,phase);if(listener){event._dispatchListeners=accumulateInto_1(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto_1(event._dispatchInstances,inst);}}/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */function accumulateTwoPhaseDispatchesSingle(event){if(event&&event.dispatchConfig.phasedRegistrationNames){ReactTreeTraversal.traverseTwoPhase(event._targetInst,accumulateDirectionalDispatches,event);}}/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */function accumulateTwoPhaseDispatchesSingleSkipTarget(event){if(event&&event.dispatchConfig.phasedRegistrationNames){var targetInst=event._targetInst;var parentInst=targetInst?ReactTreeTraversal.getParentInstance(targetInst):null;ReactTreeTraversal.traverseTwoPhase(parentInst,accumulateDirectionalDispatches,event);}}/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */function accumulateDispatches(inst,ignoredDirection,event){if(inst&&event&&event.dispatchConfig.registrationName){var registrationName=event.dispatchConfig.registrationName;var listener=getListener(inst,registrationName);if(listener){event._dispatchListeners=accumulateInto_1(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto_1(event._dispatchInstances,inst);}}}/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */function accumulateDirectDispatchesSingle(event){if(event&&event.dispatchConfig.registrationName){accumulateDispatches(event._targetInst,null,event);}}function accumulateTwoPhaseDispatches(events){forEachAccumulated_1(events,accumulateTwoPhaseDispatchesSingle);}function accumulateTwoPhaseDispatchesSkipTarget(events){forEachAccumulated_1(events,accumulateTwoPhaseDispatchesSingleSkipTarget);}function accumulateEnterLeaveDispatches(leave,enter,from,to){ReactTreeTraversal.traverseEnterLeave(from,to,accumulateDispatches,leave,enter);}function accumulateDirectDispatches(events){forEachAccumulated_1(events,accumulateDirectDispatchesSingle);}/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing even a
 * single one.
 *
 * @constructor EventPropagators
 */var EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateTwoPhaseDispatchesSkipTarget:accumulateTwoPhaseDispatchesSkipTarget,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};var EventPropagators_1=EventPropagators;/**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */function FallbackCompositionState(root){this._root=root;this._startText=this.getText();this._fallbackText=null;}_assign(FallbackCompositionState.prototype,{destructor:function(){this._root=null;this._startText=null;this._fallbackText=null;},/**
   * Get current text of input.
   *
   * @return {string}
   */getText:function(){if('value'in this._root){return this._root.value;}return this._root[getTextContentAccessor_1()];},/**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */getData:function(){if(this._fallbackText){return this._fallbackText;}var start;var startValue=this._startText;var startLength=startValue.length;var end;var endValue=this.getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;this._fallbackText=endValue.slice(start,sliceTail);return this._fallbackText;}});PooledClass_1.addPoolingTo(FallbackCompositionState);var FallbackCompositionState_1=FallbackCompositionState;var didWarnForAddedNewProperty=false;var isProxySupported=typeof Proxy==='function';{var warning$30=require$$0;}var shouldBeReleasedProperties=['dispatchConfig','_targetInst','nativeEvent','isDefaultPrevented','isPropagationStopped','_dispatchListeners','_dispatchInstances'];/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var EventInterface={type:null,target:null,// currentTarget is set when dispatching; no use in copying it here
currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(event){return event.timeStamp||Date.now();},defaultPrevented:null,isTrusted:null};/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */function SyntheticEvent(dispatchConfig,targetInst,nativeEvent,nativeEventTarget){{// these have a getter/setter for warnings
delete this.nativeEvent;delete this.preventDefault;delete this.stopPropagation;}this.dispatchConfig=dispatchConfig;this._targetInst=targetInst;this.nativeEvent=nativeEvent;var Interface=this.constructor.Interface;for(var propName in Interface){if(!Interface.hasOwnProperty(propName)){continue;}{delete this[propName];// this has a getter/setter for warnings
}var normalize=Interface[propName];if(normalize){this[propName]=normalize(nativeEvent);}else{if(propName==='target'){this.target=nativeEventTarget;}else{this[propName]=nativeEvent[propName];}}}var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;if(defaultPrevented){this.isDefaultPrevented=emptyFunction.thatReturnsTrue;}else{this.isDefaultPrevented=emptyFunction.thatReturnsFalse;}this.isPropagationStopped=emptyFunction.thatReturnsFalse;return this;}_assign(SyntheticEvent.prototype,{preventDefault:function(){this.defaultPrevented=true;var event=this.nativeEvent;if(!event){return;}if(event.preventDefault){event.preventDefault();}else if(typeof event.returnValue!=='unknown'){event.returnValue=false;}this.isDefaultPrevented=emptyFunction.thatReturnsTrue;},stopPropagation:function(){var event=this.nativeEvent;if(!event){return;}if(event.stopPropagation){event.stopPropagation();}else if(typeof event.cancelBubble!=='unknown'){// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
event.cancelBubble=true;}this.isPropagationStopped=emptyFunction.thatReturnsTrue;},/**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */persist:function(){this.isPersistent=emptyFunction.thatReturnsTrue;},/**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */isPersistent:emptyFunction.thatReturnsFalse,/**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */destructor:function(){var Interface=this.constructor.Interface;for(var propName in Interface){{Object.defineProperty(this,propName,getPooledWarningPropertyDefinition(propName,Interface[propName]));}}for(var i=0;i<shouldBeReleasedProperties.length;i++){this[shouldBeReleasedProperties[i]]=null;}{Object.defineProperty(this,'nativeEvent',getPooledWarningPropertyDefinition('nativeEvent',null));Object.defineProperty(this,'preventDefault',getPooledWarningPropertyDefinition('preventDefault',emptyFunction));Object.defineProperty(this,'stopPropagation',getPooledWarningPropertyDefinition('stopPropagation',emptyFunction));}}});SyntheticEvent.Interface=EventInterface;/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */SyntheticEvent.augmentClass=function(Class,Interface){var Super=this;var E=function(){};E.prototype=Super.prototype;var prototype=new E();_assign(prototype,Class.prototype);Class.prototype=prototype;Class.prototype.constructor=Class;Class.Interface=_assign({},Super.Interface,Interface);Class.augmentClass=Super.augmentClass;PooledClass_1.addPoolingTo(Class,PooledClass_1.fourArgumentPooler);};/** Proxying after everything set on SyntheticEvent
  * to resolve Proxy issue on some WebKit browsers
  * in which some Event properties are set to undefined (GH#10010)
  */{if(isProxySupported){/*eslint-disable no-func-assign */SyntheticEvent=new Proxy(SyntheticEvent,{construct:function(target,args){return this.apply(target,Object.create(target.prototype),args);},apply:function(constructor,that,args){return new Proxy(constructor.apply(that,args),{set:function(target,prop,value){if(prop!=='isPersistent'&&!target.constructor.Interface.hasOwnProperty(prop)&&shouldBeReleasedProperties.indexOf(prop)===-1){warning$30(didWarnForAddedNewProperty||target.isPersistent(),"This synthetic event is reused for performance reasons. If you're "+"seeing this, you're adding a new property in the synthetic event object. "+'The property is never released. See '+'https://fb.me/react-event-pooling for more information.');didWarnForAddedNewProperty=true;}target[prop]=value;return true;}});}});/*eslint-enable no-func-assign */}}PooledClass_1.addPoolingTo(SyntheticEvent,PooledClass_1.fourArgumentPooler);var SyntheticEvent_1=SyntheticEvent;/**
  * Helper to nullify syntheticEvent instance properties when destructing
  *
  * @param {object} SyntheticEvent
  * @param {String} propName
  * @return {object} defineProperty object
  */function getPooledWarningPropertyDefinition(propName,getVal){var isFunction=typeof getVal==='function';return{configurable:true,set:set,get:get};function set(val){var action=isFunction?'setting the method':'setting the property';warn(action,'This is effectively a no-op');return val;}function get(){var action=isFunction?'accessing the method':'accessing the property';var result=isFunction?'This is a no-op function':'This is set to null';warn(action,result);return getVal;}function warn(action,result){var warningCondition=false;warning$30(warningCondition,"This synthetic event is reused for performance reasons. If you're seeing this, "+"you're %s `%s` on a released/nullified synthetic event. %s. "+'If you must keep the original synthetic event around, use event.persist(). '+'See https://fb.me/react-event-pooling for more information.',action,propName,result);}}/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var CompositionEventInterface={data:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticCompositionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticCompositionEvent,CompositionEventInterface);var SyntheticCompositionEvent_1=SyntheticCompositionEvent;/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */var InputEventInterface={data:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticInputEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticInputEvent,InputEventInterface);var SyntheticInputEvent_1=SyntheticInputEvent;var END_KEYCODES=[9,13,27,32];// Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&'CompositionEvent'in window;var documentMode=null;if(ExecutionEnvironment.canUseDOM&&'documentMode'in document){documentMode=document.documentMode;}// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&'TextEvent'in window&&!documentMode&&!isPresto();// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11);/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */function isPresto(){var opera=window.opera;return typeof opera==='object'&&typeof opera.version==='function'&&parseInt(opera.version(),10)<=12;}var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);// Events and their corresponding property names.
var eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:'onBeforeInput',captured:'onBeforeInputCapture'},dependencies:['topCompositionEnd','topKeyPress','topTextInput','topPaste']},compositionEnd:{phasedRegistrationNames:{bubbled:'onCompositionEnd',captured:'onCompositionEndCapture'},dependencies:['topBlur','topCompositionEnd','topKeyDown','topKeyPress','topKeyUp','topMouseDown']},compositionStart:{phasedRegistrationNames:{bubbled:'onCompositionStart',captured:'onCompositionStartCapture'},dependencies:['topBlur','topCompositionStart','topKeyDown','topKeyPress','topKeyUp','topMouseDown']},compositionUpdate:{phasedRegistrationNames:{bubbled:'onCompositionUpdate',captured:'onCompositionUpdateCapture'},dependencies:['topBlur','topCompositionUpdate','topKeyDown','topKeyPress','topKeyUp','topMouseDown']}};// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false;/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return(nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey&&nativeEvent.altKey);}/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */function getCompositionEventType(topLevelType){switch(topLevelType){case'topCompositionStart':return eventTypes.compositionStart;case'topCompositionEnd':return eventTypes.compositionEnd;case'topCompositionUpdate':return eventTypes.compositionUpdate;}}/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionStart(topLevelType,nativeEvent){return topLevelType==='topKeyDown'&&nativeEvent.keyCode===START_KEYCODE;}/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionEnd(topLevelType,nativeEvent){switch(topLevelType){case'topKeyUp':// Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case'topKeyDown':// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode!==START_KEYCODE;case'topKeyPress':case'topMouseDown':case'topBlur':// Events are not possible without cancelling IME.
return true;default:return false;}}/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if(typeof detail==='object'&&'data'in detail){return detail.data;}return null;}// Track the current IME composition fallback object, if any.
var currentComposition=null;/**
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(topLevelType);}else if(!currentComposition){if(isFallbackCompositionStart(topLevelType,nativeEvent)){eventType=eventTypes.compositionStart;}}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){eventType=eventTypes.compositionEnd;}if(!eventType){return null;}if(useFallbackCompositionData){// The current composition is stored statically and must not be
// overwritten while composition continues.
if(!currentComposition&&eventType===eventTypes.compositionStart){currentComposition=FallbackCompositionState_1.getPooled(nativeEventTarget);}else if(eventType===eventTypes.compositionEnd){if(currentComposition){fallbackData=currentComposition.getData();}}}var event=SyntheticCompositionEvent_1.getPooled(eventType,targetInst,nativeEvent,nativeEventTarget);if(fallbackData){// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data=fallbackData;}else{var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}EventPropagators_1.accumulateTwoPhaseDispatches(event);return event;}/**
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */function getNativeBeforeInputChars(topLevelType,nativeEvent){switch(topLevelType){case'topCompositionEnd':return getDataFromCustomEvent(nativeEvent);case'topKeyPress':/**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case'topTextInput':// Record the characters to be added to the DOM.
var chars=nativeEvent.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default:// For other native event types, do nothing.
return null;}}/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */function getFallbackBeforeInputChars(topLevelType,nativeEvent){// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(currentComposition){if(topLevelType==='topCompositionEnd'||!canUseCompositionEvent&&isFallbackCompositionEnd(topLevelType,nativeEvent)){var chars=currentComposition.getData();FallbackCompositionState_1.release(currentComposition);currentComposition=null;return chars;}return null;}switch(topLevelType){case'topPaste':// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case'topKeyPress':/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(!isKeypressCommand(nativeEvent)){// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(nativeEvent.char&&nativeEvent.char.length>1){return nativeEvent.char;}else if(nativeEvent.which){return String.fromCharCode(nativeEvent.which);}}return null;case'topCompositionEnd':return useFallbackCompositionData?null:nativeEvent.data;default:return null;}}/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(topLevelType,nativeEvent);}else{chars=getFallbackBeforeInputChars(topLevelType,nativeEvent);}// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var event=SyntheticInputEvent_1.getPooled(eventTypes.beforeInput,targetInst,nativeEvent,nativeEventTarget);event.data=chars;EventPropagators_1.accumulateTwoPhaseDispatches(event);return event;}/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */var BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function(topLevelType,targetInst,nativeEvent,nativeEventTarget){return[extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget),extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget)];}};var BeforeInputEventPlugin_1=BeforeInputEventPlugin;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 * 
 *//**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */var supportedInputTypes={color:true,date:true,datetime:true,'datetime-local':true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function isTextInputElement(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();if(nodeName==='input'){return!!supportedInputTypes[elem.type];}if(nodeName==='textarea'){return true;}return false;}var isTextInputElement_1=isTextInputElement;var eventTypes$1={change:{phasedRegistrationNames:{bubbled:'onChange',captured:'onChangeCapture'},dependencies:['topBlur','topChange','topClick','topFocus','topInput','topKeyDown','topKeyUp','topSelectionChange']}};function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}function createAndAccumulateChangeEvent(inst,nativeEvent,target){var event=SyntheticEvent_1.getPooled(eventTypes$1.change,inst,nativeEvent,target);event.type='change';// Flag this event loop as needing state restore.
ReactControlledComponent_1.enqueueStateRestore(target);EventPropagators_1.accumulateTwoPhaseDispatches(event);return event;}function getInstIfValueChanged(targetInst,targetNode){if(inputValueTracking_1.updateValueIfChanged(targetNode)){return targetInst;}}/**
 * SECTION: handle `input` event
 */var isTextInputEventSupported=false;if(ExecutionEnvironment.canUseDOM){isTextInputEventSupported=!document.documentMode||document.documentMode>9;}function getTargetInstForInputEventPolyfill(topLevelType,targetInst,targetNode){if(topLevelType==='topInput'||topLevelType==='topChange'||// These events catch anything the IE9 onInput misses
topLevelType==='topSelectionChange'||topLevelType==='topKeyUp'||topLevelType==='topKeyDown'){return getInstIfValueChanged(targetInst,targetNode);}}function getTargetInstForInputOrChangeEvent(topLevelType,targetInst,targetNode){if(topLevelType==='topInput'||topLevelType==='topChange'){return getInstIfValueChanged(targetInst,targetNode);}}function getTargetInstForChangeEvent(topLevelType,targetInst,targetNode){if(topLevelType==='topChange'){return getInstIfValueChanged(targetInst,targetNode);}}function handleControlledInputBlur(inst,node){// TODO: In IE, inst is occasionally null. Why?
if(inst==null){return;}// Fiber and ReactDOM keep wrapper state in separate places
var state=inst._wrapperState||node._wrapperState;if(!state||!state.controlled||node.type!=='number'){return;}// If controlled, assign the value attribute to the current value on blur
var value=''+node.value;if(node.getAttribute('value')!==value){node.setAttribute('value',value);}}/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */var ChangeEventPlugin={eventTypes:eventTypes$1,extractEvents:function(topLevelType,targetInst,nativeEvent,nativeEventTarget){var targetNode=targetInst?ReactDOMComponentTree_1.getNodeFromInstance(targetInst):window;// On the selectionchange event, the target is the document which isn't
// helpful becasue we need the input, so we use the activeElement instead.
if(!isTextInputEventSupported&&topLevelType==='topSelectionChange'){nativeEventTarget=targetNode=getActiveElement();if(targetNode){targetInst=ReactDOMComponentTree_1.getInstanceFromNode(targetNode);}}var getTargetInstFunc,handleEventFunc;if(shouldUseChangeEvent(targetNode)){getTargetInstFunc=getTargetInstForChangeEvent;}else if(isTextInputElement_1(targetNode)&&!isTextInputEventSupported){getTargetInstFunc=getTargetInstForInputEventPolyfill;}else{getTargetInstFunc=getTargetInstForInputOrChangeEvent;}if(getTargetInstFunc){var inst=getTargetInstFunc(topLevelType,targetInst,targetNode);if(inst){var event=createAndAccumulateChangeEvent(inst,nativeEvent,nativeEventTarget);return event;}}if(handleEventFunc){handleEventFunc(topLevelType,targetNode,targetInst);}// When blurring, set the value attribute for number inputs
if(topLevelType==='topBlur'){handleControlledInputBlur(targetInst,targetNode);}}};var ChangeEventPlugin_1=ChangeEventPlugin;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMEventPluginOrder
 *//**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */var DOMEventPluginOrder=['ResponderEventPlugin','SimpleEventPlugin','TapEventPlugin','EnterLeaveEventPlugin','ChangeEventPlugin','SelectEventPlugin','BeforeInputEventPlugin'];var DOMEventPluginOrder_1=DOMEventPluginOrder;/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var UIEventInterface={view:function(event){if(event.view){return event.view;}var target=getEventTarget_1(event);if(target.window===target){// target is a window object
return target;}var doc=target.ownerDocument;// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
if(doc){return doc.defaultView||doc.parentWindow;}else{return window;}},detail:function(event){return event.detail||0;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticUIEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticUIEvent,UIEventInterface);var SyntheticUIEvent_1=SyntheticUIEvent;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 *//**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */var modifierKeyToProp={Alt:'altKey',Control:'ctrlKey',Meta:'metaKey',Shift:'shiftKey'};// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg){var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}var getEventModifierState_1=getEventModifierState;/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState_1,button:null,buttons:null,relatedTarget:function(event){return event.relatedTarget||(event.fromElement===event.srcElement?event.toElement:event.fromElement);}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticMouseEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent_1.augmentClass(SyntheticMouseEvent,MouseEventInterface);var SyntheticMouseEvent_1=SyntheticMouseEvent;var eventTypes$2={mouseEnter:{registrationName:'onMouseEnter',dependencies:['topMouseOut','topMouseOver']},mouseLeave:{registrationName:'onMouseLeave',dependencies:['topMouseOut','topMouseOver']}};var EnterLeaveEventPlugin={eventTypes:eventTypes$2,/**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */extractEvents:function(topLevelType,targetInst,nativeEvent,nativeEventTarget){if(topLevelType==='topMouseOver'&&(nativeEvent.relatedTarget||nativeEvent.fromElement)){return null;}if(topLevelType!=='topMouseOut'&&topLevelType!=='topMouseOver'){// Must not be a mouse in or mouse out - ignoring.
return null;}var win;if(nativeEventTarget.window===nativeEventTarget){// `nativeEventTarget` is probably a window object.
win=nativeEventTarget;}else{// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=nativeEventTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else{win=window;}}var from;var to;if(topLevelType==='topMouseOut'){from=targetInst;var related=nativeEvent.relatedTarget||nativeEvent.toElement;to=related?ReactDOMComponentTree_1.getClosestInstanceFromNode(related):null;}else{// Moving to a node from outside the window.
from=null;to=targetInst;}if(from===to){// Nothing pertains to our managed components.
return null;}var fromNode=from==null?win:ReactDOMComponentTree_1.getNodeFromInstance(from);var toNode=to==null?win:ReactDOMComponentTree_1.getNodeFromInstance(to);var leave=SyntheticMouseEvent_1.getPooled(eventTypes$2.mouseLeave,from,nativeEvent,nativeEventTarget);leave.type='mouseleave';leave.target=fromNode;leave.relatedTarget=toNode;var enter=SyntheticMouseEvent_1.getPooled(eventTypes$2.mouseEnter,to,nativeEvent,nativeEventTarget);enter.type='mouseenter';enter.target=toNode;enter.relatedTarget=fromNode;EventPropagators_1.accumulateEnterLeaveDispatches(leave,enter,from,to);return[leave,enter];}};var EnterLeaveEventPlugin_1=EnterLeaveEventPlugin;var DOCUMENT_NODE$2=HTMLNodeType_1.DOCUMENT_NODE;var skipSelectionChangeEvent=ExecutionEnvironment.canUseDOM&&'documentMode'in document&&document.documentMode<=11;var eventTypes$3={select:{phasedRegistrationNames:{bubbled:'onSelect',captured:'onSelectCapture'},dependencies:['topBlur','topContextMenu','topFocus','topKeyDown','topKeyUp','topMouseDown','topMouseUp','topSelectionChange']}};var activeElement=null;var activeElementInst=null;var lastSelection=null;var mouseDown=false;// Track whether all listeners exists for this plugin. If none exist, we do
// not extract events. See #3639.
var isListeningToAllDependencies=ReactBrowserEventEmitter_1.isListeningToAllDependencies;/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getSelection(node){if('selectionStart'in node&&ReactInputSelection_1.hasSelectionCapabilities(node)){return{start:node.selectionStart,end:node.selectionEnd};}else if(window.getSelection){var selection=window.getSelection();return{anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}}/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */function constructSelectEvent(nativeEvent,nativeEventTarget){// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
if(mouseDown||activeElement==null||activeElement!==getActiveElement()){return null;}// Only fire when selection has actually changed.
var currentSelection=getSelection(activeElement);if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){lastSelection=currentSelection;var syntheticEvent=SyntheticEvent_1.getPooled(eventTypes$3.select,activeElementInst,nativeEvent,nativeEventTarget);syntheticEvent.type='select';syntheticEvent.target=activeElement;EventPropagators_1.accumulateTwoPhaseDispatches(syntheticEvent);return syntheticEvent;}return null;}/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */var SelectEventPlugin={eventTypes:eventTypes$3,extractEvents:function(topLevelType,targetInst,nativeEvent,nativeEventTarget){var doc=nativeEventTarget.window===nativeEventTarget?nativeEventTarget.document:nativeEventTarget.nodeType===DOCUMENT_NODE$2?nativeEventTarget:nativeEventTarget.ownerDocument;if(!doc||!isListeningToAllDependencies('onSelect',doc)){return null;}var targetNode=targetInst?ReactDOMComponentTree_1.getNodeFromInstance(targetInst):window;switch(topLevelType){// Track the input node that has focus.
case'topFocus':if(isTextInputElement_1(targetNode)||targetNode.contentEditable==='true'){activeElement=targetNode;activeElementInst=targetInst;lastSelection=null;}break;case'topBlur':activeElement=null;activeElementInst=null;lastSelection=null;break;// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case'topMouseDown':mouseDown=true;break;case'topContextMenu':case'topMouseUp':mouseDown=false;return constructSelectEvent(nativeEvent,nativeEventTarget);// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case'topSelectionChange':if(skipSelectionChangeEvent){break;}// falls through
case'topKeyDown':case'topKeyUp':return constructSelectEvent(nativeEvent,nativeEventTarget);}return null;}};var SelectEventPlugin_1=SelectEventPlugin;/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */var AnimationEventInterface={animationName:null,elapsedTime:null,pseudoElement:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticAnimationEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticAnimationEvent,AnimationEventInterface);var SyntheticAnimationEvent_1=SyntheticAnimationEvent;/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */var ClipboardEventInterface={clipboardData:function(event){return'clipboardData'in event?event.clipboardData:window.clipboardData;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticClipboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface);var SyntheticClipboardEvent_1=SyntheticClipboardEvent;/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var FocusEventInterface={relatedTarget:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticFocusEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent_1.augmentClass(SyntheticFocusEvent,FocusEventInterface);var SyntheticFocusEvent_1=SyntheticFocusEvent;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 *//**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode'in nativeEvent){charCode=nativeEvent.charCode;// FF does not set `charCode` for the Enter-key, check against `keyCode`.
if(charCode===0&&keyCode===13){charCode=13;}}else{// IE8 does not implement `charCode`, but `keyCode` has the correct value.
charCode=keyCode;}// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
if(charCode>=32||charCode===13){return charCode;}return 0;}var getEventCharCode_1=getEventCharCode;/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var normalizeKey={Esc:'Escape',Spacebar:' ',Left:'ArrowLeft',Up:'ArrowUp',Right:'ArrowRight',Down:'ArrowDown',Del:'Delete',Win:'OS',Menu:'ContextMenu',Apps:'ContextMenu',Scroll:'ScrollLock',MozPrintableKey:'Unidentified'};/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var translateToKey={8:'Backspace',9:'Tab',12:'Clear',13:'Enter',16:'Shift',17:'Control',18:'Alt',19:'Pause',20:'CapsLock',27:'Escape',32:' ',33:'PageUp',34:'PageDown',35:'End',36:'Home',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',45:'Insert',46:'Delete',112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',144:'NumLock',145:'ScrollLock',224:'Meta'};/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function getEventKey(nativeEvent){if(nativeEvent.key){// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var key=normalizeKey[nativeEvent.key]||nativeEvent.key;if(key!=='Unidentified'){return key;}}// Browser does not implement `key`, polyfill as much of it as we can.
if(nativeEvent.type==='keypress'){var charCode=getEventCharCode_1(nativeEvent);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return charCode===13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){// While user keyboard layout determines the actual meaning of each
// `keyCode` value, almost all function keys have a universal value.
return translateToKey[nativeEvent.keyCode]||'Unidentified';}return'';}var getEventKey_1=getEventKey;/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var KeyboardEventInterface={key:getEventKey_1,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState_1,// Legacy Interface
charCode:function(event){// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
if(event.type==='keypress'){return getEventCharCode_1(event);}return 0;},keyCode:function(event){// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;},which:function(event){// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
if(event.type==='keypress'){return getEventCharCode_1(event);}if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticKeyboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent_1.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface);var SyntheticKeyboardEvent_1=SyntheticKeyboardEvent;/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var DragEventInterface={dataTransfer:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticDragEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent_1.augmentClass(SyntheticDragEvent,DragEventInterface);var SyntheticDragEvent_1=SyntheticDragEvent;/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */var TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState_1};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticTouchEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent_1.augmentClass(SyntheticTouchEvent,TouchEventInterface);var SyntheticTouchEvent_1=SyntheticTouchEvent;/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */var TransitionEventInterface={propertyName:null,elapsedTime:null,pseudoElement:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticTransitionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticTransitionEvent,TransitionEventInterface);var SyntheticTransitionEvent_1=SyntheticTransitionEvent;/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var WheelEventInterface={deltaX:function(event){return'deltaX'in event?event.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
'wheelDeltaX'in event?-event.wheelDeltaX:0;},deltaY:function(event){return'deltaY'in event?event.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
'wheelDeltaY'in event?-event.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
'wheelDelta'in event?-event.wheelDelta:0;},deltaZ:null,// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */function SyntheticWheelEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent_1.augmentClass(SyntheticWheelEvent,WheelEventInterface);var SyntheticWheelEvent_1=SyntheticWheelEvent;/**
 * Turns
 * ['abort', ...]
 * into
 * eventTypes = {
 *   'abort': {
 *     phasedRegistrationNames: {
 *       bubbled: 'onAbort',
 *       captured: 'onAbortCapture',
 *     },
 *     dependencies: ['topAbort'],
 *   },
 *   ...
 * };
 * topLevelEventsToDispatchConfig = {
 *   'topAbort': { sameConfig }
 * };
 */var eventTypes$4={};var topLevelEventsToDispatchConfig={};['abort','animationEnd','animationIteration','animationStart','blur','cancel','canPlay','canPlayThrough','click','close','contextMenu','copy','cut','doubleClick','drag','dragEnd','dragEnter','dragExit','dragLeave','dragOver','dragStart','drop','durationChange','emptied','encrypted','ended','error','focus','input','invalid','keyDown','keyPress','keyUp','load','loadedData','loadedMetadata','loadStart','mouseDown','mouseMove','mouseOut','mouseOver','mouseUp','paste','pause','play','playing','progress','rateChange','reset','scroll','seeked','seeking','stalled','submit','suspend','timeUpdate','toggle','touchCancel','touchEnd','touchMove','touchStart','transitionEnd','volumeChange','waiting','wheel'].forEach(function(event){var capitalizedEvent=event[0].toUpperCase()+event.slice(1);var onEvent='on'+capitalizedEvent;var topEvent='top'+capitalizedEvent;var type={phasedRegistrationNames:{bubbled:onEvent,captured:onEvent+'Capture'},dependencies:[topEvent]};eventTypes$4[event]=type;topLevelEventsToDispatchConfig[topEvent]=type;});var SimpleEventPlugin={eventTypes:eventTypes$4,extractEvents:function(topLevelType,targetInst,nativeEvent,nativeEventTarget){var dispatchConfig=topLevelEventsToDispatchConfig[topLevelType];if(!dispatchConfig){return null;}var EventConstructor;switch(topLevelType){case'topAbort':case'topCancel':case'topCanPlay':case'topCanPlayThrough':case'topClose':case'topDurationChange':case'topEmptied':case'topEncrypted':case'topEnded':case'topError':case'topInput':case'topInvalid':case'topLoad':case'topLoadedData':case'topLoadedMetadata':case'topLoadStart':case'topPause':case'topPlay':case'topPlaying':case'topProgress':case'topRateChange':case'topReset':case'topSeeked':case'topSeeking':case'topStalled':case'topSubmit':case'topSuspend':case'topTimeUpdate':case'topToggle':case'topVolumeChange':case'topWaiting':// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
EventConstructor=SyntheticEvent_1;break;case'topKeyPress':// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(getEventCharCode_1(nativeEvent)===0){return null;}/* falls through */case'topKeyDown':case'topKeyUp':EventConstructor=SyntheticKeyboardEvent_1;break;case'topBlur':case'topFocus':EventConstructor=SyntheticFocusEvent_1;break;case'topClick':// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(nativeEvent.button===2){return null;}/* falls through */case'topDoubleClick':case'topMouseDown':case'topMouseMove':case'topMouseUp':// TODO: Disabled elements should not respond to mouse events
/* falls through */case'topMouseOut':case'topMouseOver':case'topContextMenu':EventConstructor=SyntheticMouseEvent_1;break;case'topDrag':case'topDragEnd':case'topDragEnter':case'topDragExit':case'topDragLeave':case'topDragOver':case'topDragStart':case'topDrop':EventConstructor=SyntheticDragEvent_1;break;case'topTouchCancel':case'topTouchEnd':case'topTouchMove':case'topTouchStart':EventConstructor=SyntheticTouchEvent_1;break;case'topAnimationEnd':case'topAnimationIteration':case'topAnimationStart':EventConstructor=SyntheticAnimationEvent_1;break;case'topTransitionEnd':EventConstructor=SyntheticTransitionEvent_1;break;case'topScroll':EventConstructor=SyntheticUIEvent_1;break;case'topWheel':EventConstructor=SyntheticWheelEvent_1;break;case'topCopy':case'topCut':case'topPaste':EventConstructor=SyntheticClipboardEvent_1;break;}!EventConstructor?invariant(false,'SimpleEventPlugin: Unhandled event type, `%s`.',topLevelType):void 0;var event=EventConstructor.getPooled(dispatchConfig,targetInst,nativeEvent,nativeEventTarget);EventPropagators_1.accumulateTwoPhaseDispatches(event);return event;}};var SimpleEventPlugin_1=SimpleEventPlugin;ReactDOMEventListener_1.setHandleTopLevel(ReactBrowserEventEmitter_1.handleTopLevel);/**
 * Inject modules for resolving DOM hierarchy and plugin ordering.
 */EventPluginHub_1.injection.injectEventPluginOrder(DOMEventPluginOrder_1);EventPluginUtils_1.injection.injectComponentTree(ReactDOMComponentTree_1);/**
 * Some important event plugins included by default (without having to require
 * them).
 */EventPluginHub_1.injection.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin_1,EnterLeaveEventPlugin:EnterLeaveEventPlugin_1,ChangeEventPlugin:ChangeEventPlugin_1,SelectEventPlugin:SelectEventPlugin_1,BeforeInputEventPlugin:BeforeInputEventPlugin_1});/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ARIADOMPropertyConfig
 */var ARIADOMPropertyConfig={Properties:{// Global States and Properties
'aria-current':0,// state
'aria-details':0,'aria-disabled':0,// state
'aria-hidden':0,// state
'aria-invalid':0,// state
'aria-keyshortcuts':0,'aria-label':0,'aria-roledescription':0,// Widget Attributes
'aria-autocomplete':0,'aria-checked':0,'aria-expanded':0,'aria-haspopup':0,'aria-level':0,'aria-modal':0,'aria-multiline':0,'aria-multiselectable':0,'aria-orientation':0,'aria-placeholder':0,'aria-pressed':0,'aria-readonly':0,'aria-required':0,'aria-selected':0,'aria-sort':0,'aria-valuemax':0,'aria-valuemin':0,'aria-valuenow':0,'aria-valuetext':0,// Live Region Attributes
'aria-atomic':0,'aria-busy':0,'aria-live':0,'aria-relevant':0,// Drag-and-Drop Attributes
'aria-dropeffect':0,'aria-grabbed':0,// Relationship Attributes
'aria-activedescendant':0,'aria-colcount':0,'aria-colindex':0,'aria-colspan':0,'aria-controls':0,'aria-describedby':0,'aria-errormessage':0,'aria-flowto':0,'aria-labelledby':0,'aria-owns':0,'aria-posinset':0,'aria-rowcount':0,'aria-rowindex':0,'aria-rowspan':0,'aria-setsize':0},DOMAttributeNames:{},DOMPropertyNames:{}};var ARIADOMPropertyConfig_1=ARIADOMPropertyConfig;var MUST_USE_PROPERTY=DOMProperty_1.injection.MUST_USE_PROPERTY;var HAS_BOOLEAN_VALUE=DOMProperty_1.injection.HAS_BOOLEAN_VALUE;var HAS_NUMERIC_VALUE=DOMProperty_1.injection.HAS_NUMERIC_VALUE;var HAS_POSITIVE_NUMERIC_VALUE=DOMProperty_1.injection.HAS_POSITIVE_NUMERIC_VALUE;var HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty_1.injection.HAS_OVERLOADED_BOOLEAN_VALUE;var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(new RegExp('^(data|aria)-['+DOMProperty_1.ATTRIBUTE_NAME_CHAR+']*$')),Properties:{/**
     * Standard Properties
     */accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:HAS_BOOLEAN_VALUE,allowTransparency:0,alt:0,// specifies target context for links with `preload` type
as:0,async:HAS_BOOLEAN_VALUE,autoComplete:0,// autoFocus is polyfilled/normalized by AutoFocusUtils
// autoFocus: HAS_BOOLEAN_VALUE,
autoPlay:HAS_BOOLEAN_VALUE,capture:HAS_BOOLEAN_VALUE,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,cite:0,classID:0,className:0,cols:HAS_POSITIVE_NUMERIC_VALUE,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:HAS_BOOLEAN_VALUE,controlsList:0,coords:0,crossOrigin:0,data:0,// For `<object />` acts as `src`.
dateTime:0,'default':HAS_BOOLEAN_VALUE,defer:HAS_BOOLEAN_VALUE,dir:0,disabled:HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:HAS_BOOLEAN_VALUE,formTarget:0,frameBorder:0,headers:0,height:0,hidden:HAS_BOOLEAN_VALUE,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:HAS_BOOLEAN_VALUE,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,// Caution; `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`.
multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,name:0,nonce:0,noValidate:HAS_BOOLEAN_VALUE,open:HAS_BOOLEAN_VALUE,optimum:0,pattern:0,placeholder:0,playsInline:HAS_BOOLEAN_VALUE,poster:0,preload:0,profile:0,radioGroup:0,readOnly:HAS_BOOLEAN_VALUE,referrerPolicy:0,rel:0,required:HAS_BOOLEAN_VALUE,reversed:HAS_BOOLEAN_VALUE,role:0,rows:HAS_POSITIVE_NUMERIC_VALUE,rowSpan:HAS_NUMERIC_VALUE,sandbox:0,scope:0,scoped:HAS_BOOLEAN_VALUE,scrolling:0,seamless:HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,shape:0,size:HAS_POSITIVE_NUMERIC_VALUE,sizes:0,// support for projecting regular DOM Elements via V1 named slots ( shadow dom )
slot:0,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:HAS_NUMERIC_VALUE,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,// Setting .type throws on non-<input> tags
type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,/**
     * RDFa Properties
     */about:0,datatype:0,inlist:0,prefix:0,// property is also supported for OpenGraph in meta tags.
property:0,resource:0,'typeof':0,vocab:0,/**
     * Non-standard Properties
     */// autoCapitalize and autoCorrect are supported in Mobile Safari for
// keyboard hints.
autoCapitalize:0,autoCorrect:0,// autoSave allows WebKit/Blink to persist values of input fields on page reloads
autoSave:0,// color is for Safari mask-icon link
color:0,// itemProp, itemScope, itemType are for
// Microdata support. See http://schema.org/docs/gs.html
itemProp:0,itemScope:HAS_BOOLEAN_VALUE,itemType:0,// itemID and itemRef are for Microdata support as well but
// only specified in the WHATWG spec document. See
// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
itemID:0,itemRef:0,// results show looking glass icon and recent searches on input
// search fields in WebKit/Blink
results:0,// IE-only attribute that specifies security restrictions on an iframe
// as an alternative to the sandbox attribute on IE<10
security:0,// IE-only attribute that controls focus behavior
unselectable:0},DOMAttributeNames:{acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'},DOMPropertyNames:{},DOMMutationMethods:{value:function(node,value){if(value==null){return node.removeAttribute('value');}// Number inputs get special treatment due to some edge cases in
// Chrome. Let everything else assign the value attribute as normal.
// https://github.com/facebook/react/issues/7253#issuecomment-236074326
if(node.type!=='number'||node.hasAttribute('value')===false){node.setAttribute('value',''+value);}else if(node.validity&&!node.validity.badInput&&node.ownerDocument.activeElement!==node){// Don't assign an attribute if validation reports bad
// input. Chrome will clear the value. Additionally, don't
// operate on inputs that have focus, otherwise Chrome might
// strip off trailing decimal places and cause the user's
// cursor position to jump to the beginning of the input.
//
// In ReactDOMInput, we have an onBlur event that will trigger
// this function again when focus is lost.
node.setAttribute('value',''+value);}}}};var HTMLDOMPropertyConfig_1=HTMLDOMPropertyConfig;/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */var NS={xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace'};// We use attributes for everything SVG so let's avoid some duplication and run
// code instead.
// The following are all specified in the HTML config already so we exclude here.
// - class (as className)
// - color
// - height
// - id
// - lang
// - max
// - media
// - method
// - min
// - name
// - style
// - target
// - type
// - width
var ATTRS={accentHeight:'accent-height',accumulate:0,additive:0,alignmentBaseline:'alignment-baseline',allowReorder:'allowReorder',alphabetic:0,amplitude:0,arabicForm:'arabic-form',ascent:0,attributeName:'attributeName',attributeType:'attributeType',autoReverse:'autoReverse',azimuth:0,baseFrequency:'baseFrequency',baseProfile:'baseProfile',baselineShift:'baseline-shift',bbox:0,begin:0,bias:0,by:0,calcMode:'calcMode',capHeight:'cap-height',clip:0,clipPath:'clip-path',clipRule:'clip-rule',clipPathUnits:'clipPathUnits',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorProfile:'color-profile',colorRendering:'color-rendering',contentScriptType:'contentScriptType',contentStyleType:'contentStyleType',cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:'diffuseConstant',direction:0,display:0,divisor:0,dominantBaseline:'dominant-baseline',dur:0,dx:0,dy:0,edgeMode:'edgeMode',elevation:0,enableBackground:'enable-background',end:0,exponent:0,externalResourcesRequired:'externalResourcesRequired',fill:0,fillOpacity:'fill-opacity',fillRule:'fill-rule',filter:0,filterRes:'filterRes',filterUnits:'filterUnits',floodColor:'flood-color',floodOpacity:'flood-opacity',focusable:0,fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',glyphRef:'glyphRef',gradientTransform:'gradientTransform',gradientUnits:'gradientUnits',hanging:0,horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',ideographic:0,imageRendering:'image-rendering','in':0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:'kernelMatrix',kernelUnitLength:'kernelUnitLength',kerning:0,keyPoints:'keyPoints',keySplines:'keySplines',keyTimes:'keyTimes',lengthAdjust:'lengthAdjust',letterSpacing:'letter-spacing',lightingColor:'lighting-color',limitingConeAngle:'limitingConeAngle',local:0,markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',markerHeight:'markerHeight',markerUnits:'markerUnits',markerWidth:'markerWidth',mask:0,maskContentUnits:'maskContentUnits',maskUnits:'maskUnits',mathematical:0,mode:0,numOctaves:'numOctaves',offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',panose1:'panose-1',pathLength:'pathLength',patternContentUnits:'patternContentUnits',patternTransform:'patternTransform',patternUnits:'patternUnits',pointerEvents:'pointer-events',points:0,pointsAtX:'pointsAtX',pointsAtY:'pointsAtY',pointsAtZ:'pointsAtZ',preserveAlpha:'preserveAlpha',preserveAspectRatio:'preserveAspectRatio',primitiveUnits:'primitiveUnits',r:0,radius:0,refX:'refX',refY:'refY',renderingIntent:'rendering-intent',repeatCount:'repeatCount',repeatDur:'repeatDur',requiredExtensions:'requiredExtensions',requiredFeatures:'requiredFeatures',restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:'shape-rendering',slope:0,spacing:0,specularConstant:'specularConstant',specularExponent:'specularExponent',speed:0,spreadMethod:'spreadMethod',startOffset:'startOffset',stdDeviation:'stdDeviation',stemh:0,stemv:0,stitchTiles:'stitchTiles',stopColor:'stop-color',stopOpacity:'stop-opacity',strikethroughPosition:'strikethrough-position',strikethroughThickness:'strikethrough-thickness',string:0,stroke:0,strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeMiterlimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',surfaceScale:'surfaceScale',systemLanguage:'systemLanguage',tableValues:'tableValues',targetX:'targetX',targetY:'targetY',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',textLength:'textLength',to:0,transform:0,u1:0,u2:0,underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicode:0,unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',values:0,vectorEffect:'vector-effect',version:0,vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',viewBox:'viewBox',viewTarget:'viewTarget',visibility:0,widths:0,wordSpacing:'word-spacing',writingMode:'writing-mode',x:0,xHeight:'x-height',x1:0,x2:0,xChannelSelector:'xChannelSelector',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type',xmlBase:'xml:base',xmlns:0,xmlnsXlink:'xmlns:xlink',xmlLang:'xml:lang',xmlSpace:'xml:space',y:0,y1:0,y2:0,yChannelSelector:'yChannelSelector',z:0,zoomAndPan:'zoomAndPan'};var SVGDOMPropertyConfig={Properties:{},DOMAttributeNamespaces:{xlinkActuate:NS.xlink,xlinkArcrole:NS.xlink,xlinkHref:NS.xlink,xlinkRole:NS.xlink,xlinkShow:NS.xlink,xlinkTitle:NS.xlink,xlinkType:NS.xlink,xmlBase:NS.xml,xmlLang:NS.xml,xmlSpace:NS.xml},DOMAttributeNames:{}};Object.keys(ATTRS).forEach(function(key){SVGDOMPropertyConfig.Properties[key]=0;if(ATTRS[key]){SVGDOMPropertyConfig.DOMAttributeNames[key]=ATTRS[key];}});var SVGDOMPropertyConfig_1=SVGDOMPropertyConfig;DOMProperty_1.injection.injectDOMPropertyConfig(ARIADOMPropertyConfig_1);DOMProperty_1.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig_1);DOMProperty_1.injection.injectDOMPropertyConfig(SVGDOMPropertyConfig_1);var isValidElement=react.isValidElement;var injectInternals=ReactFiberDevToolsHook.injectInternals;var ELEMENT_NODE=HTMLNodeType_1.ELEMENT_NODE;var TEXT_NODE=HTMLNodeType_1.TEXT_NODE;var COMMENT_NODE=HTMLNodeType_1.COMMENT_NODE;var DOCUMENT_NODE=HTMLNodeType_1.DOCUMENT_NODE;var DOCUMENT_FRAGMENT_NODE=HTMLNodeType_1.DOCUMENT_FRAGMENT_NODE;var ROOT_ATTRIBUTE_NAME=DOMProperty_1.ROOT_ATTRIBUTE_NAME;var createElement=ReactDOMFiberComponent_1.createElement;var getChildNamespace=ReactDOMFiberComponent_1.getChildNamespace;var setInitialProperties=ReactDOMFiberComponent_1.setInitialProperties;var diffProperties=ReactDOMFiberComponent_1.diffProperties;var updateProperties=ReactDOMFiberComponent_1.updateProperties;var diffHydratedProperties=ReactDOMFiberComponent_1.diffHydratedProperties;var diffHydratedText=ReactDOMFiberComponent_1.diffHydratedText;var warnForDeletedHydratableElement=ReactDOMFiberComponent_1.warnForDeletedHydratableElement;var warnForDeletedHydratableText=ReactDOMFiberComponent_1.warnForDeletedHydratableText;var warnForInsertedHydratedElement=ReactDOMFiberComponent_1.warnForInsertedHydratedElement;var warnForInsertedHydratedText=ReactDOMFiberComponent_1.warnForInsertedHydratedText;var precacheFiberNode=ReactDOMComponentTree_1.precacheFiberNode;var updateFiberProps=ReactDOMComponentTree_1.updateFiberProps;{var lowPriorityWarning=lowPriorityWarning_1;var warning=require$$0;var validateDOMNesting=validateDOMNesting_1;var updatedAncestorInfo=validateDOMNesting.updatedAncestorInfo;if(typeof Map!=='function'||Map.prototype==null||typeof Map.prototype.forEach!=='function'||typeof Set!=='function'||Set.prototype==null||typeof Set.prototype.clear!=='function'||typeof Set.prototype.forEach!=='function'){warning(false,'React depends on Map and Set built-in types. Make sure that you load a '+'polyfill in older browsers. http://fb.me/react-polyfills');}}ReactControlledComponent_1.injection.injectFiberControlledHostComponent(ReactDOMFiberComponent_1);findDOMNode_1._injectFiber(function(fiber){return DOMRenderer.findHostInstance(fiber);});var eventsEnabled=null;var selectionInformation=null;/**
 * True if the supplied DOM node is a valid node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid DOM node.
 * @internal
 */function isValidContainer(node){return!!(node&&(node.nodeType===ELEMENT_NODE||node.nodeType===DOCUMENT_NODE||node.nodeType===DOCUMENT_FRAGMENT_NODE||node.nodeType===COMMENT_NODE&&node.nodeValue===' react-mount-point-unstable '));}function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType===DOCUMENT_NODE){return container.documentElement;}else{return container.firstChild;}}function shouldHydrateDueToLegacyHeuristic(container){var rootElement=getReactRootElementInContainer(container);return!!(rootElement&&rootElement.nodeType===ELEMENT_NODE&&rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));}function shouldAutoFocusHostComponent(type,props){switch(type){case'button':case'input':case'select':case'textarea':return!!props.autoFocus;}return false;}var DOMRenderer=ReactFiberReconciler({getRootHostContext:function(rootContainerInstance){var type=void 0;var namespace=void 0;if(rootContainerInstance.nodeType===DOCUMENT_NODE){type='#document';var root=rootContainerInstance.documentElement;namespace=root?root.namespaceURI:getChildNamespace(null,'');}else{var container=rootContainerInstance.nodeType===COMMENT_NODE?rootContainerInstance.parentNode:rootContainerInstance;var ownNamespace=container.namespaceURI||null;type=container.tagName;namespace=getChildNamespace(ownNamespace,type);}{var validatedTag=type.toLowerCase();var _ancestorInfo=updatedAncestorInfo(null,validatedTag,null);return{namespace:namespace,ancestorInfo:_ancestorInfo};}return namespace;},getChildHostContext:function(parentHostContext,type){{var parentHostContextDev=parentHostContext;var _namespace=getChildNamespace(parentHostContextDev.namespace,type);var _ancestorInfo2=updatedAncestorInfo(parentHostContextDev.ancestorInfo,type,null);return{namespace:_namespace,ancestorInfo:_ancestorInfo2};}var parentNamespace=parentHostContext;return getChildNamespace(parentNamespace,type);},getPublicInstance:function(instance){return instance;},prepareForCommit:function(){eventsEnabled=ReactBrowserEventEmitter_1.isEnabled();selectionInformation=ReactInputSelection_1.getSelectionInformation();ReactBrowserEventEmitter_1.setEnabled(false);},resetAfterCommit:function(){ReactInputSelection_1.restoreSelection(selectionInformation);selectionInformation=null;ReactBrowserEventEmitter_1.setEnabled(eventsEnabled);eventsEnabled=null;},createInstance:function(type,props,rootContainerInstance,hostContext,internalInstanceHandle){var parentNamespace=void 0;{// TODO: take namespace into account when validating.
var hostContextDev=hostContext;validateDOMNesting(type,null,null,hostContextDev.ancestorInfo);if(typeof props.children==='string'||typeof props.children==='number'){var string=''+props.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type,null);validateDOMNesting(null,string,null,ownAncestorInfo);}parentNamespace=hostContextDev.namespace;}var domElement=createElement(type,props,rootContainerInstance,parentNamespace);precacheFiberNode(internalInstanceHandle,domElement);updateFiberProps(domElement,props);return domElement;},appendInitialChild:function(parentInstance,child){parentInstance.appendChild(child);},finalizeInitialChildren:function(domElement,type,props,rootContainerInstance){setInitialProperties(domElement,type,props,rootContainerInstance);return shouldAutoFocusHostComponent(type,props);},prepareUpdate:function(domElement,type,oldProps,newProps,rootContainerInstance,hostContext){{var hostContextDev=hostContext;if(typeof newProps.children!==typeof oldProps.children&&(typeof newProps.children==='string'||typeof newProps.children==='number')){var string=''+newProps.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type,null);validateDOMNesting(null,string,null,ownAncestorInfo);}}return diffProperties(domElement,type,oldProps,newProps,rootContainerInstance);},commitMount:function(domElement,type,newProps,internalInstanceHandle){domElement.focus();},commitUpdate:function(domElement,updatePayload,type,oldProps,newProps,internalInstanceHandle){// Update the props handle so that we know which props are the ones with
// with current event handlers.
updateFiberProps(domElement,newProps);// Apply the diff to the DOM node.
updateProperties(domElement,updatePayload,type,oldProps,newProps);},shouldSetTextContent:function(type,props){return type==='textarea'||typeof props.children==='string'||typeof props.children==='number'||typeof props.dangerouslySetInnerHTML==='object'&&props.dangerouslySetInnerHTML!==null&&typeof props.dangerouslySetInnerHTML.__html==='string';},resetTextContent:function(domElement){domElement.textContent='';},shouldDeprioritizeSubtree:function(type,props){return!!props.hidden;},createTextInstance:function(text,rootContainerInstance,hostContext,internalInstanceHandle){{var hostContextDev=hostContext;validateDOMNesting(null,text,null,hostContextDev.ancestorInfo);}var textNode=document.createTextNode(text);precacheFiberNode(internalInstanceHandle,textNode);return textNode;},commitTextUpdate:function(textInstance,oldText,newText){textInstance.nodeValue=newText;},appendChild:function(parentInstance,child){parentInstance.appendChild(child);},appendChildToContainer:function(container,child){if(container.nodeType===COMMENT_NODE){container.parentNode.insertBefore(child,container);}else{container.appendChild(child);}},insertBefore:function(parentInstance,child,beforeChild){parentInstance.insertBefore(child,beforeChild);},insertInContainerBefore:function(container,child,beforeChild){if(container.nodeType===COMMENT_NODE){container.parentNode.insertBefore(child,beforeChild);}else{container.insertBefore(child,beforeChild);}},removeChild:function(parentInstance,child){parentInstance.removeChild(child);},removeChildFromContainer:function(container,child){if(container.nodeType===COMMENT_NODE){container.parentNode.removeChild(child);}else{container.removeChild(child);}},canHydrateInstance:function(instance,type,props){return instance.nodeType===ELEMENT_NODE&&type===instance.nodeName.toLowerCase();},canHydrateTextInstance:function(instance,text){if(text===''){// Empty strings are not parsed by HTML so there won't be a correct match here.
return false;}return instance.nodeType===TEXT_NODE;},getNextHydratableSibling:function(instance){var node=instance.nextSibling;// Skip non-hydratable nodes.
while(node&&node.nodeType!==ELEMENT_NODE&&node.nodeType!==TEXT_NODE){node=node.nextSibling;}return node;},getFirstHydratableChild:function(parentInstance){var next=parentInstance.firstChild;// Skip non-hydratable nodes.
while(next&&next.nodeType!==ELEMENT_NODE&&next.nodeType!==TEXT_NODE){next=next.nextSibling;}return next;},hydrateInstance:function(instance,type,props,rootContainerInstance,internalInstanceHandle){precacheFiberNode(internalInstanceHandle,instance);// TODO: Possibly defer this until the commit phase where all the events
// get attached.
updateFiberProps(instance,props);return diffHydratedProperties(instance,type,props,rootContainerInstance);},hydrateTextInstance:function(textInstance,text,internalInstanceHandle){precacheFiberNode(internalInstanceHandle,textInstance);return diffHydratedText(textInstance,text);},didNotHydrateInstance:function(parentInstance,instance){if(instance.nodeType===1){warnForDeletedHydratableElement(parentInstance,instance);}else{warnForDeletedHydratableText(parentInstance,instance);}},didNotFindHydratableInstance:function(parentInstance,type,props){warnForInsertedHydratedElement(parentInstance,type,props);},didNotFindHydratableTextInstance:function(parentInstance,text){warnForInsertedHydratedText(parentInstance,text);},scheduleDeferredCallback:ReactDOMFrameScheduling.rIC,useSyncScheduling:!ReactDOMFeatureFlags_1.fiberAsyncScheduling});ReactGenericBatching_1.injection.injectFiberBatchedUpdates(DOMRenderer.batchedUpdates);var warnedAboutHydrateAPI=false;function renderSubtreeIntoContainer(parentComponent,children,container,forceHydrate,callback){invariant(isValidContainer(container),'Target container is not a DOM element.');{if(container._reactRootContainer&&container.nodeType!==COMMENT_NODE){var hostInstance=DOMRenderer.findHostInstanceWithNoPortals(container._reactRootContainer.current);if(hostInstance){warning(hostInstance.parentNode===container,'render(...): It looks like the React-rendered content of this '+'container was removed without using React. This is not '+'supported and will cause errors. Instead, call '+'ReactDOM.unmountComponentAtNode to empty a container.');}}var isRootRenderedBySomeReact=!!container._reactRootContainer;var rootEl=getReactRootElementInContainer(container);var hasNonRootReactChild=!!(rootEl&&ReactDOMComponentTree_1.getInstanceFromNode(rootEl));warning(!hasNonRootReactChild||isRootRenderedBySomeReact,'render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.');warning(container.nodeType!==ELEMENT_NODE||!container.tagName||container.tagName.toUpperCase()!=='BODY','render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.');}var root=container._reactRootContainer;if(!root){var shouldHydrate=forceHydrate||shouldHydrateDueToLegacyHeuristic(container);// First clear any existing content.
if(!shouldHydrate){var warned=false;var rootSibling=void 0;while(rootSibling=container.lastChild){{if(!warned&&rootSibling.nodeType===ELEMENT_NODE&&rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)){warned=true;warning(false,'render(): Target node has markup rendered by React, but there '+'are unrelated nodes as well. This is most commonly caused by '+'white-space inserted around server-rendered markup.');}}container.removeChild(rootSibling);}}{if(shouldHydrate&&!forceHydrate&&!warnedAboutHydrateAPI){warnedAboutHydrateAPI=true;lowPriorityWarning(false,'render(): Calling ReactDOM.render() to hydrate server-rendered markup '+'will stop working in React v17. Replace the ReactDOM.render() call '+'with ReactDOM.hydrate() if you want React to attach to the server HTML.');}}var newRoot=DOMRenderer.createContainer(container);root=container._reactRootContainer=newRoot;// Initial mount should not be batched.
DOMRenderer.unbatchedUpdates(function(){DOMRenderer.updateContainer(children,newRoot,parentComponent,callback);});}else{DOMRenderer.updateContainer(children,root,parentComponent,callback);}return DOMRenderer.getPublicRootInstance(root);}var ReactDOMFiber={hydrate:function(element,container,callback){// TODO: throw or warn if we couldn't hydrate?
return renderSubtreeIntoContainer(null,element,container,true,callback);},render:function(element,container,callback){if(ReactFeatureFlags_1.disableNewFiberFeatures){// Top-level check occurs here instead of inside child reconciler
// because requirements vary between renderers. E.g. React Art
// allows arrays.
if(!isValidElement(element)){if(typeof element==='string'){invariant(false,'ReactDOM.render(): Invalid component element. Instead of '+"passing a string like 'div', pass "+"React.createElement('div') or <div />.");}else if(typeof element==='function'){invariant(false,'ReactDOM.render(): Invalid component element. Instead of '+'passing a class like Foo, pass React.createElement(Foo) '+'or <Foo />.');}else if(element!=null&&typeof element.props!=='undefined'){// Check if it quacks like an element
invariant(false,'ReactDOM.render(): Invalid component element. This may be '+'caused by unintentionally loading two independent copies '+'of React.');}else{invariant(false,'ReactDOM.render(): Invalid component element.');}}}return renderSubtreeIntoContainer(null,element,container,false,callback);},unstable_renderSubtreeIntoContainer:function(parentComponent,element,containerNode,callback){!(parentComponent!=null&&ReactInstanceMap_1.has(parentComponent))?invariant(false,'parentComponent must be a valid React Component'):void 0;return renderSubtreeIntoContainer(parentComponent,element,containerNode,false,callback);},unmountComponentAtNode:function(container){!isValidContainer(container)?invariant(false,'unmountComponentAtNode(...): Target container is not a DOM element.'):void 0;if(container._reactRootContainer){{var rootEl=getReactRootElementInContainer(container);var renderedByDifferentReact=rootEl&&!ReactDOMComponentTree_1.getInstanceFromNode(rootEl);warning(!renderedByDifferentReact,"unmountComponentAtNode(): The node you're attempting to unmount "+'was rendered by another copy of React.');}// Unmount should not be batched.
DOMRenderer.unbatchedUpdates(function(){renderSubtreeIntoContainer(null,null,container,false,function(){container._reactRootContainer=null;});});// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
return true;}else{{var _rootEl=getReactRootElementInContainer(container);var hasNonRootReactChild=!!(_rootEl&&ReactDOMComponentTree_1.getInstanceFromNode(_rootEl));// Check if the container itself is a React root node.
var isContainerReactRoot=container.nodeType===1&&isValidContainer(container.parentNode)&&!!container.parentNode._reactRootContainer;warning(!hasNonRootReactChild,"unmountComponentAtNode(): The node you're attempting to unmount "+'was rendered by React and is not a top-level container. %s',isContainerReactRoot?'You may have accidentally passed in a React root node instead '+'of its container.':'Instead, have the parent component update its state and '+'rerender in order to remove this component.');}return false;}},findDOMNode:findDOMNode_1,unstable_createPortal:function(children,container){var key=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;// TODO: pass ReactDOM portal implementation as third argument
return ReactPortal.createPortal(children,container,null,key);},unstable_batchedUpdates:ReactGenericBatching_1.batchedUpdates,unstable_deferredUpdates:DOMRenderer.deferredUpdates,flushSync:DOMRenderer.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{// For TapEventPlugin which is popular in open source
EventPluginHub:EventPluginHub_1,// Used by test-utils
EventPluginRegistry:EventPluginRegistry_1,EventPropagators:EventPropagators_1,ReactControlledComponent:ReactControlledComponent_1,ReactDOMComponentTree:ReactDOMComponentTree_1,ReactDOMEventListener:ReactDOMEventListener_1}};var foundDevTools=injectInternals({findFiberByHostInstance:ReactDOMComponentTree_1.getClosestInstanceFromNode,findHostInstanceByFiber:DOMRenderer.findHostInstance,// This is an enum because we may add more (e.g. profiler build)
bundleType:1,version:ReactVersion});{if(!foundDevTools&&ExecutionEnvironment.canUseDOM&&window.top===window.self){// If we're in Chrome or Firefox, provide a download link if not installed.
if(navigator.userAgent.indexOf('Chrome')>-1&&navigator.userAgent.indexOf('Edge')===-1||navigator.userAgent.indexOf('Firefox')>-1){var protocol=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
if(/^(https?|file):$/.test(protocol)){console.info('%cDownload the React DevTools '+'for a better development experience: '+'https://fb.me/react-devtools'+(protocol==='file:'?'\nYou might need to use a local HTTP server (instead of file://): '+'https://fb.me/react-devtools-faq':''),'font-weight:bold');}}}}var ReactDOMFiberEntry=ReactDOMFiber;$m['react-dom/cjs/react-dom.development'].exports=ReactDOMFiberEntry;})();}
/*≠≠ node_modules/react-dom/cjs/react-dom.development.js ≠≠*/


/*== node_modules/react-dom/cjs/react-dom.production.min.js ==*/
$m['react-dom/cjs/react-dom.production.min'] = { exports: {} };
"use strict";
function reactdomcjsreactdomproductionmin__e(e) {
  for (var t = arguments.length - 1, n = "Minified React error #" + reactdomcjsreactdomproductionmin__e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + reactdomcjsreactdomproductionmin__e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o = new Error(n);throw o.name = "Invariant Violation", o.framesToPop = 1, o;
}function reactdomcjsreactdomproductionmin__t() {
  if (reactdomcjsreactdomproductionmin__wn) for (var e in reactdomcjsreactdomproductionmin__Nn) {
    var t = reactdomcjsreactdomproductionmin__Nn[e],
        r = reactdomcjsreactdomproductionmin__wn.indexOf(e);if (r > -1 || reactdomcjsreactdomproductionmin__xn("96", e), !reactdomcjsreactdomproductionmin__Sn.plugins[r]) {
      reactdomcjsreactdomproductionmin__t.extractEvents || reactdomcjsreactdomproductionmin__xn("97", e), reactdomcjsreactdomproductionmin__Sn.plugins[r] = reactdomcjsreactdomproductionmin__t;var o = reactdomcjsreactdomproductionmin__t.eventTypes;for (var a in o) n(o[a], reactdomcjsreactdomproductionmin__t, a) || reactdomcjsreactdomproductionmin__xn("98", a, e);
    }
  }
}function reactdomcjsreactdomproductionmin__n(e, t, n) {
  reactdomcjsreactdomproductionmin__Sn.eventNameDispatchConfigs.hasOwnProperty(reactdomcjsreactdomproductionmin__n) && reactdomcjsreactdomproductionmin__xn("99", reactdomcjsreactdomproductionmin__n), reactdomcjsreactdomproductionmin__Sn.eventNameDispatchConfigs[reactdomcjsreactdomproductionmin__n] = e;var o = e.phasedRegistrationNames;if (o) {
    for (var a in o) if (o.hasOwnProperty(a)) {
      var i = o[a];reactdomcjsreactdomproductionmin__r(i, t, reactdomcjsreactdomproductionmin__n);
    }return !0;
  }return !!e.registrationName && (reactdomcjsreactdomproductionmin__r(e.registrationName, t, reactdomcjsreactdomproductionmin__n), !0);
}function reactdomcjsreactdomproductionmin__r(e, t, n) {
  reactdomcjsreactdomproductionmin__Sn.registrationNameModules[e] && reactdomcjsreactdomproductionmin__xn("100", e), reactdomcjsreactdomproductionmin__Sn.registrationNameModules[e] = t, reactdomcjsreactdomproductionmin__Sn.registrationNameDependencies[e] = t.eventTypes[n].dependencies;
}function reactdomcjsreactdomproductionmin__o(e, t) {
  return (e & t) === t;
}function reactdomcjsreactdomproductionmin__a(e, t) {
  return e.nodeType === reactdomcjsreactdomproductionmin__Gn && e.getAttribute(reactdomcjsreactdomproductionmin__Jn) === "" + t || e.nodeType === reactdomcjsreactdomproductionmin__Zn && e.nodeValue === " react-text: " + t + " " || e.nodeType === reactdomcjsreactdomproductionmin__Zn && e.nodeValue === " react-empty: " + t + " ";
}function reactdomcjsreactdomproductionmin__i(e) {
  for (var t; t = e._renderedComponent;) e = t;return e;
}function reactdomcjsreactdomproductionmin__l(e, t) {
  var n = reactdomcjsreactdomproductionmin__i(e);n._hostNode = t, t[reactdomcjsreactdomproductionmin__nr] = n;
}function reactdomcjsreactdomproductionmin__u(e, t) {
  t[reactdomcjsreactdomproductionmin__nr] = e;
}function reactdomcjsreactdomproductionmin__s(e) {
  var t = e._hostNode;t && (delete t[reactdomcjsreactdomproductionmin__nr], e._hostNode = null);
}function reactdomcjsreactdomproductionmin__c(e, t) {
  if (!(e._flags & reactdomcjsreactdomproductionmin__er.hasCachedChildNodes)) {
    var n = e._renderedChildren,
        r = t.firstChild;e: for (var o in n) if (n.hasOwnProperty(o)) {
      var u = n[o],
          s = reactdomcjsreactdomproductionmin__i(u)._domID;if (0 !== s) {
        for (; null !== r; r = r.nextSibling) if (reactdomcjsreactdomproductionmin__a(r, s)) {
          reactdomcjsreactdomproductionmin__l(u, r);continue e;
        }reactdomcjsreactdomproductionmin__xn("32", s);
      }
    }e._flags |= reactdomcjsreactdomproductionmin__er.hasCachedChildNodes;
  }
}function reactdomcjsreactdomproductionmin__p(e) {
  if (e[reactdomcjsreactdomproductionmin__nr]) return e[reactdomcjsreactdomproductionmin__nr];for (var t = []; !e[reactdomcjsreactdomproductionmin__nr];) {
    if (t.push(e), !e.parentNode) return null;e = e.parentNode;
  }var n,
      r = e[reactdomcjsreactdomproductionmin__nr];if (r.tag === reactdomcjsreactdomproductionmin__$n || r.tag === reactdomcjsreactdomproductionmin__Xn) return r;for (; e && (r = e[reactdomcjsreactdomproductionmin__nr]); e = t.pop()) n = r, t.length && reactdomcjsreactdomproductionmin__c(r, e);return n;
}function reactdomcjsreactdomproductionmin__d(e) {
  var t = e[reactdomcjsreactdomproductionmin__nr];return t ? t.tag === reactdomcjsreactdomproductionmin__$n || t.tag === reactdomcjsreactdomproductionmin__Xn ? t : t._hostNode === e ? t : null : (t = reactdomcjsreactdomproductionmin__p(e), null != t && t._hostNode === e ? t : null);
}function reactdomcjsreactdomproductionmin__f(e) {
  if (e.tag === reactdomcjsreactdomproductionmin__$n || e.tag === reactdomcjsreactdomproductionmin__Xn) return e.stateNode;if (void 0 === e._hostNode && reactdomcjsreactdomproductionmin__xn("33"), e._hostNode) return e._hostNode;for (var t = []; !e._hostNode;) t.push(e), e._hostParent || reactdomcjsreactdomproductionmin__xn("34"), e = e._hostParent;for (; t.length; e = t.pop()) reactdomcjsreactdomproductionmin__c(e, e._hostNode);return e._hostNode;
}function reactdomcjsreactdomproductionmin__h(e) {
  return e[reactdomcjsreactdomproductionmin__rr] || null;
}function reactdomcjsreactdomproductionmin__g(e, t) {
  e[reactdomcjsreactdomproductionmin__rr] = t;
}function reactdomcjsreactdomproductionmin__v(e) {
  if ("function" == typeof e.getName) {
    return e.getName();
  }if ("number" == typeof e.tag) {
    var t = e,
        n = t.type;if ("string" == typeof n) return n;if ("function" == typeof n) return n.displayName || n.name;
  }return null;
}function reactdomcjsreactdomproductionmin__m(e) {
  var t = e;if (e.alternate) for (; t.return;) t = t.return;else {
    if ((t.effectTag & reactdomcjsreactdomproductionmin__yr) !== reactdomcjsreactdomproductionmin__mr) return reactdomcjsreactdomproductionmin__br;for (; t.return;) if (t = t.return, (t.effectTag & reactdomcjsreactdomproductionmin__yr) !== reactdomcjsreactdomproductionmin__mr) return reactdomcjsreactdomproductionmin__br;
  }return t.tag === reactdomcjsreactdomproductionmin__hr ? reactdomcjsreactdomproductionmin__Cr : reactdomcjsreactdomproductionmin__Er;
}function reactdomcjsreactdomproductionmin__y(e) {
  reactdomcjsreactdomproductionmin__m(e) !== reactdomcjsreactdomproductionmin__Cr && reactdomcjsreactdomproductionmin__xn("188");
}function reactdomcjsreactdomproductionmin__b(e) {
  var t = e.alternate;if (!t) {
    var n = reactdomcjsreactdomproductionmin__m(e);return n === reactdomcjsreactdomproductionmin__Er && reactdomcjsreactdomproductionmin__xn("188"), n === reactdomcjsreactdomproductionmin__br ? null : e;
  }for (var r = e, o = t;;) {
    var a = r.return,
        i = a ? a.alternate : null;if (!a || !i) break;if (a.child === i.child) {
      for (var l = a.child; l;) {
        if (l === r) return reactdomcjsreactdomproductionmin__y(a), e;if (l === o) return reactdomcjsreactdomproductionmin__y(a), t;l = l.sibling;
      }reactdomcjsreactdomproductionmin__xn("188");
    }if (r.return !== o.return) r = a, o = i;else {
      for (var u = !1, s = a.child; s;) {
        if (s === r) {
          u = !0, r = a, o = i;break;
        }if (s === o) {
          u = !0, o = a, r = i;break;
        }s = s.sibling;
      }if (!u) {
        for (s = i.child; s;) {
          if (s === r) {
            u = !0, r = i, o = a;break;
          }if (s === o) {
            u = !0, o = i, r = a;break;
          }s = s.sibling;
        }u || reactdomcjsreactdomproductionmin__xn("189");
      }
    }r.alternate !== o && reactdomcjsreactdomproductionmin__xn("190");
  }return r.tag !== reactdomcjsreactdomproductionmin__hr && reactdomcjsreactdomproductionmin__xn("188"), r.stateNode.current === r ? e : t;
}function reactdomcjsreactdomproductionmin__C(e) {
  return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e;
}function reactdomcjsreactdomproductionmin__E(e) {
  return "topMouseMove" === e || "topTouchMove" === e;
}function reactdomcjsreactdomproductionmin__k(e) {
  return "topMouseDown" === e || "topTouchStart" === e;
}function reactdomcjsreactdomproductionmin__P(e, t, n, r) {
  var o = e.type || "unknown-event";e.currentTarget = reactdomcjsreactdomproductionmin__Dr.getNodeFromInstance(r), reactdomcjsreactdomproductionmin__Fr.invokeGuardedCallbackAndCatchFirstError(o, n, void 0, e), e.currentTarget = null;
}function reactdomcjsreactdomproductionmin__T(e, t) {
  var n = e._dispatchListeners,
      r = e._dispatchInstances;if (Array.isArray(n)) for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) reactdomcjsreactdomproductionmin__P(e, t, n[o], r[o]);else n && reactdomcjsreactdomproductionmin__P(e, t, n, r);e._dispatchListeners = null, e._dispatchInstances = null;
}function reactdomcjsreactdomproductionmin__x(e) {
  var t = e._dispatchListeners,
      n = e._dispatchInstances;if (Array.isArray(t)) {
    for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) if (t[r](e, n[r])) return n[r];
  } else if (t && t(e, n)) return n;return null;
}function reactdomcjsreactdomproductionmin__w(e) {
  var t = reactdomcjsreactdomproductionmin__x(e);return e._dispatchInstances = null, e._dispatchListeners = null, t;
}function reactdomcjsreactdomproductionmin__N(e) {
  var t = e._dispatchListeners,
      n = e._dispatchInstances;Array.isArray(t) && reactdomcjsreactdomproductionmin__xn("103"), e.currentTarget = t ? reactdomcjsreactdomproductionmin__Dr.getNodeFromInstance(n) : null;var r = t ? t(e) : null;return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, r;
}function reactdomcjsreactdomproductionmin__S(e) {
  return !!e._dispatchListeners;
}function reactdomcjsreactdomproductionmin___(e) {
  var t = reactdomcjsreactdomproductionmin__Ar.getInstanceFromNode(e);if (t) {
    if ("number" == typeof t.tag) {
      reactdomcjsreactdomproductionmin__Rr && "function" == typeof reactdomcjsreactdomproductionmin__Rr.restoreControlledState || reactdomcjsreactdomproductionmin__xn("194");var n = reactdomcjsreactdomproductionmin__Ar.getFiberCurrentPropsFromNode(t.stateNode);return void reactdomcjsreactdomproductionmin__Rr.restoreControlledState(t.stateNode, t.type, n);
    }"function" != typeof t.restoreControlledState && reactdomcjsreactdomproductionmin__xn("195"), t.restoreControlledState();
  }
}function reactdomcjsreactdomproductionmin__I(e, t) {
  return reactdomcjsreactdomproductionmin__jr(e, t);
}function reactdomcjsreactdomproductionmin__F(e, t) {
  return reactdomcjsreactdomproductionmin__Vr(reactdomcjsreactdomproductionmin__I, e, t);
}function reactdomcjsreactdomproductionmin__O(e, t) {
  if (reactdomcjsreactdomproductionmin__zr) return reactdomcjsreactdomproductionmin__F(e, t);reactdomcjsreactdomproductionmin__zr = !0;try {
    return reactdomcjsreactdomproductionmin__F(e, t);
  } finally {
    reactdomcjsreactdomproductionmin__zr = !1, reactdomcjsreactdomproductionmin__Br.restoreStateIfNeeded();
  }
}function reactdomcjsreactdomproductionmin__M(e) {
  var t = e.target || e.srcElement || window;return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === reactdomcjsreactdomproductionmin__Qr ? t.parentNode : t;
}function reactdomcjsreactdomproductionmin__D(e) {
  if ("number" == typeof e.tag) {
    for (; e.return;) e = e.return;return e.tag !== reactdomcjsreactdomproductionmin__Xr ? null : e.stateNode.containerInfo;
  }for (; e._hostParent;) e = e._hostParent;return reactdomcjsreactdomproductionmin__ar.getNodeFromInstance(e).parentNode;
}function reactdomcjsreactdomproductionmin__A(e, t, n) {
  this.topLevelType = e, this.nativeEvent = t, this.targetInst = n, this.ancestors = [];
}function reactdomcjsreactdomproductionmin__R(e) {
  var t = e.targetInst,
      n = t;do {
    if (!n) {
      e.ancestors.push(n);break;
    }var r = reactdomcjsreactdomproductionmin__D(n);if (!r) break;e.ancestors.push(n), n = reactdomcjsreactdomproductionmin__ar.getClosestInstanceFromNode(r);
  } while (n);for (var o = 0; o < e.ancestors.length; o++) t = e.ancestors[o], reactdomcjsreactdomproductionmin__Gr._handleTopLevel(e.topLevelType, t, e.nativeEvent, reactdomcjsreactdomproductionmin__$r(e.nativeEvent));
}function reactdomcjsreactdomproductionmin__U(e, t) {
  return null == t && reactdomcjsreactdomproductionmin__xn("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
}function reactdomcjsreactdomproductionmin__H(e, t, n) {
  Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
}function reactdomcjsreactdomproductionmin__L(e) {
  return "button" === e || "input" === e || "select" === e || "textarea" === e;
}function reactdomcjsreactdomproductionmin__W(e, t, n) {
  switch (e) {case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":
      return !(!n.disabled || !reactdomcjsreactdomproductionmin__L(t));default:
      return !1;}
}function reactdomcjsreactdomproductionmin__B(e) {
  reactdomcjsreactdomproductionmin__io.enqueueEvents(e), reactdomcjsreactdomproductionmin__io.processEventQueue(!1);
}function reactdomcjsreactdomproductionmin__V(e, t) {
  if (!reactdomcjsreactdomproductionmin__hn.canUseDOM || t && !("addEventListener" in document)) return !1;var n = "on" + e,
      r = n in document;if (!r) {
    var o = document.createElement("div");o.setAttribute(n, "return;"), r = "function" == typeof o[n];
  }return !r && reactdomcjsreactdomproductionmin__so && "wheel" === e && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}function reactdomcjsreactdomproductionmin__j(e, t) {
  var n = {};return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n;
}function reactdomcjsreactdomproductionmin__z(e) {
  if (reactdomcjsreactdomproductionmin__fo[e]) return reactdomcjsreactdomproductionmin__fo[e];if (!reactdomcjsreactdomproductionmin__po[e]) return e;var t = reactdomcjsreactdomproductionmin__po[e];for (var n in t) if (t.hasOwnProperty(n) && n in reactdomcjsreactdomproductionmin__ho) return reactdomcjsreactdomproductionmin__fo[e] = t[n];return "";
}function reactdomcjsreactdomproductionmin__K(e) {
  return Object.prototype.hasOwnProperty.call(e, reactdomcjsreactdomproductionmin__ko) || (e[reactdomcjsreactdomproductionmin__ko] = reactdomcjsreactdomproductionmin__Eo++, reactdomcjsreactdomproductionmin__Co[e[reactdomcjsreactdomproductionmin__ko]] = {}), reactdomcjsreactdomproductionmin__Co[e[reactdomcjsreactdomproductionmin__ko]];
}function reactdomcjsreactdomproductionmin__Y(e, t) {
  return e + t.charAt(0).toUpperCase() + t.substring(1);
}function reactdomcjsreactdomproductionmin__q(e, t, n) {
  return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || reactdomcjsreactdomproductionmin__Do.hasOwnProperty(e) && reactdomcjsreactdomproductionmin__Do[e] ? ("" + t).trim() : t + "px";
}function reactdomcjsreactdomproductionmin__Q(e) {
  return !!reactdomcjsreactdomproductionmin__zo.hasOwnProperty(e) || !reactdomcjsreactdomproductionmin__jo.hasOwnProperty(e) && (reactdomcjsreactdomproductionmin__Vo.test(e) ? (reactdomcjsreactdomproductionmin__zo[e] = !0, !0) : (reactdomcjsreactdomproductionmin__jo[e] = !0, !1));
}function reactdomcjsreactdomproductionmin__$(e, t) {
  return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && !1 === t;
}function reactdomcjsreactdomproductionmin__X() {
  return null;
}function reactdomcjsreactdomproductionmin__G() {
  return null;
}function reactdomcjsreactdomproductionmin__Z() {
  reactdomcjsreactdomproductionmin__qo.getCurrentStack = null, reactdomcjsreactdomproductionmin__Qo.current = null, reactdomcjsreactdomproductionmin__Qo.phase = null;
}function reactdomcjsreactdomproductionmin__J(e, t) {
  reactdomcjsreactdomproductionmin__qo.getCurrentStack = reactdomcjsreactdomproductionmin__G, reactdomcjsreactdomproductionmin__Qo.current = e, reactdomcjsreactdomproductionmin__Qo.phase = t;
}function reactdomcjsreactdomproductionmin__ee(e) {
  return "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value;
}function reactdomcjsreactdomproductionmin__te(e, t) {
  var n = t.name;if ("radio" === t.type && null != n) {
    for (var r = e; r.parentNode;) r = r.parentNode;for (var o = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), a = 0; a < o.length; a++) {
      var i = o[a];if (i !== e && i.form === e.form) {
        var l = reactdomcjsreactdomproductionmin__ar.getFiberCurrentPropsFromNode(i);l || reactdomcjsreactdomproductionmin__xn("90"), reactdomcjsreactdomproductionmin__Xo.updateWrapper(i, l);
      }
    }
  }
}function reactdomcjsreactdomproductionmin__ne(e) {
  var t = "";return reactdomcjsreactdomproductionmin__yn.Children.forEach(e, function (e) {
    null != e && ("string" != typeof e && "number" != typeof e || (t += e));
  }), t;
}function reactdomcjsreactdomproductionmin__re(e, t, n) {
  var r = e.options;if (t) {
    for (var o = n, a = {}, i = 0; i < o.length; i++) a["$" + o[i]] = !0;for (var l = 0; l < r.length; l++) {
      var u = a.hasOwnProperty("$" + r[l].value);r[l].selected !== u && (r[l].selected = u);
    }
  } else {
    for (var s = "" + n, c = 0; c < r.length; c++) if (r[c].value === s) return void (r[c].selected = !0);r.length && (r[0].selected = !0);
  }
}function reactdomcjsreactdomproductionmin__oe(e) {
  return "";
}function reactdomcjsreactdomproductionmin__ae(e, t, n) {
  t && (reactdomcjsreactdomproductionmin__ua[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && reactdomcjsreactdomproductionmin__xn("137", e, reactdomcjsreactdomproductionmin__oe(n)), null != t.dangerouslySetInnerHTML && (null != t.children && reactdomcjsreactdomproductionmin__xn("60"), "object" == typeof t.dangerouslySetInnerHTML && reactdomcjsreactdomproductionmin__sa in t.dangerouslySetInnerHTML || reactdomcjsreactdomproductionmin__xn("61")), null != t.style && "object" != typeof t.style && reactdomcjsreactdomproductionmin__xn("62", reactdomcjsreactdomproductionmin__oe(n)));
}function reactdomcjsreactdomproductionmin__ie(e) {
  var t = e.type,
      n = e.nodeName;return n && "input" === n.toLowerCase() && ("checkbox" === t || "radio" === t);
}function reactdomcjsreactdomproductionmin__le(e) {
  return e._valueTracker;
}function reactdomcjsreactdomproductionmin__ue(e) {
  e._valueTracker = null;
}function reactdomcjsreactdomproductionmin__se(e) {
  var t = "";return e ? t = reactdomcjsreactdomproductionmin__ie(e) ? e.checked ? "true" : "false" : e.value : t;
}function reactdomcjsreactdomproductionmin__ce(e) {
  var t = reactdomcjsreactdomproductionmin__ie(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];if (!e.hasOwnProperty(t) && "function" == typeof n.get && "function" == typeof n.set) {
    Object.defineProperty(e, t, { enumerable: n.enumerable, configurable: !0, get: function () {
        return n.get.call(this);
      }, set: function (e) {
        r = "" + e, n.set.call(this, e);
      } });return { getValue: function () {
        return r;
      }, setValue: function (e) {
        r = "" + e;
      }, stopTracking: function () {
        reactdomcjsreactdomproductionmin__ue(e), delete e[t];
      } };
  }
}function reactdomcjsreactdomproductionmin__pe(e, t) {
  return e.indexOf("-") >= 0 || null != t.is;
}function reactdomcjsreactdomproductionmin__de(e) {
  var t = "" + e,
      n = reactdomcjsreactdomproductionmin__ba.exec(t);if (!n) return t;var r,
      o = "",
      a = 0,
      i = 0;for (a = n.index; a < t.length; a++) {
    switch (t.charCodeAt(a)) {case 34:
        r = "&quot;";break;case 38:
        r = "&amp;";break;case 39:
        r = "&#x27;";break;case 60:
        r = "&lt;";break;case 62:
        r = "&gt;";break;default:
        continue;}i !== a && (o += t.substring(i, a)), i = a + 1, o += r;
  }return i !== a ? o + t.substring(i, a) : o;
}function reactdomcjsreactdomproductionmin__fe(e) {
  return "boolean" == typeof e || "number" == typeof e ? "" + e : reactdomcjsreactdomproductionmin__de(e);
}function reactdomcjsreactdomproductionmin__he(e, t) {
  var n = e.nodeType === reactdomcjsreactdomproductionmin__xa || e.nodeType === reactdomcjsreactdomproductionmin__wa,
      r = n ? e : e.ownerDocument;reactdomcjsreactdomproductionmin__Na(t, r);
}function reactdomcjsreactdomproductionmin__ge(e) {
  e.onclick = reactdomcjsreactdomproductionmin__bn;
}function reactdomcjsreactdomproductionmin__ve(e, t, n, r) {
  for (var o in n) if (n.hasOwnProperty(o)) {
    var a = n[o];if (o === reactdomcjsreactdomproductionmin__Oa) reactdomcjsreactdomproductionmin__Lo.setValueForStyles(e, a);else if (o === reactdomcjsreactdomproductionmin___a) {
      var i = a ? a[reactdomcjsreactdomproductionmin__Ma] : void 0;null != i && reactdomcjsreactdomproductionmin__ya(e, i);
    } else o === reactdomcjsreactdomproductionmin__Fa ? "string" == typeof a ? reactdomcjsreactdomproductionmin__Pa(e, a) : "number" == typeof a && reactdomcjsreactdomproductionmin__Pa(e, "" + a) : o === reactdomcjsreactdomproductionmin__Ia || (reactdomcjsreactdomproductionmin__Sa.hasOwnProperty(o) ? a && reactdomcjsreactdomproductionmin__he(t, o) : r ? reactdomcjsreactdomproductionmin__Yo.setValueForAttribute(e, o, a) : (reactdomcjsreactdomproductionmin__jn.properties[o] || reactdomcjsreactdomproductionmin__jn.isCustomAttribute(o)) && null != a && reactdomcjsreactdomproductionmin__Yo.setValueForProperty(e, o, a));
  }
}function reactdomcjsreactdomproductionmin__me(e, t, n, r) {
  for (var o = 0; o < t.length; o += 2) {
    var a = t[o],
        i = t[o + 1];a === reactdomcjsreactdomproductionmin__Oa ? reactdomcjsreactdomproductionmin__Lo.setValueForStyles(e, i) : a === reactdomcjsreactdomproductionmin___a ? reactdomcjsreactdomproductionmin__ya(e, i) : a === reactdomcjsreactdomproductionmin__Fa ? reactdomcjsreactdomproductionmin__Pa(e, i) : r ? null != i ? reactdomcjsreactdomproductionmin__Yo.setValueForAttribute(e, a, i) : reactdomcjsreactdomproductionmin__Yo.deleteValueForAttribute(e, a) : (reactdomcjsreactdomproductionmin__jn.properties[a] || reactdomcjsreactdomproductionmin__jn.isCustomAttribute(a)) && (null != i ? reactdomcjsreactdomproductionmin__Yo.setValueForProperty(e, a, i) : reactdomcjsreactdomproductionmin__Yo.deleteValueForProperty(e, a));
  }
}function reactdomcjsreactdomproductionmin__ye(e) {
  switch (e) {case "svg":
      return reactdomcjsreactdomproductionmin__Aa;case "math":
      return reactdomcjsreactdomproductionmin__Ra;default:
      return reactdomcjsreactdomproductionmin__Da;}
}function reactdomcjsreactdomproductionmin__be(e, t) {
  return e !== reactdomcjsreactdomproductionmin__oi && e !== reactdomcjsreactdomproductionmin__ri || t !== reactdomcjsreactdomproductionmin__oi && t !== reactdomcjsreactdomproductionmin__ri ? e === reactdomcjsreactdomproductionmin__ni && t !== reactdomcjsreactdomproductionmin__ni ? -255 : e !== reactdomcjsreactdomproductionmin__ni && t === reactdomcjsreactdomproductionmin__ni ? 255 : e - t : 0;
}function reactdomcjsreactdomproductionmin__Ce() {
  return { first: null, last: null, hasForceUpdate: !1, callbackList: null };
}function reactdomcjsreactdomproductionmin__Ee(e) {
  return { priorityLevel: e.priorityLevel, partialState: e.partialState, callback: e.callback, isReplace: e.isReplace, isForced: e.isForced, isTopLevelUnmount: e.isTopLevelUnmount, next: null };
}function reactdomcjsreactdomproductionmin__ke(e, t, n, r) {
  null !== n ? n.next = t : (t.next = e.first, e.first = t), null !== r ? t.next = r : e.last = t;
}function reactdomcjsreactdomproductionmin__Pe(e, t) {
  var n = t.priorityLevel,
      r = null,
      o = null;if (null !== e.last && reactdomcjsreactdomproductionmin__be(e.last.priorityLevel, n) <= 0) r = e.last;else for (o = e.first; null !== o && reactdomcjsreactdomproductionmin__be(o.priorityLevel, n) <= 0;) r = o, o = o.next;return r;
}function reactdomcjsreactdomproductionmin__Te(e) {
  var t = e.alternate,
      n = e.updateQueue;null === n && (n = e.updateQueue = reactdomcjsreactdomproductionmin__Ce());var r = void 0;return null !== t ? null === (r = t.updateQueue) && (r = t.updateQueue = reactdomcjsreactdomproductionmin__Ce()) : r = null, [n, r !== n ? r : null];
}function reactdomcjsreactdomproductionmin__xe(e, t) {
  var n = reactdomcjsreactdomproductionmin__Te(e),
      r = n[0],
      o = n[1],
      a = reactdomcjsreactdomproductionmin__Pe(r, t),
      i = null !== a ? a.next : r.first;if (null === o) return reactdomcjsreactdomproductionmin__ke(r, t, a, i), null;var l = reactdomcjsreactdomproductionmin__Pe(o, t),
      u = null !== l ? l.next : o.first;if (reactdomcjsreactdomproductionmin__ke(r, t, a, i), i === u && null !== i || a === l && null !== a) return null === l && (o.first = t), null === u && (o.last = null), null;var s = reactdomcjsreactdomproductionmin__Ee(t);return reactdomcjsreactdomproductionmin__ke(o, s, l, u), s;
}function reactdomcjsreactdomproductionmin__we(e, t, n, r) {
  reactdomcjsreactdomproductionmin__xe(e, { priorityLevel: r, partialState: t, callback: n, isReplace: !1, isForced: !1, isTopLevelUnmount: !1, next: null });
}function reactdomcjsreactdomproductionmin__Ne(e, t, n, r) {
  reactdomcjsreactdomproductionmin__xe(e, { priorityLevel: r, partialState: t, callback: n, isReplace: !0, isForced: !1, isTopLevelUnmount: !1, next: null });
}function reactdomcjsreactdomproductionmin__Se(e, t, n) {
  reactdomcjsreactdomproductionmin__xe(e, { priorityLevel: n, partialState: null, callback: t, isReplace: !1, isForced: !0, isTopLevelUnmount: !1, next: null });
}function reactdomcjsreactdomproductionmin___e(e) {
  var t = e.updateQueue;return null === t ? reactdomcjsreactdomproductionmin__ni : e.tag !== reactdomcjsreactdomproductionmin__ai && e.tag !== reactdomcjsreactdomproductionmin__ii ? reactdomcjsreactdomproductionmin__ni : null !== t.first ? t.first.priorityLevel : reactdomcjsreactdomproductionmin__ni;
}function reactdomcjsreactdomproductionmin__Ie(e, t, n, r) {
  var o = null === t.element,
      a = { priorityLevel: r, partialState: t, callback: n, isReplace: !1, isForced: !1, isTopLevelUnmount: o, next: null },
      i = reactdomcjsreactdomproductionmin__xe(e, a);if (o) {
    var l = reactdomcjsreactdomproductionmin__Te(e),
        u = l[0],
        s = l[1];null !== u && null !== a.next && (a.next = null, u.last = a), null !== s && null !== i && null !== i.next && (i.next = null, s.last = a);
  }
}function reactdomcjsreactdomproductionmin__Fe(e, t, n, r) {
  var o = e.partialState;if ("function" == typeof o) {
    return o.call(t, n, r);
  }return o;
}function reactdomcjsreactdomproductionmin__Oe(e, t, n, r, o, a, i) {
  if (null !== e && e.updateQueue === n) {
    var l = n;n = t.updateQueue = { first: l.first, last: l.last, callbackList: null, hasForceUpdate: !1 };
  }for (var u = n.callbackList, s = n.hasForceUpdate, c = o, p = !0, d = n.first; null !== d && reactdomcjsreactdomproductionmin__be(d.priorityLevel, i) <= 0;) {
    n.first = d.next, null === n.first && (n.last = null);var f = void 0;d.isReplace ? (c = reactdomcjsreactdomproductionmin__Fe(d, r, c, a), p = !0) : (f = reactdomcjsreactdomproductionmin__Fe(d, r, c, a)) && (c = p ? reactdomcjsreactdomproductionmin__gn({}, c, f) : reactdomcjsreactdomproductionmin__gn(c, f), p = !1), d.isForced && (s = !0), null === d.callback || d.isTopLevelUnmount && null !== d.next || (u = null !== u ? u : [], u.push(d.callback), t.effectTag |= reactdomcjsreactdomproductionmin__ti), d = d.next;
  }return n.callbackList = u, n.hasForceUpdate = s, null !== n.first || null !== u || s || (t.updateQueue = null), c;
}function reactdomcjsreactdomproductionmin__Me(e, t, n) {
  var r = t.callbackList;if (null !== r) {
    t.callbackList = null;for (var o = 0; o < r.length; o++) {
      var a = r[o];"function" != typeof a && reactdomcjsreactdomproductionmin__xn("191", a), a.call(n);
    }
  }
}function reactdomcjsreactdomproductionmin__De(e) {
  return reactdomcjsreactdomproductionmin__Ue(e) ? reactdomcjsreactdomproductionmin__Oi : reactdomcjsreactdomproductionmin__Ii.current;
}function reactdomcjsreactdomproductionmin__Ae(e, t, n) {
  var r = e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = n;
}function reactdomcjsreactdomproductionmin__Re(e) {
  return e.tag === reactdomcjsreactdomproductionmin__xi && null != e.type.contextTypes;
}function reactdomcjsreactdomproductionmin__Ue(e) {
  return e.tag === reactdomcjsreactdomproductionmin__xi && null != e.type.childContextTypes;
}function reactdomcjsreactdomproductionmin__He(e) {
  reactdomcjsreactdomproductionmin__Ue(e) && (reactdomcjsreactdomproductionmin__Si(reactdomcjsreactdomproductionmin__Fi, e), reactdomcjsreactdomproductionmin__Si(reactdomcjsreactdomproductionmin__Ii, e));
}function reactdomcjsreactdomproductionmin__Le(e, t, n) {
  var r = e.stateNode,
      o = e.type.childContextTypes;if ("function" != typeof r.getChildContext) return t;var a = void 0;a = r.getChildContext();for (var i in a) i in o || reactdomcjsreactdomproductionmin__xn("108", reactdomcjsreactdomproductionmin__pr(e) || "Unknown", i);return reactdomcjsreactdomproductionmin__Pi({}, t, a);
}function reactdomcjsreactdomproductionmin__We(e) {
  return !(!e.prototype || !e.prototype.isReactComponent);
}function reactdomcjsreactdomproductionmin__Be(e, t, n, r) {
  var o = void 0;if ("function" == typeof e) o = reactdomcjsreactdomproductionmin__We(e) ? reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__$i, t, n) : reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__Qi, t, n), o.type = e;else if ("string" == typeof e) o = reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__Gi, t, n), o.type = e;else if ("object" == typeof e && null !== e && "number" == typeof e.tag) o = e;else {
    reactdomcjsreactdomproductionmin__xn("130", null == e ? e : typeof e, "");
  }return o;
}function reactdomcjsreactdomproductionmin__Ve(e) {
  switch (e.tag) {case reactdomcjsreactdomproductionmin__Pl:case reactdomcjsreactdomproductionmin__Tl:case reactdomcjsreactdomproductionmin__xl:case reactdomcjsreactdomproductionmin__wl:
      var t = e._debugOwner,
          n = e._debugSource,
          r = reactdomcjsreactdomproductionmin__pr(e),
          o = null;return t && (o = reactdomcjsreactdomproductionmin__pr(t)), reactdomcjsreactdomproductionmin__kl(r, n, o);default:
      return "";}
}function reactdomcjsreactdomproductionmin__je(e) {
  var t = "",
      n = e;do {
    t += reactdomcjsreactdomproductionmin__Ve(n), n = n.return;
  } while (n);return t;
}function reactdomcjsreactdomproductionmin__ze(e) {
  if (!1 !== reactdomcjsreactdomproductionmin___l(e)) {
    var t = e.error;console.error(t);
  }
}function reactdomcjsreactdomproductionmin__Ke(e) {
  if (null === e || void 0 === e) return null;var t = reactdomcjsreactdomproductionmin__hu && e[reactdomcjsreactdomproductionmin__hu] || e[reactdomcjsreactdomproductionmin__gu];return "function" == typeof t ? t : null;
}function reactdomcjsreactdomproductionmin__Ye(e, t) {
  var n = t.ref;if (null !== n && "function" != typeof n) {
    if (t._owner) {
      var r = t._owner,
          o = void 0;if (r) if ("number" == typeof r.tag) {
        var a = r;a.tag !== reactdomcjsreactdomproductionmin__au && reactdomcjsreactdomproductionmin__xn("110"), o = a.stateNode;
      } else o = r.getPublicInstance();o || reactdomcjsreactdomproductionmin__xn("147", n);var i = "" + n;if (null !== e && null !== e.ref && e.ref._stringRef === i) return e.ref;var l = function (e) {
        var t = o.refs === reactdomcjsreactdomproductionmin__Cn ? o.refs = {} : o.refs;null === e ? delete t[i] : t[i] = e;
      };return l._stringRef = i, l;
    }"string" != typeof n && reactdomcjsreactdomproductionmin__xn("148"), t._owner || reactdomcjsreactdomproductionmin__xn("149", n);
  }return n;
}function reactdomcjsreactdomproductionmin__qe(e, t) {
  if ("textarea" !== e.type) {
    reactdomcjsreactdomproductionmin__xn("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "");
  }
}function reactdomcjsreactdomproductionmin__Qe(e, t) {
  function n(n, r) {
    if (t) {
      if (!e) {
        if (null === r.alternate) return;r = r.alternate;
      }var o = n.lastEffect;null !== o ? (o.nextEffect = r, n.lastEffect = r) : n.firstEffect = n.lastEffect = r, r.nextEffect = null, r.effectTag = reactdomcjsreactdomproductionmin__fu;
    }
  }function r(e, r) {
    if (!t) return null;for (var o = r; null !== o;) n(e, o), o = o.sibling;return null;
  }function o(e, t) {
    for (var n = new Map(), r = t; null !== r;) null !== r.key ? n.set(r.key, r) : n.set(r.index, r), r = r.sibling;return n;
  }function a(t, n) {
    if (e) {
      var r = reactdomcjsreactdomproductionmin__Xl(t, n);return r.index = 0, r.sibling = null, r;
    }return t.pendingWorkPriority = n, t.effectTag = reactdomcjsreactdomproductionmin__pu, t.index = 0, t.sibling = null, t;
  }function i(e, n, r) {
    if (e.index = r, !t) return n;var o = e.alternate;if (null !== o) {
      var a = o.index;return a < n ? (e.effectTag = reactdomcjsreactdomproductionmin__du, n) : a;
    }return e.effectTag = reactdomcjsreactdomproductionmin__du, n;
  }function l(e) {
    return t && null === e.alternate && (e.effectTag = reactdomcjsreactdomproductionmin__du), e;
  }function u(e, t, n, r) {
    if (null === t || t.tag !== reactdomcjsreactdomproductionmin__iu) {
      var o = reactdomcjsreactdomproductionmin__Jl(n, e.internalContextTag, r);return o.return = e, o;
    }var i = a(t, r);return i.pendingProps = n, i.return = e, i;
  }function s(e, t, n, r) {
    if (null === t || t.type !== n.type) {
      var o = reactdomcjsreactdomproductionmin__Gl(n, e.internalContextTag, r);return o.ref = reactdomcjsreactdomproductionmin__Ye(t, n), o.return = e, o;
    }var i = a(t, r);return i.ref = reactdomcjsreactdomproductionmin__Ye(t, n), i.pendingProps = n.props, i.return = e, i;
  }function c(e, t, n, r) {
    if (null === t || t.tag !== reactdomcjsreactdomproductionmin__uu) {
      var o = reactdomcjsreactdomproductionmin__eu(n, e.internalContextTag, r);return o.return = e, o;
    }var i = a(t, r);return i.pendingProps = n, i.return = e, i;
  }function p(e, t, n, r) {
    if (null === t || t.tag !== reactdomcjsreactdomproductionmin__su) {
      var o = reactdomcjsreactdomproductionmin__tu(n, e.internalContextTag, r);return o.type = n.value, o.return = e, o;
    }var i = a(t, r);return i.type = n.value, i.return = e, i;
  }function d(e, t, n, r) {
    if (null === t || t.tag !== reactdomcjsreactdomproductionmin__lu || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation) {
      var o = reactdomcjsreactdomproductionmin__nu(n, e.internalContextTag, r);return o.return = e, o;
    }var i = a(t, r);return i.pendingProps = n.children || [], i.return = e, i;
  }function f(e, t, n, r) {
    if (null === t || t.tag !== reactdomcjsreactdomproductionmin__cu) {
      var o = reactdomcjsreactdomproductionmin__Zl(n, e.internalContextTag, r);return o.return = e, o;
    }var i = a(t, r);return i.pendingProps = n, i.return = e, i;
  }function h(e, t, n) {
    if ("string" == typeof t || "number" == typeof t) {
      var r = reactdomcjsreactdomproductionmin__Jl("" + t, e.internalContextTag, n);return r.return = e, r;
    }if ("object" == typeof t && null !== t) {
      switch (t.$$typeof) {case reactdomcjsreactdomproductionmin__vu:
          var o = reactdomcjsreactdomproductionmin__Gl(t, e.internalContextTag, n);return o.ref = reactdomcjsreactdomproductionmin__Ye(null, t), o.return = e, o;case reactdomcjsreactdomproductionmin__ql:
          var a = reactdomcjsreactdomproductionmin__eu(t, e.internalContextTag, n);return a.return = e, a;case reactdomcjsreactdomproductionmin__Ql:
          var i = reactdomcjsreactdomproductionmin__tu(t, e.internalContextTag, n);return i.type = t.value, i.return = e, i;case reactdomcjsreactdomproductionmin__$l:
          var l = reactdomcjsreactdomproductionmin__nu(t, e.internalContextTag, n);return l.return = e, l;}if (reactdomcjsreactdomproductionmin__ru(t) || reactdomcjsreactdomproductionmin__Ke(t)) {
        var u = reactdomcjsreactdomproductionmin__Zl(t, e.internalContextTag, n);return u.return = e, u;
      }reactdomcjsreactdomproductionmin__qe(e, t);
    }return null;
  }function g(e, t, n, r) {
    var o = null !== t ? t.key : null;if ("string" == typeof n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, r);if ("object" == typeof n && null !== n) {
      switch (n.$$typeof) {case reactdomcjsreactdomproductionmin__vu:
          return n.key === o ? s(e, t, n, r) : null;case reactdomcjsreactdomproductionmin__ql:
          return n.key === o ? c(e, t, n, r) : null;case reactdomcjsreactdomproductionmin__Ql:
          return null === o ? p(e, t, n, r) : null;case reactdomcjsreactdomproductionmin__$l:
          return n.key === o ? d(e, t, n, r) : null;}if (reactdomcjsreactdomproductionmin__ru(n) || reactdomcjsreactdomproductionmin__Ke(n)) return null !== o ? null : f(e, t, n, r);reactdomcjsreactdomproductionmin__qe(e, n);
    }return null;
  }function v(e, t, n, r, o) {
    if ("string" == typeof r || "number" == typeof r) {
      return u(t, e.get(n) || null, "" + r, o);
    }if ("object" == typeof r && null !== r) {
      switch (r.$$typeof) {case reactdomcjsreactdomproductionmin__vu:
          return s(t, e.get(null === r.key ? n : r.key) || null, r, o);case reactdomcjsreactdomproductionmin__ql:
          return c(t, e.get(null === r.key ? n : r.key) || null, r, o);case reactdomcjsreactdomproductionmin__Ql:
          return p(t, e.get(n) || null, r, o);case reactdomcjsreactdomproductionmin__$l:
          return d(t, e.get(null === r.key ? n : r.key) || null, r, o);}if (reactdomcjsreactdomproductionmin__ru(r) || reactdomcjsreactdomproductionmin__Ke(r)) {
        return f(t, e.get(n) || null, r, o);
      }reactdomcjsreactdomproductionmin__qe(t, r);
    }return null;
  }function m(e, a, l, u) {
    for (var s = null, c = null, p = a, d = 0, f = 0, m = null; null !== p && f < l.length; f++) {
      p.index > f ? (m = p, p = null) : m = p.sibling;var y = g(e, p, l[f], u);if (null === y) {
        null === p && (p = m);break;
      }t && p && null === y.alternate && n(e, p), d = i(y, d, f), null === c ? s = y : c.sibling = y, c = y, p = m;
    }if (f === l.length) return r(e, p), s;if (null === p) {
      for (; f < l.length; f++) {
        var b = h(e, l[f], u);b && (d = i(b, d, f), null === c ? s = b : c.sibling = b, c = b);
      }return s;
    }for (var C = o(e, p); f < l.length; f++) {
      var E = v(C, e, f, l[f], u);E && (t && null !== E.alternate && C.delete(null === E.key ? f : E.key), d = i(E, d, f), null === c ? s = E : c.sibling = E, c = E);
    }return t && C.forEach(function (t) {
      return n(e, t);
    }), s;
  }function y(e, a, l, u) {
    var s = reactdomcjsreactdomproductionmin__Ke(l);"function" != typeof s && reactdomcjsreactdomproductionmin__xn("150");var c = s.call(l);null == c && reactdomcjsreactdomproductionmin__xn("151");for (var p = null, d = null, f = a, m = 0, y = 0, b = null, C = c.next(); null !== f && !C.done; y++, C = c.next()) {
      f.index > y ? (b = f, f = null) : b = f.sibling;var E = g(e, f, C.value, u);if (null === E) {
        f || (f = b);break;
      }t && f && null === E.alternate && n(e, f), m = i(E, m, y), null === d ? p = E : d.sibling = E, d = E, f = b;
    }if (C.done) return r(e, f), p;if (null === f) {
      for (; !C.done; y++, C = c.next()) {
        var k = h(e, C.value, u);null !== k && (m = i(k, m, y), null === d ? p = k : d.sibling = k, d = k);
      }return p;
    }for (var P = o(e, f); !C.done; y++, C = c.next()) {
      var T = v(P, e, y, C.value, u);null !== T && (t && null !== T.alternate && P.delete(null === T.key ? y : T.key), m = i(T, m, y), null === d ? p = T : d.sibling = T, d = T);
    }return t && P.forEach(function (t) {
      return n(e, t);
    }), p;
  }function b(e, t, n, o) {
    if (null !== t && t.tag === reactdomcjsreactdomproductionmin__iu) {
      r(e, t.sibling);var i = a(t, o);return i.pendingProps = n, i.return = e, i;
    }r(e, t);var l = reactdomcjsreactdomproductionmin__Jl(n, e.internalContextTag, o);return l.return = e, l;
  }function C(e, t, o, i) {
    for (var l = o.key, u = t; null !== u;) {
      if (u.key === l) {
        if (u.type === o.type) {
          r(e, u.sibling);var s = a(u, i);return s.ref = reactdomcjsreactdomproductionmin__Ye(u, o), s.pendingProps = o.props, s.return = e, s;
        }r(e, u);break;
      }n(e, u), u = u.sibling;
    }var c = reactdomcjsreactdomproductionmin__Gl(o, e.internalContextTag, i);return c.ref = reactdomcjsreactdomproductionmin__Ye(t, o), c.return = e, c;
  }function E(e, t, o, i) {
    for (var l = o.key, u = t; null !== u;) {
      if (u.key === l) {
        if (u.tag === reactdomcjsreactdomproductionmin__uu) {
          r(e, u.sibling);var s = a(u, i);return s.pendingProps = o, s.return = e, s;
        }r(e, u);break;
      }n(e, u), u = u.sibling;
    }var c = reactdomcjsreactdomproductionmin__eu(o, e.internalContextTag, i);return c.return = e, c;
  }function k(e, t, n, o) {
    var i = t;if (null !== i) {
      if (i.tag === reactdomcjsreactdomproductionmin__su) {
        r(e, i.sibling);var l = a(i, o);return l.type = n.value, l.return = e, l;
      }r(e, i);
    }var u = reactdomcjsreactdomproductionmin__tu(n, e.internalContextTag, o);return u.type = n.value, u.return = e, u;
  }function P(e, t, o, i) {
    for (var l = o.key, u = t; null !== u;) {
      if (u.key === l) {
        if (u.tag === reactdomcjsreactdomproductionmin__lu && u.stateNode.containerInfo === o.containerInfo && u.stateNode.implementation === o.implementation) {
          r(e, u.sibling);var s = a(u, i);return s.pendingProps = o.children || [], s.return = e, s;
        }r(e, u);break;
      }n(e, u), u = u.sibling;
    }var c = reactdomcjsreactdomproductionmin__nu(o, e.internalContextTag, i);return c.return = e, c;
  }function T(e, t, n, o) {
    var a = reactdomcjsreactdomproductionmin__wo.disableNewFiberFeatures,
        i = "object" == typeof n && null !== n;if (i) if (a) switch (n.$$typeof) {case reactdomcjsreactdomproductionmin__vu:
        return l(C(e, t, n, o));case reactdomcjsreactdomproductionmin__$l:
        return l(P(e, t, n, o));} else switch (n.$$typeof) {case reactdomcjsreactdomproductionmin__vu:
        return l(C(e, t, n, o));case reactdomcjsreactdomproductionmin__ql:
        return l(E(e, t, n, o));case reactdomcjsreactdomproductionmin__Ql:
        return l(k(e, t, n, o));case reactdomcjsreactdomproductionmin__$l:
        return l(P(e, t, n, o));}if (a) switch (e.tag) {case reactdomcjsreactdomproductionmin__au:
        var u = e.type;null !== n && !1 !== n && reactdomcjsreactdomproductionmin__xn("109", u.displayName || u.name || "Component");break;case reactdomcjsreactdomproductionmin__ou:
        var s = e.type;null !== n && !1 !== n && reactdomcjsreactdomproductionmin__xn("105", s.displayName || s.name || "Component");}if ("string" == typeof n || "number" == typeof n) return l(b(e, t, "" + n, o));if (reactdomcjsreactdomproductionmin__ru(n)) return m(e, t, n, o);if (reactdomcjsreactdomproductionmin__Ke(n)) return y(e, t, n, o);if (i && reactdomcjsreactdomproductionmin__qe(e, n), !a && void 0 === n) switch (e.tag) {case reactdomcjsreactdomproductionmin__au:case reactdomcjsreactdomproductionmin__ou:
        var c = e.type;reactdomcjsreactdomproductionmin__xn("152", c.displayName || c.name || "Component");}return r(e, t);
  }return T;
}function reactdomcjsreactdomproductionmin__$e(e) {
  return function (t) {
    try {
      return e(t);
    } catch (e) {}
  };
}function reactdomcjsreactdomproductionmin__Xe(e) {
  if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;if (!t.supportsFiber) return !0;try {
    var n = t.inject(e);reactdomcjsreactdomproductionmin__Fs = reactdomcjsreactdomproductionmin__$e(function (e) {
      return t.onCommitFiberRoot(n, e);
    }), reactdomcjsreactdomproductionmin__Os = reactdomcjsreactdomproductionmin__$e(function (e) {
      return t.onCommitFiberUnmount(n, e);
    });
  } catch (e) {}return !0;
}function reactdomcjsreactdomproductionmin__Ge(e) {
  "function" == typeof reactdomcjsreactdomproductionmin__Fs && reactdomcjsreactdomproductionmin__Fs(e);
}function reactdomcjsreactdomproductionmin__Ze(e) {
  "function" == typeof reactdomcjsreactdomproductionmin__Os && reactdomcjsreactdomproductionmin__Os(e);
}function reactdomcjsreactdomproductionmin__Je(e) {
  if (!e) return reactdomcjsreactdomproductionmin__Cn;var t = reactdomcjsreactdomproductionmin__lr.get(e);return "number" == typeof t.tag ? reactdomcjsreactdomproductionmin__jc(t) : t._processChildContext(t._context);
}function reactdomcjsreactdomproductionmin__et(e) {
  for (; e && e.firstChild;) e = e.firstChild;return e;
}function reactdomcjsreactdomproductionmin__tt(e) {
  for (; e;) {
    if (e.nextSibling) return e.nextSibling;e = e.parentNode;
  }
}function reactdomcjsreactdomproductionmin__nt(e, t) {
  for (var n = reactdomcjsreactdomproductionmin__et(e), r = 0, o = 0; n;) {
    if (n.nodeType === reactdomcjsreactdomproductionmin__ep) {
      if (o = r + n.textContent.length, r <= t && o >= t) return { node: n, offset: t - r };r = o;
    }n = reactdomcjsreactdomproductionmin__et(reactdomcjsreactdomproductionmin__tt(n));
  }
}function reactdomcjsreactdomproductionmin__rt() {
  return !reactdomcjsreactdomproductionmin__np && reactdomcjsreactdomproductionmin__hn.canUseDOM && (reactdomcjsreactdomproductionmin__np = "textContent" in document.documentElement ? "textContent" : "innerText"), reactdomcjsreactdomproductionmin__np;
}function reactdomcjsreactdomproductionmin__ot(e, t, n, r) {
  return e === n && t === r;
}function reactdomcjsreactdomproductionmin__at(e) {
  var t = window.getSelection && window.getSelection();if (!t || 0 === t.rangeCount) return null;var n = t.anchorNode,
      r = t.anchorOffset,
      o = t.focusNode,
      a = t.focusOffset,
      i = t.getRangeAt(0);try {
    i.startContainer.nodeType, i.endContainer.nodeType;
  } catch (e) {
    return null;
  }var l = reactdomcjsreactdomproductionmin__ot(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
      u = l ? 0 : i.toString().length,
      s = i.cloneRange();s.selectNodeContents(e), s.setEnd(i.startContainer, i.startOffset);var c = reactdomcjsreactdomproductionmin__ot(s.startContainer, s.startOffset, s.endContainer, s.endOffset),
      p = c ? 0 : s.toString().length,
      d = p + u,
      f = document.createRange();f.setStart(n, r), f.setEnd(o, a);var h = f.collapsed;return { start: h ? d : p, end: h ? p : d };
}function reactdomcjsreactdomproductionmin__it(e, t) {
  if (window.getSelection) {
    var n = window.getSelection(),
        r = e[reactdomcjsreactdomproductionmin__rp()].length,
        o = Math.min(t.start, r),
        a = void 0 === t.end ? o : Math.min(t.end, r);if (!n.extend && o > a) {
      var i = a;a = o, o = i;
    }var l = reactdomcjsreactdomproductionmin__tp(e, o),
        u = reactdomcjsreactdomproductionmin__tp(e, a);if (l && u) {
      var s = document.createRange();s.setStart(l.node, l.offset), n.removeAllRanges(), o > a ? (n.addRange(s), n.extend(u.node, u.offset)) : (s.setEnd(u.node, u.offset), n.addRange(s));
    }
  }
}function reactdomcjsreactdomproductionmin__lt(e) {
  return reactdomcjsreactdomproductionmin__kn(document.documentElement, e);
}function reactdomcjsreactdomproductionmin__ut(e) {
  if (void 0 !== e._hostParent) return e._hostParent;if ("number" == typeof e.tag) {
    do {
      e = e.return;
    } while (e && e.tag !== reactdomcjsreactdomproductionmin__gp);if (e) return e;
  }return null;
}function reactdomcjsreactdomproductionmin__st(e, t) {
  for (var n = 0, r = e; r; r = reactdomcjsreactdomproductionmin__ut(r)) n++;for (var o = 0, a = t; a; a = reactdomcjsreactdomproductionmin__ut(a)) o++;for (; n - o > 0;) e = reactdomcjsreactdomproductionmin__ut(e), n--;for (; o - n > 0;) t = reactdomcjsreactdomproductionmin__ut(t), o--;for (var i = n; i--;) {
    if (e === t || e === t.alternate) return e;e = reactdomcjsreactdomproductionmin__ut(e), t = reactdomcjsreactdomproductionmin__ut(t);
  }return null;
}function reactdomcjsreactdomproductionmin__ct(e, t) {
  for (; t;) {
    if (e === t || e === t.alternate) return !0;t = reactdomcjsreactdomproductionmin__ut(t);
  }return !1;
}function reactdomcjsreactdomproductionmin__pt(e) {
  return reactdomcjsreactdomproductionmin__ut(e);
}function reactdomcjsreactdomproductionmin__dt(e, t, n) {
  for (var r = []; e;) r.push(e), e = reactdomcjsreactdomproductionmin__ut(e);var o;for (o = r.length; o-- > 0;) t(r[o], "captured", n);for (o = 0; o < r.length; o++) t(r[o], "bubbled", n);
}function reactdomcjsreactdomproductionmin__ft(e, t, n, r, o) {
  for (var a = e && t ? reactdomcjsreactdomproductionmin__st(e, t) : null, i = []; e && e !== a;) i.push(e), e = reactdomcjsreactdomproductionmin__ut(e);for (var l = []; t && t !== a;) l.push(t), t = reactdomcjsreactdomproductionmin__ut(t);var u;for (u = 0; u < i.length; u++) n(i[u], "bubbled", r);for (u = l.length; u-- > 0;) n(l[u], "captured", o);
}function reactdomcjsreactdomproductionmin__ht(e, t, n) {
  var r = t.dispatchConfig.phasedRegistrationNames[n];return reactdomcjsreactdomproductionmin__mp(e, r);
}function reactdomcjsreactdomproductionmin__gt(e, t, n) {
  var r = reactdomcjsreactdomproductionmin__ht(e, n, t);r && (n._dispatchListeners = reactdomcjsreactdomproductionmin__Jr(n._dispatchListeners, r), n._dispatchInstances = reactdomcjsreactdomproductionmin__Jr(n._dispatchInstances, e));
}function reactdomcjsreactdomproductionmin__vt(e) {
  e && e.dispatchConfig.phasedRegistrationNames && reactdomcjsreactdomproductionmin__vp.traverseTwoPhase(e._targetInst, reactdomcjsreactdomproductionmin__gt, e);
}function reactdomcjsreactdomproductionmin__mt(e) {
  if (e && e.dispatchConfig.phasedRegistrationNames) {
    var t = e._targetInst,
        n = t ? reactdomcjsreactdomproductionmin__vp.getParentInstance(t) : null;reactdomcjsreactdomproductionmin__vp.traverseTwoPhase(n, reactdomcjsreactdomproductionmin__gt, e);
  }
}function reactdomcjsreactdomproductionmin__yt(e, t, n) {
  if (e && n && n.dispatchConfig.registrationName) {
    var r = n.dispatchConfig.registrationName,
        o = reactdomcjsreactdomproductionmin__mp(e, r);o && (n._dispatchListeners = reactdomcjsreactdomproductionmin__Jr(n._dispatchListeners, o), n._dispatchInstances = reactdomcjsreactdomproductionmin__Jr(n._dispatchInstances, e));
  }
}function reactdomcjsreactdomproductionmin__bt(e) {
  e && e.dispatchConfig.registrationName && reactdomcjsreactdomproductionmin__yt(e._targetInst, null, e);
}function reactdomcjsreactdomproductionmin__Ct(e) {
  reactdomcjsreactdomproductionmin__eo(e, reactdomcjsreactdomproductionmin__vt);
}function reactdomcjsreactdomproductionmin__Et(e) {
  reactdomcjsreactdomproductionmin__eo(e, reactdomcjsreactdomproductionmin__mt);
}function reactdomcjsreactdomproductionmin__kt(e, t, n, r) {
  reactdomcjsreactdomproductionmin__vp.traverseEnterLeave(n, r, reactdomcjsreactdomproductionmin__yt, e, t);
}function reactdomcjsreactdomproductionmin__Pt(e) {
  reactdomcjsreactdomproductionmin__eo(e, reactdomcjsreactdomproductionmin__bt);
}function reactdomcjsreactdomproductionmin__Tt(e) {
  this._root = e, this._startText = this.getText(), this._fallbackText = null;
}function reactdomcjsreactdomproductionmin__xt(e, t, n, r) {
  this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n;var o = this.constructor.Interface;for (var a in o) if (o.hasOwnProperty(a)) {
    var i = o[a];i ? this[a] = i(n) : "target" === a ? this.target = r : this[a] = n[a];
  }var l = null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue;return this.isDefaultPrevented = l ? reactdomcjsreactdomproductionmin__bn.thatReturnsTrue : reactdomcjsreactdomproductionmin__bn.thatReturnsFalse, this.isPropagationStopped = reactdomcjsreactdomproductionmin__bn.thatReturnsFalse, this;
}function reactdomcjsreactdomproductionmin__wt(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Pp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__Nt(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Pp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__St() {
  var e = window.opera;return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12;
}function reactdomcjsreactdomproductionmin___t(e) {
  return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
}function reactdomcjsreactdomproductionmin__It(e) {
  switch (e) {case "topCompositionStart":
      return reactdomcjsreactdomproductionmin__Rp.compositionStart;case "topCompositionEnd":
      return reactdomcjsreactdomproductionmin__Rp.compositionEnd;case "topCompositionUpdate":
      return reactdomcjsreactdomproductionmin__Rp.compositionUpdate;}
}function reactdomcjsreactdomproductionmin__Ft(e, t) {
  return "topKeyDown" === e && t.keyCode === reactdomcjsreactdomproductionmin___p;
}function reactdomcjsreactdomproductionmin__Ot(e, t) {
  switch (e) {case "topKeyUp":
      return -1 !== reactdomcjsreactdomproductionmin__Sp.indexOf(t.keyCode);case "topKeyDown":
      return t.keyCode !== reactdomcjsreactdomproductionmin___p;case "topKeyPress":case "topMouseDown":case "topBlur":
      return !0;default:
      return !1;}
}function reactdomcjsreactdomproductionmin__Mt(e) {
  var t = e.detail;return "object" == typeof t && "data" in t ? t.data : null;
}function reactdomcjsreactdomproductionmin__Dt(e, t, n, r) {
  var o, a;if (reactdomcjsreactdomproductionmin__Ip ? o = reactdomcjsreactdomproductionmin__It(e) : reactdomcjsreactdomproductionmin__Hp ? reactdomcjsreactdomproductionmin__Ot(e, n) && (o = reactdomcjsreactdomproductionmin__Rp.compositionEnd) : reactdomcjsreactdomproductionmin__Ft(e, n) && (o = reactdomcjsreactdomproductionmin__Rp.compositionStart), !o) return null;reactdomcjsreactdomproductionmin__Mp && (reactdomcjsreactdomproductionmin__Hp || o !== reactdomcjsreactdomproductionmin__Rp.compositionStart ? o === reactdomcjsreactdomproductionmin__Rp.compositionEnd && reactdomcjsreactdomproductionmin__Hp && (a = reactdomcjsreactdomproductionmin__Hp.getData()) : reactdomcjsreactdomproductionmin__Hp = reactdomcjsreactdomproductionmin__Cp.getPooled(r));var i = reactdomcjsreactdomproductionmin__xp.getPooled(o, t, n, r);if (a) i.data = a;else {
    var l = reactdomcjsreactdomproductionmin__Mt(n);null !== l && (i.data = l);
  }return reactdomcjsreactdomproductionmin__bp.accumulateTwoPhaseDispatches(i), i;
}function reactdomcjsreactdomproductionmin__At(e, t) {
  switch (e) {case "topCompositionEnd":
      return reactdomcjsreactdomproductionmin__Mt(t);case "topKeyPress":
      return t.which !== reactdomcjsreactdomproductionmin__Dp ? null : (reactdomcjsreactdomproductionmin__Up = !0, reactdomcjsreactdomproductionmin__Ap);case "topTextInput":
      var n = t.data;return n === reactdomcjsreactdomproductionmin__Ap && reactdomcjsreactdomproductionmin__Up ? null : n;default:
      return null;}
}function reactdomcjsreactdomproductionmin__Rt(e, t) {
  if (reactdomcjsreactdomproductionmin__Hp) {
    if ("topCompositionEnd" === e || !reactdomcjsreactdomproductionmin__Ip && reactdomcjsreactdomproductionmin__Ot(e, t)) {
      var n = reactdomcjsreactdomproductionmin__Hp.getData();return reactdomcjsreactdomproductionmin__Cp.release(reactdomcjsreactdomproductionmin__Hp), reactdomcjsreactdomproductionmin__Hp = null, n;
    }return null;
  }switch (e) {case "topPaste":
      return null;case "topKeyPress":
      if (!reactdomcjsreactdomproductionmin___t(t)) {
        if (t.char && t.char.length > 1) return t.char;if (t.which) return String.fromCharCode(t.which);
      }return null;case "topCompositionEnd":
      return reactdomcjsreactdomproductionmin__Mp ? null : t.data;default:
      return null;}
}function reactdomcjsreactdomproductionmin__Ut(e, t, n, r) {
  var o;if (!(o = reactdomcjsreactdomproductionmin__Op ? reactdomcjsreactdomproductionmin__At(e, n) : reactdomcjsreactdomproductionmin__Rt(e, n))) return null;var a = reactdomcjsreactdomproductionmin__Np.getPooled(reactdomcjsreactdomproductionmin__Rp.beforeInput, t, n, r);return a.data = o, reactdomcjsreactdomproductionmin__bp.accumulateTwoPhaseDispatches(a), a;
}function reactdomcjsreactdomproductionmin__Ht(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();return "input" === t ? !!reactdomcjsreactdomproductionmin__Bp[e.type] : "textarea" === t;
}function reactdomcjsreactdomproductionmin__Lt(e) {
  var t = e.nodeName && e.nodeName.toLowerCase();return "select" === t || "input" === t && "file" === e.type;
}function reactdomcjsreactdomproductionmin__Wt(e, t, n) {
  var r = reactdomcjsreactdomproductionmin__Pp.getPooled(reactdomcjsreactdomproductionmin__jp.change, e, t, n);return r.type = "change", reactdomcjsreactdomproductionmin__Br.enqueueStateRestore(n), reactdomcjsreactdomproductionmin__bp.accumulateTwoPhaseDispatches(r), r;
}function reactdomcjsreactdomproductionmin__Bt(e, t) {
  if (reactdomcjsreactdomproductionmin__da.updateValueIfChanged(t)) return e;
}function reactdomcjsreactdomproductionmin__Vt(e, t, n) {
  if ("topInput" === e || "topChange" === e || "topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) return reactdomcjsreactdomproductionmin__Bt(t, n);
}function reactdomcjsreactdomproductionmin__jt(e, t, n) {
  if ("topInput" === e || "topChange" === e) return reactdomcjsreactdomproductionmin__Bt(t, n);
}function reactdomcjsreactdomproductionmin__zt(e, t, n) {
  if ("topChange" === e) return reactdomcjsreactdomproductionmin__Bt(t, n);
}function reactdomcjsreactdomproductionmin__Kt(e, t) {
  if (null != e) {
    var n = e._wrapperState || t._wrapperState;if (n && n.controlled && "number" === t.type) {
      var r = "" + t.value;t.getAttribute("value") !== r && t.setAttribute("value", r);
    }
  }
}function reactdomcjsreactdomproductionmin__Yt(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Pp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__qt(e) {
  var t = this,
      n = t.nativeEvent;if (n.getModifierState) return n.getModifierState(e);var r = reactdomcjsreactdomproductionmin__Gp[e];return !!r && !!n[r];
}function reactdomcjsreactdomproductionmin__Qt(e) {
  return reactdomcjsreactdomproductionmin__qt;
}function reactdomcjsreactdomproductionmin__$t(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Xp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__Xt(e) {
  if ("selectionStart" in e && reactdomcjsreactdomproductionmin__up.hasSelectionCapabilities(e)) return { start: e.selectionStart, end: e.selectionEnd };if (window.getSelection) {
    var t = window.getSelection();return { anchorNode: t.anchorNode, anchorOffset: t.anchorOffset, focusNode: t.focusNode, focusOffset: t.focusOffset };
  }
}function reactdomcjsreactdomproductionmin__Gt(e, t) {
  if (reactdomcjsreactdomproductionmin__cd || null == reactdomcjsreactdomproductionmin__ld || reactdomcjsreactdomproductionmin__ld !== reactdomcjsreactdomproductionmin__Tn()) return null;var n = reactdomcjsreactdomproductionmin__Xt(reactdomcjsreactdomproductionmin__ld);if (!reactdomcjsreactdomproductionmin__sd || !reactdomcjsreactdomproductionmin__En(reactdomcjsreactdomproductionmin__sd, n)) {
    reactdomcjsreactdomproductionmin__sd = n;var r = reactdomcjsreactdomproductionmin__Pp.getPooled(reactdomcjsreactdomproductionmin__id.select, reactdomcjsreactdomproductionmin__ud, e, t);return r.type = "select", r.target = reactdomcjsreactdomproductionmin__ld, reactdomcjsreactdomproductionmin__bp.accumulateTwoPhaseDispatches(r), r;
  }return null;
}function reactdomcjsreactdomproductionmin__Zt(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Pp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__Jt(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Pp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__en(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Xp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__tn(e) {
  var t,
      n = e.keyCode;return "charCode" in e ? 0 === (t = e.charCode) && 13 === n && (t = 13) : t = n, t >= 32 || 13 === t ? t : 0;
}function reactdomcjsreactdomproductionmin__nn(e) {
  if (e.key) {
    var t = reactdomcjsreactdomproductionmin__Ed[e.key] || e.key;if ("Unidentified" !== t) return t;
  }if ("keypress" === e.type) {
    var n = reactdomcjsreactdomproductionmin__Cd(e);return 13 === n ? "Enter" : String.fromCharCode(n);
  }return "keydown" === e.type || "keyup" === e.type ? reactdomcjsreactdomproductionmin__kd[e.keyCode] || "Unidentified" : "";
}function reactdomcjsreactdomproductionmin__rn(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Xp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__on(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__ed.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__an(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Xp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__ln(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__Pp.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__un(e, t, n, r) {
  return reactdomcjsreactdomproductionmin__ed.call(this, e, t, n, r);
}function reactdomcjsreactdomproductionmin__sn(e) {
  return !(!e || e.nodeType !== reactdomcjsreactdomproductionmin__Jd && e.nodeType !== reactdomcjsreactdomproductionmin__nf && e.nodeType !== reactdomcjsreactdomproductionmin__rf && (e.nodeType !== reactdomcjsreactdomproductionmin__tf || " react-mount-point-unstable " !== e.nodeValue));
}function reactdomcjsreactdomproductionmin__cn(e) {
  return e ? e.nodeType === reactdomcjsreactdomproductionmin__nf ? e.documentElement : e.firstChild : null;
}function reactdomcjsreactdomproductionmin__pn(e) {
  var t = reactdomcjsreactdomproductionmin__cn(e);return !(!t || t.nodeType !== reactdomcjsreactdomproductionmin__Jd || !t.hasAttribute(reactdomcjsreactdomproductionmin__of));
}function reactdomcjsreactdomproductionmin__dn(e, t) {
  switch (e) {case "button":case "input":case "select":case "textarea":
      return !!t.autoFocus;}return !1;
}function reactdomcjsreactdomproductionmin__fn(e, t, n, r, o) {
  reactdomcjsreactdomproductionmin__vn(reactdomcjsreactdomproductionmin__sn(n), "Target container is not a DOM element.");var a = n._reactRootContainer;if (a) reactdomcjsreactdomproductionmin__Ef.updateContainer(t, a, e, o);else {
    if (!(r || reactdomcjsreactdomproductionmin__pn(n))) for (var i = void 0; i = n.lastChild;) n.removeChild(i);var l = reactdomcjsreactdomproductionmin__Ef.createContainer(n);a = n._reactRootContainer = l, reactdomcjsreactdomproductionmin__Ef.unbatchedUpdates(function () {
      reactdomcjsreactdomproductionmin__Ef.updateContainer(t, l, e, o);
    });
  }return reactdomcjsreactdomproductionmin__Ef.getPublicRootInstance(a);
}var reactdomcjsreactdomproductionmin__hn = $m['fbjs/lib/ExecutionEnvironment'].exports,
    reactdomcjsreactdomproductionmin__gn = $m['object-assign'].exports,
    reactdomcjsreactdomproductionmin__vn = $m['fbjs/lib/invariant'].exports,
    reactdomcjsreactdomproductionmin__mn = $m['fbjs/lib/EventListener'].exports,
    reactdomcjsreactdomproductionmin__yn = $m['react'].exports,
    reactdomcjsreactdomproductionmin__bn = $m['fbjs/lib/emptyFunction'].exports,
    reactdomcjsreactdomproductionmin__Cn = $m['fbjs/lib/emptyObject'].exports,
    reactdomcjsreactdomproductionmin__En = $m['fbjs/lib/shallowEqual'].exports,
    reactdomcjsreactdomproductionmin__kn = $m['fbjs/lib/containsNode'].exports,
    reactdomcjsreactdomproductionmin__Pn = $m['fbjs/lib/focusNode'].exports,
    reactdomcjsreactdomproductionmin__Tn = $m['fbjs/lib/getActiveElement'].exports,
    reactdomcjsreactdomproductionmin__xn = e,
    reactdomcjsreactdomproductionmin__wn = null,
    reactdomcjsreactdomproductionmin__Nn = {},
    reactdomcjsreactdomproductionmin__Sn = { plugins: [], eventNameDispatchConfigs: {}, registrationNameModules: {}, registrationNameDependencies: {},
  possibleRegistrationNames: null, injectEventPluginOrder: function (e) {
    reactdomcjsreactdomproductionmin__wn && reactdomcjsreactdomproductionmin__xn("101"), reactdomcjsreactdomproductionmin__wn = Array.prototype.slice.call(e), t();
  }, injectEventPluginsByName: function (e) {
    var n = !1;for (var r in e) if (e.hasOwnProperty(r)) {
      var o = e[r];reactdomcjsreactdomproductionmin__Nn.hasOwnProperty(r) && reactdomcjsreactdomproductionmin__Nn[r] === o || (reactdomcjsreactdomproductionmin__Nn[r] && reactdomcjsreactdomproductionmin__xn("102", r), reactdomcjsreactdomproductionmin__Nn[r] = o, n = !0);
    }n && t();
  } },
    reactdomcjsreactdomproductionmin___n = reactdomcjsreactdomproductionmin__Sn,
    reactdomcjsreactdomproductionmin__In = function (e) {
  var t = this;if (t.instancePool.length) {
    var n = t.instancePool.pop();return t.call(n, e), n;
  }return new t(e);
},
    reactdomcjsreactdomproductionmin__Fn = function (e, t) {
  var n = this;if (n.instancePool.length) {
    var r = n.instancePool.pop();return n.call(r, e, t), r;
  }return new n(e, t);
},
    reactdomcjsreactdomproductionmin__On = function (e, t, n) {
  var r = this;if (r.instancePool.length) {
    var o = r.instancePool.pop();return r.call(o, e, t, n), o;
  }return new r(e, t, n);
},
    reactdomcjsreactdomproductionmin__Mn = function (e, t, n, r) {
  var o = this;if (o.instancePool.length) {
    var a = o.instancePool.pop();return o.call(a, e, t, n, r), a;
  }return new o(e, t, n, r);
},
    reactdomcjsreactdomproductionmin__Dn = function (e) {
  var t = this;e instanceof t || reactdomcjsreactdomproductionmin__xn("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e);
},
    reactdomcjsreactdomproductionmin__An = 10,
    reactdomcjsreactdomproductionmin__Rn = reactdomcjsreactdomproductionmin__In,
    reactdomcjsreactdomproductionmin__Un = function (e, t) {
  var n = e;return n.instancePool = [], n.getPooled = t || reactdomcjsreactdomproductionmin__Rn, n.poolSize || (n.poolSize = reactdomcjsreactdomproductionmin__An), n.release = reactdomcjsreactdomproductionmin__Dn, n;
},
    reactdomcjsreactdomproductionmin__Hn = { addPoolingTo: reactdomcjsreactdomproductionmin__Un, oneArgumentPooler: reactdomcjsreactdomproductionmin__In, twoArgumentPooler: reactdomcjsreactdomproductionmin__Fn, threeArgumentPooler: reactdomcjsreactdomproductionmin__On, fourArgumentPooler: reactdomcjsreactdomproductionmin__Mn },
    reactdomcjsreactdomproductionmin__Ln = reactdomcjsreactdomproductionmin__Hn,
    reactdomcjsreactdomproductionmin__Wn = { MUST_USE_PROPERTY: 1, HAS_BOOLEAN_VALUE: 4, HAS_NUMERIC_VALUE: 8, HAS_POSITIVE_NUMERIC_VALUE: 24, HAS_OVERLOADED_BOOLEAN_VALUE: 32, injectDOMPropertyConfig: function (e) {
    var t = reactdomcjsreactdomproductionmin__Wn,
        n = e.Properties || {},
        r = e.DOMAttributeNamespaces || {},
        a = e.DOMAttributeNames || {},
        i = e.DOMPropertyNames || {},
        l = e.DOMMutationMethods || {};e.isCustomAttribute && reactdomcjsreactdomproductionmin__Vn._isCustomAttributeFunctions.push(e.isCustomAttribute);for (var u in n) {
      reactdomcjsreactdomproductionmin__Vn.properties.hasOwnProperty(u) && reactdomcjsreactdomproductionmin__xn("48", u);var s = u.toLowerCase(),
          c = n[u],
          p = { attributeName: s, attributeNamespace: null, propertyName: u, mutationMethod: null, mustUseProperty: reactdomcjsreactdomproductionmin__o(c, t.MUST_USE_PROPERTY), hasBooleanValue: reactdomcjsreactdomproductionmin__o(c, t.HAS_BOOLEAN_VALUE), hasNumericValue: reactdomcjsreactdomproductionmin__o(c, t.HAS_NUMERIC_VALUE), hasPositiveNumericValue: reactdomcjsreactdomproductionmin__o(c, t.HAS_POSITIVE_NUMERIC_VALUE), hasOverloadedBooleanValue: reactdomcjsreactdomproductionmin__o(c, t.HAS_OVERLOADED_BOOLEAN_VALUE) };if (p.hasBooleanValue + p.hasNumericValue + p.hasOverloadedBooleanValue <= 1 || reactdomcjsreactdomproductionmin__xn("50", u), a.hasOwnProperty(u)) {
        var d = a[u];p.attributeName = d;
      }r.hasOwnProperty(u) && (p.attributeNamespace = r[u]), i.hasOwnProperty(u) && (p.propertyName = i[u]), l.hasOwnProperty(u) && (p.mutationMethod = l[u]), reactdomcjsreactdomproductionmin__Vn.properties[u] = p;
    }
  } },
    reactdomcjsreactdomproductionmin__Bn = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
    reactdomcjsreactdomproductionmin__Vn = { ID_ATTRIBUTE_NAME: "data-reactid", ROOT_ATTRIBUTE_NAME: "data-reactroot", ATTRIBUTE_NAME_START_CHAR: reactdomcjsreactdomproductionmin__Bn, ATTRIBUTE_NAME_CHAR: reactdomcjsreactdomproductionmin__Bn + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", properties: {}, getPossibleStandardName: null, _isCustomAttributeFunctions: [], isCustomAttribute: function (e) {
    for (var t = 0; t < reactdomcjsreactdomproductionmin__Vn._isCustomAttributeFunctions.length; t++) {
      if ((0, reactdomcjsreactdomproductionmin__Vn._isCustomAttributeFunctions[t])(e)) return !0;
    }return !1;
  }, injection: reactdomcjsreactdomproductionmin__Wn },
    reactdomcjsreactdomproductionmin__jn = reactdomcjsreactdomproductionmin__Vn,
    reactdomcjsreactdomproductionmin__zn = { hasCachedChildNodes: 1 },
    reactdomcjsreactdomproductionmin__Kn = reactdomcjsreactdomproductionmin__zn,
    reactdomcjsreactdomproductionmin__Yn = { IndeterminateComponent: 0, FunctionalComponent: 1, ClassComponent: 2, HostRoot: 3, HostPortal: 4, HostComponent: 5, HostText: 6, CoroutineComponent: 7, CoroutineHandlerPhase: 8, YieldComponent: 9, Fragment: 10 },
    reactdomcjsreactdomproductionmin__qn = { ELEMENT_NODE: 1, TEXT_NODE: 3, COMMENT_NODE: 8, DOCUMENT_NODE: 9, DOCUMENT_FRAGMENT_NODE: 11 },
    reactdomcjsreactdomproductionmin__Qn = reactdomcjsreactdomproductionmin__qn,
    reactdomcjsreactdomproductionmin__$n = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__Xn = reactdomcjsreactdomproductionmin__Yn.HostText,
    reactdomcjsreactdomproductionmin__Gn = reactdomcjsreactdomproductionmin__Qn.ELEMENT_NODE,
    reactdomcjsreactdomproductionmin__Zn = reactdomcjsreactdomproductionmin__Qn.COMMENT_NODE,
    reactdomcjsreactdomproductionmin__Jn = reactdomcjsreactdomproductionmin__jn.ID_ATTRIBUTE_NAME,
    reactdomcjsreactdomproductionmin__er = reactdomcjsreactdomproductionmin__Kn,
    reactdomcjsreactdomproductionmin__tr = Math.random().toString(36).slice(2),
    reactdomcjsreactdomproductionmin__nr = "__reactInternalInstance$" + reactdomcjsreactdomproductionmin__tr,
    reactdomcjsreactdomproductionmin__rr = "__reactEventHandlers$" + reactdomcjsreactdomproductionmin__tr,
    reactdomcjsreactdomproductionmin__or = { getClosestInstanceFromNode: reactdomcjsreactdomproductionmin__p, getInstanceFromNode: reactdomcjsreactdomproductionmin__d, getNodeFromInstance: reactdomcjsreactdomproductionmin__f, precacheChildNodes: reactdomcjsreactdomproductionmin__c, precacheNode: reactdomcjsreactdomproductionmin__l, uncacheNode: reactdomcjsreactdomproductionmin__s, precacheFiberNode: reactdomcjsreactdomproductionmin__u, getFiberCurrentPropsFromNode: reactdomcjsreactdomproductionmin__h, updateFiberProps: reactdomcjsreactdomproductionmin__g },
    reactdomcjsreactdomproductionmin__ar = reactdomcjsreactdomproductionmin__or,
    reactdomcjsreactdomproductionmin__ir = { remove: function (e) {
    e._reactInternalInstance = void 0;
  }, get: function (e) {
    return e._reactInternalInstance;
  }, has: function (e) {
    return void 0 !== e._reactInternalInstance;
  }, set: function (e, t) {
    e._reactInternalInstance = t;
  } },
    reactdomcjsreactdomproductionmin__lr = reactdomcjsreactdomproductionmin__ir,
    reactdomcjsreactdomproductionmin__ur = reactdomcjsreactdomproductionmin__yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    reactdomcjsreactdomproductionmin__sr = { ReactCurrentOwner: reactdomcjsreactdomproductionmin__ur.ReactCurrentOwner },
    reactdomcjsreactdomproductionmin__cr = reactdomcjsreactdomproductionmin__sr,
    reactdomcjsreactdomproductionmin__pr = reactdomcjsreactdomproductionmin__v,
    reactdomcjsreactdomproductionmin__dr = { NoEffect: 0, PerformedWork: 1, Placement: 2, Update: 4, PlacementAndUpdate: 6, Deletion: 8, ContentReset: 16, Callback: 32, Err: 64, Ref: 128 },
    reactdomcjsreactdomproductionmin__fr = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__hr = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__gr = reactdomcjsreactdomproductionmin__Yn.HostPortal,
    reactdomcjsreactdomproductionmin__vr = reactdomcjsreactdomproductionmin__Yn.HostText,
    reactdomcjsreactdomproductionmin__mr = reactdomcjsreactdomproductionmin__dr.NoEffect,
    reactdomcjsreactdomproductionmin__yr = reactdomcjsreactdomproductionmin__dr.Placement,
    reactdomcjsreactdomproductionmin__br = 1,
    reactdomcjsreactdomproductionmin__Cr = 2,
    reactdomcjsreactdomproductionmin__Er = 3,
    reactdomcjsreactdomproductionmin__kr = function (e) {
  return reactdomcjsreactdomproductionmin__m(e) === reactdomcjsreactdomproductionmin__Cr;
},
    reactdomcjsreactdomproductionmin__Pr = function (e) {
  var t = reactdomcjsreactdomproductionmin__lr.get(e);return !!t && reactdomcjsreactdomproductionmin__m(t) === reactdomcjsreactdomproductionmin__Cr;
},
    reactdomcjsreactdomproductionmin__Tr = reactdomcjsreactdomproductionmin__b,
    reactdomcjsreactdomproductionmin__xr = function (e) {
  var t = reactdomcjsreactdomproductionmin__b(e);if (!t) return null;for (var n = t;;) {
    if (n.tag === reactdomcjsreactdomproductionmin__fr || n.tag === reactdomcjsreactdomproductionmin__vr) return n;if (n.child) n.child.return = n, n = n.child;else {
      if (n === t) return null;for (; !n.sibling;) {
        if (!n.return || n.return === t) return null;n = n.return;
      }n.sibling.return = n.return, n = n.sibling;
    }
  }return null;
},
    reactdomcjsreactdomproductionmin__wr = function (e) {
  var t = reactdomcjsreactdomproductionmin__b(e);if (!t) return null;for (var n = t;;) {
    if (n.tag === reactdomcjsreactdomproductionmin__fr || n.tag === reactdomcjsreactdomproductionmin__vr) return n;if (n.child && n.tag !== reactdomcjsreactdomproductionmin__gr) n.child.return = n, n = n.child;else {
      if (n === t) return null;for (; !n.sibling;) {
        if (!n.return || n.return === t) return null;n = n.return;
      }n.sibling.return = n.return, n = n.sibling;
    }
  }return null;
},
    reactdomcjsreactdomproductionmin__Nr = { isFiberMounted: reactdomcjsreactdomproductionmin__kr, isMounted: reactdomcjsreactdomproductionmin__Pr, findCurrentFiberUsingSlowPath: reactdomcjsreactdomproductionmin__Tr, findCurrentHostFiber: reactdomcjsreactdomproductionmin__xr, findCurrentHostFiberWithNoPortals: reactdomcjsreactdomproductionmin__wr },
    reactdomcjsreactdomproductionmin__Sr = { _caughtError: null, _hasCaughtError: !1, _rethrowError: null, _hasRethrowError: !1, injection: { injectErrorUtils: function (e) {
      "function" != typeof e.invokeGuardedCallback && reactdomcjsreactdomproductionmin__xn("197"), reactdomcjsreactdomproductionmin___r = e.invokeGuardedCallback;
    } }, invokeGuardedCallback: function (e, t, n, r, o, a, i, l, u) {
    reactdomcjsreactdomproductionmin___r.apply(reactdomcjsreactdomproductionmin__Sr, arguments);
  }, invokeGuardedCallbackAndCatchFirstError: function (e, t, n, r, o, a, i, l, u) {
    if (reactdomcjsreactdomproductionmin__Sr.invokeGuardedCallback.apply(this, arguments), reactdomcjsreactdomproductionmin__Sr.hasCaughtError()) {
      var s = reactdomcjsreactdomproductionmin__Sr.clearCaughtError();reactdomcjsreactdomproductionmin__Sr._hasRethrowError || (reactdomcjsreactdomproductionmin__Sr._hasRethrowError = !0, reactdomcjsreactdomproductionmin__Sr._rethrowError = s);
    }
  }, rethrowCaughtError: function () {
    return reactdomcjsreactdomproductionmin__Ir.apply(reactdomcjsreactdomproductionmin__Sr, arguments);
  }, hasCaughtError: function () {
    return reactdomcjsreactdomproductionmin__Sr._hasCaughtError;
  }, clearCaughtError: function () {
    if (reactdomcjsreactdomproductionmin__Sr._hasCaughtError) {
      var e = reactdomcjsreactdomproductionmin__Sr._caughtError;return reactdomcjsreactdomproductionmin__Sr._caughtError = null, reactdomcjsreactdomproductionmin__Sr._hasCaughtError = !1, e;
    }reactdomcjsreactdomproductionmin__xn("198");
  } },
    reactdomcjsreactdomproductionmin___r = function (e, t, n, r, o, a, i, l, u) {
  reactdomcjsreactdomproductionmin__Sr._hasCaughtError = !1, reactdomcjsreactdomproductionmin__Sr._caughtError = null;var s = Array.prototype.slice.call(arguments, 3);try {
    t.apply(n, s);
  } catch (e) {
    reactdomcjsreactdomproductionmin__Sr._caughtError = e, reactdomcjsreactdomproductionmin__Sr._hasCaughtError = !0;
  }
},
    reactdomcjsreactdomproductionmin__Ir = function () {
  if (reactdomcjsreactdomproductionmin__Sr._hasRethrowError) {
    var e = reactdomcjsreactdomproductionmin__Sr._rethrowError;throw reactdomcjsreactdomproductionmin__Sr._rethrowError = null, reactdomcjsreactdomproductionmin__Sr._hasRethrowError = !1, e;
  }
},
    reactdomcjsreactdomproductionmin__Fr = reactdomcjsreactdomproductionmin__Sr,
    reactdomcjsreactdomproductionmin__Or,
    reactdomcjsreactdomproductionmin__Mr = { injectComponentTree: function (e) {
    reactdomcjsreactdomproductionmin__Or = e;
  } },
    reactdomcjsreactdomproductionmin__Dr = { isEndish: reactdomcjsreactdomproductionmin__C, isMoveish: reactdomcjsreactdomproductionmin__E, isStartish: reactdomcjsreactdomproductionmin__k, executeDirectDispatch: reactdomcjsreactdomproductionmin__N, executeDispatchesInOrder: reactdomcjsreactdomproductionmin__T, executeDispatchesInOrderStopAtTrue: reactdomcjsreactdomproductionmin__w, hasDispatches: reactdomcjsreactdomproductionmin__S, getFiberCurrentPropsFromNode: function (e) {
    return reactdomcjsreactdomproductionmin__Or.getFiberCurrentPropsFromNode(e);
  }, getInstanceFromNode: function (e) {
    return reactdomcjsreactdomproductionmin__Or.getInstanceFromNode(e);
  }, getNodeFromInstance: function (e) {
    return reactdomcjsreactdomproductionmin__Or.getNodeFromInstance(e);
  }, injection: reactdomcjsreactdomproductionmin__Mr },
    reactdomcjsreactdomproductionmin__Ar = reactdomcjsreactdomproductionmin__Dr,
    reactdomcjsreactdomproductionmin__Rr = null,
    reactdomcjsreactdomproductionmin__Ur = { injectFiberControlledHostComponent: function (e) {
    reactdomcjsreactdomproductionmin__Rr = e;
  } },
    reactdomcjsreactdomproductionmin__Hr = null,
    reactdomcjsreactdomproductionmin__Lr = null,
    reactdomcjsreactdomproductionmin__Wr = { injection: reactdomcjsreactdomproductionmin__Ur, enqueueStateRestore: function (e) {
    reactdomcjsreactdomproductionmin__Hr ? reactdomcjsreactdomproductionmin__Lr ? reactdomcjsreactdomproductionmin__Lr.push(e) : reactdomcjsreactdomproductionmin__Lr = [e] : reactdomcjsreactdomproductionmin__Hr = e;
  }, restoreStateIfNeeded: function () {
    if (reactdomcjsreactdomproductionmin__Hr) {
      var e = reactdomcjsreactdomproductionmin__Hr,
          t = reactdomcjsreactdomproductionmin__Lr;if (reactdomcjsreactdomproductionmin__Hr = null, reactdomcjsreactdomproductionmin__Lr = null, reactdomcjsreactdomproductionmin___(e), t) for (var n = 0; n < t.length; n++) reactdomcjsreactdomproductionmin___(t[n]);
    }
  } },
    reactdomcjsreactdomproductionmin__Br = reactdomcjsreactdomproductionmin__Wr,
    reactdomcjsreactdomproductionmin__Vr = function (e, t, n, r, o, a) {
  return e(t, n, r, o, a);
},
    reactdomcjsreactdomproductionmin__jr = function (e, t) {
  return e(t);
},
    reactdomcjsreactdomproductionmin__zr = !1,
    reactdomcjsreactdomproductionmin__Kr = { injectStackBatchedUpdates: function (e) {
    reactdomcjsreactdomproductionmin__Vr = e;
  }, injectFiberBatchedUpdates: function (e) {
    reactdomcjsreactdomproductionmin__jr = e;
  } },
    reactdomcjsreactdomproductionmin__Yr = { batchedUpdates: reactdomcjsreactdomproductionmin__O, injection: reactdomcjsreactdomproductionmin__Kr },
    reactdomcjsreactdomproductionmin__qr = reactdomcjsreactdomproductionmin__Yr,
    reactdomcjsreactdomproductionmin__Qr = reactdomcjsreactdomproductionmin__Qn.TEXT_NODE,
    reactdomcjsreactdomproductionmin__$r = reactdomcjsreactdomproductionmin__M,
    reactdomcjsreactdomproductionmin__Xr = reactdomcjsreactdomproductionmin__Yn.HostRoot;reactdomcjsreactdomproductionmin__gn(reactdomcjsreactdomproductionmin__A.prototype, { destructor: function () {
    this.topLevelType = null, this.nativeEvent = null, this.targetInst = null, this.ancestors.length = 0;
  } }), reactdomcjsreactdomproductionmin__Ln.addPoolingTo(reactdomcjsreactdomproductionmin__A, reactdomcjsreactdomproductionmin__Ln.threeArgumentPooler);var reactdomcjsreactdomproductionmin__Gr = { _enabled: !0, _handleTopLevel: null, setHandleTopLevel: function (e) {
    reactdomcjsreactdomproductionmin__Gr._handleTopLevel = e;
  }, setEnabled: function (e) {
    reactdomcjsreactdomproductionmin__Gr._enabled = !!e;
  }, isEnabled: function () {
    return reactdomcjsreactdomproductionmin__Gr._enabled;
  }, trapBubbledEvent: function (e, t, n) {
    return n ? reactdomcjsreactdomproductionmin__mn.listen(n, t, reactdomcjsreactdomproductionmin__Gr.dispatchEvent.bind(null, e)) : null;
  }, trapCapturedEvent: function (e, t, n) {
    return n ? reactdomcjsreactdomproductionmin__mn.capture(n, t, reactdomcjsreactdomproductionmin__Gr.dispatchEvent.bind(null, e)) : null;
  }, dispatchEvent: function (e, t) {
    if (reactdomcjsreactdomproductionmin__Gr._enabled) {
      var n = reactdomcjsreactdomproductionmin__$r(t),
          r = reactdomcjsreactdomproductionmin__ar.getClosestInstanceFromNode(n);null === r || "number" != typeof r.tag || reactdomcjsreactdomproductionmin__Nr.isFiberMounted(r) || (r = null);var o = reactdomcjsreactdomproductionmin__A.getPooled(e, t, r);try {
        reactdomcjsreactdomproductionmin__qr.batchedUpdates(reactdomcjsreactdomproductionmin__R, o);
      } finally {
        reactdomcjsreactdomproductionmin__A.release(o);
      }
    }
  } },
    reactdomcjsreactdomproductionmin__Zr = reactdomcjsreactdomproductionmin__Gr,
    reactdomcjsreactdomproductionmin__Jr = reactdomcjsreactdomproductionmin__U,
    reactdomcjsreactdomproductionmin__eo = reactdomcjsreactdomproductionmin__H,
    reactdomcjsreactdomproductionmin__to = null,
    reactdomcjsreactdomproductionmin__no = function (e, t) {
  e && (reactdomcjsreactdomproductionmin__Ar.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e));
},
    reactdomcjsreactdomproductionmin__ro = function (e) {
  return reactdomcjsreactdomproductionmin__no(e, !0);
},
    reactdomcjsreactdomproductionmin__oo = function (e) {
  return reactdomcjsreactdomproductionmin__no(e, !1);
},
    reactdomcjsreactdomproductionmin__ao = { injection: { injectEventPluginOrder: reactdomcjsreactdomproductionmin___n.injectEventPluginOrder, injectEventPluginsByName: reactdomcjsreactdomproductionmin___n.injectEventPluginsByName }, getListener: function (e, t) {
    var n;if ("number" == typeof e.tag) {
      var r = e.stateNode;if (!r) return null;var o = reactdomcjsreactdomproductionmin__Ar.getFiberCurrentPropsFromNode(r);if (!o) return null;if (n = o[t], reactdomcjsreactdomproductionmin__W(t, e.type, o)) return null;
    } else {
      var a = e._currentElement;if ("string" == typeof a || "number" == typeof a) return null;if (!e._rootNodeID) return null;var i = a.props;if (n = i[t], reactdomcjsreactdomproductionmin__W(t, a.type, i)) return null;
    }return n && "function" != typeof n && reactdomcjsreactdomproductionmin__xn("94", t, typeof n), n;
  }, extractEvents: function (e, t, n, r) {
    for (var o, a = reactdomcjsreactdomproductionmin___n.plugins, i = 0; i < a.length; i++) {
      var l = a[i];if (l) {
        var u = l.extractEvents(e, t, n, r);u && (o = reactdomcjsreactdomproductionmin__Jr(o, u));
      }
    }return o;
  }, enqueueEvents: function (e) {
    e && (reactdomcjsreactdomproductionmin__to = reactdomcjsreactdomproductionmin__Jr(reactdomcjsreactdomproductionmin__to, e));
  }, processEventQueue: function (e) {
    var t = reactdomcjsreactdomproductionmin__to;reactdomcjsreactdomproductionmin__to = null, e ? reactdomcjsreactdomproductionmin__eo(t, reactdomcjsreactdomproductionmin__ro) : reactdomcjsreactdomproductionmin__eo(t, reactdomcjsreactdomproductionmin__oo), reactdomcjsreactdomproductionmin__to && reactdomcjsreactdomproductionmin__xn("95"), reactdomcjsreactdomproductionmin__Fr.rethrowCaughtError();
  } },
    reactdomcjsreactdomproductionmin__io = reactdomcjsreactdomproductionmin__ao,
    reactdomcjsreactdomproductionmin__lo = { handleTopLevel: function (e, t, n, r) {
    reactdomcjsreactdomproductionmin__B(reactdomcjsreactdomproductionmin__io.extractEvents(e, t, n, r));
  } },
    reactdomcjsreactdomproductionmin__uo = reactdomcjsreactdomproductionmin__lo,
    reactdomcjsreactdomproductionmin__so;reactdomcjsreactdomproductionmin__hn.canUseDOM && (reactdomcjsreactdomproductionmin__so = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));var reactdomcjsreactdomproductionmin__co = reactdomcjsreactdomproductionmin__V,
    reactdomcjsreactdomproductionmin__po = { animationend: reactdomcjsreactdomproductionmin__j("Animation", "AnimationEnd"), animationiteration: reactdomcjsreactdomproductionmin__j("Animation", "AnimationIteration"), animationstart: reactdomcjsreactdomproductionmin__j("Animation", "AnimationStart"), transitionend: reactdomcjsreactdomproductionmin__j("Transition", "TransitionEnd") },
    reactdomcjsreactdomproductionmin__fo = {},
    reactdomcjsreactdomproductionmin__ho = {};reactdomcjsreactdomproductionmin__hn.canUseDOM && (reactdomcjsreactdomproductionmin__ho = document.createElement("div").style, "AnimationEvent" in window || (delete reactdomcjsreactdomproductionmin__po.animationend.animation, delete reactdomcjsreactdomproductionmin__po.animationiteration.animation, delete reactdomcjsreactdomproductionmin__po.animationstart.animation), "TransitionEvent" in window || delete reactdomcjsreactdomproductionmin__po.transitionend.transition);var reactdomcjsreactdomproductionmin__go = reactdomcjsreactdomproductionmin__z,
    reactdomcjsreactdomproductionmin__vo = { topAbort: "abort", topAnimationEnd: reactdomcjsreactdomproductionmin__go("animationend") || "animationend", topAnimationIteration: reactdomcjsreactdomproductionmin__go("animationiteration") || "animationiteration", topAnimationStart: reactdomcjsreactdomproductionmin__go("animationstart") || "animationstart", topBlur: "blur", topCancel: "cancel", topCanPlay: "canplay", topCanPlayThrough: "canplaythrough", topChange: "change", topClick: "click", topClose: "close", topCompositionEnd: "compositionend", topCompositionStart: "compositionstart", topCompositionUpdate: "compositionupdate", topContextMenu: "contextmenu", topCopy: "copy", topCut: "cut", topDoubleClick: "dblclick", topDrag: "drag", topDragEnd: "dragend", topDragEnter: "dragenter", topDragExit: "dragexit", topDragLeave: "dragleave", topDragOver: "dragover", topDragStart: "dragstart", topDrop: "drop", topDurationChange: "durationchange", topEmptied: "emptied", topEncrypted: "encrypted", topEnded: "ended", topError: "error", topFocus: "focus", topInput: "input", topKeyDown: "keydown", topKeyPress: "keypress", topKeyUp: "keyup", topLoadedData: "loadeddata", topLoad: "load", topLoadedMetadata: "loadedmetadata", topLoadStart: "loadstart", topMouseDown: "mousedown", topMouseMove: "mousemove", topMouseOut: "mouseout", topMouseOver: "mouseover", topMouseUp: "mouseup", topPaste: "paste", topPause: "pause", topPlay: "play", topPlaying: "playing", topProgress: "progress", topRateChange: "ratechange", topScroll: "scroll", topSeeked: "seeked", topSeeking: "seeking", topSelectionChange: "selectionchange", topStalled: "stalled", topSuspend: "suspend", topTextInput: "textInput", topTimeUpdate: "timeupdate", topToggle: "toggle", topTouchCancel: "touchcancel", topTouchEnd: "touchend", topTouchMove: "touchmove", topTouchStart: "touchstart", topTransitionEnd: reactdomcjsreactdomproductionmin__go("transitionend") || "transitionend", topVolumeChange: "volumechange", topWaiting: "waiting", topWheel: "wheel" },
    reactdomcjsreactdomproductionmin__mo = { topLevelTypes: reactdomcjsreactdomproductionmin__vo },
    reactdomcjsreactdomproductionmin__yo = reactdomcjsreactdomproductionmin__mo,
    reactdomcjsreactdomproductionmin__bo = reactdomcjsreactdomproductionmin__yo.topLevelTypes,
    reactdomcjsreactdomproductionmin__Co = {},
    reactdomcjsreactdomproductionmin__Eo = 0,
    reactdomcjsreactdomproductionmin__ko = "_reactListenersID" + ("" + Math.random()).slice(2),
    reactdomcjsreactdomproductionmin__Po = reactdomcjsreactdomproductionmin__gn({}, reactdomcjsreactdomproductionmin__uo, { setEnabled: function (e) {
    reactdomcjsreactdomproductionmin__Zr && reactdomcjsreactdomproductionmin__Zr.setEnabled(e);
  }, isEnabled: function () {
    return !(!reactdomcjsreactdomproductionmin__Zr || !reactdomcjsreactdomproductionmin__Zr.isEnabled());
  }, listenTo: function (e, t) {
    for (var n = t, r = reactdomcjsreactdomproductionmin__K(n), o = reactdomcjsreactdomproductionmin___n.registrationNameDependencies[e], a = 0; a < o.length; a++) {
      var i = o[a];r.hasOwnProperty(i) && r[i] || ("topWheel" === i ? reactdomcjsreactdomproductionmin__co("wheel") ? reactdomcjsreactdomproductionmin__Zr.trapBubbledEvent("topWheel", "wheel", n) : reactdomcjsreactdomproductionmin__co("mousewheel") ? reactdomcjsreactdomproductionmin__Zr.trapBubbledEvent("topWheel", "mousewheel", n) : reactdomcjsreactdomproductionmin__Zr.trapBubbledEvent("topWheel", "DOMMouseScroll", n) : "topScroll" === i ? reactdomcjsreactdomproductionmin__Zr.trapCapturedEvent("topScroll", "scroll", n) : "topFocus" === i || "topBlur" === i ? (reactdomcjsreactdomproductionmin__Zr.trapCapturedEvent("topFocus", "focus", n), reactdomcjsreactdomproductionmin__Zr.trapCapturedEvent("topBlur", "blur", n), r.topBlur = !0, r.topFocus = !0) : "topCancel" === i ? (reactdomcjsreactdomproductionmin__co("cancel", !0) && reactdomcjsreactdomproductionmin__Zr.trapCapturedEvent("topCancel", "cancel", n), r.topCancel = !0) : "topClose" === i ? (reactdomcjsreactdomproductionmin__co("close", !0) && reactdomcjsreactdomproductionmin__Zr.trapCapturedEvent("topClose", "close", n), r.topClose = !0) : reactdomcjsreactdomproductionmin__bo.hasOwnProperty(i) && reactdomcjsreactdomproductionmin__Zr.trapBubbledEvent(i, reactdomcjsreactdomproductionmin__bo[i], n), r[i] = !0);
    }
  }, isListeningToAllDependencies: function (e, t) {
    for (var n = reactdomcjsreactdomproductionmin__K(t), r = reactdomcjsreactdomproductionmin___n.registrationNameDependencies[e], o = 0; o < r.length; o++) {
      var a = r[o];if (!n.hasOwnProperty(a) || !n[a]) return !1;
    }return !0;
  }, trapBubbledEvent: function (e, t, n) {
    return reactdomcjsreactdomproductionmin__Zr.trapBubbledEvent(e, t, n);
  }, trapCapturedEvent: function (e, t, n) {
    return reactdomcjsreactdomproductionmin__Zr.trapCapturedEvent(e, t, n);
  } }),
    reactdomcjsreactdomproductionmin__To = reactdomcjsreactdomproductionmin__Po,
    reactdomcjsreactdomproductionmin__xo = { disableNewFiberFeatures: !1, enableAsyncSubtreeAPI: !1 },
    reactdomcjsreactdomproductionmin__wo = reactdomcjsreactdomproductionmin__xo,
    reactdomcjsreactdomproductionmin__No = { fiberAsyncScheduling: !1, useFiber: !0 },
    reactdomcjsreactdomproductionmin__So = reactdomcjsreactdomproductionmin__No,
    reactdomcjsreactdomproductionmin___o = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    reactdomcjsreactdomproductionmin__Io = ["Webkit", "ms", "Moz", "O"];Object.keys(reactdomcjsreactdomproductionmin___o).forEach(function (e) {
  reactdomcjsreactdomproductionmin__Io.forEach(function (t) {
    reactdomcjsreactdomproductionmin___o[reactdomcjsreactdomproductionmin__Y(t, e)] = reactdomcjsreactdomproductionmin___o[e];
  });
});var reactdomcjsreactdomproductionmin__Fo = { background: { backgroundAttachment: !0, backgroundColor: !0, backgroundImage: !0, backgroundPositionX: !0, backgroundPositionY: !0, backgroundRepeat: !0 }, backgroundPosition: { backgroundPositionX: !0, backgroundPositionY: !0 }, border: { borderWidth: !0, borderStyle: !0, borderColor: !0 }, borderBottom: { borderBottomWidth: !0, borderBottomStyle: !0, borderBottomColor: !0 }, borderLeft: { borderLeftWidth: !0, borderLeftStyle: !0, borderLeftColor: !0 }, borderRight: { borderRightWidth: !0, borderRightStyle: !0, borderRightColor: !0 }, borderTop: { borderTopWidth: !0, borderTopStyle: !0, borderTopColor: !0 }, font: { fontStyle: !0, fontVariant: !0, fontWeight: !0, fontSize: !0, lineHeight: !0, fontFamily: !0 }, outline: { outlineWidth: !0, outlineStyle: !0, outlineColor: !0 } },
    reactdomcjsreactdomproductionmin__Oo = { isUnitlessNumber: reactdomcjsreactdomproductionmin___o, shorthandPropertyExpansions: reactdomcjsreactdomproductionmin__Fo },
    reactdomcjsreactdomproductionmin__Mo = reactdomcjsreactdomproductionmin__Oo,
    reactdomcjsreactdomproductionmin__Do = reactdomcjsreactdomproductionmin__Mo.isUnitlessNumber,
    reactdomcjsreactdomproductionmin__Ao = reactdomcjsreactdomproductionmin__q,
    reactdomcjsreactdomproductionmin__Ro = !1;if (reactdomcjsreactdomproductionmin__hn.canUseDOM) {
  var reactdomcjsreactdomproductionmin__Uo = document.createElement("div").style;try {
    reactdomcjsreactdomproductionmin__Uo.font = "";
  } catch (e) {
    reactdomcjsreactdomproductionmin__Ro = !0;
  }
}var reactdomcjsreactdomproductionmin__Ho = { createDangerousStringForStyles: function (e) {}, setValueForStyles: function (e, t, n) {
    var r = e.style;for (var o in t) if (t.hasOwnProperty(o)) {
      var a = 0 === o.indexOf("--"),
          i = reactdomcjsreactdomproductionmin__Ao(o, t[o], a);if ("float" === o && (o = "cssFloat"), a) r.setProperty(o, i);else if (i) r[o] = i;else {
        var l = reactdomcjsreactdomproductionmin__Ro && reactdomcjsreactdomproductionmin__Mo.shorthandPropertyExpansions[o];if (l) for (var u in l) r[u] = "";else r[o] = "";
      }
    }
  } },
    reactdomcjsreactdomproductionmin__Lo = reactdomcjsreactdomproductionmin__Ho,
    reactdomcjsreactdomproductionmin__Wo = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" },
    reactdomcjsreactdomproductionmin__Bo = reactdomcjsreactdomproductionmin__Wo,
    reactdomcjsreactdomproductionmin__Vo = new RegExp("^[" + reactdomcjsreactdomproductionmin__jn.ATTRIBUTE_NAME_START_CHAR + "][" + reactdomcjsreactdomproductionmin__jn.ATTRIBUTE_NAME_CHAR + "]*$"),
    reactdomcjsreactdomproductionmin__jo = {},
    reactdomcjsreactdomproductionmin__zo = {},
    reactdomcjsreactdomproductionmin__Ko = { setAttributeForID: function (e, t) {
    e.setAttribute(reactdomcjsreactdomproductionmin__jn.ID_ATTRIBUTE_NAME, t);
  }, setAttributeForRoot: function (e) {
    e.setAttribute(reactdomcjsreactdomproductionmin__jn.ROOT_ATTRIBUTE_NAME, "");
  }, getValueForProperty: function (e, t, n) {}, getValueForAttribute: function (e, t, n) {}, setValueForProperty: function (e, t, n) {
    var r = reactdomcjsreactdomproductionmin__jn.properties.hasOwnProperty(t) ? reactdomcjsreactdomproductionmin__jn.properties[t] : null;if (r) {
      var o = r.mutationMethod;if (o) o(e, n);else {
        if (reactdomcjsreactdomproductionmin__$(r, n)) return void reactdomcjsreactdomproductionmin__Ko.deleteValueForProperty(e, t);if (r.mustUseProperty) e[r.propertyName] = n;else {
          var a = r.attributeName,
              i = r.attributeNamespace;i ? e.setAttributeNS(i, a, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === n ? e.setAttribute(a, "") : e.setAttribute(a, "" + n);
        }
      }
    } else if (reactdomcjsreactdomproductionmin__jn.isCustomAttribute(t)) return void reactdomcjsreactdomproductionmin__Ko.setValueForAttribute(e, t, n);
  }, setValueForAttribute: function (e, t, n) {
    reactdomcjsreactdomproductionmin__Q(t) && (null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n));
  }, deleteValueForAttribute: function (e, t) {
    e.removeAttribute(t);
  }, deleteValueForProperty: function (e, t) {
    var n = reactdomcjsreactdomproductionmin__jn.properties.hasOwnProperty(t) ? reactdomcjsreactdomproductionmin__jn.properties[t] : null;if (n) {
      var r = n.mutationMethod;if (r) r(e, void 0);else if (n.mustUseProperty) {
        var o = n.propertyName;n.hasBooleanValue ? e[o] = !1 : e[o] = "";
      } else e.removeAttribute(n.attributeName);
    } else reactdomcjsreactdomproductionmin__jn.isCustomAttribute(t) && e.removeAttribute(t);
  } },
    reactdomcjsreactdomproductionmin__Yo = reactdomcjsreactdomproductionmin__Ko,
    reactdomcjsreactdomproductionmin__qo = reactdomcjsreactdomproductionmin__cr.ReactDebugCurrentFrame,
    reactdomcjsreactdomproductionmin__Qo = { current: null, phase: null, resetCurrentFiber: reactdomcjsreactdomproductionmin__Z, setCurrentFiber: reactdomcjsreactdomproductionmin__J, getCurrentFiberOwnerName: reactdomcjsreactdomproductionmin__X, getCurrentFiberStackAddendum: reactdomcjsreactdomproductionmin__G },
    reactdomcjsreactdomproductionmin__$o = reactdomcjsreactdomproductionmin__Qo,
    reactdomcjsreactdomproductionmin__Xo = { getHostProps: function (e, t) {
    var n = e,
        r = t.value,
        o = t.checked;return reactdomcjsreactdomproductionmin__gn({ type: void 0, step: void 0, min: void 0, max: void 0 }, t, { defaultChecked: void 0, defaultValue: void 0, value: null != r ? r : n._wrapperState.initialValue, checked: null != o ? o : n._wrapperState.initialChecked });
  }, initWrapperState: function (e, t) {
    var n = t.defaultValue;e._wrapperState = { initialChecked: null != t.checked ? t.checked : t.defaultChecked, initialValue: null != t.value ? t.value : n, controlled: reactdomcjsreactdomproductionmin__ee(t) };
  }, updateWrapper: function (e, t) {
    var n = e,
        r = t.checked;null != r && reactdomcjsreactdomproductionmin__Yo.setValueForProperty(n, "checked", r || !1);var o = t.value;if (null != o) {
      if (0 === o && "" === n.value) n.value = "0";else if ("number" === t.type) {
        var a = parseFloat(n.value) || 0;(o != a || o == a && n.value != o) && (n.value = "" + o);
      } else n.value !== "" + o && (n.value = "" + o);
    } else null == t.value && null != t.defaultValue && n.defaultValue !== "" + t.defaultValue && (n.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (n.defaultChecked = !!t.defaultChecked);
  }, postMountWrapper: function (e, t) {
    var n = e;switch (t.type) {case "submit":case "reset":
        break;case "color":case "date":case "datetime":case "datetime-local":case "month":case "time":case "week":
        n.value = "", n.value = n.defaultValue;break;default:
        n.value = n.value;}var r = n.name;"" !== r && (n.name = ""), n.defaultChecked = !n.defaultChecked, n.defaultChecked = !n.defaultChecked, "" !== r && (n.name = r);
  }, restoreControlledState: function (e, t) {
    var n = e;reactdomcjsreactdomproductionmin__Xo.updateWrapper(n, t), reactdomcjsreactdomproductionmin__te(n, t);
  } },
    reactdomcjsreactdomproductionmin__Go = reactdomcjsreactdomproductionmin__Xo,
    reactdomcjsreactdomproductionmin__Zo = { validateProps: function (e, t) {}, postMountWrapper: function (e, t) {
    null != t.value && e.setAttribute("value", t.value);
  }, getHostProps: function (e, t) {
    var n = reactdomcjsreactdomproductionmin__gn({ children: void 0 }, t),
        r = reactdomcjsreactdomproductionmin__ne(t.children);return r && (n.children = r), n;
  } },
    reactdomcjsreactdomproductionmin__Jo = reactdomcjsreactdomproductionmin__Zo,
    reactdomcjsreactdomproductionmin__ea = { getHostProps: function (e, t) {
    return reactdomcjsreactdomproductionmin__gn({}, t, { value: void 0 });
  }, initWrapperState: function (e, t) {
    var n = e,
        r = t.value;n._wrapperState = { initialValue: null != r ? r : t.defaultValue, wasMultiple: !!t.multiple };
  }, postMountWrapper: function (e, t) {
    var n = e;n.multiple = !!t.multiple;var r = t.value;null != r ? reactdomcjsreactdomproductionmin__re(n, !!t.multiple, r) : null != t.defaultValue && reactdomcjsreactdomproductionmin__re(n, !!t.multiple, t.defaultValue);
  }, postUpdateWrapper: function (e, t) {
    var n = e;n._wrapperState.initialValue = void 0;var r = n._wrapperState.wasMultiple;n._wrapperState.wasMultiple = !!t.multiple;var o = t.value;null != o ? reactdomcjsreactdomproductionmin__re(n, !!t.multiple, o) : r !== !!t.multiple && (null != t.defaultValue ? reactdomcjsreactdomproductionmin__re(n, !!t.multiple, t.defaultValue) : reactdomcjsreactdomproductionmin__re(n, !!t.multiple, t.multiple ? [] : ""));
  }, restoreControlledState: function (e, t) {
    var n = e,
        r = t.value;null != r && reactdomcjsreactdomproductionmin__re(n, !!t.multiple, r);
  } },
    reactdomcjsreactdomproductionmin__ta = reactdomcjsreactdomproductionmin__ea,
    reactdomcjsreactdomproductionmin__na = { getHostProps: function (e, t) {
    var n = e;return null != t.dangerouslySetInnerHTML && reactdomcjsreactdomproductionmin__xn("91"), reactdomcjsreactdomproductionmin__gn({}, t, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }, initWrapperState: function (e, t) {
    var n = e,
        r = t.value,
        o = r;if (null == r) {
      var a = t.defaultValue,
          i = t.children;null != i && (null != a && reactdomcjsreactdomproductionmin__xn("92"), Array.isArray(i) && (i.length <= 1 || reactdomcjsreactdomproductionmin__xn("93"), i = i[0]), a = "" + i), null == a && (a = ""), o = a;
    }n._wrapperState = { initialValue: "" + o };
  }, updateWrapper: function (e, t) {
    var n = e,
        r = t.value;if (null != r) {
      var o = "" + r;o !== n.value && (n.value = o), null == t.defaultValue && (n.defaultValue = o);
    }null != t.defaultValue && (n.defaultValue = t.defaultValue);
  }, postMountWrapper: function (e, t) {
    var n = e,
        r = n.textContent;r === n._wrapperState.initialValue && (n.value = r);
  }, restoreControlledState: function (e, t) {
    reactdomcjsreactdomproductionmin__na.updateWrapper(e, t);
  } },
    reactdomcjsreactdomproductionmin__ra = reactdomcjsreactdomproductionmin__na,
    reactdomcjsreactdomproductionmin__oa = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 },
    reactdomcjsreactdomproductionmin__aa = reactdomcjsreactdomproductionmin__oa,
    reactdomcjsreactdomproductionmin__ia = reactdomcjsreactdomproductionmin__gn || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }return e;
},
    reactdomcjsreactdomproductionmin__la = reactdomcjsreactdomproductionmin__ia({ menuitem: !0 }, reactdomcjsreactdomproductionmin__aa),
    reactdomcjsreactdomproductionmin__ua = reactdomcjsreactdomproductionmin__la,
    reactdomcjsreactdomproductionmin__sa = "__html",
    reactdomcjsreactdomproductionmin__ca = reactdomcjsreactdomproductionmin__ae,
    reactdomcjsreactdomproductionmin__pa = { _getTrackerFromNode: reactdomcjsreactdomproductionmin__le, track: function (e) {
    reactdomcjsreactdomproductionmin__le(e) || (e._valueTracker = reactdomcjsreactdomproductionmin__ce(e));
  }, updateValueIfChanged: function (e) {
    if (!e) return !1;var t = reactdomcjsreactdomproductionmin__le(e);if (!t) return !0;var n = t.getValue(),
        r = reactdomcjsreactdomproductionmin__se(e);return r !== n && (t.setValue(r), !0);
  }, stopTracking: function (e) {
    var t = reactdomcjsreactdomproductionmin__le(e);t && t.stopTracking();
  } },
    reactdomcjsreactdomproductionmin__da = reactdomcjsreactdomproductionmin__pa,
    reactdomcjsreactdomproductionmin__fa = reactdomcjsreactdomproductionmin__pe,
    reactdomcjsreactdomproductionmin__ha = function (e) {
  return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function () {
      return e(t, n, r, o);
    });
  } : e;
},
    reactdomcjsreactdomproductionmin__ga = reactdomcjsreactdomproductionmin__ha,
    reactdomcjsreactdomproductionmin__va,
    reactdomcjsreactdomproductionmin__ma = reactdomcjsreactdomproductionmin__ga(function (e, t) {
  if (e.namespaceURI !== reactdomcjsreactdomproductionmin__Bo.svg || "innerHTML" in e) e.innerHTML = t;else {
    reactdomcjsreactdomproductionmin__va = reactdomcjsreactdomproductionmin__va || document.createElement("div"), reactdomcjsreactdomproductionmin__va.innerHTML = "<svg>" + t + "</svg>";for (var n = reactdomcjsreactdomproductionmin__va.firstChild; n.firstChild;) e.appendChild(n.firstChild);
  }
}),
    reactdomcjsreactdomproductionmin__ya = reactdomcjsreactdomproductionmin__ma,
    reactdomcjsreactdomproductionmin__ba = /["'&<>]/,
    reactdomcjsreactdomproductionmin__Ca = reactdomcjsreactdomproductionmin__fe,
    reactdomcjsreactdomproductionmin__Ea = reactdomcjsreactdomproductionmin__Qn.TEXT_NODE,
    reactdomcjsreactdomproductionmin__ka = function (e, t) {
  if (t) {
    var n = e.firstChild;if (n && n === e.lastChild && n.nodeType === reactdomcjsreactdomproductionmin__Ea) return void (n.nodeValue = t);
  }e.textContent = t;
};reactdomcjsreactdomproductionmin__hn.canUseDOM && ("textContent" in document.documentElement || (reactdomcjsreactdomproductionmin__ka = function (e, t) {
  if (e.nodeType === reactdomcjsreactdomproductionmin__Ea) return void (e.nodeValue = t);reactdomcjsreactdomproductionmin__ya(e, reactdomcjsreactdomproductionmin__Ca(t));
}));var reactdomcjsreactdomproductionmin__Pa = reactdomcjsreactdomproductionmin__ka,
    reactdomcjsreactdomproductionmin__Ta = reactdomcjsreactdomproductionmin__$o.getCurrentFiberOwnerName,
    reactdomcjsreactdomproductionmin__xa = reactdomcjsreactdomproductionmin__Qn.DOCUMENT_NODE,
    reactdomcjsreactdomproductionmin__wa = reactdomcjsreactdomproductionmin__Qn.DOCUMENT_FRAGMENT_NODE,
    reactdomcjsreactdomproductionmin__Na = reactdomcjsreactdomproductionmin__To.listenTo,
    reactdomcjsreactdomproductionmin__Sa = reactdomcjsreactdomproductionmin___n.registrationNameModules,
    reactdomcjsreactdomproductionmin___a = "dangerouslySetInnerHTML",
    reactdomcjsreactdomproductionmin__Ia = "suppressContentEditableWarning",
    reactdomcjsreactdomproductionmin__Fa = "children",
    reactdomcjsreactdomproductionmin__Oa = "style",
    reactdomcjsreactdomproductionmin__Ma = "__html",
    reactdomcjsreactdomproductionmin__Da = reactdomcjsreactdomproductionmin__Bo.html,
    reactdomcjsreactdomproductionmin__Aa = reactdomcjsreactdomproductionmin__Bo.svg,
    reactdomcjsreactdomproductionmin__Ra = reactdomcjsreactdomproductionmin__Bo.mathml,
    reactdomcjsreactdomproductionmin__Ua = { topAbort: "abort", topCanPlay: "canplay", topCanPlayThrough: "canplaythrough", topDurationChange: "durationchange", topEmptied: "emptied", topEncrypted: "encrypted", topEnded: "ended", topError: "error", topLoadedData: "loadeddata", topLoadedMetadata: "loadedmetadata", topLoadStart: "loadstart", topPause: "pause", topPlay: "play", topPlaying: "playing", topProgress: "progress", topRateChange: "ratechange", topSeeked: "seeked", topSeeking: "seeking", topStalled: "stalled", topSuspend: "suspend", topTimeUpdate: "timeupdate", topVolumeChange: "volumechange", topWaiting: "waiting" },
    reactdomcjsreactdomproductionmin__Ha = { getChildNamespace: function (e, t) {
    return null == e || e === reactdomcjsreactdomproductionmin__Da ? reactdomcjsreactdomproductionmin__ye(t) : e === reactdomcjsreactdomproductionmin__Aa && "foreignObject" === t ? reactdomcjsreactdomproductionmin__Da : e;
  }, createElement: function (e, t, n, r) {
    var o,
        a = n.nodeType === reactdomcjsreactdomproductionmin__xa ? n : n.ownerDocument,
        i = r;if (i === reactdomcjsreactdomproductionmin__Da && (i = reactdomcjsreactdomproductionmin__ye(e)), i === reactdomcjsreactdomproductionmin__Da) {
      if ("script" === e) {
        var l = a.createElement("div");l.innerHTML = "<script><\/script>";var u = l.firstChild;o = l.removeChild(u);
      } else o = t.is ? a.createElement(e, { is: t.is }) : a.createElement(e);
    } else o = a.createElementNS(i, e);return o;
  }, setInitialProperties: function (e, t, n, r) {
    var o,
        a = reactdomcjsreactdomproductionmin__fa(t, n);switch (t) {case "iframe":case "object":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topLoad", "load", e), o = n;break;case "video":case "audio":
        for (var i in reactdomcjsreactdomproductionmin__Ua) reactdomcjsreactdomproductionmin__Ua.hasOwnProperty(i) && reactdomcjsreactdomproductionmin__To.trapBubbledEvent(i, reactdomcjsreactdomproductionmin__Ua[i], e);o = n;break;case "source":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topError", "error", e), o = n;break;case "img":case "image":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topError", "error", e), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topLoad", "load", e), o = n;break;case "form":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topReset", "reset", e), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topSubmit", "submit", e), o = n;break;case "details":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topToggle", "toggle", e), o = n;break;case "input":
        reactdomcjsreactdomproductionmin__Go.initWrapperState(e, n), o = reactdomcjsreactdomproductionmin__Go.getHostProps(e, n), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topInvalid", "invalid", e), reactdomcjsreactdomproductionmin__he(r, "onChange");break;case "option":
        reactdomcjsreactdomproductionmin__Jo.validateProps(e, n), o = reactdomcjsreactdomproductionmin__Jo.getHostProps(e, n);break;case "select":
        reactdomcjsreactdomproductionmin__ta.initWrapperState(e, n), o = reactdomcjsreactdomproductionmin__ta.getHostProps(e, n), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topInvalid", "invalid", e), reactdomcjsreactdomproductionmin__he(r, "onChange");break;case "textarea":
        reactdomcjsreactdomproductionmin__ra.initWrapperState(e, n), o = reactdomcjsreactdomproductionmin__ra.getHostProps(e, n), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topInvalid", "invalid", e), reactdomcjsreactdomproductionmin__he(r, "onChange");break;default:
        o = n;}switch (reactdomcjsreactdomproductionmin__ca(t, o, reactdomcjsreactdomproductionmin__Ta), reactdomcjsreactdomproductionmin__ve(e, r, o, a), t) {case "input":
        reactdomcjsreactdomproductionmin__da.track(e), reactdomcjsreactdomproductionmin__Go.postMountWrapper(e, n);break;case "textarea":
        reactdomcjsreactdomproductionmin__da.track(e), reactdomcjsreactdomproductionmin__ra.postMountWrapper(e, n);break;case "option":
        reactdomcjsreactdomproductionmin__Jo.postMountWrapper(e, n);break;case "select":
        reactdomcjsreactdomproductionmin__ta.postMountWrapper(e, n);break;default:
        "function" == typeof o.onClick && reactdomcjsreactdomproductionmin__ge(e);}
  }, diffProperties: function (e, t, n, r, o) {
    var a,
        i,
        l = null;switch (t) {case "input":
        a = reactdomcjsreactdomproductionmin__Go.getHostProps(e, n), i = reactdomcjsreactdomproductionmin__Go.getHostProps(e, r), l = [];break;case "option":
        a = reactdomcjsreactdomproductionmin__Jo.getHostProps(e, n), i = reactdomcjsreactdomproductionmin__Jo.getHostProps(e, r), l = [];break;case "select":
        a = reactdomcjsreactdomproductionmin__ta.getHostProps(e, n), i = reactdomcjsreactdomproductionmin__ta.getHostProps(e, r), l = [];break;case "textarea":
        a = reactdomcjsreactdomproductionmin__ra.getHostProps(e, n), i = reactdomcjsreactdomproductionmin__ra.getHostProps(e, r), l = [];break;default:
        a = n, i = r, "function" != typeof a.onClick && "function" == typeof i.onClick && reactdomcjsreactdomproductionmin__ge(e);}reactdomcjsreactdomproductionmin__ca(t, i, reactdomcjsreactdomproductionmin__Ta);var u,
        s,
        c = null;for (u in a) if (!i.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u]) if (u === reactdomcjsreactdomproductionmin__Oa) {
      var p = a[u];for (s in p) p.hasOwnProperty(s) && (c || (c = {}), c[s] = "");
    } else u === reactdomcjsreactdomproductionmin___a || u === reactdomcjsreactdomproductionmin__Fa || u === reactdomcjsreactdomproductionmin__Ia || (reactdomcjsreactdomproductionmin__Sa.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));for (u in i) {
      var d = i[u],
          f = null != a ? a[u] : void 0;if (i.hasOwnProperty(u) && d !== f && (null != d || null != f)) if (u === reactdomcjsreactdomproductionmin__Oa) {
        if (f) {
          for (s in f) !f.hasOwnProperty(s) || d && d.hasOwnProperty(s) || (c || (c = {}), c[s] = "");for (s in d) d.hasOwnProperty(s) && f[s] !== d[s] && (c || (c = {}), c[s] = d[s]);
        } else c || (l || (l = []), l.push(u, c)), c = d;
      } else if (u === reactdomcjsreactdomproductionmin___a) {
        var h = d ? d[reactdomcjsreactdomproductionmin__Ma] : void 0,
            g = f ? f[reactdomcjsreactdomproductionmin__Ma] : void 0;null != h && g !== h && (l = l || []).push(u, "" + h);
      } else u === reactdomcjsreactdomproductionmin__Fa ? f === d || "string" != typeof d && "number" != typeof d || (l = l || []).push(u, "" + d) : u === reactdomcjsreactdomproductionmin__Ia || (reactdomcjsreactdomproductionmin__Sa.hasOwnProperty(u) ? (d && reactdomcjsreactdomproductionmin__he(o, u), l || f === d || (l = [])) : (l = l || []).push(u, d));
    }return c && (l = l || []).push(reactdomcjsreactdomproductionmin__Oa, c), l;
  }, updateProperties: function (e, t, n, r, o) {
    switch (reactdomcjsreactdomproductionmin__me(e, t, reactdomcjsreactdomproductionmin__fa(n, r), reactdomcjsreactdomproductionmin__fa(n, o)), n) {case "input":
        reactdomcjsreactdomproductionmin__Go.updateWrapper(e, o), reactdomcjsreactdomproductionmin__da.updateValueIfChanged(e);break;case "textarea":
        reactdomcjsreactdomproductionmin__ra.updateWrapper(e, o);break;case "select":
        reactdomcjsreactdomproductionmin__ta.postUpdateWrapper(e, o);}
  }, diffHydratedProperties: function (e, t, n, r) {
    switch (t) {case "iframe":case "object":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topLoad", "load", e);break;case "video":case "audio":
        for (var o in reactdomcjsreactdomproductionmin__Ua) reactdomcjsreactdomproductionmin__Ua.hasOwnProperty(o) && reactdomcjsreactdomproductionmin__To.trapBubbledEvent(o, reactdomcjsreactdomproductionmin__Ua[o], e);break;case "source":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topError", "error", e);break;case "img":case "image":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topError", "error", e), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topLoad", "load", e);break;case "form":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topReset", "reset", e), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topSubmit", "submit", e);break;case "details":
        reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topToggle", "toggle", e);break;case "input":
        reactdomcjsreactdomproductionmin__Go.initWrapperState(e, n), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topInvalid", "invalid", e), reactdomcjsreactdomproductionmin__he(r, "onChange");break;case "option":
        reactdomcjsreactdomproductionmin__Jo.validateProps(e, n);break;case "select":
        reactdomcjsreactdomproductionmin__ta.initWrapperState(e, n), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topInvalid", "invalid", e), reactdomcjsreactdomproductionmin__he(r, "onChange");break;case "textarea":
        reactdomcjsreactdomproductionmin__ra.initWrapperState(e, n), reactdomcjsreactdomproductionmin__To.trapBubbledEvent("topInvalid", "invalid", e), reactdomcjsreactdomproductionmin__he(r, "onChange");}reactdomcjsreactdomproductionmin__ca(t, n, reactdomcjsreactdomproductionmin__Ta);var a = null;for (var i in n) if (n.hasOwnProperty(i)) {
      var l = n[i];i === reactdomcjsreactdomproductionmin__Fa ? "string" == typeof l ? e.textContent !== l && (a = [reactdomcjsreactdomproductionmin__Fa, l]) : "number" == typeof l && e.textContent !== "" + l && (a = [reactdomcjsreactdomproductionmin__Fa, "" + l]) : reactdomcjsreactdomproductionmin__Sa.hasOwnProperty(i) && l && reactdomcjsreactdomproductionmin__he(r, i);
    }switch (t) {case "input":
        reactdomcjsreactdomproductionmin__da.track(e), reactdomcjsreactdomproductionmin__Go.postMountWrapper(e, n);break;case "textarea":
        reactdomcjsreactdomproductionmin__da.track(e), reactdomcjsreactdomproductionmin__ra.postMountWrapper(e, n);break;case "select":case "option":
        break;default:
        "function" == typeof n.onClick && reactdomcjsreactdomproductionmin__ge(e);}return a;
  }, diffHydratedText: function (e, t) {
    return e.nodeValue !== t;
  }, warnForDeletedHydratableElement: function (e, t) {}, warnForDeletedHydratableText: function (e, t) {}, warnForInsertedHydratedElement: function (e, t, n) {}, warnForInsertedHydratedText: function (e, t) {}, restoreControlledState: function (e, t, n) {
    switch (t) {case "input":
        return void reactdomcjsreactdomproductionmin__Go.restoreControlledState(e, n);case "textarea":
        return void reactdomcjsreactdomproductionmin__ra.restoreControlledState(e, n);case "select":
        return void reactdomcjsreactdomproductionmin__ta.restoreControlledState(e, n);}
  } },
    reactdomcjsreactdomproductionmin__La = reactdomcjsreactdomproductionmin__Ha,
    reactdomcjsreactdomproductionmin__Wa = void 0;if (reactdomcjsreactdomproductionmin__hn.canUseDOM) {
  if ("function" != typeof requestIdleCallback) {
    var reactdomcjsreactdomproductionmin__Ba = null,
        reactdomcjsreactdomproductionmin__Va = null,
        reactdomcjsreactdomproductionmin__ja = !1,
        reactdomcjsreactdomproductionmin__za = !1,
        reactdomcjsreactdomproductionmin__Ka = 0,
        reactdomcjsreactdomproductionmin__Ya = 33,
        reactdomcjsreactdomproductionmin__qa = 33,
        reactdomcjsreactdomproductionmin__Qa = { timeRemaining: "object" == typeof performance && "function" == typeof performance.now ? function () {
        return reactdomcjsreactdomproductionmin__Ka - performance.now();
      } : function () {
        return reactdomcjsreactdomproductionmin__Ka - Date.now();
      } },
        reactdomcjsreactdomproductionmin__$a = "__reactIdleCallback$" + Math.random().toString(36).slice(2),
        reactdomcjsreactdomproductionmin__Xa = function (e) {
      if (e.source === window && e.data === reactdomcjsreactdomproductionmin__$a) {
        reactdomcjsreactdomproductionmin__ja = !1;var t = reactdomcjsreactdomproductionmin__Va;reactdomcjsreactdomproductionmin__Va = null, null !== t && t(reactdomcjsreactdomproductionmin__Qa);
      }
    };window.addEventListener("message", reactdomcjsreactdomproductionmin__Xa, !1);var reactdomcjsreactdomproductionmin__Ga = function (e) {
      reactdomcjsreactdomproductionmin__za = !1;var t = e - reactdomcjsreactdomproductionmin__Ka + reactdomcjsreactdomproductionmin__qa;t < reactdomcjsreactdomproductionmin__qa && reactdomcjsreactdomproductionmin__Ya < reactdomcjsreactdomproductionmin__qa ? (t < 8 && (t = 8), reactdomcjsreactdomproductionmin__qa = t < reactdomcjsreactdomproductionmin__Ya ? reactdomcjsreactdomproductionmin__Ya : t) : reactdomcjsreactdomproductionmin__Ya = t, reactdomcjsreactdomproductionmin__Ka = e + reactdomcjsreactdomproductionmin__qa, reactdomcjsreactdomproductionmin__ja || (reactdomcjsreactdomproductionmin__ja = !0, window.postMessage(reactdomcjsreactdomproductionmin__$a, "*"));var n = reactdomcjsreactdomproductionmin__Ba;reactdomcjsreactdomproductionmin__Ba = null, null !== n && n(e);
    };reactdomcjsreactdomproductionmin__Wa = function (e) {
      return reactdomcjsreactdomproductionmin__Va = e, reactdomcjsreactdomproductionmin__za || (reactdomcjsreactdomproductionmin__za = !0, requestAnimationFrame(reactdomcjsreactdomproductionmin__Ga)), 0;
    };
  } else reactdomcjsreactdomproductionmin__Wa = requestIdleCallback;
} else reactdomcjsreactdomproductionmin__Wa = function (e) {
  return setTimeout(function () {
    e({ timeRemaining: function () {
        return 1 / 0;
      } });
  }), 0;
};var reactdomcjsreactdomproductionmin__Za = reactdomcjsreactdomproductionmin__Wa,
    reactdomcjsreactdomproductionmin__Ja = { rIC: reactdomcjsreactdomproductionmin__Za },
    reactdomcjsreactdomproductionmin__ei = { NoWork: 0, SynchronousPriority: 1, TaskPriority: 2, HighPriority: 3, LowPriority: 4, OffscreenPriority: 5 },
    reactdomcjsreactdomproductionmin__ti = reactdomcjsreactdomproductionmin__dr.Callback,
    reactdomcjsreactdomproductionmin__ni = reactdomcjsreactdomproductionmin__ei.NoWork,
    reactdomcjsreactdomproductionmin__ri = reactdomcjsreactdomproductionmin__ei.SynchronousPriority,
    reactdomcjsreactdomproductionmin__oi = reactdomcjsreactdomproductionmin__ei.TaskPriority,
    reactdomcjsreactdomproductionmin__ai = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__ii = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__li = reactdomcjsreactdomproductionmin__we,
    reactdomcjsreactdomproductionmin__ui = reactdomcjsreactdomproductionmin__Ne,
    reactdomcjsreactdomproductionmin__si = reactdomcjsreactdomproductionmin__Se,
    reactdomcjsreactdomproductionmin__ci = reactdomcjsreactdomproductionmin___e,
    reactdomcjsreactdomproductionmin__pi = reactdomcjsreactdomproductionmin__Ie,
    reactdomcjsreactdomproductionmin__di = reactdomcjsreactdomproductionmin__Oe,
    reactdomcjsreactdomproductionmin__fi = reactdomcjsreactdomproductionmin__Me,
    reactdomcjsreactdomproductionmin__hi = { addUpdate: reactdomcjsreactdomproductionmin__li, addReplaceUpdate: reactdomcjsreactdomproductionmin__ui, addForceUpdate: reactdomcjsreactdomproductionmin__si, getUpdatePriority: reactdomcjsreactdomproductionmin__ci, addTopLevelUpdate: reactdomcjsreactdomproductionmin__pi, beginUpdateQueue: reactdomcjsreactdomproductionmin__di, commitCallbacks: reactdomcjsreactdomproductionmin__fi },
    reactdomcjsreactdomproductionmin__gi = [],
    reactdomcjsreactdomproductionmin__vi = -1,
    reactdomcjsreactdomproductionmin__mi = function (e) {
  return { current: e };
},
    reactdomcjsreactdomproductionmin__yi = function () {
  return -1 === reactdomcjsreactdomproductionmin__vi;
},
    reactdomcjsreactdomproductionmin__bi = function (e, t) {
  reactdomcjsreactdomproductionmin__vi < 0 || (e.current = reactdomcjsreactdomproductionmin__gi[reactdomcjsreactdomproductionmin__vi], reactdomcjsreactdomproductionmin__gi[reactdomcjsreactdomproductionmin__vi] = null, reactdomcjsreactdomproductionmin__vi--);
},
    reactdomcjsreactdomproductionmin__Ci = function (e, t, n) {
  reactdomcjsreactdomproductionmin__vi++, reactdomcjsreactdomproductionmin__gi[reactdomcjsreactdomproductionmin__vi] = e.current, e.current = t;
},
    reactdomcjsreactdomproductionmin__Ei = function () {
  for (; reactdomcjsreactdomproductionmin__vi > -1;) reactdomcjsreactdomproductionmin__gi[reactdomcjsreactdomproductionmin__vi] = null, reactdomcjsreactdomproductionmin__vi--;
},
    reactdomcjsreactdomproductionmin__ki = { createCursor: reactdomcjsreactdomproductionmin__mi, isEmpty: reactdomcjsreactdomproductionmin__yi, pop: reactdomcjsreactdomproductionmin__bi, push: reactdomcjsreactdomproductionmin__Ci, reset: reactdomcjsreactdomproductionmin__Ei },
    reactdomcjsreactdomproductionmin__Pi = reactdomcjsreactdomproductionmin__gn || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }return e;
},
    reactdomcjsreactdomproductionmin__Ti = reactdomcjsreactdomproductionmin__Nr.isFiberMounted,
    reactdomcjsreactdomproductionmin__xi = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__wi = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__Ni = reactdomcjsreactdomproductionmin__ki.createCursor,
    reactdomcjsreactdomproductionmin__Si = reactdomcjsreactdomproductionmin__ki.pop,
    reactdomcjsreactdomproductionmin___i = reactdomcjsreactdomproductionmin__ki.push,
    reactdomcjsreactdomproductionmin__Ii = reactdomcjsreactdomproductionmin__Ni(reactdomcjsreactdomproductionmin__Cn),
    reactdomcjsreactdomproductionmin__Fi = reactdomcjsreactdomproductionmin__Ni(!1),
    reactdomcjsreactdomproductionmin__Oi = reactdomcjsreactdomproductionmin__Cn,
    reactdomcjsreactdomproductionmin__Mi = reactdomcjsreactdomproductionmin__De,
    reactdomcjsreactdomproductionmin__Di = reactdomcjsreactdomproductionmin__Ae,
    reactdomcjsreactdomproductionmin__Ai = function (e, t) {
  var n = e.type,
      r = n.contextTypes;if (!r) return reactdomcjsreactdomproductionmin__Cn;var o = e.stateNode;if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;var a = {};for (var i in r) a[i] = t[i];return o && reactdomcjsreactdomproductionmin__Ae(e, t, a), a;
},
    reactdomcjsreactdomproductionmin__Ri = function () {
  return reactdomcjsreactdomproductionmin__Fi.current;
},
    reactdomcjsreactdomproductionmin__Ui = reactdomcjsreactdomproductionmin__Re,
    reactdomcjsreactdomproductionmin__Hi = reactdomcjsreactdomproductionmin__Ue,
    reactdomcjsreactdomproductionmin__Li = reactdomcjsreactdomproductionmin__He,
    reactdomcjsreactdomproductionmin__Wi = function (e, t, n) {
  null != reactdomcjsreactdomproductionmin__Ii.cursor && reactdomcjsreactdomproductionmin__xn("168"), reactdomcjsreactdomproductionmin___i(reactdomcjsreactdomproductionmin__Ii, t, e), reactdomcjsreactdomproductionmin___i(reactdomcjsreactdomproductionmin__Fi, n, e);
},
    reactdomcjsreactdomproductionmin__Bi = reactdomcjsreactdomproductionmin__Le,
    reactdomcjsreactdomproductionmin__Vi = function (e) {
  if (!reactdomcjsreactdomproductionmin__Ue(e)) return !1;var t = e.stateNode,
      n = t && t.__reactInternalMemoizedMergedChildContext || reactdomcjsreactdomproductionmin__Cn;return reactdomcjsreactdomproductionmin__Oi = reactdomcjsreactdomproductionmin__Ii.current, reactdomcjsreactdomproductionmin___i(reactdomcjsreactdomproductionmin__Ii, n, e), reactdomcjsreactdomproductionmin___i(reactdomcjsreactdomproductionmin__Fi, reactdomcjsreactdomproductionmin__Fi.current, e), !0;
},
    reactdomcjsreactdomproductionmin__ji = function (e, t) {
  var n = e.stateNode;if (n || reactdomcjsreactdomproductionmin__xn("169"), t) {
    var r = reactdomcjsreactdomproductionmin__Le(e, reactdomcjsreactdomproductionmin__Oi, !0);n.__reactInternalMemoizedMergedChildContext = r, reactdomcjsreactdomproductionmin__Si(reactdomcjsreactdomproductionmin__Fi, e), reactdomcjsreactdomproductionmin__Si(reactdomcjsreactdomproductionmin__Ii, e), reactdomcjsreactdomproductionmin___i(reactdomcjsreactdomproductionmin__Ii, r, e), reactdomcjsreactdomproductionmin___i(reactdomcjsreactdomproductionmin__Fi, t, e);
  } else reactdomcjsreactdomproductionmin__Si(reactdomcjsreactdomproductionmin__Fi, e), reactdomcjsreactdomproductionmin___i(reactdomcjsreactdomproductionmin__Fi, t, e);
},
    reactdomcjsreactdomproductionmin__zi = function () {
  reactdomcjsreactdomproductionmin__Oi = reactdomcjsreactdomproductionmin__Cn, reactdomcjsreactdomproductionmin__Ii.current = reactdomcjsreactdomproductionmin__Cn, reactdomcjsreactdomproductionmin__Fi.current = !1;
},
    reactdomcjsreactdomproductionmin__Ki = function (e) {
  reactdomcjsreactdomproductionmin__Ti(e) && e.tag === reactdomcjsreactdomproductionmin__xi || reactdomcjsreactdomproductionmin__xn("170");for (var t = e; t.tag !== reactdomcjsreactdomproductionmin__wi;) {
    if (reactdomcjsreactdomproductionmin__Ue(t)) return t.stateNode.__reactInternalMemoizedMergedChildContext;var n = t.return;n || reactdomcjsreactdomproductionmin__xn("171"), t = n;
  }return t.stateNode.context;
},
    reactdomcjsreactdomproductionmin__Yi = { getUnmaskedContext: reactdomcjsreactdomproductionmin__Mi, cacheContext: reactdomcjsreactdomproductionmin__Di, getMaskedContext: reactdomcjsreactdomproductionmin__Ai, hasContextChanged: reactdomcjsreactdomproductionmin__Ri, isContextConsumer: reactdomcjsreactdomproductionmin__Ui, isContextProvider: reactdomcjsreactdomproductionmin__Hi, popContextProvider: reactdomcjsreactdomproductionmin__Li, pushTopLevelContextObject: reactdomcjsreactdomproductionmin__Wi, processChildContext: reactdomcjsreactdomproductionmin__Bi, pushContextProvider: reactdomcjsreactdomproductionmin__Vi, invalidateContextProvider: reactdomcjsreactdomproductionmin__ji, resetContext: reactdomcjsreactdomproductionmin__zi, findCurrentUnmaskedContext: reactdomcjsreactdomproductionmin__Ki },
    reactdomcjsreactdomproductionmin__qi = { NoContext: 0, AsyncUpdates: 1 },
    reactdomcjsreactdomproductionmin__Qi = reactdomcjsreactdomproductionmin__Yn.IndeterminateComponent,
    reactdomcjsreactdomproductionmin__$i = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__Xi = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__Gi = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__Zi = reactdomcjsreactdomproductionmin__Yn.HostText,
    reactdomcjsreactdomproductionmin__Ji = reactdomcjsreactdomproductionmin__Yn.HostPortal,
    reactdomcjsreactdomproductionmin__el = reactdomcjsreactdomproductionmin__Yn.CoroutineComponent,
    reactdomcjsreactdomproductionmin__tl = reactdomcjsreactdomproductionmin__Yn.YieldComponent,
    reactdomcjsreactdomproductionmin__nl = reactdomcjsreactdomproductionmin__Yn.Fragment,
    reactdomcjsreactdomproductionmin__rl = reactdomcjsreactdomproductionmin__ei.NoWork,
    reactdomcjsreactdomproductionmin__ol = reactdomcjsreactdomproductionmin__qi.NoContext,
    reactdomcjsreactdomproductionmin__al = reactdomcjsreactdomproductionmin__dr.NoEffect,
    reactdomcjsreactdomproductionmin__il = function (e, t, n) {
  return { tag: e, key: t, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, pendingProps: null, memoizedProps: null, updateQueue: null, memoizedState: null, internalContextTag: n, effectTag: reactdomcjsreactdomproductionmin__al, nextEffect: null, firstEffect: null, lastEffect: null, pendingWorkPriority: reactdomcjsreactdomproductionmin__rl, alternate: null };
},
    reactdomcjsreactdomproductionmin__ll = function (e, t) {
  var n = e.alternate;return null === n ? (n = reactdomcjsreactdomproductionmin__il(e.tag, e.key, e.internalContextTag), n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.effectTag = reactdomcjsreactdomproductionmin__rl, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.pendingWorkPriority = t, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
},
    reactdomcjsreactdomproductionmin__ul = function () {
  return reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__Xi, null, reactdomcjsreactdomproductionmin__ol);
},
    reactdomcjsreactdomproductionmin__sl = function (e, t, n) {
  var r = reactdomcjsreactdomproductionmin__Be(e.type, e.key, t, null);return r.pendingProps = e.props, r.pendingWorkPriority = n, r;
},
    reactdomcjsreactdomproductionmin__cl = function (e, t, n) {
  var r = reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__nl, null, t);return r.pendingProps = e, r.pendingWorkPriority = n, r;
},
    reactdomcjsreactdomproductionmin__pl = function (e, t, n) {
  var r = reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__Zi, null, t);return r.pendingProps = e, r.pendingWorkPriority = n, r;
},
    reactdomcjsreactdomproductionmin__dl = reactdomcjsreactdomproductionmin__Be,
    reactdomcjsreactdomproductionmin__fl = function () {
  var e = reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__Gi, null, reactdomcjsreactdomproductionmin__ol);return e.type = "DELETED", e;
},
    reactdomcjsreactdomproductionmin__hl = function (e, t, n) {
  var r = reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__el, e.key, t);return r.type = e.handler, r.pendingProps = e, r.pendingWorkPriority = n, r;
},
    reactdomcjsreactdomproductionmin__gl = function (e, t, n) {
  return reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__tl, null, t);
},
    reactdomcjsreactdomproductionmin__vl = function (e, t, n) {
  var r = reactdomcjsreactdomproductionmin__il(reactdomcjsreactdomproductionmin__Ji, e.key, t);return r.pendingProps = e.children || [], r.pendingWorkPriority = n, r.stateNode = { containerInfo: e.containerInfo, implementation: e.implementation }, r;
},
    reactdomcjsreactdomproductionmin__ml = function (e, t) {
  return e !== reactdomcjsreactdomproductionmin__rl && (t === reactdomcjsreactdomproductionmin__rl || t > e) ? e : t;
},
    reactdomcjsreactdomproductionmin__yl = { createWorkInProgress: reactdomcjsreactdomproductionmin__ll, createHostRootFiber: reactdomcjsreactdomproductionmin__ul, createFiberFromElement: reactdomcjsreactdomproductionmin__sl, createFiberFromFragment: reactdomcjsreactdomproductionmin__cl, createFiberFromText: reactdomcjsreactdomproductionmin__pl, createFiberFromElementType: reactdomcjsreactdomproductionmin__dl, createFiberFromHostInstanceForDeletion: reactdomcjsreactdomproductionmin__fl, createFiberFromCoroutine: reactdomcjsreactdomproductionmin__hl, createFiberFromYield: reactdomcjsreactdomproductionmin__gl, createFiberFromPortal: reactdomcjsreactdomproductionmin__vl, largerPriority: reactdomcjsreactdomproductionmin__ml },
    reactdomcjsreactdomproductionmin__bl = reactdomcjsreactdomproductionmin__yl.createHostRootFiber,
    reactdomcjsreactdomproductionmin__Cl = function (e) {
  var t = reactdomcjsreactdomproductionmin__bl(),
      n = { current: t, containerInfo: e, isScheduled: !1, nextScheduledRoot: null, context: null, pendingContext: null };return t.stateNode = n, n;
},
    reactdomcjsreactdomproductionmin__El = { createFiberRoot: reactdomcjsreactdomproductionmin__Cl },
    reactdomcjsreactdomproductionmin__kl = function (e, t, n) {
  return "\n    in " + (e || "Unknown") + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "");
},
    reactdomcjsreactdomproductionmin__Pl = reactdomcjsreactdomproductionmin__Yn.IndeterminateComponent,
    reactdomcjsreactdomproductionmin__Tl = reactdomcjsreactdomproductionmin__Yn.FunctionalComponent,
    reactdomcjsreactdomproductionmin__xl = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__wl = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__Nl = {
  getStackAddendumByWorkInProgressFiber: reactdomcjsreactdomproductionmin__je },
    reactdomcjsreactdomproductionmin__Sl = function (e) {
  return !0;
},
    reactdomcjsreactdomproductionmin___l = reactdomcjsreactdomproductionmin__Sl,
    reactdomcjsreactdomproductionmin__Il = { injectDialog: function (e) {
    reactdomcjsreactdomproductionmin___l !== reactdomcjsreactdomproductionmin__Sl && reactdomcjsreactdomproductionmin__xn("172"), "function" != typeof e && reactdomcjsreactdomproductionmin__xn("173"), reactdomcjsreactdomproductionmin___l = e;
  } },
    reactdomcjsreactdomproductionmin__Fl = reactdomcjsreactdomproductionmin__ze,
    reactdomcjsreactdomproductionmin__Ol = { injection: reactdomcjsreactdomproductionmin__Il, logCapturedError: reactdomcjsreactdomproductionmin__Fl },
    reactdomcjsreactdomproductionmin__Ml,
    reactdomcjsreactdomproductionmin__Dl;"function" == typeof Symbol && Symbol.for ? (reactdomcjsreactdomproductionmin__Ml = Symbol.for("react.coroutine"), reactdomcjsreactdomproductionmin__Dl = Symbol.for("react.yield")) : (reactdomcjsreactdomproductionmin__Ml = 60104, reactdomcjsreactdomproductionmin__Dl = 60105);var reactdomcjsreactdomproductionmin__Al = function (e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return { $$typeof: reactdomcjsreactdomproductionmin__Ml, key: null == r ? null : "" + r, children: e, handler: t, props: n };
},
    reactdomcjsreactdomproductionmin__Rl = function (e) {
  return { $$typeof: reactdomcjsreactdomproductionmin__Dl, value: e };
},
    reactdomcjsreactdomproductionmin__Ul = function (e) {
  return "object" == typeof e && null !== e && e.$$typeof === reactdomcjsreactdomproductionmin__Ml;
},
    reactdomcjsreactdomproductionmin__Hl = function (e) {
  return "object" == typeof e && null !== e && e.$$typeof === reactdomcjsreactdomproductionmin__Dl;
},
    reactdomcjsreactdomproductionmin__Ll = reactdomcjsreactdomproductionmin__Dl,
    reactdomcjsreactdomproductionmin__Wl = reactdomcjsreactdomproductionmin__Ml,
    reactdomcjsreactdomproductionmin__Bl = { createCoroutine: reactdomcjsreactdomproductionmin__Al, createYield: reactdomcjsreactdomproductionmin__Rl, isCoroutine: reactdomcjsreactdomproductionmin__Ul, isYield: reactdomcjsreactdomproductionmin__Hl, REACT_YIELD_TYPE: reactdomcjsreactdomproductionmin__Ll, REACT_COROUTINE_TYPE: reactdomcjsreactdomproductionmin__Wl },
    reactdomcjsreactdomproductionmin__Vl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.portal") || 60106,
    reactdomcjsreactdomproductionmin__jl = function (e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return { $$typeof: reactdomcjsreactdomproductionmin__Vl, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
},
    reactdomcjsreactdomproductionmin__zl = function (e) {
  return "object" == typeof e && null !== e && e.$$typeof === reactdomcjsreactdomproductionmin__Vl;
},
    reactdomcjsreactdomproductionmin__Kl = reactdomcjsreactdomproductionmin__Vl,
    reactdomcjsreactdomproductionmin__Yl = { createPortal: reactdomcjsreactdomproductionmin__jl, isPortal: reactdomcjsreactdomproductionmin__zl, REACT_PORTAL_TYPE: reactdomcjsreactdomproductionmin__Kl },
    reactdomcjsreactdomproductionmin__ql = reactdomcjsreactdomproductionmin__Bl.REACT_COROUTINE_TYPE,
    reactdomcjsreactdomproductionmin__Ql = reactdomcjsreactdomproductionmin__Bl.REACT_YIELD_TYPE,
    reactdomcjsreactdomproductionmin__$l = reactdomcjsreactdomproductionmin__Yl.REACT_PORTAL_TYPE,
    reactdomcjsreactdomproductionmin__Xl = reactdomcjsreactdomproductionmin__yl.createWorkInProgress,
    reactdomcjsreactdomproductionmin__Gl = reactdomcjsreactdomproductionmin__yl.createFiberFromElement,
    reactdomcjsreactdomproductionmin__Zl = reactdomcjsreactdomproductionmin__yl.createFiberFromFragment,
    reactdomcjsreactdomproductionmin__Jl = reactdomcjsreactdomproductionmin__yl.createFiberFromText,
    reactdomcjsreactdomproductionmin__eu = reactdomcjsreactdomproductionmin__yl.createFiberFromCoroutine,
    reactdomcjsreactdomproductionmin__tu = reactdomcjsreactdomproductionmin__yl.createFiberFromYield,
    reactdomcjsreactdomproductionmin__nu = reactdomcjsreactdomproductionmin__yl.createFiberFromPortal,
    reactdomcjsreactdomproductionmin__ru = Array.isArray,
    reactdomcjsreactdomproductionmin__ou = reactdomcjsreactdomproductionmin__Yn.FunctionalComponent,
    reactdomcjsreactdomproductionmin__au = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__iu = reactdomcjsreactdomproductionmin__Yn.HostText,
    reactdomcjsreactdomproductionmin__lu = reactdomcjsreactdomproductionmin__Yn.HostPortal,
    reactdomcjsreactdomproductionmin__uu = reactdomcjsreactdomproductionmin__Yn.CoroutineComponent,
    reactdomcjsreactdomproductionmin__su = reactdomcjsreactdomproductionmin__Yn.YieldComponent,
    reactdomcjsreactdomproductionmin__cu = reactdomcjsreactdomproductionmin__Yn.Fragment,
    reactdomcjsreactdomproductionmin__pu = reactdomcjsreactdomproductionmin__dr.NoEffect,
    reactdomcjsreactdomproductionmin__du = reactdomcjsreactdomproductionmin__dr.Placement,
    reactdomcjsreactdomproductionmin__fu = reactdomcjsreactdomproductionmin__dr.Deletion,
    reactdomcjsreactdomproductionmin__hu = "function" == typeof Symbol && Symbol.iterator,
    reactdomcjsreactdomproductionmin__gu = "@@iterator",
    reactdomcjsreactdomproductionmin__vu = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    reactdomcjsreactdomproductionmin__mu = reactdomcjsreactdomproductionmin__Qe(!0, !0),
    reactdomcjsreactdomproductionmin__yu = reactdomcjsreactdomproductionmin__Qe(!1, !0),
    reactdomcjsreactdomproductionmin__bu = reactdomcjsreactdomproductionmin__Qe(!1, !1),
    reactdomcjsreactdomproductionmin__Cu = function (e, t) {
  if (null !== e && t.child !== e.child && reactdomcjsreactdomproductionmin__xn("153"), null !== t.child) {
    var n = t.child,
        r = reactdomcjsreactdomproductionmin__Xl(n, n.pendingWorkPriority);for (r.pendingProps = n.pendingProps, t.child = r, r.return = t; null !== n.sibling;) n = n.sibling, r = r.sibling = reactdomcjsreactdomproductionmin__Xl(n, n.pendingWorkPriority), r.pendingProps = n.pendingProps, r.return = t;r.sibling = null;
  }
},
    reactdomcjsreactdomproductionmin__Eu = { reconcileChildFibers: reactdomcjsreactdomproductionmin__mu, reconcileChildFibersInPlace: reactdomcjsreactdomproductionmin__yu, mountChildFibersInPlace: reactdomcjsreactdomproductionmin__bu, cloneChildFibers: reactdomcjsreactdomproductionmin__Cu },
    reactdomcjsreactdomproductionmin__ku = reactdomcjsreactdomproductionmin__dr.Update,
    reactdomcjsreactdomproductionmin__Pu = reactdomcjsreactdomproductionmin__qi.AsyncUpdates,
    reactdomcjsreactdomproductionmin__Tu = reactdomcjsreactdomproductionmin__Yi.cacheContext,
    reactdomcjsreactdomproductionmin__xu = reactdomcjsreactdomproductionmin__Yi.getMaskedContext,
    reactdomcjsreactdomproductionmin__wu = reactdomcjsreactdomproductionmin__Yi.getUnmaskedContext,
    reactdomcjsreactdomproductionmin__Nu = reactdomcjsreactdomproductionmin__Yi.isContextConsumer,
    reactdomcjsreactdomproductionmin__Su = reactdomcjsreactdomproductionmin__hi.addUpdate,
    reactdomcjsreactdomproductionmin___u = reactdomcjsreactdomproductionmin__hi.addReplaceUpdate,
    reactdomcjsreactdomproductionmin__Iu = reactdomcjsreactdomproductionmin__hi.addForceUpdate,
    reactdomcjsreactdomproductionmin__Fu = reactdomcjsreactdomproductionmin__hi.beginUpdateQueue,
    reactdomcjsreactdomproductionmin__Ou = reactdomcjsreactdomproductionmin__Yi,
    reactdomcjsreactdomproductionmin__Mu = reactdomcjsreactdomproductionmin__Ou.hasContextChanged,
    reactdomcjsreactdomproductionmin__Du = reactdomcjsreactdomproductionmin__Nr.isMounted,
    reactdomcjsreactdomproductionmin__Au = function (e, t, n, r) {
  function o(e, t, n, r, o, a) {
    if (null === t || null !== e.updateQueue && e.updateQueue.hasForceUpdate) return !0;var i = e.stateNode,
        l = e.type;if ("function" == typeof i.shouldComponentUpdate) {
      return i.shouldComponentUpdate(n, o, a);
    }return !l.prototype || !l.prototype.isPureReactComponent || !reactdomcjsreactdomproductionmin__En(t, n) || !reactdomcjsreactdomproductionmin__En(r, o);
  }function a(e, t) {
    t.props = e.memoizedProps, t.state = e.memoizedState;
  }function i(e, t) {
    t.updater = d, e.stateNode = t, reactdomcjsreactdomproductionmin__lr.set(t, e);
  }function l(e, t) {
    var n = e.type,
        r = reactdomcjsreactdomproductionmin__wu(e),
        o = reactdomcjsreactdomproductionmin__Nu(e),
        a = o ? reactdomcjsreactdomproductionmin__xu(e, r) : reactdomcjsreactdomproductionmin__Cn,
        l = new n(t, a);return i(e, l), o && reactdomcjsreactdomproductionmin__Tu(e, r, a), l;
  }function u(e, t) {
    var n = t.state;t.componentWillMount(), n !== t.state && d.enqueueReplaceState(t, t.state, null);
  }function s(e, t, n, r) {
    var o = t.state;t.componentWillReceiveProps(n, r), t.state !== o && d.enqueueReplaceState(t, t.state, null);
  }function c(e, t) {
    var n = e.alternate,
        r = e.stateNode,
        o = r.state || null,
        a = e.pendingProps;a || reactdomcjsreactdomproductionmin__xn("158");var i = reactdomcjsreactdomproductionmin__wu(e);if (r.props = a, r.state = o, r.refs = reactdomcjsreactdomproductionmin__Cn, r.context = reactdomcjsreactdomproductionmin__xu(e, i), reactdomcjsreactdomproductionmin__wo.enableAsyncSubtreeAPI && null != e.type && null != e.type.prototype && !0 === e.type.prototype.unstable_isAsyncReactComponent && (e.internalContextTag |= reactdomcjsreactdomproductionmin__Pu), "function" == typeof r.componentWillMount) {
      u(e, r);var l = e.updateQueue;null !== l && (r.state = reactdomcjsreactdomproductionmin__Fu(n, e, l, r, o, a, t));
    }"function" == typeof r.componentDidMount && (e.effectTag |= reactdomcjsreactdomproductionmin__ku);
  }function p(e, t, i) {
    var l = t.stateNode;a(t, l);var u = t.memoizedProps,
        c = t.pendingProps;c || null == (c = u) && reactdomcjsreactdomproductionmin__xn("159");var p = l.context,
        d = reactdomcjsreactdomproductionmin__wu(t),
        f = reactdomcjsreactdomproductionmin__xu(t, d);"function" != typeof l.componentWillReceiveProps || u === c && p === f || s(t, l, c, f);var h = t.memoizedState,
        g = void 0;if (g = null !== t.updateQueue ? reactdomcjsreactdomproductionmin__Fu(e, t, t.updateQueue, l, h, c, i) : h, !(u !== c || h !== g || reactdomcjsreactdomproductionmin__Mu() || null !== t.updateQueue && t.updateQueue.hasForceUpdate)) return "function" == typeof l.componentDidUpdate && (u === e.memoizedProps && h === e.memoizedState || (t.effectTag |= reactdomcjsreactdomproductionmin__ku)), !1;var v = o(t, u, c, h, g, f);return v ? ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(c, g, f), "function" == typeof l.componentDidUpdate && (t.effectTag |= reactdomcjsreactdomproductionmin__ku)) : ("function" == typeof l.componentDidUpdate && (u === e.memoizedProps && h === e.memoizedState || (t.effectTag |= reactdomcjsreactdomproductionmin__ku)), n(t, c), r(t, g)), l.props = c, l.state = g, l.context = f, v;
  }var d = { isMounted: reactdomcjsreactdomproductionmin__Du, enqueueSetState: function (n, r, o) {
      var a = reactdomcjsreactdomproductionmin__lr.get(n),
          i = t(a, !1);o = void 0 === o ? null : o, reactdomcjsreactdomproductionmin__Su(a, r, o, i), e(a, i);
    }, enqueueReplaceState: function (n, r, o) {
      var a = reactdomcjsreactdomproductionmin__lr.get(n),
          i = t(a, !1);o = void 0 === o ? null : o, reactdomcjsreactdomproductionmin___u(a, r, o, i), e(a, i);
    }, enqueueForceUpdate: function (n, r) {
      var o = reactdomcjsreactdomproductionmin__lr.get(n),
          a = t(o, !1);r = void 0 === r ? null : r, reactdomcjsreactdomproductionmin__Iu(o, r, a), e(o, a);
    } };return { adoptClassInstance: i, constructClassInstance: l, mountClassInstance: c, updateClassInstance: p };
},
    reactdomcjsreactdomproductionmin__Ru = reactdomcjsreactdomproductionmin__Eu.mountChildFibersInPlace,
    reactdomcjsreactdomproductionmin__Uu = reactdomcjsreactdomproductionmin__Eu.reconcileChildFibers,
    reactdomcjsreactdomproductionmin__Hu = reactdomcjsreactdomproductionmin__Eu.reconcileChildFibersInPlace,
    reactdomcjsreactdomproductionmin__Lu = reactdomcjsreactdomproductionmin__Eu.cloneChildFibers,
    reactdomcjsreactdomproductionmin__Wu = reactdomcjsreactdomproductionmin__hi.beginUpdateQueue,
    reactdomcjsreactdomproductionmin__Bu = reactdomcjsreactdomproductionmin__Yi.getMaskedContext,
    reactdomcjsreactdomproductionmin__Vu = reactdomcjsreactdomproductionmin__Yi.getUnmaskedContext,
    reactdomcjsreactdomproductionmin__ju = reactdomcjsreactdomproductionmin__Yi.hasContextChanged,
    reactdomcjsreactdomproductionmin__zu = reactdomcjsreactdomproductionmin__Yi.pushContextProvider,
    reactdomcjsreactdomproductionmin__Ku = reactdomcjsreactdomproductionmin__Yi.pushTopLevelContextObject,
    reactdomcjsreactdomproductionmin__Yu = reactdomcjsreactdomproductionmin__Yi.invalidateContextProvider,
    reactdomcjsreactdomproductionmin__qu = reactdomcjsreactdomproductionmin__Yn.IndeterminateComponent,
    reactdomcjsreactdomproductionmin__Qu = reactdomcjsreactdomproductionmin__Yn.FunctionalComponent,
    reactdomcjsreactdomproductionmin__$u = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__Xu = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__Gu = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__Zu = reactdomcjsreactdomproductionmin__Yn.HostText,
    reactdomcjsreactdomproductionmin__Ju = reactdomcjsreactdomproductionmin__Yn.HostPortal,
    reactdomcjsreactdomproductionmin__es = reactdomcjsreactdomproductionmin__Yn.CoroutineComponent,
    reactdomcjsreactdomproductionmin__ts = reactdomcjsreactdomproductionmin__Yn.CoroutineHandlerPhase,
    reactdomcjsreactdomproductionmin__ns = reactdomcjsreactdomproductionmin__Yn.YieldComponent,
    reactdomcjsreactdomproductionmin__rs = reactdomcjsreactdomproductionmin__Yn.Fragment,
    reactdomcjsreactdomproductionmin__os = reactdomcjsreactdomproductionmin__ei.NoWork,
    reactdomcjsreactdomproductionmin__as = reactdomcjsreactdomproductionmin__ei.OffscreenPriority,
    reactdomcjsreactdomproductionmin__is = reactdomcjsreactdomproductionmin__dr.PerformedWork,
    reactdomcjsreactdomproductionmin__ls = reactdomcjsreactdomproductionmin__dr.Placement,
    reactdomcjsreactdomproductionmin__us = reactdomcjsreactdomproductionmin__dr.ContentReset,
    reactdomcjsreactdomproductionmin__ss = reactdomcjsreactdomproductionmin__dr.Err,
    reactdomcjsreactdomproductionmin__cs = reactdomcjsreactdomproductionmin__dr.Ref,
    reactdomcjsreactdomproductionmin__ps = reactdomcjsreactdomproductionmin__cr.ReactCurrentOwner,
    reactdomcjsreactdomproductionmin__ds = function (e, t, n, r, o) {
  function a(e, t, n) {
    i(e, t, n, t.pendingWorkPriority);
  }function i(e, t, n, r) {
    null === e ? t.child = reactdomcjsreactdomproductionmin__Ru(t, t.child, n, r) : e.child === t.child ? t.child = reactdomcjsreactdomproductionmin__Uu(t, t.child, n, r) : t.child = reactdomcjsreactdomproductionmin__Hu(t, t.child, n, r);
  }function l(e, t) {
    var n = t.pendingProps;if (reactdomcjsreactdomproductionmin__ju()) null === n && (n = t.memoizedProps);else if (null === n || t.memoizedProps === n) return y(e, t);return a(e, t, n), C(t, n), t.child;
  }function u(e, t) {
    var n = t.ref;null === n || e && e.ref === n || (t.effectTag |= reactdomcjsreactdomproductionmin__cs);
  }function s(e, t) {
    var n = t.type,
        r = t.pendingProps,
        o = t.memoizedProps;if (reactdomcjsreactdomproductionmin__ju()) null === r && (r = o);else if (null === r || o === r) return y(e, t);var i,
        l = reactdomcjsreactdomproductionmin__Vu(t),
        u = reactdomcjsreactdomproductionmin__Bu(t, l);return i = n(r, u), t.effectTag |= reactdomcjsreactdomproductionmin__is, a(e, t, i), C(t, r), t.child;
  }function c(e, t, n) {
    var r = reactdomcjsreactdomproductionmin__zu(t),
        o = void 0;return null === e ? t.stateNode ? reactdomcjsreactdomproductionmin__xn("153") : (D(t, t.pendingProps), A(t, n), o = !0) : o = R(e, t, n), p(e, t, o, r);
  }function p(e, t, n, r) {
    if (u(e, t), !n) return r && reactdomcjsreactdomproductionmin__Yu(t, !1), y(e, t);var o = t.stateNode;reactdomcjsreactdomproductionmin__ps.current = t;var i = void 0;return i = o.render(), t.effectTag |= reactdomcjsreactdomproductionmin__is, a(e, t, i), E(t, o.state), C(t, o.props), r && reactdomcjsreactdomproductionmin__Yu(t, !0), t.child;
  }function d(e, t, n) {
    var r = t.stateNode;r.pendingContext ? reactdomcjsreactdomproductionmin__Ku(t, r.pendingContext, r.pendingContext !== r.context) : r.context && reactdomcjsreactdomproductionmin__Ku(t, r.context, !1), S(t, r.containerInfo);var o = t.updateQueue;if (null !== o) {
      var i = t.memoizedState,
          l = reactdomcjsreactdomproductionmin__Wu(e, t, o, null, i, null, n);if (i === l) return I(), y(e, t);var u = l.element;return null !== e && null !== e.child || !_(t) ? (I(), a(e, t, u)) : (t.effectTag |= reactdomcjsreactdomproductionmin__ls, t.child = reactdomcjsreactdomproductionmin__Ru(t, t.child, u, n)), E(t, l), t.child;
    }return I(), y(e, t);
  }function f(e, t, n) {
    N(t), null === e && F(t);var r = t.type,
        o = t.memoizedProps,
        i = t.pendingProps;null === i && null === (i = o) && reactdomcjsreactdomproductionmin__xn("154");var l = null !== e ? e.memoizedProps : null;if (reactdomcjsreactdomproductionmin__ju()) ;else if (null === i || o === i) return y(e, t);var s = i.children;return T(r, i) ? s = null : l && T(r, l) && (t.effectTag |= reactdomcjsreactdomproductionmin__us), u(e, t), n !== reactdomcjsreactdomproductionmin__as && !x && w(r, i) ? (t.pendingWorkPriority = reactdomcjsreactdomproductionmin__as, null) : (a(e, t, s), C(t, i), t.child);
  }function h(e, t) {
    null === e && F(t);var n = t.pendingProps;return null === n && (n = t.memoizedProps), C(t, n), null;
  }function g(e, t, n) {
    null !== e && reactdomcjsreactdomproductionmin__xn("155");var r,
        o = t.type,
        i = t.pendingProps,
        l = reactdomcjsreactdomproductionmin__Vu(t),
        u = reactdomcjsreactdomproductionmin__Bu(t, l);if (r = o(i, u), t.effectTag |= reactdomcjsreactdomproductionmin__is, "object" == typeof r && null !== r && "function" == typeof r.render) {
      t.tag = reactdomcjsreactdomproductionmin__$u;var s = reactdomcjsreactdomproductionmin__zu(t);return M(t, r), A(t, n), p(e, t, !0, s);
    }return t.tag = reactdomcjsreactdomproductionmin__Qu, a(e, t, r), C(t, i), t.child;
  }function v(e, t) {
    var n = t.pendingProps;reactdomcjsreactdomproductionmin__ju() ? null === n && null === (n = e && e.memoizedProps) && reactdomcjsreactdomproductionmin__xn("154") : null !== n && t.memoizedProps !== n || (n = t.memoizedProps);var r = n.children,
        o = t.pendingWorkPriority;return null === e ? t.stateNode = reactdomcjsreactdomproductionmin__Ru(t, t.stateNode, r, o) : e.child === t.child ? t.stateNode = reactdomcjsreactdomproductionmin__Uu(t, t.stateNode, r, o) : t.stateNode = reactdomcjsreactdomproductionmin__Hu(t, t.stateNode, r, o), C(t, n), t.stateNode;
  }function m(e, t) {
    S(t, t.stateNode.containerInfo);var n = t.pendingWorkPriority,
        r = t.pendingProps;if (reactdomcjsreactdomproductionmin__ju()) null === r && null == (r = e && e.memoizedProps) && reactdomcjsreactdomproductionmin__xn("154");else if (null === r || t.memoizedProps === r) return y(e, t);return null === e ? (t.child = reactdomcjsreactdomproductionmin__Hu(t, t.child, r, n), C(t, r)) : (a(e, t, r), C(t, r)), t.child;
  }function y(e, t) {
    return reactdomcjsreactdomproductionmin__Lu(e, t), t.child;
  }function b(e, t) {
    switch (t.tag) {case reactdomcjsreactdomproductionmin__$u:
        reactdomcjsreactdomproductionmin__zu(t);break;case reactdomcjsreactdomproductionmin__Ju:
        S(t, t.stateNode.containerInfo);}return null;
  }function C(e, t) {
    e.memoizedProps = t;
  }function E(e, t) {
    e.memoizedState = t;
  }function k(e, t, n) {
    if (t.pendingWorkPriority === reactdomcjsreactdomproductionmin__os || t.pendingWorkPriority > n) return b(e, t);switch (t.tag) {case reactdomcjsreactdomproductionmin__qu:
        return g(e, t, n);case reactdomcjsreactdomproductionmin__Qu:
        return s(e, t);case reactdomcjsreactdomproductionmin__$u:
        return c(e, t, n);case reactdomcjsreactdomproductionmin__Xu:
        return d(e, t, n);case reactdomcjsreactdomproductionmin__Gu:
        return f(e, t, n);case reactdomcjsreactdomproductionmin__Zu:
        return h(e, t);case reactdomcjsreactdomproductionmin__ts:
        t.tag = reactdomcjsreactdomproductionmin__es;case reactdomcjsreactdomproductionmin__es:
        return v(e, t);case reactdomcjsreactdomproductionmin__ns:
        return null;case reactdomcjsreactdomproductionmin__Ju:
        return m(e, t);case reactdomcjsreactdomproductionmin__rs:
        return l(e, t);default:
        reactdomcjsreactdomproductionmin__xn("156");}
  }function P(e, t, n) {
    switch (t.tag) {case reactdomcjsreactdomproductionmin__$u:
        reactdomcjsreactdomproductionmin__zu(t);break;case reactdomcjsreactdomproductionmin__Xu:
        var r = t.stateNode;S(t, r.containerInfo);break;default:
        reactdomcjsreactdomproductionmin__xn("157");}if (t.effectTag |= reactdomcjsreactdomproductionmin__ss, null === e ? t.child = null : t.child !== e.child && (t.child = e.child), t.pendingWorkPriority === reactdomcjsreactdomproductionmin__os || t.pendingWorkPriority > n) return b(e, t);t.firstEffect = null, t.lastEffect = null;if (i(e, t, null, n), t.tag === reactdomcjsreactdomproductionmin__$u) {
      var o = t.stateNode;t.memoizedProps = o.props, t.memoizedState = o.state;
    }return t.child;
  }var T = e.shouldSetTextContent,
      x = e.useSyncScheduling,
      w = e.shouldDeprioritizeSubtree,
      N = t.pushHostContext,
      S = t.pushHostContainer,
      _ = n.enterHydrationState,
      I = n.resetHydrationState,
      F = n.tryToClaimNextHydratableInstance,
      O = reactdomcjsreactdomproductionmin__Au(r, o, C, E),
      M = O.adoptClassInstance,
      D = O.constructClassInstance,
      A = O.mountClassInstance,
      R = O.updateClassInstance;return { beginWork: k, beginFailedWork: P };
},
    reactdomcjsreactdomproductionmin__fs = reactdomcjsreactdomproductionmin__Eu.reconcileChildFibers,
    reactdomcjsreactdomproductionmin__hs = reactdomcjsreactdomproductionmin__Yi.popContextProvider,
    reactdomcjsreactdomproductionmin__gs = reactdomcjsreactdomproductionmin__Yn.IndeterminateComponent,
    reactdomcjsreactdomproductionmin__vs = reactdomcjsreactdomproductionmin__Yn.FunctionalComponent,
    reactdomcjsreactdomproductionmin__ms = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__ys = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__bs = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__Cs = reactdomcjsreactdomproductionmin__Yn.HostText,
    reactdomcjsreactdomproductionmin__Es = reactdomcjsreactdomproductionmin__Yn.HostPortal,
    reactdomcjsreactdomproductionmin__ks = reactdomcjsreactdomproductionmin__Yn.CoroutineComponent,
    reactdomcjsreactdomproductionmin__Ps = reactdomcjsreactdomproductionmin__Yn.CoroutineHandlerPhase,
    reactdomcjsreactdomproductionmin__Ts = reactdomcjsreactdomproductionmin__Yn.YieldComponent,
    reactdomcjsreactdomproductionmin__xs = reactdomcjsreactdomproductionmin__Yn.Fragment,
    reactdomcjsreactdomproductionmin__ws = reactdomcjsreactdomproductionmin__dr.Placement,
    reactdomcjsreactdomproductionmin__Ns = reactdomcjsreactdomproductionmin__dr.Ref,
    reactdomcjsreactdomproductionmin__Ss = reactdomcjsreactdomproductionmin__dr.Update,
    reactdomcjsreactdomproductionmin___s = reactdomcjsreactdomproductionmin__ei.OffscreenPriority,
    reactdomcjsreactdomproductionmin__Is = function (e, t, n) {
  function r(e) {
    e.effectTag |= reactdomcjsreactdomproductionmin__Ss;
  }function o(e) {
    e.effectTag |= reactdomcjsreactdomproductionmin__Ns;
  }function a(e, t) {
    var n = t.stateNode;for (n && (n.return = t); null !== n;) {
      if (n.tag === reactdomcjsreactdomproductionmin__bs || n.tag === reactdomcjsreactdomproductionmin__Cs || n.tag === reactdomcjsreactdomproductionmin__Es) reactdomcjsreactdomproductionmin__xn("164");else if (n.tag === reactdomcjsreactdomproductionmin__Ts) e.push(n.type);else if (null !== n.child) {
        n.child.return = n, n = n.child;continue;
      }for (; null === n.sibling;) {
        if (null === n.return || n.return === t) return;n = n.return;
      }n.sibling.return = n.return, n = n.sibling;
    }
  }function i(e, t) {
    var n = t.memoizedProps;n || reactdomcjsreactdomproductionmin__xn("165"), t.tag = reactdomcjsreactdomproductionmin__Ps;var r = [];a(r, t);var o = n.handler,
        i = n.props,
        l = o(i, r),
        u = null !== e ? e.child : null,
        s = t.pendingWorkPriority;return t.child = reactdomcjsreactdomproductionmin__fs(t, u, l, s), t.child;
  }function l(e, t) {
    for (var n = t.child; null !== n;) {
      if (n.tag === reactdomcjsreactdomproductionmin__bs || n.tag === reactdomcjsreactdomproductionmin__Cs) p(e, n.stateNode);else if (n.tag === reactdomcjsreactdomproductionmin__Es) ;else if (null !== n.child) {
        n = n.child;continue;
      }if (n === t) return;for (; null === n.sibling;) {
        if (null === n.return || n.return === t) return;n = n.return;
      }n = n.sibling;
    }
  }function u(e, t, n) {
    var a = t.pendingProps;switch (null === a ? a = t.memoizedProps : t.pendingWorkPriority === reactdomcjsreactdomproductionmin___s && n !== reactdomcjsreactdomproductionmin___s || (t.pendingProps = null), t.tag) {case reactdomcjsreactdomproductionmin__vs:
        return null;case reactdomcjsreactdomproductionmin__ms:
        return reactdomcjsreactdomproductionmin__hs(t), null;case reactdomcjsreactdomproductionmin__ys:
        var u = t.stateNode;return u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), null !== e && null !== e.child || (C(t), t.effectTag &= ~reactdomcjsreactdomproductionmin__ws), null;case reactdomcjsreactdomproductionmin__bs:
        g(t);var p = h(),
            E = t.type;if (null !== e && null != t.stateNode) {
          var k = e.memoizedProps,
              P = t.stateNode,
              T = v(),
              x = f(P, E, k, a, p, T);t.updateQueue = x, x && r(t), e.ref !== t.ref && o(t);
        } else {
          if (!a) return null === t.stateNode && reactdomcjsreactdomproductionmin__xn("166"), null;var w = v();if (C(t)) y(t, p) && r(t);else {
            var N = s(E, a, p, w, t);l(N, t), d(N, E, a, p) && r(t), t.stateNode = N;
          }null !== t.ref && o(t);
        }return null;case reactdomcjsreactdomproductionmin__Cs:
        var S = a;if (e && null != t.stateNode) {
          e.memoizedProps !== S && r(t);
        } else {
          if ("string" != typeof S) return null === t.stateNode && reactdomcjsreactdomproductionmin__xn("166"), null;var _ = h(),
              I = v();C(t) ? b(t) && r(t) : t.stateNode = c(S, _, I, t);
        }return null;case reactdomcjsreactdomproductionmin__ks:
        return i(e, t);case reactdomcjsreactdomproductionmin__Ps:
        return t.tag = reactdomcjsreactdomproductionmin__ks, null;case reactdomcjsreactdomproductionmin__Ts:case reactdomcjsreactdomproductionmin__xs:
        return null;case reactdomcjsreactdomproductionmin__Es:
        return r(t), m(t), null;case reactdomcjsreactdomproductionmin__gs:
        reactdomcjsreactdomproductionmin__xn("167");default:
        reactdomcjsreactdomproductionmin__xn("156");}
  }var s = e.createInstance,
      c = e.createTextInstance,
      p = e.appendInitialChild,
      d = e.finalizeInitialChildren,
      f = e.prepareUpdate,
      h = t.getRootHostContainer,
      g = t.popHostContext,
      v = t.getHostContext,
      m = t.popHostContainer,
      y = n.prepareToHydrateHostInstance,
      b = n.prepareToHydrateHostTextInstance,
      C = n.popHydrationState;return { completeWork: u };
},
    reactdomcjsreactdomproductionmin__Fs = null,
    reactdomcjsreactdomproductionmin__Os = null,
    reactdomcjsreactdomproductionmin__Ms = !1,
    reactdomcjsreactdomproductionmin__Ds = reactdomcjsreactdomproductionmin__Xe,
    reactdomcjsreactdomproductionmin__As = reactdomcjsreactdomproductionmin__Ge,
    reactdomcjsreactdomproductionmin__Rs = reactdomcjsreactdomproductionmin__Ze,
    reactdomcjsreactdomproductionmin__Us = { injectInternals: reactdomcjsreactdomproductionmin__Ds, onCommitRoot: reactdomcjsreactdomproductionmin__As, onCommitUnmount: reactdomcjsreactdomproductionmin__Rs },
    reactdomcjsreactdomproductionmin__Hs = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__Ls = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__Ws = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__Bs = reactdomcjsreactdomproductionmin__Yn.HostText,
    reactdomcjsreactdomproductionmin__Vs = reactdomcjsreactdomproductionmin__Yn.HostPortal,
    reactdomcjsreactdomproductionmin__js = reactdomcjsreactdomproductionmin__Yn.CoroutineComponent,
    reactdomcjsreactdomproductionmin__zs = reactdomcjsreactdomproductionmin__hi.commitCallbacks,
    reactdomcjsreactdomproductionmin__Ks = reactdomcjsreactdomproductionmin__Us.onCommitUnmount,
    reactdomcjsreactdomproductionmin__Ys = reactdomcjsreactdomproductionmin__dr.Placement,
    reactdomcjsreactdomproductionmin__qs = reactdomcjsreactdomproductionmin__dr.Update,
    reactdomcjsreactdomproductionmin__Qs = reactdomcjsreactdomproductionmin__dr.Callback,
    reactdomcjsreactdomproductionmin__$s = reactdomcjsreactdomproductionmin__dr.ContentReset,
    reactdomcjsreactdomproductionmin__Xs = function (e, t) {
  function n(e, n) {
    try {
      n.componentWillUnmount();
    } catch (n) {
      t(e, n);
    }
  }function r(e) {
    var n = e.ref;if (null !== n) {
      try {
        n(null);
      } catch (n) {
        t(e, n);
      }
    }
  }function o(e) {
    for (var t = e.return; null !== t;) {
      if (a(t)) return t;t = t.return;
    }reactdomcjsreactdomproductionmin__xn("160");
  }function a(e) {
    return e.tag === reactdomcjsreactdomproductionmin__Ws || e.tag === reactdomcjsreactdomproductionmin__Ls || e.tag === reactdomcjsreactdomproductionmin__Vs;
  }function i(e) {
    var t = e;e: for (;;) {
      for (; null === t.sibling;) {
        if (null === t.return || a(t.return)) return null;t = t.return;
      }for (t.sibling.return = t.return, t = t.sibling; t.tag !== reactdomcjsreactdomproductionmin__Ws && t.tag !== reactdomcjsreactdomproductionmin__Bs;) {
        if (t.effectTag & reactdomcjsreactdomproductionmin__Ys) continue e;if (null === t.child || t.tag === reactdomcjsreactdomproductionmin__Vs) continue e;t.child.return = t, t = t.child;
      }if (!(t.effectTag & reactdomcjsreactdomproductionmin__Ys)) return t.stateNode;
    }
  }function l(e) {
    var t = o(e),
        n = void 0,
        r = void 0;switch (t.tag) {case reactdomcjsreactdomproductionmin__Ws:
        n = t.stateNode, r = !1;break;case reactdomcjsreactdomproductionmin__Ls:case reactdomcjsreactdomproductionmin__Vs:
        n = t.stateNode.containerInfo, r = !0;break;default:
        reactdomcjsreactdomproductionmin__xn("161");}t.effectTag & reactdomcjsreactdomproductionmin__$s && (y(n), t.effectTag &= ~reactdomcjsreactdomproductionmin__$s);for (var a = i(e), l = e;;) {
      if (l.tag === reactdomcjsreactdomproductionmin__Ws || l.tag === reactdomcjsreactdomproductionmin__Bs) a ? r ? P(n, l.stateNode, a) : k(n, l.stateNode, a) : r ? E(n, l.stateNode) : C(n, l.stateNode);else if (l.tag === reactdomcjsreactdomproductionmin__Vs) ;else if (null !== l.child) {
        l.child.return = l, l = l.child;continue;
      }if (l === e) return;for (; null === l.sibling;) {
        if (null === l.return || l.return === e) return;l = l.return;
      }l.sibling.return = l.return, l = l.sibling;
    }
  }function u(e) {
    for (var t = e;;) if (p(t), null === t.child || t.tag === reactdomcjsreactdomproductionmin__Vs) {
      if (t === e) return;for (; null === t.sibling;) {
        if (null === t.return || t.return === e) return;t = t.return;
      }t.sibling.return = t.return, t = t.sibling;
    } else t.child.return = t, t = t.child;
  }function s(e) {
    for (var t = e, n = !1, r = void 0, o = void 0;;) {
      if (!n) {
        var a = t.return;e: for (;;) {
          switch (null === a && reactdomcjsreactdomproductionmin__xn("160"), a.tag) {case reactdomcjsreactdomproductionmin__Ws:
              r = a.stateNode, o = !1;break e;case reactdomcjsreactdomproductionmin__Ls:case reactdomcjsreactdomproductionmin__Vs:
              r = a.stateNode.containerInfo, o = !0;break e;}a = a.return;
        }n = !0;
      }if (t.tag === reactdomcjsreactdomproductionmin__Ws || t.tag === reactdomcjsreactdomproductionmin__Bs) u(t), o ? x(r, t.stateNode) : T(r, t.stateNode);else if (t.tag === reactdomcjsreactdomproductionmin__Vs) {
        if (r = t.stateNode.containerInfo, null !== t.child) {
          t.child.return = t, t = t.child;continue;
        }
      } else if (p(t), null !== t.child) {
        t.child.return = t, t = t.child;continue;
      }if (t === e) return;for (; null === t.sibling;) {
        if (null === t.return || t.return === e) return;t = t.return, t.tag === reactdomcjsreactdomproductionmin__Vs && (n = !1);
      }t.sibling.return = t.return, t = t.sibling;
    }
  }function c(e) {
    s(e), e.return = null, e.child = null, e.alternate && (e.alternate.child = null, e.alternate.return = null);
  }function p(e) {
    switch ("function" == typeof reactdomcjsreactdomproductionmin__Ks && reactdomcjsreactdomproductionmin__Ks(e), e.tag) {case reactdomcjsreactdomproductionmin__Hs:
        r(e);var t = e.stateNode;return void ("function" == typeof t.componentWillUnmount && n(e, t));case reactdomcjsreactdomproductionmin__Ws:
        return void r(e);case reactdomcjsreactdomproductionmin__js:
        return void u(e.stateNode);case reactdomcjsreactdomproductionmin__Vs:
        return void s(e);}
  }function d(e, t) {
    switch (t.tag) {case reactdomcjsreactdomproductionmin__Hs:
        return;case reactdomcjsreactdomproductionmin__Ws:
        var n = t.stateNode;if (null != n) {
          var r = t.memoizedProps,
              o = null !== e ? e.memoizedProps : r,
              a = t.type,
              i = t.updateQueue;t.updateQueue = null, null !== i && m(n, i, a, o, r, t);
        }return;case reactdomcjsreactdomproductionmin__Bs:
        null === t.stateNode && reactdomcjsreactdomproductionmin__xn("162");var l = t.stateNode,
            u = t.memoizedProps,
            s = null !== e ? e.memoizedProps : u;return void b(l, s, u);case reactdomcjsreactdomproductionmin__Ls:case reactdomcjsreactdomproductionmin__Vs:
        return;default:
        reactdomcjsreactdomproductionmin__xn("163");}
  }function f(e, t) {
    switch (t.tag) {case reactdomcjsreactdomproductionmin__Hs:
        var n = t.stateNode;if (t.effectTag & reactdomcjsreactdomproductionmin__qs) if (null === e) n.componentDidMount();else {
          var r = e.memoizedProps,
              o = e.memoizedState;n.componentDidUpdate(r, o);
        }return void (t.effectTag & reactdomcjsreactdomproductionmin__Qs && null !== t.updateQueue && reactdomcjsreactdomproductionmin__zs(t, t.updateQueue, n));case reactdomcjsreactdomproductionmin__Ls:
        var a = t.updateQueue;if (null !== a) {
          var i = t.child && t.child.stateNode;reactdomcjsreactdomproductionmin__zs(t, a, i);
        }return;case reactdomcjsreactdomproductionmin__Ws:
        var l = t.stateNode;if (null === e && t.effectTag & reactdomcjsreactdomproductionmin__qs) {
          var u = t.type,
              s = t.memoizedProps;v(l, u, s, t);
        }return;case reactdomcjsreactdomproductionmin__Bs:case reactdomcjsreactdomproductionmin__Vs:
        return;default:
        reactdomcjsreactdomproductionmin__xn("163");}
  }function h(e) {
    var t = e.ref;if (null !== t) {
      var n = e.stateNode;switch (e.tag) {case reactdomcjsreactdomproductionmin__Ws:
          t(w(n));break;default:
          t(n);}
    }
  }function g(e) {
    var t = e.ref;null !== t && t(null);
  }var v = e.commitMount,
      m = e.commitUpdate,
      y = e.resetTextContent,
      b = e.commitTextUpdate,
      C = e.appendChild,
      E = e.appendChildToContainer,
      k = e.insertBefore,
      P = e.insertInContainerBefore,
      T = e.removeChild,
      x = e.removeChildFromContainer,
      w = e.getPublicInstance;return { commitPlacement: l, commitDeletion: c, commitWork: d, commitLifeCycles: f, commitAttachRef: h, commitDetachRef: g };
},
    reactdomcjsreactdomproductionmin__Gs = reactdomcjsreactdomproductionmin__ki.createCursor,
    reactdomcjsreactdomproductionmin__Zs = reactdomcjsreactdomproductionmin__ki.pop,
    reactdomcjsreactdomproductionmin__Js = reactdomcjsreactdomproductionmin__ki.push,
    reactdomcjsreactdomproductionmin__ec = {},
    reactdomcjsreactdomproductionmin__tc = function (e) {
  function t(e) {
    return e === reactdomcjsreactdomproductionmin__ec && reactdomcjsreactdomproductionmin__xn("174"), e;
  }function n() {
    return t(f.current);
  }function r(e, t) {
    reactdomcjsreactdomproductionmin__Js(f, t, e);var n = c(t);reactdomcjsreactdomproductionmin__Js(d, e, e), reactdomcjsreactdomproductionmin__Js(p, n, e);
  }function o(e) {
    reactdomcjsreactdomproductionmin__Zs(p, e), reactdomcjsreactdomproductionmin__Zs(d, e), reactdomcjsreactdomproductionmin__Zs(f, e);
  }function a() {
    return t(p.current);
  }function i(e) {
    var n = t(f.current),
        r = t(p.current),
        o = s(r, e.type, n);r !== o && (reactdomcjsreactdomproductionmin__Js(d, e, e), reactdomcjsreactdomproductionmin__Js(p, o, e));
  }function l(e) {
    d.current === e && (reactdomcjsreactdomproductionmin__Zs(p, e), reactdomcjsreactdomproductionmin__Zs(d, e));
  }function u() {
    p.current = reactdomcjsreactdomproductionmin__ec, f.current = reactdomcjsreactdomproductionmin__ec;
  }var s = e.getChildHostContext,
      c = e.getRootHostContext,
      p = reactdomcjsreactdomproductionmin__Gs(reactdomcjsreactdomproductionmin__ec),
      d = reactdomcjsreactdomproductionmin__Gs(reactdomcjsreactdomproductionmin__ec),
      f = reactdomcjsreactdomproductionmin__Gs(reactdomcjsreactdomproductionmin__ec);return { getHostContext: a, getRootHostContainer: n, popHostContainer: o, popHostContext: l, pushHostContainer: r, pushHostContext: i, resetHostContainer: u };
},
    reactdomcjsreactdomproductionmin__nc = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__rc = reactdomcjsreactdomproductionmin__Yn.HostText,
    reactdomcjsreactdomproductionmin__oc = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__ac = reactdomcjsreactdomproductionmin__dr.Deletion,
    reactdomcjsreactdomproductionmin__ic = reactdomcjsreactdomproductionmin__dr.Placement,
    reactdomcjsreactdomproductionmin__lc = reactdomcjsreactdomproductionmin__yl.createFiberFromHostInstanceForDeletion,
    reactdomcjsreactdomproductionmin__uc = function (e) {
  function t(e) {
    var t = e.stateNode.containerInfo;return k = g(t), E = e, P = !0, !0;
  }function n(e, t) {
    var n = reactdomcjsreactdomproductionmin__lc();n.stateNode = t, n.return = e, n.effectTag = reactdomcjsreactdomproductionmin__ac, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
  }function r(e, t) {
    t.effectTag |= reactdomcjsreactdomproductionmin__ic;
  }function o(e, t) {
    switch (e.tag) {case reactdomcjsreactdomproductionmin__nc:
        var n = e.type,
            r = e.pendingProps;return d(t, n, r);case reactdomcjsreactdomproductionmin__rc:
        var o = e.pendingProps;return f(t, o);default:
        return !1;}
  }function a(e) {
    if (P) {
      var t = k;if (!t) return r(E, e), P = !1, void (E = e);if (!o(e, t)) {
        if (!(t = h(t)) || !o(e, t)) return r(E, e), P = !1, void (E = e);n(E, k);
      }e.stateNode = t, E = e, k = g(t);
    }
  }function i(e, t) {
    var n = e.stateNode,
        r = v(n, e.type, e.memoizedProps, t, e);return e.updateQueue = r, null !== r;
  }function l(e) {
    var t = e.stateNode;return m(t, e.memoizedProps, e);
  }function u(e) {
    for (var t = e.return; null !== t && t.tag !== reactdomcjsreactdomproductionmin__nc && t.tag !== reactdomcjsreactdomproductionmin__oc;) t = t.return;E = t;
  }function s(e) {
    if (e !== E) return !1;if (!P) return u(e), P = !0, !1;var t = e.type;if (e.tag !== reactdomcjsreactdomproductionmin__nc || "head" !== t && "body" !== t && !p(t, e.memoizedProps)) for (var r = k; r;) n(e, r), r = h(r);return u(e), k = E ? h(e.stateNode) : null, !0;
  }function c() {
    E = null, k = null, P = !1;
  }var p = e.shouldSetTextContent,
      d = e.canHydrateInstance,
      f = e.canHydrateTextInstance,
      h = e.getNextHydratableSibling,
      g = e.getFirstHydratableChild,
      v = e.hydrateInstance,
      m = e.hydrateTextInstance,
      y = e.didNotHydrateInstance,
      b = e.didNotFindHydratableInstance,
      C = e.didNotFindHydratableTextInstance;if (!(d && f && h && g && v && m && y && b && C)) return { enterHydrationState: function () {
      return !1;
    }, resetHydrationState: function () {}, tryToClaimNextHydratableInstance: function () {}, prepareToHydrateHostInstance: function () {
      reactdomcjsreactdomproductionmin__xn("175");
    }, prepareToHydrateHostTextInstance: function () {
      reactdomcjsreactdomproductionmin__xn("176");
    }, popHydrationState: function (e) {
      return !1;
    } };var E = null,
      k = null,
      P = !1;return { enterHydrationState: t, resetHydrationState: c, tryToClaimNextHydratableInstance: a, prepareToHydrateHostInstance: i, prepareToHydrateHostTextInstance: l, popHydrationState: s };
},
    reactdomcjsreactdomproductionmin__sc = reactdomcjsreactdomproductionmin__Yi.popContextProvider,
    reactdomcjsreactdomproductionmin__cc = reactdomcjsreactdomproductionmin__ki.reset,
    reactdomcjsreactdomproductionmin__pc = reactdomcjsreactdomproductionmin__Nl.getStackAddendumByWorkInProgressFiber,
    reactdomcjsreactdomproductionmin__dc = reactdomcjsreactdomproductionmin__Ol.logCapturedError,
    reactdomcjsreactdomproductionmin__fc = reactdomcjsreactdomproductionmin__cr.ReactCurrentOwner,
    reactdomcjsreactdomproductionmin__hc = reactdomcjsreactdomproductionmin__yl.createWorkInProgress,
    reactdomcjsreactdomproductionmin__gc = reactdomcjsreactdomproductionmin__yl.largerPriority,
    reactdomcjsreactdomproductionmin__vc = reactdomcjsreactdomproductionmin__Us.onCommitRoot,
    reactdomcjsreactdomproductionmin__mc = reactdomcjsreactdomproductionmin__ei.NoWork,
    reactdomcjsreactdomproductionmin__yc = reactdomcjsreactdomproductionmin__ei.SynchronousPriority,
    reactdomcjsreactdomproductionmin__bc = reactdomcjsreactdomproductionmin__ei.TaskPriority,
    reactdomcjsreactdomproductionmin__Cc = reactdomcjsreactdomproductionmin__ei.HighPriority,
    reactdomcjsreactdomproductionmin__Ec = reactdomcjsreactdomproductionmin__ei.LowPriority,
    reactdomcjsreactdomproductionmin__kc = reactdomcjsreactdomproductionmin__ei.OffscreenPriority,
    reactdomcjsreactdomproductionmin__Pc = reactdomcjsreactdomproductionmin__qi.AsyncUpdates,
    reactdomcjsreactdomproductionmin__Tc = reactdomcjsreactdomproductionmin__dr.PerformedWork,
    reactdomcjsreactdomproductionmin__xc = reactdomcjsreactdomproductionmin__dr.Placement,
    reactdomcjsreactdomproductionmin__wc = reactdomcjsreactdomproductionmin__dr.Update,
    reactdomcjsreactdomproductionmin__Nc = reactdomcjsreactdomproductionmin__dr.PlacementAndUpdate,
    reactdomcjsreactdomproductionmin__Sc = reactdomcjsreactdomproductionmin__dr.Deletion,
    reactdomcjsreactdomproductionmin___c = reactdomcjsreactdomproductionmin__dr.ContentReset,
    reactdomcjsreactdomproductionmin__Ic = reactdomcjsreactdomproductionmin__dr.Callback,
    reactdomcjsreactdomproductionmin__Fc = reactdomcjsreactdomproductionmin__dr.Err,
    reactdomcjsreactdomproductionmin__Oc = reactdomcjsreactdomproductionmin__dr.Ref,
    reactdomcjsreactdomproductionmin__Mc = reactdomcjsreactdomproductionmin__Yn.HostRoot,
    reactdomcjsreactdomproductionmin__Dc = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__Ac = reactdomcjsreactdomproductionmin__Yn.HostPortal,
    reactdomcjsreactdomproductionmin__Rc = reactdomcjsreactdomproductionmin__Yn.ClassComponent,
    reactdomcjsreactdomproductionmin__Uc = reactdomcjsreactdomproductionmin__hi.getUpdatePriority,
    reactdomcjsreactdomproductionmin__Hc = reactdomcjsreactdomproductionmin__Yi,
    reactdomcjsreactdomproductionmin__Lc = reactdomcjsreactdomproductionmin__Hc.resetContext,
    reactdomcjsreactdomproductionmin__Wc,
    reactdomcjsreactdomproductionmin__Bc = 1,
    reactdomcjsreactdomproductionmin__Vc = function (e) {
  function t() {
    reactdomcjsreactdomproductionmin__cc(), reactdomcjsreactdomproductionmin__Lc(), M();
  }function n() {
    for (; null !== ae && ae.current.pendingWorkPriority === reactdomcjsreactdomproductionmin__mc;) {
      ae.isScheduled = !1;var e = ae.nextScheduledRoot;if (ae.nextScheduledRoot = null, ae === ie) return ae = null, ie = null, ne = reactdomcjsreactdomproductionmin__mc, null;ae = e;
    }for (var n = ae, r = null, o = reactdomcjsreactdomproductionmin__mc; null !== n;) n.current.pendingWorkPriority !== reactdomcjsreactdomproductionmin__mc && (o === reactdomcjsreactdomproductionmin__mc || o > n.current.pendingWorkPriority) && (o = n.current.pendingWorkPriority, r = n), n = n.nextScheduledRoot;if (null !== r) return ne = o, t(), void (te = reactdomcjsreactdomproductionmin__hc(r.current, o));ne = reactdomcjsreactdomproductionmin__mc, te = null;
  }function r() {
    for (; null !== re;) {
      var t = re.effectTag;if (t & reactdomcjsreactdomproductionmin___c && e.resetTextContent(re.stateNode), t & reactdomcjsreactdomproductionmin__Oc) {
        var n = re.alternate;null !== n && K(n);
      }switch (t & ~(reactdomcjsreactdomproductionmin__Ic | reactdomcjsreactdomproductionmin__Fc | reactdomcjsreactdomproductionmin___c | reactdomcjsreactdomproductionmin__Oc | reactdomcjsreactdomproductionmin__Tc)) {case reactdomcjsreactdomproductionmin__xc:
          W(re), re.effectTag &= ~reactdomcjsreactdomproductionmin__xc;break;case reactdomcjsreactdomproductionmin__Nc:
          W(re), re.effectTag &= ~reactdomcjsreactdomproductionmin__xc;var r = re.alternate;V(r, re);break;case reactdomcjsreactdomproductionmin__wc:
          var o = re.alternate;V(o, re);break;case reactdomcjsreactdomproductionmin__Sc:
          he = !0, B(re), he = !1;}re = re.nextEffect;
    }
  }function o() {
    for (; null !== re;) {
      var e = re.effectTag;if (e & (reactdomcjsreactdomproductionmin__wc | reactdomcjsreactdomproductionmin__Ic)) {
        var t = re.alternate;j(t, re);
      }e & reactdomcjsreactdomproductionmin__Oc && z(re), e & reactdomcjsreactdomproductionmin__Fc && y(re);var n = re.nextEffect;re.nextEffect = null, re = n;
    }
  }function a(e) {
    fe = !0, oe = null;var t = e.stateNode;t.current === e && reactdomcjsreactdomproductionmin__xn("177"), ne !== reactdomcjsreactdomproductionmin__yc && ne !== reactdomcjsreactdomproductionmin__bc || ve++, reactdomcjsreactdomproductionmin__fc.current = null;var a = void 0;for (e.effectTag > reactdomcjsreactdomproductionmin__Tc ? null !== e.lastEffect ? (e.lastEffect.nextEffect = e, a = e.firstEffect) : a = e : a = e.firstEffect, Q(), re = a; null !== re;) {
      var i = !1,
          l = void 0;try {
        r();
      } catch (e) {
        i = !0, l = e;
      }i && (null === re && reactdomcjsreactdomproductionmin__xn("178"), g(re, l), null !== re && (re = re.nextEffect));
    }for ($(), t.current = e, re = a; null !== re;) {
      var u = !1,
          s = void 0;try {
        o();
      } catch (e) {
        u = !0, s = e;
      }u && (null === re && reactdomcjsreactdomproductionmin__xn("178"), g(re, s), null !== re && (re = re.nextEffect));
    }fe = !1, "function" == typeof reactdomcjsreactdomproductionmin__vc && reactdomcjsreactdomproductionmin__vc(e.stateNode), ce && (ce.forEach(P), ce = null), n();
  }function i(e, t) {
    if (!(e.pendingWorkPriority !== reactdomcjsreactdomproductionmin__mc && e.pendingWorkPriority > t)) {
      for (var n = reactdomcjsreactdomproductionmin__Uc(e), r = e.child; null !== r;) n = reactdomcjsreactdomproductionmin__gc(n, r.pendingWorkPriority), r = r.sibling;e.pendingWorkPriority = n;
    }
  }function l(e) {
    for (;;) {
      var t = e.alternate,
          n = H(t, e, ne),
          r = e.return,
          o = e.sibling;if (i(e, ne), null !== n) return n;if (null !== r) {
        null === r.firstEffect && (r.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== r.lastEffect && (r.lastEffect.nextEffect = e.firstEffect), r.lastEffect = e.lastEffect);e.effectTag > reactdomcjsreactdomproductionmin__Tc && (null !== r.lastEffect ? r.lastEffect.nextEffect = e : r.firstEffect = e, r.lastEffect = e);
      }if (null !== o) return o;if (null === r) return oe = e, null;e = r;
    }return null;
  }function u(e) {
    var t = e.alternate,
        n = A(t, e, ne);return null === n && (n = l(e)), reactdomcjsreactdomproductionmin__fc.current = null, n;
  }function s(e) {
    var t = e.alternate,
        n = R(t, e, ne);return null === n && (n = l(e)), reactdomcjsreactdomproductionmin__fc.current = null, n;
  }function c(e) {
    h(reactdomcjsreactdomproductionmin__kc, e);
  }function p() {
    if (null !== ue && ue.size > 0) for (; null !== te;) if (null === (te = v(te) ? s(te) : u(te))) {
      if (null === oe && reactdomcjsreactdomproductionmin__xn("179"), X = reactdomcjsreactdomproductionmin__bc, a(oe), X = ne, null === ue || 0 === ue.size) break;ne !== reactdomcjsreactdomproductionmin__bc && reactdomcjsreactdomproductionmin__xn("180");
    }
  }function d(e, t) {
    if (null !== oe ? (X = reactdomcjsreactdomproductionmin__bc, a(oe), p()) : null === te && n(), !(ne === reactdomcjsreactdomproductionmin__mc || ne > e)) {
      X = ne;e: for (;;) {
        if (ne <= reactdomcjsreactdomproductionmin__bc) for (; null !== te && !(null === (te = u(te)) && (null === oe && reactdomcjsreactdomproductionmin__xn("179"), X = reactdomcjsreactdomproductionmin__bc, a(oe), X = ne, p(), ne === reactdomcjsreactdomproductionmin__mc || ne > e || ne > reactdomcjsreactdomproductionmin__bc)););else if (null !== t) for (; null !== te && !Z;) if (t.timeRemaining() > reactdomcjsreactdomproductionmin__Bc) {
          if (null === (te = u(te))) if (null === oe && reactdomcjsreactdomproductionmin__xn("179"), t.timeRemaining() > reactdomcjsreactdomproductionmin__Bc) {
            if (X = reactdomcjsreactdomproductionmin__bc, a(oe), X = ne, p(), ne === reactdomcjsreactdomproductionmin__mc || ne > e || ne < reactdomcjsreactdomproductionmin__Cc) break;
          } else Z = !0;
        } else Z = !0;switch (ne) {case reactdomcjsreactdomproductionmin__yc:case reactdomcjsreactdomproductionmin__bc:
            if (ne <= e) continue e;break e;case reactdomcjsreactdomproductionmin__Cc:case reactdomcjsreactdomproductionmin__Ec:case reactdomcjsreactdomproductionmin__kc:
            if (null === t) break e;if (!Z && ne <= e) continue e;break e;case reactdomcjsreactdomproductionmin__mc:
            break e;default:
            reactdomcjsreactdomproductionmin__xn("181");}
      }
    }
  }function f(e, t, n, r) {
    b(e, t), te = s(t), d(n, r);
  }function h(e, t) {
    G && reactdomcjsreactdomproductionmin__xn("182"), G = !0, ve = 0;var n = X,
        r = !1,
        o = null;try {
      d(e, t);
    } catch (e) {
      r = !0, o = e;
    }for (; r;) {
      if (de) {
        pe = o;break;
      }var a = te;if (null !== a) {
        var i = g(a, o);if (null === i && reactdomcjsreactdomproductionmin__xn("183"), !de) {
          r = !1, o = null;try {
            f(a, i, e, t), o = null;
          } catch (e) {
            r = !0, o = e;continue;
          }break;
        }
      } else de = !0;
    }X = n, null !== t && (le = !1), ne > reactdomcjsreactdomproductionmin__bc && !le && (Y(c), le = !0);var l = pe;if (G = !1, Z = !1, de = !1, pe = null, ue = null, se = null, null !== l) throw l;
  }function g(e, t) {
    reactdomcjsreactdomproductionmin__fc.current = null;var n = null,
        r = !1,
        o = !1,
        a = null;if (e.tag === reactdomcjsreactdomproductionmin__Mc) n = e, m(e) && (de = !0);else for (var i = e.return; null !== i && null === n;) {
      if (i.tag === reactdomcjsreactdomproductionmin__Rc) {
        var l = i.stateNode;"function" == typeof l.componentDidCatch && (r = !0, a = reactdomcjsreactdomproductionmin__pr(i), n = i, o = !0);
      } else i.tag === reactdomcjsreactdomproductionmin__Mc && (n = i);if (m(i)) {
        if (he) return null;if (null !== ce && (ce.has(i) || null !== i.alternate && ce.has(i.alternate))) return null;n = null, o = !1;
      }i = i.return;
    }if (null !== n) {
      null === se && (se = new Set()), se.add(n);var u = reactdomcjsreactdomproductionmin__pc(e),
          s = reactdomcjsreactdomproductionmin__pr(e);null === ue && (ue = new Map());var c = { componentName: s, componentStack: u, error: t, errorBoundary: r ? n.stateNode : null, errorBoundaryFound: r, errorBoundaryName: a, willRetry: o };ue.set(n, c);try {
        reactdomcjsreactdomproductionmin__dc(c);
      } catch (e) {
        console.error(e);
      }return fe ? (null === ce && (ce = new Set()), ce.add(n)) : P(n), n;
    }return null === pe && (pe = t), null;
  }function v(e) {
    return null !== ue && (ue.has(e) || null !== e.alternate && ue.has(e.alternate));
  }function m(e) {
    return null !== se && (se.has(e) || null !== e.alternate && se.has(e.alternate));
  }function y(e) {
    var t = void 0;switch (null !== ue && (t = ue.get(e), ue.delete(e), null == t && null !== e.alternate && (e = e.alternate, t = ue.get(e), ue.delete(e))), null == t && reactdomcjsreactdomproductionmin__xn("184"), e.tag) {case reactdomcjsreactdomproductionmin__Rc:
        var n = e.stateNode,
            r = { componentStack: t.componentStack };return void n.componentDidCatch(t.error, r);case reactdomcjsreactdomproductionmin__Mc:
        return void (null === pe && (pe = t.error));default:
        reactdomcjsreactdomproductionmin__xn("157");}
  }function b(e, t) {
    for (var n = e; null !== n;) {
      switch (n.tag) {case reactdomcjsreactdomproductionmin__Rc:
          reactdomcjsreactdomproductionmin__sc(n);break;case reactdomcjsreactdomproductionmin__Dc:
          O(n);break;case reactdomcjsreactdomproductionmin__Mc:case reactdomcjsreactdomproductionmin__Ac:
          F(n);}if (n === t || n.alternate === t) break;n = n.return;
    }
  }function C(e, t) {
    t !== reactdomcjsreactdomproductionmin__mc && (e.isScheduled || (e.isScheduled = !0, ie ? (ie.nextScheduledRoot = e, ie = e) : (ae = e, ie = e)));
  }function E(e, t) {
    ve > ge && (de = !0, reactdomcjsreactdomproductionmin__xn("185")), !G && t <= ne && (te = null);for (var n = e, r = !0; null !== n && r;) {
      if (r = !1, (n.pendingWorkPriority === reactdomcjsreactdomproductionmin__mc || n.pendingWorkPriority > t) && (r = !0, n.pendingWorkPriority = t), null !== n.alternate && (n.alternate.pendingWorkPriority === reactdomcjsreactdomproductionmin__mc || n.alternate.pendingWorkPriority > t) && (r = !0, n.alternate.pendingWorkPriority = t), null === n.return) {
        if (n.tag !== reactdomcjsreactdomproductionmin__Mc) return;if (C(n.stateNode, t), !G) switch (t) {case reactdomcjsreactdomproductionmin__yc:
            ee ? h(reactdomcjsreactdomproductionmin__yc, null) : h(reactdomcjsreactdomproductionmin__bc, null);break;case reactdomcjsreactdomproductionmin__bc:
            J || reactdomcjsreactdomproductionmin__xn("186");break;default:
            le || (Y(c), le = !0);}
      }n = n.return;
    }
  }function k(e, t) {
    var n = X;return n === reactdomcjsreactdomproductionmin__mc && (n = !q || e.internalContextTag & reactdomcjsreactdomproductionmin__Pc || t ? reactdomcjsreactdomproductionmin__Ec : reactdomcjsreactdomproductionmin__yc), n === reactdomcjsreactdomproductionmin__yc && (G || J) ? reactdomcjsreactdomproductionmin__bc : n;
  }function P(e) {
    E(e, reactdomcjsreactdomproductionmin__bc);
  }function T(e, t) {
    var n = X;X = e;try {
      t();
    } finally {
      X = n;
    }
  }function x(e, t) {
    var n = J;J = !0;try {
      return e(t);
    } finally {
      J = n, G || J || h(reactdomcjsreactdomproductionmin__bc, null);
    }
  }function w(e) {
    var t = ee,
        n = J;ee = J, J = !1;try {
      return e();
    } finally {
      J = n, ee = t;
    }
  }function N(e) {
    var t = J,
        n = X;J = !0, X = reactdomcjsreactdomproductionmin__yc;try {
      return e();
    } finally {
      J = t, X = n, G && reactdomcjsreactdomproductionmin__xn("187"), h(reactdomcjsreactdomproductionmin__bc, null);
    }
  }function S(e) {
    var t = X;X = reactdomcjsreactdomproductionmin__Ec;try {
      return e();
    } finally {
      X = t;
    }
  }var _ = reactdomcjsreactdomproductionmin__tc(e),
      I = reactdomcjsreactdomproductionmin__uc(e),
      F = _.popHostContainer,
      O = _.popHostContext,
      M = _.resetHostContainer,
      D = reactdomcjsreactdomproductionmin__ds(e, _, I, E, k),
      A = D.beginWork,
      R = D.beginFailedWork,
      U = reactdomcjsreactdomproductionmin__Is(e, _, I),
      H = U.completeWork,
      L = reactdomcjsreactdomproductionmin__Xs(e, g),
      W = L.commitPlacement,
      B = L.commitDeletion,
      V = L.commitWork,
      j = L.commitLifeCycles,
      z = L.commitAttachRef,
      K = L.commitDetachRef,
      Y = e.scheduleDeferredCallback,
      q = e.useSyncScheduling,
      Q = e.prepareForCommit,
      $ = e.resetAfterCommit,
      X = reactdomcjsreactdomproductionmin__mc,
      G = !1,
      Z = !1,
      J = !1,
      ee = !1,
      te = null,
      ne = reactdomcjsreactdomproductionmin__mc,
      re = null,
      oe = null,
      ae = null,
      ie = null,
      le = !1,
      ue = null,
      se = null,
      ce = null,
      pe = null,
      de = !1,
      fe = !1,
      he = !1,
      ge = 1e3,
      ve = 0;return { scheduleUpdate: E, getPriorityContext: k, performWithPriority: T, batchedUpdates: x, unbatchedUpdates: w, flushSync: N, deferredUpdates: S };
},
    reactdomcjsreactdomproductionmin__jc = function (e) {
  reactdomcjsreactdomproductionmin__xn("196");
};reactdomcjsreactdomproductionmin__Je._injectFiber = function (e) {
  reactdomcjsreactdomproductionmin__jc = e;
};var reactdomcjsreactdomproductionmin__zc = reactdomcjsreactdomproductionmin__Je,
    reactdomcjsreactdomproductionmin__Kc = reactdomcjsreactdomproductionmin__hi.addTopLevelUpdate,
    reactdomcjsreactdomproductionmin__Yc = reactdomcjsreactdomproductionmin__Yi.findCurrentUnmaskedContext,
    reactdomcjsreactdomproductionmin__qc = reactdomcjsreactdomproductionmin__Yi.isContextProvider,
    reactdomcjsreactdomproductionmin__Qc = reactdomcjsreactdomproductionmin__Yi.processChildContext,
    reactdomcjsreactdomproductionmin__$c = reactdomcjsreactdomproductionmin__El.createFiberRoot,
    reactdomcjsreactdomproductionmin__Xc = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__Gc = reactdomcjsreactdomproductionmin__Nr.findCurrentHostFiber,
    reactdomcjsreactdomproductionmin__Zc = reactdomcjsreactdomproductionmin__Nr.findCurrentHostFiberWithNoPortals;reactdomcjsreactdomproductionmin__zc._injectFiber(function (e) {
  var t = reactdomcjsreactdomproductionmin__Yc(e);return reactdomcjsreactdomproductionmin__qc(e) ? reactdomcjsreactdomproductionmin__Qc(e, t, !1) : t;
});var reactdomcjsreactdomproductionmin__Jc = function (e) {
  function t(e, t, n) {
    var r = reactdomcjsreactdomproductionmin__wo.enableAsyncSubtreeAPI && null != t && null != t.type && null != t.type.prototype && !0 === t.type.prototype.unstable_isAsyncReactComponent,
        i = a(e, r),
        l = { element: t };n = void 0 === n ? null : n, reactdomcjsreactdomproductionmin__Kc(e, l, n, i), o(e, i);
  }var n = e.getPublicInstance,
      r = reactdomcjsreactdomproductionmin__Vc(e),
      o = r.scheduleUpdate,
      a = r.getPriorityContext,
      i = r.performWithPriority,
      l = r.batchedUpdates,
      u = r.unbatchedUpdates,
      s = r.flushSync,
      c = r.deferredUpdates;return { createContainer: function (e) {
      return reactdomcjsreactdomproductionmin__$c(e);
    }, updateContainer: function (e, n, r, o) {
      var a = n.current,
          i = reactdomcjsreactdomproductionmin__zc(r);null === n.context ? n.context = i : n.pendingContext = i, t(a, e, o);
    }, performWithPriority: i, batchedUpdates: l, unbatchedUpdates: u, deferredUpdates: c, flushSync: s, getPublicRootInstance: function (e) {
      var t = e.current;if (!t.child) return null;switch (t.child.tag) {case reactdomcjsreactdomproductionmin__Xc:
          return n(t.child.stateNode);default:
          return t.child.stateNode;}
    }, findHostInstance: function (e) {
      var t = reactdomcjsreactdomproductionmin__Gc(e);return null === t ? null : t.stateNode;
    }, findHostInstanceWithNoPortals: function (e) {
      var t = reactdomcjsreactdomproductionmin__Zc(e);return null === t ? null : t.stateNode;
    } };
},
    reactdomcjsreactdomproductionmin__ep = reactdomcjsreactdomproductionmin__Qn.TEXT_NODE,
    reactdomcjsreactdomproductionmin__tp = reactdomcjsreactdomproductionmin__nt,
    reactdomcjsreactdomproductionmin__np = null,
    reactdomcjsreactdomproductionmin__rp = reactdomcjsreactdomproductionmin__rt,
    reactdomcjsreactdomproductionmin__op = { getOffsets: reactdomcjsreactdomproductionmin__at, setOffsets: reactdomcjsreactdomproductionmin__it },
    reactdomcjsreactdomproductionmin__ap = reactdomcjsreactdomproductionmin__op,
    reactdomcjsreactdomproductionmin__ip = reactdomcjsreactdomproductionmin__Qn.ELEMENT_NODE,
    reactdomcjsreactdomproductionmin__lp = { hasSelectionCapabilities: function (e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable);
  }, getSelectionInformation: function () {
    var e = reactdomcjsreactdomproductionmin__Tn();return { focusedElem: e, selectionRange: reactdomcjsreactdomproductionmin__lp.hasSelectionCapabilities(e) ? reactdomcjsreactdomproductionmin__lp.getSelection(e) : null };
  }, restoreSelection: function (e) {
    var t = reactdomcjsreactdomproductionmin__Tn(),
        n = e.focusedElem,
        r = e.selectionRange;if (t !== n && reactdomcjsreactdomproductionmin__lt(n)) {
      reactdomcjsreactdomproductionmin__lp.hasSelectionCapabilities(n) && reactdomcjsreactdomproductionmin__lp.setSelection(n, r);for (var o = [], a = n; a = a.parentNode;) a.nodeType === reactdomcjsreactdomproductionmin__ip && o.push({ element: a, left: a.scrollLeft, top: a.scrollTop });reactdomcjsreactdomproductionmin__Pn(n);for (var i = 0; i < o.length; i++) {
        var l = o[i];l.element.scrollLeft = l.left, l.element.scrollTop = l.top;
      }
    }
  }, getSelection: function (e) {
    return ("selectionStart" in e ? { start: e.selectionStart, end: e.selectionEnd } : reactdomcjsreactdomproductionmin__ap.getOffsets(e)) || { start: 0, end: 0 };
  }, setSelection: function (e, t) {
    var n = t.start,
        r = t.end;void 0 === r && (r = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : reactdomcjsreactdomproductionmin__ap.setOffsets(e, t);
  } },
    reactdomcjsreactdomproductionmin__up = reactdomcjsreactdomproductionmin__lp,
    reactdomcjsreactdomproductionmin__sp = "16.0.0-beta.3",
    reactdomcjsreactdomproductionmin__cp = reactdomcjsreactdomproductionmin__Qn.ELEMENT_NODE,
    reactdomcjsreactdomproductionmin__pp = function (e) {
  reactdomcjsreactdomproductionmin__vn(!1, "Missing injection for fiber findDOMNode");
},
    reactdomcjsreactdomproductionmin__dp = function (e) {
  reactdomcjsreactdomproductionmin__vn(!1, "Missing injection for stack findDOMNode");
},
    reactdomcjsreactdomproductionmin__fp = function (e) {
  if (null == e) return null;if (e.nodeType === reactdomcjsreactdomproductionmin__cp) return e;var t = reactdomcjsreactdomproductionmin__lr.get(e);if (t) return "number" == typeof t.tag ? reactdomcjsreactdomproductionmin__pp(t) : reactdomcjsreactdomproductionmin__dp(t);"function" == typeof e.render ? reactdomcjsreactdomproductionmin__xn("188") : reactdomcjsreactdomproductionmin__vn(!1, "Element appears to be neither ReactComponent nor DOMNode. Keys: %s", Object.keys(e));
};reactdomcjsreactdomproductionmin__fp._injectFiber = function (e) {
  reactdomcjsreactdomproductionmin__pp = e;
}, reactdomcjsreactdomproductionmin__fp._injectStack = function (e) {
  reactdomcjsreactdomproductionmin__dp = e;
};var reactdomcjsreactdomproductionmin__hp = reactdomcjsreactdomproductionmin__fp,
    reactdomcjsreactdomproductionmin__gp = reactdomcjsreactdomproductionmin__Yn.HostComponent,
    reactdomcjsreactdomproductionmin__vp = { isAncestor: reactdomcjsreactdomproductionmin__ct, getLowestCommonAncestor: reactdomcjsreactdomproductionmin__st, getParentInstance: reactdomcjsreactdomproductionmin__pt, traverseTwoPhase: reactdomcjsreactdomproductionmin__dt, traverseEnterLeave: reactdomcjsreactdomproductionmin__ft },
    reactdomcjsreactdomproductionmin__mp = reactdomcjsreactdomproductionmin__io.getListener,
    reactdomcjsreactdomproductionmin__yp = { accumulateTwoPhaseDispatches: reactdomcjsreactdomproductionmin__Ct, accumulateTwoPhaseDispatchesSkipTarget: reactdomcjsreactdomproductionmin__Et, accumulateDirectDispatches: reactdomcjsreactdomproductionmin__Pt, accumulateEnterLeaveDispatches: reactdomcjsreactdomproductionmin__kt },
    reactdomcjsreactdomproductionmin__bp = reactdomcjsreactdomproductionmin__yp;reactdomcjsreactdomproductionmin__gn(reactdomcjsreactdomproductionmin__Tt.prototype, { destructor: function () {
    this._root = null, this._startText = null, this._fallbackText = null;
  }, getText: function () {
    return "value" in this._root ? this._root.value : this._root[reactdomcjsreactdomproductionmin__rp()];
  }, getData: function () {
    if (this._fallbackText) return this._fallbackText;var e,
        t,
        n = this._startText,
        r = n.length,
        o = this.getText(),
        a = o.length;for (e = 0; e < r && n[e] === o[e]; e++);var i = r - e;for (t = 1; t <= i && n[r - t] === o[a - t]; t++);var l = t > 1 ? 1 - t : void 0;return this._fallbackText = o.slice(e, l), this._fallbackText;
  } }), reactdomcjsreactdomproductionmin__Ln.addPoolingTo(reactdomcjsreactdomproductionmin__Tt);var reactdomcjsreactdomproductionmin__Cp = reactdomcjsreactdomproductionmin__Tt,
    reactdomcjsreactdomproductionmin__Ep = ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"],
    reactdomcjsreactdomproductionmin__kp = { type: null, target: null, currentTarget: reactdomcjsreactdomproductionmin__bn.thatReturnsNull, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: null, isTrusted: null };reactdomcjsreactdomproductionmin__gn(reactdomcjsreactdomproductionmin__xt.prototype, { preventDefault: function () {
    this.defaultPrevented = !0;var e = this.nativeEvent;e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = reactdomcjsreactdomproductionmin__bn.thatReturnsTrue);
  }, stopPropagation: function () {
    var e = this.nativeEvent;e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = reactdomcjsreactdomproductionmin__bn.thatReturnsTrue);
  }, persist: function () {
    this.isPersistent = reactdomcjsreactdomproductionmin__bn.thatReturnsTrue;
  }, isPersistent: reactdomcjsreactdomproductionmin__bn.thatReturnsFalse, destructor: function () {
    var e = this.constructor.Interface;for (var t in e) this[t] = null;for (var n = 0; n < reactdomcjsreactdomproductionmin__Ep.length; n++) this[reactdomcjsreactdomproductionmin__Ep[n]] = null;
  } }), reactdomcjsreactdomproductionmin__xt.Interface = reactdomcjsreactdomproductionmin__kp, reactdomcjsreactdomproductionmin__xt.augmentClass = function (e, t) {
  var n = this,
      r = function () {};r.prototype = n.prototype;var o = new r();reactdomcjsreactdomproductionmin__gn(o, e.prototype), e.prototype = o, e.prototype.constructor = e, e.Interface = reactdomcjsreactdomproductionmin__gn({}, n.Interface, t), e.augmentClass = n.augmentClass, reactdomcjsreactdomproductionmin__Ln.addPoolingTo(e, reactdomcjsreactdomproductionmin__Ln.fourArgumentPooler);
}, reactdomcjsreactdomproductionmin__Ln.addPoolingTo(reactdomcjsreactdomproductionmin__xt, reactdomcjsreactdomproductionmin__Ln.fourArgumentPooler);var reactdomcjsreactdomproductionmin__Pp = reactdomcjsreactdomproductionmin__xt,
    reactdomcjsreactdomproductionmin__Tp = { data: null };reactdomcjsreactdomproductionmin__Pp.augmentClass(reactdomcjsreactdomproductionmin__wt, reactdomcjsreactdomproductionmin__Tp);var reactdomcjsreactdomproductionmin__xp = reactdomcjsreactdomproductionmin__wt,
    reactdomcjsreactdomproductionmin__wp = { data: null };reactdomcjsreactdomproductionmin__Pp.augmentClass(reactdomcjsreactdomproductionmin__Nt, reactdomcjsreactdomproductionmin__wp);var reactdomcjsreactdomproductionmin__Np = reactdomcjsreactdomproductionmin__Nt,
    reactdomcjsreactdomproductionmin__Sp = [9, 13, 27, 32],
    reactdomcjsreactdomproductionmin___p = 229,
    reactdomcjsreactdomproductionmin__Ip = reactdomcjsreactdomproductionmin__hn.canUseDOM && "CompositionEvent" in window,
    reactdomcjsreactdomproductionmin__Fp = null;reactdomcjsreactdomproductionmin__hn.canUseDOM && "documentMode" in document && (reactdomcjsreactdomproductionmin__Fp = document.documentMode);var reactdomcjsreactdomproductionmin__Op = reactdomcjsreactdomproductionmin__hn.canUseDOM && "TextEvent" in window && !reactdomcjsreactdomproductionmin__Fp && !reactdomcjsreactdomproductionmin__St(),
    reactdomcjsreactdomproductionmin__Mp = reactdomcjsreactdomproductionmin__hn.canUseDOM && (!reactdomcjsreactdomproductionmin__Ip || reactdomcjsreactdomproductionmin__Fp && reactdomcjsreactdomproductionmin__Fp > 8 && reactdomcjsreactdomproductionmin__Fp <= 11),
    reactdomcjsreactdomproductionmin__Dp = 32,
    reactdomcjsreactdomproductionmin__Ap = String.fromCharCode(reactdomcjsreactdomproductionmin__Dp),
    reactdomcjsreactdomproductionmin__Rp = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"] }, compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" },
    dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"] }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"] } },
    reactdomcjsreactdomproductionmin__Up = !1,
    reactdomcjsreactdomproductionmin__Hp = null,
    reactdomcjsreactdomproductionmin__Lp = { eventTypes: reactdomcjsreactdomproductionmin__Rp, extractEvents: function (e, t, n, r) {
    return [reactdomcjsreactdomproductionmin__Dt(e, t, n, r), reactdomcjsreactdomproductionmin__Ut(e, t, n, r)];
  } },
    reactdomcjsreactdomproductionmin__Wp = reactdomcjsreactdomproductionmin__Lp,
    reactdomcjsreactdomproductionmin__Bp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 },
    reactdomcjsreactdomproductionmin__Vp = reactdomcjsreactdomproductionmin__Ht,
    reactdomcjsreactdomproductionmin__jp = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"] } },
    reactdomcjsreactdomproductionmin__zp = !1;reactdomcjsreactdomproductionmin__hn.canUseDOM && (reactdomcjsreactdomproductionmin__zp = !document.documentMode || document.documentMode > 9);var reactdomcjsreactdomproductionmin__Kp = { eventTypes: reactdomcjsreactdomproductionmin__jp, extractEvents: function (e, t, n, r) {
    var o = t ? reactdomcjsreactdomproductionmin__ar.getNodeFromInstance(t) : window;reactdomcjsreactdomproductionmin__zp || "topSelectionChange" !== e || (r = o = reactdomcjsreactdomproductionmin__Tn(), o && (t = reactdomcjsreactdomproductionmin__ar.getInstanceFromNode(o)));var a, i;if (a = reactdomcjsreactdomproductionmin__Lt(o) ? reactdomcjsreactdomproductionmin__zt : reactdomcjsreactdomproductionmin__Vp(o) && !reactdomcjsreactdomproductionmin__zp ? reactdomcjsreactdomproductionmin__Vt : reactdomcjsreactdomproductionmin__jt) {
      var l = a(e, t, o);if (l) {
        return reactdomcjsreactdomproductionmin__Wt(l, n, r);
      }
    }i && i(e, o, t), "topBlur" === e && reactdomcjsreactdomproductionmin__Kt(t, o);
  } },
    reactdomcjsreactdomproductionmin__Yp = reactdomcjsreactdomproductionmin__Kp,
    reactdomcjsreactdomproductionmin__qp = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"],
    reactdomcjsreactdomproductionmin__Qp = reactdomcjsreactdomproductionmin__qp,
    reactdomcjsreactdomproductionmin__$p = { view: function (e) {
    if (e.view) return e.view;var t = reactdomcjsreactdomproductionmin__$r(e);if (t.window === t) return t;var n = t.ownerDocument;return n ? n.defaultView || n.parentWindow : window;
  }, detail: function (e) {
    return e.detail || 0;
  } };reactdomcjsreactdomproductionmin__Pp.augmentClass(reactdomcjsreactdomproductionmin__Yt, reactdomcjsreactdomproductionmin__$p);var reactdomcjsreactdomproductionmin__Xp = reactdomcjsreactdomproductionmin__Yt,
    reactdomcjsreactdomproductionmin__Gp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" },
    reactdomcjsreactdomproductionmin__Zp = reactdomcjsreactdomproductionmin__Qt,
    reactdomcjsreactdomproductionmin__Jp = { screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: reactdomcjsreactdomproductionmin__Zp, button: null, buttons: null, relatedTarget: function (e) {
    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
  } };reactdomcjsreactdomproductionmin__Xp.augmentClass(reactdomcjsreactdomproductionmin__$t, reactdomcjsreactdomproductionmin__Jp);var reactdomcjsreactdomproductionmin__ed = reactdomcjsreactdomproductionmin__$t,
    reactdomcjsreactdomproductionmin__td = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["topMouseOut", "topMouseOver"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["topMouseOut", "topMouseOver"] } },
    reactdomcjsreactdomproductionmin__nd = { eventTypes: reactdomcjsreactdomproductionmin__td, extractEvents: function (e, t, n, r) {
    if ("topMouseOver" === e && (n.relatedTarget || n.fromElement)) return null;if ("topMouseOut" !== e && "topMouseOver" !== e) return null;var o;if (r.window === r) o = r;else {
      var a = r.ownerDocument;o = a ? a.defaultView || a.parentWindow : window;
    }var i, l;if ("topMouseOut" === e) {
      i = t;var u = n.relatedTarget || n.toElement;l = u ? reactdomcjsreactdomproductionmin__ar.getClosestInstanceFromNode(u) : null;
    } else i = null, l = t;if (i === l) return null;var s = null == i ? o : reactdomcjsreactdomproductionmin__ar.getNodeFromInstance(i),
        c = null == l ? o : reactdomcjsreactdomproductionmin__ar.getNodeFromInstance(l),
        p = reactdomcjsreactdomproductionmin__ed.getPooled(reactdomcjsreactdomproductionmin__td.mouseLeave, i, n, r);p.type = "mouseleave", p.target = s, p.relatedTarget = c;var d = reactdomcjsreactdomproductionmin__ed.getPooled(reactdomcjsreactdomproductionmin__td.mouseEnter, l, n, r);return d.type = "mouseenter", d.target = c, d.relatedTarget = s, reactdomcjsreactdomproductionmin__bp.accumulateEnterLeaveDispatches(p, d, i, l), [p, d];
  } },
    reactdomcjsreactdomproductionmin__rd = reactdomcjsreactdomproductionmin__nd,
    reactdomcjsreactdomproductionmin__od = reactdomcjsreactdomproductionmin__Qn.DOCUMENT_NODE,
    reactdomcjsreactdomproductionmin__ad = reactdomcjsreactdomproductionmin__hn.canUseDOM && "documentMode" in document && document.documentMode <= 11,
    reactdomcjsreactdomproductionmin__id = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"] } },
    reactdomcjsreactdomproductionmin__ld = null,
    reactdomcjsreactdomproductionmin__ud = null,
    reactdomcjsreactdomproductionmin__sd = null,
    reactdomcjsreactdomproductionmin__cd = !1,
    reactdomcjsreactdomproductionmin__pd = reactdomcjsreactdomproductionmin__To.isListeningToAllDependencies,
    reactdomcjsreactdomproductionmin__dd = { eventTypes: reactdomcjsreactdomproductionmin__id, extractEvents: function (e, t, n, r) {
    var o = r.window === r ? r.document : r.nodeType === reactdomcjsreactdomproductionmin__od ? r : r.ownerDocument;if (!o || !reactdomcjsreactdomproductionmin__pd("onSelect", o)) return null;var a = t ? reactdomcjsreactdomproductionmin__ar.getNodeFromInstance(t) : window;switch (e) {case "topFocus":
        (reactdomcjsreactdomproductionmin__Vp(a) || "true" === a.contentEditable) && (reactdomcjsreactdomproductionmin__ld = a, reactdomcjsreactdomproductionmin__ud = t, reactdomcjsreactdomproductionmin__sd = null);break;case "topBlur":
        reactdomcjsreactdomproductionmin__ld = null, reactdomcjsreactdomproductionmin__ud = null, reactdomcjsreactdomproductionmin__sd = null;break;case "topMouseDown":
        reactdomcjsreactdomproductionmin__cd = !0;break;case "topContextMenu":case "topMouseUp":
        return reactdomcjsreactdomproductionmin__cd = !1, reactdomcjsreactdomproductionmin__Gt(n, r);case "topSelectionChange":
        if (reactdomcjsreactdomproductionmin__ad) break;case "topKeyDown":case "topKeyUp":
        return reactdomcjsreactdomproductionmin__Gt(n, r);}return null;
  } },
    reactdomcjsreactdomproductionmin__fd = reactdomcjsreactdomproductionmin__dd,
    reactdomcjsreactdomproductionmin__hd = { animationName: null, elapsedTime: null, pseudoElement: null };reactdomcjsreactdomproductionmin__Pp.augmentClass(reactdomcjsreactdomproductionmin__Zt, reactdomcjsreactdomproductionmin__hd);var reactdomcjsreactdomproductionmin__gd = reactdomcjsreactdomproductionmin__Zt,
    reactdomcjsreactdomproductionmin__vd = { clipboardData: function (e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } };reactdomcjsreactdomproductionmin__Pp.augmentClass(reactdomcjsreactdomproductionmin__Jt, reactdomcjsreactdomproductionmin__vd);var reactdomcjsreactdomproductionmin__md = reactdomcjsreactdomproductionmin__Jt,
    reactdomcjsreactdomproductionmin__yd = { relatedTarget: null };reactdomcjsreactdomproductionmin__Xp.augmentClass(reactdomcjsreactdomproductionmin__en, reactdomcjsreactdomproductionmin__yd);var reactdomcjsreactdomproductionmin__bd = reactdomcjsreactdomproductionmin__en,
    reactdomcjsreactdomproductionmin__Cd = reactdomcjsreactdomproductionmin__tn,
    reactdomcjsreactdomproductionmin__Ed = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    reactdomcjsreactdomproductionmin__kd = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    reactdomcjsreactdomproductionmin__Pd = reactdomcjsreactdomproductionmin__nn,
    reactdomcjsreactdomproductionmin__Td = { key: reactdomcjsreactdomproductionmin__Pd, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: reactdomcjsreactdomproductionmin__Zp, charCode: function (e) {
    return "keypress" === e.type ? reactdomcjsreactdomproductionmin__Cd(e) : 0;
  }, keyCode: function (e) {
    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
  }, which: function (e) {
    return "keypress" === e.type ? reactdomcjsreactdomproductionmin__Cd(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
  } };reactdomcjsreactdomproductionmin__Xp.augmentClass(reactdomcjsreactdomproductionmin__rn, reactdomcjsreactdomproductionmin__Td);var reactdomcjsreactdomproductionmin__xd = reactdomcjsreactdomproductionmin__rn,
    reactdomcjsreactdomproductionmin__wd = { dataTransfer: null };reactdomcjsreactdomproductionmin__ed.augmentClass(reactdomcjsreactdomproductionmin__on, reactdomcjsreactdomproductionmin__wd);var reactdomcjsreactdomproductionmin__Nd = reactdomcjsreactdomproductionmin__on,
    reactdomcjsreactdomproductionmin__Sd = { touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: reactdomcjsreactdomproductionmin__Zp };reactdomcjsreactdomproductionmin__Xp.augmentClass(reactdomcjsreactdomproductionmin__an, reactdomcjsreactdomproductionmin__Sd);var reactdomcjsreactdomproductionmin___d = reactdomcjsreactdomproductionmin__an,
    reactdomcjsreactdomproductionmin__Id = { propertyName: null, elapsedTime: null, pseudoElement: null };reactdomcjsreactdomproductionmin__Pp.augmentClass(reactdomcjsreactdomproductionmin__ln, reactdomcjsreactdomproductionmin__Id);var reactdomcjsreactdomproductionmin__Fd = reactdomcjsreactdomproductionmin__ln,
    reactdomcjsreactdomproductionmin__Od = { deltaX: function (e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function (e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: null, deltaMode: null };reactdomcjsreactdomproductionmin__ed.augmentClass(reactdomcjsreactdomproductionmin__un, reactdomcjsreactdomproductionmin__Od);var reactdomcjsreactdomproductionmin__Md = reactdomcjsreactdomproductionmin__un,
    reactdomcjsreactdomproductionmin__Dd = {},
    reactdomcjsreactdomproductionmin__Ad = {};["abort", "animationEnd", "animationIteration", "animationStart", "blur", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "toggle", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function (e) {
  var t = e[0].toUpperCase() + e.slice(1),
      n = "on" + t,
      r = "top" + t,
      o = { phasedRegistrationNames: { bubbled: n, captured: n + "Capture" }, dependencies: [r] };reactdomcjsreactdomproductionmin__Dd[e] = o, reactdomcjsreactdomproductionmin__Ad[r] = o;
});var reactdomcjsreactdomproductionmin__Rd = { eventTypes: reactdomcjsreactdomproductionmin__Dd, extractEvents: function (e, t, n, r) {
    var o = reactdomcjsreactdomproductionmin__Ad[e];if (!o) return null;var a;switch (e) {case "topAbort":case "topCancel":case "topCanPlay":case "topCanPlayThrough":case "topClose":case "topDurationChange":case "topEmptied":case "topEncrypted":case "topEnded":case "topError":case "topInput":case "topInvalid":case "topLoad":case "topLoadedData":case "topLoadedMetadata":case "topLoadStart":case "topPause":case "topPlay":case "topPlaying":case "topProgress":case "topRateChange":case "topReset":case "topSeeked":case "topSeeking":case "topStalled":case "topSubmit":case "topSuspend":case "topTimeUpdate":case "topToggle":case "topVolumeChange":case "topWaiting":
        a = reactdomcjsreactdomproductionmin__Pp;break;case "topKeyPress":
        if (0 === reactdomcjsreactdomproductionmin__Cd(n)) return null;case "topKeyDown":case "topKeyUp":
        a = reactdomcjsreactdomproductionmin__xd;break;case "topBlur":case "topFocus":
        a = reactdomcjsreactdomproductionmin__bd;break;case "topClick":
        if (2 === n.button) return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":
        a = reactdomcjsreactdomproductionmin__ed;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":
        a = reactdomcjsreactdomproductionmin__Nd;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":
        a = reactdomcjsreactdomproductionmin___d;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":
        a = reactdomcjsreactdomproductionmin__gd;break;case "topTransitionEnd":
        a = reactdomcjsreactdomproductionmin__Fd;break;case "topScroll":
        a = reactdomcjsreactdomproductionmin__Xp;break;case "topWheel":
        a = reactdomcjsreactdomproductionmin__Md;break;case "topCopy":case "topCut":case "topPaste":
        a = reactdomcjsreactdomproductionmin__md;}a || reactdomcjsreactdomproductionmin__xn("86", e);var i = a.getPooled(o, t, n, r);return reactdomcjsreactdomproductionmin__bp.accumulateTwoPhaseDispatches(i), i;
  } },
    reactdomcjsreactdomproductionmin__Ud = reactdomcjsreactdomproductionmin__Rd;reactdomcjsreactdomproductionmin__Zr.setHandleTopLevel(reactdomcjsreactdomproductionmin__To.handleTopLevel), reactdomcjsreactdomproductionmin__io.injection.injectEventPluginOrder(reactdomcjsreactdomproductionmin__Qp), reactdomcjsreactdomproductionmin__Ar.injection.injectComponentTree(reactdomcjsreactdomproductionmin__ar), reactdomcjsreactdomproductionmin__io.injection.injectEventPluginsByName({ SimpleEventPlugin: reactdomcjsreactdomproductionmin__Ud, EnterLeaveEventPlugin: reactdomcjsreactdomproductionmin__rd, ChangeEventPlugin: reactdomcjsreactdomproductionmin__Yp, SelectEventPlugin: reactdomcjsreactdomproductionmin__fd, BeforeInputEventPlugin: reactdomcjsreactdomproductionmin__Wp });var reactdomcjsreactdomproductionmin__Hd = { Properties: { "aria-current": 0, "aria-details": 0, "aria-disabled": 0, "aria-hidden": 0, "aria-invalid": 0, "aria-keyshortcuts": 0, "aria-label": 0, "aria-roledescription": 0, "aria-autocomplete": 0, "aria-checked": 0, "aria-expanded": 0, "aria-haspopup": 0, "aria-level": 0, "aria-modal": 0, "aria-multiline": 0, "aria-multiselectable": 0, "aria-orientation": 0, "aria-placeholder": 0, "aria-pressed": 0, "aria-readonly": 0, "aria-required": 0, "aria-selected": 0, "aria-sort": 0, "aria-valuemax": 0, "aria-valuemin": 0, "aria-valuenow": 0, "aria-valuetext": 0, "aria-atomic": 0, "aria-busy": 0, "aria-live": 0, "aria-relevant": 0, "aria-dropeffect": 0, "aria-grabbed": 0, "aria-activedescendant": 0, "aria-colcount": 0, "aria-colindex": 0, "aria-colspan": 0, "aria-controls": 0, "aria-describedby": 0, "aria-errormessage": 0, "aria-flowto": 0, "aria-labelledby": 0, "aria-owns": 0, "aria-posinset": 0, "aria-rowcount": 0, "aria-rowindex": 0, "aria-rowspan": 0, "aria-setsize": 0 }, DOMAttributeNames: {}, DOMPropertyNames: {} },
    reactdomcjsreactdomproductionmin__Ld = reactdomcjsreactdomproductionmin__Hd,
    reactdomcjsreactdomproductionmin__Wd = reactdomcjsreactdomproductionmin__jn.injection.MUST_USE_PROPERTY,
    reactdomcjsreactdomproductionmin__Bd = reactdomcjsreactdomproductionmin__jn.injection.HAS_BOOLEAN_VALUE,
    reactdomcjsreactdomproductionmin__Vd = reactdomcjsreactdomproductionmin__jn.injection.HAS_NUMERIC_VALUE,
    reactdomcjsreactdomproductionmin__jd = reactdomcjsreactdomproductionmin__jn.injection.HAS_POSITIVE_NUMERIC_VALUE,
    reactdomcjsreactdomproductionmin__zd = reactdomcjsreactdomproductionmin__jn.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
    reactdomcjsreactdomproductionmin__Kd = { isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + reactdomcjsreactdomproductionmin__jn.ATTRIBUTE_NAME_CHAR + "]*$")), Properties: { accept: 0, acceptCharset: 0, accessKey: 0, action: 0, allowFullScreen: reactdomcjsreactdomproductionmin__Bd, allowTransparency: 0, alt: 0, as: 0, async: reactdomcjsreactdomproductionmin__Bd, autoComplete: 0, autoPlay: reactdomcjsreactdomproductionmin__Bd, capture: reactdomcjsreactdomproductionmin__Bd, cellPadding: 0, cellSpacing: 0, charSet: 0, challenge: 0, checked: reactdomcjsreactdomproductionmin__Wd | reactdomcjsreactdomproductionmin__Bd, cite: 0, classID: 0, className: 0, cols: reactdomcjsreactdomproductionmin__jd, colSpan: 0, content: 0, contentEditable: 0, contextMenu: 0, controls: reactdomcjsreactdomproductionmin__Bd, controlsList: 0, coords: 0, crossOrigin: 0, data: 0, dateTime: 0, default: reactdomcjsreactdomproductionmin__Bd, defer: reactdomcjsreactdomproductionmin__Bd, dir: 0, disabled: reactdomcjsreactdomproductionmin__Bd, download: reactdomcjsreactdomproductionmin__zd, draggable: 0, encType: 0, form: 0, formAction: 0, formEncType: 0, formMethod: 0, formNoValidate: reactdomcjsreactdomproductionmin__Bd, formTarget: 0, frameBorder: 0, headers: 0, height: 0, hidden: reactdomcjsreactdomproductionmin__Bd, high: 0, href: 0, hrefLang: 0, htmlFor: 0, httpEquiv: 0, id: 0, inputMode: 0, integrity: 0, is: 0, keyParams: 0, keyType: 0, kind: 0, label: 0, lang: 0, list: 0, loop: reactdomcjsreactdomproductionmin__Bd, low: 0, manifest: 0, marginHeight: 0, marginWidth: 0, max: 0, maxLength: 0, media: 0, mediaGroup: 0, method: 0, min: 0, minLength: 0, multiple: reactdomcjsreactdomproductionmin__Wd | reactdomcjsreactdomproductionmin__Bd, muted: reactdomcjsreactdomproductionmin__Wd | reactdomcjsreactdomproductionmin__Bd, name: 0, nonce: 0, noValidate: reactdomcjsreactdomproductionmin__Bd, open: reactdomcjsreactdomproductionmin__Bd, optimum: 0, pattern: 0, placeholder: 0, playsInline: reactdomcjsreactdomproductionmin__Bd, poster: 0, preload: 0, profile: 0, radioGroup: 0, readOnly: reactdomcjsreactdomproductionmin__Bd, referrerPolicy: 0, rel: 0, required: reactdomcjsreactdomproductionmin__Bd, reversed: reactdomcjsreactdomproductionmin__Bd, role: 0, rows: reactdomcjsreactdomproductionmin__jd, rowSpan: reactdomcjsreactdomproductionmin__Vd, sandbox: 0, scope: 0, scoped: reactdomcjsreactdomproductionmin__Bd, scrolling: 0, seamless: reactdomcjsreactdomproductionmin__Bd, selected: reactdomcjsreactdomproductionmin__Wd | reactdomcjsreactdomproductionmin__Bd, shape: 0, size: reactdomcjsreactdomproductionmin__jd, sizes: 0, slot: 0, span: reactdomcjsreactdomproductionmin__jd, spellCheck: 0, src: 0, srcDoc: 0, srcLang: 0, srcSet: 0, start: reactdomcjsreactdomproductionmin__Vd, step: 0, style: 0, summary: 0, tabIndex: 0, target: 0, title: 0, type: 0, useMap: 0, value: 0, width: 0, wmode: 0, wrap: 0, about: 0, datatype: 0, inlist: 0, prefix: 0, property: 0, resource: 0, typeof: 0, vocab: 0, autoCapitalize: 0, autoCorrect: 0, autoSave: 0, color: 0, itemProp: 0, itemScope: reactdomcjsreactdomproductionmin__Bd, itemType: 0, itemID: 0, itemRef: 0, results: 0, security: 0, unselectable: 0 }, DOMAttributeNames: { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" }, DOMPropertyNames: {}, DOMMutationMethods: { value: function (e, t) {
      if (null == t) return e.removeAttribute("value");"number" !== e.type || !1 === e.hasAttribute("value") ? e.setAttribute("value", "" + t) : e.validity && !e.validity.badInput && e.ownerDocument.activeElement !== e && e.setAttribute("value", "" + t);
    } } },
    reactdomcjsreactdomproductionmin__Yd = reactdomcjsreactdomproductionmin__Kd,
    reactdomcjsreactdomproductionmin__qd = { xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace" },
    reactdomcjsreactdomproductionmin__Qd = { accentHeight: "accent-height", accumulate: 0, additive: 0, alignmentBaseline: "alignment-baseline", allowReorder: "allowReorder", alphabetic: 0, amplitude: 0, arabicForm: "arabic-form", ascent: 0, attributeName: "attributeName", attributeType: "attributeType", autoReverse: "autoReverse", azimuth: 0, baseFrequency: "baseFrequency", baseProfile: "baseProfile", baselineShift: "baseline-shift", bbox: 0, begin: 0, bias: 0, by: 0, calcMode: "calcMode", capHeight: "cap-height", clip: 0, clipPath: "clip-path", clipRule: "clip-rule", clipPathUnits: "clipPathUnits", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", contentScriptType: "contentScriptType", contentStyleType: "contentStyleType", cursor: 0, cx: 0, cy: 0, d: 0, decelerate: 0, descent: 0, diffuseConstant: "diffuseConstant", direction: 0, display: 0, divisor: 0, dominantBaseline: "dominant-baseline", dur: 0, dx: 0, dy: 0, edgeMode: "edgeMode", elevation: 0, enableBackground: "enable-background", end: 0, exponent: 0, externalResourcesRequired: "externalResourcesRequired", fill: 0, fillOpacity: "fill-opacity", fillRule: "fill-rule", filter: 0, filterRes: "filterRes", filterUnits: "filterUnits", floodColor: "flood-color", floodOpacity: "flood-opacity", focusable: 0, fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", format: 0, from: 0, fx: 0, fy: 0, g1: 0, g2: 0, glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", glyphRef: "glyphRef", gradientTransform: "gradientTransform", gradientUnits: "gradientUnits", hanging: 0, horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", ideographic: 0, imageRendering: "image-rendering", in: 0, in2: 0, intercept: 0, k: 0, k1: 0, k2: 0, k3: 0, k4: 0, kernelMatrix: "kernelMatrix", kernelUnitLength: "kernelUnitLength", kerning: 0, keyPoints: "keyPoints", keySplines: "keySplines", keyTimes: "keyTimes", lengthAdjust: "lengthAdjust", letterSpacing: "letter-spacing", lightingColor: "lighting-color", limitingConeAngle: "limitingConeAngle", local: 0, markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", markerHeight: "markerHeight", markerUnits: "markerUnits", markerWidth: "markerWidth", mask: 0, maskContentUnits: "maskContentUnits", maskUnits: "maskUnits", mathematical: 0, mode: 0, numOctaves: "numOctaves", offset: 0, opacity: 0, operator: 0, order: 0, orient: 0, orientation: 0, origin: 0, overflow: 0, overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pathLength: "pathLength", patternContentUnits: "patternContentUnits", patternTransform: "patternTransform", patternUnits: "patternUnits", pointerEvents: "pointer-events", points: 0, pointsAtX: "pointsAtX", pointsAtY: "pointsAtY", pointsAtZ: "pointsAtZ", preserveAlpha: "preserveAlpha", preserveAspectRatio: "preserveAspectRatio", primitiveUnits: "primitiveUnits", r: 0, radius: 0, refX: "refX", refY: "refY", renderingIntent: "rendering-intent", repeatCount: "repeatCount", repeatDur: "repeatDur", requiredExtensions: "requiredExtensions", requiredFeatures: "requiredFeatures", restart: 0, result: 0, rotate: 0, rx: 0, ry: 0, scale: 0, seed: 0, shapeRendering: "shape-rendering", slope: 0, spacing: 0, specularConstant: "specularConstant", specularExponent: "specularExponent", speed: 0, spreadMethod: "spreadMethod", startOffset: "startOffset", stdDeviation: "stdDeviation", stemh: 0, stemv: 0, stitchTiles: "stitchTiles", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", string: 0, stroke: 0, strokeDasharray: "stroke-dasharray", strokeDashoffset: "stroke-dashoffset", strokeLinecap: "stroke-linecap", strokeLinejoin: "stroke-linejoin", strokeMiterlimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", surfaceScale: "surfaceScale", systemLanguage: "systemLanguage", tableValues: "tableValues", targetX: "targetX", targetY: "targetY", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", textLength: "textLength", to: 0, transform: 0, u1: 0, u2: 0, underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicode: 0, unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", values: 0, vectorEffect: "vector-effect", version: 0, vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", viewBox: "viewBox", viewTarget: "viewTarget", visibility: 0, widths: 0, wordSpacing: "word-spacing", writingMode: "writing-mode", x: 0, xHeight: "x-height", x1: 0, x2: 0, xChannelSelector: "xChannelSelector", xlinkActuate: "xlink:actuate", xlinkArcrole: "xlink:arcrole", xlinkHref: "xlink:href", xlinkRole: "xlink:role", xlinkShow: "xlink:show", xlinkTitle: "xlink:title", xlinkType: "xlink:type", xmlBase: "xml:base", xmlns: 0, xmlnsXlink: "xmlns:xlink", xmlLang: "xml:lang", xmlSpace: "xml:space", y: 0, y1: 0, y2: 0, yChannelSelector: "yChannelSelector", z: 0, zoomAndPan: "zoomAndPan" },
    reactdomcjsreactdomproductionmin__$d = { Properties: {}, DOMAttributeNamespaces: { xlinkActuate: reactdomcjsreactdomproductionmin__qd.xlink, xlinkArcrole: reactdomcjsreactdomproductionmin__qd.xlink, xlinkHref: reactdomcjsreactdomproductionmin__qd.xlink, xlinkRole: reactdomcjsreactdomproductionmin__qd.xlink, xlinkShow: reactdomcjsreactdomproductionmin__qd.xlink, xlinkTitle: reactdomcjsreactdomproductionmin__qd.xlink, xlinkType: reactdomcjsreactdomproductionmin__qd.xlink, xmlBase: reactdomcjsreactdomproductionmin__qd.xml, xmlLang: reactdomcjsreactdomproductionmin__qd.xml, xmlSpace: reactdomcjsreactdomproductionmin__qd.xml }, DOMAttributeNames: {} };Object.keys(reactdomcjsreactdomproductionmin__Qd).forEach(function (e) {
  reactdomcjsreactdomproductionmin__$d.Properties[e] = 0, reactdomcjsreactdomproductionmin__Qd[e] && (reactdomcjsreactdomproductionmin__$d.DOMAttributeNames[e] = reactdomcjsreactdomproductionmin__Qd[e]);
});var reactdomcjsreactdomproductionmin__Xd = reactdomcjsreactdomproductionmin__$d;reactdomcjsreactdomproductionmin__jn.injection.injectDOMPropertyConfig(reactdomcjsreactdomproductionmin__Ld), reactdomcjsreactdomproductionmin__jn.injection.injectDOMPropertyConfig(reactdomcjsreactdomproductionmin__Yd), reactdomcjsreactdomproductionmin__jn.injection.injectDOMPropertyConfig(reactdomcjsreactdomproductionmin__Xd);var reactdomcjsreactdomproductionmin__Gd = reactdomcjsreactdomproductionmin__yn.isValidElement,
    reactdomcjsreactdomproductionmin__Zd = reactdomcjsreactdomproductionmin__Us.injectInternals,
    reactdomcjsreactdomproductionmin__Jd = reactdomcjsreactdomproductionmin__Qn.ELEMENT_NODE,
    reactdomcjsreactdomproductionmin__ef = reactdomcjsreactdomproductionmin__Qn.TEXT_NODE,
    reactdomcjsreactdomproductionmin__tf = reactdomcjsreactdomproductionmin__Qn.COMMENT_NODE,
    reactdomcjsreactdomproductionmin__nf = reactdomcjsreactdomproductionmin__Qn.DOCUMENT_NODE,
    reactdomcjsreactdomproductionmin__rf = reactdomcjsreactdomproductionmin__Qn.DOCUMENT_FRAGMENT_NODE,
    reactdomcjsreactdomproductionmin__of = reactdomcjsreactdomproductionmin__jn.ROOT_ATTRIBUTE_NAME,
    reactdomcjsreactdomproductionmin__af = reactdomcjsreactdomproductionmin__La.createElement,
    reactdomcjsreactdomproductionmin__lf = reactdomcjsreactdomproductionmin__La.getChildNamespace,
    reactdomcjsreactdomproductionmin__uf = reactdomcjsreactdomproductionmin__La.setInitialProperties,
    reactdomcjsreactdomproductionmin__sf = reactdomcjsreactdomproductionmin__La.diffProperties,
    reactdomcjsreactdomproductionmin__cf = reactdomcjsreactdomproductionmin__La.updateProperties,
    reactdomcjsreactdomproductionmin__pf = reactdomcjsreactdomproductionmin__La.diffHydratedProperties,
    reactdomcjsreactdomproductionmin__df = reactdomcjsreactdomproductionmin__La.diffHydratedText,
    reactdomcjsreactdomproductionmin__ff = reactdomcjsreactdomproductionmin__La.warnForDeletedHydratableElement,
    reactdomcjsreactdomproductionmin__hf = reactdomcjsreactdomproductionmin__La.warnForDeletedHydratableText,
    reactdomcjsreactdomproductionmin__gf = reactdomcjsreactdomproductionmin__La.warnForInsertedHydratedElement,
    reactdomcjsreactdomproductionmin__vf = reactdomcjsreactdomproductionmin__La.warnForInsertedHydratedText,
    reactdomcjsreactdomproductionmin__mf = reactdomcjsreactdomproductionmin__ar.precacheFiberNode,
    reactdomcjsreactdomproductionmin__yf = reactdomcjsreactdomproductionmin__ar.updateFiberProps;reactdomcjsreactdomproductionmin__Br.injection.injectFiberControlledHostComponent(reactdomcjsreactdomproductionmin__La), reactdomcjsreactdomproductionmin__hp._injectFiber(function (e) {
  return reactdomcjsreactdomproductionmin__Ef.findHostInstance(e);
});var reactdomcjsreactdomproductionmin__bf = null,
    reactdomcjsreactdomproductionmin__Cf = null,
    reactdomcjsreactdomproductionmin__Ef = reactdomcjsreactdomproductionmin__Jc({ getRootHostContext: function (e) {
    var t = void 0,
        n = void 0;if (e.nodeType === reactdomcjsreactdomproductionmin__nf) {
      t = "#document";var r = e.documentElement;n = r ? r.namespaceURI : reactdomcjsreactdomproductionmin__lf(null, "");
    } else {
      var o = e.nodeType === reactdomcjsreactdomproductionmin__tf ? e.parentNode : e,
          a = o.namespaceURI || null;t = o.tagName, n = reactdomcjsreactdomproductionmin__lf(a, t);
    }return n;
  }, getChildHostContext: function (e, t) {
    return reactdomcjsreactdomproductionmin__lf(e, t);
  }, getPublicInstance: function (e) {
    return e;
  }, prepareForCommit: function () {
    reactdomcjsreactdomproductionmin__bf = reactdomcjsreactdomproductionmin__To.isEnabled(), reactdomcjsreactdomproductionmin__Cf = reactdomcjsreactdomproductionmin__up.getSelectionInformation(), reactdomcjsreactdomproductionmin__To.setEnabled(!1);
  }, resetAfterCommit: function () {
    reactdomcjsreactdomproductionmin__up.restoreSelection(reactdomcjsreactdomproductionmin__Cf), reactdomcjsreactdomproductionmin__Cf = null, reactdomcjsreactdomproductionmin__To.setEnabled(reactdomcjsreactdomproductionmin__bf), reactdomcjsreactdomproductionmin__bf = null;
  }, createInstance: function (e, t, n, r, o) {
    var a = void 0;a = r;var i = reactdomcjsreactdomproductionmin__af(e, t, n, a);return reactdomcjsreactdomproductionmin__mf(o, i), reactdomcjsreactdomproductionmin__yf(i, t), i;
  }, appendInitialChild: function (e, t) {
    e.appendChild(t);
  }, finalizeInitialChildren: function (e, t, n, r) {
    return reactdomcjsreactdomproductionmin__uf(e, t, n, r), reactdomcjsreactdomproductionmin__dn(t, n);
  }, prepareUpdate: function (e, t, n, r, o, a) {
    return reactdomcjsreactdomproductionmin__sf(e, t, n, r, o);
  }, commitMount: function (e, t, n, r) {
    e.focus();
  }, commitUpdate: function (e, t, n, r, o, a) {
    reactdomcjsreactdomproductionmin__yf(e, o), reactdomcjsreactdomproductionmin__cf(e, t, n, r, o);
  }, shouldSetTextContent: function (e, t) {
    return "textarea" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && "string" == typeof t.dangerouslySetInnerHTML.__html;
  }, resetTextContent: function (e) {
    e.textContent = "";
  }, shouldDeprioritizeSubtree: function (e, t) {
    return !!t.hidden;
  }, createTextInstance: function (e, t, n, r) {
    var o = document.createTextNode(e);return reactdomcjsreactdomproductionmin__mf(r, o), o;
  }, commitTextUpdate: function (e, t, n) {
    e.nodeValue = n;
  }, appendChild: function (e, t) {
    e.appendChild(t);
  }, appendChildToContainer: function (e, t) {
    e.nodeType === reactdomcjsreactdomproductionmin__tf ? e.parentNode.insertBefore(t, e) : e.appendChild(t);
  }, insertBefore: function (e, t, n) {
    e.insertBefore(t, n);
  }, insertInContainerBefore: function (e, t, n) {
    e.nodeType === reactdomcjsreactdomproductionmin__tf ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }, removeChild: function (e, t) {
    e.removeChild(t);
  }, removeChildFromContainer: function (e, t) {
    e.nodeType === reactdomcjsreactdomproductionmin__tf ? e.parentNode.removeChild(t) : e.removeChild(t);
  }, canHydrateInstance: function (e, t, n) {
    return e.nodeType === reactdomcjsreactdomproductionmin__Jd && t === e.nodeName.toLowerCase();
  }, canHydrateTextInstance: function (e, t) {
    return "" !== t && e.nodeType === reactdomcjsreactdomproductionmin__ef;
  }, getNextHydratableSibling: function (e) {
    for (var t = e.nextSibling; t && t.nodeType !== reactdomcjsreactdomproductionmin__Jd && t.nodeType !== reactdomcjsreactdomproductionmin__ef;) t = t.nextSibling;return t;
  }, getFirstHydratableChild: function (e) {
    for (var t = e.firstChild; t && t.nodeType !== reactdomcjsreactdomproductionmin__Jd && t.nodeType !== reactdomcjsreactdomproductionmin__ef;) t = t.nextSibling;return t;
  }, hydrateInstance: function (e, t, n, r, o) {
    return reactdomcjsreactdomproductionmin__mf(o, e), reactdomcjsreactdomproductionmin__yf(e, n), reactdomcjsreactdomproductionmin__pf(e, t, n, r);
  }, hydrateTextInstance: function (e, t, n) {
    return reactdomcjsreactdomproductionmin__mf(n, e), reactdomcjsreactdomproductionmin__df(e, t);
  }, didNotHydrateInstance: function (e, t) {
    1 === t.nodeType ? reactdomcjsreactdomproductionmin__ff(e, t) : reactdomcjsreactdomproductionmin__hf(e, t);
  }, didNotFindHydratableInstance: function (e, t, n) {
    reactdomcjsreactdomproductionmin__gf(e, t, n);
  }, didNotFindHydratableTextInstance: function (e, t) {
    reactdomcjsreactdomproductionmin__vf(e, t);
  }, scheduleDeferredCallback: reactdomcjsreactdomproductionmin__Ja.rIC, useSyncScheduling: !reactdomcjsreactdomproductionmin__So.fiberAsyncScheduling });reactdomcjsreactdomproductionmin__qr.injection.injectFiberBatchedUpdates(reactdomcjsreactdomproductionmin__Ef.batchedUpdates);var reactdomcjsreactdomproductionmin__kf = { hydrate: function (e, t, n) {
    return reactdomcjsreactdomproductionmin__fn(null, e, t, !0, n);
  }, render: function (e, t, n) {
    return reactdomcjsreactdomproductionmin__wo.disableNewFiberFeatures && (reactdomcjsreactdomproductionmin__Gd(e) || ("string" == typeof e ? reactdomcjsreactdomproductionmin__vn(!1, "ReactDOM.render(): Invalid component element. Instead of passing a string like 'div', pass React.createElement('div') or <div />.") : "function" == typeof e ? reactdomcjsreactdomproductionmin__vn(!1, "ReactDOM.render(): Invalid component element. Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.") : null != e && void 0 !== e.props ? reactdomcjsreactdomproductionmin__vn(!1, "ReactDOM.render(): Invalid component element. This may be caused by unintentionally loading two independent copies of React.") : reactdomcjsreactdomproductionmin__vn(!1, "ReactDOM.render(): Invalid component element."))), reactdomcjsreactdomproductionmin__fn(null, e, t, !1, n);
  }, unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
    return null != e && reactdomcjsreactdomproductionmin__lr.has(e) || reactdomcjsreactdomproductionmin__xn("38"), reactdomcjsreactdomproductionmin__fn(e, t, n, !1, r);
  }, unmountComponentAtNode: function (e) {
    return reactdomcjsreactdomproductionmin__sn(e) || reactdomcjsreactdomproductionmin__xn("40"), !!e._reactRootContainer && (reactdomcjsreactdomproductionmin__Ef.unbatchedUpdates(function () {
      reactdomcjsreactdomproductionmin__fn(null, null, e, !1, function () {
        e._reactRootContainer = null;
      });
    }), !0);
  }, findDOMNode: reactdomcjsreactdomproductionmin__hp, unstable_createPortal: function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;return reactdomcjsreactdomproductionmin__Yl.createPortal(e, t, null, n);
  }, unstable_batchedUpdates: reactdomcjsreactdomproductionmin__qr.batchedUpdates, unstable_deferredUpdates: reactdomcjsreactdomproductionmin__Ef.deferredUpdates, flushSync: reactdomcjsreactdomproductionmin__Ef.flushSync, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { EventPluginHub: reactdomcjsreactdomproductionmin__io, EventPluginRegistry: reactdomcjsreactdomproductionmin___n, EventPropagators: reactdomcjsreactdomproductionmin__bp, ReactControlledComponent: reactdomcjsreactdomproductionmin__Br, ReactDOMComponentTree: reactdomcjsreactdomproductionmin__ar, ReactDOMEventListener: reactdomcjsreactdomproductionmin__Zr } },
    reactdomcjsreactdomproductionmin__Pf = reactdomcjsreactdomproductionmin__Zd({ findFiberByHostInstance: reactdomcjsreactdomproductionmin__ar.getClosestInstanceFromNode, findHostInstanceByFiber: reactdomcjsreactdomproductionmin__Ef.findHostInstance, bundleType: 0, version: reactdomcjsreactdomproductionmin__sp }),
    reactdomcjsreactdomproductionmin__Tf = reactdomcjsreactdomproductionmin__kf;$m['react-dom/cjs/react-dom.production.min'].exports = reactdomcjsreactdomproductionmin__Tf;
/*≠≠ node_modules/react-dom/cjs/react-dom.production.min.js ≠≠*/


/*== node_modules/react-dom/index.js ==*/
$m['react-dom'] = { exports: {} };

if ('development' === 'production') {
  $m['react-dom'].exports = $m['react-dom/cjs/react-dom.production.min'].exports;
} else {
  $m['react-dom'].exports = $m['react-dom/cjs/react-dom.development'].exports;
}
/*≠≠ node_modules/react-dom/index.js ≠≠*/


/*== test/fixtures/test-client.js ==*/
$m['test/fixtures/test-client'] = { exports: {} };

const testfixturestestclient__ReactDom = $m['react-dom'].exports;
const testfixturestestclient__testComponent = $m['test/fixtures/testComponent'].exports;

const testfixturestestclient__comp = testfixturestestclient__testComponent.create();

testfixturestestclient__ReactDom.render(testfixturestestclient__comp({ label: 'click here!' }), document.getElementById('container'));
/*≠≠ test/fixtures/test-client.js ≠≠*/
})()