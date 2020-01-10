(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "warning", "../../globals/js/feature-flags", "../../globals/js/settings", "../../globals/js/misc/mixin", "../../globals/js/mixins/create-component", "../../globals/js/mixins/init-component-by-search", "../removed-component"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("warning"), require("../../globals/js/feature-flags"), require("../../globals/js/settings"), require("../../globals/js/misc/mixin"), require("../../globals/js/mixins/create-component"), require("../../globals/js/mixins/init-component-by-search"), require("../removed-component"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.warning, global.featureFlags, global.settings, global.mixin, global.createComponent, global.initComponentBySearch, global.removedComponent);
    global.lightbox = mod.exports;
  }
})(this, function (_exports, _warning, _featureFlags, _settings, _mixin2, _createComponent, _initComponentBySearch, _removedComponent) {
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

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var Lightbox =
  /*#__PURE__*/
  function (_mixin) {
    _inherits(Lightbox, _mixin);

    function Lightbox(element, options) {
      var _this;

      _classCallCheck(this, Lightbox);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Lightbox).call(this, element, options));

      _this.showLightbox = function (evt) {
        if (!evt.detail.launchingElement.dataset.carouselItemIndex) {
          throw new Error('launchingElement must have carouselItemIndex data attribute to indicated what item to display');
        }

        _this.activeIndex = evt.detail.launchingElement.dataset.carouselItemIndex;

        _this.updateSlide();
      };

      _this.handleClick = function (evt) {
        if (evt.target.matches(_this.options.selectorScrollRight)) {
          if (_this.activeIndex < _this.totalSlides) {
            _this.activeIndex++;

            _this.updateSlide();
          }
        }

        if (evt.target.matches(_this.options.selectorScrollLeft)) {
          if (_this.activeIndex > 0) {
            _this.activeIndex--;

            _this.updateSlide();
          }
        }
      };

      _this.updateSlide = function () {
        var items = toArray(_this.element.querySelectorAll(_this.options.selectorLightboxItem));

        if (_this.activeIndex < 0 || _this.activeIndex >= items.length) {
          throw new RangeError('carouselItemIndex data attribute must be in range of lightbox items length');
        }

        items.forEach(function (item) {
          return item.classList.remove(_this.options.classActiveItem);
        });

        items[_this.activeIndex].classList.add(_this.options.classActiveItem);
      };

      if (process.env.NODE_ENV !== "production") {
        process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The `Lightbox` component in `carbon-components` has been deprecated. It will be removed in the next major release.') : void 0;
        didWarnAboutDeprecation = true;
      }

      _this.activeIndex = _this.element.dataset.lightboxIndex;
      _this.totalSlides = _this.element.querySelectorAll(_this.options.selectorLightboxItem).length - 1;

      _this.updateSlide();

      _this.element.addEventListener('click', function (evt) {
        return _this.handleClick(evt);
      });

      _this.element.parentNode.addEventListener('modal-beingshown', function (evt) {
        return _this.showLightbox(evt);
      });

      return _this;
    }

    _createClass(Lightbox, null, [{
      key: "options",
      get: function get() {
        var prefix = _settings.default.prefix;
        return {
          selectorInit: '[data-lightbox]',
          selectorScrollRight: '[data-scroll-right]',
          selectorScrollLeft: '[data-scroll-left]',
          selectorLightboxItem: ".".concat(prefix, "--lightbox__item"),
          classActiveItem: "".concat(prefix, "--lightbox__item--shown")
        };
      }
      /**
       * The map associating DOM element and accordion UI instance.
       * @type {WeakMap}
       */

    }]);

    Lightbox.components = new WeakMap();
    return Lightbox;
  }((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default));

  var _default = !_featureFlags.breakingChangesX ? Lightbox : (0, _removedComponent.default)('Lightbox');

  _exports.default = _default;
});