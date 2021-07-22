export default Descriptions;
export type Props = {
    bordered: boolean;
    colon: boolean;
    column: number;
    contentStyle: React.CSSProperties;
    extra: React.ReactNode;
    labelStyle: React.CSSProperties;
    layout: "horizontal" | "vertical";
    size: "default" | "middle" | "small";
    title: React.ReactNode;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} bordered
 * @prop {boolean} colon
 * @prop {number} column
 * @prop {React.CSSProperties} contentStyle
 * @prop {React.ReactNode} extra
 * @prop {React.CSSProperties} labelStyle
 * @prop {"horizontal" | "vertical"	} layout
 * @prop {"default" | "middle" | "small"	} size
 * @prop {React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Descriptions({ bordered, colon, children, column, contentStyle, extra, labelStyle, layout, size, title, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map