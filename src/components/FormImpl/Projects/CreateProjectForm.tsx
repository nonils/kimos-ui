import React from 'react';
import { Stack } from '../../Stack/Stack';
import { Form } from '../../Form/Form';
import { InputText } from '../../InputText/InputText';

type CreateProjectFormProps = {
  title?: string;
  showTitle?: boolean;
  loading: boolean;
  formik: any;
  action: () => void;
  cancelAction: () => void;
};

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
  title,
  showTitle = false,
  loading,
  formik,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cancelAction,
}) => {
  const { values, handleSubmit, errors, handleChange } = formik;
  return (
    <>
      {showTitle && (
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
        </div>
      )}
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
          </Stack>
        </Form>
      </Stack>
    </>
  );
};

export { CreateProjectForm };
