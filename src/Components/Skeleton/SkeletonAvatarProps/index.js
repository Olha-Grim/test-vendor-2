import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @param {boolean} active
 * @param {circle | square	} shape
 * @param {number | large | small | default	} size
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const SkeletonAvatar = ({ active, shape, size, children }) => {
  const props = { active, shape, size, children };

  return <AntdSkeleton.Avatar {...props}>{children}</AntdSkeleton.Avatar>;
};
export default SkeletonAvatar;
