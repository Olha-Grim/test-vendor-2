export default Slider;
export type Props = {
    disabled: boolean;
    dots: boolean;
    getTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    included: boolean;
    marks: SliderMarks;
    max: number;
    min: number;
    range: true | RangeProps;
    reverse: boolean;
    step: number | null;
    tipFormatter: ((value?: number | undefined) => React.ReactNode) | null | undefined;
    tooltipPlacement: TooltipPlacement | undefined;
    tooltipVisible: boolean;
    value: [number, number] | undefined;
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
 * @prop {SliderMarks} marks
 * @prop {number} max
 * @prop {number} min
 * @prop {true |  RangeProps} range
 * @prop {boolean} reverse
 * @prop {number | null} step
 * @prop {((value?: number | undefined) => React.ReactNode) | null | undefined} tipFormatter
 * @prop {TooltipPlacement | undefined} tooltipPlacement
 * @prop {boolean} tooltipVisible
 * @prop {[number, number] | undefined} value
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
import { SliderMarks } from "antd/lib/slider";
import { RangeProps } from "rc-slider/lib/Range";
import React from "react";
import { TooltipPlacement } from "antd/lib/tooltip";
//# sourceMappingURL=index.d.ts.map