(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "warning", "../../globals/js/feature-flags", "../../globals/js/misc/mixin", "../../globals/js/mixins/create-component", "../../globals/js/mixins/init-component-by-event", "../../globals/js/mixins/handles", "../../globals/js/misc/on", "../removed-component"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("warning"), require("../../globals/js/feature-flags"), require("../../globals/js/misc/mixin"), require("../../globals/js/mixins/create-component"), require("../../globals/js/mixins/init-component-by-event"), require("../../globals/js/mixins/handles"), require("../../globals/js/misc/on"), require("../removed-component"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.warning, global.featureFlags, global.mixin, global.createComponent, global.initComponentByEvent, global.handles, global.on, global.removedComponent);
    global.fab = mod.exports;
  }
})(this, function (_exports, _warning, _featureFlags, _mixin2, _createComponent, _initComponentByEvent, _handles, _on, _removedComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _warning = _interopRequireDefault(_warning);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentByEvent = _interopRequireDefault(_initComponentByEvent);
  _handles = _interopRequireDefault(_handles);
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

  var FabButton =
  /*#__PURE__*/
  function (_mixin) {
    _inherits(FabButton, _mixin);
    /**
     * Floating action button.
     * @extends CreateComponent
     * @extends InitComponentByEvent
     * @extends Handles
     * @param {HTMLElement} element The element working as a floting action button.
     */


    function FabButton(element) {
      var _this;

      _classCallCheck(this, FabButton);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FabButton).call(this, element));

      if (process.env.NODE_ENV !== "production") {
        process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The `FabButton` component in `carbon-components` has been deprecated. It will be removed in the next major release.') : void 0;
        didWarnAboutDeprecation = true;
      }

      _this.manage((0, _on.default)(element, 'click', function (event) {
        _this.toggle(event);
      }));

      return _this;
    }
    /**
     * A method called when this widget is created upon clicking.
     * @param {Event} event The event triggering the creation.
     */


    _createClass(FabButton, [{
      key: "createdByEvent",
      value: function createdByEvent(event) {
        this.toggle(event);
      }
      /**
       * Toggles this floating action button.
       * @param {Event} event The event triggering this method.
       */

    }, {
      key: "toggle",
      value: function toggle(event) {
        if (this.element.tagName === 'A') {
          event.preventDefault();
        }

        if (this.element.dataset.state === 'closed') {
          this.element.dataset.state = 'open';
        } else {
          this.element.dataset.state = 'closed';
        }
      }
      /**
       * Instantiates floating action button of the given element.
       * @param {HTMLElement} element The element.
       */

    }], [{
      key: "create",
      value: function create(element) {
        return this.components.get(element) || new this(element);
      }
      /**
       * The map associating DOM element and floating action button instance.
       * @member FabButton.components
       * @type {WeakMap}
       */

    }]);

    FabButton.components = new WeakMap();
    FabButton.options = {
      selectorInit: '[data-fab]',
      initEventNames: ['click']
    };
    return FabButton;
  }((0, _mixin2.default)(_createComponent.default, _initComponentByEvent.default, _handles.default));

  var _default = !_featureFlags.breakingChangesX ? FabButton : (0, _removedComponent.default)('FabButton');

  _exports.default = _default;
});