export default Drawer;
export type Props = {
    afterVisibleChange: (visible: boolean) => void;
    bodyStyle: object;
    className: string;
    closable: boolean;
    closeIcon: React.ReactNode;
    contentWrapperStyle: React.CSSProperties;
    destroyOnClose: boolean;
    drawerStyle: object;
    footer: React.ReactNode;
    footerStyle: React.CSSProperties;
    forceRender: boolean;
    getContainer: string | HTMLElement | (() => HTMLElement) | false;
    headerStyle: object;
    height: string | number;
    keyboard: boolean;
    mask: boolean;
    maskClosable: boolean;
    maskStyle: React.CSSProperties;
    placement: "top" | "right" | "bottom" | "left";
    push: boolean | {
        distance: string | number;
    };
    style: React.CSSProperties;
    title: React.ReactNode;
    visible: boolean;
    width: string | number;
    zIndex: number;
    onClose: (e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {(visible: boolean) => void} afterVisibleChange
 * @prop {object} bodyStyle
 * @prop {string} className
 * @prop {boolean} closable
 * @prop {React.ReactNode} closeIcon
 * @prop {React.CSSProperties} contentWrapperStyle
 * @prop {boolean} destroyOnClose
 * @prop {object} drawerStyle
 * @prop {React.ReactNode} footer
 * @prop {React.CSSProperties} footerStyle
 * @prop {boolean} forceRender
 * @prop {string | HTMLElement | (() => HTMLElement) | false} getContainer
 * @prop {object} headerStyle
 * @prop {string | number	} height
 * @prop {boolean} keyboard
 * @prop {boolean} mask
 * @prop {boolean} maskClosable
 * @prop {React.CSSProperties} maskStyle
 * @prop {"top" | "right" | "bottom" | "left"	} placement
 * @prop {boolean | { distance: string | number }	} push
 * @prop {React.CSSProperties	} style
 * @prop {React.ReactNode} title
 * @prop {boolean} visible
 * @prop {string | number	} width
 * @prop {number} zIndex
 * @prop {(e: | React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void} onClose
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Drawer({ afterVisibleChange, bodyStyle, className, closable, closeIcon, contentWrapperStyle, destroyOnClose, drawerStyle, footer, footerStyle, forceRender, getContainer, headerStyle, height, keyboard, mask, maskClosable, maskStyle, placement, push, style, title, visible, width, zIndex, onClose, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map