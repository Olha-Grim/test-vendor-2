export default Tree;
export type Props = {
    allowDrop: (options: {
        dropNode: DataNode;
        dropPosition: 0 | 1 | -1;
    }) => boolean;
    autoExpandParent: boolean;
    blockNode: boolean;
    checkable: boolean;
    checkedKeys: string[] | {
        checked: string[];
        halfChecked: string[];
    };
    checkStrictly: boolean;
    defaultCheckedKeys: string[];
    defaultExpandAll: boolean;
    defaultExpandedKeys: string[];
    defaultExpandParent: boolean;
    defaultSelectedKeys: string[];
    disabled: boolean;
    draggable: boolean | ((node: DataNode) => boolean);
    expandedKeys: string[];
    filterTreeNode: (node: any) => boolean;
    height: number;
    icon: React.ReactNode | ((props: any) => React.ReactNode);
    loadData: (node: any) => Promise<void>;
    loadedKeys: string[];
    multiple: boolean;
    selectable: boolean;
    selectedKeys: string[] | Key[];
    showIcon: boolean;
    showLine: boolean | {
        showLeafIcon: boolean;
    };
    switcherIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    titleRender: (nodeData: any) => React.ReactNode;
    treeData: Array<{
        key: any;
        title: string;
        children: [disabled: any, selectable: any];
    }>;
    virtual: boolean;
    onCheck: (checked: Key[] | {
        checked: Key[];
        halfChecked: Key[];
    }, info: any) => void;
    onDragEnd: (info: NodeDragEventParams<HTMLDivElement>) => void;
    onDragEnter: (info: NodeDragEventParams<HTMLDivElement> & {
        expandedKeys: Key[];
    }) => void;
    onDragLeave: (info: NodeDragEventParams<HTMLDivElement>) => void;
    onDragOver: (info: NodeDragEventParams<HTMLDivElement>) => void;
    onDragStart: (info: NodeDragEventParams<HTMLDivElement>) => void;
    onDrop: (info: NodeDragEventParams<HTMLDivElement> & {
        dragNode: EventDataNode;
        dragNodesKeys: Key[];
        dropPosition: number;
        dropToGap: boolean;
    }) => void;
    onExpand: (expandedKeys: Key[], info: {
        node: EventDataNode;
        expanded: boolean;
        nativeEvent: MouseEvent;
    }) => void;
    onLoad: (loadedKeys: Key[], info: {
        event: "load";
        node: EventDataNode;
    }) => void;
    onRightClick: (info: {
        event: React.MouseEvent<Element, MouseEvent>;
        node: EventDataNode;
    }) => void;
    onSelect: (selectedKeys: Key[], info: {
        event: "select";
        selected: boolean;
        node: EventDataNode;
        selectedNodes: DataNode[];
        nativeEvent: MouseEvent;
    }) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {(options: { dropNode: DataNode; dropPosition: 0 | 1 | -1; })=> boolean} allowDrop
 * @prop {boolean} autoExpandParent
 * @prop {boolean} blockNode
 * @prop {boolean} checkable
 * @prop {string[] | {checked: string[], halfChecked: string[]}	} checkedKeys
 * @prop {boolean} checkStrictly
 * @prop {string[]	} defaultCheckedKeys
 * @prop {boolean} defaultExpandAll
 * @prop {string[]	} defaultExpandedKeys
 * @prop {boolean} defaultExpandParent
 * @prop {string[]} defaultSelectedKeys
 * @prop {boolean} disabled
 * @prop {((node: DataNode) => boolean) | boolean} draggable
 * @prop {string[]	} expandedKeys
 * @prop {(node:any)=>boolean	} filterTreeNode
 * @prop {number} height
 * @prop {React.ReactNode | ((props:any) => React.ReactNode)	} icon
 * @prop {(node:any)=>Promise<void>	} loadData
 * @prop {string[]	} loadedKeys
 * @prop {boolean	} multiple
 * @prop {boolean	} selectable
 * @prop {string[] | Key[]} selectedKeys
 * @prop {boolean} showIcon
 * @prop {boolean | {showLeafIcon: boolean}}  showLine
 * @prop {React.ReactElement<any, string | React.JSXElementConstructor<any>>} switcherIcon
 * @prop {(nodeData:any) => React.ReactNode	} titleRender
 * @prop {Array<{ key:any, title:string, children: [disabled:any, selectable:any] }>	} treeData
 * @prop {boolean} virtual
 * @prop {(checked: Key[] | { checked: Key[]; halfChecked: Key[]; }, info: any) => void	} onCheck
 * @prop {(info: NodeDragEventParams<HTMLDivElement>) => void} onDragEnd
 * @prop {(info: NodeDragEventParams<HTMLDivElement> & { expandedKeys: Key[]; }) => void} onDragEnter
 * @prop {(info: NodeDragEventParams<HTMLDivElement>) => void} onDragLeave
 * @prop {(info: NodeDragEventParams<HTMLDivElement>) => void} onDragOver
 * @prop {(info: NodeDragEventParams<HTMLDivElement>) => void} onDragStart
 * @prop {(info: NodeDragEventParams<HTMLDivElement> & { dragNode: EventDataNode; dragNodesKeys: Key[]; dropPosition: number; dropToGap: boolean; }) => void} onDrop
 * @prop {(expandedKeys: Key[], info: { node: EventDataNode; expanded: boolean; nativeEvent: MouseEvent; }) => void} onExpand
 * @prop {(loadedKeys: Key[], info: { event: "load"; node: EventDataNode; }) => void} onLoad
 * @prop {(info: { event: React.MouseEvent<Element, MouseEvent>; node: EventDataNode; }) => void} onRightClick
 * @prop {(selectedKeys: Key[], info: { event: "select"; selected: boolean; node: EventDataNode; selectedNodes: DataNode[]; nativeEvent: MouseEvent; }) => void} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Tree({ allowDrop, autoExpandParent, blockNode, checkable, checkedKeys, checkStrictly, defaultCheckedKeys, defaultExpandAll, defaultExpandedKeys, defaultSelectedKeys, disabled, draggable, expandedKeys, filterTreeNode, height, icon, loadData, loadedKeys, multiple, selectable, selectedKeys, showIcon, showLine, switcherIcon, titleRender, treeData, virtual, onCheck, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onExpand, onLoad, onRightClick, onSelect, children, }: Props): JSX.Element;
import { DataNode } from "rc-tree/lib/interface";
import React from "react";
import { Key } from "rc-tree/lib/interface";
import { NodeDragEventParams } from "rc-tree/lib/contextTypes";
import { EventDataNode } from "rc-tree/lib/interface";
//# sourceMappingURL=index.d.ts.map