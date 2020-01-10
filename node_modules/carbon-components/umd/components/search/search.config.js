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
    global.searchConfig = mod.exports;
  }
})(this, function () {
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */
  'use strict';

  var _require = require('../../globals/js/feature-flags'),
      componentsX = _require.componentsX;

  var _require2 = require('../../globals/js/settings'),
      prefix = _require2.prefix;

  module.exports = {
    default: 'large',
    context: {
      featureFlags: {
        componentsX: componentsX
      },
      prefix: prefix
    },
    variants: [{
      name: 'large',
      label: 'Normal search',
      notes: "\n        Search enables users to specify a word or a phrase to find particular relevant pieces of content\n        without the use of navigation. Search can be used as the primary means of discovering content,\n        or as a filter to aid the user in finding content.\n      ",
      context: {
        suffix: 'lg',
        componentsX: componentsX
      }
    }, {
      name: 'extra large',
      label: 'Extra large search',
      notes: "\n          Search enables users to specify a word or a phrase to find particular relevant pieces of content\n          without the use of navigation. Search can be used as the primary means of discovering content,\n          or as a filter to aid the user in finding content.\n        ",
      context: {
        suffix: 'xl',
        componentsX: componentsX
      }
    }, {
      name: 'small',
      label: 'Small search',
      notes: "\n        Search enables users to specify a word or a phrase to find particular relevant pieces of content\n        without the use of navigation. Search can be used as the primary means of discovering content,\n        or as a filter to aid the user in finding content. With the small version, the search field will be\n        more compact.\n      ",
      context: {
        suffix: 'sm',
        componentsX: componentsX
      }
    }, {
      name: 'large-light',
      label: 'Normal search (Light)',
      notes: "\n        Search enables users to specify a word or a phrase to find particular relevant pieces of content\n        without the use of navigation. Search can be used as the primary means of discovering content,\n        or as a filter to aid the user in finding content.\n      ",
      context: {
        suffix: 'lg',
        light: true,
        componentsX: componentsX
      }
    }, {
      name: 'small-light',
      label: 'Small search (Light)',
      notes: "\n        Search enables users to specify a word or a phrase to find particular relevant pieces of content\n        without the use of navigation. Search can be used as the primary means of discovering content,\n        or as a filter to aid the user in finding content. With the small version, the search field will be\n        more compact.\n      ",
      context: {
        suffix: 'sm',
        light: true,
        componentsX: componentsX
      }
    }]
  };
});