export default MenuItemGroup;
export type Props = {
    title: React.ReactNode;
    children: (({ danger, disabled, icon, key, title, children }: import("../MenuItem").Props) => JSX.Element)[];
};
/**
 *
 * @typedef Props
 * @prop {React.ReactNode} title
 * @prop {MenuItem[]} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function MenuItemGroup({ title, children }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map