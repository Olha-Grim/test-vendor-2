import React from "react";
import { Layout as AntdLayout } from "antd";

/**
 *
 * @param {string} className
 * @param {boolean} hasSider
 * @param {CSSProperties} style
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Header = ({ className, hasSider, style, children }) => {
  const props = {
    className,
    hasSider,
    style,
    children,
  };

  return <AntdLayout.Header {...props}>{children}</AntdLayout.Header>;
};
export default Header;
