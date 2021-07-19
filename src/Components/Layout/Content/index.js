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

const Content = ({ className, hasSider, style, children }) => {
  const props = {
    className,
    hasSider,
    style,
    children,
  };

  return <AntdLayout.Content {...props}>{children}</AntdLayout.Content>;
};
export default Content;