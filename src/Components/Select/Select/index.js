import React from "react";
import { Select as AntdSelect } from "antd";
/**
 *
 * @param {boolean} allowClear
 * @param {boolean} autoClearSearchValue
 * @param {boolean} autoFocus
 * @param {boolean} bordered
 * @param {ReactNode} clearIcon
 * @param {boolean} defaultActiveFirstOption
 * @param {boolean} defaultOpen
 * @param {string | string[] number | number[] LabeledValue | LabeledValue[]} defaultValue
 * @param {boolean} disabled
 * @param {string} dropdownClassName
 * @param {boolean | number	} dropdownMatchSelectWidth
 * @param {(originNode: ReactNode) => ReactNode	} dropdownRender
 * @param {CSSProperties} dropdownStyle
 * @param {boolean | function(inputValue, option)	} filterOption
 * @param {(optionA: Option, optionB: Option) => number	} filterSort
 * @param {function(triggerNode)	} getPopupContainer
 * @param {boolean} labelInValue
 * @param {number} listHeight
 * @param {boolean} loading
 * @param {number | responsive	} maxTagCount
 * @param {ReactNode | function(omittedValues)	} maxTagPlaceholder
 * @param {number} maxTagTextLength
 * @param {ReactNode} menuItemSelectedIcon
 * @param {multiple | tags	} mode
 * @param {ReactNode} notFoundContent
 * @param {boolean} open
 * @param {string} optionFilterProp
 * @param {string}  optionLabelProp
 * @param {{ label, value }[]	}  options
 * @param {ReactNode} placeholder
 * @param {ReactNode}  removeIcon
 * @param {string}  searchValue
 * @param {boolean} showArrow
 * @param {boolean} showSearch
 * @param {large | middle | small} 	size
 * @param {ReactNode} suffixIcon
 * @param {(props) => ReactNode	} tagRender
 * @param {string[]	} tokenSeparators
 * @param {string | string[] number | number[] LabeledValue | LabeledValue[]} value
 * @param {boolean} virtual
 * @param {function} onBlur
 * @param {boolean} onChange
 * @param {function(value, option:Option | Array<Option>)	} onClear
 * @param {function(string | number | LabeledValue)	} onDeselect
 * @param {function(open)} onDropdownVisibleChange
 * @param {function} onFocus
 * @param {function} onInputKeyDown
 * @param {function} onMouseEnter
 * @param {function} onMouseLeave
 * @param {function} onPopupScroll
 * @param {function(value: string)	} onSearch
 * @param {function(string | number | LabeledValue, option: Option)	} onSelect
 * @param children
 * @return {JSX.Element}
 * @constructor
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
