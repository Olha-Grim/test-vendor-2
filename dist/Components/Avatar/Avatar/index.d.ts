export default Avatar;
export type Props = {
    style: React.CSSProperties;
    alt: string;
    gap: number;
    icon: React.ReactNode;
    shape: "circle" | "square";
    size: number | "large" | "small" | "default" | {
        xs: number;
        sm: number;
    };
    src: string | React.ReactNode;
    /**
     * //  *
     */
    srcSet: string;
    draggable: boolean | "true" | "false";
    onError: () => boolean;
    className: string;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {React.CSSProperties} style
 * @prop {string} alt
 * @prop {number} gap
 * @prop {React.ReactNode} icon
 * @prop {"circle" | "square"	} shape
 * @prop {number | "large" | "small" | "default" | { xs: number, sm: number, }	} size
 * @prop {string | React.ReactNode	} src
 * @prop {string} srcSet
//  * @prop {boolean | "true" | "false" } draggable
 * @prop {() => boolean} onError
 * @prop {string} className
 * @prop {JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Avatar({ alt, gap, icon, shape, size, src, srcSet, onError, children, style, className, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map