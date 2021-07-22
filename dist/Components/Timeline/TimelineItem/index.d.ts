export default TimelineItem;
export type Props = {
    color: string;
    dot: React.ReactNode;
    label: React.ReactNode;
    position: "left" | "right";
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} color
 * @prop {React.ReactNode} dot
 * @prop {React.ReactNode} label
 * @prop {"left" | "right"	} position
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function TimelineItem({ children, color, dot, label, position }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map