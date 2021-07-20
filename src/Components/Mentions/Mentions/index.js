import React from "react";
import { Mentions as AntdMentions } from "antd";
/**
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean | object	} autoSize
 * @prop {string} defaultValue
 * @prop {false | (input: string, option: OptionProps) => boolean	} filterOption
 * @prop {() => HTMLElement} getPopupContainer
 * @prop { React.ReactNode} notFoundContent
 * @prop {"top" | "bottom"	} placement
 * @prop {string | string[]} prefix
 * @prop {string} split
 * @prop {(text: string, props: MentionsProps) => void	} validateSearch
 * @prop {string} value
 * @prop {() => void} onBlur
 * @prop {(text: string) => void} onChange
 * @prop {() => void} onFocus
 * @prop {(size: { width: number; height: number; }) => void} onResize
 * @prop {(text: string, prefix: string) => void} onSearch
 * @prop {(option: OptionProps, prefix: string) => void} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

 

const Mentions = ({
  autoFocus,
  autoSize,
  defaultValue,
  filterOption,
  getPopupContainer,
  notFoundContent,
  placement,
  prefix,
  split,
  validateSearch,
  value,
  onBlur,
  onChange,
  onFocus,
  onResize,
  onSearch,
  onSelect,
  children,
}) => {
  const props = {
    autoFocus,
    autoSize,
    defaultValue,
    filterOption,
    getPopupContainer,
    notFoundContent,
    placement,
    prefix,
    split,
    validateSearch,
    value,
    onBlur,
    onChange,
    onFocus,
    onResize,
    onSearch,
    onSelect,
    children,
  };

  return <AntdMentions {...props}>{children}</AntdMentions>;
};
export default Mentions;
