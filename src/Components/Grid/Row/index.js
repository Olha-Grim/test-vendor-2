import React from "react";
import { Row as AntdRow } from "antd";
/**
 *
 * @typedef Props
 * @prop {number | object | array} align
 * @prop {number | object | []} gutter
 * @prop {"start" | "end" | "center" |"space-around" | "space-between"} justify
 * @prop {boolean} wrap
 * @prop {string} className
 * @prop {JSX.Element}children
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
