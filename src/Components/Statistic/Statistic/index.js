import React from "react";
import { Statistic as AntdStatistic } from "antd";
/**
 * 
 * @typedef Props
 * @param {string} decimalSeparator
 * @param {(value) => React.ReactNode	} formatter
 * @param {string} groupSeparator
 * @param {boolean} loading
 * @param {number} precision
 * @param {React.ReactNode} prefix
 * @param {React.ReactNode} suffix
 * @param {React.ReactNode} title
 * @param {string | number	} value
 * @param {React.CSSProperties} valueStyle
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Statistic = ({
  decimalSeparator,
  children,
  suffix,
  title,
  value,
  valueStyle,
  formatter,
  groupSeparator,
  loading,
  precision,
  prefix,
}) => {
  const props = {
    decimalSeparator,
    children,
    suffix,
    title,
    value,
    valueStyle,
    formatter,
    groupSeparator,
    loading,
    precision,
    prefix,
  };

  return <AntdStatistic {...props}>{children}</AntdStatistic>;
};
export default Statistic;