(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../../components/checkbox/checkbox", "../../components/file-uploader/file-uploader", "../../components/fab/fab", "../../components/content-switcher/content-switcher", "../../components/tabs/tabs", "../../components/overflow-menu/overflow-menu", "../../components/modal/modal", "../../components/loading/loading", "../../components/inline-loading/inline-loading", "../../components/dropdown/dropdown", "../../components/number-input/number-input", "../../components/data-table/data-table", "../../components/data-table-v2/data-table-v2", "../../components/date-picker/date-picker", "../../components/unified-header/left-nav", "../../components/unified-header/profile-switcher", "../../components/pagination/pagination", "../../components/search/search", "../../components/accordion/accordion", "../../components/copy-button/copy-button", "../../components/notification/notification", "../../components/toolbar/toolbar", "../../components/tooltip/tooltip", "../../components/progress-indicator/progress-indicator", "../../components/floating-menu/floating-menu", "../../components/structured-list/structured-list", "../../components/slider/slider", "../../components/tile/tile", "../../components/carousel/carousel", "../../components/lightbox/lightbox", "../../components/code-snippet/code-snippet", "../../components/text-input/text-input", "../../components/ui-shell/side-nav", "../../components/ui-shell/header-submenu", "../../components/ui-shell/header-nav", "../../components/ui-shell/navigation-menu"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../../components/checkbox/checkbox"), require("../../components/file-uploader/file-uploader"), require("../../components/fab/fab"), require("../../components/content-switcher/content-switcher"), require("../../components/tabs/tabs"), require("../../components/overflow-menu/overflow-menu"), require("../../components/modal/modal"), require("../../components/loading/loading"), require("../../components/inline-loading/inline-loading"), require("../../components/dropdown/dropdown"), require("../../components/number-input/number-input"), require("../../components/data-table/data-table"), require("../../components/data-table-v2/data-table-v2"), require("../../components/date-picker/date-picker"), require("../../components/unified-header/left-nav"), require("../../components/unified-header/profile-switcher"), require("../../components/pagination/pagination"), require("../../components/search/search"), require("../../components/accordion/accordion"), require("../../components/copy-button/copy-button"), require("../../components/notification/notification"), require("../../components/toolbar/toolbar"), require("../../components/tooltip/tooltip"), require("../../components/progress-indicator/progress-indicator"), require("../../components/floating-menu/floating-menu"), require("../../components/structured-list/structured-list"), require("../../components/slider/slider"), require("../../components/tile/tile"), require("../../components/carousel/carousel"), require("../../components/lightbox/lightbox"), require("../../components/code-snippet/code-snippet"), require("../../components/text-input/text-input"), require("../../components/ui-shell/side-nav"), require("../../components/ui-shell/header-submenu"), require("../../components/ui-shell/header-nav"), require("../../components/ui-shell/navigation-menu"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.checkbox, global.fileUploader, global.fab, global.contentSwitcher, global.tabs, global.overflowMenu, global.modal, global.loading, global.inlineLoading, global.dropdown, global.numberInput, global.dataTable, global.dataTableV2, global.datePicker, global.leftNav, global.profileSwitcher, global.pagination, global.search, global.accordion, global.copyButton, global.notification, global.toolbar, global.tooltip, global.progressIndicator, global.floatingMenu, global.structuredList, global.slider, global.tile, global.carousel, global.lightbox, global.codeSnippet, global.textInput, global.sideNav, global.headerSubmenu, global.headerNav, global.navigationMenu);
    global.components = mod.exports;
  }
})(this, function (_exports, _checkbox, _fileUploader, _fab, _contentSwitcher, _tabs, _overflowMenu, _modal, _loading, _inlineLoading, _dropdown, _numberInput, _dataTable, _dataTableV, _datePicker, _leftNav, _profileSwitcher, _pagination, _search, _accordion, _copyButton, _notification, _toolbar, _tooltip, _progressIndicator, _floatingMenu, _structuredList, _slider, _tile, _carousel, _lightbox, _codeSnippet, _textInput, _sideNav, _headerSubmenu, _headerNav, _navigationMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Checkbox", {
    enumerable: true,
    get: function get() {
      return _checkbox.default;
    }
  });
  Object.defineProperty(_exports, "FileUploader", {
    enumerable: true,
    get: function get() {
      return _fileUploader.default;
    }
  });
  Object.defineProperty(_exports, "FabButton", {
    enumerable: true,
    get: function get() {
      return _fab.default;
    }
  });
  Object.defineProperty(_exports, "ContentSwitcher", {
    enumerable: true,
    get: function get() {
      return _contentSwitcher.default;
    }
  });
  Object.defineProperty(_exports, "Tab", {
    enumerable: true,
    get: function get() {
      return _tabs.default;
    }
  });
  Object.defineProperty(_exports, "OverflowMenu", {
    enumerable: true,
    get: function get() {
      return _overflowMenu.default;
    }
  });
  Object.defineProperty(_exports, "Modal", {
    enumerable: true,
    get: function get() {
      return _modal.default;
    }
  });
  Object.defineProperty(_exports, "Loading", {
    enumerable: true,
    get: function get() {
      return _loading.default;
    }
  });
  Object.defineProperty(_exports, "InlineLoading", {
    enumerable: true,
    get: function get() {
      return _inlineLoading.default;
    }
  });
  Object.defineProperty(_exports, "Dropdown", {
    enumerable: true,
    get: function get() {
      return _dropdown.default;
    }
  });
  Object.defineProperty(_exports, "NumberInput", {
    enumerable: true,
    get: function get() {
      return _numberInput.default;
    }
  });
  Object.defineProperty(_exports, "DataTable", {
    enumerable: true,
    get: function get() {
      return _dataTable.default;
    }
  });
  Object.defineProperty(_exports, "DataTableV2", {
    enumerable: true,
    get: function get() {
      return _dataTableV.default;
    }
  });
  Object.defineProperty(_exports, "DatePicker", {
    enumerable: true,
    get: function get() {
      return _datePicker.default;
    }
  });
  Object.defineProperty(_exports, "LeftNav", {
    enumerable: true,
    get: function get() {
      return _leftNav.default;
    }
  });
  Object.defineProperty(_exports, "ProfileSwitcher", {
    enumerable: true,
    get: function get() {
      return _profileSwitcher.default;
    }
  });
  Object.defineProperty(_exports, "Pagination", {
    enumerable: true,
    get: function get() {
      return _pagination.default;
    }
  });
  Object.defineProperty(_exports, "Search", {
    enumerable: true,
    get: function get() {
      return _search.default;
    }
  });
  Object.defineProperty(_exports, "Accordion", {
    enumerable: true,
    get: function get() {
      return _accordion.default;
    }
  });
  Object.defineProperty(_exports, "CopyButton", {
    enumerable: true,
    get: function get() {
      return _copyButton.default;
    }
  });
  Object.defineProperty(_exports, "Notification", {
    enumerable: true,
    get: function get() {
      return _notification.default;
    }
  });
  Object.defineProperty(_exports, "Toolbar", {
    enumerable: true,
    get: function get() {
      return _toolbar.default;
    }
  });
  Object.defineProperty(_exports, "Tooltip", {
    enumerable: true,
    get: function get() {
      return _tooltip.default;
    }
  });
  Object.defineProperty(_exports, "ProgressIndicator", {
    enumerable: true,
    get: function get() {
      return _progressIndicator.default;
    }
  });
  Object.defineProperty(_exports, "FloatingMenu", {
    enumerable: true,
    get: function get() {
      return _floatingMenu.default;
    }
  });
  Object.defineProperty(_exports, "StructuredList", {
    enumerable: true,
    get: function get() {
      return _structuredList.default;
    }
  });
  Object.defineProperty(_exports, "Slider", {
    enumerable: true,
    get: function get() {
      return _slider.default;
    }
  });
  Object.defineProperty(_exports, "Tile", {
    enumerable: true,
    get: function get() {
      return _tile.default;
    }
  });
  Object.defineProperty(_exports, "Carousel", {
    enumerable: true,
    get: function get() {
      return _carousel.default;
    }
  });
  Object.defineProperty(_exports, "Lightbox", {
    enumerable: true,
    get: function get() {
      return _lightbox.default;
    }
  });
  Object.defineProperty(_exports, "CodeSnippet", {
    enumerable: true,
    get: function get() {
      return _codeSnippet.default;
    }
  });
  Object.defineProperty(_exports, "TextInput", {
    enumerable: true,
    get: function get() {
      return _textInput.default;
    }
  });
  Object.defineProperty(_exports, "SideNav", {
    enumerable: true,
    get: function get() {
      return _sideNav.default;
    }
  });
  Object.defineProperty(_exports, "HeaderSubmenu", {
    enumerable: true,
    get: function get() {
      return _headerSubmenu.default;
    }
  });
  Object.defineProperty(_exports, "HeaderNav", {
    enumerable: true,
    get: function get() {
      return _headerNav.default;
    }
  });
  Object.defineProperty(_exports, "NavigationMenu", {
    enumerable: true,
    get: function get() {
      return _navigationMenu.default;
    }
  });
  _checkbox = _interopRequireDefault(_checkbox);
  _fileUploader = _interopRequireDefault(_fileUploader);
  _fab = _interopRequireDefault(_fab);
  _contentSwitcher = _interopRequireDefault(_contentSwitcher);
  _tabs = _interopRequireDefault(_tabs);
  _overflowMenu = _interopRequireDefault(_overflowMenu);
  _modal = _interopRequireDefault(_modal);
  _loading = _interopRequireDefault(_loading);
  _inlineLoading = _interopRequireDefault(_inlineLoading);
  _dropdown = _interopRequireDefault(_dropdown);
  _numberInput = _interopRequireDefault(_numberInput);
  _dataTable = _interopRequireDefault(_dataTable);
  _dataTableV = _interopRequireDefault(_dataTableV);
  _datePicker = _interopRequireDefault(_datePicker);
  _leftNav = _interopRequireDefault(_leftNav);
  _profileSwitcher = _interopRequireDefault(_profileSwitcher);
  _pagination = _interopRequireDefault(_pagination);
  _search = _interopRequireDefault(_search);
  _accordion = _interopRequireDefault(_accordion);
  _copyButton = _interopRequireDefault(_copyButton);
  _notification = _interopRequireDefault(_notification);
  _toolbar = _interopRequireDefault(_toolbar);
  _tooltip = _interopRequireDefault(_tooltip);
  _progressIndicator = _interopRequireDefault(_progressIndicator);
  _floatingMenu = _interopRequireDefault(_floatingMenu);
  _structuredList = _interopRequireDefault(_structuredList);
  _slider = _interopRequireDefault(_slider);
  _tile = _interopRequireDefault(_tile);
  _carousel = _interopRequireDefault(_carousel);
  _lightbox = _interopRequireDefault(_lightbox);
  _codeSnippet = _interopRequireDefault(_codeSnippet);
  _textInput = _interopRequireDefault(_textInput);
  _sideNav = _interopRequireDefault(_sideNav);
  _headerSubmenu = _interopRequireDefault(_headerSubmenu);
  _headerNav = _interopRequireDefault(_headerNav);
  _navigationMenu = _interopRequireDefault(_navigationMenu);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});