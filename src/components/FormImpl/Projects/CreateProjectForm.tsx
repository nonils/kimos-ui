import React from 'react';
import { ICICDProvider, ICodeSystemVersionControl, ITemplate } from '../../../types';
import { Stack } from '../../Stack/Stack';
import { Form } from '../../Form/Form';
import { InputText } from '../../InputText/InputText';
import { Select } from '../../Select/Select';

type CreateProjectFormProps = {
  title: string;
  loading: boolean;
  formik: any;
  action: () => void;
  cancelAction: () => void;
  templates: ITemplate[];
  codeSystemsVersionControl: ICodeSystemVersionControl[];
  CICDProviders: ICICDProvider[];
};

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
  title,
  loading,
  formik,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cancelAction,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  codeSystemsVersionControl,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  CICDProviders,
}) => {
  const { values, handleSubmit, errors, handleChange } = formik;
  return (
    <>
      <div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
      </div>
      <Stack direction="vertical" space="3" className="p-3">
        <Form id="create-app-form" onSubmit={handleSubmit} loading={loading}>
          <Stack direction="vertical" space="4">
            <InputText
              id="name"
              name="name"
              label="Name"
              placeholder="Set the name of the project"
              value={values.name}
              error={errors.name}
              onChange={handleChange}
              disabled={loading}
            />
            <Select
              id={'cicdProvider'}
              name={'cicdProvider'}
              label={'CI/CD Provider'}
              isMulti={false}
              options={CICDProviders.map((cicdProvider) => ({
                value: cicdProvider.id,
                label: cicdProvider.name,
              }))}
              value={values.cicdProvider}
              onChange={(value: any) => handleChange({ target: { name: 'cicdProvider', value } })}
            />
          </Stack>
        </Form>
      </Stack>
    </>
  );
};

export { CreateProjectForm };
