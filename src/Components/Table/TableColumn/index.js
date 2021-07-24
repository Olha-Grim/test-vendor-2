import React from "react";
import { Table as AntdTable } from "antd";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import { FilterDropdownProps,  } from "antd/lib/table/interface";

import { TooltipProps } from "rc-tooltip/lib/Tooltip";
import { ColumnProps } from "antd/lib/table/Column";

/**
 *
 * @typedef Props
 * @prop {"left" | "right" | "center"} align
 * @prop {string}  className
 * @prop {number}  colSpan
 * @prop {string | string[]		}  dataIndex
 * @prop {string[]	}  defaultFilteredValue
 * @prop {"ascend" | "descend"	} defaultSortOrder
 * @prop {boolean} editable
 * @prop {boolean | {showTitle?: boolean }	} ellipsis
 * @prop {React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode)} filterDropdown
 * @prop {boolean} filterDropdownVisible
 * @prop {boolean} filtered
 * @prop {string[]	} filteredValue
 * @prop {React.ReactNode | ((filtered: boolean) => React.ReactNode	)} filterIcon
 * @prop {boolean} filterMultiple
 * @prop {Record<string, string[]>} filters
 * @prop {boolean | string	} fixed
 * @prop {string} key
 * @prop {(text:string, record:any, index:any)=>{}	} render
 * @prop {Breakpoint[]} responsive
 * @prop {(record:any, prevRecord:any) => boolean} shouldCellUpdate
 * @prop {boolean | TooltipProps} showSorterTooltip
 * @prop {[]} sortDirections
 * @prop {function | boolean	} sorter
 * @prop {boolean | string	} sortOrder
 * @prop {React.ReactNode | (( sortOrder:any, sortColumn:any, filters:any ) => React.ReactNode)	} title
 * @prop {string | number	} width
 * @prop {(record: any, rowIndex:any)=>void	} onCell
 * @prop {(value: string | number | boolean, record: RecordType) => boolean} onFilter
 * @prop {(visible:any)=> {}	} onFilterDropdownVisibleChange
 * @prop {(column:any)=>void	}  onHeaderCell
 * @prop {JSX.IntrinsicAttributes & ColumnProps<any>} children
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
