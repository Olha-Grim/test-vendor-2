export default Tooltip;
export type Props = {
    title: React.ReactNode | (() => React.ReactNode);
    align: object;
    arrowPointAtCenter: boolean;
    autoAdjustOverflow: boolean;
    color: string;
    defaultVisible: boolean;
    destroyTooltipOnHide: boolean | {
        keepParent?: boolean;
    };
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    overlayClassName: string;
    overlayStyle: object;
    placement: TooltipPlacement | undefined;
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
 * @prop {object} align
 * @prop {boolean} arrowPointAtCenter
 * @prop {boolean} autoAdjustOverflow
 * @prop {string} color
 * @prop {boolean} defaultVisible
 * @prop {boolean | { keepParent?: boolean }	} destroyTooltipOnHide
 * @prop {(triggerNode:HTMLElement)=>HTMLElement	} getPopupContainer
 * @prop {number} mouseEnterDelay
 * @prop {number} mouseLeaveDelay
 * @prop {string} overlayClassName
 * @prop {object} overlayStyle
 * @prop {TooltipPlacement | undefined} placement
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
import { TooltipPlacement } from "antd/lib/tooltip";
//# sourceMappingURL=index.d.ts.map