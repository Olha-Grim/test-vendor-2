export default FormProvider;
export type Props = {
    onFormChange: (formName: string, info: {
        changedFields: any;
        forms: any;
    }) => void;
    onFormFinish: (formName: string, info: {
        values: any;
        forms: any;
    }) => void;
    children: JSX.Element;
};
/**
 *
 * @typedef Props
 * @prop {(formName: string, info: { changedFields: any, forms: any })=> void	} onFormChange
 * @prop {(formName: string, info: { values:any, forms: any })=> void	} onFormFinish
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
declare function FormProvider({ onFormChange, onFormFinish, children }: Props): JSX.Element;
//# sourceMappingURL=index.d.ts.map