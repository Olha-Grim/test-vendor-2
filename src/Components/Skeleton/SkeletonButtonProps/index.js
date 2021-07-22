import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @typedef Props
 * @prop {boolean} active
 * @prop {"circle" | "square"} shape
 * @prop {"large" | "small" | "default"} size
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const SkeletonButton = ({ active, shape, size, children }) => {
  const props = { active, shape, size, children };

  return <AntdSkeleton.Button {...props}>{children}</AntdSkeleton.Button>;
};
export default SkeletonButton;
