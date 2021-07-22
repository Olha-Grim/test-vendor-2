import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @typedef Props
 * @prop {boolean} active
 * @prop {"large" | "small" | "default"} size
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const SkeletonInput = ({ active, size, children }) => {
  const props = { active, size, children };

  return <AntdSkeleton.Input {...props}>{children}</AntdSkeleton.Input>;
};
export default SkeletonInput;
