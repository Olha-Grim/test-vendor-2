export default FormItem;
export type Props = {
    colon: boolean;
    dependencies: NamePath[];
    extra: React.ReactNode;
    getValueFromEvent: (...args: any[]) => any;
    getValueProps: (value: any) => any;
    hasFeedback: boolean;
    help: React.ReactNode;
    hidden: boolean;
    htmlFor: string;
    initialValue: string;
    label: React.ReactNode;
    labelAlign: "left" | "right";
    labelCol: object;
    messageVariables: Record<string, string>;
    name: NamePath;
    normalize: (value: any, prevValue: any, prevValues: any) => any;
    noStyle: boolean;
    preserve: boolean;
    required: boolean;
    rules: Rule[];
    shouldUpdate: boolean | ((prevValue: any, curValue: any) => boolean);
    tooltip: React.ReactNode | (TooltipProps & {
        icon: React.ReactNode;
    });
    trigger: string;
    validateFirst: boolean | "parallel";
    validateStatus: "" | "success" | "warning" | "error" | "validating" | undefined;
    validateTrigger: string | string[];
    valuePropName: string;
    wrapperCol: object;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} colon
 * @prop {NamePath[]} dependencies
 * @prop {React.ReactNode} extra
 * @prop {(...args: any[]) => any} getValueFromEvent
 * @prop {(value: any) => any	} getValueProps
 * @prop {boolean} hasFeedback
 * @prop {React.ReactNode} help
 * @prop {boolean} hidden
 * @prop {string} htmlFor
 * @prop {string} initialValue
 * @prop {React.ReactNode} label
 * @prop {"left" | "right"	} labelAlign
 * @prop {object} labelCol
 * @prop {Record<string, string>} messageVariables
 * @prop {NamePath} name
 * @prop {(value:any, prevValue:any, prevValues:any) => any} normalize
 * @prop {boolean} noStyle
 * @prop {boolean} preserve
 * @prop {boolean} required
 * @prop {Rule[]} rules
 * @prop {boolean | ((prevValue:any, curValue:any) => boolean)} shouldUpdate
 * @prop {React.ReactNode | TooltipProps & { icon: React.ReactNode }	} tooltip
 * @prop {string} trigger
 * @prop {boolean | "parallel"} validateFirst
 * @prop {"" | "success" | "warning" | "error" | "validating" | undefined} validateStatus
 * @prop {string | string[]} validateTrigger
 * @prop {string} valuePropName
 * @prop {object} wrapperCol
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function FormItem({ colon, dependencies, extra, getValueFromEvent, getValueProps, hasFeedback, help, hidden, htmlFor, initialValue, label, labelAlign, labelCol, messageVariables, name, normalize, noStyle, preserve, required, rules, shouldUpdate, tooltip, trigger, validateFirst, validateStatus, validateTrigger, valuePropName, wrapperCol, children, }: Props): JSX.Element;
import { NamePath } from "rc-field-form/lib/interface";
import React from "react";
import { Rule } from "rc-field-form/lib/interface";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";
//# sourceMappingURL=index.d.ts.map