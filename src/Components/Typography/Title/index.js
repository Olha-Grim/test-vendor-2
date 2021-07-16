import React from "react";
import { Typography as AntdTypography } from "antd";

/**
 * @typedef Props
 * @prop {boolean} code
 * @prop {boolean | "copyable"} copyable
 * @prop {boolean} delete
 * @prop {boolean} disabled
 * @prop {boolean | "editable"} editable
 * @prop {boolean | "ellipsis"} ellipsis
 * @prop { number: 1, 2, 3, 4, 5} level
 * @prop {boolean} mark
 * @prop {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} onClick
 * @prop {boolean} italic
 * @prop {"secondary" | "success" | "warning" | "danger"} type
 * @prop {boolean | undefined} underline
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Title = ({
  code,
  copyable,
  disabled,
  // delete,
  editable,
  ellipsis,
  level,
  mark,
  onClick,
  italic,
  type,
  underline,
  children,
}) => {
  const props = {
    code,
    copyable,
    disabled,
    // delete,
    editable,
    ellipsis,
    level,
    mark,
    onClick,
    italic,
    type,
    underline,
    children,
  };

  return <AntdTypography.Title {...props}>{children}</AntdTypography.Title>;
};
export default Title;
