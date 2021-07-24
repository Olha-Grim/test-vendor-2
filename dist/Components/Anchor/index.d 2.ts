export default Anchor;
export type Props = {
    affix: boolean;
    bounds: number;
    getContainer: () => HTMLElement;
    getCurrentAnchor: () => string;
    offsetTop: number;
    showInkInFixed: boolean;
    targetOffset: number;
    onChange: (currentActiveLink: string) => void;
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>, link: {
        title: React.ReactNode;
        href: string;
    }) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} affix
 * @prop {number} bounds
 * @prop {() => HTMLElement} getContainer
 * @prop {() => string	} getCurrentAnchor
 * @prop {number} offsetTop
 * @prop {boolean} showInkInFixed
 * @prop {number} targetOffset
 * @prop {(currentActiveLink: string) => void	} onChange
 * @prop {(e: React.MouseEvent<HTMLElement, MouseEvent>, link: { title: React.ReactNode; href: string; }) => void} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Anchor({ affix, bounds, getContainer, getCurrentAnchor, offsetTop, showInkInFixed, targetOffset, onChange, onClick, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map