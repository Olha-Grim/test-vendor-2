export default Table;
export type Props = {
    bordered: boolean;
    columns: any;
    components: TableComponents<any>;
    dataSource: object[];
    expandable: ExpandableConfig<object> | undefined;
    footer: (data: readonly object[]) => React.ReactNode;
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    loading: boolean | SpinProps;
    locale: object;
    pagination: object;
    rowClassName: (record: any, index: number) => string;
    rowKey: string | GetRowKey<object> | undefined;
    rowSelection: object;
    scroll: object;
    showHeader: boolean;
    showSorterTooltip: boolean | TooltipPropsWithOverlay | undefined;
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
 * @prop {any} columns
 * @prop {TableComponents<any>} components
 * @prop {object[]	} dataSource
 * @prop {ExpandableConfig<object> | undefined} expandable
 * @prop {(data: readonly object[])=> React.ReactNode} footer
 * @prop {(triggerNode: HTMLElement) => HTMLElement	} getPopupContainer
 * @prop {boolean | SpinProps} loading
 * @prop {object} locale
 * @prop {object} pagination
 * @prop {(record: any, index: number) => string} rowClassName
 * @prop {string | GetRowKey<object> | undefined} rowKey
 * @prop {object} rowSelection
 * @prop {object} scroll
 * @prop {boolean} showHeader
 * @prop {boolean | TooltipPropsWithOverlay | undefined } showSorterTooltip
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
import { TableComponents } from "rc-table/lib/interface";
import { ExpandableConfig } from "rc-table/lib/interface";
import React from "react";
import SpinProps from "antd/lib/spin/index";
import { GetRowKey } from "rc-table/lib/interface";
import { TooltipPropsWithOverlay } from "antd/lib/tooltip";
//# sourceMappingURL=index.d.ts.map