export default SkeletonButton;
export type Props = {
    active: boolean;
    shape: "circle" | "square";
    size: "large" | "small" | "default";
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} active
 * @prop {"circle" | "square"} shape
 * @prop {"large" | "small" | "default"} size
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function SkeletonButton({ active, shape, size, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map