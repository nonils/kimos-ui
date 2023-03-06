import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const TabPane: React.FC<Props> = ({ children, className }) => {
  const panelClasses = classNames('p-4', className);
  return <section className={panelClasses}>{children}</section>;
};

export default TabPane;
