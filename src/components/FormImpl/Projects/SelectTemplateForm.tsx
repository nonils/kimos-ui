import { Form, InputText, TemplateCard } from 'components';
import { Stack } from 'components/Stack/Stack';
import React from 'react';
import {
  ICICDProvider,
  ICloudProvider,
  ICodeSystemVersionControl,
  ISelectOption,
  ITemplate,
} from '../../../types';
import { Select } from '../../Select/Select';

type SelectTemplateFormProps = {
  CICDProviders: ICICDProvider[];
  action: () => void;
  cancelAction: () => void;
  codeSystemsVersionControl: ICodeSystemVersionControl[];
  cloudProviders: ICloudProvider[];
  setSelectedTemplate: (template: ITemplate) => void;
  search: string;
  setSearch: (value: string) => void;
  loading: boolean;
  showTitle?: boolean;
  templates: ITemplate[];
  title?: string;
  cloudProvider: ISelectOption | undefined;
  setCloudProvider: (value: ISelectOption) => void;
  cicdProvider: ISelectOption | undefined;
  setCICDProvider: (value: ISelectOption) => void;
  codeVersionManagerProvider: ISelectOption | undefined;
  setCodeVersionManagerProvider: (value: ISelectOption) => void;
};

const SelectTemplateForm: React.FC<SelectTemplateFormProps> = ({
  action,
  search,
  setSearch,
  cloudProvider,
  setCloudProvider,
  cicdProvider,
  setCICDProvider,
  codeVersionManagerProvider,
  setCodeVersionManagerProvider,
  CICDProviders,
  codeSystemsVersionControl,
  cloudProviders,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cancelAction,
  setSelectedTemplate,
  templates,
  loading,
}) => {
  const handleChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSelectTemplate = (template: ITemplate) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="min-h-full">
      <Stack direction="vertical" space="3" className="p-3">
        <Form id="create-app-form" onSubmit={action} loading={loading}>
          <Stack direction="vertical" space="4">
            <Stack direction="horizontal" space="4">
              <div className="w-full mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-12">
                  <InputText
                    id={'search'}
                    name={'search'}
                    label={'Search'}
                    placeholder={'Search'}
                    value={search}
                    onChange={handleChangeSearch}
                    disabled={loading}
                  />
                </div>
                <div className="sm:col-span-4">
                  <Select
                    id={'cicdProvider'}
                    name={'cicdProvider'}
                    label={'CI/CD Provider'}
                    isMulti={false}
                    options={CICDProviders.map((cicdProvider) => ({
                      value: cicdProvider.id,
                      label: cicdProvider.name,
                    }))}
                    value={cicdProvider}
                    onChange={(value: any) =>
                      setCICDProvider({ value: value.value, label: value.label })
                    }
                  />
                </div>
                <div className="sm:col-span-4">
                  <Select
                    id={'cloudProvider'}
                    name={'cloudProvider'}
                    label={'Cloud Provider'}
                    isMulti={false}
                    options={cloudProviders.map((cloudProvider) => ({
                      value: cloudProvider.id,
                      label: cloudProvider.name,
                    }))}
                    value={cloudProvider}
                    onChange={(value: any) =>
                      setCloudProvider({ value: value.value, label: value.label })
                    }
                  />
                </div>
                <div className="sm:col-span-4">
                  <Select
                    id={'codeSystemsVersionControl'}
                    name={'codeSystemsVersionControl'}
                    label={'Code version control'}
                    isMulti={false}
                    options={codeSystemsVersionControl.map((codeSystemVersionControl) => ({
                      value: codeSystemVersionControl.id,
                      label: codeSystemVersionControl.name,
                    }))}
                    value={codeVersionManagerProvider}
                    onChange={(value: any) =>
                      setCodeVersionManagerProvider({ value: value.value, label: value.label })
                    }
                  />
                </div>
              </div>
            </Stack>
            <div>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {templates.map((template) => (
                  <li
                    key={template.id}
                    className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow  hover:shadow-lg"
                  >
                    <TemplateCard template={template} action={handleSelectTemplate} />
                  </li>
                ))}
              </ul>
            </div>
          </Stack>
        </Form>
      </Stack>
    </div>
  );
};

export { SelectTemplateForm };
