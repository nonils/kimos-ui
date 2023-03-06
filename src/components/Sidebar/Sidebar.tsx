import classNames from 'classnames';
import React from 'react';
import './styles.scss';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Sidebar: React.FC<Props> = ({ children, variant = 'primary', className }) => {
  const sidebarClasses = classNames('sidebar', className, {
    sidebar__primary: variant === 'primary',
    sidebar__secondary: variant === 'secondary',
  });

  return (
    <aside className={sidebarClasses} id="sidebar">
      {children}
    </aside>
  );
};

export { Sidebar };
