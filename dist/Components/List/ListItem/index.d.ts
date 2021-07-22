export default ListItem;
export type Props = {
    actions: Array<React.ReactNode>;
    extra: React.ReactNode;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {Array<React.ReactNode>	} actions
 * @prop {React.ReactNode} extra
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function ListItem({ children, actions, extra }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map