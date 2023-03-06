import React from 'react';
import classNames from 'classnames';
import { IKeyValue } from 'types/common';

type Props = {
  direction: 'horizontal' | 'vertical';
  space?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  children: React.ReactNode;
  component?: string;
  className?: string;
  vAlign?: 'start' | 'center' | 'end';
  hAlign?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
};

const Stack: React.FC<Props> = ({
  component = 'div',
  direction,
  space,
  vAlign = 'start',
  hAlign = 'start',
  children,
  className,
}) => {
  const buildingClasses = () => {
    if (direction === 'horizontal') {
      const availableSpaces = {
        0: 'space-x-0',
        1: 'space-x-1',
        2: 'space-x-2',
        3: 'space-x-3',
        4: 'space-x-4',
        5: 'space-x-5',
        6: 'space-x-6',
        7: 'space-x-7',
        8: 'space-x-8',
        9: 'space-x-9',
        10: 'space-x-10',
      };

      const availableVAlign: IKeyValue = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
      };

      const availableHAlign: IKeyValue = {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      };

      const spaceClass = space ? availableSpaces[space] : null;

      const horizontalClass = classNames(
        'flex',
        spaceClass,
        availableVAlign[vAlign],
        availableHAlign[hAlign],
      );

      return horizontalClass;
    }

    const availableSpaces = {
      0: 'space-y-0',
      1: 'space-y-1',
      2: 'space-y-2',
      3: 'space-y-3',
      4: 'space-y-4',
      5: 'space-y-5',
      6: 'space-y-6',
      7: 'space-y-7',
      8: 'space-y-8',
      9: 'space-y-9',
      10: 'space-y-10',
    };

    const spaceClass = space ? availableSpaces[space] : null;

    const verticalClass = classNames('block', spaceClass);

    return verticalClass;
  };

  const classes = classNames(buildingClasses(), className);

  return React.createElement(
    component,
    {
      className: classes,
      'data-testid': 'stack',
    },
    children,
  );
};

export { Stack };
