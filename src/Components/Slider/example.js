import React, { useState } from "react";
import Slider from ".";
import Switch from "../Switch";

const SliderExample = () => {
  const [disabled, setDisabled] = useState(false);
  const handleDisabledChange = (disabled) => {
    setDisabled(disabled);
  };
  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled:{" "}
      <div><Switch size="small" checked={disabled} onChange={handleDisabledChange} /></div>
    </>
  );
};
export default SliderExample;
