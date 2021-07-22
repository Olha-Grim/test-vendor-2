import React from "react";
import { Slider as AntdSlider } from "antd";

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

const Slider = ({
  disabled,
  dots,
  getTooltipPopupContainer,
  included,
  marks,
  max,
  min,
  range,
  reverse,
  step,
  tipFormatter,
  tooltipPlacement,
  tooltipVisible,
  value,
  vertical,
  onAfterChange,
  onChange,
  children,
}) => {
  const props = {
    disabled,
    dots,
    getTooltipPopupContainer,
    included,
    marks,
    max,
    min,
    range,
    reverse,
    step,
    tipFormatter,
    tooltipPlacement,
    tooltipVisible,
    value,
    vertical,
    onAfterChange,
    onChange,
    children,
  };

  return <AntdSlider {...props}>{children}</AntdSlider>;
};
export default Slider;
