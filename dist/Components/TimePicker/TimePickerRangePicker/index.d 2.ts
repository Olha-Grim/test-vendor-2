export default TimePickerRangePicker;
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
    locale: PickerLocale | undefined;
    mode: [PanelMode, PanelMode] | undefined;
    open: boolean;
    panelRender: (panelNode: any) => React.ReactNode;
    picker: "date" | "week" | "month" | "quarter" | "year";
    placeholder: [string, string] | undefined;
    popupStyle: React.CSSProperties;
    size: "large" | "middle" | "small";
    style: React.CSSProperties;
    suffixIcon: React.ReactNode;
    onOpenChange: (open: any) => void;
    defaultPickerValue: [Moment, Moment];
    defaultValue: [EventValue<Moment>, EventValue<Moment>];
    disabledTime: (date: any) => DisabledTimes;
    format: string | ((value: Moment) => string)[] | ((value: Moment) => string);
    renderExtraFooter: (mode: any) => React.ReactNode;
    showNow: boolean;
    showToday: boolean;
    value: [EventValue<Moment>, EventValue<Moment>];
    onChange: () => void;
    onPanelChange: (value: any, mode: any) => void;
    order: boolean;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} className
 * @prop {(currentDate: Moment, today: Moment) => React.ReactNode	} dateRender
 * @prop {boolean} disabled
 * @prop {(currentDate: Moment) => boolean	} disabledDate
 * @prop {string} dropdownClassName
 * @prop {(trigger: any)=>HTMLElement} getPopupContainer
 * @prop {boolean} inputReadOnly
 * @prop {PickerLocale | undefined} locale
 * @prop {[PanelMode, PanelMode] | undefined} mode
 * @prop {boolean} open
 * @prop {(panelNode:any) => React.ReactNode	} panelRender
 * @prop {"date" | "week" | "month" | "quarter" | "year"	} picker
 * @prop {[string, string] | undefined} placeholder
 * @prop {React.CSSProperties} popupStyle
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} suffixIcon
 * @prop {(open:any)=>void} onOpenChange
 * @prop {[Moment, Moment]} defaultPickerValue
 * @prop {[EventValue<Moment>, EventValue<Moment>]} defaultValue
 * @prop {(date:any)=>DisabledTimes} disabledTime
 * @prop {string | ((value: Moment) => string )| ((string | ((value: Moment) => string)[]))	} format
 * @prop {(mode: any) => React.ReactNode} renderExtraFooter
 * @prop {boolean} showNow
 * @prop {Moment} showTime.defaultValue
 * @prop {boolean} showToday
 * @prop {[EventValue<Moment>, EventValue<Moment>]} value
 * @prop {()=>void} onChange
 * @prop {(value: any, mode:any)=>void} onPanelChange
 * @prop {boolean} order
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function TimePickerRangePicker({ order, children, allowClear, autoFocus, bordered, className, dateRender, disabled, disabledDate, dropdownClassName, getPopupContainer, inputReadOnly, locale, mode, open, panelRender, picker, placeholder, popupStyle, size, style, suffixIcon, onOpenChange, onPanelChange, defaultPickerValue, defaultValue, disabledTime, format, renderExtraFooter, showNow, showToday, value, onChange, }: Props): JSX.Element;
import { Moment } from "moment";
import React from "react";
import { PickerLocale } from "antd/lib/date-picker/generatePicker/index";
import { PanelMode } from "rc-picker/lib/interface";
import { EventValue } from "rc-picker/lib/interface";
import { DisabledTimes } from "rc-picker/lib/interface";
//# sourceMappingURL=index.d.ts.map