export default WeekPicker;
export type Props = {
    defaultPickerValue: Moment;
    defaultValue: Moment;
    format: string;
    renderExtraFooter: (mode: any) => React.ReactNode;
    value: Moment;
    onChange: (date: Moment | null, dateString: string) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {Moment} defaultPickerValue
 * @prop {Moment} defaultValue
 * @prop {string} format
 * @prop {(mode:any) => React.ReactNode} renderExtraFooter
 * @prop {Moment} value
 * @prop {(date: Moment | null, dateString: string)=>void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function WeekPicker({ defaultPickerValue, defaultValue, format, renderExtraFooter, value, onChange, children, }: Props): JSX.Element;
import { Moment } from "moment";
import React from "react";
//# sourceMappingURL=index.d.ts.map