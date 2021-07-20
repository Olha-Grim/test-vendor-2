export default WeekPicker;
export type Props = {
    defaultPickerValue: typeof import("moment");
    defaultValue: typeof import("moment");
    format: string;
    renderExtraFooter: (mode: any) => React.ReactNode;
    value: typeof import("moment");
    onChange: (arg0: any, arg1: typeof import("moment"), arg2: any, arg3: string) => any;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {moment} defaultPickerValue
 * @prop {moment} defaultValue
 * @prop {string} format
 * @prop {(mode) => React.ReactNode} renderExtraFooter
 * @prop {moment} value
 * @prop {function(date: moment, dateString: string)} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function WeekPicker({ defaultPickerValue, defaultValue, format, renderExtraFooter, value, onChange, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map