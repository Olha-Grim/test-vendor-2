import React from "react";
import { DatePicker as AntdDatePicker } from "antd";

/**
 * @typedef Props
 * @prop {moment} defaultPickerValue
 * @prop {moment} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {moment} value
 * @prop {function(date: moment, dateString: string)} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

const YearPicker = ({
  defaultPickerValue,
  defaultValue,
  format,
  renderExtraFooter,
  value,
  onChange,
  children
}) => {
  const props = {
    defaultPickerValue,
    defaultValue,
    format,
    renderExtraFooter,
    value,
    onChange,
    children
  };

  return (
    <AntdDatePicker.YearPicker {...props}>{children}</AntdDatePicker.YearPicker>
  );
};
export default YearPicker;
