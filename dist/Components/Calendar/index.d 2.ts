export default Calendar;
export type Props = {
    dateCellRender: (date: Moment) => React.ReactNode;
    dateFullCellRender: (date: Moment) => React.ReactNode;
    defaultValue: Moment;
    disabledDate: (date: Moment) => boolean;
    fullscreen: boolean;
    headerRender: (object: {
        value: Moment;
        type: string;
        onChange: Function;
        onTypeChange: Function;
    }) => React.ReactNode;
    locale: {
        lang: Locale & AdditionalPickerLocaleLangProps;
        timePickerLocale: Locale;
    };
    mode: "month" | "year";
    monthCellRender: (date: Moment) => React.ReactNode;
    monthFullCellRender: (date: Moment) => React.ReactNode;
    validRange: [Moment, Moment];
    value: Moment;
    onChange: (date: Moment) => void;
    onPanelChange: (date: Moment, mode: string) => void;
    onSelect: (date: Moment) => void;
};
/**
 * @typedef Props
 * @prop {(date: Moment)=> React.ReactNode} dateCellRender
 * @prop {(date: Moment)=> React.ReactNode} dateFullCellRender
 * @prop { Moment} defaultValue
 * @prop {(date: Moment) => boolean} disabledDate
 * @prop {boolean} fullscreen
 * @prop {(object:{value: Moment, type: string, onChange: function, onTypeChange: function })=> React.ReactNode	} headerRender
 * @prop {{ lang: Locale & AdditionalPickerLocaleLangProps; timePickerLocale: TimePickerLocale; }} locale
 * @prop {"month" | "year"} mode
 * @prop {(date: Moment)=>  React.ReactNode} monthCellRender
 * @prop {(date: Moment)=>  React.ReactNode} monthFullCellRender
 * @prop {[Moment, Moment]} validRange
 * @prop {Moment} value
 * @prop {(date: Moment)=> void} onChange
 * @prop {(date: Moment, mode: string)=> void	} onPanelChange
 * @prop {(date: Moment) => void} onSelect
 * @returns {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Calendar({ dateCellRender, dateFullCellRender, defaultValue, disabledDate, fullscreen, headerRender, locale, mode, monthCellRender, validRange, value, onChange, onPanelChange, onSelect, }: Props): JSX.Element;
import { Moment } from "moment";
import React from "react";
import { Locale } from "rc-picker/lib/interface";
import { AdditionalPickerLocaleLangProps } from "antd/es/date-picker/generatePicker";
//# sourceMappingURL=index.d.ts.map