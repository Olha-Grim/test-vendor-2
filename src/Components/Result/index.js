import React from "react";
import { Result as AntdResult } from "antd";
/**
 *
 * @param {ReactNode} extra
 * @param {ReactNode} icon
 * @param {success | error | info | warning | 404 | 403 | 500	} status
 * @param {ReactNode} subTitle
 * @param {ReactNode} title
 * @return {JSX.Element}
 * @constructor
 */
const Result = ({ extra, icon, status, subTitle, title }) => {
  const props = { extra, icon, status, subTitle, title };

  return <AntdResult {...props} />;
};
export default Result;
