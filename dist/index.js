function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var antd = require('antd');
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

exports.AntdCSS = antd_css;
exports.Affix = Affix;
exports.Alert = Alert;
exports.AlertErrorBoundary = Alert$1;
exports.Anchor = Anchor;
exports.Avatar = Avatar;
exports.AvatarGroup = AvatarGroup;
exports.BackTop = BackTop;
exports.Badge = Badge;
exports.BadgeRibbon = BadgeRibbon;
exports.Button = Button;
exports.Divider = Divider;
exports.Link = Link;
//# sourceMappingURL=index.js.map
