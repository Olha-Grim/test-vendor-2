import React from "react";
import { Table as AntdTable } from "antd";

/**
 *
 * @typedef Props
 * @prop {boolean} bordered
 * @prop {ColumnsType<RecordType>} columns
 * @prop {TableComponents} components
 * @prop {object[]	} dataSource
 * @prop {expandable} expandable
 * @prop {function(currentPageData)	} footer
 * @prop {(triggerNode) => HTMLElement	} getPopupContainer
 * @prop {boolean | Spin Props} loading
 * @prop {object} locale
 * @prop {object} pagination
 * @prop {function(record, index): string	} rowClassName
 * @prop {string | function(record): string	} rowKey
 * @prop {object} rowSelection
 * @prop {object} scroll
 * @prop {boolean} showHeader
 * @prop {boolean | Tooltip props} showSorterTooltip
 * @prop {"default" | "middle" | "small"	} size
 * @prop {[]} sortDirections
 * @prop {boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}	} sticky
 * @prop {(currentData) => React.ReactNode} summary
 * @prop {- | auto | fixed	} tableLayout
 * @prop {(currentPageData)=> void} title
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
