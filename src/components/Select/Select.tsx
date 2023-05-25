import React from 'react';
import { ISelectOption } from 'types/common';
import classNames from 'classnames';
import ReactSelect, { MultiValue, SingleValue } from 'react-select';
import colors from 'tailwindcss/colors';
import './styles.scss';

type Props = {
  label?: string;
  options?: ISelectOption[];
  value?: ISelectOption | null;
  getOptionValue?: (x: any) => any;
  onChange?: (option: MultiValue<ISelectOption> | SingleValue<ISelectOption>) => void;
  placeholder?: string;
  className?: string;
  id: string;
  loading?: boolean;
  isMulti?: boolean;
  name: string;
  error?: string | boolean;
};

const SelectComponent: React.FC<Props> = ({
  id,
  label,
  options,
  value,
  onChange,
  getOptionValue,
  placeholder,
  className,
  loading,
  isMulti = false,
  name,
  error,
}) => {
  const selectOption = classNames('select', className, {
    select__error: error,
  });

  return (
    <div className={selectOption} data-testid="select-wrapper">
      {label && (
        <label htmlFor={id} className="input__label">
          {label}
        </label>
      )}
      <ReactSelect
        isMulti={isMulti}
        id={id}
        name={name}
        options={options}
        getOptionValue={getOptionValue}
        className="custom-select-wrapper"
        classNamePrefix="custom-select"
        placeholder={placeholder}
        isLoading={loading}
        value={value}
        onChange={onChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: colors.blue[600],
          },
        })}
      />
    </div>
  );
};

const Select = React.memo(SelectComponent);

export { Select };
