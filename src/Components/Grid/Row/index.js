import React from "react";
import { Row as AntdRow } from "antd";
/**
 *
 * @typedef Props
 * @param {top | middle | bottom} align
 * @param {number | object | array} gutter
 * @param {start | end | center | space-around | space-between} justify
 * @param {boolean} wrap
 * @param {string} className
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Row = ({ children, align, gutter, justify, wrap, className }) => {
  const props = { children, align, gutter, justify, wrap, className };

  return <AntdRow {...props}>{children}</AntdRow>;
};
export default Row;
