export default InputNumber;
export type Props = {
    autoFocus: boolean;
    bordered: boolean;
    decimalSeparator: string;
    defaultValue: number;
    disabled: boolean;
    formatter: (value: string | number | undefined) => string;
    keyboard: boolean;
    max: number;
    min: number;
    parser: (displayValue: string | undefined) => number;
    precision: number;
    readOnly: boolean;
    size: "large" | "middle" | "small";
    step: number | string;
    stringMode: boolean;
    value: number | undefined;
    onChange: (value: number | string | null) => void;
    onPressEnter: React.KeyboardEventHandler<HTMLInputElement>;
    onStep: (value: number, info: {
        offset: ValueType;
        type: "up" | "down";
    }) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} decimalSeparator
 * @prop {number} defaultValue
 * @prop {boolean} disabled
 * @prop {(value: string | number| undefined)=> string	} formatter
 * @prop {boolean} keyboard
 * @prop {number} max
 * @prop {number} min
 * @prop {(displayValue: string | undefined) => number} parser
 * @prop {number} precision
 * @prop {boolean} readOnly
 * @prop {"large" | "middle" | "small"	} size
 * @prop {number | string	} step
 * @prop { boolean} stringMode
 * @prop {number| undefined} value
 * @prop {(value: number | string | null) =>void	} onChange
 * @prop {React.KeyboardEventHandler<HTMLInputElement>} onPressEnter
 * @prop {(value: number, info: { offset: ValueType; type: "up" | "down"; }) => void} onStep
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function InputNumber({ autoFocus, bordered, decimalSeparator, defaultValue, disabled, formatter, keyboard, max, min, parser, precision, readOnly, size, step, stringMode, value, onChange, onPressEnter, onStep, children, }: Props): JSX.Element;
import React from "react";
import { ValueType } from "antd/lib/input-number";
//# sourceMappingURL=index.d.ts.map