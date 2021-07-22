export default SkeletonParagraph;
export type SkeletonParagraphProps = {
    rows: number;
    width: number | string | Array<number | string>;
    children: JSX.Element;
};
/**
 *
 * @typedef SkeletonParagraphProps
 * @prop {number} rows
 * @prop {number | string | Array<number | string>	} width
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {SkeletonParagraphProps} props
 */
declare function SkeletonParagraph({ rows, width, children }: SkeletonParagraphProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map