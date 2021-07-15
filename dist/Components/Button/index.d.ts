export default Button;
export type Props = {
    block: boolean;
    danger: boolean;
    disabled: boolean;
    ghost: boolean;
    href: string;
    htmlType: "button" | "submit" | "reset" | undefined;
    icon: React.ReactNode;
    loading: boolean | {
        delay: number;
    };
    shape: "circle" | "round";
    size: "large" | "middle" | "small";
    target: string;
    type: "ghost" | "dashed" | "link" | "text" | "default" | "primary" | undefined;
    onClick: () => void;
    className: string;
    style: React.CSSProperties;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} block
 * @prop {boolean} danger
 * @prop {boolean} disabled
 * @prop {boolean} ghost
 * @prop {string} href
 * @prop {"button" | "submit" | "reset" | undefined} htmlType
 * @prop {React.ReactNode} icon
 * @prop {boolean | { delay: number}}loading
 * @prop {"circle" | "round"} shape
 * @prop {"large" | "middle" | "small"} size
 * @prop {string} target
 * @prop {"ghost" | "dashed" | "link" | "text" | "default" | "primary" | undefined} type
 * @prop {()=> void} onClick
 * @prop {string} className
 * @prop {React.CSSProperties} style
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Button({ block, danger, disabled, ghost, href, htmlType, icon, loading, shape, size, target, type, onClick, className, children, style, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map