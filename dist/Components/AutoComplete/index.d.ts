export default AutoComplete;
export type Props = {
    allowClear: boolean;
    autoFocus: boolean;
    backfill: boolean;
    defaultActiveFirstOption: boolean;
    defaultOpen: boolean;
    defaultValue: string;
    disabled: boolean;
    dropdownClassName: string;
    /**
     * //  *
     */
    dropdownMatchSelectWidth: boolean | number;
    filterOption: boolean | ((inputValue: any, option: any) => void);
    notFoundContent: string;
    open: boolean;
    options: {
        label: any;
        value: any;
    }[];
    placeholder: string;
    value: string;
    onBlur: () => void;
    onChange: (value: any) => void;
    onDropdownVisibleChange: (open: boolean) => void;
    onFocus: () => void;
    onSearch: (value: any) => void;
    onSelect: (value: any, option: any) => void;
    className: string;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} backfill
 * @prop {boolean} defaultActiveFirstOption
 * @prop {boolean} defaultOpen
 * @prop {string} defaultValue
 * @prop {boolean} disabled
 * @prop {string} dropdownClassName
 * @prop {boolean | number	} dropdownMatchSelectWidth
//  * @prop {boolean | ((inputValue: any, option:any )=> void	)} filterOption
 * @prop {string} notFoundContent
 * @prop {boolean}  open
 * @prop {{ label: any, value:any }[]} options
 * @prop {string} placeholder
 * @prop {string} value
 * @prop {()=> void} onBlur
 * @prop {(value:any ) => void}  onChange
 * @prop {(open: boolean) => void}  onDropdownVisibleChange
 * @prop {()=> void} onFocus
 * @prop {(value:any) => void} onSearch
 * @prop {(value:any, option:any) => void} onSelect
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function AutoComplete({ allowClear, className, autoFocus, backfill, children, defaultActiveFirstOption, defaultOpen, defaultValue, disabled, dropdownClassName, dropdownMatchSelectWidth, notFoundContent, open, options, placeholder, value, onBlur, onChange, onDropdownVisibleChange, onFocus, onSearch, onSelect, }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map