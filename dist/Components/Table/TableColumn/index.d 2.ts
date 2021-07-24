export default TableColumn;
export type Props = {
    align: "left" | "right" | "center";
    className: string;
    colSpan: number;
    dataIndex: string | string[];
    defaultFilteredValue: string[];
    defaultSortOrder: "ascend" | "descend";
    editable: boolean;
    ellipsis: boolean | {
        showTitle?: boolean;
    };
    filterDropdown: React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode);
    filterDropdownVisible: boolean;
    filtered: true;
    filteredValue: string[];
    filterIcon: React.ReactNode | ((filtered: boolean) => React.ReactNode);
    filterMultiple: boolean;
    filters: ColumnFilterItem[];
    fixed: FixedType | undefined;
    key: string;
    render: (text: string, record: any, index: any) => {};
    responsive: Breakpoint[];
    shouldCellUpdate: (record: any, prevRecord: any) => boolean;
    showSorterTooltip: TooltipPropsWithOverlay;
    sortDirections: [];
    sorter: {
        compare?: CompareFn<any> | undefined;
        multiple?: number | undefined;
    };
    sortOrder: SortOrder | undefined;
    title: React.ReactNode | ((sortOrder: any, sortColumn: any, filters: any) => React.ReactNode);
    width: string | number;
    onCell: (record: any, rowIndex: any) => React.HTMLAttributes<HTMLElement>;
    onFilter: (value: string | number | boolean, record: any) => boolean;
    onFilterDropdownVisibleChange: (visible: any) => {};
    onHeaderCell: (column: any) => React.HTMLAttributes<HTMLElement>;
};
/**
 *
 * @typedef Props
 * @prop {"left" | "right" | "center"} align
 * @prop {string}  className
 * @prop {number}  colSpan
 * @prop {string | string[]		}  dataIndex
 * @prop {string[]	}  defaultFilteredValue
 * @prop {"ascend" | "descend"	} defaultSortOrder
 * @prop {boolean} editable
 * @prop {boolean | {showTitle?: boolean }	} ellipsis
 * @prop {React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode)} filterDropdown
 * @prop {boolean} filterDropdownVisible
 * @prop {true} filtered
 * @prop {string[]	} filteredValue
 * @prop {React.ReactNode | ((filtered: boolean) => React.ReactNode	)} filterIcon
 * @prop {boolean} filterMultiple
 * @prop {ColumnFilterItem[]} filters
 * @prop {FixedType | undefined} fixed
 * @prop {string} key
 * @prop {(text:string, record:any, index:any)=>{}	} render
 * @prop {Breakpoint[]} responsive
 * @prop {(record:any, prevRecord:any) => boolean} shouldCellUpdate
 * @prop {TooltipPropsWithOverlay} showSorterTooltip
 * @prop {[]} sortDirections
 * @prop {{ compare?: CompareFn<any> | undefined; multiple?: number | undefined; }} sorter
 * @prop {SortOrder | undefined} sortOrder
 * @prop {React.ReactNode | (( sortOrder:any, sortColumn:any, filters:any ) => React.ReactNode)	} title
 * @prop {string | number	} width
 * @prop {(record: any, rowIndex:any)=> React.HTMLAttributes<HTMLElement>	} onCell
 * @prop {(value: string | number | boolean, record: any) => boolean} onFilter
 * @prop {(visible:any)=> {}	} onFilterDropdownVisibleChange
 * @prop {(column:any)=>React.HTMLAttributes<HTMLElement>	}  onHeaderCell
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function TableColumn({ align, className, colSpan, dataIndex, defaultFilteredValue, defaultSortOrder, editable, ellipsis, filterDropdown, filterDropdownVisible, filtered, filteredValue, filterIcon, filterMultiple, filters, fixed, key, render, responsive, shouldCellUpdate, showSorterTooltip, sortDirections, sorter, sortOrder, title, width, onCell, onFilter, onFilterDropdownVisibleChange, onHeaderCell, }: Props): JSX.Element;
import React from "react";
import { FilterDropdownProps } from "antd/lib/table/interface";
import { ColumnFilterItem } from "antd/lib/table/interface";
import { FixedType } from "rc-table/lib/interface";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import { TooltipPropsWithOverlay } from "antd/lib/tooltip";
import { CompareFn } from "antd/lib/table/interface";
import { SortOrder } from "antd/lib/table/interface";
//# sourceMappingURL=index.d.ts.map