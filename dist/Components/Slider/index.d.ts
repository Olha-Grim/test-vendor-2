export default Slider;
export type Props = {
    disabled: boolean;
    dots: boolean;
    getTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    included: boolean;
    marks: object;
    max: number;
    min: number;
    range: true | any;
    reverse: boolean;
    step: number | null;
    tipFormatter: ((value?: number | undefined) => React.ReactNode) | null;
    tooltipPlacement: string;
    tooltipVisible: boolean;
    value: number | [number, number];
    vertical: boolean;
    onAfterChange: (value: [number, number] | number) => void;
    onChange: (value: [number, number] | number) => void;
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
 * @prop {true | SliderRange} range
 * @prop {boolean} reverse
 * @prop {number | null} step
 * @prop {null | ((value?: number) => React.ReactNode)} tipFormatter
 * @prop {string} tooltipPlacement
 * @prop {boolean} tooltipVisible
 * @prop {number | [number, number]} value
 * @prop {boolean} vertical
 * @prop {(value: [number, number] | number) => void} onAfterChange
 * @prop {(value: [number, number] | number) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Slider({ disabled, dots, getTooltipPopupContainer, included, marks, max, min, range, reverse, step, tipFormatter, tooltipPlacement, tooltipVisible, value, vertical, onAfterChange, onChange, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map