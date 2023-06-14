import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppLayout, CreateProjectForm, SelectTemplateForm } from '../../components';
import {
  ICICDProvider,
  ICloudProvider,
  ICodeSystemVersionControl,
  ICreateProjectDTO,
  ISelectOption,
  IStep,
  ITemplate,
  ItemplateImplementation,
} from '../../types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Step } from '../../components/Step/Step';
import {
  createProject,
  getAllCICDProviders,
  getAllCloudProviders,
  getAllCodeVersionProviders,
  getAllTemplateImplementations,
  getAllTemplates,
} from '../../api';

const NewProjectPage: React.FC<any> = () => {
  const { getIdTokenClaims } = useAuth0();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [cloudProviders, setCloudProviders] = React.useState<ICloudProvider[]>([]);
  const [CICDProviders, setCICDProviders] = React.useState<ICICDProvider[]>([]);
  const [templates, setTemplates] = React.useState<ITemplate[]>([]);
  const [codeSystemsVersionControl, setCodeSystemsVersionControl] = React.useState<
    ICodeSystemVersionControl[]
  >([]);
  const [cloudProvider, setCloudProvider] = React.useState<ISelectOption | undefined>(undefined);
  const [CICDProvider, setCICDProvider] = React.useState<ISelectOption | undefined>(undefined);
  const [codeVersionManagerProvider, setCodeVersionManagerProvider] = React.useState<
    ISelectOption | undefined
  >(undefined);
  const [searchTextTemplate, setSearchTextTemplate] = React.useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = React.useState<number>(0);
  const [templateImplementations, setTemplateImplementations] = React.useState<
    ItemplateImplementation[]
  >([]);
  const [accessToken, setAccessToken] = React.useState<string | undefined>();
  const [selectedTemplate, setSelectedTemplate] = React.useState<ITemplate | null>(null);
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

  const getAllTemplatesCallback = async (data: any) => {
    setTemplates(data.data);
  };
  const getAllCIProvidersCallback = async (data: any) => {
    setCICDProviders(data);
  };
  const getAllCloudProvidersCallback = async (data: any) => {
    setCloudProviders(data);
  };

  const getAllCodeVersionProvidersCallback = async (data: any) => {
    setCodeSystemsVersionControl(data);
  };

  useEffect(() => {
    getAllTemplates({ callback: getAllTemplatesCallback });
    getAllCICDProviders(getAllCIProvidersCallback);
    getAllCodeVersionProviders(getAllCodeVersionProvidersCallback);
    getAllCloudProviders(getAllCloudProvidersCallback);
  }, []);

  const getAllTemplateImplementationsCallback = async (data: any) => {
    setTemplateImplementations(data);
  };

  const handleSelectedTemplate = (template: ITemplate) => {
    setSelectedTemplate(template);
    getAllTemplateImplementations(template.id, getAllTemplateImplementationsCallback);
    const updatedSteps = [...steps];
    updatedSteps[0] = { ...updatedSteps[0], active: false, complete: true };
    updatedSteps[1] = { ...updatedSteps[1], active: true, complete: false };
    setSteps(updatedSteps);
    setCurrentStep(steps[1]);
  };

  useEffect(() => {
    const timeOutId = setTimeout(
      () =>
        getAllTemplates({
          callback: getAllTemplatesCallback,
          search: searchTextTemplate,
          cloudProvider,
          CICDProvider,
          codeVersionManagerProvider,
        }),
      500,
    );
    return () => clearTimeout(timeOutId);
  }, [searchTextTemplate, codeVersionManagerProvider, cloudProvider, CICDProvider]);

  useEffect(() => {}, [selectedTemplate]);

  const handleCancel = () => {};

  const handleSubmit = () => {
    console.log(selectedTemplate);
  };

  useEffect(() => {
    const getToken = async () => {
      return getIdTokenClaims();
    };
    getToken().then((potentialAccessToken) => {
      setAccessToken(potentialAccessToken?.__raw);
    });
  }, [getIdTokenClaims]);

  const handleCreateProject = async (values: any) => {
    const {
      name,
      description,
      allowsJiraIntegration,
      cloudProvider,
      cicdProvider,
      codeVersionManagerProvider,
      repositoryName,
      jiraProjectName,
      jiraProjectKey,
      isPrivateRepo,
    } = values;
    setLoading(true);
    const body: ICreateProjectDTO = {
      allowsJiraIntegration,
      cicdProviderId: cicdProvider.value,
      cloudProviderId: cloudProvider.value,
      codeSystemVersionControlId: codeVersionManagerProvider.value,
      templateId: selectedTemplate!.id,
      name,
      description,
      repositoryName,
      jiraProjectName,
      jiraProjectKey,
      isPrivateRepo,
    };
    createProject(body, accessToken)
      .then(() => {
        setLoading(false);
        location.replace('/dashboard');
      })
      .catch(() => setLoading(false));
  };

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      name: '',
      description: '',
      isPrivateRepo: false,
      repositoryName: '',
      allowsJiraIntegration: false,
      jiraProjectName: '',
      jiraProjectKey: '',
      cloudProvider: undefined,
      cicdProvider: undefined,
      codeVersionManagerProvider: undefined,
    },
    onSubmit: async (values) => {
      await handleCreateProject(values);
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('The name is required'),
    }),
  });

  const handleChangeStep = (selectedStepId: string) => {
    setSteps(
      steps.map((step) => {
        if (step.id === currentStep.id) {
          return { ...step, active: false };
        }
        if (step.id === selectedStepId) {
          setCurrentStep(step);
          return { ...step, active: true };
        }
        return step;
      }),
    );
  };

  return (
    <AppLayout showSearchInput={false} title={'New Project'}>
      <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
          <Step
            steps={steps}
            currentStepObject={currentStep}
            currentStep={currentStep.id}
            handleChangeStep={handleChangeStep}
          />
          <div className="mt-10">
            {currentStep.id === '1' && (
              <SelectTemplateForm
                search={searchTextTemplate}
                cicdProvider={CICDProvider}
                setCICDProvider={setCICDProvider}
                codeVersionManagerProvider={codeVersionManagerProvider}
                setCodeVersionManagerProvider={setCodeVersionManagerProvider}
                cloudProvider={cloudProvider}
                setCloudProvider={setCloudProvider}
                setSearch={setSearchTextTemplate}
                setSelectedTemplate={handleSelectedTemplate}
                CICDProviders={CICDProviders}
                codeSystemsVersionControl={codeSystemsVersionControl}
                action={steps[0].onClickAction}
                cancelAction={handleCancel}
                loading={loading}
                title={'New Project'}
                templates={templates}
                cloudProviders={cloudProviders}
              />
            )}
            {currentStep.id === '2' && (
              <CreateProjectForm
                templateImplementations={templateImplementations}
                CICDProviders={CICDProviders}
                codeVersionManagerProviders={codeSystemsVersionControl}
                cloudProviders={cloudProviders}
                action={handleSubmit}
                cancelAction={handleCancel}
                formik={formik}
                loading={loading}
                title={'New Project'}
                actionButtonText={'Create project'}
                handleCancel={() => {
                  location.replace('/dashboard');
                }}
              />
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export { NewProjectPage };
