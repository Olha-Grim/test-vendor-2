import React from "react";
import { PageHeader as AntdPageHeader } from "antd";
import { Tag } from "antd";
import { Breadcrumb } from "../Breadcrumb";
import AvatarProps from "antd/lib/avatar/avatar";

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

const PageHeader = ({
  AvatarProps,
  backIcon,
  breadcrumbRender,
  breadcrumb,
  extra,
  footer,
  ghost,
  subTitle,
  tags,
  title,
  onBack,
  children,
}) => {
  const props = {
    AvatarProps,
    backIcon,
    breadcrumbRender,
    breadcrumb,
    extra,
    footer,
    ghost,
    subTitle,
    tags,
    title,
    onBack,
    children,
  };
  return <AntdPageHeader {...props}>{children}</AntdPageHeader>;
};

export default PageHeader;
