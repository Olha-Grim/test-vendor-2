export default Sider;
export type Props = {
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    className: string;
    collapsed: boolean;
    collapsedWidth: number;
    collapsible: boolean;
    defaultCollapsed: boolean;
    reverseArrow: boolean;
    style: React.CSSProperties;
    theme: "light" | "dark";
    trigger: React.ReactNode;
    width: number | string;
    zeroWidthTriggerStyle: object;
    onBreakpoint: (broken: boolean) => void;
    onCollapse: (collapsed: boolean, type: 'clickTrigger' | 'responsive') => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} breakpoint
 * @prop {string} className
 * @prop {boolean} collapsed
 * @prop {number} collapsedWidth
 * @prop {boolean} collapsible
 * @prop {boolean} defaultCollapsed
 * @prop {boolean} reverseArrow
 * @prop {React.CSSProperties} style
 * @prop {"light" | "dark"} theme
 * @prop {React.ReactNode} trigger
 * @prop {number | string} width
 * @prop {object} zeroWidthTriggerStyle
 * @prop {(broken: boolean) => void} onBreakpoint
 * @prop {(collapsed: boolean, type: 'clickTrigger' | 'responsive' ) => void} onCollapse
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Sider({ breakpoint, className, collapsed, collapsedWidth, collapsible, defaultCollapsed, reverseArrow, style, theme, trigger, width, zeroWidthTriggerStyle, onBreakpoint, onCollapse, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map