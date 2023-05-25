import { Form, InputText, TemplateCard } from 'components';
import { Stack } from 'components/Stack/Stack';
import React from 'react';
import { ICICDProvider, ICodeSystemVersionControl, ITemplate } from '../../../types';
import { Select } from '../../Select/Select';

type SelectTemplateFormProps = {
  CICDProviders: ICICDProvider[];
  action: () => void;
  cancelAction: () => void;
  codeSystemsVersionControl: ICodeSystemVersionControl[];
  search: string;
  setSearch: (value: string) => void;
  formik: any;
  loading: boolean;
  searchText: string;
  showTitle?: boolean;
  templates: ITemplate[];
  title?: string;
};

const SelectTemplateForm: React.FC<SelectTemplateFormProps> = ({
  action,
  search,
  setSearch,
  CICDProviders,
  formik,
  codeSystemsVersionControl,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cancelAction,
  templates,
  loading,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { values, handleSubmit, errors, handleChange } = formik;

  const handleChangeSearch = (e: any) => {
    // eslint-disable-next-line no-debugger
    debugger;
    setSearch(e.target.value);
    console.log(e);
  };

  return (
    <div className="min-h-full">
      <Stack direction="vertical" space="3" className="p-3">
        <Form id="create-app-form" onSubmit={action} loading={loading}>
          <Stack direction="vertical" space="4">
            <Stack direction="horizontal" space="4">
              <div className="px-4 py-6 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0">
                <div className="sm:col-span-6">
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
                <div className="sm:col-span-3">
                  <Select
                    id={'cicdProvider'}
                    name={'cicdProvider'}
                    label={'CI/CD Provider'}
                    isMulti={false}
                    options={CICDProviders.map((cicdProvider) => ({
                      value: cicdProvider.id,
                      label: cicdProvider.name,
                    }))}
                    value={values.cicdProvider}
                    onChange={(value: any) =>
                      handleChange({ target: { name: 'cicdProvider', value } })
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <Select
                    id={'codeSystemsVersionControl'}
                    name={'codeSystemsVersionControl'}
                    label={'Code version control'}
                    isMulti={false}
                    options={codeSystemsVersionControl.map((codeSystemVersionControl) => ({
                      value: codeSystemVersionControl.id,
                      label: codeSystemVersionControl.name,
                    }))}
                    value={values.codeSystemVersionControl}
                    onChange={(value: any) =>
                      handleChange({ target: { name: 'codeSystemVersionControl', value } })
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
                    className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                  >
                    <TemplateCard template={template} />
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
