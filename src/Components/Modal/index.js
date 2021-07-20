import React from "react";
import { Modal as AntdModal } from "antd";
/**
 * 
 * @typedef Props
 * @param {function} afterClose
 * @param {React.CSSProperties} bodyStyle
 * @param {ButtonProps} cancelButtonProps
 * @param {boolean} centered
 * @param {boolean} closable
 * @param {React.ReactNode} closeIcon
 * @param {boolean} confirmLoading
 * @param {boolean} destroyOnClose
 * @param {boolean} focusTriggerAfterClose
 * @param {React.ReactNode} footer
 * @param {boolean} forceRender
 * @param {HTMLElement | () => HTMLElement | Selectors | false	} getContainer
 * @param {boolean} keyboard
 * @param {boolean} mask
 * @param {boolean} maskClosable
 * @param {React.CSSProperties	} maskStyle
 * @param {(node: React.ReactNode) => React.ReactNode	} modalRender
 * @param {ButtonProps} okButtonProps
 * @param {React.ReactNode} okText
 * @param {string} okType
 * @param {React.CSSProperties} style
 * @param {React.ReactNode} title
 * @param {boolean} visible
 * @param {string | number	} width
 * @param {string} wrapClassName
 * @param {number} zIndex
 * @param {(e)=>void	} onCancel
 * @param {(e)=>void	} onOk
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Modal = ({
  afterClose,
  bodyStyle,
  cancelButtonProps,
  centered,
  closable,
  confirmLoading,
  destroyOnClose,
  focusTriggerAfterClose,
  footer,
  forceRender,
  getContainer,
  keyboard,
  mask,
  maskClosable,
  maskStyle,
  modalRender,
  okButtonProps,
  okText,
  okType,
  style,
  title,
  width,
  wrapClassName,
  zIndex,
  onCancel,
  onOk,
  children,
}) => {
  const props = {
    afterClose,
    bodyStyle,
    cancelButtonProps,
    centered,
    closable,
    confirmLoading,
    destroyOnClose,
    focusTriggerAfterClose,
    footer,
    forceRender,
    getContainer,
    keyboard,
    mask,
    maskClosable,
    maskStyle,
    modalRender,
    okButtonProps,
    okText,
    okType,
    style,
    title,
    width,
    wrapClassName,
    zIndex,
    onCancel,
    onOk,
    children,
  };

  return <AntdModal {...props}>{children}</AntdModal>;
};
export default Modal;
