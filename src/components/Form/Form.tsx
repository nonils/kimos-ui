import React from 'react';

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  id: string;
  className?: string;
};

const Form: React.FC<Props> = ({
  onSubmit,
  children,
  loading = false,
  id,
  className,
  ...props
}) => {
  return (
    <form id={id} onSubmit={onSubmit} data-testid="form" {...props}>
      <fieldset
        disabled={loading}
        aria-busy={loading}
        data-testid="form-fieldset"
        className={className}
      >
        {children}
      </fieldset>
    </form>
  );
};

export { Form };
