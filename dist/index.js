function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var antd = require('antd');
require('antd/lib/input');
require('antd/es/date-picker/generatePicker');
require('moment');
require('antd/lib/checkbox');
var antd_css = _interopDefault(require('antd/dist/antd.css'));

var Affix = function Affix(_ref) {
  var offsetBottom = _ref.offsetBottom,
      offsetTop = _ref.offsetTop,
      target = _ref.target,
      onChange = _ref.onChange,
      children = _ref.children;
  var props = {
    offsetBottom: offsetBottom,
    offsetTop: offsetTop,
    target: target,
    onChange: onChange,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Affix, props, children);
};

var Alert = function Alert(_ref) {
  var action = _ref.action,
      afterClose = _ref.afterClose,
      banner = _ref.banner,
      closable = _ref.closable,
      closeText = _ref.closeText,
      description = _ref.description,
      icon = _ref.icon,
      message = _ref.message,
      showIcon = _ref.showIcon,
      type = _ref.type,
      onClose = _ref.onClose;
  var props = {
    action: action,
    afterClose: afterClose,
    banner: banner,
    closable: closable,
    closeText: closeText,
    description: description,
    icon: icon,
    message: message,
    showIcon: showIcon,
    type: type,
    onClose: onClose
  };
  return /*#__PURE__*/React.createElement(antd.Alert, props);
};

var Alert$1 = function Alert(_ref) {
  var description = _ref.description,
      message = _ref.message;
  var props = {
    description: description,
    message: message
  };
  return /*#__PURE__*/React.createElement(antd.Alert.ErrorBoundary, props);
};

var Anchor = function Anchor(_ref) {
  var affix = _ref.affix,
      bounds = _ref.bounds,
      getContainer = _ref.getContainer,
      getCurrentAnchor = _ref.getCurrentAnchor,
      offsetTop = _ref.offsetTop,
      showInkInFixed = _ref.showInkInFixed,
      targetOffset = _ref.targetOffset,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      children = _ref.children;
  var props = {
    affix: affix,
    bounds: bounds,
    getContainer: getContainer,
    getCurrentAnchor: getCurrentAnchor,
    offsetTop: offsetTop,
    showInkInFixed: showInkInFixed,
    targetOffset: targetOffset,
    onChange: onChange,
    onClick: onClick,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Anchor, props, children);
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _interface = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
});

unwrapExports(_interface);

var generator = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INTERNAL_PROPS_MARK = void 0;
var INTERNAL_PROPS_MARK = 'RC_SELECT_INTERNAL_PROPS_MARK';
exports.INTERNAL_PROPS_MARK = INTERNAL_PROPS_MARK;
});

unwrapExports(generator);

var Option_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};

Option.isSelectOption = true;
var _default = Option;
exports.default = _default;
});

unwrapExports(Option_1);

var AutoComplete = function AutoComplete(_ref) {
  var allowClear = _ref.allowClear,
      className = _ref.className,
      autoFocus = _ref.autoFocus,
      backfill = _ref.backfill,
      children = _ref.children,
      defaultActiveFirstOption = _ref.defaultActiveFirstOption,
      defaultOpen = _ref.defaultOpen,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      dropdownClassName = _ref.dropdownClassName,
      dropdownMatchSelectWidth = _ref.dropdownMatchSelectWidth,
      filterOption = _ref.filterOption,
      notFoundContent = _ref.notFoundContent,
      open = _ref.open,
      options = _ref.options,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onDropdownVisibleChange = _ref.onDropdownVisibleChange,
      onFocus = _ref.onFocus,
      onSearch = _ref.onSearch,
      onSelect = _ref.onSelect;
  var props = {
    allowClear: allowClear,
    className: className,
    autoFocus: autoFocus,
    backfill: backfill,
    children: children,
    defaultActiveFirstOption: defaultActiveFirstOption,
    defaultOpen: defaultOpen,
    defaultValue: defaultValue,
    disabled: disabled,
    dropdownClassName: dropdownClassName,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    filterOption: filterOption,
    notFoundContent: notFoundContent,
    open: open,
    options: options,
    placeholder: placeholder,
    value: value,
    onBlur: onBlur,
    onChange: onChange,
    onDropdownVisibleChange: onDropdownVisibleChange,
    onFocus: onFocus,
    onSearch: onSearch,
    onSelect: onSelect
  };
  return /*#__PURE__*/React.createElement(antd.AutoComplete, props, children);
};

var Avatar = function Avatar(_ref) {
  var alt = _ref.alt,
      gap = _ref.gap,
      icon = _ref.icon,
      shape = _ref.shape,
      size = _ref.size,
      src = _ref.src,
      srcSet = _ref.srcSet,
      onError = _ref.onError,
      children = _ref.children,
      style = _ref.style,
      className = _ref.className;
  var props = {
    alt: alt,
    style: style,
    gap: gap,
    icon: icon,
    shape: shape,
    size: size,
    src: src,
    srcSet: srcSet,
    onError: onError,
    children: children,
    className: className
  };
  return /*#__PURE__*/React.createElement(antd.Avatar, props, children);
};

var AvatarGroup = function AvatarGroup(_ref) {
  var maxCount = _ref.maxCount,
      maxPopoverPlacement = _ref.maxPopoverPlacement,
      maxStyle = _ref.maxStyle,
      size = _ref.size,
      children = _ref.children;
  var props = {
    maxCount: maxCount,
    maxPopoverPlacement: maxPopoverPlacement,
    maxStyle: maxStyle,
    size: size,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Avatar.Group, props, children);
};

var BackTop = function BackTop(_ref) {
  var duration = _ref.duration,
      target = _ref.target,
      visibilityHeight = _ref.visibilityHeight,
      onClick = _ref.onClick,
      children = _ref.children;
  var props = {
    duration: duration,
    target: target,
    visibilityHeight: visibilityHeight,
    onClick: onClick,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.BackTop, props, children);
};

var Badge = function Badge(_ref) {
  var color = _ref.color,
      count = _ref.count,
      dot = _ref.dot,
      offset = _ref.offset,
      overflowCount = _ref.overflowCount,
      showZero = _ref.showZero,
      size = _ref.size,
      status = _ref.status,
      text = _ref.text,
      title = _ref.title,
      children = _ref.children;
  var props = {
    color: color,
    count: count,
    dot: dot,
    offset: offset,
    overflowCount: overflowCount,
    showZero: showZero,
    size: size,
    status: status,
    text: text,
    title: title,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Badge, props, children);
};

var BadgeRibbon = function BadgeRibbon(_ref) {
  var color = _ref.color,
      children = _ref.children,
      placement = _ref.placement,
      text = _ref.text;
  var props = {
    color: color,
    placement: placement,
    text: text,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Badge.Ribbon, props, children);
};

var Space = function Space(_ref) {
  var align = _ref.align,
      direction = _ref.direction,
      size = _ref.size,
      split = _ref.split,
      wrap = _ref.wrap,
      children = _ref.children;
  var props = {
    align: align,
    direction: direction,
    size: size,
    split: split,
    wrap: wrap,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Space, props, children);
};

var Breadcrumb = function Breadcrumb(_ref) {
  var itemRender = _ref.itemRender,
      params = _ref.params,
      routes = _ref.routes,
      separator = _ref.separator,
      children = _ref.children;
  var props = {
    itemRender: itemRender,
    params: params,
    routes: routes,
    separator: separator,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Breadcrumb, props, children);
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var className = _ref.className,
      dropdownProps = _ref.dropdownProps,
      href = _ref.href,
      overlay = _ref.overlay,
      onClick = _ref.onClick,
      children = _ref.children;
  var props = {
    className: className,
    dropdownProps: dropdownProps,
    href: href,
    overlay: overlay,
    onClick: onClick,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Breadcrumb.Item, props, children);
};

var Separator = function Separator(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var props = {
    className: className,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Breadcrumb.Separator, props, children);
};

var Button = function Button(_ref) {
  var block = _ref.block,
      danger = _ref.danger,
      disabled = _ref.disabled,
      ghost = _ref.ghost,
      href = _ref.href,
      htmlType = _ref.htmlType,
      icon = _ref.icon,
      loading = _ref.loading,
      shape = _ref.shape,
      size = _ref.size,
      target = _ref.target,
      type = _ref.type,
      onClick = _ref.onClick,
      className = _ref.className,
      children = _ref.children,
      style = _ref.style;
  var props = {
    block: block,
    danger: danger,
    disabled: disabled,
    ghost: ghost,
    href: href,
    htmlType: htmlType,
    icon: icon,
    loading: loading,
    shape: shape,
    size: size,
    target: target,
    type: type,
    onClick: onClick,
    className: className,
    children: children,
    style: style
  };
  return /*#__PURE__*/React.createElement(antd.Button, props, children);
};

var de_DE = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var locale = {
  locale: 'de_DE',
  today: 'Heute',
  now: 'Jetzt',
  backToToday: 'Zurück zu Heute',
  ok: 'OK',
  clear: 'Zurücksetzen',
  month: 'Monat',
  year: 'Jahr',
  timeSelect: 'Zeit wählen',
  dateSelect: 'Datum wählen',
  monthSelect: 'Wähle einen Monat',
  yearSelect: 'Wähle ein Jahr',
  decadeSelect: 'Wähle ein Jahrzehnt',
  yearFormat: 'YYYY',
  dateFormat: 'D.M.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D.M.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Vorheriger Monat (PageUp)',
  nextMonth: 'Nächster Monat (PageDown)',
  previousYear: 'Vorheriges Jahr (Ctrl + left)',
  nextYear: 'Nächstes Jahr (Ctrl + right)',
  previousDecade: 'Vorheriges Jahrzehnt',
  nextDecade: 'Nächstes Jahrzehnt',
  previousCentury: 'Vorheriges Jahrhundert',
  nextCentury: 'Nächstes Jahrhundert'
};
var _default = locale;
exports.default = _default;
});

unwrapExports(de_DE);

var _interface$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
});

unwrapExports(_interface$1);

var Calendar = function Calendar(_ref) {
  var dateCellRender = _ref.dateCellRender,
      dateFullCellRender = _ref.dateFullCellRender,
      defaultValue = _ref.defaultValue,
      disabledDate = _ref.disabledDate,
      fullscreen = _ref.fullscreen,
      headerRender = _ref.headerRender,
      locale = _ref.locale,
      mode = _ref.mode,
      monthCellRender = _ref.monthCellRender,
      validRange = _ref.validRange,
      value = _ref.value,
      onChange = _ref.onChange,
      onPanelChange = _ref.onPanelChange,
      onSelect = _ref.onSelect;
  var props = {
    dateCellRender: dateCellRender,
    dateFullCellRender: dateFullCellRender,
    defaultValue: defaultValue,
    disabledDate: disabledDate,
    fullscreen: fullscreen,
    headerRender: headerRender,
    locale: locale,
    mode: mode,
    monthCellRender: monthCellRender,
    validRange: validRange,
    value: value,
    onChange: onChange,
    onPanelChange: onPanelChange,
    onSelect: onSelect
  };
  return /*#__PURE__*/React.createElement(antd.Calendar, props);
};

var Divider = function Divider(_ref) {
  var className = _ref.className,
      dashed = _ref.dashed,
      orientation = _ref.orientation,
      plain = _ref.plain,
      style = _ref.style,
      type = _ref.type,
      children = _ref.children;
  var props = {
    className: className,
    dashed: dashed,
    orientation: orientation,
    plain: plain,
    style: style,
    type: type,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Divider, props, children);
};

var Link = function Link(_ref) {
  var href = _ref.href,
      target = _ref.target,
      title = _ref.title,
      className = _ref.className,
      children = _ref.children;
  var props = {
    href: href,
    target: target,
    title: title,
    className: className,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Typography.Link, props, children);
};

var CheckboxGroup = function CheckboxGroup(_ref) {
  var defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      name = _ref.name,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange,
      children = _ref.children;
  var props = {
    defaultValue: defaultValue,
    disabled: disabled,
    name: name,
    options: options,
    value: value,
    onChange: onChange,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Checkbox.Group, props, children);
};

var Checkbox = function Checkbox(_ref) {
  var autoFocus = _ref.autoFocus,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      indeterminate = _ref.indeterminate,
      onChange = _ref.onChange,
      children = _ref.children;
  var props = {
    autoFocus: autoFocus,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    indeterminate: indeterminate,
    onChange: onChange,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Checkbox, props, children);
};

var Input = function Input(_ref) {
  var addonAfter = _ref.addonAfter,
      addonBefore = _ref.addonBefore,
      allowClear = _ref.allowClear,
      bordered = _ref.bordered,
      disabled = _ref.disabled,
      id = _ref.id,
      maxLength = _ref.maxLength,
      prefix = _ref.prefix,
      size = _ref.size,
      suffix = _ref.suffix,
      type = _ref.type,
      value = _ref.value,
      onChange = _ref.onChange,
      onPressEnter = _ref.onPressEnter,
      defaultValue = _ref.defaultValue,
      className = _ref.className,
      placeholder = _ref.placeholder,
      style = _ref.style;
  var props = {
    addonAfter: addonAfter,
    addonBefore: addonBefore,
    allowClear: allowClear,
    bordered: bordered,
    disabled: disabled,
    id: id,
    maxLength: maxLength,
    prefix: prefix,
    size: size,
    suffix: suffix,
    type: type,
    value: value,
    onChange: onChange,
    onPressEnter: onPressEnter,
    defaultValue: defaultValue,
    className: className,
    placeholder: placeholder,
    style: style
  };
  return /*#__PURE__*/React.createElement(antd.Input, props);
};

var InputGroup = function InputGroup(_ref) {
  var compact = _ref.compact,
      size = _ref.size,
      children = _ref.children;
  var props = {
    compact: compact,
    size: size,
    children: children
  };
  return /*#__PURE__*/React.createElement(antd.Input.Group, props, children);
};

var InputPassword = function InputPassword(_ref) {
  var iconRender = _ref.iconRender,
      visibilityToggle = _ref.visibilityToggle;
  var props = {
    iconRender: iconRender,
    visibilityToggle: visibilityToggle
  };
  return /*#__PURE__*/React.createElement(antd.Input.Password, props);
};

var InputSearch = function InputSearch(_ref) {
  var enterButton = _ref.enterButton,
      size = _ref.size,
      loading = _ref.loading,
      onSearch = _ref.onSearch,
      className = _ref.className,
      placeholder = _ref.placeholder,
      style = _ref.style;
  var props = {
    enterButton: enterButton,
    size: size,
    className: className,
    loading: loading,
    onSearch: onSearch,
    placeholder: placeholder,
    style: style
  };
  return /*#__PURE__*/React.createElement(antd.Input.Search, props);
};

var InputTextArea = function InputTextArea(_ref) {
  var allowClear = _ref.allowClear,
      autoSize = _ref.autoSize,
      bordered = _ref.bordered,
      defaultValue = _ref.defaultValue,
      maxLength = _ref.maxLength,
      showCount = _ref.showCount,
      value = _ref.value,
      onResize = _ref.onResize,
      onPressEnter = _ref.onPressEnter;
  var props = {
    allowClear: allowClear,
    autoSize: autoSize,
    bordered: bordered,
    defaultValue: defaultValue,
    maxLength: maxLength,
    showCount: showCount,
    value: value,
    onResize: onResize,
    onPressEnter: onPressEnter
  };
  return /*#__PURE__*/React.createElement(antd.Input.TextArea, props);
};

exports.AntdCSS = antd_css;
exports.Affix = Affix;
exports.Alert = Alert;
exports.AlertErrorBoundary = Alert$1;
exports.Anchor = Anchor;
exports.AutoComplete = AutoComplete;
exports.Avatar = Avatar;
exports.AvatarGroup = AvatarGroup;
exports.BackTop = BackTop;
exports.Badge = Badge;
exports.BadgeRibbon = BadgeRibbon;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.Divider = Divider;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.InputPassword = InputPassword;
exports.InputSearch = InputSearch;
exports.InputTextArea = InputTextArea;
exports.Link = Link;
exports.Separator = Separator;
exports.Space = Space;
//# sourceMappingURL=index.js.map
