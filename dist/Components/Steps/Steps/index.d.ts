export default Steps;
export type Props = {
    className: string;
    current: number;
    direction: "vertical" | "horizontal" | undefined;
    initial: number;
    labelPlacement: "vertical" | "horizontal" | undefined;
    percent: number;
    progressDot: boolean | Function;
    responsive: boolean;
    size: "small" | "default" | undefined;
    status: "error" | "wait" | "process" | "finish" | undefined;
    type: "default" | "navigation" | undefined;
    onChange: (current: number) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {number} current
 * @prop {"vertical" | "horizontal" | undefined} direction
 * @prop {number} initial
 * @prop {"vertical" | "horizontal" | undefined} labelPlacement
 * @prop {number} percent
 * @prop {boolean | Function} progressDot
 * @prop {boolean} responsive
 * @prop {"small" | "default" | undefined} size
 * @prop {"error" | "wait" | "process" | "finish" | undefined} status
 * @prop {"default" | "navigation" | undefined} type
 * @prop {(current: number) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Steps({ className, current, direction, initial, labelPlacement, percent, progressDot, responsive, size, status, type, onChange, children, }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map