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
    global.carousel = mod.exports;
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

  var Carousel =
  /*#__PURE__*/
  function (_mixin) {
    _inherits(Carousel, _mixin);
    /**
     * Carousel.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @param {HTMLElement} element The element working as an carousel.
     */


    function Carousel(element, options) {
      var _this;

      _classCallCheck(this, Carousel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, element, options));

      _this.handleClick = function (evt) {
        if (evt.target.matches(_this.options.selectorScrollRight)) {
          _this.sideScroll('right');
        } else {
          _this.sideScroll('left');
        }
      };

      _this.sideScroll = function (direction) {
        var filmstripWidth = _this.filmstrip.getBoundingClientRect().width;

        var itemWidth = _this.carouselItem.getBoundingClientRect().width + 20;
        var re = /\.*translateX\((.*)px\)/i;
        var translateXValue = _this.filmstrip.style.transform ? Number(_this.filmstrip.style.transform.split(re)[1]) : 0;
        var directionValue = direction === 'right' ? -1 : 1;
        var itemWidthDirection = itemWidth * directionValue;
        var newTranslateValue = itemWidthDirection + translateXValue;

        if (newTranslateValue > 0) {
          newTranslateValue = 0;
        }

        if (newTranslateValue < filmstripWidth * -1) {
          newTranslateValue = filmstripWidth * -1;
        }

        _this.filmstrip.style.transform = "translateX(".concat(newTranslateValue, "px)");
      };

      if (process.env.NODE_ENV !== "production") {
        process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The `Carousel` component in `carbon-components` has been deprecated. It will be removed in the next major release.') : void 0;
        didWarnAboutDeprecation = true;
      }

      _this.filmstrip = _this.element.querySelector(_this.options.selectorFilmstrip);
      _this.carouselItem = _this.element.querySelector(_this.options.selectorCarouselItem);

      _this.element.addEventListener('click', function (evt) {
        return _this.handleClick(evt);
      });

      return _this;
    }

    _createClass(Carousel, null, [{
      key: "options",
      get: function get() {
        var prefix = _settings.default.prefix;
        return {
          selectorInit: '[data-carousel]',
          selectorFilmstrip: ".".concat(prefix, "--filmstrip"),
          selectorScrollRight: '[data-scroll-right]',
          selectorScrollLeft: '[data-scroll-left]',
          selectorCarouselBtn: ".".concat(prefix, "--carousel__btn"),
          selectorCarouselItem: ".".concat(prefix, "--carousel__item")
        };
      }
      /**
       * The map associating DOM element and accordion UI instance.
       * @type {WeakMap}
       */

    }]);

    Carousel.components = new WeakMap();
    return Carousel;
  }((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default));

  var _default = !_featureFlags.breakingChangesX ? Carousel : (0, _removedComponent.default)('Carousel');

  _exports.default = _default;
});