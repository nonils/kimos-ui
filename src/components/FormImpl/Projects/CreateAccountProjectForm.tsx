import React from 'react';
import { InputText } from '../../InputText/InputText';
import { Stack } from '../../Stack/Stack';
import { Form } from '../../Form/Form';
import { Button } from '../../Button/Button';

type CreateAccountProjectFormProps = {
  formik: any;
  loading: boolean;
  handleCancel?: () => void;
};

const CreateAccountProjectForm: React.FC<CreateAccountProjectFormProps> = ({
  formik,
  loading,
  handleCancel,
}) => {
  const { handleSubmit, handleChange, values, errors } = formik;
  return (
    <>
      <div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create new project</h2>
      </div>
      <Stack direction="vertical" space="3" className="p-3">
        <Form id="create-project-form" onSubmit={handleSubmit} loading={loading}>
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
            <div className="sm:col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-200 focus:ring-red-200 sm:text-sm"
                  value={values.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Stack direction="horizontal" space="3">
              <Button
                loading={loading}
                type="submit"
                variant={'primary'}
                id="create-project-form-submit"
              >
                Create
              </Button>
              <Button
                loading={loading}
                onClick={handleCancel}
                type="button"
                variant={'secondary'}
                id="cancel-button"
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Form>
      </Stack>
    </>
  );
};

export { CreateAccountProjectForm };
