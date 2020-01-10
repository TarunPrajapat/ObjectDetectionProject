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
    global.lightboxConfig = mod.exports;
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

  var _require2 = require('../../globals/js/feature-flags'),
      breakingChangesX = _require2.breakingChangesX;

  module.exports = {
    hidden: true,
    meta: {
      removed: breakingChangesX
    },
    context: {
      prefix: prefix
    },
    variants: [{
      name: 'default',
      label: 'Lightbox',
      context: {
        items: [{
          filmstripImageUrl: 'http://via.placeholder.com/256x144?text=/0',
          lightboxImageUrl: 'http://via.placeholder.com/1056x594?text=/0'
        }, {
          filmstripImageUrl: 'http://via.placeholder.com/256x144?text=1',
          lightboxImageUrl: 'http://via.placeholder.com/1056x594?text=1'
        }, {
          filmstripImageUrl: 'http://via.placeholder.com/256x144?text=2',
          lightboxImageUrl: 'http://via.placeholder.com/1056x594?text=2'
        }, {
          filmstripImageUrl: 'http://via.placeholder.com/256x144?text=3',
          lightboxImageUrl: 'http://via.placeholder.com/1056x594?text=3'
        }, {
          filmstripImageUrl: 'http://via.placeholder.com/256x144?text=4',
          lightboxImageUrl: 'http://via.placeholder.com/1056x594?text=4'
        }, {
          filmstripImageUrl: 'http://via.placeholder.com/256x144?text=5',
          lightboxImageUrl: 'http://via.placeholder.com/1056x594?text=5'
        }]
      }
    }]
  };
});