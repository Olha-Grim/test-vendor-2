export default FormList;
export type Props = {
    children: (fields: FormListFieldData[], operation: FormListOperation, meta: {
        errors: React.ReactNode[];
    }) => React.ReactNode;
    initialValue: any[];
    name: NamePath;
    /**
     * * operation - Some operator functions in render form of Form.List.
     */
    rules: ValidatorRule[];
    add: (defaultValue?: any, insertIndex?: number | undefined) => void;
    move: (from: number, to: number) => void;
    remove: (index: number | number[]) => void;
};
/**
 * @typedef Props
 * @prop {(fields: FormListFieldData[], operation: FormListOperation, meta: { errors: React.ReactNode[] }) => React.ReactNode} children
 * @prop { any[]} initialValue
 * @prop {NamePath} name
 * @prop {ValidatorRule[]} rules
 * * operation - Some operator functions in render form of Form.List.
 * @prop {(defaultValue?: any, insertIndex?: number) => void	} add
 * @prop {(from: number, to: number) => void	} move
 * @prop {(index: number | number[]) => void	} remove
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function FormList({ children, initialValue, name, rules }: Props): JSX.Element;
import { FormListFieldData } from "antd/lib/form/FormList";
import { FormListOperation } from "antd/lib/form/FormList";
import React from "react";
import { NamePath } from "rc-field-form/lib/interface";
import { ValidatorRule } from "rc-field-form/lib/interface";
//# sourceMappingURL=index.d.ts.map