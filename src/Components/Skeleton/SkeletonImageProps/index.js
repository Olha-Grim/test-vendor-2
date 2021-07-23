import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @typedef SkeletonImageProps
 * @prop {JSX.IntrinsicAttributes & SkeletonImageProps} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {SkeletonImageProps} props
 */
const SkeletonImage = ({ children }) => {
  const props = {children};

  return (
    <AntdSkeleton.Image {...props}>{children}</AntdSkeleton.Image>
  );
};
export default SkeletonImage;
