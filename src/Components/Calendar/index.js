import React from "react";
import { Calendar as AntdCalendar } from "antd";
// import moment from "moment";

/**
 * @typedef Props
 * @prop {(date: typeof moment)=> React.ReactNode} dateCellRender
 * @prop {(date: typeof moment)=> React.ReactNode} dateFullCellRender
 * @prop {typeof moment} defaultValue
 * @prop {(currentDate: typeof moment) => boolean	} disabledDate
 * @prop {boolean} fullscreen
 * @prop {(object:{value: typeof moment, type: string, onChange: function, onTypeChange: function })=> void	} headerRender
 * @prop {object} locale
 * @prop {"month" | "year"} mode
 * @prop {(date: typeof moment)=>  React.ReactNode} monthCellRender
 * @prop {(date: typeof moment)=>  React.ReactNode} monthFullCellRender
 * @prop {[typeof moment, typeof moment]} validRange
 * @prop {typeof moment} value
 * @prop {(date: typeof moment)=> void} onChange
 * @prop {(date: typeof moment, mode: string)=> void	} onPanelChange
 * @prop {(date: typeof moment) => void} onSelect
 * @returns {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */
const Calendar = ({
  dateCellRender,
  dateFullCellRender,
  defaultValue,
  disabledDate,
  fullscreen,
  headerRender,
  // locale,
  mode,
  monthCellRender,
  validRange,
  value,
  onChange,
  onPanelChange,
  onSelect,
}) => {
  const props = {
    dateCellRender,
    dateFullCellRender,
    defaultValue,
    disabledDate,
    fullscreen,
    headerRender,
    // locale,
    mode,
    monthCellRender,
    validRange,
    value,
    onChange,
    onPanelChange,
    onSelect,
  };

  return <AntdCalendar {...props} />;
};
export default Calendar;
