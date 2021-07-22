import { Omit } from "antd/lib/_util/type";
export interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}
//# sourceMappingURL=breadcrumbInterface.d.ts.map