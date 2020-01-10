(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "warning", "../../globals/js/feature-flags", "../../globals/js/settings", "../../globals/js/misc/mixin", "../../globals/js/mixins/create-component", "../../globals/js/mixins/init-component-by-search", "../../globals/js/mixins/evented-state", "../../globals/js/mixins/handles", "../../globals/js/misc/event-matches", "../../globals/js/misc/on", "../removed-component"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("warning"), require("../../globals/js/feature-flags"), require("../../globals/js/settings"), require("../../globals/js/misc/mixin"), require("../../globals/js/mixins/create-component"), require("../../globals/js/mixins/init-component-by-search"), require("../../globals/js/mixins/evented-state"), require("../../globals/js/mixins/handles"), require("../../globals/js/misc/event-matches"), require("../../globals/js/misc/on"), require("../removed-component"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.warning, global.featureFlags, global.settings, global.mixin, global.createComponent, global.initComponentBySearch, global.eventedState, global.handles, global.eventMatches, global.on, global.removedComponent);
    global.dataTable = mod.exports;
  }
})(this, function (_exports, _warning, _featureFlags, _settings, _mixin2, _createComponent, _initComponentBySearch, _eventedState, _handles, _eventMatches, _on, _removedComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _warning = _interopRequireDefault(_warning);
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventedState = _interopRequireDefault(_eventedState);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);
  _removedComponent = _interopRequireDefault(_removedComponent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
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

  var didWarnAboutDeprecation;

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var DataTable =
  /*#__PURE__*/
  function (_mixin) {
    _inherits(DataTable, _mixin);
    /**
     * Data Table
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends EventedState
     * @extends Handles
     * @param {HTMLElement} element The root element of tables
     * @param {Object} [options] the... options
     * @param {string} [options.selectorInit] selector initialization
     * @param {string} [options.selectorExpandCells] css selector for expand
     * @param {string} [options.expandableRow] css selector for expand
     * @param {string} [options.selectorParentRows] css selector for rows housing expansion
     * @param {string} [options.selectorTableBody] root css for table body
     * @param {string} [options.eventTrigger] selector for event bubble capture points
     * @param {string} [options.eventParentContainer] used find the bubble container
     */


    function DataTable(_element, options) {
      var _this;

      _classCallCheck(this, DataTable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, _element, options));

      _this._toggleState = function (element, evt) {
        var data = element.dataset;
        var label = data.label ? data.label : '';
        var previousValue = data.previousValue ? data.previousValue : '';
        var initialEvt = evt;

        _this.changeState({
          group: data.event,
          element: element,
          label: label,
          previousValue: previousValue,
          initialEvt: initialEvt
        });
      };

      _this._zebraStripe = function (parentRows) {
        parentRows.forEach(function (item, index) {
          if (index % 2 === 0) {
            item.classList.add(_this.options.classParentRowEven);

            if (item.nextElementSibling && item.nextElementSibling.classList.contains(_this.options.classExpandableRow)) {
              item.nextElementSibling.classList.add(_this.options.classExpandableRowEven);
            }
          } else {
            item.classList.remove(_this.options.classParentRowEven);
          }
        });
      };

      _this._initExpandableRows = function (expandableRows) {
        expandableRows.forEach(function (item) {
          item.classList.remove(_this.options.classExpandableRowHidden);

          _this.tableBody.removeChild(item);
        });
      };

      _this._toggleRowExpand = function (detail) {
        var element = detail.element;
        var parent = (0, _eventMatches.default)(detail.initialEvt, _this.options.eventParentContainer);

        var index = _this.expandCells.indexOf(element);

        if (element.dataset.previousValue === undefined || element.dataset.previousValue === 'expanded') {
          element.dataset.previousValue = 'collapsed';

          _this.tableBody.insertBefore(_this.expandableRows[index], _this.parentRows[index + 1]);
        } else {
          _this.tableBody.removeChild(parent.nextElementSibling);

          element.dataset.previousValue = 'expanded';
        }
      };

      _this._toggleSort = function (detail) {
        var element = detail.element,
            previousValue = detail.previousValue;

        if (!previousValue || previousValue === 'descending') {
          element.dataset.previousValue = 'ascending';
          element.classList.add(_this.options.classTableSortAscending);
        } else {
          element.dataset.previousValue = 'descending';
          element.classList.remove(_this.options.classTableSortAscending);
        }
      };

      _this._toggleSelectAll = function (detail) {
        var element = detail.element,
            previousValue = detail.previousValue;
        var inputs = toArray(_this.element.querySelectorAll(_this.options.selectorCheckbox));

        if (!previousValue || previousValue === 'toggled') {
          inputs.forEach(function (item) {
            item.checked = true; // eslint-disable-line no-param-reassign
          });
          element.dataset.previousValue = 'off';
        } else {
          inputs.forEach(function (item) {
            item.checked = false; // eslint-disable-line no-param-reassign
          });
          element.dataset.previousValue = 'toggled';
        }
      };

      _this.refreshRows = function () {
        var newExpandCells = toArray(_this.element.querySelectorAll(_this.options.selectorExpandCells));
        var newExpandableRows = toArray(_this.element.querySelectorAll(_this.options.selectorExpandableRows));
        var newParentRows = toArray(_this.element.querySelectorAll(_this.options.selectorParentRows)); // check if this is a refresh or the first time

        if (_this.parentRows.length > 0) {
          var diffParentRows = newParentRows.filter(function (newRow) {
            return !_this.parentRows.some(function (oldRow) {
              return oldRow === newRow;
            });
          }); // check if there are expandable rows

          if (newExpandableRows.length > 0) {
            var diffExpandableRows = diffParentRows.map(function (newRow) {
              return newRow.nextElementSibling;
            });
            var mergedExpandableRows = toArray.apply(void 0, [_this.expandableRows].concat(_toConsumableArray(diffExpandableRows)));

            _this._initExpandableRows(diffExpandableRows);

            _this.expandableRows = mergedExpandableRows;
          }

          _this._zebraStripe(newParentRows);
        } else {
          _this._zebraStripe(newParentRows);

          if (newExpandableRows.length > 0) {
            _this._initExpandableRows(newExpandableRows);

            _this.expandableRows = newExpandableRows;
          }
        }

        _this.expandCells = newExpandCells;
        _this.parentRows = newParentRows;
      };

      if (process.env.NODE_ENV !== "production") {
        process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The `DataTable` component in `carbon-components` has been deprecated. It will be removed in the next major release. ' + 'If you still need this component, please use the `DataTableV2` component.') : void 0;
        didWarnAboutDeprecation = true;
      }

      _this.container = _element.parentNode; // requires the immediate parent to be the container

      _this.tableBody = _this.element.querySelector(_this.options.selectorTableBody);
      _this.expandCells = [];
      _this.expandableRows = [];
      _this.parentRows = [];
      _this.overflowInitialized = false;

      _this.refreshRows();

      _this.manage((0, _on.default)(_this.element, 'click', function (evt) {
        var eventElement = (0, _eventMatches.default)(evt, _this.options.eventTrigger);

        if (eventElement) {
          _this._toggleState(eventElement, evt);
        }
      }));

      _this.manage((0, _on.default)(_this.element, 'keydown', function (evt) {
        if (evt.which === 13) {
          var eventElement = (0, _eventMatches.default)(evt, _this.options.eventTrigger);

          if (eventElement) {
            _this._toggleState(eventElement, evt);
          }
        }
      }));

      return _this;
    }
    /**
     * Toggles the given state.
     * @private
     * @param {Object} detail The detail of the event trigging this action.
     * @param {Function} callback Callback called when change in state completes.
     */


    _createClass(DataTable, [{
      key: "_changeState",
      value: function _changeState(detail, callback) {
        this[this.constructor.eventHandlers[detail.group]](detail);
        callback();
      }
      /**
       * Toggles the state of this component specified by `data-event` attribute of the given element.
       * @param {HTMLElement} element The element.
       * @param {Event} evt The event trigging this action.
       */

    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings.default.prefix;
        return {
          selectorInit: '[data-responsive-table]',
          selectorExpandCells: ".".concat(prefix, "--table-expand"),
          selectorExpandableRows: ".".concat(prefix, "--expandable-row"),
          selectorParentRows: ".".concat(prefix, "--parent-row"),
          selectorTableBody: ".".concat(prefix, "--table-body"),
          selectorCheckbox: ".".concat(prefix, "--checkbox"),
          classParentRowEven: "".concat(prefix, "--parent-row--even"),
          classExpandableRow: "".concat(prefix, "--expandable-row"),
          classExpandableRowEven: "".concat(prefix, "--expandable-row--even"),
          classExpandableRowHidden: "".concat(prefix, "--expandable-row--hidden"),
          classTableSortAscending: "".concat(prefix, "--table-sort--ascending"),
          eventBeforeExpand: 'responsive-table-beforetoggleexpand',
          eventAfterExpand: 'responsive-table-aftertoggleexpand',
          eventBeforeSort: 'responsive-table-beforetogglesort',
          eventAfterSort: 'responsive-table-aftertogglesort',
          eventBeforeSelectAll: 'responsive-table-beforetoggleselectall',
          eventAfterSelectAll: 'responsive-table-aftertoggleselectall',
          eventTrigger: '[data-event]',
          eventParentContainer: '[data-parent-row]'
        };
      }
    }]);

    DataTable.components = new WeakMap();
    DataTable.eventHandlers = {
      expand: '_toggleRowExpand',
      sort: '_toggleSort',
      'select-all': '_toggleSelectAll'
    };
    return DataTable;
  }((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _eventedState.default, _handles.default));

  var _default = !_featureFlags.breakingChangesX ? DataTable : (0, _removedComponent.default)('DataTable');

  _exports.default = _default;
});