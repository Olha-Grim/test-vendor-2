import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {Dropdown} dropdownProps
 * @prop {string} href
 * @prop {Menu | () => Menu} overlay
 * @prop {(e:MouseEvent) => void} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const BreadcrumbItem = ({
  className,
  dropdownProps,
  href,
  overlay,
  onClick,
  children,
}) => {
  const props = { className, dropdownProps, href, overlay, onClick, children };

  return <AntdBreadcrumb.Item {...props}>{children}</AntdBreadcrumb.Item>;
};
export default BreadcrumbItem;
