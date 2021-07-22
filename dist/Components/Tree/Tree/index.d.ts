export default Tree;
export type Props = {
    allowDrop: ({ dropNode, dropPosition }: {
        dropNode: any;
        dropPosition: any;
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
    filterTreeNode: (node: any) => void;
    height: number;
    icon: React.ReactNode | ((props: any) => React.ReactNode);
    loadData: (node: any) => void;
    loadedKeys: string[];
    multiple: boolean;
    selectable: boolean;
    selectedKeys: string[];
    showIcon: boolean;
    showLine: boolean | {
        showLeafIcon: boolean;
    };
    switcherIcon: React.ReactNode;
    titleRender: (nodeData: any) => React.ReactNode;
    treeData: any;
    virtual: boolean;
    onCheck: (checkedKeys: any, e: {
        checked: any;
        checkedNodes;
        node;
        event;
        halfCheckedKeys;
    }) => void;
    onDragEnd: ({ event, node }: {
        event: any;
        node: any;
    }) => void;
    onDragEnter: ({ event, node, expandedKeys }: {
        event: any;
        node: any;
        expandedKeys: any;
    }) => void;
    onDragLeave: ({ event, node }: {
        event: any;
        node: any;
    }) => void;
    onDragOver: ({ event, node }: {
        event: any;
        node: any;
    }) => void;
    onDragStart: ({ event, node }: {
        event: any;
        node: any;
    }) => void;
    onDrop: ({ event, node, dragNode, dragNodesKeys }: {
        event: any;
        node: any;
        dragNode: any;
        dragNodesKeys: any;
    }) => void;
    onExpand: (expandedKeys: any, { expanded: bool, node }: {
        expanded: any;
        node: any;
    }) => void;
    /**
     * , event:Event, node:any)=>void	} onLoad
     */
    "": (Key[]);
    onRightClick: (event: Event, node: any) => void;
    onSelect: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void;
};
/**
 *
 * @typedef Props
 * @prop {({ dropNode, dropPosition }) => boolean	} allowDrop
 * @prop {boolean} autoExpandParent
 * @prop {boolean} blockNode
 * @prop {boolean} checkable
 * @prop {string[] | {checked: string[], halfChecked: string[]}	} checkedKeys
 * @prop {boolean} checkStrictly
 * @prop {string[]	} defaultCheckedKeys
 * @prop {boolean} defaultExpandAll
 * @prop {string[]	} defaultExpandedKeys
 * @prop {boolean} defaultExpandParent
 * @prop {string[]	} defaultSelectedKeys
 * @prop {boolean} disabled
 * @prop {boolean | ((node: DataNode) => boolean)	} draggable
 * @prop {string[]	} expandedKeys
 * @prop {(node:any)=>void	} filterTreeNode
 * @prop {number} height
 * @prop {React.ReactNode | ((props:any) => React.ReactNode)	} icon
 * @prop {(node:any)=>void	} loadData
 * @prop {string[]	} loadedKeys
 * @prop {boolean	} multiple
 * @prop {boolean	} selectable
 * @prop {string[]	} selectedKeys
 * @prop {boolean} showIcon
 * @prop {boolean | {showLeafIcon: boolean}}  showLine
 * @prop {React.ReactNode} switcherIcon
 * @prop {(nodeData:any) => React.ReactNode	} titleRender
 * @prop {array<{ key, title, children, [disabled, selectable] }>	} treeData
 * @prop {boolean} virtual
 * @prop {(checkedKeys, e:{checked: bool, checkedNodes, node, event, halfCheckedKeys})=>void	} onCheck
 * @prop {({event, node})=>void	} onDragEnd
 * @prop {({event, node, expandedKeys})=>void} onDragEnter
 * @prop {({event, node})=>void} onDragLeave
 * @prop {({event, node})=>void	} onDragOver
 * @prop {({event, node})=>void	} onDragStart
 * @prop {({event, node, dragNode, dragNodesKeys})=>void	} onDrop
 * @prop {(expandedKeys, {expanded: bool, node})=>void	} onExpand
 * @prop {(Key[], event:Event, node:any)=>void	} onLoad
 * @prop {(event:Event, node:any)=> void} onRightClick
 * @prop {(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void} onSelect
 * @param children
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
//# sourceMappingURL=index.d.ts.map