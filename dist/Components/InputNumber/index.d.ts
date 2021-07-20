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
    /**
     * : string | undefined) => number} parser
     */
    "": any;
    precision: number;
    readOnly: boolean;
    size: "large" | "middle" | "small";
    step: number | string;
    stringMode: boolean;
    value: number | undefined;
    onChange: (value: number | string | null) => void;
    onPressEnter: (value: number | string | null) => void;
    onStep: (value: number, info: {
        offset: number;
        type: 'up' | 'down';
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
 * @prop {displayValue: string | undefined) => number} parser
 * @prop {number} precision
 * @prop {boolean} readOnly
 * @prop {"large" | "middle" | "small"	} size
 * @prop {number | string	} step
 * @prop { boolean} stringMode
 * @prop {number| undefined} value
 * @prop {(value: number | string | null) =>void	} onChange
 * @prop {(value: number | string | null) =>void	} onPressEnter
 * @prop {(value: number, info: { offset: number, type: 'up' | 'down' }) => void	} onStep
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function InputNumber({ autoFocus, bordered, decimalSeparator, defaultValue, disabled, formatter, keyboard, max, min, parser, precision, readOnly, size, step, stringMode, value, onChange, onPressEnter, onStep, children, }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map