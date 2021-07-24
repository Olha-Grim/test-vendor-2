export default Row;
export type Props = {
    align: "middle" | "top" | "bottom" | "stretch" | undefined;
    gutter: Gutter | [Gutter, Gutter] | undefined;
    justify: "start" | "end" | "center" | "space-around" | "space-between";
    wrap: boolean;
    className: string;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {"middle" | "top" | "bottom" | "stretch" | undefined} align
 * @prop {Gutter | [Gutter, Gutter] | undefined} gutter
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
import { Gutter } from "antd/lib/grid/row";
//# sourceMappingURL=index.d.ts.map