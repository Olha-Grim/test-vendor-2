export default Timeline;
export type Props = {
    mode: "left" | "alternate" | "right";
    pending: boolean | React.ReactNode;
    pendingDot: React.ReactNode;
    reverse: boolean;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {"left" | "alternate" | "right"	} mode
 * @prop {boolean | React.ReactNode	} pending
 * @prop {React.ReactNode} pendingDot
 * @prop {boolean} reverse
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Timeline({ children, mode, pending, pendingDot, reverse }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map