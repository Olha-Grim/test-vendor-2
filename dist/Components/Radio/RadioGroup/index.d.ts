export default RadioGroup;
export type Props = {
    buttonStyle: "outline" | "solid";
    defaultValue: any;
    disabled: boolean;
    name: string;
    options: string[] | Array<{
        label: string;
        value: string;
        disabled?: boolean;
    }>;
    optionType: "default" | "button";
    size: "large" | "middle" | "small";
    value: any;
    onChange: (e: RadioChangeEvent) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {"outline" | "solid"	} buttonStyle
 * @prop {any} defaultValue
 * @prop {boolean} disabled
 * @prop {string} name
 * @prop {string[] | Array<{ label: string, value: string, disabled?: boolean }>	} options
 * @prop {"default" | "button"	} optionType
 * @prop {"large" | "middle" | "small"} size
 * @prop {any} value
 * @prop {(e: RadioChangeEvent) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function RadioGroup({ buttonStyle, defaultValue, disabled, name, options, optionType, size, value, onChange, children, }: Props): JSX.Element;
import { RadioChangeEvent } from "antd";
//# sourceMappingURL=index.d.ts.map