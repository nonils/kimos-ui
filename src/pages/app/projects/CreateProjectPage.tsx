import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useToast } from 'hooks';
import { createProjectAction } from '../../../actions/projectActions';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AppLayout, CreateAccountProjectForm } from '../../../components';
import { useAuth0 } from '@auth0/auth0-react';

export const CreateProjectPage: React.FC = () => {
  const { projectLoading, createProjectSuccess, createProjectError } = useSelector(
    (appState: any) => ({
      projectLoading: appState.projects.loading,
      createProjectSuccess: appState.projects.successOperation,
      createProjectError: appState.projects.error,
    }),
  );

  const { getIdTokenClaims } = useAuth0();
  const [accessToken, setAccessToken] = React.useState<string | undefined>();

  useEffect(() => {
    const getToken = async () => {
      return getIdTokenClaims();
    };
    getToken().then((potentialAccessToken) => {
      setAccessToken(potentialAccessToken?.__raw);
    });
  }, [getIdTokenClaims]);
  const appDispatch = useAppDispatch();
  const { success, danger } = useToast();
  const handleCreateProject = async (values: any) => {
    appDispatch(createProjectAction(values, accessToken));
  };
  const handleCancel = () => {
    window.location.replace('/dashboard');
  };

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      name: '',
      description: '',
    },
    onSubmit: handleCreateProject,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('The name is required'),
    }),
  });

  useEffect(() => {
    if (createProjectSuccess) {
      success('The project was created successfully');
      window.location.replace('/dashboard');
    }
  }, [createProjectSuccess, success]);

  useEffect(() => {
    if (createProjectError) {
      danger('The project was not created');
    }
  }, [createProjectError, danger]);

  return (
    <AppLayout title="Home" showSearchInput={false}>
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col xl:px-24">
          <CreateAccountProjectForm
            formik={formik}
            loading={projectLoading}
            handleCancel={handleCancel}
          />
        </div>
      </div>
    </AppLayout>
  );
};
export default CreateProjectPage;
