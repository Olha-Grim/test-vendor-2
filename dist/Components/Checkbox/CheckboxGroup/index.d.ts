export default CheckboxGroup;
export type Props = {
    defaultValue: string[];
    disabled: boolean;
    name: string;
    options: string[] | (new (text?: string | undefined, value?: string | undefined, defaultSelected?: boolean | undefined, selected?: boolean | undefined) => HTMLOptionElement)[];
    value: string[];
    /**
     * : CheckboxValueType[]): void} onChange
     */
    "": any;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string[]} defaultValue
 * @prop {boolean} disabled
 * @prop {string} name
 * @prop {string[] | Option[]} options
 * @prop {string[]} value
 * @prop {checkedValue: CheckboxValueType[]): void} onChange
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function CheckboxGroup({ autoFocus, checked, defaultChecked, disabled, indeterminate, onChange, children, }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map