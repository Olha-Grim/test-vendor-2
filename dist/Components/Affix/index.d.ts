export default Affix;
export type Props = {
    offsetBottom: number;
    offsetTop: number;
    target: () => HTMLElement;
    onChange: (affixed: any) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {number} offsetBottom
 * @prop {number} offsetTop
 * @prop {() => HTMLElement} target
 * @prop {(affixed:any)=>void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Affix({ offsetBottom, offsetTop, target, onChange, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map