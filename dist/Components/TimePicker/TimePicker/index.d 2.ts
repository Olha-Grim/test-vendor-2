export default TimePicker;
export type Props = {
    autoFocus: boolean;
    bordered: boolean;
    className: string;
    clearIcon: React.ReactNode;
    clearText: string;
    defaultValue: Moment;
    disabled: boolean;
    disabledHours: () => number[];
    disabledMinutes: (selectedHour: any) => number[];
    disabledSeconds: (selectedHour: any, selectedMinute: any) => number[];
    format: string;
    allowClear: boolean;
    getPopupContainer: (trigger: any) => HTMLElement;
    hideDisabledOptions: boolean;
    hourStep: number;
    inputReadOnly: boolean;
    minuteStep: number;
    open: boolean;
    placeholder: string;
    popupClassName: string;
    popupStyle: React.CSSProperties;
    renderExtraFooter: () => React.ReactNode;
    secondStep: number;
    showNow: boolean;
    suffixIcon: React.ReactNode;
    use12Hours: boolean;
    value: Moment;
    onChange: (time: Moment | null, timeString: string) => void;
    onOpenChange: (open: boolean) => void;
    onSelect: (time: Moment | null) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} className
 * @prop {React.ReactNode} clearIcon
 * @prop {string} clearText
 * @prop {Moment} defaultValue
 * @prop {boolean} disabled
 * @prop {()=>number[]} disabledHours
 * @prop {(selectedHour:any)=>number[]	} disabledMinutes
 * @prop {(selectedHour:any, selectedMinute:any)=>number[]} disabledSeconds
 * @prop {string} format
 * @prop {boolean} allowClear
 * @prop {(trigger:any)=> HTMLElement	} getPopupContainer
 * @prop {boolean} hideDisabledOptions
 * @prop {number} hourStep
 * @prop {boolean} inputReadOnly
 * @prop {number} minuteStep
 * @prop {boolean} open
 * @prop {string} placeholder
 * @prop {string} popupClassName
 * @prop {React.CSSProperties} popupStyle
 * @prop {() => React.ReactNode	} renderExtraFooter
 * @prop {number} secondStep
 * @prop {boolean} showNow
 * @prop {React.ReactNode} suffixIcon
 * @prop {boolean} use12Hours
 * @prop {Moment} value
 * @prop {(time: Moment | null, timeString: string)=> void	} onChange
 * @prop {(open: boolean) => void	} onOpenChange
 * @prop {(time: Moment | null)=> void	} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function TimePicker({ autoFocus, bordered, className, clearIcon, clearText, defaultValue, disabled, disabledHours, disabledMinutes, disabledSeconds, format, allowClear, getPopupContainer, hideDisabledOptions, hourStep, inputReadOnly, minuteStep, open, placeholder, popupClassName, popupStyle, renderExtraFooter, secondStep, showNow, suffixIcon, use12Hours, value, onChange, onOpenChange, onSelect, children, }: Props): JSX.Element;
import React from "react";
import { Moment } from "moment";
//# sourceMappingURL=index.d.ts.map