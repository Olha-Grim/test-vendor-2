export default InputSearch;
export type Props = {
    className: string;
    size: "large" | "middle" | "small";
    enterButton: boolean | React.ReactNode;
    loading: boolean;
    onSearch: (value: string, event?: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent> | React.ChangeEvent<HTMLInputElement> | undefined) => void;
    placeholder: string;
    style: React.CSSProperties;
};
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {"large" | "middle" | "small"} size
 * @prop {boolean | React.ReactNode} enterButton
 * @prop {boolean} loading
 * @prop {(value: string, event?: | React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>,) => void} onSearch
 * @prop {string} placeholder
 * @prop {React.CSSProperties} style
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function InputSearch({ enterButton, size, loading, onSearch, className, placeholder, style, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map