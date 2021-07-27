export default PageHeader;
export type Prop = {
    avatar: AvatarProps;
    backIcon: React.ReactNode | boolean;
    breadcrumbRender: (props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode;
    breadcrumb: BreadcrumbProps | React.ReactElement<BreadcrumbInterface, string | React.JSXElementConstructor<any>> | undefined;
    extra: React.ReactNode;
    footer: React.ReactNode;
    ghost: boolean;
    subTitle: React.ReactNode;
    tags: React.ReactElement<TagType, string | React.JSXElementConstructor<any>>[];
    title: React.ReactNode;
    onBack: () => void;
};
/**
 *
 * @typedef Prop
 * @prop {AvatarProps} avatar
 * @prop {React.ReactNode | boolean} backIcon
 * @prop {(props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode} breadcrumbRender
 * @prop {BreadcrumbProps | React.ReactElement<BreadcrumbInterface, string | React.JSXElementConstructor<any>> | undefined} breadcrumb
 * @prop {React.ReactNode} extra
 * @prop {React.ReactNode} footer
 * @prop {boolean} ghost
 * @prop {React.ReactNode} subTitle
 * @prop {React.ReactElement<TagType, string | React.JSXElementConstructor<any>>[]} tags
 * @prop {React.ReactNode} title
 * @prop {() => void} onBack
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Prop} props
 */
declare function PageHeader({ avatar, backIcon, breadcrumbRender, breadcrumb, extra, footer, ghost, subTitle, tags, title, onBack, }: Prop): JSX.Element;
import { AvatarProps } from "antd/lib/avatar/avatar";
import React from "react";
import { PageHeaderProps } from "antd";
import { BreadcrumbProps } from "antd";
import { BreadcrumbInterface } from "antd/lib/breadcrumb/Breadcrumb";
import { TagType } from "antd";
//# sourceMappingURL=index.d.ts.map