export default CardMeta;
export type Props = {
    avatar: React.ReactNode;
    className: string;
    description: React.ReactNode;
    style: React.CSSProperties;
    title: React.ReactNode;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {React.ReactNode} avatar
 * @prop {string} className
 * @prop {React.ReactNode} description
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function CardMeta({ children, avatar, className, description, style, title, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map