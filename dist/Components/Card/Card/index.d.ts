export default Card;
export type Props = {
    className: string;
    actions: Array<React.ReactNode>;
    activeTabKey: string;
    bodyStyle: React.CSSProperties;
    bordered: boolean;
    cover: React.ReactNode;
    defaultActiveTabKey: string;
    extra: React.ReactNode;
    headStyle: React.CSSProperties;
    hoverable: boolean;
    loading: boolean;
    size: "default" | "small";
    tabBarExtraContent: React.ReactNode;
    tabList: Array<{
        key: string;
        tab: React.ReactNode;
    }>;
    tabProps: any;
    title: React.ReactNode;
    type: "inner" | undefined;
    style: React.CSSProperties;
    onTabChange: (key: any) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {string} className
 * @prop {Array<React.ReactNode>	} actions
 * @prop {string} activeTabKey
 * @prop {React.CSSProperties} bodyStyle
 * @prop {boolean} bordered
 * @prop {React.ReactNode} cover
 * @prop {string} defaultActiveTabKey
 * @prop {React.ReactNode} extra
 * @prop {React.CSSProperties} headStyle
 * @prop {boolean} hoverable
 * @prop {boolean} loading
 * @prop {"default" | "small"	} size
 * @prop {React.ReactNode} tabBarExtraContent
 * @prop {Array<{key: string, tab: React.ReactNode}>	} tabList
 * @prop {any} tabProps
 * @prop {React.ReactNode} title
 * @prop {"inner" | undefined} type
 * @prop {React.CSSProperties} style
 * @prop {(key: any) => void} onTabChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Card({ children, className, actions, activeTabKey, bodyStyle, bordered, cover, defaultActiveTabKey, extra, headStyle, hoverable, loading, size, tabBarExtraContent, tabList, tabProps, title, type, onTabChange, style, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map