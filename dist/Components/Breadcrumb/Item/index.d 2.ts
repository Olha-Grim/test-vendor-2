export default BreadcrumbItem;
export type Props = {
    className: string;
    dropdownProps: DropDownProps;
    href: string;
    overlay: React.ReactElement<any, string>;
    onClick: (event: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement, MouseEvent>) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {DropDownProps} dropdownProps
 * @prop {string} href
 * @prop {React.ReactElement<any, string> } overlay
 * @prop {(event: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement, MouseEvent>)=> void} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function BreadcrumbItem({ className, dropdownProps, href, overlay, onClick, children, }: Props): JSX.Element;
import { DropDownProps } from "antd/lib/dropdown/dropdown";
import React from "react";
//# sourceMappingURL=index.d.ts.map