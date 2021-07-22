export default Tag;
export type Props = {
    closable: boolean;
    closeIcon: React.ReactNode;
    color: string;
    icon: React.ReactNode;
    visible: boolean;
    onClose: (e: React.MouseEvent<HTMLElement>) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} closable
 * @prop {React.ReactNode} closeIcon
 * @prop {string} color
 * @prop {React.ReactNode} icon
 * @prop {boolean} visible
 * @prop {(e: React.MouseEvent<HTMLElement>) => void} onClose
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Tag({ children, closable, closeIcon, color, icon, visible, onClose, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map