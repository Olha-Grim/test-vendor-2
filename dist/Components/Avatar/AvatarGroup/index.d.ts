export default AvatarGroup;
export type Props = {
    maxCount: number;
    maxPopoverPlacement: "top" | "bottom";
    maxStyle: React.CSSProperties;
    size: number | "large" | "small" | "default" | {
        xs: number;
        sm: number;
    };
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {number} maxCount
 * @prop {"top" | "bottom"	} maxPopoverPlacement
 * @prop {React.CSSProperties} maxStyle
 * @prop {number | "large" | "small" | "default" | { xs: number, sm: number,}	} size
 * @prop {JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function AvatarGroup({ maxCount, maxPopoverPlacement, maxStyle, size, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map