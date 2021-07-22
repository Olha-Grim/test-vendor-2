export default Skeleton;
export type SkeletonProps = {
    active: boolean;
    avatar: boolean | any;
    loading: boolean;
    paragraph: boolean | any;
    round: boolean;
    title: boolean | any;
    children: JSX.Element;
};
/**
 *
 * @typedef SkeletonProps
 * @prop {boolean} active
 * @prop {boolean | SkeletonAvatarProps} avatar
 * @prop {boolean} loading
 * @prop {boolean | SkeletonParagraphProps} paragraph
 * @prop {boolean} round
 * @prop {boolean | SkeletonTitleProps} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {SkeletonProps} props
 */
declare function Skeleton({ active, avatar, loading, paragraph, round, title, children, }: SkeletonProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map