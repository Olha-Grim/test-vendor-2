export default Form;
export type Props = {
    colon: boolean;
    component: any | false;
    fields: any[];
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
    validateMessages: any;
    validateTrigger: string | string[];
    wrapperCol: object;
    onFieldsChange: (arg0: any, arg1: any) => any;
    onFinish: (arg0: any) => any;
    onFinishFailed: (arg0: {
        values;
        errorFields;
        outOfDate;
    }) => any;
    onValuesChange: (arg0: any, arg1: any) => any;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} colon
 * @prop {ComponentType | false} component
 * @prop {FieldData[]} fields
 * @prop {FormInstance} form
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
 * @prop {function(changedFields, allFields)} onFieldsChange
 * @prop {function(values)	} onFinish
 * @prop {function({ values, errorFields, outOfDate })	} onFinishFailed
 * @prop {function(changedValues, allValues)} onValuesChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Form({ colon, children, component, fields, form, initialValues, labelAlign, labelCol, layout, name, preserve, requiredMark, scrollToFirstError, size, validateMessages, validateTrigger, wrapperCol, onFieldsChange, onFinishFailed, onValuesChange, }: Props): JSX.Element;
import { Options } from "scroll-into-view-if-needed";
//# sourceMappingURL=index.d.ts.map