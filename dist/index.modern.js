import React from 'react';
import { Divider as Divider$1, Button as Button$1, Avatar as Avatar$1, Affix as Affix$1, Anchor as Anchor$1, Alert as Alert$2, Badge as Badge$1, Typography } from 'antd';
export { default as AntdCSS } from 'antd/dist/antd.css';

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

export { Affix, Alert, Alert$1 as AlertErrorBoundary, Anchor, Avatar, AvatarGroup, Badge, Button, Divider, Link };
//# sourceMappingURL=index.modern.js.map
