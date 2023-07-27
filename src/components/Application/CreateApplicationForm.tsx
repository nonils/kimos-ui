import React, { useEffect } from 'react';
import { Stack } from '../Stack/Stack';
import { Form } from '../Form/Form';
import { InputText } from '../InputText/InputText';
import {
  ICICDProvider,
  ICloudProvider,
  ICodeSystemVersionControl,
  ItemplateImplementation,
} from '../../types';
import { Select } from '../Select/Select';
import { CustomSwitch } from '../Switch/CustomSwitch';
import { Button } from '../Button/Button';

type CreateApplicationProps = {
  title?: string;
  CICDProviders: ICICDProvider[];
  codeVersionManagerProviders: ICodeSystemVersionControl[];
  cloudProviders: ICloudProvider[];
  showTitle?: boolean;
  templateImplementations: ItemplateImplementation[];
  loading: boolean;
  handleCancel: () => void;
  formik: any;
  actionButtonText: string;
};

const CreateApplicationForm: React.FC<CreateApplicationProps> = ({
  title,
  showTitle = false,
  loading,
  formik,
  cloudProviders,
  CICDProviders,
  handleCancel,
  codeVersionManagerProviders,
  templateImplementations,
  actionButtonText,
}) => {
  const { values, handleSubmit, errors, handleChange } = formik;
  const [filteredCICDProviders, setFilteredCICDProviders] =
    React.useState<ICICDProvider[]>(CICDProviders);
  const [filteredCloudProviders, setFilteredCloudProviders] =
    React.useState<ICloudProvider[]>(cloudProviders);
  const [filteredCodeVersionManagerProviders, setFilteredCodeVersionManagerProviders] =
    React.useState<ICodeSystemVersionControl[]>(codeVersionManagerProviders);

  useEffect(() => {
    if (templateImplementations.length === 0) return;
    const filteredTemplateImplementations = templateImplementations.filter(
      (templateImplementation) => {
        if (
          values.cicdProvider &&
          templateImplementation.cicdProviderId !== values.cicdProvider.value
        ) {
          return false;
        }
        if (
          values.codeVersionManagerProvider &&
          templateImplementation.codeVersionManagerProviderId !== values.cicdProvider.value
        ) {
          return false;
        }
        return !(
          values.cicdProvider && templateImplementation.cicdProviderId !== values.cicdProvider.value
        );
      },
    );
    setFilteredCICDProviders(
      filteredTemplateImplementations
        .map((template) => template.cicdProviderId)
        .map((id) => CICDProviders.find((cicdProvider) => cicdProvider.id === id))
        .filter((x) => x !== undefined) as ICICDProvider[],
    );
    setFilteredCloudProviders(
      filteredTemplateImplementations
        .map((template) => template.cloudProviderId)
        .map((id) => cloudProviders.find((cloudProvider) => cloudProvider.id === id))
        .filter((x) => x !== undefined) as ICloudProvider[],
    );
    setFilteredCodeVersionManagerProviders(
      filteredTemplateImplementations
        .map((template) => template.codeVersionManagerProviderId)
        .map((id) =>
          codeVersionManagerProviders.find(
            (codeVersionManagerProvider) => codeVersionManagerProvider.id === id,
          ),
        )
        .filter((x) => x !== undefined) as ICodeSystemVersionControl[],
    );
  }, [
    values.cicdProvider,
    values.cloudProvider,
    values.codeVersionManagerProvider,
    CICDProviders,
    codeVersionManagerProviders,
    cloudProviders,
    templateImplementations,
  ]);
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
            <Select
              id={'cicdProvider'}
              name={'cicdProvider'}
              label={'CI/CD Provider'}
              isMulti={false}
              options={filteredCICDProviders.map((cicdProvider) => ({
                value: cicdProvider.id,
                label: cicdProvider.name,
              }))}
              error={errors.cicdProvider}
              value={values.cicdProvider}
              onChange={(value: any) => handleChange({ target: { name: 'cicdProvider', value } })}
            />
            <Select
              id={'cloudProvider'}
              name={'cloudProvider'}
              label={'Cloud Provider'}
              isMulti={false}
              options={filteredCloudProviders.map((cloudProvider) => ({
                value: cloudProvider.id,
                label: cloudProvider.name,
              }))}
              error={errors.cloudProvider}
              value={values.cloudProvider}
              onChange={(value: any) => handleChange({ target: { name: 'cloudProvider', value } })}
            />
            <Select
              id={'codeVersionManagerProvider'}
              name={'codeVersionManagerProvider'}
              label={'Code Version Manager'}
              isMulti={false}
              options={filteredCodeVersionManagerProviders.map((codeVersionManager) => ({
                value: codeVersionManager.id,
                label: codeVersionManager.name,
              }))}
              error={errors.codeVersionManagerProvider}
              value={values.codeVersionManagerProvider}
              onChange={(value: any) =>
                handleChange({ target: { name: 'codeVersionManagerProvider', value } })
              }
            />
            <CustomSwitch
              value={values.isPrivateRepo}
              onChange={handleChange}
              name="isPrivateRepo"
              id="isPrivateRepo"
              label={`It's a private repository?`}
            />
            <InputText
              id="repositoryName"
              name="repositoryName"
              label="Repository name"
              placeholder="Set the name of the repository"
              value={values.repositoryName}
              error={errors.repositoryName}
              onChange={handleChange}
              disabled={loading}
            />
            <CustomSwitch
              value={values.allowsJiraIntegration}
              onChange={handleChange}
              name="allowsJiraIntegration"
              id="allowsJiraIntegration"
              label={`Allows Jira integration?`}
            />
            {values.allowsJiraIntegration && (
              <>
                <InputText
                  id="jiraProjectName"
                  name="jiraProjectName"
                  label="Jira project name"
                  placeholder="Set the Jira project name"
                  value={values.jiraProjectName}
                  error={errors.jiraProjectName}
                  onChange={handleChange}
                  disabled={loading}
                />
                <InputText
                  id="jiraProjectKey"
                  name="jiraProjectKey"
                  label="Jira project key"
                  placeholder="Set the jira project key"
                  value={values.jiraProjectKey}
                  error={errors.jiraProjectKey}
                  onChange={handleChange}
                  disabled={loading}
                />
              </>
            )}
            <Stack direction="horizontal" space="3">
              <Button loading={loading} type="submit" variant={'primary'} id="sign-in-button">
                {actionButtonText}
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

export { CreateApplicationForm };
