export default Form;
export type Props = {
    children: (fields: (typeof Field)[], operation: {
        add: any;
        remove: any;
        move: any;
    }, meta: {
        errors: any;
    }) => React.ReactNode;
    initialValue: any[];
    name: NamePath;
    rules: {
        validator: any;
        message: string;
    }[];
    /**
     * * operation - Some operator functions in render form of Form.List.
     */
    errors: React.ReactNode[];
    add: (defaultValue?: any, insertIndex?: number | undefined) => void;
    move: (from: number, to: number) => void;
    remove: (index: number | number[]) => void;
};
/**
 * @typedef Props
 * @prop {(fields: Field[], operation: { add:any, remove:any, move:any }, meta: { errors:any }) => React.ReactNode	} children
 * @prop { any[]} initialValue
 * @prop {NamePath} name
 * @prop {{ validator:any, message:string }[]	} rules
 * @prop {React.ReactNode[]} errors
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
declare function Form({ children, initialValue, name, rules, errors }: Props): JSX.Element;
import { Field } from "rc-field-form";
import React from "react";
import { NamePath } from "rc-field-form/lib/interface";
//# sourceMappingURL=index.d.ts.map