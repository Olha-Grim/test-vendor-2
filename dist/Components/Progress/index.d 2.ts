export default Progress;
export type Props = {
    format: (percent?: number | undefined, successPercent?: number | undefined) => React.ReactNode;
    percent: number;
    showInfo: boolean;
    status: "success" | "normal" | "exception" | "active" | undefined;
    strokeColor: string;
    strokeLinecap: "round" | "square";
    success: {
        percent: number;
        strokeColor: string;
    };
    trailColor: string;
    /**
     * * type="line"
     */
    type: "circle" | "line" | "dashboard" | undefined;
    steps: number;
    /**
     * * type="circle"
     */
    strokeWidth: number;
    /**
     * * type="dashboard"
     */
    width: number;
    gapDegree: number;
    gapPosition: "left" | "right" | "top" | "bottom" | undefined;
};
/**
 *
 * @typedef Props
 * @prop {(percent?: number, successPercent?: number) => React.ReactNode} format
 * @prop {number} percent
 * @prop {boolean} showInfo
 * @prop {"success" | "normal" | "exception" | "active" | undefined} status
 * @prop {string} strokeColor
 * @prop {"round" | "square"	} strokeLinecap
 * @prop {{ percent: number, strokeColor: string }	} success
 * @prop {string} trailColor
 * @prop {"circle" | "line" | "dashboard" | undefined} type
 * * type="line"
 * @prop {number} steps
 * @prop {string | { from: string; to: string; direction: string }	} strokeColor
 * @prop {number} strokeWidth
 * * type="circle"
 * @prop {string | object	} strokeColor
 * @prop {number} strokeWidth
 * @prop {number} width
 * * type="dashboard"
 * @prop {number} gapDegree
 * @prop {"left" | "right" | "top" | "bottom" | undefined} gapPosition
 * @prop {number} strokeWidth
 * @prop {number} width
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Progress({ format, percent, showInfo, status, strokeColor, strokeLinecap, success, trailColor, type, steps, strokeWidth, width, gapDegree, gapPosition, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map