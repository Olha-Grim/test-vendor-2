import React from "react";
import { Transfer as AntdTransfer } from "antd";
import {RecordType} from 'rc-table/lib/interface';
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

const Transfer = ({
  dataSource,
  disabled,
  filterOption,
  footer,
  listStyle,
  locale,
  oneWay,
  operations,
  operationStyle,
  pagination,
  render,
  selectAllLabels,
  selectedKeys,
  showSearch,
  showSelectAll,
  targetKeys,
  titles,
  onChange,
  onScroll,
  onSearch,
  onSelectChange,
}) => {
  const props = {
    dataSource,
    disabled,
    filterOption,
    footer,
    listStyle,
    locale,
    oneWay,
    operations,
    operationStyle,
    pagination,
    render,
    selectAllLabels,
    selectedKeys,
    showSearch,
    showSelectAll,
    targetKeys,
    titles,
    onChange,
    onScroll,
    onSearch,
    onSelectChange,
  };

  return <AntdTransfer {...props} />;
};
export default Transfer;
