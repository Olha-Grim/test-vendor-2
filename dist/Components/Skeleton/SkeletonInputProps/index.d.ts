export default SkeletonInput;
export type Props = {
    active: boolean;
    size: "large" | "small" | "default";
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} active
 * @prop {"large" | "small" | "default"} size
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function SkeletonInput({ active, size, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map