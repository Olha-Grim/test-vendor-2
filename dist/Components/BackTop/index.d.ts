export default BackTop;
export type Props = {
    duration: number;
    target: () => HTMLElement;
    visibilityHeight: number;
    onClick: () => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {number} duration
 * @prop {() => HTMLElement} target
 * @prop {number} visibilityHeight
 * @prop {()=> void} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function BackTop({ duration, target, visibilityHeight, onClick, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map