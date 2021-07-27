export default Upload;
export type Props = {
    accept: string;
    action: string | ((file: RcFile) => string) | ((file: RcFile) => PromiseLike<string>);
    beforeUpload: (file: RcFile, FileList: RcFile[]) => BeforeUploadValueType | Promise<BeforeUploadValueType>;
    customRequest: (options: UploadRequestOption<any>) => void;
    data: object | ((file: UploadFile<any>) => object);
    defaultFileList: Array<UploadFile<any>>;
    directory: boolean;
    disabled: boolean;
    fileList: UploadFile[];
    headers: HttpRequestHeader | undefined;
    iconRender: (file: UploadFile<any>, listType?: UploadListType | undefined) => React.ReactNode;
    isImageUrl: (file: UploadFile) => boolean;
    itemRender: (originNode: React.ReactElement, file: UploadFile, fileList: object[], actions: {
        download: Function;
        preview: Function;
        remove: Function;
    }) => React.ReactNode;
    listType: UploadListType | undefined;
    maxCount: number;
    method: "POST" | "PUT" | "PATCH" | "post" | "put" | "patch" | undefined;
    multiple: boolean;
    name: string;
    openFileDialogOnClick: boolean;
    previewFile: (file: File | Blob) => PromiseLike<string>;
    progress: Omit<({ format, percent, showInfo, status, strokeColor, strokeLinecap, success, trailColor, type, steps, strokeWidth, width, gapDegree, gapPosition, }: import("../Progress").Props) => JSX.Element, 'percent' | 'type'>;
    showUploadList: boolean | ShowUploadListInterface;
    withCredentials: boolean;
    onChange: (info: UploadChangeParam<UploadFile<any>>) => void;
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
 * @prop {(options: UploadRequestOption<any>)=> void} customRequest
 * @prop {object | ((file: UploadFile<any>) => object)} data
 * @prop {Array<UploadFile<any>>} defaultFileList
 * @prop {boolean} directory
 * @prop {boolean} disabled
 * @prop {UploadFile[]} fileList
 * @prop {HttpRequestHeader | undefined} headers
 * @prop {(file: UploadFile<any>, listType?: UploadListType) => React.ReactNode} iconRender
 * @prop {(file: UploadFile) => boolean	} isImageUrl
 * @prop {(originNode: React.ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }) => React.ReactNode	} itemRender
 * @prop {UploadListType | undefined} listType
 * @prop {number}  maxCount
 * @prop {"POST" | "PUT" | "PATCH" | "post" | "put" | "patch" | undefined} method
 * @prop {boolean} multiple
 * @prop {string} name
 * @prop {boolean} openFileDialogOnClick
 * @prop {(file: File | Blob) => PromiseLike<string>} previewFile
 * @prop {Omit<ProgressProps, 'percent' | 'type'>} progress
 * @prop {boolean | ShowUploadListInterface	} showUploadList
 * @prop {boolean} withCredentials
 * @prop {(info: UploadChangeParam<UploadFile<any>>)=> void} onChange
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
import { RcFile } from "antd/lib/upload/interface";
import { BeforeUploadValueType } from "antd/lib/upload/interface";
import { UploadRequestOption } from "rc-upload/lib/interface";
import { UploadFile } from "antd/lib/upload/interface";
import { HttpRequestHeader } from "antd/lib/upload/interface";
import { UploadListType } from "antd/lib/upload/interface";
import React from "react";
import { ShowUploadListInterface } from "antd/lib/upload/interface";
import { UploadChangeParam } from "antd/lib/upload/interface";
//# sourceMappingURL=index.d.ts.map