export default Image;
export type Props = {
    alt: string;
    fallback: string;
    height: string | number;
    placeholder: React.ReactNode;
    preview: boolean | any;
    src: string;
    width: string | number;
    onError: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};
/**
 *
 * @typedef Props
 * @prop {string} alt
 * @prop {string} fallback
 * @prop {string | number	} height
 * @prop {React.ReactNode} placeholder
 * @prop {boolean | previewType} preview
 * @prop {string} src
 * @prop {string | number	} width
 * @prop {(event: React.SyntheticEvent<HTMLImageElement, Event>) => void	} onError
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Image({ alt, fallback, height, placeholder, preview, src, width, onError, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map