export default CollapsePanel;
export type Props = {
    collapsible: "header" | "disabled";
    extra: React.ReactNode;
    forceRender: boolean;
    header: React.ReactNode;
    key: string | number;
    showArrow: boolean;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {"header" | "disabled"} collapsible
 * @prop {React.ReactNode} extra
 * @prop {boolean} forceRender
 * @prop {React.ReactNode} header
 * @prop {string | number} key
 * @prop {boolean} showArrow
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function CollapsePanel({ collapsible, extra, forceRender, header, key, showArrow, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map