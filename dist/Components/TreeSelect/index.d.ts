export default TreeSelect;
export type Props = {
    allowClear: boolean;
    autoClearSearchValue: boolean;
    bordered: boolean;
    defaultValue: string | string[];
    disabled: boolean;
    dropdownClassName: string;
    dropdownMatchSelectWidth: boolean | number;
    dropdownRender: (menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    dropdownStyle: React.CSSProperties;
    filterTreeNode: boolean | FilterFunc<LegacyDataNode> | undefined;
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    labelInValue: boolean;
    listHeight: number;
    loadData: (node: any) => Promise<unknown>;
    maxTagCount: number | "responsive";
    maxTagPlaceholder: React.ReactNode | ((omittedValues: any) => void);
    multiple: boolean;
    placeholder: string;
    searchValue: string;
    showArrow: boolean;
    showCheckedStrategy: ({ allowClear, autoClearSearchValue, bordered, defaultValue, disabled, dropdownClassName, dropdownMatchSelectWidth, dropdownRender, dropdownStyle, filterTreeNode, getPopupContainer, labelInValue, listHeight, loadData, maxTagCount, maxTagPlaceholder, multiple, placeholder, searchValue, showArrow, showCheckedStrategy, showSearch, size, suffixIcon, switcherIcon, treeCheckable, treeCheckStrictly, treeData, treeDataSimpleMode, treeDefaultExpandAll, treeExpandedKeys, treeDefaultExpandedKeys, treeIcon, treeNodeLabelProp, value, virtual, onChange, onDropdownVisibleChange, onSearch, onSelect, onTreeExpand, children, }: Props) => JSX.Element;
    showSearch: boolean;
    size: "large" | "middle" | "small";
    suffixIcon: React.ReactNode;
    switcherIcon: React.ReactNode;
    treeCheckable: boolean;
    treeCheckStrictly: boolean;
    treeData: DataNode[];
    treeDataSimpleMode: boolean | Object;
    treeDefaultExpandAll: boolean;
    treeDefaultExpandedKeys: string[];
    treeExpandedKeys: string[];
    treeIcon: boolean;
    treeNodeLabelProp: string;
    value: string | string[];
    virtual: boolean;
    onChange: (value: any, label: any, extra: any) => void;
    onDropdownVisibleChange: (open: any) => void;
    onSearch: (value: string) => void;
    onSelect: (value: string, option: any) => void;
    /**
     * * TreeNode - We recommend you to use treeData rather than TreeNode, to avoid the trouble of manual construction
     */
    onTreeExpand: (expandedKeys: any) => void;
    checkable: boolean;
    disableCheckbox: boolean;
    isLeaf: boolean;
    key: string | number | Key | undefined;
    selectable: boolean;
    title: React.ReactNode;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoClearSearchValue
 * @prop {boolean} bordered
 * @prop {string | string[]} defaultValue
 * @prop {boolean} disabled
 * @prop {string} dropdownClassName
 * @prop {boolean | number	} dropdownMatchSelectWidth
 * @prop {((menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>)} dropdownRender
 * @prop {React.CSSProperties} dropdownStyle
 * @prop {boolean | FilterFunc<LegacyDataNode> | undefined} filterTreeNode
 * @prop {(triggerNode:HTMLElement)=> HTMLElement} getPopupContainer
 * @prop {boolean} labelInValue
 * @prop {number} listHeight
 * @prop {(node:any)=> Promise<unknown>	} loadData
 * @prop {number | "responsive"	} maxTagCount
 * @prop {React.ReactNode | ((omittedValues:any)=>void)	} maxTagPlaceholder
 * @prop {boolean} multiple
 * @prop {string} placeholder
 * @prop {string} searchValue
 * @prop {boolean} showArrow
 * @prop {TreeSelect} showCheckedStrategy
 * @prop {boolean} showSearch
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.ReactNode} suffixIcon
 * @prop {React.ReactNode} switcherIcon
 * @prop {boolean} treeCheckable
 * @prop {boolean} treeCheckStrictly
 * @prop {DataNode[]}  treeData
 * @prop {boolean | Object	} treeDataSimpleMode
 * @prop {boolean} treeDefaultExpandAll
 * @prop {string[]	} treeDefaultExpandedKeys
 * @prop {string[]	} treeExpandedKeys
 * @prop {boolean} treeIcon
 * @prop {string} treeNodeLabelProp
 * @prop {string | string[]	} value
 * @prop {boolean} virtual
 * @prop {(value:any, label:any, extra:any)=> void	} onChange
 * @prop {(open:any)=> void	} onDropdownVisibleChange
 * @prop {(value: string)=>void	} onSearch
 * @prop {(value: string, option: any) => void} onSelect
 * @prop {(expandedKeys:any)=>void	} onTreeExpand
 * * TreeNode - We recommend you to use treeData rather than TreeNode, to avoid the trouble of manual construction
 * @prop {boolean} checkable
 * @prop {boolean} disableCheckbox
 * @prop {boolean} disabled
 * @prop {boolean} isLeaf
 * @prop {string | number | Key | undefined} key
 * @prop {boolean} selectable
 * @prop {React.ReactNode} title
 * @prop {string} value
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function TreeSelect({ allowClear, autoClearSearchValue, bordered, defaultValue, disabled, dropdownClassName, dropdownMatchSelectWidth, dropdownRender, dropdownStyle, filterTreeNode, getPopupContainer, labelInValue, listHeight, loadData, maxTagCount, maxTagPlaceholder, multiple, placeholder, searchValue, showArrow, showCheckedStrategy, showSearch, size, suffixIcon, switcherIcon, treeCheckable, treeCheckStrictly, treeData, treeDataSimpleMode, treeDefaultExpandAll, treeExpandedKeys, treeDefaultExpandedKeys, treeIcon, treeNodeLabelProp, value, virtual, onChange, onDropdownVisibleChange, onSearch, onSelect, onTreeExpand, children, }: Props): JSX.Element;
import React from "react";
import { FilterFunc } from "rc-select/lib/interface/generator";
import { LegacyDataNode } from "./interface";
import { DataNode } from "rc-tree/lib/interface";
import { Key } from "rc-tree/lib/interface";
//# sourceMappingURL=index.d.ts.map