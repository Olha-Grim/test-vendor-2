import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
/**
 *
 * @param {number} rows
 * @param {number | string | Array<number | string>	} width
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const SkeletonParagraph = ({ rows, width, children }) => {
  const props = { rows, width, children };

  return <AntdSkeleton.Paragraph {...props}>{children}</AntdSkeleton.Paragraph>;
};
export default SkeletonParagraph;
