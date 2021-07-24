export default Alert;
export type Props = {
    action: React.ReactNode;
    afterClose: () => void;
    banner: boolean;
    closable: boolean;
    closeText: React.ReactNode;
    description: React.ReactNode;
    icon: React.ReactNode;
    message: React.ReactNode;
    showIcon: boolean;
    type: "success" | "info" | "warning" | "error" | undefined;
    onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
/**
 * @typedef Props
 * @prop {React.ReactNode } action
 * @prop {() => void} afterClose
 * @prop {boolean	} banner
 * @prop {boolean	} closable
 * @prop {React.ReactNode} closeText
 * @prop {React.ReactNode} description
 * @prop {React.ReactNode} icon
 * @prop {React.ReactNode} message
 * @prop {boolean} showIcon
 * @prop {"success" | "info" | "warning" | "error" | undefined} type
 * @prop {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void	} onClose
 * @returns {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function Alert({ action, afterClose, banner, closable, closeText, description, icon, message, showIcon, type, onClose, }: Props): JSX.Element;
import React from "react";
//# sourceMappingURL=index.d.ts.map