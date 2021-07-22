import React from "react";
import { Upload as AntdUpload } from "antd";
import { RcFile } from "rc-upload/lib/interface";
import { UploadFile, UploadListType, BeforeUploadValueType, ShowUploadListInterface } from "./interface";
import  ProgressProps from "../Progress"

/**
 *
 * @typedef Props
 * @prop {string} accept
 * @prop {string | ((file: RcFile) => string) | ((file: RcFile) => PromiseLike<string>)} action
 * @prop {(file: RcFile, FileList: RcFile[],) => BeforeUploadValueType | Promise<BeforeUploadValueType>} beforeUpload
 * @prop {function} customRequest
 * @prop {object | ((file: UploadFile<"T:any">) => object)} data
 * @prop {Array<UploadFile<"T:any">>} defaultFileList
 * @prop {boolean} directory
 * @prop {boolean} disabled
 * @prop {UploadFile[]} fileList
 * @prop {object} headers
 * @prop {(file: UploadFile<"T:any">, listType?: UploadListType) => React.ReactNode} iconRender
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
 * @prop {(file: UploadFile<"T:any">) => void} onDownload
 * @prop {(file: UploadFile<"T:any">) => void} onPreview
 * @prop {(file: UploadFile<"T:any">) => void | boolean} onRemove
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

 

const Upload = ({
  accept,
  action,
  beforeUpload,
  customRequest,
  data,
  defaultFileList,
  directory,
  disabled,
  fileList,
  headers,
  iconRender,
  isImageUrl,
  itemRender,
  listType,
  maxCount,
  method,
  multiple,
  name,
  openFileDialogOnClick,
  previewFile,
  progress,
  showUploadList,
  withCredentials,
  onChange,
  onDrop,
  onDownload,
  onPreview,
  onRemove,
  children,
}) => {
  const props = {
    accept,
    action,
    beforeUpload,
    customRequest,
    data,
    defaultFileList,
    directory,
    disabled,
    fileList,
    headers,
    iconRender,
    isImageUrl,
    itemRender,
    listType,
    maxCount,
    method,
    multiple,
    name,
    openFileDialogOnClick,
    previewFile,
    progress,
    showUploadList,
    withCredentials,
    onChange,
    onDrop,
    onDownload,
    onPreview,
    onRemove,
    children,
  };

  return <AntdUpload {...props}>{children}</AntdUpload>;
};
export default Upload;
