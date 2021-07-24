export default Breadcrumb;
export type Props = {
    itemRender: (route: Route, params: any, routes: Route[], paths: string[]) => React.ReactNode;
    params: object;
    routes: Route[];
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
import { Route } from "antd/lib/breadcrumb/Breadcrumb";
import React from "react";
//# sourceMappingURL=index.d.ts.map