export default Menu;
export type Props = {
    defaultOpenKeys: string[];
    defaultSelectedKeys: string[];
    expandIcon: React.ReactNode | ((props: SubMenuProps & {
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
    onClick: MenuClickEventHandler;
    onDeselect: SelectEventHandler;
    onOpenChange: (openKeys: string[] | Key[]) => void;
    onSelect: SelectEventHandler;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string[]	} defaultOpenKeys
 * @prop {string[]} defaultSelectedKeys
 * @prop {React.ReactNode |((props: SubMenuProps & { isSubMenu: boolean }) => React.ReactNode)	} expandIcon
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
 * @prop {MenuClickEventHandler} onClick
 * @prop {SelectEventHandler} onDeselect
 * @prop {(openKeys: string[] | Key[]) => void} onOpenChange
 * @prop {SelectEventHandler} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Menu({ defaultOpenKeys, defaultSelectedKeys, expandIcon, forceSubMenuRender, inlineCollapsed, inlineIndent, mode, multiple, openKeys, overflowedIndicator, selectable, selectedKeys, style, subMenuCloseDelay, subMenuOpenDelay, theme, triggerSubMenuAction, onClick, onDeselect, onOpenChange, onSelect, children, }: Props): JSX.Element;
import React from "react";
import { SubMenuProps } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { SelectEventHandler } from "rc-menu/lib/interface";
import { Key } from "rc-tree/lib/interface";
//# sourceMappingURL=index.d.ts.map