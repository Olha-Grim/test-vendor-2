export default ConfigProvider;
export type Props = {
    autoInsertSpaceInButton: boolean;
    componentSize: "small" | "middle" | "large";
    csp: {
        nonce: string;
    };
    direction: "ltr" | "rtl";
    dropdownMatchSelectWidth: boolean | undefined;
    form: {
        validateMessages?: ValidateMessages;
        requiredMark?: boolean | "optional";
    };
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    getTargetContainer: () => HTMLElement;
    iconPrefixCls: string;
    input: {
        autoComplete?: string;
    };
    locale: Locale | undefined;
    pageHeader: {
        ghost: boolean;
    };
    prefixCls: string;
    renderEmpty: (componentName: string | undefined) => React.ReactNode;
    space: {
        size: "small" | "middle" | "large" | number;
    };
    virtual: boolean;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} autoInsertSpaceInButton
 * @prop {"small" | "middle" | "large"} componentSize
 * @prop {{ nonce: string }} csp
 * @prop {"ltr" | "rtl"} direction
 * @prop {boolean | undefined} dropdownMatchSelectWidth
 * @prop {{ validateMessages?: ValidateMessages, requiredMark?: boolean | "optional" } } form
 * @prop {(triggerNode: HTMLElement )=>HTMLElement	} getPopupContainer
 * @prop {() => HTMLElement	} getTargetContainer
 * @prop {string} iconPrefixCls
 * @prop {{ autoComplete?: string }} input
 * @prop {Locale | undefined} locale
 * @prop {{ ghost: boolean }	} pageHeader
 * @prop {string} prefixCls
 * @prop {(componentName: string | undefined) => React.ReactNode	} renderEmpty
 * @prop {{ size: "small" | "middle" | "large" | number }	} space
 * @prop {boolean} virtual
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function ConfigProvider({ autoInsertSpaceInButton, componentSize, csp, direction, dropdownMatchSelectWidth, form, getPopupContainer, iconPrefixCls, input, locale, pageHeader, prefixCls, renderEmpty, space, virtual, children, }: Props): JSX.Element;
import { ValidateMessages } from "rc-field-form/lib/interface";
import { Locale } from "rc-picker/lib/interface";
import React from "react";
//# sourceMappingURL=index.d.ts.map