export default Input;
export type Props = {
    addonAfter: React.ReactNode;
    addonBefore: React.ReactNode;
    allowClear: boolean;
    bordered: boolean;
    disabled: boolean;
    id: string;
    maxLength: number;
    prefix: React.ReactNode;
    size: "large" | "middle" | "small";
    suffix: React.ReactNode;
    type: string;
    value: string;
    onChange: (e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter: (e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue: string;
    className: string;
    placeholder: string;
    style: React.CSSProperties;
};
/**
 *
 * @typedef Props
 * @prop {React.ReactNode} addonAfter
 * @prop {React.ReactNode} addonBefore
 * @prop {boolean} allowClear
 * @prop {boolean} bordered
 * @prop {boolean} disabled
 * @prop {string} id
 * @prop {number} maxLength
 * @prop {React.ReactNode} prefix
 * @prop {"large" | "middle" | "small"} size
 * @prop {React.ReactNode} suffix
 * @prop {string} type
 * @prop {string} value
 * @prop {(e: React.KeyboardEvent<HTMLInputElement>| React.ChangeEvent<HTMLInputElement>)=> void} onChange
 * @prop {(e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>)=> void} onPressEnter
 * @prop {string} defaultValue
 * @prop {string} className
 * @prop {string} placeholder
 * @prop {React.CSSProperties} style
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Input({ addonAfter, addonBefore, allowClear, bordered, disabled, id, maxLength, prefix, size, suffix, type, value, onChange, onPressEnter, defaultValue, className, placeholder, style, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map