import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @typedef Props
 * @prop {number | string	} width
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const SkeletonTitle = ({ width, children }) => {
  const props = { width, children };

  return <AntdSkeleton.Title {...props}>{children}</AntdSkeleton.Title>;
};
export default SkeletonTitle;
