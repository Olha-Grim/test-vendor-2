export default TreeNode;
export type Props = {
    checkable: boolean;
    disableCheckbox: boolean;
    disabled: boolean;
    icon: React.ReactNode | ((props: any) => React.ReactNode);
    isLeaf: boolean;
    key: string;
    selectable: boolean;
    title: React.ReactNode;
};
/**
 *
 * @typedef Props
 * @prop {boolean} checkable
 * @prop {boolean} disableCheckbox
 * @prop {boolean} disabled
 * @prop {React.ReactNode | ((props:any) => React.ReactNode)	} icon
 * @prop {boolean} isLeaf
 * @prop {string} key
 * @prop {boolean} selectable
 * @prop {React.ReactNode} title
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function TreeNode({ checkable, title, key, selectable, disableCheckbox, disabled, icon, isLeaf, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map