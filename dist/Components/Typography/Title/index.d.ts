export default Title;
export type Props = {
    code: boolean;
    copyable: boolean | any;
    delete: boolean;
    disabled: boolean;
    editable: boolean | any;
    ellipsis: boolean | any;
    level: 5 | 1 | 2 | 3 | 4 | undefined;
    mark: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => void;
    italic: boolean;
    type: "secondary" | "success" | "warning" | "danger";
    underline: boolean | undefined;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} code
 * @prop {boolean | CopyConfig} copyable
 * @prop {boolean} delete
 * @prop {boolean} disabled
 * @prop {boolean | EditConfig} editable
 * @prop {boolean | EllipsisConfig} ellipsis
 * @prop {5 | 1 | 2 | 3 | 4 | undefined} level
 * @prop {boolean} mark
 * @prop {(event: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => void} onClick
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