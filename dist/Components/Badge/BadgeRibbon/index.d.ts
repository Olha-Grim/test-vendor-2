export default BadgeRibbon;
export type Props = {
    color: string;
    placement: "start" | "end";
    text: React.ReactNode;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} color
 * @prop {"start" | "end"	} placement
 * @prop {React.ReactNode} text
 * @prop {JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function BadgeRibbon({ color, children, placement, text }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map