/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var featureFlags = require('../../globals/js/feature-flags');

var _require = require('../../globals/js/settings'),
    prefix = _require.prefix;

var items = [{
  label: 'First section',
  target: '.demo--panel--opt-1',
  selected: true
}, {
  label: 'Second section',
  target: '.demo--panel--opt-2'
}, {
  label: 'Third section',
  target: '.demo--panel--opt-3'
}];
module.exports = {
  context: {
    featureFlags: featureFlags,
    prefix: prefix
  },
  variants: [{
    name: 'default',
    label: 'Content Switcher',
    notes: "\n        The Content Switcher component manipulates the content shown following an exclusive or \u201Ceither/or\u201D pattern.\n        Create Switch components for each section in the content switcher.\n      ",
    context: {
      items: items
    }
  }, {
    name: 'with-icon',
    label: 'With icon',
    context: {
      hasIcon: true,
      items: items
    }
  }, {
    name: 'disabled',
    label: 'Disabled',
    context: {
      items: items.map(function (item) {
        return _objectSpread({}, item, {
          disabled: true
        });
      })
    }
  }]
};