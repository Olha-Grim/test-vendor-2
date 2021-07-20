import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @param {boolean} active
 * @param {boolean | SkeletonAvatarProps} avatar
 * @param {boolean} loading
 * @param {boolean | SkeletonParagraphProps} paragraph
 * @param {boolean} round
 * @param {boolean | SkeletonTitleProps} title
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const Skeleton = ({
  active,
  avatar,
  loading,
  paragraph,
  round,
  title,
  children,
}) => {
  const props = { active, avatar, loading, paragraph, round, title, children };

  return <AntdSkeleton {...props}>{children}</AntdSkeleton>;
};
export default Skeleton;
