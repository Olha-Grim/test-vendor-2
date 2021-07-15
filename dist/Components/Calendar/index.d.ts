export default Calendar;
export type Props = {
    dateCellRender: (date: typeof moment) => React.ReactNode;
    dateFullCellRender: (date: typeof moment) => React.ReactNode;
    defaultValue: typeof moment;
    disabledDate: (currentDate: typeof moment) => boolean;
    fullscreen: boolean;
    /**
     * //  *
     */
    headerRender: (object: {
        value: typeof moment;
        type: string;
        onChange: Function;
        onTypeChange: Function;
    }) => void;
    locale: object;
    mode: "month" | "year";
    monthCellRender: (date: typeof moment) => React.ReactNode;
    monthFullCellRender: (date: typeof moment) => React.ReactNode;
    validRange: [typeof moment, typeof moment];
    value: typeof moment;
    onChange: (date: typeof moment) => void;
    onPanelChange: (date: typeof moment, mode: string) => void;
    onSelect: (date: typeof moment) => void;
};
/**
 * @typedef Props
 * @prop {(date: typeof moment)=> React.ReactNode} dateCellRender
 * @prop {(date: typeof moment)=> React.ReactNode} dateFullCellRender
 * @prop {typeof moment} defaultValue
 * @prop {(currentDate: typeof moment) => boolean	} disabledDate
 * @prop {boolean} fullscreen
 * @prop {(object:{value: typeof moment, type: string, onChange: function, onTypeChange: function })=> void	} headerRender
//  * @prop {object} locale
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
declare function Calendar({ dateCellRender, dateFullCellRender, defaultValue, disabledDate, fullscreen, headerRender, mode, monthCellRender, validRange, value, onChange, onPanelChange, onSelect, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map