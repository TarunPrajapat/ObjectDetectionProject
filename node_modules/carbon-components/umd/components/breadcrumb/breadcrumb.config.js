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
    global.breadcrumbConfig = mod.exports;
  }
})(this, function () {
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */
  'use strict';

  var _require = require('../../globals/js/settings'),
      prefix = _require.prefix;

  module.exports = {
    context: {
      prefix: prefix
    },
    variants: [{
      name: 'default',
      label: 'Breadcrumb',
      notes: 'Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.',
      context: {
        items: [{
          label: 'Breadcrumb 1'
        }, {
          label: 'Breadcrumb 2'
        }, {
          label: 'Breadcrumb 3'
        }]
      }
    }]
  };
});