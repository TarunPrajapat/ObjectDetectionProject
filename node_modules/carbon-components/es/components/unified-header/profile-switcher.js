function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


import warning from 'warning';
import { breakingChangesX } from '../../globals/js/feature-flags';
import settings from '../../globals/js/settings';
import mixin from '../../globals/js/misc/mixin';
import createComponent from '../../globals/js/mixins/create-component';
import initComponentBySearch from '../../globals/js/mixins/init-component-by-search';
import handles from '../../globals/js/mixins/handles';
import eventMatches from '../../globals/js/misc/event-matches';
import on from '../../globals/js/misc/on';
import removedComponent from '../removed-component';
var didWarnAboutDeprecation;

var ProfileSwitcher =
/*#__PURE__*/
function (_mixin) {
  _inherits(ProfileSwitcher, _mixin);
  /**
   * Profile Switcher.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a profile switcher.
   * @param {Object} [options] The component options
   * @param {string} [options.selectorProfileSwitcher] The data attribute selector for the profile switcher.
   * @param {string} [options.selectorAccount]
   *   The data attribute selector for the element containing the account name in the profile switcher.
   * @param {string} [options.selectorOrg]
   *   The data attribute selector for the element containing the organization name in the profile switcher.
   * @param {string} [options.selectorSpace]
   *   The data attribute selector for the element containing the space name in the profile switcher.
   * @param {string} [options.selectorAccountDropdown]
   *   The data attribute selector for the dropdown item containing the current account name.
   * @param {string} [options.selectorOrgDropdown]
   *   The data attribute selector for the dropdown item containing the current organization name.
   * @param {string} [options.selectorSpaceDropdown]
   *   The data attribute selector for the dropdown item containing the current space name.
   */


  function ProfileSwitcher(element, options) {
    var _this;

    _classCallCheck(this, ProfileSwitcher);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfileSwitcher).call(this, element, options));

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The `ProfileSwitcher` component in `carbon-components` has been deprecated. ' + 'It will be removed in the next major release.') : void 0;
      didWarnAboutDeprecation = true;
    }

    _this.manage(on(_this.element.ownerDocument, 'click', function (evt) {
      _this.handleDocumentClick(evt);
    }));

    _this.manage(on(_this.element, 'dropdown-beingselected', function (event) {
      if (event.target.querySelector(_this.options.selectorAccountDropdown) !== null) {
        var linkedIconNode = event.detail.item.querySelector(_this.options.classLinkedIcon);
        _this.element.isLinked = !!linkedIconNode;
        _this.element.linkedIcon = linkedIconNode && linkedIconNode.cloneNode(true);
        var linkedAccountNode = event.detail.item.querySelector(_this.options.selectorAccountSlLinked);
        _this.element.linkedAccount = linkedAccountNode && linkedAccountNode.cloneNode(true);
      }
    }));

    var toggleNode = _this.element.querySelector(_this.options.selectorToggle);

    if (toggleNode) {
      _this.manage(on(toggleNode, 'keydown', function (event) {
        _this.toggle(event);
      }));

      _this.manage(on(toggleNode, 'mouseenter', function (event) {
        _this.getLinkedData(event);

        _this.determineSwitcherValues(true);
      }));

      _this.manage(on(toggleNode, 'mouseleave', function (event) {
        _this.getLinkedData(event);

        _this.determineSwitcherValues(false);
      }));
    }

    _this.manage(on(_this.element.ownerDocument, 'keyup', function () {
      return _this.handleBlur();
    }));

    return _this;
  }
  /**
   * Opens and closes the menu.
   * @param {Event} event The event triggering this method.
   */


  _createClass(ProfileSwitcher, [{
    key: "toggle",
    value: function toggle(event) {
      var isOfSelf = this.element.contains(event.target);

      if (event.which === 13 || event.which === 32) {
        if (isOfSelf) {
          this.element.classList.toggle(this.options.classSwitcherOpen);
        } else if (!isOfSelf && this.element.classList.contains(this.options.classSwitcherOpen)) {
          this.element.classList.remove(this.options.classSwitcherOpen);
        }
      }
    }
  }, {
    key: "getLinkedData",
    value: function getLinkedData(event) {
      if (event.target.querySelector(this.options.selectorLinkedAccount) !== null) {
        if (event.target.querySelector(this.options.selectorLinkedAccount).textContent.length > 1) {
          this.element.isLinked = true;
        } else {
          this.element.isLinked = false;
        }
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      if (!this.element.contains(document.activeElement)) {
        this.element.classList.remove(this.options.classSwitcherOpen);
      }
    }
    /**
     * Handles click on the document.
     * Closes the profile switcherwhen document is clicked outside the left navigation or
     * the user clicks the profile switcher while it is open.
     * @param {Event} evt The event triggering this method.
     */

  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(evt) {
      var clickTarget = evt.target;
      var isOfSelf = this.element.contains(clickTarget);
      var isToggle = eventMatches(evt, this.options.selectorToggle);
      var isOpen = this.element.classList.contains(this.options.classSwitcherOpen);

      if (isOfSelf) {
        if (isToggle && isOpen) {
          this.element.classList.remove(this.options.classSwitcherOpen);
        } else if (isOpen) {
          this.determineSwitcherValues();
        } else {
          this.element.classList.add(this.options.classSwitcherOpen);
        }
      } else {
        this.element.classList.remove(this.options.classSwitcherOpen);
      }
    }
    /**
     * Handles logic to determine what text to display in profile switcher.
     * If the text is over 25 characters long, truncate and add ellipses.
     * Also adds logic to change the switcher width based on the width of the hovered
     * profile switcher
     * @param {boolean} isHovered boolean value passed by the event listener on bx--toggle.
     */

  }, {
    key: "determineSwitcherValues",
    value: function determineSwitcherValues(isHovered) {
      var linkedElement = this.element.querySelector(this.options.selectorLinkedAccount);
      var nameElement = this.element.querySelector(this.options.selectorAccount);
      var regionElement = this.element.querySelector(this.options.selectorRegion);
      var orgElement = this.element.querySelector(this.options.selectorOrg);
      var spaceElement = this.element.querySelector(this.options.selectorSpace);
      var menuElement = this.element.querySelector(this.options.selectorMenu);
      var isOpen = this.element.classList.contains(this.options.classSwitcherOpen);

      if (linkedElement) {
        if (this.element.isLinked) {
          if (this.element.linkedAccount) {
            if (linkedElement.textContent.length) {
              linkedElement.querySelector(this.options.selectorAccountSlLinked).textContent = this.element.linkedAccount.textContent;
            } else {
              linkedElement.appendChild(this.element.linkedAccount);

              if (this.element.linkedIcon) {
                linkedElement.appendChild(this.element.linkedIcon);
              }
            }
          }
        } else {
          linkedElement.textContent = '';
        }
      }

      var nameDropdownValue = '';

      if (this.element.querySelector(this.options.selectorAccountDropdown)) {
        if (this.element.isLinked) {
          nameDropdownValue = this.element.querySelector(this.options.selectorAccountLinked).textContent;
        } else {
          nameDropdownValue = this.element.querySelector(this.options.selectorAccountDropdown).textContent;
        }
      }

      var regionDropdownValue = '';

      if (this.element.querySelector(this.options.selectorRegionDropdown)) {
        regionDropdownValue = this.element.querySelector(this.options.selectorRegionDropdown).textContent;
      }

      var orgDropdownValue = '';

      if (this.element.querySelector(this.options.selectorOrgDropdown)) {
        orgDropdownValue = this.element.querySelector(this.options.selectorOrgDropdown).textContent;
      }

      var spaceDropdownValue = '';

      if (this.element.querySelector(this.options.selectorSpaceDropdown)) {
        spaceDropdownValue = this.element.querySelector(this.options.selectorSpaceDropdown).textContent;
      }

      var nameShort;
      var orgShort;
      var spaceShort;

      if (isHovered && !isOpen) {
        if (nameElement) {
          nameElement.textContent = nameDropdownValue;
        }

        if (orgElement) {
          orgElement.textContent = orgDropdownValue;
        }

        if (spaceElement) {
          spaceElement.textContent = spaceDropdownValue;
        }

        if (regionElement) {
          regionElement.textContent = regionDropdownValue;
        }

        if (menuElement) {
          menuElement.style.width = "".concat(this.element.getBoundingClientRect().width, "px");
        }
      } else {
        if (nameElement) {
          if (nameDropdownValue.length > 25) {
            nameShort = "".concat(nameDropdownValue.substr(0, 25), "...");
            nameElement.textContent = nameShort;
          } else {
            nameElement.textContent = nameDropdownValue;
          }
        }

        if (orgElement) {
          if (orgDropdownValue.length > 25) {
            orgShort = "".concat(orgDropdownValue.slice(0, 12), "...").concat(orgDropdownValue.slice(-13));
            orgElement.textContent = orgShort;
          } else {
            orgElement.textContent = orgDropdownValue;
          }
        }

        if (spaceElement) {
          if (spaceDropdownValue.length > 25) {
            spaceShort = "".concat(spaceDropdownValue.substr(0, 25), "...");
            spaceElement.textContent = spaceShort;
          } else {
            spaceElement.textContent = spaceDropdownValue;
          }
        }

        if (regionElement) {
          regionElement.textContent = regionDropdownValue;
        }

        if (menuElement) {
          menuElement.style.width = "".concat(this.element.getBoundingClientRect().width, "px");
        }
      }
    }
    /**
     * The component options.
     * @member ProfileSwitcher.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find profile switchers.
     * @property {string} [selectorProfileSwitcher] The data attribute selector for the profile switcher.
     * @property {string} [selectorAccount]
     *   The data attribute selector for the element containing the account name in the profile switcher.
     * @property {string} [selectorOrg]
     *   The data attribute selector for the element containing the organization name in the profile switcher.
     * @property {string} [selectorSpace]
     *   The data attribute selector for the element containing the space name in the profile switcher.
     * @property {string} [selectorAccountDropdown]
     *   The data attribute selector for the dropdown item containing the current account name.
     * @property {string} [selectorOrgDropdown]
     *   The data attribute selector for the dropdown item containing the current organization name.
     * @property {string} [selectorSpaceDropdown]
     *   The data attribute selector for the dropdown item containing the current space name.
     */

  }], [{
    key: "options",
    get: function get() {
      var prefix = settings.prefix;
      return {
        selectorInit: '[data-profile-switcher]',
        // Data Attribute selectors
        selectorProfileSwitcher: '[data-profile-switcher]',
        selectorToggle: '[data-profile-switcher-toggle]',
        selectorMenu: '[data-switcher-menu]',
        selectorLinkedAccount: '[data-switcher-account-sl]',
        selectorAccount: '[data-switcher-account]',
        selectorRegion: '[data-switcher-region]',
        selectorOrg: '[data-switcher-org]',
        selectorSpace: '[data-switcher-space]',
        selectorDropdown: '[data-dropdown]',
        selectorAccountDropdown: '[data-dropdown-account]',
        selectorAccountSlDropdown: '[data-dropdown-account-sl]',
        selectorAccountLinked: '[data-dropdown-account-linked]',
        selectorAccountSlLinked: '[data-dropdown-account-sl-linked]',
        selectorRegionDropdown: '[data-dropdown-region]',
        selectorOrgDropdown: '[data-dropdown-org]',
        selectorSpaceDropdown: '[data-dropdown-space]',
        classSwitcherOpen: "".concat(prefix, "--account-switcher--open"),
        classLinkedIcon: ".".concat(prefix, "--account-switcher__linked-icon")
      };
    }
    /**
     * The map associating DOM element and profile switcher instance.
     * @member ProfileSwitcher.components
     * @type {WeakMap}
     */

  }]);

  ProfileSwitcher.components = new WeakMap();
  return ProfileSwitcher;
}(mixin(createComponent, initComponentBySearch, handles));

export default !breakingChangesX ? ProfileSwitcher : removedComponent('ProfileSwitcher');