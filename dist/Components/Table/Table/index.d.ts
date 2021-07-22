export default Table;
export type Props = {
    bordered: boolean;
    columns: any;
    components: any;
    dataSource: object[];
    expandable: any;
    footer: (arg0: any) => any;
    getPopupContainer: (triggerNode: any) => HTMLElement;
    /**
     * } loading
     */
    Props: boolean | any;
    locale: object;
    pagination: object;
    rowClassName: (arg0: any, arg1: any) => string;
    rowKey: string | ((arg0: any) => string);
    rowSelection: object;
    scroll: object;
    showHeader: boolean;
    /**
     * } showSorterTooltip
     */
    props: boolean | any;
    size: "default" | "middle" | "small";
    sortDirections: [];
    sticky: boolean | {
        offsetHeader?: number;
        offsetScroll?: number;
        getContainer?: () => HTMLElement;
    };
    summary: (currentData: any) => React.ReactNode;
    /**
     * - | auto | fixed	} tableLayout
     */
    "": any;
    title: (currentPageData: any) => void;
    children: JSX.Element;
};
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
declare function Table({ bordered, columns, components, dataSource, expandable, footer, getPopupContainer, loading, locale, pagination, rowClassName, rowKey, rowSelection, scroll, showHeader, showSorterTooltip, size, sortDirections, sticky, summary, tableLayout, title, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map