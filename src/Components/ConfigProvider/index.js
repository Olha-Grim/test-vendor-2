import React from "react";
import { ConfigProvider as AntdConfigProvider } from "antd";
/**
 * @typedef Props
 * @prop {boolean} autoInsertSpaceInButton
 * @prop {"small" | "middle" | "large"} componentSize
 * @prop {{ nonce: string }} csp
 * @prop {"ltr" | "rtl"} direction
 * @prop {boolean | number	} dropdownMatchSelectWidth
 * @prop {{ validateMessages?: ValidateMessages, requiredMark?: boolean | optional } } form
 * @prop {(triggerNode:any )=>void	} getPopupContainer
 * @prop {() => HTMLElement	} getTargetContainer
 * @prop {string} iconPrefixCls
 * @prop {{ autoComplete?: string }} input
 * @prop {object} locale
 * @prop {{ ghost: boolean }	} pageHeader
 * @prop {string} prefixCls
 * @prop {(componentName: string)=> React.ReactNode	} renderEmpty
 * @prop {{ size: "small" | "middle" | "large" | number }	} space
 * @prop {boolean} virtual
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const ConfigProvider = ({
  autoInsertSpaceInButton,
  componentSize,
  csp,
  direction,
  dropdownMatchSelectWidth,
  form,
  getPopupContainer,
  iconPrefixCls,
  input,
  locale,
  pageHeader,
  prefixCls,
  renderEmpty,
  space,
  virtual,
  children,
}) => {
  const props = {
    autoInsertSpaceInButton,
    componentSize,
    csp,
    direction,
    dropdownMatchSelectWidth,
    form,
    getPopupContainer,
    iconPrefixCls,
    input,
    locale,
    pageHeader,
    prefixCls,
    renderEmpty,
    space,
    virtual,
    children,
  };

  return <AntdConfigProvider {...props}>{children}</AntdConfigProvider>;
};
export default ConfigProvider;
