export default Divider;
export type Props = {
    className: string;
    dashed: boolean;
    orientation: "left" | "right" | "center";
    plain: boolean;
    style: React.CSSProperties;
    type: "horizontal" | "vertical";
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {string} className
 * @prop {boolean} dashed
 * @prop {"left"| "right" | "center"} orientation
 * @prop {boolean} plain
 * @prop {React.CSSProperties} style
 * @prop {"horizontal" | "vertical"} type
 * @prop {JSX.Element} children
 * @returns {JSX.Element}
 */
/**
 * @param {Props} props
 */
declare function Divider({ className, dashed, orientation, plain, style, type, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map