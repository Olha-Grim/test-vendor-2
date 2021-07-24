import React from "react";
import { Table as AntdTable } from "antd";
import SpinProps from "antd/lib/spin/index";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";
import { ColumnsType } from "rc-table/lib/interface";
import { TableComponents } from "rc-table/lib/interface";
/**
 *
 * @typedef Props
 * @prop {boolean} bordered
 * @prop {ColumnsType<object>} columns
 * @prop {TableComponents<any>} components
 * @prop {object[]	} dataSource
 * @prop {boolean} expandable
 * @prop {(data: readonly object[])=> React.ReactNode} footer
 * @prop {(triggerNode: HTMLElement) => HTMLElement	} getPopupContainer
 * @prop {boolean | SpinProps} loading
 * @prop {object} locale
 * @prop {object} pagination
 * @prop {(record: any, index: number) => string} rowClassName
 * @prop {string | ((record: any, index: number) => string)} rowKey
 * @prop {object} rowSelection
 * @prop {object} scroll
 * @prop {boolean} showHeader
 * @prop {boolean | TooltipProps} showSorterTooltip
 * @prop {'small' | 'middle' | 'large' | undefined} size 
 * @prop {[]} sortDirections
 * @prop {boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}	} sticky
 * @prop {(currentData:any) => React.ReactNode} summary
 * @prop { "auto" | "fixed"	} tableLayout
 * @prop {(currentPageData:any)=> React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Table = ({
  bordered,
  columns,
  components,
  dataSource,
  expandable,
  footer,
  getPopupContainer,
  loading,
  locale,
  pagination,
  rowClassName,
  rowKey,
  rowSelection,
  scroll,
  showHeader,
  showSorterTooltip,
  size,
  sortDirections,
  sticky,
  summary,
  tableLayout,
  title,
  children,
}) => {
  const props = {
    bordered,
    columns,
    components,
    dataSource,
    expandable,
    footer,
    getPopupContainer,
    loading,
    locale,
    pagination,
    rowClassName,
    rowKey,
    rowSelection,
    scroll,
    showHeader,
    showSorterTooltip,
    size,
    sortDirections,
    sticky,
    summary,
    tableLayout,
    title,
    children,
  };

  return <AntdTable {...props}>{children}</AntdTable>;
};
export default Table;
