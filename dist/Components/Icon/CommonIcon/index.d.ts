export default CommonIcon;
export type Props = {
    className: string;
    component: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | undefined;
    rotate: number;
    spin: boolean;
    style: React.CSSProperties;
    twoToneColor: string;
};
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | undefined} component
 * @prop {number} rotate
 * @prop {boolean} spin
 * @prop {React.CSSProperties} style
 * @prop {string} twoToneColor
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function CommonIcon({ className, rotate, spin, style, twoToneColor, component, }: Props): JSX.Element;
import React from "react";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
//# sourceMappingURL=index.d.ts.map