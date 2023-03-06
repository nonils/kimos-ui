import React from 'react';
import './styles.scss';

type Props = {
  children: React.ReactNode;
};

const VerticalCentered: React.FC<Props> = ({ children }) => {
  return <div className="vertical-centered">{children}</div>;
};

export { VerticalCentered };
