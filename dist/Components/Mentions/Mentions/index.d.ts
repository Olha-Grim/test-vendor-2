export default Mentions;
export type Props = {
    autoFocus: boolean;
    autoSize: boolean | object;
    defaultValue: string;
    filterOption: false | ((input: string, { value }: OptionProps) => boolean) | undefined;
    getPopupContainer: () => HTMLElement;
    notFoundContent: React.ReactNode;
    placement: "top" | "bottom";
    prefix: string | string[];
    split: string;
    validateSearch: (text: string, props: MentionsProps) => boolean;
    value: string;
    onBlur: () => void;
    onChange: (text: string) => void;
    onFocus: () => void;
    onResize: (size: {
        width: number;
        height: number;
    }) => void;
    onSearch: (text: string, prefix: string) => void;
    onSelect: (option: OptionProps, prefix: string) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean | object	} autoSize
 * @prop {string} defaultValue
 * @prop {false | ((input: string, { value }: OptionProps) => boolean) | undefined} filterOption
 * @prop {() => HTMLElement} getPopupContainer
 * @prop { React.ReactNode} notFoundContent
 * @prop {"top" | "bottom"	} placement
 * @prop {string | string[]} prefix
 * @prop {string} split
 * @prop {(text: string, props: MentionsProps) => boolean	} validateSearch
 * @prop {string} value
 * @prop {() => void} onBlur
 * @prop {(text: string) => void} onChange
 * @prop {() => void} onFocus
 * @prop {(size: { width: number; height: number; }) => void} onResize
 * @prop {(text: string, prefix: string) => void} onSearch
 * @prop {(option: OptionProps, prefix: string) => void} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Mentions({ autoFocus, autoSize, defaultValue, filterOption, getPopupContainer, notFoundContent, placement, prefix, split, validateSearch, value, onBlur, onChange, onFocus, onResize, onSearch, onSelect, children, }: Props): JSX.Element;
import { OptionProps } from "rc-mentions/lib/Option";
import React from "react";
import { MentionsProps } from "rc-mentions/lib/Mentions";
//# sourceMappingURL=index.d.ts.map