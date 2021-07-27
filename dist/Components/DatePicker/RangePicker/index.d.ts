export default RangePicker;
export type Props = {
    allowClear: boolean;
    autoFocus: boolean;
    bordered: boolean;
    className: string;
    dateRender: (currentDate: Moment, today: Moment) => React.ReactNode;
    disabled: boolean;
    disabledDate: (date: Moment | null) => boolean;
    dropdownClassName: string;
    getPopupContainer: (trigger: any) => HTMLElement;
    inputReadOnly: boolean;
    locale: {
        lang: Locale & AdditionalPickerLocaleLangProps;
        timePickerLocale: Locale;
    };
    mode: [PanelMode, PanelMode] | undefined;
    open: boolean;
    panelRender: (panelNode: any) => React.ReactNode;
    picker: "date" | undefined;
    placeholder: [string, string] | undefined;
    popupStyle: React.CSSProperties;
    size: "large" | "middle" | "small";
    style: React.CSSProperties;
    suffixIcon: React.ReactNode;
    onOpenChange: (open: any) => void;
    onPanelChange: (value: any, mode: any) => void;
    allowEmpty: [boolean, boolean];
    defaultPickerValue: [Moment, Moment];
    defaultValue: [Moment, Moment];
    disabledTime: (date: EventValue<Moment>, type: RangeType) => DisabledTimes;
    format: string | string[];
    ranges: Record<string, [EventValue<Moment>, EventValue<Moment>] | (() => [EventValue<Moment>, EventValue<Moment>])>;
    renderExtraFooter: () => React.ReactNode;
    separator: React.ReactNode;
    showTime: object | boolean;
    value: [Moment | null, Moment | null];
    onCalendarChange: (values: RangeValue<Moment>, formatString: [string, string], info: RangeInfo) => void;
    onChange: (values: RangeValue<Moment>, formatString: [string, string]) => void;
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
 * @prop {(date: Moment | null) => boolean} disabledDate
 * @prop {string} dropdownClassName
 * @prop {(trigger:any)=> HTMLElement} getPopupContainer
 * @prop {boolean} inputReadOnly
 * @prop {{ lang: Locale & AdditionalPickerLocaleLangProps; timePickerLocale: TimePickerLocale; }} locale
 * @prop {[PanelMode, PanelMode] | undefined} mode
 * @prop {boolean} open
 * @prop {(panelNode:any) => React.ReactNode	} panelRender
 * @prop {"date" | undefined	} picker
 * @prop {[string, string] | undefined} placeholder
 * @prop {React.CSSProperties} popupStyle
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} suffixIcon
 * @prop {(open:any)=> void} onOpenChange
 * @prop {(value:any, mode:any)=>void} onPanelChange
 * @prop {[boolean, boolean]} allowEmpty
 * @prop {(currentDate: Moment , today: Moment , info: { range: "start" | "end" }) => React.ReactNode} dateRender
 * @prop {[Moment, Moment]} defaultPickerValue
 * @prop {[Moment, Moment]} defaultValue
 * @prop {[boolean, boolean]}  disabled
 * @prop {(date: EventValue<Moment>, type: RangeType) => DisabledTimes} disabledTime
 * @prop {string | string[]} format
 * @prop {Record<string, [EventValue<Moment>, EventValue<Moment>] | (() => [EventValue<Moment>, EventValue<Moment>])>}  ranges
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {React.ReactNode	} separator
 * @prop {object | boolean	} showTime
 * @prop {Moment[]| null} showTime.defaultValue
 * @prop {[Moment | null, Moment | null]} value
 * @prop {(values: RangeValue<Moment>, formatString: [string, string], info: RangeInfo) => void} onCalendarChange
 * @prop {(values: RangeValue<Moment>, formatString: [string, string]) => void	} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function RangePicker({ allowClear, autoFocus, bordered, className, disabled, disabledDate, dropdownClassName, getPopupContainer, inputReadOnly, locale, mode, open, panelRender, picker, placeholder, popupStyle, size, style, suffixIcon, onOpenChange, onPanelChange, allowEmpty, dateRender, defaultPickerValue, defaultValue, disabledTime, format, ranges, renderExtraFooter, separator, showTime, value, onCalendarChange, onChange, children, }: Props): JSX.Element;
import { Moment } from "moment";
import React from "react";
import { Locale } from "rc-picker/lib/interface";
import { AdditionalPickerLocaleLangProps } from "antd/es/date-picker/generatePicker";
import { PanelMode } from "rc-picker/lib/interface";
import { EventValue } from "rc-picker/lib/interface";
import { RangeType } from "rc-picker/lib/RangePicker";
import { DisabledTimes } from "rc-picker/lib/interface";
import { RangeValue } from "rc-picker/lib/interface";
import { RangeInfo } from "rc-picker/lib/RangePicker";
//# sourceMappingURL=index.d.ts.map