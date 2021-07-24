export default Space;
export type Props = {
    align: "start" | "end" | "center" | "baseline";
    direction: "vertical" | "horizontal";
    size: 'small' | 'middle' | 'large' | undefined | number | ['small' | 'middle' | 'large' | undefined | number, 'small' | 'middle' | 'large' | undefined | number];
    split: React.ReactNode;
    wrap: boolean;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {"start" | "end" | "center" |"baseline"} align
 * @prop {"vertical" | "horizontal"} direction
 * @prop {'small' | 'middle' | 'large' | undefined | number | ['small' | 'middle' | 'large' | undefined | number, 'small' | 'middle' | 'large' | undefined | number]} size
 * @prop {React.ReactNode} split
 * @prop {boolean} wrap
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Space({ align, direction, size, split, wrap, children }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map