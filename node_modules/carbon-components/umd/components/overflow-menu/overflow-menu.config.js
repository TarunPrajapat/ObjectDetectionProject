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
    global.overflowMenuConfig = mod.exports;
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
    title: 'An example option that is really long to show what should be done to handle long text',
    label: 'An example option that is really long to show what should be done to handle long text',
    primaryFocus: true
  }, {
    label: 'Option 2'
  }, {
    label: 'Option 3'
  }, {
    label: 'Option 4'
  }, {
    label: 'Disabled',
    disabled: true
  }, {
    label: 'Danger option',
    danger: true
  }];
  module.exports = {
    context: {
      featureFlags: featureFlags,
      prefix: prefix
    },
    variants: [{
      name: 'default',
      label: 'Overflow Menu',
      notes: "\n        Overflow Menu is used when additional options are available to the user and there is a space constraint.\n        Create Overflow Menu Item components for each option on the menu.\n      ",
      context: {
        direction: 'bottom',
        items: items
      }
    }, {
      name: 'up',
      label: 'Up',
      context: {
        direction: 'top',
        items: items
      }
    }]
  };
});