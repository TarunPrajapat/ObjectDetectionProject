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
    componentsX = _require2.componentsX;

var steps = [{
  state: 'complete',
  label: 'First step',
  optional: true,
  optionalLabel: 'Optional'
}, {
  state: 'current',
  label: 'Second Step',
  overflow: true,
  overflowLabel: 'Overflow Ex. 1'
}, {
  state: 'incomplete',
  label: 'Third Step',
  overflow: true,
  overflowLabel: 'Overflow Ex. 2 Multi Line'
}, {
  state: 'incomplete',
  label: 'Fourth step',
  invalid: true
}, {
  state: 'incomplete',
  label: 'Fifth step',
  disabled: true
}];
module.exports = {
  context: {
    prefix: prefix
  },
  variants: [{
    name: 'default',
    label: 'Progress Indicator',
    context: {
      steps: steps,
      componentsX: componentsX
    }
  }]
};