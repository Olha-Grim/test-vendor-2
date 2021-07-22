export default Tabs;
export type Props = {
    activeKey: string;
    addIcon: React.ReactNode;
    animated: boolean | {
        inkBar: boolean;
        tabPane: boolean;
    };
    centered: boolean;
    defaultActiveKey: string;
    hideAdd: boolean;
    moreIcon: React.ReactNode;
    renderTabBar: (props: any, DefaultTabBar: React.ComponentClass) => React.ReactElement;
    size: "large" | "default" | "small";
    tabBarExtraContent: React.ReactNode | {
        left?: React.ReactNode;
        right?: React.ReactNode;
    };
    tabBarGutter: number;
    tabBarStyle: object;
    tabPosition: "top" | "right" | "bottom" | "left";
    type: 'line' | 'card' | 'editable-card';
    onChange: (activeKey: any) => void;
    onEdit: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
    onTabClick: (key: string, event: MouseEvent) => void;
    onTabScroll: (direction: "left" | "right" | "top" | "bottom") => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} activeKey
 * @prop {React.ReactNode} addIcon
 * @prop {boolean | { inkBar: boolean, tabPane: boolean }	} animated
 * @prop {boolean} centered
 * @prop {string} defaultActiveKey
 * @prop {boolean} hideAdd
 * @prop {React.ReactNode} moreIcon
 * @prop {(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement	} renderTabBar
 * @prop {"large" | "default" | "small"	} size
 * @prop {React.ReactNode | {left?: React.ReactNode, right?: React.ReactNode}	} tabBarExtraContent
 * @prop {number} tabBarGutter
 * @prop {object} tabBarStyle
 * @prop {"top" | "right" | "bottom" | "left"	} tabPosition
 * @prop {'line' | 'card' | 'editable-card'	} type
 * @prop {(activeKey: any)=>void} onChange
 * @prop {(e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void} onEdit
 * @prop {(key: string, event: MouseEvent)=>void	} onTabClick
 * @prop {( direction: "left" | "right" | "top" | "bottom" )=> void	} onTabScroll
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Tabs({ children }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map