/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var _require = require('../../globals/js/settings'),
    prefix = _require.prefix;

var items = [{
  title: 'Need Help?',
  label: 'Contact Bluemix Sales'
}, {
  title: 'Estimate Monthly Cost',
  label: 'Cost Calculator'
}];
module.exports = {
  meta: {
    useIframe: true
  },
  context: {
    prefix: prefix
  },
  variants: [{
    name: 'default',
    label: 'Footer',
    notes: "\n        Footer is used on configuration screens.\n      ",
    context: {
      items: items
    }
  }]
};