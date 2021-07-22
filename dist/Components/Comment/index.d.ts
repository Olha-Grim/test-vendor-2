export default Comment;
export type Props = {
    actions: Array<React.ReactNode>;
    author: React.ReactNode;
    avatar: React.ReactNode;
    children: React.ReactNode;
    content: React.ReactNode;
    datetime: React.ReactNode;
};
/**
 *
 * @typedef Props
 * @prop {Array<React.ReactNode>	} actions
 * @prop {React.ReactNode} author
 * @prop {React.ReactNode} avatar
 * @prop {React.ReactNode} children
 * @prop {React.ReactNode} content
 * @prop {React.ReactNode} datetime
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Comment({ actions, author, avatar, children, content, datetime }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map