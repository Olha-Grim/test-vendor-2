export default Dropdown;
export type Props = {
    arrow: boolean;
    disabled: boolean;
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    overlay: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    overlayClassName: string;
    overlayStyle: React.CSSProperties;
    placement: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
    trigger: ('click' | 'hover' | 'contextMenu')[];
    visible: boolean;
    onVisibleChange: (visible: boolean) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} arrow
 * @prop {boolean} disabled
 * @prop {(triggerNode: HTMLElement) => HTMLElement} getPopupContainer
 * @prop {React.ReactElement<any, string | React.JSXElementConstructor<any>> } overlay
 * @prop {string} overlayClassName
 * @prop {React.CSSProperties} overlayStyle
 * @prop {"topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined} placement
 * @prop {('click' | 'hover' | 'contextMenu')[]} trigger
 * @prop {boolean} visible
 * @prop {(visible: boolean) => void} onVisibleChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Dropdown({ arrow, disabled, getPopupContainer, overlay, overlayClassName, overlayStyle, placement, trigger, visible, onVisibleChange, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map