import React from "react";
import { Icon as AntdCustomIcon } from "antd";
/**
 *
 * @typedef Props
 * @prop {React.ComponentType<CustomIconComponentProps>} component
 * @prop {number} rotate
 * @prop {boolean} spin
 * @prop {React.CSSProperties} style
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const CustomIcon = ({ component, rotate, spin, style }) => {
  const props = {component, rotate, spin, style};

  return <AntdCustomIcon {...props}/>
};
export default CustomIcon;