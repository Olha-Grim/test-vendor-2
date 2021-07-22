export default Collapse;
export type Props = {
    accordion: boolean;
    activeKey: Array<string | number> | string | number;
    bordered: boolean;
    collapsible: 'header' | 'disabled';
    defaultActiveKey: Array<string | number> | string | number;
    destroyInactivePanel: boolean;
    expandIcon: (panelProps: any) => React.ReactNode;
    expandIconPosition: "left" | "right";
    ghost: boolean;
    onChange: Function;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} accordion
 * @prop {Array<string | number> | string | number} activeKey
 * @prop {boolean} bordered
 * @prop {'header' | 'disabled'} collapsible
 * @prop {Array<string | number> | string | number} defaultActiveKey
 * @prop {boolean} destroyInactivePanel
 * @prop {(panelProps) => React.ReactNode	} expandIcon
 * @prop {"left" | "right"	} expandIconPosition
 * @prop {boolean} ghost
 * @prop {function} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
/**
 * Interface for classes that represent a color.
 *
 * @interface
 */
declare function Collapse({ accordion, activeKey, bordered, collapsible, defaultActiveKey, destroyInactivePanel, expandIcon, expandIconPosition, ghost, onChange, children, }: {
    accordion: any;
    activeKey: any;
    bordered: any;
    collapsible: any;
    defaultActiveKey: any;
    destroyInactivePanel: any;
    expandIcon: any;
    expandIconPosition: any;
    ghost: any;
    onChange: any;
    children: any;
}): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map