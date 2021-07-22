/// <reference types="react" />
import { RcFile } from 'rc-upload/lib/interface';
export declare type UploadListType = 'text' | 'picture' | 'picture-card';
export declare type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';
export declare type BeforeUploadValueType = void | boolean | string | Blob | File;
export interface UploadFile<T = any> {
    uid: string;
    size?: number;
    name: string;
    fileName?: string;
    lastModified?: number;
    lastModifiedDate?: Date;
    url?: string;
    status?: UploadFileStatus;
    percent?: number;
    thumbUrl?: string;
    originFileObj?: RcFile;
    response?: T;
    error?: any;
    linkProps?: any;
    type?: string;
    xhr?: T;
    preview?: string;
}
export interface ShowUploadListInterface {
    showRemoveIcon?: boolean;
    showPreviewIcon?: boolean;
    showDownloadIcon?: boolean;
    removeIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
    downloadIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
}
//# sourceMappingURL=interface.d.ts.map