export default Popconfirm;
export type Props = {
    cancelButtonProps: any;
    cancelText: string;
    disabled: boolean;
    icon: React.ReactNode;
    okButtonProps: any;
    okText: string;
    okType: string;
    title: React.ReactNode | (() => React.ReactNode);
    onCancel: (e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => void;
    onConfirm: (e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => void;
    children: JSX.Element;
};
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
declare function Popconfirm({ cancelButtonProps, cancelText, disabled, icon, okButtonProps, okText, okType, title, onCancel, onConfirm, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map