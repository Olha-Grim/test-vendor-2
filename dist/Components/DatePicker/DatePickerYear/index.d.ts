export default YearPicker;
export type Props = {
    defaultPickerValue: typeof import("moment");
    defaultValue: typeof import("moment");
    format: string;
    renderExtraFooter: () => React.ReactNode;
    value: typeof import("moment");
    onChange: (date: typeof import("moment"), dateString: string) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {moment} defaultPickerValue
 * @prop {moment} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {moment} value
 * @prop {(date: moment, dateString: string)=>void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function YearPicker({ defaultPickerValue, defaultValue, format, renderExtraFooter, value, onChange, children }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map