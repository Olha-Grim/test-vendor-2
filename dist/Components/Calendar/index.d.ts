export default Calendar;
export type Props = {
    dateCellRender: (date: typeof Moment) => React.ReactNode;
    dateFullCellRender: (date: typeof Moment) => React.ReactNode;
    defaultValue: typeof Moment;
    disabledDate: (date: typeof Moment) => boolean;
    fullscreen: boolean;
    headerRender: (object: {
        value: typeof Moment;
        type: string;
        onChange: Function;
        onTypeChange: Function;
    }) => void;
    locale: {
        lang: Locale & AdditionalPickerLocaleLangProps;
        timePickerLocale: Locale;
    };
    mode: "month" | "year";
    monthCellRender: (date: typeof Moment) => React.ReactNode;
    monthFullCellRender: (date: typeof Moment) => React.ReactNode;
    validRange: [typeof Moment, typeof Moment];
    value: typeof Moment;
    onChange: (date: typeof Moment) => void;
    onPanelChange: (date: typeof Moment, mode: string) => void;
    onSelect: (date: typeof Moment) => void;
};
/**
 * @typedef Props
 * @prop {(date: Moment)=> React.ReactNode} dateCellRender
 * @prop {(date: Moment)=> React.ReactNode} dateFullCellRender
 * @prop {typeof Moment} defaultValue
 * @prop {(date: Moment) => boolean} disabledDate
 * @prop {boolean} fullscreen
 * @prop {(object:{value: Moment, type: string, onChange: function, onTypeChange: function })=> void	} headerRender
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
import Moment from "moment";
import React from "react";
import { Locale } from "rc-picker/lib/interface";
import { AdditionalPickerLocaleLangProps } from "antd/es/date-picker/generatePicker";
//# sourceMappingURL=index.d.ts.map