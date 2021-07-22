export default RangePicker;
export type Props = {
    allowClear: boolean;
    autoFocus: boolean;
    bordered: boolean;
    className: string;
    dateRender: (currentDate: typeof Moment, today: typeof Moment) => React.ReactNode;
    disabled: boolean;
    disabledDate: (date: typeof Moment) => boolean;
    dropdownClassName: string;
    getPopupContainer: (trigger: any) => void;
    inputReadOnly: boolean;
    locale: object;
    mode: "time" | "date" | "month" | "year" | "decade";
    open: boolean;
    panelRender: (panelNode: any) => React.ReactNode;
    picker: "date" | "week" | "month" | "quarter" | "year";
    placeholder: string | [string, string];
    popupStyle: React.CSSProperties;
    size: "large" | "middle" | "small";
    style: React.CSSProperties;
    suffixIcon: React.ReactNode;
    onOpenChange: (open: any) => void;
    onPanelChange: (value: any, mode: any) => void;
    allowEmpty: [boolean, boolean];
    defaultPickerValue: [typeof Moment, typeof Moment];
    defaultValue: [typeof Moment, typeof Moment];
    disabledTime: (date: typeof Moment, partial: "start" | "end") => void;
    format: string | string[];
    ranges: {
        [range: string]: (typeof Moment)[];
    } | {
        [range: string]: () => (typeof Moment)[];
    };
    renderExtraFooter: () => React.ReactNode;
    separator: React.ReactNode;
    showTime: object | boolean;
    value: [typeof Moment, typeof Moment];
    onCalendarChange: (dates: [typeof Moment, typeof Moment], dateStrings: [string, string], info: {
        range: "start" | "end";
    }) => void;
    onChange: (dates: [typeof Moment, typeof Moment], dateStrings: [string, string]) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} className
 * @prop {(currentDate: Moment, today: Moment) => React.ReactNode	} dateRender
 * @prop {boolean} disabled
 * @prop {(date: Moment) => boolean} disabledDate
 * @prop {string} dropdownClassName
 * @prop {(trigger:any)=>void} getPopupContainer
 * @prop {boolean} inputReadOnly
 * @prop {object} locale
 * @prop {"time" | "date" | "month" | "year" | "decade"	} mode
 * @prop {boolean} open
 * @prop {(panelNode:any) => React.ReactNode	} panelRender
 * @prop {"date" | "week" | "month" | "quarter" | "year"	} picker
 * @prop {string | [string,string]	} placeholder
 * @prop {React.CSSProperties} popupStyle
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} suffixIcon
 * @prop {(open:any)=> void} onOpenChange
 * @prop {(value:any, mode:any)=>void} onPanelChange
 * @prop {[boolean, boolean]} allowEmpty
 * @prop {(currentDate: Moment | typeof moment, today: Moment, info: { range: "start" | "end" }) => React.ReactNode} dateRender
 * @prop {[Moment, Moment]} defaultPickerValue
 * @prop {[Moment, Moment]} defaultValue
 * @prop {[boolean, boolean]}  disabled
 * @prop {(date: Moment, partial: "start" | "end")=>void	} disabledTime
 * @prop {string | string[]} format
 * @prop {{ [range: string]: Moment[] } | { [range: string]: () => Moment[] }	}  ranges
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {React.ReactNode	} separator
 * @prop {object | boolean	} showTime
 * @prop {Moment[]} showTime.defaultValue
 * @prop {[Moment, Moment]} value
 * @prop {(dates: [Moment, Moment], dateStrings: [string, string], info: { range:"start"|"end" })=>void} onCalendarChange
 * @prop {(dates: [Moment, Moment], dateStrings: [string, string])=>void	} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function RangePicker({ allowClear, autoFocus, bordered, className, disabled, disabledDate, dropdownClassName, getPopupContainer, inputReadOnly, locale, mode, open, panelRender, picker, placeholder, popupStyle, size, style, suffixIcon, onOpenChange, onPanelChange, allowEmpty, dateRender, defaultPickerValue, defaultValue, disabledTime, format, ranges, renderExtraFooter, separator, showTime, value, onCalendarChange, onChange, children, }: Props): JSX.Element;
import Moment from "moment";
import React from "react";
//# sourceMappingURL=index.d.ts.map