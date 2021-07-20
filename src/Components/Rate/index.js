import React from "react";
import { Rate as AntdRate } from "antd";
/**
 *
 * @param {boolean} allowClear
 * @param {boolean} allowHalf
 * @param {boolean} autoFocus
 * @param {ReactNode | (RateProps) => ReactNode	} character
 * @param {string} className
 * @param {number} count
 * @param {number} defaultValue
 * @param {boolean} disabled
 * @param {CSSProperties} style
 * @param {string[]	} tooltips
 * @param {number} value
 * @param {function()} onBlur
 * @param {function(value: number)} onChange
 * @param {function()} onFocus
 * @param {function(value: number)} onHoverChange
 * @param {function(event)} onKeyDown
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Rate = ({
  onChange,
  onFocus,
  onHoverChange,
  onKeyDown,
  count,
  defaultValue,
  disabled,
  style,
  tooltips,
  value,
  onBlur,
  allowClear,
  allowHalf,
  autoFocus,
  character,
  className,
  children,
}) => {
  const props = {
    onChange,
    onFocus,
    onHoverChange,
    onKeyDown,
    count,
    defaultValue,
    disabled,
    style,
    tooltips,
    value,
    onBlur,
    allowClear,
    allowHalf,
    autoFocus,
    character,
    className,
    children,
  };

  return <AntdRate {...props}>{children}</AntdRate>;
};
export default Rate;
