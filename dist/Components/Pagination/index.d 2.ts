export default Pagination;
export type Props = {
    current: number;
    defaultCurrent: number;
    defaultPageSize: number;
    disabled: boolean;
    hideOnSinglePage: boolean;
    itemRender: (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement: React.ReactElement<HTMLElement>) => React.ReactNode;
    pageSize: number;
    pageSizeOptions: string[];
    responsive: boolean;
    showLessItems: boolean;
    showQuickJumper: boolean | {
        goButton: React.ReactNode;
    };
    showSizeChanger: boolean;
    showTitle: boolean;
    showTotalshowTotal: (total: number, range: [number, number]) => React.ReactNode;
    simple: boolean;
    size: "default" | "small";
    total: number;
    onChange: (page: number, pageSize?: number | undefined) => void;
    onShowSizeChange: (current: number, size: number) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {number} current
 * @prop {number} defaultCurrent
 * @prop {number} defaultPageSize
 * @prop {boolean} disabled
 * @prop {boolean} hideOnSinglePage
 * @prop {(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement: React.ReactElement<HTMLElement>,) => React.ReactNode} itemRender
 * @prop {number} pageSize
 * @prop {string[]} pageSizeOptions
 * @prop {boolean} responsive
 * @prop {boolean} showLessItems
 * @prop {boolean | { goButton: React.ReactNode }} showQuickJumper
 * @prop {boolean} showSizeChanger
 * @prop {boolean} showTitle
 * @prop {(total: number, range: [number, number]) => React.ReactNode} showTotalshowTotal
 * @prop {boolean} simple
 * @prop {"default" | "small"} size
 * @prop {number} total
 * @prop {(page: number, pageSize?: number) => void} onChange
 * @prop {(current: number, size: number) => void} onShowSizeChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Pagination({ current, defaultCurrent, defaultPageSize, disabled, hideOnSinglePage, itemRender, pageSize, pageSizeOptions, responsive, showLessItems, showQuickJumper, showSizeChanger, showTitle, showTotalshowTotal, simple, size, total, onChange, onShowSizeChange, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map