import React from "react";
import { Table as AntdTable } from "antd";

/**
 *
 * @typedef Props
 * @param {"left" | "right" | "center"} align
 * @param {string}  className
 * @param {number}  colSpan
 * @param {string | string[]		}  dataIndex
 * @param {string[]	}  defaultFilteredValue
 * @param {"ascend" | "descend"	} defaultSortOrder
 * @param {boolean} editable
 * @param {boolean | {showTitle?: boolean }	} ellipsis
 * @param {React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode)} filterDropdown
 * @param {boolean} filterDropdownVisible
 * @param {boolean} filtered
 * @param {string[]	} filteredValue
 * @param {React.ReactNode | ((filtered: boolean) => React.ReactNode	)} filterIcon
 * @param {boolean} filterMultiple
 * @param {Record<string, string[]>} filters
 * @param {boolean | string	} fixed
 * @param {string} key
 * @param {function(text, record, index) {}	} render
 * @param {Breakpoint[]} responsive
 * @param {(record, prevRecord) => boolean} shouldCellUpdate
 * @param {boolean | Tooltip props} showSorterTooltip
 * @param {Array} sortDirections
 * @param {function | boolean	} sorter
 * @param {boolean | string	} sortOrder
 * @param {React.ReactNode | ({ sortOrder, sortColumn, filters }) => React.ReactNode	} title
 * @param {string | number	} width
 * @param {function(record, rowIndex)	} onCell
 * @param {(value: string | number | boolean, record: RecordType) => boolean} onFilter
 * @param {function(visible) {}	} onFilterDropdownVisibleChange
 * @param {(column)=>void	}  onHeaderCell
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */


const TableColumn = ({
  align,
  className,
  colSpan,
  dataIndex,
  defaultFilteredValue,
  defaultSortOrder,
  editable,
  ellipsis,
  filterDropdown,
  filterDropdownVisible,
  filtered,
  filteredValue,
  filterIcon,
  filterMultiple,
  filters,
  fixed,
  key,
  render,
  responsive,
  shouldCellUpdate,
  showSorterTooltip,
  sortDirections,
  sorter,
  sortOrder,
  title,
  width,
  onCell,
  onFilter,
  onFilterDropdownVisibleChange,
  onHeaderCell,
  children,
}) => {
  const props = {
    align,
    className,
    colSpan,
    dataIndex,
    defaultFilteredValue,
    defaultSortOrder,
    editable,
    ellipsis,
    filterDropdown,
    filterDropdownVisible,
    filtered,
    filteredValue,
    filterIcon,
    filterMultiple,
    filters,
    fixed,
    key,
    render,
    responsive,
    shouldCellUpdate,
    showSorterTooltip,
    sortDirections,
    sorter,
    sortOrder,
    title,
    width,
    onCell,
    onFilter,
    onFilterDropdownVisibleChange,
    onHeaderCell,
    children,
  };

  return <AntdTable.Column {...props}>{children}</AntdTable.Column>;
};
export default TableColumn;
