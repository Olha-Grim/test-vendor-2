export default Checkbox;
export type Props = {
    autoFocus: boolean;
    checked: boolean;
    defaultChecked: boolean;
    disabled: boolean;
    indeterminate: boolean;
    onChange: (e: any) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean} checked
 * @prop {boolean} defaultChecked
 * @prop {boolean} disabled
 * @prop {boolean} indeterminate
 * @prop {((e: CheckboxChangeEvent) => void} onChange
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Checkbox({ autoFocus, checked, defaultChecked, disabled, indeterminate, onChange, children, }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map