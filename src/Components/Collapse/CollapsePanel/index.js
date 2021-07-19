import React from "react";
import { Collapse as AntdCollapse } from "antd";

/**
 *
 * @param {header | disabled} collapsible
 * @param {ReactNode} extra
 * @param {boolean} forceRender
 * @param {ReactNode} header
 * @param {string | number} key
 * @param {boolean} showArrow
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const CollapsePanel = ({
  collapsible,
  extra,
  forceRender,
  header,
  key,
  showArrow,
  children,
}) => {
  const props = {
    collapsible,
    extra,
    forceRender,
    header,
    key,
    showArrow,
    children,
  };
  

  return <AntdCollapse.Panel {...props}>{children}</AntdCollapse.Panel>;
};
export default CollapsePanel;
