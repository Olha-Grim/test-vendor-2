import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const SkeletonImage = ({ children }) => {
  const props = {children};

  return (
    <AntdSkeleton.Image {...props}>{children}</AntdSkeleton.Image>
  );
};
export default SkeletonImage;
