import React from "react";
import { Calendar as AntdCalendar } from "antd";

/**
 * @typedef Props
 * @prop {function(date: moment): React.ReactNode} dateCellRender
 * @prop {function(date: moment): React.ReactNode} dateFullCellRender
 * @prop {moment} defaultValue
 * @prop {(currentDate: moment) => boolean	} disabledDate
 * @prop {boolean} fullscreen
 * @prop {function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()})	} headerRender
 * @prop {object} locale
 * @prop {"month" | "year"	} mode
 * @prop {function(date: moment):  React.ReactNode} monthCellRender
 * @prop {function(date: moment):  React.ReactNode} monthFullCellRender
 * @prop {[moment, moment]} validRange
 * @prop {moment} value
 * @prop {function(date: moment）	} onChange
 * @prop {function(date: moment, mode: string)	} onPanelChange
 * @prop {function(date: moment）} onSelect
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
  locale,
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
    locale,
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
