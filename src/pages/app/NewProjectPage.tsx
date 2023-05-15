import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppLayout, CreateProjectForm } from '../../components';
import { ICICDProvider, ICodeSystemVersionControl, ITemplate } from '../../types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NewProjectPage: React.FC<any> = () => {
  const { getAccessTokenSilently } = useAuth0();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = React.useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [CICDProviders, setCICDProviders] = React.useState<ICICDProvider[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [templates, setTemplates] = React.useState<ITemplate[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [codeSystemsVersionControl, setCodeSystemsVersionControl] = React.useState<
    ICodeSystemVersionControl[]
  >([]);

  const handleSubmit = () => {};

  const handleCancel = () => {};

  useEffect(() => {
    let isMounted = true;
    const getMessage = async () => {
      await getAccessTokenSilently();
      if (!isMounted) {
        return;
      }
    };
    getMessage();
    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCreateProject = async (values: any) => {};

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      name: '',
      isVisible: true,
      description: '',
      products: [],
      order: 0,
      tags: [],
    },
    onSubmit: async (values) => {
      await handleCreateProject(values);
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('The name is required'),
    }),
  });
  return (
    <AppLayout showSearchInput={false} title={'New Project'}>
      <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
          <CreateProjectForm
            CICDProviders={CICDProviders}
            codeSystemsVersionControl={codeSystemsVersionControl}
            action={handleSubmit}
            cancelAction={handleCancel}
            formik={formik}
            loading={loading}
            title={'New Project'}
            templates={templates}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export { NewProjectPage };
