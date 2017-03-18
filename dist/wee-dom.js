(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _extend; });
/* unused harmony export $copy */
/* unused harmony export $equals */
/* unused harmony export $extend */
/* unused harmony export $isArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return $isFunction; });
/* unused harmony export $isNumber */
/* unused harmony export $isObject */
/* unused harmony export $isString */
/* unused harmony export $serialize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return $toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $type; });
/* unused harmony export $unserialize */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



/**
 * Compare two arrays for equality
 *
 * @private
 * @param {Array} a
 * @param {Array} b
 * @returns {boolean}
 */
var _arrEquals = function _arrEquals(a, b) {
	return a.length == b.length && a.every(function (el, i) {
		return _equals(el, b[i]);
	});
};

/**
 * Cast string to most applicable data type
 *
 * @protected
 * @param {*} val
 */
var _castString = function _castString(val) {
	if (typeof val == 'string') {
		try {
			val = val == 'true' ? true : val == 'false' ? false : val == 'null' ? null : parseInt(val).toString() == val ? parseInt(val) : /^(?:\{[\w\W]*}|\[[\w\W]*])$/.test(val) ? JSON.parse(val) : val;
		} catch (e) {}
	}

	return val;
};

/**
 * Clone value to a new instance
 *
 * @private
 * @param {*} val
 * @returns {*}
 */
var _copy = function _copy(val) {
	var type = $type(val);

	if (type == 'object') {
		val = _extend({}, val, true);
	} else if (type == 'array') {
		val = val.slice(0);
	}

	return val;
};

/**
 * Compare two values for equality
 *
 * @private
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
var _equals = function _equals(a, b) {
	if (a === b) {
		return true;
	}

	var aType = $type(a);

	if (aType != $type(b)) {
		return false;
	}

	if (aType == 'array') {
		return _arrEquals(a, b);
	}

	if (aType == 'object') {
		return _objEquals(a, b);
	}

	if (aType == 'date') {
		return +a == +b;
	}

	return false;
};

/**
 * Extend target object with source object(s)
 *
 * @private
 * @param {Object} target
 * @param {Object} object
 * @param {boolean} [deep=false]
 * @param {Array} [_set=[]]
 * @returns {Object}
 */
var _extend = function _extend(target, object, deep) {
	var _set = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	if (!object) {
		return target;
	}

	for (var key in object) {
		var src = object[key],
		    type = $type(src);

		if (deep && type == 'object') {
			var len = _set.length,
			    i = 0,
			    val = void 0;

			for (; i < len; i++) {
				if (_set[i] === src) {
					val = src;
					break;
				}
			}

			if (val) {
				target[key] = val;
			} else {
				_set.push(src);
				target[key] = _extend(target[key] || {}, src, deep, _set);
			}
		} else if (src !== undefined) {
			target[key] = type == 'array' ? src.slice(0) : src;
		}
	}

	return target;
};

/**
 * Compare two objects for equality
 *
 * @private
 * @param {Object} a
 * @param {Object} b
 * @returns {boolean}
 */
var _objEquals = function _objEquals(a, b) {
	var aKeys = Object.keys(a);

	return _arrEquals(aKeys.sort(), Object.keys(b).sort()) && aKeys.every(function (i) {
		return _equals(a[i], b[i]);
	});
};

/**
 * Clone value to a new instance
 *
 * @private
 * @param {*} val
 * @returns {*}
 */
var $copy = function $copy(val) {
	return _copy(val);
};

/**
 * Compare two values for strict equality
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
var $equals = function $equals(a, b) {
	return _equals(a, b);
};

/**
 * Extend target object with source object(s)
 *
 * @param {(boolean|Object)} deep - extend nested properties else target object
 * @param {Object} [obj] - target object
 * @param {...Object} [obj] - merged objects
 * @returns {Object}
 */
var $extend = function $extend(deep) {
	var bool = typeof deep == 'boolean',
	    args = __WEBPACK_IMPORTED_MODULE_0__variables__["a" /* _slice */].call(arguments).slice(bool ? 1 : 0),
	    target = args[0] || {};
	deep = bool ? deep : false;

	args.slice(1).forEach(function (source) {
		target = _extend(target, source, deep);
	});

	return target;
};

/**
 * Determine if value is an array
 *
 * @param {*} obj
 * @returns {boolean}
 */
var $isArray = function $isArray(obj) {
	return Array.isArray(obj);
};

/**
 * Determine if value is a function
 *
 * @param {*} obj
 * @returns {boolean}
 */
var $isFunction = function $isFunction(obj) {
	return $type(obj) == 'function';
};

/**
 * Determine if value is a number (optional loose match)
 *
 * @param {*} obj
 * @param {boolean} [strict]
 * @returns {boolean}
 */
var $isNumber = function $isNumber(obj) {
	var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	if (!strict) {
		if (!obj.match(/^\d*\.?\d*$/g)) {
			return false;
		}

		var value = parseFloat(obj);

		// If value = NaN, will not be equal
		return value === value;
	}

	return $type(obj) == 'number';
};

/**
 * Determine if value is an object
 *
 * @param {*} obj
 * @returns {boolean}
 */
var $isObject = function $isObject(obj) {
	return $type(obj) == 'object';
};

/**
 * Determine if value is a string
 *
 * @param {*} obj
 * @returns {boolean}
 */
var $isString = function $isString(obj) {
	return typeof obj == 'string';
};

/**
 * Serialize object
 *
 * @param {Object} obj
 * @returns {string} value
 */
var $serialize = function $serialize(obj) {
	var arr = [];

	Object.keys(obj || {}).forEach(function (key) {
		var val = obj[key];
		key = encodeURIComponent(key);

		if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) != 'object') {
			arr.push(key + '=' + encodeURIComponent(val));
		} else if (Array.isArray(val)) {
			val.forEach(function (el) {
				arr.push(key + '[]=' + encodeURIComponent(el));
			});
		}
	});

	return arr.length ? arr.join('&').replace(/%20/g, '+') : '';
};

/**
 * Cast value to array if it isn't one
 *
 * @param {*} val
 * @returns {Array} value
 */
var $toArray = function $toArray(val) {
	return val !== undefined ? Array.isArray(val) ? val : [val] : [];
};

/**
 * Determine the JavaScript type of an object
 *
 * @param {*} obj
 * @returns string
 */
var $type = function $type(obj) {
	return obj === undefined ? 'undefined' : Object.prototype.toString.call(obj).replace(/^\[object (.+)]$/, '$1').toLowerCase();
};

/**
 * Convert serialized string back into an object
 *
 * @param {string} str
 * @returns {Object} value
 */
var $unserialize = function $unserialize(str) {
	var obj = {};

	decodeURIComponent(str).replace(/^\?/, '').split('&').forEach(function (el) {
		var split = el.split('='),
		    key = split[0].replace('[]', ''),
		    val = (split[1] || '').replace(/\+/g, ' ') || '';

		if (obj.hasOwnProperty(key)) {
			obj[key] = $toArray(obj[key]);
			obj[key].push(_castString(val));
		} else {
			obj[key] = _castString(val);
		}
	});

	return obj;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(2);
/* unused harmony export _$ */
/* unused harmony export _doc */
/* unused harmony export _body */
/* unused harmony export _html */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slice; });
/* unused harmony export _win */
/* unused harmony export U */


var D = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* isBrowser */] ? window.document : {};
var scope = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* isBrowser */] ? window : global;

// Export globals for use in other modules
var _$ = scope.WeeAlias || '$';
var _doc = D;
var _body = D.body;
var _html = D.documentElement;
var _slice = [].slice;
var _win = scope;
var U = undefined;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBrowser; });
/* unused harmony export $env */
/* unused harmony export $envSecure */
/* unused harmony export $envReset */
/* unused harmony export $exec */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var isBrowser = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';

var env = void 0;

/**
 * Get value from function or directly
 *
 * @private
 * @param {*} val
 * @param {Object} [options]
 * @returns {*}
 */
var _val = function _val(val, options) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__types__["b" /* $isFunction */])(val) ? $exec(val, options) : val;
};

/**
 * Get current environment or set current environment against
 * specified object
 *
 * @param {Object} [rules]
 * @param {string} [fallback=local]
 * @returns {string} environment
 */
var $env = function $env(rules) {
	var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';

	if (rules) {
		var host = location.hostname;

		for (var rule in rules) {
			var val = rules[rule];

			if (val == host || _val(val, {
				args: host
			}) === true) {
				env = rule;
				break;
			}
		}

		if (!env) {
			env = fallback;
		}
	}

	return env || fallback;
};

/**
 * Determine if the current environment is SSL encrypted
 *
 * @returns {boolean} secure
 */
var $envSecure = function $envSecure() {
	return location.protocol == 'https:';
};

/**
 * Reset env variable - used for testing
 */
var $envReset = function $envReset() {
	env = undefined;
};

/**
 * Execute specified function or array of functions
 *
 * @param {Array|function} fn
 * @param {Object} [options]
 * @param {Array} [options.args]
 * @param {Object} [options.scope]
 * @returns {*} [response]
 */
var $exec = function $exec(fn) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var fns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__types__["c" /* $toArray */])(fn),
	    len = fns.length,
	    i = 0,
	    response = void 0;

	for (; i < len; i++) {
		var conf = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__types__["d" /* _extend */])({
			args: []
		}, options);

		response = fns[i].apply(conf.scope, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__types__["c" /* $toArray */])(conf.args));

		if (len === 1) {
			return response;
		}
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wee_core_lib_types__ = __webpack_require__(0);


var test = 'it worked';

console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_wee_core_lib_types__["a" /* $type */])([]));

/***/ })
/******/ ]);
});