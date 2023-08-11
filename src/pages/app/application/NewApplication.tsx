import React, { useEffect, useState } from 'react';
import { AppLayout, CreateApplicationForm, SelectTemplateForm } from '../../../components';
import {
  ICreateApplicationDTO,
  ISelectOption,
  IStep,
  ITemplate,
  ItemplateImplementation,
} from '../../../types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Step } from '../../../components/Step/Step';
import { useAppDispatch, useToast } from '../../../hooks';
import { useSelector } from 'react-redux';
import {
  createApplicationAction,
  getAllTemplatesPaginatedAction,
  getCICDProvidersAction,
  getCloudProvidersAction,
  getCodeVersionManagerProvidersAction,
  getTemplateImplementationsByTemplateIdAction,
} from '../../../actions';
import { useNavigate, useParams } from 'react-router-dom';

const NewApplicationPage: React.FC<any> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { danger, success } = useToast();
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const appDispatch = useAppDispatch();
  const { projectId } = useParams();
  const navigate = useNavigate();
  const {
    accessToken,
    applicationSuccessOperation,
    codeVersionManagerProviders,
    codeVersionManagerProviderLoading,
    codeVersionManagerProviderError,
    cloudProviders,
    cloudProviderLoading,
    cloudProviderError,
    CICDProviders,
    CICDProviderLoading,
    CICDProviderError,
    templateImplementations,
    templateImplementationLoading,
    templateImplementationError,
    templates,
    templateError,
    templateLoading,
  } = useSelector((appState: any) => {
    return {
      accessToken: appState.authentication.token,
      applicationSuccessOperation: appState.application.successOperation,
      codeVersionManagerProviders: appState.codeVersionManagerProvider.codeVersionManagerProviders,
      codeVersionManagerProviderLoading: appState.codeVersionManagerProvider.loading,
      codeVersionManagerProviderError: appState.codeVersionManagerProvider.error,
      cloudProviders: appState.cloudProvider.cloudProviders,
      cloudProviderLoading: appState.cloudProvider.loading,
      cloudProviderError: appState.cloudProvider.error,
      CICDProviders: appState.CICDProvider.CICDProviders,
      CICDProviderLoading: appState.CICDProvider.loading,
      CICDProviderError: appState.CICDProvider.error,
      templateImplementations: appState.templateImplementation.templateImplementations,
      templateImplementationError: appState.templateImplementation.error,
      templateImplementationLoading: appState.templateImplementation.loading,
      templates: appState.template.templates,
      templateError: appState.template.error,
      templateLoading: appState.template.loading,
    };
  });

  const [cloudProvider, setCloudProvider] = React.useState<ISelectOption | undefined>(undefined);
  const [CICDProvider, setCICDProvider] = React.useState<ISelectOption | undefined>(undefined);
  const [codeVersionManagerProvider, setCodeVersionManagerProvider] = React.useState<
    ISelectOption | undefined
  >(undefined);
  const [searchTextTemplate, setSearchTextTemplate] = React.useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = React.useState<number>(0);

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

  const handleSelectedTemplate = (template: ITemplate) => {
    setSelectedTemplate(template);
    appDispatch(getTemplateImplementationsByTemplateIdAction(template.id, accessToken));
    const updatedSteps = [...steps];
    updatedSteps[0] = { ...updatedSteps[0], active: false, complete: true };
    updatedSteps[1] = { ...updatedSteps[1], active: true, complete: false };
    setSteps(updatedSteps);
    setCurrentStep(steps[1]);
  };

  /*Init useEffect*/
  useEffect(() => {
    if (!isInitialized && accessToken !== null && accessToken !== undefined) {
      appDispatch(
        getAllTemplatesPaginatedAction({ token: accessToken, search: searchTextTemplate, page }),
      );
      appDispatch(getCICDProvidersAction(accessToken));
      appDispatch(getCodeVersionManagerProvidersAction(accessToken));
      appDispatch(getCloudProvidersAction(accessToken));
      setIsInitialized(true);
    }
  }, [accessToken, appDispatch, isInitialized, page, searchTextTemplate]);

  /*Search effect*/
  useEffect(() => {
    const timeOutId = setTimeout(
      () =>
        appDispatch(
          getAllTemplatesPaginatedAction({
            token: accessToken,
            search: searchTextTemplate,
            cloudProvider,
            CICDProvider,
            codeVersionManagerProvider,
          }),
        ),
      500,
    );
    return () => clearTimeout(timeOutId);
  }, [
    searchTextTemplate,
    codeVersionManagerProvider,
    cloudProvider,
    CICDProvider,
    appDispatch,
    accessToken,
  ]);

  /*Error use effect*/
  useEffect(() => {
    if (
      codeVersionManagerProviderError ||
      cloudProviderError ||
      CICDProviderError ||
      templateError ||
      templateImplementationError
    ) {
      danger(
        'An error fetching the information has occured, Please try again. If the error persists contact with the suport team',
      );
    }
  }, [
    CICDProviderError,
    cloudProviderError,
    codeVersionManagerProviderError,
    danger,
    templateError,
    templateImplementationError,
  ]);

  useEffect(() => {
    if (applicationSuccessOperation) {
      success('Application created successfully');
      navigate(`/projects/${projectId}`);
    }
  }, [applicationSuccessOperation, navigate, projectId, success]);

  const handleCancel = () => {
    navigate(`/projects/${projectId}`);
  };
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

    const templateImplementationsFiltered = templateImplementations.filter(
      (templateImplementation: ItemplateImplementation) =>
        templateImplementation.cloudProviderId === cloudProvider.value &&
        templateImplementation.codeVersionManagerProviderId === codeVersionManagerProvider.value &&
        templateImplementation.cicdProviderId === cicdProvider.value,
    );

    if (templateImplementationsFiltered.length === 0) {
      //setError('No template implementation found for the selected providers');
    }

    const body: ICreateApplicationDTO = {
      allowsJiraIntegration,
      projectId: projectId ? projectId : '',
      templateImplementationId: templateImplementationsFiltered[0].id,
      templateId: selectedTemplate!.id,
      name,
      description,
      repositoryName,
      jiraProjectName,
      jiraProjectKey,
      isPrivateRepo,
    };
    appDispatch(createApplicationAction(body, accessToken));
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
                codeSystemsVersionControl={codeVersionManagerProviders}
                action={steps[0].onClickAction}
                cancelAction={handleCancel}
                loading={
                  CICDProviderLoading ||
                  cloudProviderLoading ||
                  templateLoading ||
                  codeVersionManagerProviderLoading ||
                  templateImplementationLoading /*TODO add create application loading here*/
                }
                title={'New Project'}
                templates={templates}
                cloudProviders={cloudProviders}
              />
            )}
            {currentStep.id === '2' && (
              <CreateApplicationForm
                templateImplementations={templateImplementations}
                CICDProviders={CICDProviders}
                codeVersionManagerProviders={codeVersionManagerProviders}
                cloudProviders={cloudProviders}
                formik={formik}
                loading={
                  CICDProviderLoading ||
                  cloudProviderLoading ||
                  templateLoading ||
                  codeVersionManagerProviderLoading ||
                  templateImplementationLoading /*TODO add create application loading here*/
                }
                title={'New application'}
                actionButtonText={'Create application'}
                handleCancel={handleCancel}
              />
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export { NewApplicationPage };
