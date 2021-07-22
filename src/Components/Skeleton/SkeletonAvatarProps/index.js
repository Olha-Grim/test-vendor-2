import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 * @typedef SkeletonAvatarProps
 * @prop {boolean} active
 * @prop {"circle" | "square"	} shape
 * @prop {number | "large" | "small" | "default"	} size
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {SkeletonAvatarProps} props
 */
const SkeletonAvatar = ({ active, shape, size, children }) => {
  const props = { active, shape, size, children };

  return <AntdSkeleton.Avatar {...props}>{children}</AntdSkeleton.Avatar>;
};
export default SkeletonAvatar;
