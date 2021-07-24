export default Transfer;
export type Props = {
    dataSource: any;
    disabled: boolean;
    filterOption: (inputValue: string, item: any) => boolean;
    footer: (props: any) => React.ReactNode;
    listStyle: React.CSSProperties | ((style: ListStyle) => React.CSSProperties) | undefined;
    locale: {
        itemUnit: string;
        itemsUnit: string;
        searchPlaceholder: string;
        notFoundContent: React.ReactNode;
    };
    oneWay: boolean;
    operations: string[];
    operationStyle: object;
    pagination: boolean | {
        pageSize: number;
    };
    render: (record: any) => RenderResult;
    selectAllLabels: SelectAllLabel[] | undefined;
    selectedKeys: string[];
    showSearch: boolean;
    showSelectAll: boolean;
    targetKeys: string[];
    titles: React.ReactNode[];
    onChange: (targetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void;
    onScroll: (direction: 'left' | 'right', e: React.SyntheticEvent<HTMLUListElement>) => void;
    onSearch: (direction: 'left' | 'right', value: string) => void;
    onSelectChange: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void;
};
/**
 *
 * @typedef Props
 * @prop {any} dataSource
 * @prop {boolean} disabled
 * @prop {(inputValue: string, item: any) => boolean} filterOption
 * @prop {(props:any) => React.ReactNode	} footer
 * @prop {React.CSSProperties | ((style: ListStyle) => React.CSSProperties) | undefined} listStyle
 * @prop {{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: React.ReactNode; }	} locale
 * @prop {boolean} oneWay
 * @prop { string[]} operations
 * @prop {object} operationStyle
 * @prop {boolean | { pageSize: number }} pagination
 * @prop {(record:any ) => RenderResult} render
 * @prop {SelectAllLabel[] | undefined} selectAllLabels
 * @prop {string[]	} selectedKeys
 * @prop {boolean} showSearch
 * @prop {boolean } showSelectAll
 * @prop {string[]	} targetKeys
 * @prop {React.ReactNode[]	} titles
 * @prop {(targetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void} onChange
 * @prop {(direction: 'left' | 'right', e: React.SyntheticEvent<HTMLUListElement>) => void} onScroll
 * @prop {(direction: 'left' | 'right', value: string) => void} onSearch
 * @prop {(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void} onSelectChange
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Transfer({ dataSource, disabled, filterOption, footer, listStyle, locale, oneWay, operations, operationStyle, pagination, render, selectAllLabels, selectedKeys, showSearch, showSelectAll, targetKeys, titles, onChange, onScroll, onSearch, onSelectChange, }: Props): JSX.Element;
import React from "react";
import { ListStyle } from "antd/lib/transfer";
import { RenderResult } from "antd/lib/transfer";
import { SelectAllLabel } from "antd/lib/transfer";
//# sourceMappingURL=index.d.ts.map