export default Menu;
export type Props = {
    defaultOpenKeys: string[];
    defaultSelectedKeys: string[];
    expandIcon: React.ReactNode | ((props: any & {
        isSubMenu: boolean;
    }) => React.ReactNode);
    forceSubMenuRender: boolean;
    inlineCollapsed: boolean;
    inlineIndent: number;
    mode: "vertical" | "horizontal" | "inline";
    multiple: boolean;
    openKeys: string[];
    overflowedIndicator: React.ReactNode;
    selectable: boolean;
    selectedKeys: string[];
    style: React.CSSProperties;
    subMenuCloseDelay: number;
    subMenuOpenDelay: number;
    theme: "light" | "dark";
    triggerSubMenuAction: "hover" | "click";
    onClick: (item: any, key: any, keyPath: any, domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onDeselect: (item: any, key: any, keyPath: any, selectedKeys: string[], domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onOpenChange: (openKeys: string[]) => void;
    onSelect: (item: any, key: any, keyPath: any, selectedKeys: string[], domEvent: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => void;
};
/**
 *
 * @typedef Props
 * @prop {string[]	} defaultOpenKeys
 * @prop {string[]} defaultSelectedKeys
 * @prop {React.ReactNode | (props: SubMenuProps & { isSubMenu: boolean }) => React.ReactNode	} expandIcon
 * @prop {boolean} forceSubMenuRender
 * @prop {boolean} inlineCollapsed
 * @prop {number} inlineIndent
 * @prop {"vertical" | "horizontal" | "inline"} mode
 * @prop {boolean} multiple
 * @prop {string[]	} openKeys
 * @prop {React.ReactNode} overflowedIndicator
 * @prop {boolean} selectable
 * @prop {string[]	} selectedKeys
 * @prop {React.CSSProperties}  style
 * @prop {number} subMenuCloseDelay
 * @prop {number} subMenuOpenDelay
 * @prop {"light" | "dark"} theme
 * @prop {"hover" | "click"} triggerSubMenuAction
 * @prop {( item:any, key:any, keyPath:any, domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> )=>void} onClick
 * @prop {( item:any, key:any, keyPath:any,  selectedKeys:string[], domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> )=> void	} onDeselect
 * @prop {(openKeys: string[])=> void} onOpenChange
 * @prop {(item: any, key: any, keyPath: any, selectedKeys: string[], domEvent: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => void} onSelect
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Menu({ defaultOpenKeys, defaultSelectedKeys, expandIcon, forceSubMenuRender, inlineCollapsed, inlineIndent, mode, multiple, openKeys, overflowedIndicator, selectable, selectedKeys, style, subMenuCloseDelay, subMenuOpenDelay, theme, triggerSubMenuAction, onClick, onDeselect, onOpenChange, onSelect, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map