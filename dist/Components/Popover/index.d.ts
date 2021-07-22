export default Popover;
export type Props = {
    content: React.ReactNode | (() => React.ReactNode);
    title: React.ReactNode | (() => React.ReactNode);
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {React.ReactNode |( () => React.ReactNode) 	}  content
 * @prop {React.ReactNode | (() => React.ReactNode )	}  title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Popover({ content, title, children }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map