import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @param {number | string	} width
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const SkeletonTitle = ({ width, children }) => {
  const props = { width, children };

  return <AntdSkeleton.Title {...props}>{children}</AntdSkeleton.Title>;
};
export default SkeletonTitle;
