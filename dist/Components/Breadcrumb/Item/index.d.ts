export default BreadcrumbItem;
export type Props = {
    className: string;
    dropdownProps: React.ReactElement<any, string>;
    href: string;
    overlay: React.ReactElement<any, string>;
    onClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement, React.MouseEvent>) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {React.ReactElement<any, string>} dropdownProps
 * @prop {string} href
 * @prop {React.ReactElement<any, string> } overlay
 * @prop {(e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement, React.MouseEvent>) => void} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function BreadcrumbItem({ className, dropdownProps, href, overlay, onClick, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map