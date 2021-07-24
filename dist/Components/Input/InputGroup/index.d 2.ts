export default InputGroup;
export type Props = {
    compact: boolean;
    size: "small" | "large" | "default" | undefined;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} compact
 * @prop {"small" | "large" | "default" | undefined} size
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function InputGroup({ compact, size, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map