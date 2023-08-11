import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useToast } from 'hooks';
import { createProjectAction } from '../../../actions';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AppLayout, CreateAccountProjectForm } from '../../../components';
import { useNavigate } from 'react-router-dom';

export const CreateProjectPage: React.FC = () => {
  const { token, projectLoading, createProjectSuccess, createProjectError } = useSelector(
    (appState: any) => ({
      token: appState.authentication.token,
      projectLoading: appState.project.loading,
      createProjectSuccess: appState.project.successOperation,
      createProjectError: appState.project.error,
    }),
  );
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const { success, danger } = useToast();
  const handleCreateProject = async (values: any) => {
    appDispatch(createProjectAction(values, token));
  };
  const handleCancel = () => {
    navigate('/dashboard');
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
      navigate('/dashboard');
    }
  }, [createProjectSuccess, navigate, success]);

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
