import React from "react";
import { DatePicker as AntdDatePicker } from "antd";
/**
 * @typedef Props
 * @param {boolean} allowClear
 * @param {boolean} autoFocus
 * @param {boolean} bordered
 * @param {string} className
 * @param {function(currentDate: moment, today: moment) => React.ReactNode	} dateRender
 * @param {boolean} disabled
 * @param {(currentDate: moment) => boolean	} disabledDate
 * @param {string} dropdownClassName
 * @param {function(trigger)} getPopupContainer
 * @param {boolean} inputReadOnly
 * @param {object} locale
 * @param {time | date | month | year | decade	} mode
 * @param {boolean} open
 * @param {(panelNode) => ReactNode	} panelRender
 * @param {date | week | month | quarter | year	} picker
 * @param {string | [string,string]	} placeholder
 * @param {CSSProperties} popupStyle
 * @param {large | middle | small	} size
 * @param {CSSProperties} style
 * @param {ReactNode} suffixIcon
 * @param {function(open)} onOpenChange
 * @param {function(value, mode)} onPanelChange
 * @param {[boolean, boolean]} allowEmpty
 * @param {function(currentDate: moment, today: moment, info: { range: start | end }) => React.ReactNode} dateRender
 * @param {[moment, moment]} defaultPickerValue
 * @param {[moment, moment]} defaultValue
 * @param {[boolean, boolean]}  disabled
 * @param {function(date: moment, partial: start | end)	} disabledTime
 * @param {string | string[]} format
 * @param {{ [range: string]: moment[] } | { [range: string]: () => moment[] }	}  ranges
 * @param {() => React.ReactNode} renderExtraFooter
 * @param {React.ReactNode	} separator
 * @param {object | boolean	} showTime
 * @param {moment[]} showTime.defaultValue
 * @param {[moment, moment]} value
 * @param {function(dates: [moment, moment], dateStrings: [string, string], info: { range:start|end })} onCalendarChange
 * @param {function(dates: [moment, moment], dateStrings: [string, string])	} onChange
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const RangePicker = ({
  allowClear,
  autoFocus,
  bordered,
  className,
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
  allowEmpty,
  dateRender,
  defaultPickerValue,
  defaultValue,
  disabledTime,
  format,
  ranges,
  renderExtraFooter,
  separator,
  showTime,
  value,
  onCalendarChange,
  onChange,
  children,
}) => {
  const props = {
    allowClear,
    autoFocus,
    bordered,
    className,
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
    allowEmpty,
    dateRender,
    defaultPickerValue,
    defaultValue,

    disabledTime,
    format,
    ranges,
    renderExtraFooter,
    separator,
    showTime,
    value,
    onCalendarChange,
    onChange,
    children,
  };

  return (
    <AntdDatePicker.RangePicker {...props}>
      {children}
    </AntdDatePicker.RangePicker>
  );
};
export default RangePicker;
