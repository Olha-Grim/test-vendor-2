export default InputTextArea;
export type Props = {
    allowClear: boolean;
    autoSize: boolean | object;
    bordered: boolean;
    defaultValue: string;
    maxLength: number;
    showCount: boolean | {
        formatter: (args: {
            count: number;
            maxLength?: number | undefined;
        }) => string;
    };
    value: string;
    onResize: (size: {
        width: number;
        height: number;
    }) => void;
    onPressEnter: (e?: React.KeyboardEventHandler<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement> | undefined) => void;
};
/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean | object} autoSize
 * @prop {boolean} bordered
 * @prop {string} defaultValue
 * @prop {number} maxLength
 * @prop {boolean | { formatter: (args: { count: number; maxLength?: number | undefined; })=> string}} showCount
 * @prop {string} value
 * @prop {(size: { width: number; height: number; }) => void} onResize
 * @prop {(e?: React.KeyboardEventHandler<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>)=>void} onPressEnter
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function InputTextArea({ allowClear, autoSize, bordered, defaultValue, maxLength, showCount, value, onResize, onPressEnter, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map