import React from "react";
import { TimePicker as AntdTimePicker } from "antd";
/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} className
 * @prop {(currentDate: moment, today: moment) => React.ReactNode	} dateRender
 * @prop {boolean} disabled
 * @prop {(currentDate: moment) => boolean	} disabledDate
 * @prop {string} dropdownClassName
 * @prop {(trigger: any)=>void} getPopupContainer
 * @prop {boolean} inputReadOnly
 * @prop {object} locale
 * @prop {"time" | "date" | "month" | "year" | "decade"	} mode
 * @prop {boolean} open
 * @prop {(panelNode:any) => React.ReactNode	} panelRender
 * @prop {"date" | "week" | "month" | "quarter" | "year"	} picker
 * @prop {string | [string,string]	} placeholder
 * @prop {React.CSSProperties} popupStyle
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} suffixIcon
 * @prop {(open:any)=>void} onOpenChange
 * @prop {moment} defaultPickerValue
 * @prop {moment} defaultValue
 * @prop {(date:any)=>void} disabledTime
 * @prop {string | (value: moment) => string | (string | (value: moment) => string)[]	} format
 * @prop {(mode: any) => React.ReactNode} renderExtraFooter
 * @prop {boolean} showNow
 * @prop {moment} showTime.defaultValue
 * @prop {boolean} showToday
 * @prop {moment} value
 * @prop {()=>void} onChange
 * @prop {(value: any, mode:any)=>void} onPanelChange
 * @prop {boolean} order
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const TimePickerRangePicker = ({
  order,
  children,
  allowClear,
  autoFocus,
  bordered,
  className,
  dateRender,
  disabled,
  disabledDate,
  dropdownClassName,
  getPopupContainer,
  inputReadOnly,
  locale,
  mode,
  open,
  panelRender,
  picker,
  placeholder,
  popupStyle,
  size,
  style,
  suffixIcon,
  onOpenChange,
  onPanelChange,
  defaultPickerValue,
  defaultValue,
  disabledTime,
  format,
  renderExtraFooter,
  showNow,
  showToday,
  value,
  onChange,
}) => {
  const props = {
    order,
    children,
    allowClear,
    autoFocus,
    bordered,
    className,
    dateRender,
    disabled,
    disabledDate,
    dropdownClassName,
    getPopupContainer,
    inputReadOnly,
    locale,
    mode,
    open,
    panelRender,
    picker,
    placeholder,
    popupStyle,
    size,
    style,
    suffixIcon,
    onOpenChange,
    onPanelChange,
    defaultPickerValue,
    defaultValue,
    disabledTime,
    format,
    renderExtraFooter,
    showNow,
    showToday,
    value,
    onChange,
  };

  return <AntdTimePicker.RangePicker {...props}>{children}</AntdTimePicker.RangePicker>;
};
export default TimePickerRangePicker;
