import React from 'react';
import RadioGroupItem from './RadioGroupItem';
import './styles.scss';

type Props = {
  children: React.ReactNode;
};

const RadioGroupComponent: React.FC<Props> = ({ children }) => {
  return <ul className="area-selector">{children}</ul>;
};

const RadioGroup = Object.assign(RadioGroupComponent, {
  Item: RadioGroupItem,
});

export default RadioGroup;
