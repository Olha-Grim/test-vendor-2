import { ValidatorRule } from 'rc-field-form/lib/interface';

export interface FormListFieldData {
    name: number;
    key: number;
    fieldKey: number;
  }
  
  export interface FormListOperation {
    rules?: ValidatorRule[];
    initialValue?: any[];
    children: (
      fields: FormListFieldData[],
      operation: FormListOperation,