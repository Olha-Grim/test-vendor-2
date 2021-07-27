export default Popconfirm;
export type Props = {
    cancelButtonProps: ButtonProps;
    cancelText: string;
    disabled: boolean;
    icon: React.ReactNode;
    okButtonProps: ButtonProps;
    okText: string;
    okType: LegacyButtonType | undefined;
    title: string;
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
 * @prop {LegacyButtonType | undefined} okType
 * @prop {string} title
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
import { BaseButtonProps as ButtonProps } from "antd/lib/button/button";
import React from "react";
import { LegacyButtonType } from "antd/lib/button/button";
//# sourceMappingURL=index.d.ts.map