import React from "react";
import { Breadcrumb, Tag,  PageHeader as AntdPageHeader } from "antd";

/**
 *
 * @typedef Props
 * @param {AvatarProps} avatar
 * @param {React.ReactNode | boolean} backIcon
 * @param {(props, originBreadcrumb)=> React.ReactNode} breadcrumbRender
 * @param {Breadcrumb} breadcrumb
 * @param {React.ReactNode} extra
 * @param {React.ReactNode} footer
 * @param {boolean} ghost
 * @param {React.ReactNode} subTitle
 * @param {Tag[] | Tag} tags
 * @param {React.ReactNode} title
 * @param {() => void} onBack
 * @param  children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
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
