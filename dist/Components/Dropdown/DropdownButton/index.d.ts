export default DropdownButton;
export type Props = {
    buttonsRender: (buttons: React.ReactNode[]) => React.ReactNode[];
    disabled: boolean;
    icon: React.ReactNode;
    overlay: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    placement: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
    size: 'small' | 'middle' | 'large' | undefined;
    trigger: ('click' | 'hover' | 'contextMenu')[];
    type: 'primary' | 'ghost' | 'dashed' | undefined;
    visible: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    onVisibleChange: (visible: boolean) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {(buttons: React.ReactNode[]) => React.ReactNode[]} buttonsRender
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {React.ReactElement<any, string | React.JSXElementConstructor<any>>} overlay
 * @prop {"topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined} placement
 * @prop {'small' | 'middle' | 'large' | undefined} size
 * @prop {('click' | 'hover' | 'contextMenu')[]} trigger
 * @prop {'primary' | 'ghost' | 'dashed' | undefined} type
 * @prop {boolean} visible
 * @prop {React.MouseEventHandler<HTMLButtonElement>} onClick
 * @prop {(visible: boolean) => void	} onVisibleChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function DropdownButton({ buttonsRender, disabled, icon, overlay, placement, size, trigger, type, visible, onClick, onVisibleChange, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map