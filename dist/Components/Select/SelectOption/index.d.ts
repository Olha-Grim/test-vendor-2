export default SelectOption;
export type Props = {
    className: string;
    disabled: boolean;
    title: string;
    value: string | number;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {boolean} disabled
 * @prop {string} title
 * @prop {string | number} value
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function SelectOption({ className, disabled, title, value, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map