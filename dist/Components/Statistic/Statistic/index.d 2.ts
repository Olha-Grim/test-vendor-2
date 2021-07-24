export default Statistic;
export type Props = {
    decimalSeparator: string;
    formatter: (value: any) => React.ReactNode;
    groupSeparator: string;
    loading: boolean;
    precision: number;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    title: React.ReactNode;
    value: string | number;
    valueStyle: React.CSSProperties;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} decimalSeparator
 * @prop {(value:any) => React.ReactNode	} formatter
 * @prop {string} groupSeparator
 * @prop {boolean} loading
 * @prop {number} precision
 * @prop {React.ReactNode} prefix
 * @prop {React.ReactNode} suffix
 * @prop {React.ReactNode} title
 * @prop {string | number	} value
 * @prop {React.CSSProperties} valueStyle
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Statistic({ decimalSeparator, children, suffix, title, value, valueStyle, formatter, groupSeparator, loading, precision, prefix, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map