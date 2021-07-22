export default Result;
export type Props = {
    extra: React.ReactNode;
    icon: React.ReactNode;
    status: "success" | "error" | "info" | "warning" | 404 | 403 | 500;
    subTitle: React.ReactNode;
    title: React.ReactNode;
};
/**
 *
 * @typedef Props
 * @prop {React.ReactNode} extra
 * @prop {React.ReactNode} icon
 * @prop {"success" | "error" | "info" | "warning" | 404 | 403 | 500	} status
 * @prop {React.ReactNode} subTitle
 * @prop {React.ReactNode} title
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Result({ extra, icon, status, subTitle, title }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map