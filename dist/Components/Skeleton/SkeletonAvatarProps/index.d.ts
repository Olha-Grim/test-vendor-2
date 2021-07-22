export default SkeletonAvatar;
export type SkeletonAvatarProps = {
    active: boolean;
    shape: "circle" | "square";
    size: number | "large" | "small" | "default";
    children: JSX.Element;
};
/**
 * @typedef SkeletonAvatarProps
 * @prop {boolean} active
 * @prop {"circle" | "square"	} shape
 * @prop {number | "large" | "small" | "default"	} size
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {SkeletonAvatarProps} props
 */
declare function SkeletonAvatar({ active, shape, size, children }: SkeletonAvatarProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map