import React from 'react';
import { IKeyValue } from 'types/common';

type Props = {
  children: React.ReactNode;
  padder?: 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

const StackListItem: React.FC<Props> = ({ children, padder = 0 }) => {
  const buildingSpaces = () => {
    const availableSpaces: IKeyValue = {
      1: 'py-1',
      2: 'py-2',
      3: 'py-3',
      4: 'py-4',
      5: 'py-5',
      6: 'py-6',
      7: 'py-7',
      8: 'py-8',
      9: 'py-9',
      10: 'py-10',
    };

    const spaceVal = availableSpaces[padder];

    return spaceVal || '';
  };

  return <li className={buildingSpaces()}>{children}</li>;
};

export { StackListItem };
