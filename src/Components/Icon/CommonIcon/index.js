import React from "react";
import { Icon as AntdCommonIcon } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {number} rotate
 * @prop {boolean} spin
 * @prop {React.CSSProperties} style
 * @prop {string} twoToneColor
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const CommonIcon = ({ className, rotate, spin, style, twoToneColor }) => {
  const props = {className, rotate, spin, style, twoToneColor};

  return <AntdCommonIcon {...props}/>
};
export default CommonIcon;