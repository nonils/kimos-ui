import { FormattedMessage } from 'react-intl';
import React from 'react';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { Form } from '../Form/Form';
import { InputText } from '../InputText/InputText';

type SignInFormProps = {
  loading: boolean;
  formik: any;
};

const SignUpForm: React.FC<SignInFormProps> = ({ loading, formik }) => {
  const { values, handleSubmit, errors, handleChange } = formik;

  return (
    <>
      <div>
        <img className="h-10 w-auto" src="/kimos.jpg" alt="Kimos" />
        <h2 className="mt-5 text-2xl font-extrabold text-gray-900">
          <FormattedMessage id="signUp.title" />
        </h2>
      </div>
      <div className="mt-8">
        <div className="mt-6">
          <Stack direction="vertical" space="3" className="p-3">
            <Form id="sign-in" onSubmit={handleSubmit} loading={loading}>
              <Stack direction="vertical" space="4">
                <InputText
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={values.email}
                  error={errors.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                <InputText
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  error={errors.password}
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  disabled={loading}
                />
                <InputText
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  label="Confirmar Password"
                  error={errors.repeatPassword}
                  placeholder="Enter your password"
                  value={values.repeatPassword}
                  onChange={handleChange}
                  disabled={loading}
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <a href={'/sign-in'} className="font-medium text-red-400 hover:text-red-300">
                        <FormattedMessage id={'signUp.do.you.have.an.account'} />
                      </a>
                    </div>
                  </div>
                </div>
                <Stack direction="horizontal" space="3">
                  <Button loading={loading} type="submit" variant={'primary'} id="sign-in-button">
                    <FormattedMessage id="signUp.button" />
                  </Button>
                </Stack>
              </Stack>
            </Form>
          </Stack>
        </div>
      </div>
    </>
  );
};

export { SignUpForm };
