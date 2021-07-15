export default Badge;
export type Props = {
    color: string;
    count: React.ReactNode;
    dot: boolean;
    offset: [number, number];
    overflowCount: number;
    showZero: boolean;
    size: "default" | "small";
    status: "success" | "processing" | "default" | "error" | "warning";
    text: React.ReactNode;
    title: string;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} color
 * @prop {React.ReactNode} count
 * @prop {boolean} dot
 * @prop {[number, number]	} offset
 * @prop {number} overflowCount
 * @prop {boolean} showZero
 * @prop {"default" | "small"	} size
 * @prop {"success" | "processing" | "default" | "error" | "warning"	} status
 * @prop {React.ReactNode} text
 * @prop {string} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Badge({ color, count, dot, offset, overflowCount, showZero, size, status, text, title, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map