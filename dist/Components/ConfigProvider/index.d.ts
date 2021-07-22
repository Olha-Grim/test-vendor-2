export default ConfigProvider;
export type Props = {
    autoInsertSpaceInButton: boolean;
    componentSize: "small" | "middle" | "large";
    csp: {
        nonce: string;
    };
    direction: "ltr" | "rtl";
    dropdownMatchSelectWidth: boolean | number;
    form: {
        validateMessages?: any;
        requiredMark?: boolean | any;
    };
    getPopupContainer: (triggerNode: any) => void;
    getTargetContainer: () => HTMLElement;
    iconPrefixCls: string;
    input: {
        autoComplete?: string;
    };
    locale: object;
    pageHeader: {
        ghost: boolean;
    };
    prefixCls: string;
    renderEmpty: (componentName: string) => React.ReactNode;
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
declare function ConfigProvider({ autoInsertSpaceInButton, componentSize, csp, direction, dropdownMatchSelectWidth, form, getPopupContainer, iconPrefixCls, input, locale, pageHeader, prefixCls, renderEmpty, space, virtual, children, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map