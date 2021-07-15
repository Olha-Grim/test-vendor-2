import React from "react";
import { Button as AntdButton } from "antd";
/**
 *
 * @typedef Props
 * @prop {boolean} block
 * @prop {boolean} danger
 * @prop {boolean} disabled
 * @prop {boolean} ghost
 * @prop {string} href
 * @prop {string} htmlType
 * @prop {React.ReactNode} icon
 * @prop {boolean | { delay: number}}loading
 * @prop {"circle" | "round"} shape
 * @prop {"large" | "middle" | "small"} size
 * @prop {string} target
 * @prop {string} type
 * @prop {()=> void} onClick
 * @prop {string} className
 * @prop {React.CSSProperties} style
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */
const Button = ({
  block,
  danger,
  disabled,
  ghost,
  href,
  htmlType,
  icon,
  loading,
  shape,
  size,
  target,
  type,
  onClick,
  className,
  children,
  style,
}) => {
  const props = {
    block,
    danger,
    disabled,
    ghost,
    href,
    htmlType,
    icon,
    loading,
    shape,
    size,
    target,
    type,
    onClick,
    className,
    children,
    style,
  };

  return <AntdButton {...props}>{children}</AntdButton>;
};
export default Button;
