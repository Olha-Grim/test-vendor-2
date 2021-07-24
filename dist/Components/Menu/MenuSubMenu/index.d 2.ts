export default SubMenu;
export type Props = {
    disabled: boolean;
    icon: React.ReactNode;
    key: string;
    popupClassName: string;
    title: string;
    popupOffset: [number, number];
    onTitleClick: (e: {
        key: string;
        domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
    }) => void;
    children: Array<(({ danger, disabled, icon, key, title, children }: import("../MenuItem").Props) => JSX.Element) | (({ disabled, icon, key, title, popupClassName, popupOffset, onTitleClick, children, }: Props) => JSX.Element)>;
};
/**
 *
 * @typedef Props
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {string} key
 * @prop {string} popupClassName
 * @prop {string} title
 * @prop {[number, number]	} popupOffset
 * @prop {(e: {key: string; domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>}) => void} onTitleClick
 * @prop {Array<MenuItem | SubMenu>} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function SubMenu({ disabled, icon, key, title, popupClassName, popupOffset, onTitleClick, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map