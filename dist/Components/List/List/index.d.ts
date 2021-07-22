export default List;
export type Props = {
    bordered: boolean;
    dataSource: any[];
    footer: React.ReactNode;
    grid: object;
    header: React.ReactNode;
    itemLayout: "horizontal" | "vertical";
    /**
     * (more)} loading
     */
    "": boolean | any;
    loadMore: React.ReactNode;
    locale: object;
    pagination: boolean | object;
    renderItem: (item: any) => React.ReactNode;
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
declare function List({ children, bordered, dataSource, footer, grid, header, itemLayout, loading, loadMore, locale, pagination, renderItem, rowKey, size, split, className, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map