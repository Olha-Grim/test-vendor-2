export default Table;
export type Props = {
    bordered: boolean;
    columns: ColumnsType<object>;
    components: TableComponents<any>;
    dataSource: object[];
    expandable: boolean;
    footer: (data: readonly object[]) => React.ReactNode;
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    loading: boolean | SpinProps;
    locale: object;
    pagination: object;
    rowClassName: (record: any, index: number) => string;
    rowKey: string | ((record: any, index: number) => string);
    rowSelection: object;
    scroll: object;
    showHeader: boolean;
    showSorterTooltip: boolean | TooltipProps;
    size: 'small' | 'middle' | 'large' | undefined;
    sortDirections: [];
    sticky: boolean | {
        offsetHeader?: number;
        offsetScroll?: number;
        getContainer?: () => HTMLElement;
    };
    summary: (currentData: any) => React.ReactNode;
    tableLayout: "auto" | "fixed";
    title: (currentPageData: any) => React.ReactNode;
    children: JSX.Element;
};
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
declare function Table({ bordered, columns, components, dataSource, expandable, footer, getPopupContainer, loading, locale, pagination, rowClassName, rowKey, rowSelection, scroll, showHeader, showSorterTooltip, size, sortDirections, sticky, summary, tableLayout, title, children, }: Props): JSX.Element;
import { ColumnsType } from "rc-table/lib/interface";
import { TableComponents } from "rc-table/lib/interface";
import React from "react";
import SpinProps from "antd/lib/spin/index";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";
//# sourceMappingURL=index.d.ts.map