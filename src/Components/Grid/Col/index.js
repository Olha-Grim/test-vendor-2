import React from "react";
import { Col as AntdCol } from "antd";
/**
 *
 * @typedef Props
 * @param {string | number} flex
 * @param {number} offset
 * @param {number} order
 * @param {number} pull
 * @param {number} push
 * @param {number} span
 * @param {number | object} xs
 * @param {number | object} sm
 * @param {number | object} lg
 * @param {number | object} xl
 * @param {number | object} xxl
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Col = ({
  children,
  flex,
  offset,
  order,
  pull,
  push,
  span,
  xs,
  sm,
  lg,
  xl,
  xxl,
}) => {
  const props = {
    children,
    flex,
    offset,
    order,
    pull,
    push,
    span,
    xs,
    sm,
    lg,
    xl,
    xxl,
  };

  return <AntdCol {...props}>{children}</AntdCol>;
};
export default Col;
