import React from "react";
import { Menu as AntdMenu } from "antd";

/**
 *
 * @typedef Props
 * @prop {string} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const MenuDivider = ({ title, children }) => {
  const props = {
    title,
    children,
  };

  return <AntdMenu.Divider {...props}>{children}</AntdMenu.Divider>;
};
export default MenuDivider;
