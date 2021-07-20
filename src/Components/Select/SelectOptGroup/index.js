import React from "react";
import { Select as AntdSelect } from "antd";
/**
 *
 * @param {string} key
 * @param {boolean} label
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const SelectOptGroup = ({ key, label, children }) => {
  const props = { key, label, children };

  return <AntdSelect.OptGroup {...props}>{children}</AntdSelect.OptGroup>;
};
export default SelectOptGroup;
