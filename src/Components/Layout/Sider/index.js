import React from "react";
import { Layout as AntdLayout } from "antd";

/**
 *
 * @param {xs | sm | md | lg | xl | xxl} breakpoint
 * @param {string} className
 * @param {boolean} collapsed
 * @param {number} collapsedWidth
 * @param {boolean} collapsible
 * @param {boolean} defaultCollapsed
 * @param {boolean} reverseArrow
 * @param {CSSProperties} style
 * @param {light | dark} theme
 * @param {ReactNode} trigger
 * @param {number | string} width
 * @param {object} zeroWidthTriggerStyle
 * @param {(broken) => {}} onBreakpoint
 * @param {(collapsed, type) => {}} onCollapse
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Sider = ({
  breakpoint,
  className,
  collapsed,
  collapsedWidth,
  collapsible,
  defaultCollapsed,
  reverseArrow,
  style,
  theme,
  trigger,
  width,
  zeroWidthTriggerStyle,
  onBreakpoint,
  onCollapse,
  children,
}) => {
  const props = {
    breakpoint,
    className,
    collapsed,
    collapsedWidth,
    collapsible,
    defaultCollapsed,
    reverseArrow,
    style,
    theme,
    trigger,
    width,
    zeroWidthTriggerStyle,
    onBreakpoint,
    onCollapse,
    children,
  };

  return <AntdLayout.Sider {...props}>{children}</AntdLayout.Sider>;
};
export default Sider;
