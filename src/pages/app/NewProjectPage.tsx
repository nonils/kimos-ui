import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppLayout, CreateProjectForm, SelectTemplateForm } from '../../components';
import { ICICDProvider, ICodeSystemVersionControl, IStep, ITemplate } from '../../types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Step } from '../../components/Step/Step';
import { getAllTemplates } from '../../api';

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
  const [searchTextTemplate, setSearchTextTemplate] = React.useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = React.useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [size, setSize] = React.useState<number>(10);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTemplate, setSelectedTemplate] = React.useState<ITemplate | null>(null);
  const getAllTemplatesCallback = async (data: any) => {
    // eslint-disable-next-line no-debugger
    debugger;
    setTemplates(data.data);
  };
  useEffect(() => {
    getAllTemplates({ callback: getAllTemplatesCallback });
  }, []);

  const handleSelectedTemplate = (template: ITemplate) => {
    setSelectedTemplate(template);
    const updatedSteps = [...steps];
    updatedSteps[0] = { ...updatedSteps[0], active: false, complete: true };
    updatedSteps[1] = { ...updatedSteps[1], active: true, complete: false };
    setSteps(updatedSteps);
    setCurrentStep(steps[1]);
  };

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

  const [steps, setSteps] = React.useState<IStep[]>([
    {
      id: '1',
      name: 'Select template',
      complete: false,
      active: true,
      onClickAction: () => {
        console.log('click');
      },
    },
    {
      id: '2',
      name: 'Project details',
      complete: false,
      active: false,
      onClickAction: () => {
        console.log('click');
      },
    },
  ]);

  const [currentStep, setCurrentStep] = React.useState<IStep>(steps[0]);
  return (
    <AppLayout showSearchInput={false} title={'New Project'}>
      <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
          <Step steps={steps} currentStepObject={currentStep} currentStep={currentStep.id} />
          <div className="mt-10">
            {currentStep.id === '1' && (
              <SelectTemplateForm
                setSelectedTemplate={handleSelectedTemplate}
                CICDProviders={CICDProviders}
                search={searchTextTemplate}
                setSearch={setSearchTextTemplate}
                codeSystemsVersionControl={codeSystemsVersionControl}
                action={steps[0].onClickAction}
                cancelAction={handleCancel}
                formik={formik}
                loading={loading}
                searchText={searchTextTemplate}
                title={'New Project'}
                templates={templates}
              />
            )}
            {currentStep.id === '2' && (
              <CreateProjectForm
                action={handleSubmit}
                cancelAction={handleCancel}
                formik={formik}
                loading={loading}
                title={'New Project'}
              />
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export { NewProjectPage };
