export default notification;
export type Props = {
    bottom: number;
    btn: React.ReactNode;
    className: string;
    closeIcon: React.ReactNode;
    description: React.ReactNode;
    duration: number;
    getContainer: () => HTMLElement;
    icon: React.ReactNode;
    key: string;
    message: React.ReactNode;
    placement: string;
    style: React.CSSProperties;
    top: number;
    onClick: Function;
    onClose: Function;
};
/**
 *
 * @typedef Props
 * @prop {number} bottom
 * @prop {React.ReactNode} btn
 * @prop {string} className
 * @prop {React.ReactNode} closeIcon
 * @prop {React.ReactNode} description
 * @prop {number} duration
 * @prop {() => HTMLElement} getContainer
 * @prop {React.ReactNode} icon
 * @prop {string} key
 * @prop {React.ReactNode} message
 * @prop {string} placement
 * @prop {	React.CSSProperties} style
 * @prop {number} top
 * @prop {function} onClick
 * @prop {function} onClose
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function notification({ bottom, btn, className, closeIcon, description, duration, getContainer, icon, key, message, placement, style, top, onClick, onClose, }: Props): import("antd/lib/notification").NotificationApi;
import React from "react";
//# sourceMappingURL=index.d.ts.map