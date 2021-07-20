import React from "react";
import { Slider as AntdSlider } from "antd";
/**
 *
 * @param {boolean} disabled
 * @param {boolean} dots
 * @param {(triggerNode) => HTMLElement	} getTooltipPopupContainer
 * @param {boolean} included
 * @param {object} marks
 * @param {number} max
 * @param {number} min
 * @param {boolean} range
 * @param {boolean} reverse
 * @param {number | null} step
 * @param {value => ReactNode | null} tipFormatter
 * @param {string} tooltipPlacement
 * @param {boolean} tooltipVisible
 * @param {number | [number, number]} value
 * @param {boolean} vertical
 * @param {(value) => void} onAfterChange
 * @param {(value) => void} onChange
 * @param children
 * @return {JSX.Element}
 * @constructor
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
