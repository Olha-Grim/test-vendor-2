import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @param {boolean} active
 * @param {circle | round | default	} shape
 * @param {large | small | default	} size
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const SkeletonButton = ({ active, shape, size, children }) => {
  const props = { active, shape, size, children };

  return <AntdSkeleton.Button {...props}>{children}</AntdSkeleton.Button>;
};
export default SkeletonButton;
