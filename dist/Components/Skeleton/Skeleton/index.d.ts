export default Skeleton;
export type SkeletonProps = {
    active: boolean;
    avatar: boolean | SkeletonAvatarProps;
    loading: boolean;
    paragraph: boolean | SkeletonParagraphProps;
    round: boolean;
    title: boolean | SkeletonTitleProps;
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
import { SkeletonAvatarProps } from "antd/lib/skeleton/Skeleton";
import { SkeletonParagraphProps } from "antd/lib/skeleton/Paragraph";
import { SkeletonTitleProps } from "antd/lib/skeleton/Title";
//# sourceMappingURL=index.d.ts.map