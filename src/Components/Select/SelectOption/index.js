import React from "react";
import { Select as AntdSelect } from "antd";
/**
 *
 * @param {string} className
 * @param {boolean} disabled
 * @param {string} title
 * @param {string | number} value
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const SelectOption = ({ className, disabled, title, value, children }) => {
  const props = { className, disabled, title, value, children };

  return <AntdSelect.Option {...props}>{children}</AntdSelect.Option>;
};
export default SelectOption;
