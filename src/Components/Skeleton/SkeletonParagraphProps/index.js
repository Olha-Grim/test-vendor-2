import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @typedef Props
 * @param {number} rows
 * @param {number | string | Array<number | string>	} width
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const SkeletonParagraph = ({ rows, width, children }) => {
  const props = { rows, width, children };

  return <AntdSkeleton.Paragraph {...props}>{children}</AntdSkeleton.Paragraph>;
};
export default SkeletonParagraph;
