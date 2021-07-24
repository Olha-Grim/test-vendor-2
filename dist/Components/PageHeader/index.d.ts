export default PageHeader;
export type PageHeaderProps = {
    avatar: React.ForwardRefExoticComponent<import("antd").AvatarProps & React.RefAttributes<unknown>>;
    backIcon: React.ReactNode | boolean;
    breadcrumbRender: (props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode;
    breadcrumb: ({ itemRender, params, routes, separator, children }: import("../Breadcrumb/Breadcrumb").Props) => JSX.Element;
    extra: React.ReactNode;
    footer: React.ReactNode;
    ghost: boolean;
    subTitle: React.ReactNode;
    tags: import("antd").TagType[] | import("antd").TagType;
    title: React.ReactNode;
    onBack: () => void;
    children: JSX.Element;
};
/**
 *
 * @typedef PageHeaderProps
 * @prop {AvatarProps} avatar
 * @prop {React.ReactNode | boolean} backIcon
 * @prop {(props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode} breadcrumbRender
 * @prop {Breadcrumb} breadcrumb
 * @prop {React.ReactNode} extra
 * @prop {React.ReactNode} footer
 * @prop {boolean} ghost
 * @prop {React.ReactNode} subTitle
 * @prop {Tag[] | Tag} tags
 * @prop {React.ReactNode} title
 * @prop {() => void} onBack
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {PageHeaderProps} props
 */
declare function PageHeader({ AvatarProps, backIcon, breadcrumbRender, breadcrumb, extra, footer, ghost, subTitle, tags, title, onBack, children, }: PageHeaderProps): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map