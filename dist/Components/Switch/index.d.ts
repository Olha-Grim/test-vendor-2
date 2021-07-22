export default Switch;
export type Props = {
    autoFocus: boolean;
    checked: boolean;
    checkedChildren: React.ReactNode;
    className: string;
    defaultChecked: boolean;
    disabled: boolean;
    loading: boolean;
    size: "small" | "default" | undefined;
    unCheckedChildren: React.ReactNode;
    ReactNode: (checked: boolean, event: Event) => void;
    onClick: (checked: boolean, event: Event) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean} checked
 * @prop {React.ReactNode} checkedChildren
 * @prop {string} className
 * @prop {boolean} defaultChecked
 * @prop {boolean} disabled
 * @prop {boolean} loading
 * @prop {"small" | "default" | undefined} size
 * @prop {React.ReactNode} unCheckedChildren
 * @prop {(checked: boolean, event: Event)=>void	} ReactNode
 * @prop {(checked: boolean, event: Event)=>void	} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Switch({ autoFocus, checked, checkedChildren, className, defaultChecked, disabled, loading, size, unCheckedChildren, ReactNode, onClick, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map