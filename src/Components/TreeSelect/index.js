import React from "react";
import { TreeSelect as AntdTreeSelect } from "antd";


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
 * @prop {(originNode: React.ReactNode, props) => React.ReactNode	} dropdownRender
 * @prop {React.CSSProperties} dropdownStyle
 * @prop {boolean | function(inputValue: string, treeNode: TreeNode) (should return boolean)	} filterTreeNode
 * @prop {function(triggerNode)} getPopupContainer
 * @prop {boolean} labelInValue
 * @prop {number} listHeight
 * @prop {(node:any)=>void	} loadData
 * @prop {number | "responsive"	} maxTagCount
 * @prop {React.ReactNode | function(omittedValues)	} maxTagPlaceholder
 * @prop {boolean} multiple
 * @prop {string} placeholder
 * @prop {string} searchValue
 * @prop {boolean} showArrow
 * @prop {TreeSelect.SHOW_ALL | TreeSelect.SHOW_PARENT | TreeSelect.SHOW_CHILD	} showCheckedStrategy
 * @prop {boolean} showSearch
 * @prop {large | middle | small	} size
 * @prop {React.ReactNode} suffixIcon
 * @prop {React.ReactNode} switcherIcon
 * @prop {boolean} treeCheckable
 * @prop {boolean} treeCheckStrictly
 * @prop {array<{ value, title, children, [disabled, disableCheckbox, selectable, checkable] }>	}  treeData
 * @prop {boolean | object<{ id: string, pId: string, rootPId: string }>	} treeDataSimpleMode
 * @prop {boolean} treeDefaultExpandAll
 * @prop {string[]	} treeDefaultExpandedKeys
 * @prop {string[]	} treeExpandedKeys
 * @prop {boolean} treeIcon
 * @prop {string} treeNodeLabelProp
 * @prop {string | string[]	} value
 * @prop {boolean} virtual
 * @prop {function(value, label, extra)	} onChange
 * @prop {function(open)	} onDropdownVisibleChange
 * @prop {function(value: string)	} onSearch
 * @prop {function(value, node, extra)	} onSelect
 * @prop {function(expandedKeys)	} onTreeExpand
 * * TreeNode - We recommend you to use treeData rather than TreeNode, to avoid the trouble of manual construction
 * @prop {boolean} checkable
 * @prop {boolean} disableCheckbox
 * @prop {boolean} disabled
 * @prop {boolean} isLeaf
 * @prop {string} key
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


const TreeSelect = ({
  allowClear,
  autoClearSearchValue,
  bordered,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  dropdownRender,
  dropdownStyle,
  filterTreeNode,
  getPopupContainer,
  labelInValue,
  listHeight,
  loadData,
  maxTagCount,
  maxTagPlaceholder,
  multiple,
  placeholder,
  searchValue,
  showArrow,
  showCheckedStrategy,
  showSearch,
  size,
  suffixIcon,
  switcherIcon,
  treeCheckable,
  treeCheckStrictly,
  treeData,
  treeDataSimpleMode,
  treeDefaultExpandAll,
  treeExpandedKeys,
  treeDefaultExpandedKeys,
  treeIcon,
  treeNodeLabelProp,
  value,
  virtual,
  onChange,
  onDropdownVisibleChange,
  onSearch,
  onSelect,
  onTreeExpand,
  children,
}) => {
  const props = {
    allowClear,
    autoClearSearchValue,
    bordered,
    defaultValue,
    disabled,
    dropdownClassName,
    dropdownMatchSelectWidth,
    dropdownRender,
    dropdownStyle,
    filterTreeNode,
    getPopupContainer,
    labelInValue,
    listHeight,
    loadData,
    maxTagCount,
    maxTagPlaceholder,
    multiple,
    placeholder,
    searchValue,
    showArrow,
    showCheckedStrategy,
    showSearch,
    size,
    suffixIcon,
    switcherIcon,
    treeCheckable,
    treeCheckStrictly,
    treeData,
    treeDataSimpleMode,
    treeDefaultExpandAll,
    treeExpandedKeys,
    treeDefaultExpandedKeys,
    treeIcon,
    treeNodeLabelProp,
    value,
    virtual,
    onChange,
    onDropdownVisibleChange,
    onSearch,
    onSelect,
    onTreeExpand,
    children,
  };

  return <AntdTreeSelect {...props}>{children}</AntdTreeSelect>;
};
export default TreeSelect;
