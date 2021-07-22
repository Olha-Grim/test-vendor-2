export default Transfer;
export type Props = {
    dataSource: any[];
    disabled: boolean;
    filterOption: (inputValue: string, item: any) => boolean;
    footer: (props: any) => React.ReactNode;
    listStyle: object | ((direction: "left" | "right") => object);
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
    render: (record: any) => React.ReactNode;
    selectAllLabels: React.ReactNode | ((info: {
        selectedCount: number;
        totalCount: number;
    }) => React.ReactNode)[];
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
 * @prop {RecordType[]} dataSource
 * @prop {boolean} disabled
 * @prop {(inputValue: string, item: RecordType) => boolean} filterOption
 * @prop {(props:any) => React.ReactNode	} footer
 * @prop {object | ((direction: "left" | "right") => object)} listStyle
 * @prop {{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: React.ReactNode; }	} locale
 * @prop {boolean} oneWay
 * @prop { string[]} operations
 * @prop {object} operationStyle
 * @prop {boolean | { pageSize: number }} pagination
 * @prop {(record:any ) => React.ReactNode} render
 * @prop {(React.ReactNode | ((info: { selectedCount: number, totalCount: number }) => React.ReactNode)[])	} selectAllLabels
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
//# sourceMappingURL=index.d.ts.map