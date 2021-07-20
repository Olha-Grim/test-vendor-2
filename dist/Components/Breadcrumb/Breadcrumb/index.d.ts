export default Breadcrumb;
export type Props = {
    itemRender: (route: any, params: any, routes: [], paths: string) => React.ReactNode;
    params: object;
    routes: [];
    separator: React.ReactNode;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {(route: any, params: any, routes: [], paths: string) => React.ReactNode} itemRender
 * @prop {object} params
 * @prop {[]} routes
 * @prop {React.ReactNode} separator
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Breadcrumb({ itemRender, params, routes, separator, children }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map