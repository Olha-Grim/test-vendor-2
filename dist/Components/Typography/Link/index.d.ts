export default Link;
export type Props = {
    href: string;
    target: string;
    title: string | undefined;
    className: string;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {string} href
 * @prop {string} target
 * @prop {string | undefined} title
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Link({ href, target, title, className, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map