import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @param {boolean} active
 * @param {large | small | default	} size
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const SkeletonInput = ({ active, size, children }) => {
  const props = { active, size, children };

  return <AntdSkeleton.Input {...props}>{children}</AntdSkeleton.Input>;
};
export default SkeletonInput;
