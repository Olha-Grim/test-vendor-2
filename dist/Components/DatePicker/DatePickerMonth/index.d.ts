export default MonthPicker;
export type Props = {
    defaultPickerValue: typeof import("moment");
    defaultValue: typeof import("moment");
    format: string;
    renderExtraFooter: () => React.ReactNode;
    value: typeof import("moment");
    onChange: (arg0: any, arg1: typeof import("moment"), arg2: any, arg3: string) => any;
    monthCellRender: (arg0: any, arg1: any) => React.ReactNode;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {moment} defaultPickerValue
 * @prop {moment} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {moment} value
 * @prop {function(date: moment, dateString: string)} onChange
 * @prop {function(date, locale): React.ReactNode} monthCellRender
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function MonthPicker({ defaultPickerValue, defaultValue, format, renderExtraFooter, monthCellRender, value, onChange, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map