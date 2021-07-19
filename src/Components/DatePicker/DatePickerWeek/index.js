import React from "react";
import { DatePicker as AntdDatePicker } from "antd";
/**
 * @typedef Props
 * @prop {moment} defaultPickerValue
 * @prop {moment} defaultValue
 * @prop {string} format
 * @prop {(mode) => React.ReactNode} renderExtraFooter
 * @prop {moment} value
 * @prop {function(date: moment, dateString: string)} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const WeekPicker = ({
  defaultPickerValue,
  defaultValue,
  format,
  renderExtraFooter,
  value,
  onChange,
  children,
}) => {
  const props = {
    defaultPickerValue,
    defaultValue,
    format,
    renderExtraFooter,
    value,
    onChange,
    children,
  };

  return (
    <AntdDatePicker.WeekPicker {...props}>{children}</AntdDatePicker.WeekPicker>
  );
};
export default WeekPicker;
