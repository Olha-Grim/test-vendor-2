import React from "react";
import { Upload as AntdUpload } from "antd";

/**
 *
 * @typedef Props
 * @prop {string} accept
 * @prop {string | (file) => Promise<string>	} action
 * @prop {(file, fileList) => boolean | Promise<File> | Upload.LIST_IGNORE	} beforeUpload
 * @prop {function} customRequest
 * @prop {object | (file) => object | Promise<object>	} data
 * @prop {object[]	} defaultFileList
 * @prop {boolean} directory
 * @prop {boolean} disabled
 * @prop {UploadFile[]} fileList
 * @prop {object} headers
 * @prop {(file: UploadFile, listType?: UploadListType) => ReactNode	} iconRender
 * @prop {(file: UploadFile) => boolean	} isImageUrl
 * @prop {(originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }) => React.ReactNode	} itemRender
 * @prop {string} listType
 * @prop {number}  maxCount
 * @prop {string} method
 * @prop {boolean} multiple
 * @prop {string} name
 * @prop {boolean} openFileDialogOnClick
 * @prop {(file: File | Blob) => Promise<dataURL: string>	} previewFile
 * @prop {ProgressProps (support type="line" only)} progress
 * @prop {boolean | { showPreviewIcon?: boolean, showDownloadIcon?: boolean, showRemoveIcon?: boolean, removeIcon?: ReactNode | (file: UploadFile) => ReactNode, downloadIcon?: ReactNode | (file: UploadFile) => ReactNode }	} showUploadList
 * @prop {boolean} withCredentials
 * @prop {function} onChange
 * @prop {(event: React.DragEvent) => void	} onDrop
 * @prop {function(file): void} onDownload
 * @prop {function(file)	} onPreview
 * @prop {function(file): boolean | Promise	} onRemove
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
