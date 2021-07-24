export default MenuItem;
export type Props = {
    danger: boolean;
    disabled: boolean;
    icon: React.ReactNode;
    key: string;
    title: string;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} danger
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {string} key
 * @prop {string} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function MenuItem({ danger, disabled, icon, key, title, children }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map