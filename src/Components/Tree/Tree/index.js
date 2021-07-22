import React from "react";
import { Tree as AntdTree } from "antd";
import { DataNode, Key} from 'rc-tree/lib/interface';

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

const Tree = ({
  allowDrop,
  autoExpandParent,
  blockNode,
  checkable,
  checkedKeys,
  checkStrictly,
  defaultCheckedKeys,
  defaultExpandAll,
  defaultExpandedKeys,
  defaultSelectedKeys,
  disabled,
  draggable,
  expandedKeys,
  filterTreeNode,
  height,
  icon,
  loadData,
  loadedKeys,
  multiple,
  selectable,
  selectedKeys,
  showIcon,
  showLine,
  switcherIcon,
  titleRender,
  treeData,
  virtual,
  onCheck,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDragStart,
  onDrop,
  onExpand,
  onLoad,
  onRightClick,
  onSelect,
  children,
}) => {
  const props = {
    allowDrop,
    autoExpandParent,
    blockNode,
    checkable,
    checkedKeys,
    checkStrictly,
    defaultCheckedKeys,
    defaultExpandAll,
    defaultExpandedKeys,
    defaultSelectedKeys,
    disabled,
    draggable,
    expandedKeys,
    filterTreeNode,
    height,
    icon,
    loadData,
    loadedKeys,
    multiple,
    selectable,
    selectedKeys,
    showIcon,
    showLine,
    switcherIcon,
    titleRender,
    treeData,
    virtual,
    onCheck,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragStart,
    onDrop,
    onExpand,
    onLoad,
    onRightClick,
    onSelect,
    children,
  };

  return <AntdTree {...props}>{children}</AntdTree>;
};
export default Tree;
