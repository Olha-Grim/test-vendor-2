export default List;
export type Props = {
    bordered: boolean;
    dataSource: any[];
    footer: React.ReactNode;
    grid: object;
    header: React.ReactNode;
    itemLayout: "horizontal" | "vertical";
    loading: boolean | SpinProps;
    loadMore: React.ReactNode;
    locale: ListLocale | undefined;
    pagination: false | PaginationConfig | undefined;
    renderItem: (item: any) => React.ReactNode;
    rowKey: string | ((record: any) => string);
    size: "default" | "large" | "small";
    split: boolean;
    className: string;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} bordered
 * @prop {any[]} dataSource
 * @prop {React.ReactNode} footer
 * @prop {object} grid
 * @prop {React.ReactNode} header
 * @prop {"horizontal" | "vertical"} itemLayout
 * @prop {boolean | SpinProps} loading
 * @prop {React.ReactNode} loadMore
 * @prop {ListLocale | undefined} locale
 * @prop {false | PaginationConfig | undefined} pagination
 * @prop {(item: any) => React.ReactNode	} renderItem
 * @prop {string | ((record:any)=>string)	} rowKey
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
declare function List({ children, bordered, dataSource, footer, grid, header, itemLayout, loading, loadMore, locale, pagination, renderItem, rowKey, size, split, className, }: Props): JSX.Element;
import React from "react";
import { SpinProps } from "antd";
import { ListLocale } from "antd/lib/list/index";
import { PaginationConfig } from "antd/es/pagination";
//# sourceMappingURL=index.d.ts.map