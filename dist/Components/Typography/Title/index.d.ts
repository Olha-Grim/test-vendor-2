export default Title;
export type Props = {
    code: boolean;
    copyable: boolean | "copyable";
    delete: boolean;
    disabled: boolean;
    editable: boolean | "editable";
    ellipsis: boolean | "ellipsis";
    /**
     * : 1, 2, 3, 4, 5} level
     */
    "": number;
    mark: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    italic: boolean;
    type: "secondary" | "success" | "warning" | "danger";
    underline: boolean | undefined;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} code
 * @prop {boolean | "copyable"} copyable
 * @prop {boolean} delete
 * @prop {boolean} disabled
 * @prop {boolean | "editable"} editable
 * @prop {boolean | "ellipsis"} ellipsis
 * @prop { number: 1, 2, 3, 4, 5} level
 * @prop {boolean} mark
 * @prop {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} onClick
 * @prop {boolean} italic
 * @prop {"secondary" | "success" | "warning" | "danger"} type
 * @prop {boolean | undefined} underline
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Title({ code, copyable, disabled, editable, ellipsis, level, mark, onClick, italic, type, underline, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map