import React from "react";
import {  Select as AntdSelect } from "antd";
import {  LabeledValue } from 'antd/es/select';

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


const Select = ({
  allowClear,
  autoClearSearchValue,
  autoFocus,
  bordered,
  clearIcon,
  defaultActiveFirstOption,
  defaultOpen,
  defaultValue,
  disabled,
  dropdownClassName,
  downMatchSelectWidth,
  dropdownRender,
  dropdownStyle,
  filterOption,
  filterSort,
  getPopupContainer,
  labelInValue,
  listHeight,
  loading,
  maxTagCount,
  maxTagPlaceholder,
  maxTagTextLength,
  menuItemSelectedIcon,
  mode,
  notFoundContent,
  open,
  optionFilterProp,
  optionLabelProp,
  options,
  placeholder,
  removeIcon,
  searchValue,
  showArrow,
  showSearch,
  tagRender,
  suffixIcon,
  tokenSeparators,
  value,
  virtual,
  onBlur,
  onChange,
  onClear,
  onDeselect,
  onDropdownVisibleChange,
  onFocus,
  onInputKeyDown,
  onMouseEnter,
  onMouseLeave,
  onPopupScroll,
  onSearch,
  onSelect,
  children,
}) => {
  const props = {
    allowClear,
    autoClearSearchValue,
    autoFocus,
    bordered,
    clearIcon,
    defaultActiveFirstOption,
    defaultOpen,
    defaultValue,
    disabled,
    dropdownClassName,
    downMatchSelectWidth,
    dropdownRender,
    dropdownStyle,
    filterOption,
    filterSort,
    getPopupContainer,
    labelInValue,
    listHeight,
    loading,
    maxTagCount,
    maxTagPlaceholder,
    maxTagTextLength,
    menuItemSelectedIcon,
    mode,
    notFoundContent,
    open,
    optionFilterProp,
    optionLabelProp,
    options,
    placeholder,
    removeIcon,
    searchValue,
    showArrow,
    showSearch,
    tagRender,
    suffixIcon,
    tokenSeparators,
    value,
    virtual,
    onBlur,
    onChange,
    onClear,
    onDeselect,
    onDropdownVisibleChange,
    onFocus,
    onInputKeyDown,
    onMouseEnter,
    onMouseLeave,
    onPopupScroll,
    onSearch,
    onSelect,
    children,
  };

  return <AntdSelect {...props}>{children}</AntdSelect>;
};
export default Select;
