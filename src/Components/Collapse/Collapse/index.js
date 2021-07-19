import React from "react";
import { Collapse as AntdCollapse } from "antd";
/**
 *
 * @param {boolean} accordion
 * @param {string[] | string number[] | number} activeKey
 * @param {boolean} bordered
 * @param {header | disabled} collapsible
 * @param {string[] | string number[] | number} defaultActiveKey
 * @param {boolean} destroyInactivePanel
 * @param {(panelProps) => ReactNode	} expandIcon
 * @param {left | right	} expandIconPosition
 * @param {boolean} ghost
 * @param {function} onChange
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Collapse = ({
  accordion,
  activeKey,
  bordered,
  collapsible,
  defaultActiveKey,
  destroyInactivePanel,
  expandIcon,
  expandIconPosition,
  ghost,
  onChange,
  children,
}) => {
  const props = {
    accordion,
    activeKey,
    bordered,
    collapsible,
    defaultActiveKey,
    destroyInactivePanel,
    expandIcon,
    expandIconPosition,
    ghost,
    onChange,
    children,
  };

  return <AntdCollapse {...props}>{children}</AntdCollapse>;
};
export default Collapse;
