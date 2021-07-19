import React from "react";
import { DatePicker as AntdDatePicker } from "antd";
/**
 *
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


/**
 * @param {Props} props
 */


const QuarterPicker = ({
  defaultPickerValue,
  defaultValue,
  onChange,
  value,
  format,
  renderExtraFooter,
  children,
}) => {
  const props = {
    defaultPickerValue,
    defaultValue,
    onChange,
    value,
    format,
    renderExtraFooter,
    children,
  };

  return (
    <AntdDatePicker.QuarterPicker {...props}>
      {children}
    </AntdDatePicker.QuarterPicker>
  );
};
export default QuarterPicker;
