export default StatisticCountdown;
export type Props = {
    format: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    title: React.ReactNode;
    value: string | number | undefined;
    valueStyle: React.CSSProperties;
    onFinish: () => void;
    onChange: (value?: string | number | undefined) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string}  format
 * @prop {React.ReactNode}  prefix
 * @prop {React.ReactNode}  suffix
 * @prop {React.ReactNode}  title
 * @prop {string | number | undefined}  value
 * @prop {React.CSSProperties}  valueStyle
 * @prop {() => void	}  onFinish
 * @prop {(value?: string | number | undefined) => void}  onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function StatisticCountdown({ format, prefix, suffix, title, value, valueStyle, onFinish, onChange, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map