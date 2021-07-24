export default Slider;
export type Props = {
    disabled: boolean;
    dots: boolean;
    getTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    included: boolean;
    marks: object;
    max: number;
    min: number;
    range: true | RangeProps;
    reverse: boolean;
    step: number | null;
    tipFormatter: ((value?: [number, number] | undefined) => React.ReactNode) | null;
    tooltipPlacement: string;
    tooltipVisible: boolean;
    value: number | [number, number] | undefined;
    vertical: boolean;
    onAfterChange: (value: [number, number] | undefined) => void;
    onChange: (value: [number, number] | undefined) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} disabled
 * @prop {boolean} dots
 * @prop {(triggerNode: HTMLElement) => HTMLElement} getTooltipPopupContainer
 * @prop {boolean} included
 * @prop {object} marks
 * @prop {number} max
 * @prop {number} min
 * @prop {true |  RangeProps} range
 * @prop {boolean} reverse
 * @prop {number | null} step
 * @prop {null | ((value?: [number, number] | undefined) => React.ReactNode)} tipFormatter
 * @prop {string} tooltipPlacement
 * @prop {boolean} tooltipVisible
 * @prop {number | [number, number] | undefined} value
 * @prop {boolean} vertical
 * @prop {(value: [number, number] | undefined) => void} onAfterChange
 * @prop {(value: [number, number] | undefined) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Slider({ disabled, dots, getTooltipPopupContainer, included, marks, max, min, range, reverse, step, tipFormatter, tooltipPlacement, tooltipVisible, value, vertical, onAfterChange, onChange, children, }: Props): JSX.Element;
import { RangeProps } from "rc-slider/lib/Range";
import React from "react";
//# sourceMappingURL=index.d.ts.map