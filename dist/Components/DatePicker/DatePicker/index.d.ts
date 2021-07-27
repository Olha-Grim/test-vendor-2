export default DatePicker;
export type Props = {
    allowClear: boolean;
    autoFocus: boolean;
    bordered: boolean;
    className: string;
    dateRender: (currentDate: Moment, today: Moment) => React.ReactNode;
    disabled: boolean;
    disabledDate: (currentDate: Moment) => boolean;
    dropdownClassName: string;
    getPopupContainer: (trigger: any) => HTMLElement;
    inputReadOnly: boolean;
    locale: {
        lang: Locale & AdditionalPickerLocaleLangProps;
        timePickerLocale: Locale;
    };
    mode: "time" | "date" | "month" | "year" | "decade";
    open: boolean;
    panelRender: (panelNode: any) => React.ReactNode;
    picker: "date" | undefined;
    placeholder: string;
    popupStyle: React.CSSProperties;
    size: "large" | "middle" | "small";
    style: React.CSSProperties;
    suffixIcon: React.ReactNode;
    onOpenChange: (open: any) => void;
    onPanelChange: (value: any, mode: any) => void;
    defaultPickerValue: Moment;
    defaultValue: Moment;
    disabledTime: (date: any) => DisabledTimes;
    format: string | CustomFormat<Moment> | (string | CustomFormat<Moment>)[] | undefined;
    renderExtraFooter: (mode: any) => React.ReactNode;
    showNow: boolean;
    showToday: boolean;
    value: Moment;
    onChange: () => void;
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
 * @prop {(currentDate: Moment) => boolean	} disabledDate
 * @prop {string} dropdownClassName
 * @prop {(trigger:any)=>HTMLElement} getPopupContainer
 * @prop {boolean} inputReadOnly
 * @prop {{ lang: Locale & AdditionalPickerLocaleLangProps; timePickerLocale: TimePickerLocale; }} locale
 * @prop {"time" | "date" | "month" | "year" | "decade"	} mode
 * @prop {boolean} open
 * @prop {(panelNode:any) => React.ReactNode	} panelRender
 * @prop {"date" | undefined} picker
 * @prop {string} placeholder
 * @prop {React.CSSProperties} popupStyle
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} suffixIcon
 * @prop {(open:any)=>void} onOpenChange
 * @prop {(value:any, mode:any)=>void} onPanelChange
 * @prop {Moment} defaultPickerValue
 * @prop {Moment} defaultValue
 * @prop {(date:any)=> DisabledTimes} disabledTime
 * @prop {string | CustomFormat<Moment> | (string | CustomFormat<Moment>)[] | undefined} format
 * @prop {(mode:any) => React.ReactNode} renderExtraFooter
 * @prop {boolean} showNow
 * @prop {Moment} showTime.defaultValue
 * @prop {boolean} showToday
 * @prop {Moment} value
 * @prop {()=>void} onChange
 * @prop {(value:any, mode:any)=>void} onPanelChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function DatePicker({ children, allowClear, autoFocus, bordered, className, dateRender, disabled, disabledDate, dropdownClassName, getPopupContainer, inputReadOnly, locale, mode, open, panelRender, picker, placeholder, popupStyle, size, style, suffixIcon, onOpenChange, onPanelChange, defaultPickerValue, defaultValue, disabledTime, format, renderExtraFooter, showNow, showToday, value, onChange, }: Props): JSX.Element;
import { Moment } from "moment";
import React from "react";
import { Locale } from "rc-picker/lib/interface";
import { AdditionalPickerLocaleLangProps } from "antd/es/date-picker/generatePicker";
import { DisabledTimes } from "rc-picker/lib/interface";
import { CustomFormat } from "rc-picker/lib/interface";
//# sourceMappingURL=index.d.ts.map