export default Row;
export type Props = {
    align: number | object | any;
    gutter: number | object | [];
    justify: "start" | "end" | "center" | "space-around" | "space-between";
    wrap: boolean;
    className: string;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {number | object | array} align
 * @prop {number | object | []} gutter
 * @prop {"start" | "end" | "center" |"space-around" | "space-between"} justify
 * @prop {boolean} wrap
 * @prop {string} className
 * @prop {JSX.Element}children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Row({ children, align, gutter, justify, wrap, className }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map