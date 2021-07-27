export default Rate;
export type RateProps = {
    allowClear: boolean;
    allowHalf: boolean;
    autoFocus: boolean;
    character: React.ReactNode | ((arg0: RateProps) => React.ReactNode);
    className: string;
    count: number;
    defaultValue: number;
    disabled: boolean;
    style: React.CSSProperties;
    tooltips: string[];
    value: number;
    onBlur: () => void;
    onChange: (value: number) => void;
    onFocus: () => void;
    onHoverChange: (value: number) => void;
    onKeyDown: (Event | undefined);
    children: JSX.Element;
};
/**
 *
 * @typedef RateProps
 * @prop {boolean} allowClear
 * @prop {boolean} allowHalf
 * @prop {boolean} autoFocus
 * @prop {React.ReactNode | ((arg0: RateProps) => React.ReactNode)	} character
 * @prop {string} className
 * @prop {number} count
 * @prop {number} defaultValue
 * @prop {boolean} disabled
 * @prop {React.CSSProperties} style
 * @prop {string[]	} tooltips
 * @prop {number} value
 * @prop {()=>void} onBlur
 * @prop {(value: number)=>void} onChange
 * @prop {()=>void} onFocus
 * @prop {(value: number)=>void} onHoverChange
 * @prop {(event)} onKeyDown
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {RateProps} props
 */
declare function Rate({ onChange, onFocus, onHoverChange, onKeyDown, count, defaultValue, disabled, style, tooltips, value, onBlur, allowClear, allowHalf, autoFocus, character, className, children, }: RateProps): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map