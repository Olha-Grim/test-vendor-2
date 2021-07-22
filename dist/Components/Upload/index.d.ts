export default Upload;
export type Props = {
    accept: string;
    action: string | ((file: RcFile) => string) | ((file: RcFile) => PromiseLike<string>);
    beforeUpload: (file: RcFile, FileList: RcFile[]) => BeforeUploadValueType | Promise<BeforeUploadValueType>;
    customRequest: Function;
    data: object | ((file: UploadFile<any>) => object);
    defaultFileList: Array<UploadFile<any>>;
    directory: boolean;
    disabled: boolean;
    fileList: UploadFile[];
    headers: object;
    iconRender: (file: UploadFile<any>, listType?: UploadListType | undefined) => React.ReactNode;
    isImageUrl: (file: UploadFile) => boolean;
    itemRender: (originNode: React.ReactElement, file: UploadFile, fileList: object[], actions: {
        download: Function;
        preview: Function;
        remove: Function;
    }) => React.ReactNode;
    listType: string;
    maxCount: number;
    method: string;
    multiple: boolean;
    name: string;
    openFileDialogOnClick: boolean;
    previewFile: (file: File | Blob) => PromiseLike<string>;
    progress: Omit<({ format, percent, showInfo, status, strokeColor, strokeLinecap, success, trailColor, type, steps, strokeWidth, width, gapDegree, gapPosition, }: import("../Progress").Props) => JSX.Element, 'percent' | 'type'>;
    showUploadList: boolean | ShowUploadListInterface;
    withCredentials: boolean;
    onChange: Function;
    onDrop: (event: React.DragEvent) => void;
    onDownload: (file: UploadFile<any>) => void;
    onPreview: (file: UploadFile<any>) => void;
    /**
     * * UploadFile - Extends File with additional props.
     */
    onRemove: (file: UploadFile<any>) => void | boolean;
    percent: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
    thumbUrl: string;
    uid: string;
    url: string;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {string} accept
 * @prop {string | ((file: RcFile) => string) | ((file: RcFile) => PromiseLike<string>)} action
 * @prop {(file: RcFile, FileList: RcFile[],) => BeforeUploadValueType | Promise<BeforeUploadValueType>} beforeUpload
 * @prop {function} customRequest
 * @prop {object | ((file: UploadFile<any>) => object)} data
 * @prop {Array<UploadFile<any>>} defaultFileList
 * @prop {boolean} directory
 * @prop {boolean} disabled
 * @prop {UploadFile[]} fileList
 * @prop {object} headers
 * @prop {(file: UploadFile<any>, listType?: UploadListType) => React.ReactNode} iconRender
 * @prop {(file: UploadFile) => boolean	} isImageUrl
 * @prop {(originNode: React.ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }) => React.ReactNode	} itemRender
 * @prop {string} listType
 * @prop {number}  maxCount
 * @prop {string} method
 * @prop {boolean} multiple
 * @prop {string} name
 * @prop {boolean} openFileDialogOnClick
 * @prop {(file: File | Blob) => PromiseLike<string>} previewFile
 * @prop {Omit<ProgressProps, 'percent' | 'type'>} progress
 * @prop {boolean | ShowUploadListInterface	} showUploadList
 * @prop {boolean} withCredentials
 * @prop {function} onChange
 * @prop {(event: React.DragEvent) => void	} onDrop
 * @prop {(file: UploadFile<any>) => void} onDownload
 * @prop {(file: UploadFile<any>) => void} onPreview
 * @prop {(file: UploadFile<any>) => void | boolean} onRemove
 * * UploadFile - Extends File with additional props.
 * @prop {string} name
 * @prop {number} percent
 * @prop {"error" | "success" | "done" | "uploading" | "removed"	} status
 * @prop {string} thumbUrl
 * @prop {string} uid
 * @prop {string} url
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Upload({ accept, action, beforeUpload, customRequest, data, defaultFileList, directory, disabled, fileList, headers, iconRender, isImageUrl, itemRender, listType, maxCount, method, multiple, name, openFileDialogOnClick, previewFile, progress, showUploadList, withCredentials, onChange, onDrop, onDownload, onPreview, onRemove, children, }: Props): JSX.Element;
import { RcFile } from "rc-upload/lib/interface";
import { BeforeUploadValueType } from "./interface";
import { UploadFile } from "./interface";
import { UploadListType } from "./interface";
import React from "react";
import { ShowUploadListInterface } from "./interface";
//# sourceMappingURL=index.d.ts.map