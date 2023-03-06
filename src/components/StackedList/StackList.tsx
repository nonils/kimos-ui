import React from 'react';
import { StackListItem } from './StackListItem';

type Props = {
  children: React.ReactNode;
};

const StackListComponent: React.FC<Props> = ({ children }) => {
  return <ul className="divide-y divide-gray-200">{children}</ul>;
};

const StackList = Object.assign(StackListComponent, {
  Item: StackListItem,
});

export { StackList };
