export default QuarterPicker;
export type Props = {
    defaultPickerValue: Moment;
    defaultValue: Moment;
    format: string;
    renderExtraFooter: () => React.ReactNode;
    value: Moment | null;
    onChange: (date: Moment | null, dateString: string) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {Moment} defaultPickerValue
 * @prop {Moment} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {Moment | null} value
 * @prop {(date: Moment | null, dateString: string)=>void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function QuarterPicker({ defaultPickerValue, defaultValue, onChange, value, format, renderExtraFooter, children, }: Props): JSX.Element;
import { Moment } from "moment";
import React from "react";
//# sourceMappingURL=index.d.ts.map