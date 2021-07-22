import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @typedef Props
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const SkeletonImage = ({ children }) => {
  const props = {children};

  return (
    <AntdSkeleton.Image {...props}>{children}</AntdSkeleton.Image>
  );
};
export default SkeletonImage;
