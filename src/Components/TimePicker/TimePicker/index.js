import React from "react";
import { TimePicker as AntdTimePicker } from "antd";
/**
 *
 * @param {boolean} autoFocus
 * @param {boolean} bordered
 * @param {string} className
 * @param {ReactNode} clearIcon
 * @param {string} clearText
 * @param {moment} defaultValue
 * @param {boolean} disabled
 * @param {function()	} disabledHours
 * @param {function(selectedHour)	} disabledMinutes
 * @param {function(selectedHour, selectedMinute)} disabledSeconds
 * @param {string} format
 * @param {boolean} allowClear
 * @param {function(trigger)	} getPopupContainer
 * @param {boolean} hideDisabledOptions
 * @param {number} hourStep
 * @param {boolean} inputReadOnly
 * @param {number} minuteStep
 * @param {boolean} open
 * @param {string | [string, string]} placeholder
 * @param {string} popupClassName
 * @param {CSSProperties} popupStyle
 * @param {() => ReactNode	} renderExtraFooter
 * @param {number} secondStep
 * @param {boolean} showNow
 * @param {ReactNode} suffixIcon
 * @param {boolean} use12Hours
 * @param {moment} value
 * @param {function(time: moment, timeString: string): void	} onChange
 * @param {(open: boolean) => void	} onOpenChange
 * @param {function(time: moment): void	} onSelect
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const TimePicker = ({
  autoFocus,
  bordered,
  className,
  clearIcon,
  clearText,
  defaultValue,
  disabled,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  format,
  allowClear,
  getPopupContainer,
  hideDisabledOptions,
  hourStep,
  inputReadOnly,
  minuteStep,
  open,
  placeholder,
  popupClassName,
  popupStyle,
  renderExtraFooter,
  secondStep,
  showNow,
  suffixIcon,
  use12Hours,
  value,
  onChange,
  onOpenChange,
  onSelect,
  children,
}) => {
  const props = {
    autoFocus,
    bordered,
    className,
    clearIcon,
    clearText,
    defaultValue,
    disabled,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    format,
    allowClear,
    getPopupContainer,
    hideDisabledOptions,
    hourStep,
    inputReadOnly,
    minuteStep,
    open,
    placeholder,
    popupClassName,
    popupStyle,
    renderExtraFooter,
    secondStep,
    showNow,
    suffixIcon,
    use12Hours,
    value,
    onChange,
    onOpenChange,
    onSelect,
    children,
  };

  return <AntdTimePicker {...props}>{children}</AntdTimePicker>;
};
export default TimePicker;
