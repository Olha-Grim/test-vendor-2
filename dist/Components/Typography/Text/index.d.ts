export default Text;
export type Props = {
    code: boolean;
    /**
     * : boolean | CopyConfig} copyable
     */
    "": any | null;
    delete: boolean;
    disabled: boolean;
    editable: any;
    ellipsis: boolean;
    keyboard: boolean;
    mark: boolean;
    onClick: (e?: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => void;
    strong: boolean;
    italic: boolean;
    type: "secondary" | "success" | "warning" | "danger";
    underline: boolean;
    className: string;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} code
 * @prop {copyable?: boolean | CopyConfig} copyable
 * @prop {boolean} delete
 * @prop {boolean} disabled
 * @prop {} editable
 * @prop {boolean} ellipsis
 * @prop {boolean} keyboard
 * @prop {boolean} mark
 * @prop {(e?: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => void} onClick
 * @prop {boolean} strong
 * @prop {boolean} italic
 * @prop {"secondary" | "success" | "warning" | "danger"} type
 * @prop {boolean} underline
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 *
 */
declare function Text({ code, className, copyable, disabled, editable, ellipsis, keyboard, mark, onClick, strong, italic, type, underline, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map