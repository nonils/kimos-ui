import React from 'react';
import classNames from 'classnames';
import { FormikErrors } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Typography } from '../Typography/Typography';
import './styles.scss';

type Props = {
  id: string;
  preIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: 'text' | 'password' | 'number';
  error?: string | FormikErrors<any> | boolean;
  subtitle?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  variant?: 'light';
};

const InputText: React.FC<Props> = ({
  id,
  preIcon,
  afterIcon,
  placeholder,
  label,
  value = '',
  onChange,
  name,
  type = 'text',
  error,
  subtitle,
  onKeyPress,
  disabled = false,
  variant,
}) => {
  const isLightVariant = variant === 'light';

  const inputClasses = classNames('input__field', {
    'input__field--preicon': preIcon,
    'input__field--aftericon': afterIcon,
    'input__field--error': error,
  });

  const labelClasses = classNames('input__label', {
    'input__label--light': isLightVariant,
  });

  return (
    <div className="input">
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <div className="input__wrapper">
        {preIcon && (
          <div className="input__preicon" data-testid="pre-icon">
            {preIcon}
          </div>
        )}
        <input
          type={type}
          name={name}
          id={id}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          disabled={disabled ? true : false}
        />
        {afterIcon && !error && (
          <div className="input__aftericon" data-testid="after-icon">
            {afterIcon}
          </div>
        )}
        {error && (
          <div className="input__aftericon" data-testid="error-icon">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-label="hidden" />
          </div>
        )}
      </div>
      {error && (
        <Typography size="xs" color="red" className="input__message" id="email-error">
          <>{error}</>
        </Typography>
      )}
      {!error && subtitle && (
        <Typography
          size="sm"
          color={isLightVariant ? 'white' : 'gray'}
          className="input__message"
          id="email-subtitle"
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export { InputText };
