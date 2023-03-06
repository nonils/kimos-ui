import React from 'react';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  id?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

const Badge: React.FC<Props> = ({ children, onClick, variant = 'primary', id = '1' }) => {
  const stylingClasses = classNames('badge', {
    'badge--clicker': onClick,
    badge__primary: variant === 'primary',
    badge__secondary: variant === 'secondary',
  });

  return (
    <span className={stylingClasses} id={`badge-${id}`}>
      {children}
      {onClick && (
        <button onClick={onClick} type="button" className="badge__button">
          <span className="sr-only">Remove large option</span>
          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      )}
    </span>
  );
};

export { Badge };
