export default YearPicker;
export type Props = {
    defaultPickerValue: Moment;
    defaultValue: Moment | null | undefined;
    format: string;
    renderExtraFooter: () => React.ReactNode;
    value: Moment | null | undefined;
    onChange: (date: Moment | null | undefined, dateString: string) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {Moment} defaultPickerValue
 * @prop {Moment | null | undefined} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {Moment | null | undefined} value
 * @prop {(date: Moment | null | undefined, dateString: string) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function YearPicker({ defaultPickerValue, defaultValue, format, renderExtraFooter, value, onChange, children, }: Props): JSX.Element;
import { Moment } from "moment";
import React from "react";
//# sourceMappingURL=index.d.ts.map