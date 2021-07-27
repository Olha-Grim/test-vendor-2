export default Carousel;
export type Props = {
    autoplay: boolean;
    dotPosition: 'top' | 'bottom' | 'left' | 'right';
    dots: boolean | {
        className?: string;
    };
    easing: string;
    effect: "scrollx" | "fade";
    afterChange: (current: any) => void;
    beforeChange: (from: any, to: any) => void;
    children: JSX.Element;
};
/**
 * @typedef Props
 * @prop {boolean} autoplay
 * @prop {'top' | 'bottom' | 'left' | 'right'} dotPosition
 * @prop {boolean | { className?: string }	} dots
 * @prop {string} easing
 * @prop {"scrollx" | "fade"	} effect
 * @prop {(current:any)=> void	} afterChange
 * @prop {(from:any, to:any) =>void	} beforeChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Carousel({ autoplay, dotPosition, dots, easing, effect, afterChange, beforeChange, children, }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map