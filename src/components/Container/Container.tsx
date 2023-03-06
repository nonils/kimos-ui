import React, { createElement } from 'react';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: string;
};

const Container: React.FC<Props> = ({ as = 'div', children, className = '' }) => {
  const containerClasses = classNames('app-container', className);

  return createElement(
    as,
    {
      className: containerClasses,
    },
    children,
  );
};

export { Container };
