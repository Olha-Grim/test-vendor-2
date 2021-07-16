export default Paragraph;
export type Props = {
    code: boolean;
    copyable: boolean | "copyable";
    delete: boolean;
    disabled: boolean;
    editable: boolean | any;
    ellipsis: boolean | "ellipsis";
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
 * @prop {boolean | "copyable"} copyable
 * @prop {boolean} delete
 * @prop {boolean} disabled
 * @prop {boolean | editable} editable
 * @prop {boolean | "ellipsis"} ellipsis
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
 */
declare function Paragraph({ code, copyable, disabled, editable, ellipsis, mark, onClick, strong, italic, type, underline, className, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map