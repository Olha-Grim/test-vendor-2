/// <reference types="react" />
import { AutoSizeType } from 'rc-textarea/lib/ResizableTextArea';
export interface CopyConfig {
    text?: string;
    onCopy?: () => void;
    icon?: React.ReactNode;
    tooltips?: boolean | React.ReactNode;
}
export interface EditConfig {
    editing?: boolean;
    icon?: React.ReactNode;
    tooltip?: boolean | React.ReactNode;
    onStart?: () => void;
    onChange?: (value: string) => void;
    onCancel?: () => void;
    onEnd?: () => void;
    maxLength?: number;
    autoSize?: boolean | AutoSizeType;
}
export interface EllipsisConfig {
    rows?: number;
    expandable?: boolean;
    suffix?: string;
    symbol?: React.ReactNode;
    onExpand?: React.MouseEventHandler<HTMLElement>;
    onEllipsis?: (ellipsis: boolean) => void;
    tooltip?: React.ReactNode;
}
//# sourceMappingURL=typographyInterface.tsx.d.ts.map