import React from 'react';
import classNames from 'classnames';
import { Spinner, Stack } from 'components';
import './styles.scss';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'sextary';
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  id: string;
};

const Button: React.FC<Props> = ({
  id,
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  loading,
  disabled,
  ...rest
}) => {
  const buttonClasses = classNames('button', className, {
    button__primary: variant === 'primary',
    button__secondary: variant === 'secondary',
    button__tertiary: variant === 'tertiary',
    button__quaternary: variant === 'quaternary',
    button__quinary: variant === 'quinary',
    button__sextary: variant === 'sextary',
    'opacity-50 cursor-not-allowed': loading || disabled,
  });

  return (
    <button
      id={id}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? (
        <Stack direction="horizontal" space="2" hAlign="center" vAlign="center">
          <div data-testid="spinner-loading">
            <Spinner type="TailSpin" width={10} height={10} />
          </div>
          <div>{children}</div>
        </Stack>
      ) : (
        children
      )}
    </button>
  );
};

export { Button };
