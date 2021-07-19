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

const Layout = ({ className, hasSider, style, children }) => {
  const props = {
    className,
    hasSider,
    style,
    children,
  };

  return <AntdLayout {...props}>{children}</AntdLayout>;
};
export default Layout;
