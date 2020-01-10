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
    global.numberInputConfig = mod.exports;
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

  module.exports = {
    context: {
      featureFlags: featureFlags,
      prefix: prefix
    },
    variants: [{
      name: 'default',
      label: 'Number Input',
      notes: "\n        Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value.\n        The Number Input component can be passed a starting value, a min, a max, and the step.\n      "
    }, {
      name: 'light',
      label: 'Number Input (Light)',
      context: {
        light: true
      }
    }]
  };
});