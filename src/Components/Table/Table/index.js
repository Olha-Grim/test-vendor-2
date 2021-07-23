import React from "react";
import { Table as AntdTable } from "antd";
import SpinProps from "antd/lib/spin/index";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";
import { ColumnsType, TableComponents, RecordType} from 'rc-table/lib/interface';
/**
 *
 * @typedef Props
 * @prop {boolean} bordered
 * @prop {ColumnsType<RecordType>} columns
 * @prop {TableComponents} components
 * @prop {object[]	} dataSource
 * @prop {boolean} expandable
 * @prop {(currentPageData: Object[]) => React.ReactNode} footer
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
 * @prop {"default" | "middle" | "small"} size SizeType
 * @prop {[]} sortDirections
 * @prop {boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}	} sticky
 * @prop {(currentData:any) => React.ReactNode} summary
 * @prop {  "auto" | "fixed"	} tableLayout
 * @prop {(currentPageData:any)=> void} title
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
