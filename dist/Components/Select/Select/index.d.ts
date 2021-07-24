export default Select;
export type Props = {
    allowClear: boolean;
    autoClearSearchValue: boolean;
    autoFocus: boolean;
    bordered: boolean;
    clearIcon: React.ReactNode;
    defaultActiveFirstOption: boolean;
    defaultOpen: boolean;
    /**
     * | number[] LabeledValue | LabeledValue[]} defaultValue
     */
    number: string | string[];
    disabled: boolean;
    dropdownClassName: string;
    dropdownMatchSelectWidth: boolean | number;
    dropdownRender: (originNode: React.ReactNode) => React.ReactNode;
    dropdownStyle: React.CSSProperties;
    filterOption: boolean | ((inputValue: any, option: any) => void);
    filterSort: (optionA: new (text?: string | undefined, value?: string | undefined, defaultSelected?: boolean | undefined, selected?: boolean | undefined) => HTMLOptionElement, optionB: new (text?: string | undefined, value?: string | undefined, defaultSelected?: boolean | undefined, selected?: boolean | undefined) => HTMLOptionElement) => number;
    getPopupContainer: (triggerNode: HTMLElement) => void;
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
    tagRender: (props: any) => React.ReactNode;
    tokenSeparators: string[];
    /**
     * | string[], number | number[], LabeledValue | LabeledValue[]}} value
     */
    string: {};
    virtual: boolean;
    onBlur: Function;
    onChange: boolean;
    onClear: (value: any, option: (new (text?: string | undefined, value?: string | undefined, defaultSelected?: boolean | undefined, selected?: boolean | undefined) => HTMLOptionElement) | Array<new (text?: string | undefined, value?: string | undefined, defaultSelected?: boolean | undefined, selected?: boolean | undefined) => HTMLOptionElement>) => void;
    /**
     * =>void	} onDeselect
     */
    "": (string | number | LabeledValue);
    onDropdownVisibleChange: (open: any) => void;
    onFocus: Function;
    onInputKeyDown: Function;
    onMouseEnter: Function;
    onMouseLeave: Function;
    onPopupScroll: Function;
    onSearch: (value: string) => void;
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
 * @prop {string | string[] number | number[] LabeledValue | LabeledValue[]} defaultValue
 * @prop {boolean} disabled
 * @prop {string} dropdownClassName
 * @prop {boolean | number	} dropdownMatchSelectWidth
 * @prop {(originNode: React.ReactNode) => React.ReactNode	} dropdownRender
 * @prop {React.CSSProperties} dropdownStyle
 * @prop {boolean | (inputValue, option)=>void	} filterOption
 * @prop {(optionA: Option, optionB: Option) => number	} filterSort
 * @prop {(triggerNode:HTMLElement)=>void	} getPopupContainer
 * @prop {boolean} labelInValue
 * @prop {number} listHeight
 * @prop {boolean} loading
 * @prop {number | "responsive"	} maxTagCount
 * @prop {React.ReactNode | (omittedValues)=>void	} maxTagPlaceholder
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
 * @prop {(props:any) => React.ReactNode	} tagRender
 * @prop {string[]	} tokenSeparators
 * @prop {{string | string[], number | number[], LabeledValue | LabeledValue[]}} value
 * @prop {boolean} virtual
 * @prop {function} onBlur
 * @prop {boolean} onChange
 * @prop {(value: any, option:Option | Array<Option>)=>void	} onClear
 * @prop {(string | number | LabeledValue)=>void	} onDeselect
 * @prop {(open: any)=>void} onDropdownVisibleChange
 * @prop {function} onFocus
 * @prop {function} onInputKeyDown
 * @prop {function} onMouseEnter
 * @prop {function} onMouseLeave
 * @prop {function} onPopupScroll
 * @prop {(value: string)=>void	} onSearch
 * @prop {(string | number | LabeledValue | option: Option) =>void	} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Select({ allowClear, autoClearSearchValue, autoFocus, bordered, clearIcon, defaultActiveFirstOption, defaultOpen, defaultValue, disabled, dropdownClassName, downMatchSelectWidth, dropdownRender, dropdownStyle, filterOption, filterSort, getPopupContainer, labelInValue, listHeight, loading, maxTagCount, maxTagPlaceholder, maxTagTextLength, menuItemSelectedIcon, mode, notFoundContent, open, optionFilterProp, optionLabelProp, options, placeholder, removeIcon, searchValue, showArrow, showSearch, tagRender, suffixIcon, tokenSeparators, value, virtual, onBlur, onChange, onClear, onDeselect, onDropdownVisibleChange, onFocus, onInputKeyDown, onMouseEnter, onMouseLeave, onPopupScroll, onSearch, onSelect, children, }: Props): JSX.Element;
import React from "react";
import { LabeledValue } from "antd/es/select";
//# sourceMappingURL=index.d.ts.map