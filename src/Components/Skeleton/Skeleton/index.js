import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @typedef Props
 * @prop {boolean} active
 * @prop {boolean | SkeletonAvatarProps} avatar
 * @prop {boolean} loading
 * @prop {boolean | SkeletonParagraphProps} paragraph
 * @prop {boolean} round
 * @prop {boolean | SkeletonTitleProps} title
 * @prop children
 * @return {JSX.Element} {JSX.Element}
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
