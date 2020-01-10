(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.comboBoxConfig = mod.exports;
  }
})(this, function () {
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */
  'use strict';

  var featureFlags = require('../../globals/js/feature-flags');

  var _require = require('../../globals/js/settings'),
      prefix = _require.prefix;

  var items = [{
    id: 'downshift-1-item-0',
    label: 'Option 1'
  }, {
    id: 'downshift-1-item-1',
    label: 'Option 2'
  }, {
    id: 'downshift-1-item-2',
    label: 'Option 3',
    selected: true
  }, {
    id: 'downshift-1-item-3',
    label: 'Option 4'
  }];
  module.exports = {
    context: {
      featureFlags: featureFlags,
      prefix: prefix
    },
    variants: [{
      name: 'default',
      label: 'Combo Box',
      context: {
        items: items
      }
    }, {
      name: 'disabled',
      label: 'Disabled',
      context: {
        disabled: true,
        items: items
      }
    }]
  };
});