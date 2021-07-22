import React from "react";
import { TimePicker as AntdTimePicker } from "antd";
/**
 *
 * @typedef Props
 * @param {boolean} allowClear
 * @param {boolean} autoFocus
 * @param {boolean} bordered
 * @param {string} className
 * @param {(currentDate: moment, today: moment) => React.ReactNode	} dateRender
 * @param {boolean} disabled
 * @param {(currentDate: moment) => boolean	} disabledDate
 * @param {string} dropdownClassName
 * @param {(trigger)=>void} getPopupContainer
 * @param {boolean} inputReadOnly
 * @param {object} locale
 * @param {"time" | "date" | "month" | "year" | "decade"	} mode
 * @param {boolean} open
 * @param {(panelNode) => React.ReactNode	} panelRender
 * @param {"date" | "week" | "month" | "quarter" | "year"	} picker
 * @param {string | [string,string]	} placeholder
 * @param {React.CSSProperties} popupStyle
 * @param {"large" | "middle" | "small"	} size
 * @param {React.CSSProperties} style
 * @param {React.ReactNode} suffixIcon
 * @param {(open)=>void)} onOpenChange
 * @param {function(value, mode)} onPanelChange
 * @param {moment} defaultPickerValue
 * @param {moment} defaultValue
 * @param {function(date)} disabledTime
 * @param {string | (value: moment) => string | (string | (value: moment) => string)[]	} format
 * @param {(mode) => React.ReactNode} renderExtraFooter
 * @param {boolean} showNow
 * @param {moment} showTime.defaultValue
 * @param {boolean} showToday
 * @param {moment} value
 * @param {()=>void} onChange
 * @param {(value, mode)=>void} onPanelChange
 * @param {boolean} order
 * @param children
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
