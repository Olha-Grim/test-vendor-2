export default Select;
export type Props = {
    allowClear: boolean;
    autoClearSearchValue: boolean;
    autoFocus: boolean;
    bordered: boolean;
    clearIcon: React.ReactNode;
    defaultActiveFirstOption: boolean;
    defaultOpen: boolean;
    defaultValue: string | string[] | number | number[] | LabeledValue | LabeledValue[];
    disabled: boolean;
    dropdownClassName: string;
    dropdownMatchSelectWidth: boolean | number;
    dropdownRender: (originNode: React.ReactNode) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    dropdownStyle: React.CSSProperties;
    filterOption: boolean | FilterFunc<OptionData | OptionGroupData> | undefined;
    filterSort: (optionA: OptionData | OptionGroupData, optionB: OptionData | OptionGroupData) => number;
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    labelInValue: boolean;
    listHeight: number;
    loading: boolean;
    maxTagCount: number | "responsive";
    maxTagPlaceholder: React.ReactNode | ((omittedValues: any) => void);
    maxTagTextLength: number;
    menuItemSelectedIcon: React.ReactNode;
    mode: "multiple" | "tags";
    notFoundContent: React.ReactNode;
    open: boolean;
    optionFilterProp: string;
    optionLabelProp: string;
    options: {
        label: any;
        value: any;
    }[];
    placeholder: React.ReactNode;
    removeIcon: React.ReactNode;
    searchValue: string;
    showArrow: boolean;
    showSearch: boolean;
    size: "large" | "middle" | "small";
    suffixIcon: React.ReactNode;
    tagRender: (props: any) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    tokenSeparators: string[];
    value: string | string[] | number | number[] | LabeledValue | LabeledValue[];
    virtual: boolean;
    onBlur: (event: React.FocusEvent<HTMLElement>) => void;
    onChange: ((value: any, option: OptionsType | OptionData | OptionGroupData) => void) | undefined;
    onClear: OnClear;
    onDeselect: ((value: any, option: OptionData | OptionGroupData) => void) | undefined;
    onDropdownVisibleChange: (open: any) => void;
    onFocus: (event: React.FocusEvent<HTMLElement>) => void;
    onInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onMouseEnter: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onPopupScroll: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
    onSearch: (value: string) => void;
    onSelect: ((value: any, option: OptionData | OptionGroupData) => void) | undefined;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoClearSearchValue
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {React.ReactNode} clearIcon
 * @prop {boolean} defaultActiveFirstOption
 * @prop {boolean} defaultOpen
 * @prop {string | string[]| number | number[] | LabeledValue | LabeledValue[]} defaultValue
 * @prop {boolean} disabled
 * @prop {string} dropdownClassName
 * @prop {boolean | number} dropdownMatchSelectWidth
 * @prop {(originNode: React.ReactNode) => React.ReactElement<any, string | React.JSXElementConstructor<any>>	} dropdownRender
 * @prop {React.CSSProperties} dropdownStyle
 * @prop {boolean | FilterFunc<OptionData | OptionGroupData> | undefined} filterOption
 * @prop {(optionA: OptionData | OptionGroupData, optionB: OptionData | OptionGroupData) => number} filterSort
 * @prop {(triggerNode:HTMLElement)=>HTMLElement	} getPopupContainer
 * @prop {boolean} labelInValue
 * @prop {number} listHeight
 * @prop {boolean} loading
 * @prop {number | "responsive"	} maxTagCount
 * @prop {React.ReactNode | ((omittedValues:any)=>void)	} maxTagPlaceholder
 * @prop {number} maxTagTextLength
 * @prop {React.ReactNode} menuItemSelectedIcon
 * @prop {"multiple" | "tags"	} mode
 * @prop {React.ReactNode} notFoundContent
 * @prop {boolean} open
 * @prop {string} optionFilterProp
 * @prop {string}  optionLabelProp
 * @prop {{ label: any, value:any }[]	}  options
 * @prop {React.ReactNode} placeholder
 * @prop {React.ReactNode}  removeIcon
 * @prop {string}  searchValue
 * @prop {boolean} showArrow
 * @prop {boolean} showSearch
 * @prop {"large" | "middle" | "small"} 	size
 * @prop {React.ReactNode} suffixIcon
 * @prop {(props:any) => React.ReactElement<any, string | React.JSXElementConstructor<any>>} tagRender
 * @prop {string[]	} tokenSeparators
 * @prop {string | string[]| number | number[] | LabeledValue | LabeledValue[]} value
 * @prop {boolean} virtual
 * @prop {(event: React.FocusEvent<HTMLElement>)=>void} onBlur
 * @prop {((value: any, option: OptionsType | OptionData | OptionGroupData) => void) | undefined} onChange
 * @prop {OnClear} onClear
 * @prop {((value: any, option: OptionData | OptionGroupData) => void) | undefined} onDeselect
 * @prop {(open: any)=>void} onDropdownVisibleChange
 * @prop {(event: React.FocusEvent<HTMLElement>)=> void} onFocus
 * @prop {(event: React.KeyboardEvent<HTMLInputElement>)=> void} onInputKeyDown
 * @prop {(event: React.MouseEvent<HTMLDivElement, MouseEvent>)=> void} onMouseEnter
 * @prop {(event: React.MouseEvent<HTMLDivElement, MouseEvent>)=> void} onMouseLeave
 * @prop {(event: React.UIEvent<HTMLDivElement, UIEvent>)=> void} onPopupScroll
 * @prop {(value: string)=>void	} onSearch
 * @prop {((value: any, option: OptionData | OptionGroupData) => void) | undefined} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Select({ allowClear, autoClearSearchValue, autoFocus, bordered, clearIcon, defaultActiveFirstOption, defaultOpen, defaultValue, disabled, dropdownClassName, dropdownMatchSelectWidth, dropdownRender, dropdownStyle, filterOption, filterSort, getPopupContainer, labelInValue, listHeight, loading, maxTagCount, maxTagPlaceholder, maxTagTextLength, menuItemSelectedIcon, mode, notFoundContent, open, optionFilterProp, optionLabelProp, options, placeholder, removeIcon, searchValue, showArrow, showSearch, tagRender, suffixIcon, tokenSeparators, value, virtual, onBlur, onChange, onClear, onDeselect, onDropdownVisibleChange, onFocus, onInputKeyDown, onMouseEnter, onMouseLeave, onPopupScroll, onSearch, onSelect, children, }: Props): JSX.Element;
import React from "react";
import { LabeledValue } from "antd/es/select";
import { FilterFunc } from "rc-select/lib/interface/generator";
import { OptionData } from "rc-select/lib/interface";
import { OptionGroupData } from "rc-select/lib/interface";
import { OptionsType } from "rc-select/lib/interface";
import { OnClear } from "rc-select/lib/interface/generator";
//# sourceMappingURL=index.d.ts.map