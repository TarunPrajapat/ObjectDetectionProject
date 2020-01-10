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

var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var LeftNav =
/*#__PURE__*/
function (_mixin) {
  _inherits(LeftNav, _mixin);
  /**
   * Left Navigation.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a left navigation.
   * @param {Object} [options] The component options
   * @param {string} [options.selectorLeftNav] The data attribute selector for the nav element in the left nav container.
   * @param {string} [options.selectorLeftNavList] The data attribute selector for the main ul element in the left nav.
   * @param {string} [options.selectorLeftNavNestedList] The data attribute selector for the nested ul elements in the left nav.
   * @param {string} [options.selectorLeftNavToggle]
   *   The data attribute selector for the button that will show and hide the left navigation.
   * @param {string} [options.selectorLeftNavListItem] The data attribute selector for all list items in the left navigation.
   * @param {string} [options.selectorLeftNavNestedListItem]
   *   The data attribute selector for all nested list items in the left navigation.
   * @param {string} [options.selectorLeftNavArrowIcon] The data attribute selector for the arrow icons in the left nav.
   * @param {string} [options.selectorLeftNavFlyoutMenu] The data attribute selector for the flyout menus in the left nav.
   * @param {string} [options.selectorLeftNavFlyoutItem] The data attribute selector for the flyout menu items in the left nav.
   * @param {string} [options.selectorLeftNavSection]
   *   The data attribute selector for the three sections in the header of the left nav.
   * @param {string} [options.selectorLeftNavCurrentPage]
   *   The data attribute selector for the current section title in the left nav header.
   * @param {string} [options.selectorLeftNavMainNavHidden] The CSS selector for the hidden main nav.
   * @param {string} [options.classActiveLeftNav] The class name for when a left nav is active.
   * @param {string} [options.classActiveLeftNavListItem] The class name for when a left nav list item is active.
   * @param {string} [options.classExpandedLeftNavListItem] The class name for when a nested list is expanded.
   * @param {string} [options.classFlyoutDisplayed] The class name for when a flyout menu is displayed.
   * @param {string} [options.classActiveSection] The class name for an active section item in the left nav header.
   * @param {string} [options.classItemHasChildren] The class name for when a list item has children.
   * @param {string} [options.classTaxonomyIcon] The class name for the taxonomy icon.
   */


  function LeftNav(element, options) {
    var _this;

    _classCallCheck(this, LeftNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftNav).call(this, element, options));

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The `LeftNav` component in `carbon-components` has been deprecated. It will be removed in the next major release.') : void 0;
      didWarnAboutDeprecation = true;
    }

    _this.leftNavSectionActive = false;

    _this.hookOpenActions();

    _this.hookListSectionEvents();

    _this.hookListItemsEvents();

    _this.manage(on(_this.element.ownerDocument, 'click', function (evt) {
      _this.handleDocumentClick(evt);
    }));

    return _this;
  }
  /**
   * Closes the menu.
   */


  _createClass(LeftNav, [{
    key: "closeMenu",
    value: function closeMenu() {
      this.element.classList.remove(this.options.classActiveLeftNav);
      var toggleOpenNode = this.element.ownerDocument.querySelector(this.options.selectorLeftNavToggleOpen);
      toggleOpenNode.classList.remove(this.options.classActiveTrigger);
      this.element.querySelector(this.options.selectorLeftNav).parentNode.setAttribute('aria-expanded', 'false');
    }
    /**
     * Toggles the menu to open and close.
     */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var leftNavContainer = this.element.querySelector(this.options.selectorLeftNav).parentNode;
      this.element.classList.toggle(this.options.classActiveLeftNav);
      var toggleOpenNode = this.element.ownerDocument.querySelector(this.options.selectorLeftNavToggleOpen);
      toggleOpenNode.classList.toggle(this.options.classActiveTrigger);
      if (leftNavContainer.getAttribute('aria-expanded') === 'false') leftNavContainer.setAttribute('aria-expanded', 'true');else leftNavContainer.setAttribute('aria-expanded', 'false');
    }
    /**
     * Adds a transitional animation to the navSection
     */

  }, {
    key: "animateNavSection",
    value: function animateNavSection(selectedNav) {
      var _this2 = this;

      var selectedNavValue = selectedNav.dataset.leftNavSection;
      var selectedNavLink = selectedNav.querySelector(this.options.selectorLeftNavSectionLink);
      var leftNav = this.element.querySelector(this.options.selectorLeftNav);
      var leftNavSections = this.element.querySelector(this.options.selectorLeftNavSections);
      selectedNav.classList.remove(this.options.classNavSection);
      selectedNav.classList.remove("".concat(this.options.classNavSection, "--").concat(selectedNavValue));
      selectedNav.classList.add(this.options.classNavSectionTransition);

      if (leftNavSections.children[0] === selectedNav) {
        selectedNav.classList.add("".concat(this.options.classNavSectionTransition, "--50")); // First child only move 50px
      } else {
        selectedNav.classList.add("".concat(this.options.classNavSectionTransition, "--100")); // Second move 100px
      }

      selectedNav.setAttribute('data-left-nav-section', selectedNavValue);
      /* Not sure what trick more performant */

      setTimeout(function () {
        selectedNav.classList.add("".concat(_this2.options.classNavSectionTransition, "--0"));
      }, 100); // Could probably use a promise here

      selectedNavLink.classList.remove(this.options.classNavSectionLink);
      selectedNavLink.classList.add(this.options.classNavHeaderTitle);
      selectedNavLink.setAttribute('data-left-nav-current-section-title', '');
      selectedNavLink.removeAttribute('data-left-nav-section-link');
      this.element.insertBefore(selectedNav, leftNav);
    }
    /**
     * Adds a transitional animation to the navigation items on nav section click
     */

  }, {
    key: "animateNavList",
    value: function animateNavList(selectedNavTitle) {
      var _this3 = this;

      var currentLeftNavList = this.element.querySelector("".concat(this.options.selectorLeftNavList, ":not(").concat(this.options.selectorLeftNavMainNavHidden, ")"));
      var newLeftNavList = this.element.querySelector("[data-left-nav-list=".concat(selectedNavTitle, "]"));
      var currentLeftNavItems = toArray(currentLeftNavList.querySelectorAll(this.options.selectorLeftNavListItem)).reverse();
      var newLeftNavItems = toArray(newLeftNavList.querySelectorAll(this.options.selectorLeftNavListItem));
      var fadeOutTime = 300;
      var counter = 0;
      var counterIteration = fadeOutTime / currentLeftNavItems.length; // Length of animation divided by number of items

      currentLeftNavItems.forEach(function (item) {
        item.setAttribute('tabIndex', '-1');
        setTimeout(function () {
          item.classList.add(_this3.options.classItemFade);
        }, counter);
        counter += counterIteration;
      });
      newLeftNavItems.forEach(function (item) {
        item.setAttribute('tabIndex', '0');
        item.classList.remove(_this3.options.classItemFade);
      });
      setTimeout(function () {
        currentLeftNavList.classList.add(_this3.options.classListHidden);
        currentLeftNavList.classList.add(_this3.options.classListTop);
        currentLeftNavList.setAttribute('aria-hidden', 'true');
        newLeftNavList.classList.remove(_this3.options.classListHidden);
        setTimeout(function () {
          newLeftNavList.classList.remove(_this3.options.classListTop);
        }, 100);
        newLeftNavList.setAttribute('aria-hidden', 'false');
      }, fadeOutTime + 100); // Wait for items to fade out.
    }
  }, {
    key: "hookOpenActions",
    value: function hookOpenActions() {
      var _this4 = this;

      var openBtn = this.element.ownerDocument.querySelector(this.options.selectorLeftNavToggleOpen);
      var closeBtn = this.element.ownerDocument.querySelector(this.options.selectorLeftNavToggleClose);
      this.manage(on(openBtn, 'click', function () {
        _this4.element.tabIndex = '0';

        _this4.toggleMenu();
      }));
      this.manage(on(openBtn, 'keydown', function (evt) {
        if (evt.which === 13) {
          _this4.element.tabIndex = '0';

          _this4.toggleMenu();
        }
      }));

      if (closeBtn) {
        this.manage(on(closeBtn, 'click', function () {
          _this4.element.tabIndex = '-1';

          _this4.closeMenu();
        }));
        this.manage(on(closeBtn, 'keydown', function (evt) {
          if (evt.which === 13) {
            _this4.element.tabIndex = '-1';

            _this4.closeMenu();
          }
        }));
      }

      this.manage(on(this.element.ownerDocument, 'keydown', function (evt) {
        if (evt.which === 27 && _this4.element.classList.contains(_this4.options.classActiveLeftNav)) {
          _this4.closeMenu();
        }
      }));
    }
    /**
     * Addes Event listeners to list sections
     */

  }, {
    key: "hookListSectionEvents",
    value: function hookListSectionEvents() {
      var _this5 = this;

      var leftNavSections = this.element.querySelector(this.options.selectorLeftNavSections);
      this.manage(on(leftNavSections, 'click', function (evt) {
        _this5.handleSectionItemClick(evt, leftNavSections);
      }));
      this.manage(on(leftNavSections, 'keydown', function (evt) {
        if (evt.which === 13) {
          _this5.handleSectionItemClick(evt, leftNavSections);

          _this5.element.querySelector(_this5.options.selectorLeftNavCurrentSectionTitle).focus();
        }
      }));
    }
    /**
     * Adds event listeners to list items
     */

  }, {
    key: "hookListItemsEvents",
    value: function hookListItemsEvents() {
      var _this6 = this;

      var leftNavList = toArray(this.element.querySelectorAll(this.options.selectorLeftNavList));
      leftNavList.forEach(function (list) {
        _this6.manage(on(list, 'click', function (evt) {
          var leftNavItem = eventMatches(evt, _this6.options.selectorLeftNavListItem);

          if (leftNavItem) {
            var childItem = eventMatches(evt, _this6.options.selectorLeftNavNestedListItem);
            var hasChildren = eventMatches(evt, _this6.options.selectorLeftNavListItemHasChildren);
            var flyoutItem = eventMatches(evt, _this6.options.selectorLeftNavFlyoutItem);

            if (flyoutItem) {
              _this6.addActiveListItem(flyoutItem);
            } else if (childItem) {
              if (childItem.querySelector(_this6.options.selectorLeftNavFlyoutMenu)) {
                var flyoutMenu = childItem.querySelector(_this6.options.selectorLeftNavFlyoutMenu);
                flyoutMenu.classList.toggle(_this6.options.classFlyoutDisplayed);
              } else {
                _this6.addActiveListItem(childItem);
              }
            } else if (hasChildren) {
              _this6.handleNestedListClick(leftNavItem);
            } else {
              _this6.addActiveListItem(leftNavItem);
            }
          }
        }));

        _this6.manage(on(list, 'keydown', function (evt) {
          if (evt.which === 13) {
            var leftNavItem = eventMatches(evt, _this6.options.selectorLeftNavListItem);

            if (leftNavItem) {
              var childItem = eventMatches(evt, _this6.options.selectorLeftNavNestedListItem);
              var hasChildren = eventMatches(evt, _this6.options.selectorLeftNavListItemHasChildren);
              var flyoutItem = eventMatches(evt, _this6.options.selectorLeftNavFlyoutItem);
              var hasLinkItem = !(leftNavItem.querySelector(_this6.options.selectorLeftNavListItemLink) === undefined);

              if (flyoutItem) {
                _this6.addActiveListItem(flyoutItem);
              } else if (childItem) {
                if (!childItem.querySelector(_this6.options.selectorLeftNavFlyoutMenu)) {
                  _this6.addActiveListItem(childItem);
                } else {
                  childItem.querySelector(_this6.options.selectorLeftNavFlyoutMenu).setAttribute('aria-hidden', 'false');
                  childItem.querySelector(_this6.options.selectorLeftNavFlyoutMenu).style.top = "".concat(childItem.offsetTop - _this6.element.querySelector(_this6.options.selectorLeftNav).scrollTop, "px");
                  childItem.querySelector(_this6.options.selectorLeftNavFlyoutMenu).style.left = "".concat(childItem.offsetLeft + Math.round(childItem.offsetWidth), "px");
                }
              } else if (hasChildren) {
                _this6.handleNestedListClick(leftNavItem);
              } else if (hasLinkItem) {
                var link = leftNavItem.querySelector(_this6.options.selectorLeftNavListItemLink);
                link.click();
              } else {
                _this6.addActiveListItem(leftNavItem);
              }
            }
          }
        }));
      });
      var flyouts = toArray(this.element.ownerDocument.querySelectorAll(this.options.selectorLeftNavListItemHasFlyout));
      flyouts.forEach(function (flyout) {
        _this6.manage(on(flyout, 'mouseenter', function () {
          flyout.querySelector(_this6.options.selectorLeftNavFlyoutMenu).setAttribute('aria-hidden', 'false'); // eslint-disable-next-line no-param-reassign

          flyout.querySelector(_this6.options.selectorLeftNavFlyoutMenu).style.top = "".concat(flyout.offsetTop - _this6.element.querySelector(_this6.options.selectorLeftNav).scrollTop, "px"); // eslint-disable-next-line no-param-reassign

          flyout.querySelector(_this6.options.selectorLeftNavFlyoutMenu).style.left = "".concat(flyout.offsetLeft + Math.round(flyout.offsetWidth), "px");
          flyout.querySelector(_this6.options.selectorLeftNavFlyoutMenu).classList.toggle(_this6.options.classFlyoutDisplayed);
        }));

        _this6.manage(on(flyout, 'mouseleave', function () {
          flyout.querySelector(_this6.options.selectorLeftNavFlyoutMenu).setAttribute('aria-hidden', 'true');
          flyout.querySelector(_this6.options.selectorLeftNavFlyoutMenu).classList.remove(_this6.options.classFlyoutDisplayed);
        }));
      });
    }
    /**
     * Hides all flyout menus.
     */

  }, {
    key: "hideAllFlyoutMenus",
    value: function hideAllFlyoutMenus() {
      var _this7 = this;

      var flyoutMenus = toArray(this.element.querySelectorAll(this.options.selectorLeftNavFlyoutMenu));
      flyoutMenus.forEach(function (menu) {
        menu.setAttribute('aria-hidden', 'true');
        menu.classList.remove(_this7.options.classFlyoutDisplayed);
      });
    }
    /**
     * Sets a list item as active.
     * @param {Object} item The active list item.
     */

  }, {
    key: "addActiveListItem",
    value: function addActiveListItem(item) {
      var _this8 = this;

      toArray(this.element.querySelectorAll(this.options.selectorLeftNavAllListItems)).forEach(function (currentItem) {
        if (!(item === currentItem)) {
          if (!currentItem.contains(item)) {
            currentItem.classList.remove(_this8.options.classActiveLeftNavListItem);
          } else {
            currentItem.classList.add(_this8.options.classActiveLeftNavListItem);
          }
        }
      });
      toArray(this.element.querySelectorAll(this.options.selectorLeftNavNestedListItem)).forEach(function (currentItem) {
        if (!(item === currentItem)) {
          currentItem.classList.remove(_this8.options.classActiveLeftNavListItem);
        }
      });
      item.classList.add(this.options.classActiveLeftNavListItem);
      this.closeMenu();
      this.hideAllFlyoutMenus();
      this.closeMenu();
    }
    /**
     * Handles click on the document.
     * Closes the left navigation when document is clicked outside the left navigation.
     * @param {Event} evt The event triggering this method.
     */

  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(evt) {
      var clickTarget = evt.target;
      var isOfSelf = this.element.contains(clickTarget);
      var isToggleBtn = this.element.ownerDocument.querySelector(this.options.selectorLeftNavToggleOpen).contains(clickTarget);
      var isOpen = this.element.classList.contains(this.options.classActiveLeftNav);
      var isUnifiedHeader = this.element.ownerDocument.querySelector('[data-unified-header]').contains(clickTarget);
      var shouldClose = !isOfSelf && isOpen && !isToggleBtn && !isUnifiedHeader;
      var flyoutOpen;

      if (this.element.querySelector(this.options.selectorLeftNavFlyoutMenu)) {
        var leftnavFlyoutMenu = this.element.querySelector(this.options.selectorLeftNavFlyoutMenu);
        flyoutOpen = leftnavFlyoutMenu.classList.contains(this.options.classFlyoutDisplayed);
      }

      if (isOfSelf && this.element.tagName === 'A') {
        evt.preventDefault();
      }

      if (shouldClose) {
        this.closeMenu();
      }

      if (this.element.querySelector(this.options.selectorLeftNavFlyoutMenu)) {
        if (flyoutOpen && !isOfSelf && isOpen) {
          this.element.querySelector(this.options.selectorLeftNavFlyoutMenu).classList.remove(this.options.classFlyoutDisplayed);
        }
      }
    }
    /**
     * Handles click on a list item that contains a nested list in the left navigation.
     * It hides all flyout menus and switches the tab-index on the list items based on whether or not the list is expanded.
     * @param {HTMLElement} listItem The list item that was clicked.
     */

  }, {
    key: "handleNestedListClick",
    value: function handleNestedListClick(listItem) {
      var _this9 = this;

      var isOpen = listItem.classList.contains(this.options.classExpandedLeftNavListItem);
      this.hideAllFlyoutMenus();
      listItem.classList.toggle(this.options.classExpandedLeftNavListItem, !isOpen);
      var listItems = toArray(listItem.querySelectorAll(this.options.selectorLeftNavNestedListItem));
      listItems.forEach(function (item) {
        if (isOpen) {
          listItem.querySelector(_this9.options.selectorLeftNavNestedList).setAttribute('aria-hidden', 'true'); // eslint-disable-next-line no-param-reassign

          item.querySelector(_this9.options.selectorLeftNavListItemLink).tabIndex = -1;
        } else {
          listItem.querySelector(_this9.options.selectorLeftNavNestedList).setAttribute('aria-hidden', 'false'); // eslint-disable-next-line no-param-reassign

          item.querySelector(_this9.options.selectorLeftNavListItemLink).tabIndex = 0;
        }
      });
    }
  }, {
    key: "handleSectionItemClick",
    value: function handleSectionItemClick(evt, leftNavSections) {
      var _this10 = this; // Sorry


      var leftNavSectionItem = eventMatches(evt, this.options.selectorLeftNavSection);

      if (leftNavSectionItem) {
        // currently selected
        var selectedLeftNavSectionItem = this.element.querySelector(this.options.selectorLeftNavCurrentSection);
        var selectedLeftNavSectionItemTitle = selectedLeftNavSectionItem.querySelector(this.options.selectorLeftNavCurrentSectionTitle);
        var selectedLeftNavSectionItemIcon = this.element.querySelector(this.options.selectorLeftNavCurrentSectionIcon);
        var selectedLeftNavSectionItemUse = selectedLeftNavSectionItemIcon.querySelector('use');
        var selectedLeftNavSectionValue = selectedLeftNavSectionItem.dataset.leftNavCurrentSection; // clicked on item

        var leftNavSectionItemLink = leftNavSectionItem.querySelector(this.options.selectorLeftNavSectionLink);
        var leftNavSectionItemIcon = leftNavSectionItem.querySelector(this.options.selectorLeftNavSectionIcon);
        var leftNavSectionItemIconUse = leftNavSectionItemIcon.querySelector('use');
        var leftNavSectionValue = leftNavSectionItem.dataset.leftNavSection;

        if (this.leftNavSectionActive) {
          return;
        }

        this.leftNavSectionActive = true;
        var newLeftNavSectionItem = document.createElement('li');
        newLeftNavSectionItem.setAttribute('data-left-nav-section', selectedLeftNavSectionValue);
        newLeftNavSectionItem.classList.add(this.options.classNavSection);
        newLeftNavSectionItem.classList.add("".concat(this.options.classNavSection, "--").concat(selectedLeftNavSectionValue));
        var newLeftNavSectionItemAnchor = document.createElement('a');
        newLeftNavSectionItemAnchor.setAttribute('href', 'javascript:void(0)'); // eslint-disable-line no-script-url

        newLeftNavSectionItemAnchor.setAttribute('tabindex', 0);
        newLeftNavSectionItemAnchor.classList.add(this.options.classNavSectionAnchor);
        var newLeftNavSectionItemIcon = selectedLeftNavSectionItemIcon.cloneNode(true); // IE11 doesn't support classList on SVG, must revert to className

        newLeftNavSectionItemIcon.setAttribute('class', this.options.classTaxonomyIcon);
        newLeftNavSectionItemIcon.removeAttribute('data-left-nav-current-section-icon');
        newLeftNavSectionItemIcon.setAttribute('data-left-nav-section-icon', selectedLeftNavSectionValue);
        var newLeftNavSectionItemLink = document.createElement('span');
        newLeftNavSectionItemLink.setAttribute('data-left-nav-section-link', '');
        newLeftNavSectionItemLink.classList.add(this.options.classNavSectionLink);
        newLeftNavSectionItemLink.textContent = selectedLeftNavSectionItemTitle.textContent;
        this.animateNavSection(leftNavSectionItem);
        this.animateNavList(leftNavSectionValue);
        newLeftNavSectionItemAnchor.appendChild(newLeftNavSectionItemIcon);
        newLeftNavSectionItemAnchor.appendChild(newLeftNavSectionItemLink);
        newLeftNavSectionItem.appendChild(newLeftNavSectionItemAnchor);
        leftNavSections.insertBefore(newLeftNavSectionItem, leftNavSections.firstChild);
        setTimeout(function () {
          selectedLeftNavSectionItemTitle.textContent = leftNavSectionItemLink.textContent;
          selectedLeftNavSectionItem.setAttribute('data-left-nav-current-section', leftNavSectionValue);
          selectedLeftNavSectionItemIcon.setAttribute('data-left-nav-current-section-icon', leftNavSectionValue);
          selectedLeftNavSectionItemUse.setAttribute('xlink:href', leftNavSectionItemIconUse.getAttribute('xlink:href'));
          leftNavSectionItem.parentNode.removeChild(leftNavSectionItem); // Cant use .remove() because of IE11

          _this10.leftNavSectionActive = false;
        }, 450); // Wait for nav items to animate
      }
    }
    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode LeftNav.create .create()}, or {@linkcode LeftNav.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode LeftNav.init .init()} works.
     * @member LeftNav.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find left nav containers.
     * @property {string} [selectorLeftNav] The data attribute selector for the nav element in the left nav container.
     * @property {string} [selectorLeftNavList] The data attribute selector for the main ul element in the left nav.
     * @property {string} [selectorLeftNavNestedList] The data attribute selector for the nested ul elements in the left nav.
     * @property {string} [selectorLeftNavToggle]
     *   The data attribute selector for the button that will show and hide the left navigation.
     * @property {string} [selectorLeftNavListItem] The data attribute selector for all list items in the left navigation.
     * @property {string} [selectorLeftNavNestedListItem]
     *   The data attribute selector for all nested list items in the left navigation.
     * @property {string} [selectorLeftNavArrowIcon] The data attribute selector for the arrow icons in the left nav.
     * @property {string} [selectorLeftNavFlyoutMenu] The data attribute selector for the flyout menus in the left nav.
     * @property {string} [selectorLeftNavFlyoutItem] The data attribute selector for the flyout menu items in the left nav.
     * @property {string} [selectorLeftNavSection] The data attribute selector for the three sections in the header of the left nav.
     * @property {string} [selectorLeftNavCurrentPage]
     *   The data attribute selector for the current section title in the left nav header.
     * @property {string} [selectorLeftNavMainNavHidden] The CSS selector for the hidden main nav.
     * @property {string} [classActiveLeftNav] The class name for when a left nav is active.
     * @property {string} [classActiveLeftNavListItem] The class name for when a left nav list item is active.
     * @property {string} [classExpandedLeftNavListItem] The class name for when a nested list is expanded.
     * @property {string} [classFlyoutDisplayed] The class name for when a flyout menu is displayed.
     * @property {string} [classActiveSection] The class name for an active section item in the left nav header.
     * @property {string} [classItemHasChildren] The class name for when a list item has children.
     * @property {string} [classTaxonomyIcon] The class name for the taxonomy icon.
     */

  }], [{
    key: "options",
    get: function get() {
      var prefix = settings.prefix;
      return {
        selectorInit: '[data-left-nav-container]',
        // Data Attribute selectors
        selectorLeftNav: '[data-left-nav]',
        selectorLeftNavList: '[data-left-nav-list]',
        selectorLeftNavNestedList: '[data-left-nav-nested-list]',
        selectorLeftNavToggleOpen: '[data-left-nav-toggle="open"]',
        selectorLeftNavToggleClose: '[data-left-nav-toggle="close"]',
        selectorLeftNavListItem: '[data-left-nav-item]',
        selectorLeftNavListItemLink: '[data-left-nav-item-link]',
        selectorLeftNavNestedListItem: '[data-left-nav-nested-item]',
        selectorLeftNavArrowIcon: '[data-left-nav-icon]',
        selectorLeftNavFlyoutMenu: '[data-left-nav-flyout]',
        selectorLeftNavFlyoutItem: '[data-left-nav-flyout-item]',
        selectorLeftNavSections: '[data-left-nav-sections]',
        selectorLeftNavSection: '[data-left-nav-section]',
        selectorLeftNavSectionLink: '[data-left-nav-section-link]',
        selectorLeftNavSectionIcon: '[data-left-nav-section-icon]',
        selectorLeftNavCurrentSection: '[data-left-nav-current-section]',
        selectorLeftNavCurrentSectionTitle: '[data-left-nav-current-section-title]',
        selectorLeftNavCurrentSectionIcon: '[data-left-nav-current-section-icon]',
        selectorLeftNavListItemHasChildren: '[data-left-nav-item-with-children]',
        selectorLeftNavListItemHasFlyout: '[data-left-nav-has-flyout]',
        selectorLeftNavAllListItems: '[data-left-nav-item], [data-left-nav-nested-item], [data-left-nav-flyout-item]',
        selectorLeftNavMainNavHidden: ".".concat(prefix, "--left-nav__main-nav--hidden"),
        // CSS Class Selectors
        classActiveTrigger: "".concat(prefix, "--left-nav__trigger--active"),
        classActiveLeftNav: "".concat(prefix, "--left-nav--active"),
        classActiveLeftNavListItem: "".concat(prefix, "--active-list-item"),
        classExpandedLeftNavListItem: "".concat(prefix, "--main-nav__parent-item--expanded"),
        classFlyoutDisplayed: "".concat(prefix, "--nested-list__flyout-menu--displayed"),
        classItemHasChildren: "".concat(prefix, "--main-nav__parent-item--has-children"),
        classNavSection: "".concat(prefix, "--left-nav__section"),
        classNavSectionTransition: "".concat(prefix, "--left-nav__section--transition"),
        classNavSectionAnchor: "".concat(prefix, "--left-nav__section--anchor"),
        classNavSectionLink: "".concat(prefix, "--left-nav__section--link"),
        classNavHeaderTitle: "".concat(prefix, "--left-nav__header--title"),
        classItemFade: "".concat(prefix, "--main-nav__parent-item--fade"),
        classItemHidden: "".concat(prefix, "--main-nav__parent-item--hidden"),
        classListHidden: "".concat(prefix, "--left-nav__main-nav--hidden"),
        classListTop: "".concat(prefix, "--left-nav__main-nav--top"),
        classTaxonomyIcon: "".concat(prefix, "--left-nav__section--taxonomy-icon")
      };
    }
    /**
     * The map associating DOM element and left navigation instance.
     * @member LeftNav.components
     * @type {WeakMap}
     */

  }]);

  LeftNav.components = new WeakMap();
  return LeftNav;
}(mixin(createComponent, initComponentBySearch, handles));

export default !breakingChangesX ? LeftNav : removedComponent('LeftNav');