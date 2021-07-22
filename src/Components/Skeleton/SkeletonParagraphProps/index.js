import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @typedef SkeletonParagraphProps
 * @prop {number} rows
 * @prop {number | string | Array<number | string>	} width
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {SkeletonParagraphProps} props
 */
const SkeletonParagraph = ({ rows, width, children }) => {
  const props = { rows, width, children };

  return <AntdSkeleton.Paragraph {...props}>{children}</AntdSkeleton.Paragraph>;
};
export default SkeletonParagraph;
