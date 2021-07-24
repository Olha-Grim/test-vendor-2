export default Col;
export type Props = {
    flex: string | number;
    offset: number;
    order: number;
    pull: number;
    push: number;
    span: number;
    xs: number | object;
    sm: number | object;
    lg: number | object;
    xl: number | object;
    xxl: number | object;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string | number} flex
 * @prop {number} offset
 * @prop {number} order
 * @prop {number} pull
 * @prop {number} push
 * @prop {number} span
 * @prop {number | object} xs
 * @prop {number | object} sm
 * @prop {number | object} lg
 * @prop {number | object} xl
 * @prop {number | object} xxl
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Col({ children, flex, offset, order, pull, push, span, xs, sm, lg, xl, xxl, }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map