export default Form;
export type Props = {
    colon: boolean;
    component: React.ComponentType | false;
    fields: FieldData[];
    form: any;
    initialValues: object;
    labelAlign: "left" | "right";
    labelCol: object;
    layout: "horizontal" | "vertical" | "inline";
    name: string;
    preserve: boolean;
    requiredMark: boolean | 'optional';
    scrollToFirstError: boolean | Options;
    size: "small" | "middle" | "large";
    validateMessages: ValidateMessages;
    validateTrigger: string | string[];
    wrapperCol: object;
    onFieldsChange: (changedFields: FieldData[], allFields: FieldData[]) => void;
    onFinish: (values: any) => void;
    onFinishFailed: (errorInfo: ValidateErrorEntity<any>) => void;
    onValuesChange: (changedValues: any, allValues: any) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} colon
 * @prop {React.ComponentType | false} component
 * @prop {FieldData[]} fields
 * @prop {any} form
 * @prop {object} initialValues
 * @prop {"left" | "right"} labelAlign
 * @prop {object} labelCol
 * @prop {"horizontal" | "vertical" | "inline"} layout
 * @prop {string} name
 * @prop {boolean} preserve
 * @prop {boolean | 'optional'} requiredMark
 * @prop {boolean | Options} scrollToFirstError
 * @prop {"small" | "middle" | "large"} size
 * @prop {ValidateMessages} validateMessages
 * @prop {string | string[]} validateTrigger
 * @prop {object} wrapperCol
 * @prop {(changedFields: FieldData[], allFields: FieldData[]) => void} onFieldsChange
 * @prop {(values:any )=>void	} onFinish
 * @prop {(errorInfo: ValidateErrorEntity<any>) => void} onFinishFailed
 * @prop {(changedValues:any, allValues:any)=>void} onValuesChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Form({ colon, children, component, fields, form, initialValues, labelAlign, labelCol, layout, name, preserve, requiredMark, scrollToFirstError, size, validateMessages, validateTrigger, wrapperCol, onFieldsChange, onFinishFailed, onValuesChange, }: Props): JSX.Element;
import React from "react";
import { FieldData } from "rc-field-form/lib/interface";
import { Options } from "scroll-into-view-if-needed";
import { ValidateMessages } from "rc-field-form/lib/interface";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
//# sourceMappingURL=index.d.ts.map