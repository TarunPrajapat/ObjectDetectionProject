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
    global.uiShellConfig = mod.exports;
  }
})(this, function () {
  "use strict";

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
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */


  var _require = require('../../globals/js/settings'),
      prefix = _require.prefix;

  var navigationMenu = {
    state: {
      expanded: false
    },
    sections: [{
      items: [{
        type: 'link',
        title: 'Item link',
        href: 'javascript:void(0)',
        // href: '/component/ui-shell--platform-navigation-expanded',
        hasIcon: true
      }, {
        type: 'link',
        title: 'Item link',
        href: 'javascript:void(0)',
        // href: '/component/ui-shell--platform-navigation-expanded',
        hasIcon: true
      }]
    }, {
      items: [{
        type: 'link',
        title: 'Item link',
        href: 'javascript:void(0)',
        // href: '/component/ui-shell--platform-navigation-expanded',
        hasIcon: true,
        active: true
      }, {
        type: 'link',
        title: 'Item link',
        href: 'javascript:void(0)',
        // href: '/component/ui-shell--platform-navigation-expanded',
        hasIcon: true
      }, {
        type: 'link',
        title: 'Item link',
        href: 'javascript:void(0)',
        // href: '/component/ui-shell--platform-navigation-expanded',
        hasIcon: true
      }, {
        type: 'category',
        title: 'L1 category',
        hasIcon: true,
        links: [{
          title: 'Nested link',
          href: 'javascript:void(0)' // href: '/component/ui-shell--platform-navigation-expanded',

        }, {
          title: 'Nested link',
          href: 'javascript:void(0)',
          // href: '/component/ui-shell--platform-navigation-expanded',
          active: true
        }, {
          title: 'Nested link',
          href: 'javascript:void(0)' // href: '/component/ui-shell--platform-navigation-expanded',

        }]
      }]
    }],
    idSuffix: Math.random().toString(36).substr(2)
  };
  var switcher = {
    state: {
      expanded: false,
      showAll: false
    },
    links: [{
      href: 'javascript:void(0)',
      title: 'My Product'
    }, {
      href: 'javascript:void(0)',
      title: 'My Product 2'
    }],
    allLinks: [{
      href: 'javascript:void(0)',
      title: 'All Products'
    }, {
      href: 'javascript:void(0)',
      title: 'All Products'
    }, {
      href: 'javascript:void(0)',
      title: 'All Products'
    }, {
      href: 'javascript:void(0)',
      title: 'All Products'
    }, {
      href: 'javascript:void(0)',
      title: 'All Products'
    }],
    idSuffix: Math.random().toString(36).substr(2)
  };
  var header = {
    company: 'IBM',
    platform: '[Platform]',
    links: [{
      href: 'javascript:void(0)',
      title: 'L1 link 1'
    }, {
      href: 'javascript:void(0)',
      title: 'L1 link 2'
    }, {
      href: 'javascript:void(0)',
      title: 'L1 link 3'
    }, {
      href: 'javascript:void(0)',
      title: 'L1 link 4'
    }],
    actions: [{
      title: 'Action 1',
      switcher: switcher
    }, {
      title: 'Action 2',
      switcher: switcher
    }, {
      title: 'Action 3',
      switcher: switcher
    }, {
      title: 'Action 4',
      switcher: switcher
    }],
    navLinks: [{
      href: 'javascript:void(0)',
      title: 'L1 link 1'
    }, {
      href: 'javascript:void(0)',
      title: 'L1 link 2'
    }, {
      title: 'L1 link 3',
      state: {
        expanded: true
      },
      items: [{
        href: 'javascript:void(0)',
        title: 'Link 1'
      }, {
        href: 'javascript:void(0)',
        title: 'Link 2'
      }, {
        href: 'javascript:void(0)',
        title: 'Ipsum architecto voluptatem'
      }]
    }, {
      title: 'L1 link 4',
      state: {
        expanded: false
      },
      items: [{
        href: 'javascript:void(0)',
        title: 'Link 1'
      }, {
        href: 'javascript:void(0)',
        title: 'Link 2'
      }, {
        href: 'javascript:void(0)',
        title: 'Ipsum architecto voluptatem'
      }]
    }]
  };
  var sidenav = {
    state: {
      expanded: false,
      hasIcons: false,
      fixed: false
    },
    title: {
      text: '[L1 name here]'
    },
    links: [{
      category: 'Category label',
      links: createSidebarLinks(2)
    }, {
      category: 'Category label',
      links: createSidebarLinks(3, 1),
      active: true
    }, {
      category: 'Category label',
      links: createSidebarLinks(4)
    }]
  };
  module.exports = {
    preview: 'ui-shell-preview',
    meta: {
      xVersionOnly: true,
      linkOnly: true
    },
    context: {
      prefix: prefix,
      header: header,
      navigationMenu: navigationMenu,
      sidenav: sidenav,
      switcher: switcher,
      content: Array.from({
        length: 10
      })
    },
    variants: [{
      name: 'Side-nav fixed',
      context: {
        sidenav: {
          state: {
            hasIcons: false,
            expanded: true,
            fixed: true
          }
        }
      }
    }, {
      name: 'Navigation with no icons',
      context: {
        navigationMenu: {
          state: {
            expanded: true,
            category: true
          },
          sections: navigationMenu.sections.map(function (section) {
            return {
              items: section.items.map(function (item) {
                return _objectSpread({}, item, {
                  hasIcon: false
                });
              })
            };
          }),
          idSuffix: Math.random().toString(36).substr(2)
        }
      }
    }]
  };

  function createSidebarLinks(count, activeIndex) {
    return Array.from({
      length: count
    }, function (_, i) {
      var link = {
        title: 'Nested link',
        href: 'javascript:void(0)'
      };

      if (i === activeIndex) {
        link.active = true;
      }

      return link;
    });
  }
});