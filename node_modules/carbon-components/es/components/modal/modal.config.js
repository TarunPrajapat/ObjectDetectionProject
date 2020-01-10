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

var _require2 = require('../../globals/js/feature-flags'),
    componentsX = _require2.componentsX;

module.exports = {
  context: {
    featureFlags: featureFlags,
    prefix: prefix
  },
  variants: [{
    name: 'default',
    label: 'Transactional Modal',
    notes: "\n        Modals communicate information via a secondary window and allow the user to maintain the context of a particular task.\n      ",
    context: {
      idSuffix: Math.random().toString(36).substr(2),
      hasFooter: true,
      classPrimaryButton: "".concat(prefix, "--btn--primary"),
      classCloseButton: "".concat(prefix, "--btn--secondary")
    }
  }, {
    name: 'nofooter',
    label: 'Passive Modal',
    notes: 'Passive Modals are modals without footers.',
    context: {
      idSuffix: Math.random().toString(36).substr(2),
      hasFooter: false,
      classPrimaryButton: "".concat(prefix, "--btn--primary"),
      classCloseButton: "".concat(prefix, "--btn--secondary")
    }
  }, {
    name: 'danger',
    label: 'Danger Modal',
    context: {
      idSuffix: Math.random().toString(36).substr(2),
      hasFooter: true,
      labelPrimaryButton: 'Danger',
      classModalSupplemental: "".concat(prefix, "--modal--danger"),
      classPrimaryButton: "".concat(prefix, "--btn--danger--primary"),
      classCloseButton: componentsX ? "".concat(prefix, "--btn--secondary") : "".concat(prefix, "--btn--tertiary")
    }
  }, {
    name: 'input',
    label: 'Input Modal',
    context: {
      idSuffix: Math.random().toString(36).substr(2),
      hasInput: true,
      hasFooter: true,
      classPrimaryButton: "".concat(prefix, "--btn--primary"),
      classCloseButton: "".concat(prefix, "--btn--secondary")
    }
  }]
};