export default Step;
export type Props = {
    description: React.ReactNode;
    disabled: boolean;
    icon: React.ReactNode;
    status: "error" | "wait" | "process" | "finish" | undefined;
    subTitle: React.ReactNode;
    title: React.ReactNode;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {React.ReactNode} description
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {"error" | "wait" | "process" | "finish" | undefined} status
 * @prop {React.ReactNode} subTitle
 * @prop {React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Step({ description, disabled, icon, status, subTitle, title, children }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map