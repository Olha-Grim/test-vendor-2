export default Cascader;
export type Props = {
    allowClear: boolean;
    autoFocus: boolean;
    bordered: boolean;
    changeOnSelect: boolean;
    className: string;
    defaultValue: string[] | number[];
    disabled: boolean;
    dropdownRender: (menus: React.ReactNode) => React.ReactNode;
    expandIcon: React.ReactNode;
    expandTrigger: 'click' | 'hover';
    fieldNames: object;
    getPopupContainer: (triggerNode: HTMLElement) => void;
    loadData: (selectedOptions: any) => void;
    notFoundContent: string;
    options: (new (text?: string | undefined, value?: string | undefined, defaultSelected?: boolean | undefined, selected?: boolean | undefined) => HTMLOptionElement)[];
    placeholder: string;
    popupClassName: string;
    popupPlacement: string;
    popupVisible: boolean;
    showSearch: boolean | Object;
    size: "large" | "middle" | "small";
    style: React.CSSProperties;
    suffixIcon: React.ReactNode;
    value: string[] | number[];
    onChange: (value: any, selectedOptions: any) => void;
    onPopupVisibleChange: (value: any) => void;
    "": boolean | Object;
    limit: number | false;
    matchInputWidth: boolean;
    render: (a: any[], b: any[], inputValue: string, names: any) => number;
    sort: (arg0: any, arg1: any, arg2: any) => any;
};
/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {boolean} changeOnSelect
 * @prop {string} className
 * @prop {string[] | number[]	} defaultValue
 * @prop {boolean} disabled
 * @prop {(menus: React.ReactNode) => React.ReactNode	} dropdownRender
 * @prop {React.ReactNode} expandIcon
 * @prop {'click' | 'hover'} expandTrigger
 * @prop {object} fieldNames
 * @prop {(triggerNode: HTMLElement)=> void} getPopupContainer
 * @prop {(selectedOptions: any) => void} loadData
 * @prop {string} notFoundContent
 * @prop {Option[]}  options
 * @prop {string}  placeholder
 * @prop {string} popupClassName
 * @prop {string} popupPlacement
 * @prop {boolean} popupVisible
 * @prop {boolean | Object} showSearch
 * @prop {"large" | "middle" | "small"} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode}  suffixIcon
 * @prop {string[] | number[]	} value
 * @prop {(value:any, selectedOptions: any) => void	} onChange
 * @prop {(value:any) => void} onPopupVisibleChange
 * @prop {boolean | Object}
 * @prop {(inputValue: string, path: CascaderValueType[], names: FilledFieldNamesType) => boolean;	}  filter
 * @prop {number | false}  limit
 * @prop {boolean} matchInputWidth
 * @prop {( a: CascaderOptionType[], b: CascaderOptionType[], inputValue: string, names: FilledFieldNamesType,) => number} render
 * @prop {function(a, b, inputValue)} sort
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Cascader({ allowClear, autoFocus, bordered, changeOnSelect, className, defaultValue, disabled, dropdownRender, expandIcon, expandTrigger, fieldNames, getPopupContainer, loadData, notFoundContent, options, placeholder, popupClassName, popupPlacement, popupVisible, showSearch, size, style, suffixIcon, value, onChange, onPopupVisibleChange, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map