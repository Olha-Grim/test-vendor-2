export default CheckableTag;
export type Props = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} checked
 * @prop {(checked: boolean) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function CheckableTag({ checked, onChange, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map