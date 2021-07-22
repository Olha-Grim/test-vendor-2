export default CheckboxGroup;
export type Props = {
    defaultValue: string[];
    disabled: boolean;
    name: string;
    options: Array<CheckboxOptionType | string>;
    value: string[];
    onChange: (checkedValue: Array<string | number | boolean>) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string[]} defaultValue
 * @prop {boolean} disabled
 * @prop {string} name
 * @prop {Array<CheckboxOptionType | string>} options
 * @prop {string[]} value
 * @prop {(checkedValue: Array<string | number | boolean>) => void} onChange
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function CheckboxGroup({ defaultValue, disabled, name, options, value, onChange, children, }: Props): JSX.Element;
import { CheckboxOptionType } from "antd/lib/checkbox";
//# sourceMappingURL=index.d.ts.map