import React from 'react';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const VerticalScroll: React.FC<Props> = ({ children, className }) => {
  const wrapperClasses = classNames('vertical-scroll', className);

  return <div className={wrapperClasses}>{children}</div>;
};

export { VerticalScroll };
