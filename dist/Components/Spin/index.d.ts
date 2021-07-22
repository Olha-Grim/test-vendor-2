export default Spin;
export type Props = {
    /**
     * (milliseconds)
     */
    delay: number;
    indicator: React.ReactElement<HTMLElement> | undefined;
    size: "small" | "default" | "large" | undefined;
    spinning: boolean;
    tip: string;
    wrapperClassName: string;
};
/**
 *
 * @typedef Props
 * @prop {number} delay (milliseconds)
 * @prop {React.ReactElement<HTMLElement> | undefined} indicator
 * @prop {"small" | "default" | "large" | undefined} size
 * @prop {boolean} spinning
 * @prop {string} tip
 * @prop {string} wrapperClassName
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Spin({ delay, indicator, size, spinning, tip, wrapperClassName }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map