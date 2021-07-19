import React from "react";
import { Checkbox as AntdCheckbox } from "antd";
//!
/**
 *
 * @typedef Props
 * @prop {string[]} defaultValue
 * @prop {boolean} disabled
 * @prop {string} name
 * @prop {string[] | Option[]} options
 * @prop {string[]} value
 * @prop {checkedValue: CheckboxValueType[]): void} onChange
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */ 

const CheckboxGroup = ({
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  onChange,
  children,
}) => {
  const props = {
    autoFocus,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    onChange,
    children,
  };
  return <AntdCheckbox.Group {...props}>{children}</AntdCheckbox.Group>;
};
export default CheckboxGroup;