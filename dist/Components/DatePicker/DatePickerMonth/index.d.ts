export default MonthPicker;
export type Props = {
    defaultPickerValue: Moment;
    defaultValue: Moment;
    format: string;
    renderExtraFooter: () => React.ReactNode;
    value: Moment;
    onChange: (date: Moment | null, dateString: string) => void;
    monthCellRender: (date: any) => React.ReactNode;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {Moment} defaultPickerValue
 * @prop {Moment} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {Moment} value
 * @prop {(date: Moment | null, dateString: string)=>void} onChange
 * @prop {(date: any) => React.ReactNode} monthCellRender
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function MonthPicker({ defaultPickerValue, defaultValue, format, renderExtraFooter, monthCellRender, value, onChange, children, }: Props): JSX.Element;
import { Moment } from "moment";
import React from "react";
//# sourceMappingURL=index.d.ts.map