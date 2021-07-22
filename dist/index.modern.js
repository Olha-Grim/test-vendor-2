import React from 'react';
import { Affix as Affix$1, Alert as Alert$2, Anchor as Anchor$1, AutoComplete as AutoComplete$1, Avatar as Avatar$1, BackTop as BackTop$1, Badge as Badge$1, Space as Space$1, Button as Button$1, Divider as Divider$1, Typography, Input as Input$1 } from 'antd';
import 'antd/lib/input';
export { default as AntdCSS } from 'antd/dist/antd.css';

const Affix = ({
  offsetBottom,
  offsetTop,
  target,
  onChange,
  children
}) => {
  const props = {
    offsetBottom,
    offsetTop,
    target,
    onChange,
    children
  };
  return /*#__PURE__*/React.createElement(Affix$1, props, children);
};

const Alert = ({
  action,
  afterClose,
  banner,
  closable,
  closeText,
  description,
  icon,
  message,
  showIcon,
  type,
  onClose
}) => {
  const props = {
    action,
    afterClose,
    banner,
    closable,
    closeText,
    description,
    icon,
    message,
    showIcon,
    type,
    onClose
  };
  return /*#__PURE__*/React.createElement(Alert$2, props);
};

const Alert$1 = ({
  description,
  message
}) => {
  const props = {
    description,
    message
  };
  return /*#__PURE__*/React.createElement(Alert$2.ErrorBoundary, props);
};

const Anchor = ({
  affix,
  bounds,
  getContainer,
  getCurrentAnchor,
  offsetTop,
  showInkInFixed,
  targetOffset,
  onChange,
  onClick,
  children
}) => {
  const props = {
    affix,
    bounds,
    getContainer,
    getCurrentAnchor,
    offsetTop,
    showInkInFixed,
    targetOffset,
    onChange,
    onClick,
    children
  };
  return /*#__PURE__*/React.createElement(Anchor$1, props, children);
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

const AutoComplete = ({
  allowClear,
  className,
  autoFocus,
  backfill,
  children,
  defaultActiveFirstOption,
  defaultOpen,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  filterOption,
  notFoundContent,
  open,
  options,
  placeholder,
  value,
  onBlur,
  onChange,
  onDropdownVisibleChange,
  onFocus,
  onSearch,
  onSelect
}) => {
  const props = {
    allowClear,
    className,
    autoFocus,
    backfill,
    children,
    defaultActiveFirstOption,
    defaultOpen,
    defaultValue,
    disabled,
    dropdownClassName,
    dropdownMatchSelectWidth,
    filterOption,
    notFoundContent,
    open,
    options,
    placeholder,
    value,
    onBlur,
    onChange,
    onDropdownVisibleChange,
    onFocus,
    onSearch,
    onSelect
  };
  return /*#__PURE__*/React.createElement(AutoComplete$1, props, children);
};

const Avatar = ({
  alt,
  gap,
  icon,
  shape,
  size,
  src,
  srcSet,
  onError,
  children,
  style,
  className
}) => {
  const props = {
    alt,
    style,
    gap,
    icon,
    shape,
    size,
    src,
    srcSet,
    onError,
    children,
    className
  };
  return /*#__PURE__*/React.createElement(Avatar$1, props, children);
};

const AvatarGroup = ({
  maxCount,
  maxPopoverPlacement,
  maxStyle,
  size,
  children
}) => {
  const props = {
    maxCount,
    maxPopoverPlacement,
    maxStyle,
    size,
    children
  };
  return /*#__PURE__*/React.createElement(Avatar$1.Group, props, children);
};

const BackTop = ({
  duration,
  target,
  visibilityHeight,
  onClick,
  children
}) => {
  const props = {
    duration,
    target,
    visibilityHeight,
    onClick,
    children
  };
  return /*#__PURE__*/React.createElement(BackTop$1, props, children);
};

const Badge = ({
  color,
  count,
  dot,
  offset,
  overflowCount,
  showZero,
  size,
  status,
  text,
  title,
  children
}) => {
  const props = {
    color,
    count,
    dot,
    offset,
    overflowCount,
    showZero,
    size,
    status,
    text,
    title,
    children
  };
  return /*#__PURE__*/React.createElement(Badge$1, props, children);
};

const BadgeRibbon = ({
  color,
  children,
  placement,
  text
}) => {
  const props = {
    color,
    placement,
    text,
    children
  };
  return /*#__PURE__*/React.createElement(Badge$1.Ribbon, props, children);
};

const Space = ({
  align,
  direction,
  size,
  split,
  wrap,
  children
}) => {
  const props = {
    align,
    direction,
    size,
    split,
    wrap,
    children
  };
  return /*#__PURE__*/React.createElement(Space$1, props, children);
};

const Button = ({
  block,
  danger,
  disabled,
  ghost,
  href,
  htmlType,
  icon,
  loading,
  shape,
  size,
  target,
  type,
  onClick,
  className,
  children,
  style
}) => {
  const props = {
    block,
    danger,
    disabled,
    ghost,
    href,
    htmlType,
    icon,
    loading,
    shape,
    size,
    target,
    type,
    onClick,
    className,
    children,
    style
  };
  return /*#__PURE__*/React.createElement(Button$1, props, children);
};

const Divider = ({
  className,
  dashed,
  orientation,
  plain,
  style,
  type,
  children
}) => {
  const props = {
    className,
    dashed,
    orientation,
    plain,
    style,
    type,
    children
  };
  return /*#__PURE__*/React.createElement(Divider$1, props, children);
};

const Link = ({
  href,
  target,
  title,
  className,
  children
}) => {
  const props = {
    href,
    target,
    title,
    className,
    children
  };
  return /*#__PURE__*/React.createElement(Typography.Link, props, children);
};

const Input = ({
  addonAfter,
  addonBefore,
  allowClear,
  bordered,
  disabled,
  id,
  maxLength,
  prefix,
  size,
  suffix,
  type,
  value,
  onChange,
  onPressEnter,
  defaultValue,
  className,
  placeholder,
  style
}) => {
  const props = {
    addonAfter,
    addonBefore,
    allowClear,
    bordered,
    disabled,
    id,
    maxLength,
    prefix,
    size,
    suffix,
    type,
    value,
    onChange,
    onPressEnter,
    defaultValue,
    className,
    placeholder,
    style
  };
  return /*#__PURE__*/React.createElement(Input$1, props);
};

const InputGroup = ({
  compact,
  size,
  children
}) => {
  const props = {
    compact,
    size,
    children
  };
  return /*#__PURE__*/React.createElement(Input$1.Group, props, children);
};

const InputPassword = ({
  iconRender,
  visibilityToggle
}) => {
  const props = {
    iconRender,
    visibilityToggle
  };
  return /*#__PURE__*/React.createElement(Input$1.Password, props);
};

const InputSearch = ({
  enterButton,
  size,
  loading,
  onSearch,
  className,
  placeholder,
  style
}) => {
  const props = {
    enterButton,
    size,
    className,
    loading,
    onSearch,
    placeholder,
    style
  };
  return /*#__PURE__*/React.createElement(Input$1.Search, props);
};

const InputTextArea = ({
  allowClear,
  autoSize,
  bordered,
  defaultValue,
  maxLength,
  showCount,
  value,
  onResize,
  onPressEnter
}) => {
  const props = {
    allowClear,
    autoSize,
    bordered,
    defaultValue,
    maxLength,
    showCount,
    value,
    onResize,
    onPressEnter
  };
  return /*#__PURE__*/React.createElement(Input$1.TextArea, props);
};

export { Affix, Alert, Alert$1 as AlertErrorBoundary, Anchor, AutoComplete, Avatar, AvatarGroup, BackTop, Badge, BadgeRibbon, Button, Divider, Input, InputGroup, InputPassword, InputSearch, InputTextArea, Link, Space };
//# sourceMappingURL=index.modern.js.map
