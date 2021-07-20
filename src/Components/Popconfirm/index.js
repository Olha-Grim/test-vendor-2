import React from "react";
import { Popconfirm as AntdPopconfirm } from "antd";

/**
 *
 * @typedef Props
 * @prop {ButtonProps} cancelButtonProps
 * @prop {string} cancelText
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {ButtonProps} okButtonProps
 * @prop {string} okText
 * @prop {string} okType
 * @prop {React.ReactNode | (() => React.ReactNode)} title
 * @prop {(e?: React.MouseEvent<HTMLElement>) => void} onCancel
 * @prop {(e?: React.MouseEvent<HTMLElement>) => void} onConfirm
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Popconfirm = ({
  cancelButtonProps,
  cancelText,
  disabled,
  icon,
  okButtonProps,
  okText,
  okType,
  title,
  onCancel,
  onConfirm,
  children,
}) => {
  const props = {
    cancelButtonProps,
    cancelText,
    disabled,
    icon,
    okButtonProps,
    okText,
    okType,
    title,
    onCancel,
    onConfirm,
    children,
  };

  return <AntdPopconfirm {...props}>{children}</AntdPopconfirm>;
};
export default Popconfirm;