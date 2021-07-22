export default Tooltip;
export type Props = {
    /**
     * *The following APIs are shared by Tooltip, Popconfirm, Popover.
     */
    title: React.ReactNode | (() => React.ReactNode);
    align: object;
    arrowPointAtCenter: boolean;
    autoAdjustOverflow: boolean;
    color: string;
    defaultVisible: boolean;
    destroyTooltipOnHide: boolean | {
        keepParent?: boolean;
    };
    getPopupContainer: (triggerNode: any) => void;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    overlayClassName: string;
    overlayStyle: object;
    placement: string;
    trigger: "hover" | "focus" | "click" | "contextMenu" | Array<string>;
    visible: boolean;
    zIndex: number;
    onVisibleChange: (visible: any) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {React.ReactNode | (() => React.ReactNode)	} title
 * *The following APIs are shared by Tooltip, Popconfirm, Popover.
 * @prop {object} align
 * @prop {boolean} arrowPointAtCenter
 * @prop {boolean} autoAdjustOverflow
 * @prop {string} color
 * @prop {boolean} defaultVisible
 * @prop {boolean | { keepParent?: boolean }	} destroyTooltipOnHide
 * @prop {(triggerNode:any)=>void	} getPopupContainer
 * @prop {number} mouseEnterDelay
 * @prop {number} mouseLeaveDelay
 * @prop {string} overlayClassName
 * @prop {object} overlayStyle
 * @prop {string} placement
 * @prop {"hover" | "focus" | "click" | "contextMenu" | Array<string>	} trigger
 * @prop {boolean} visible
 * @prop {number} zIndex
 * @prop {(visible:any ) => void} onVisibleChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Tooltip({ getPopupContainer, mouseEnterDelay, mouseLeaveDelay, overlayClassName, overlayStyle, placement, trigger, visible, zIndex, onVisibleChange, children, title, align, arrowPointAtCenter, autoAdjustOverflow, color, defaultVisible, destroyTooltipOnHide, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map