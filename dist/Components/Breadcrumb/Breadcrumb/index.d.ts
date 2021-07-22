export default Breadcrumb;
export type Props = {
    itemRender: (route: any, params: any, routes: any[], paths: string[]) => React.ReactNode;
    params: object;
    routes: any[];
    separator: React.ReactNode;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {(route: Route, params: any, routes: Route[], paths: string[]) => React.ReactNode} itemRender
 * @prop {object} params
 * @prop {Route[]} routes
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