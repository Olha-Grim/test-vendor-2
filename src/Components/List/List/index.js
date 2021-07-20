import React from "react";
import { List as AntdList } from "antd";


/**
 *
 * @typedef Props
 * @prop {boolean} bordered
 * @prop {any[]} dataSource
 * @prop {React.ReactNode} footer
 * @prop {object} grid
 * @prop {React.ReactNode} header
 * @prop {"horizontal" | "vertical"} itemLayout
 * @prop {boolean | SpinProps (more)} loading
 * @prop {React.ReactNode} loadMore
 * @prop {object} locale
 * @prop {boolean | object	} pagination
 * @prop {(item: any) => React.ReactNode	} renderItem
 * @prop {string | Function(record): string	} rowKey
 * @prop {"default" | "large" | "small"	} size
 * @prop {boolean} split
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const List = ({
  children,
  bordered,
  dataSource,
  footer,
  grid,
  header,
  itemLayout,
  loading,
  loadMore,
  locale,
  pagination,
  renderItem,
  rowKey,
  size,
  split,
  className,
}) => {
  const props = {
    children,
    bordered,
    dataSource,
    footer,
    grid,
    header,
    itemLayout,
    loading,
    loadMore,
    locale,
    pagination,
    renderItem,
    rowKey,
    size,
    split,
    className,
  };

  return <AntdList {...props}>{children}</AntdList>;
};
export default List;
