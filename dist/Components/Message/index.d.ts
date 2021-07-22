export default message;
export type Props = {
    className: string;
    content: React.ReactNode;
    duration: number;
    icon: React.ReactNode;
    key: string | number;
    style: React.CSSProperties;
    onClick: Function;
    onClose: Function;
};
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {React.ReactNode} content
 * @prop {number} duration
 * @prop {React.ReactNode} icon
 * @prop {string | number	} key
 * @prop {React.CSSProperties} style
 * @prop {function} onClick
 * @prop {function} onClose
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function message({ className, content, duration, icon, key, style, onClick, onClose, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map