import React from "react";
import { DatePicker as AntdDatePicker } from "antd";
// import { Moment } from 'moment';
/**
 * @typedef Props
 * @prop {moment} defaultPickerValue
 * @prop {moment} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {moment} value
 * @prop {function(date: moment, dateString: string)} onChange
 * @prop {function(date, locale): React.ReactNode} monthCellRender
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const MonthPicker = ({
  defaultPickerValue,
  defaultValue,
  format,
  renderExtraFooter,
  monthCellRender,
  value,
  onChange,
  children,
}) => {
  const props = {
    defaultPickerValue,
    defaultValue,
    format,
    renderExtraFooter,
    monthCellRender,
    value,
    onChange,
    children,
  };

  return (
    <AntdDatePicker.MonthPicker {...props}>
      {children}
    </AntdDatePicker.MonthPicker>
  );
};
export default MonthPicker;
