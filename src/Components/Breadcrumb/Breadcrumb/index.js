import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
/**
 * 
 * @typedef Props
 * @prop {(route, params, routes, paths) => React.ReactNode	} itemRender
 * @prop {object} params
 * @prop {routes[]} routes
 * @prop {React.ReactNode} separator
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Breadcrumb = ({ itemRender, params, routes, separator, children }) => {
  const props = { itemRender, params, routes, separator, children };

  return <AntdBreadcrumb {...props}>{children}</AntdBreadcrumb>;
};
export default Breadcrumb;

