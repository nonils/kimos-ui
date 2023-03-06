import React from 'react';
import classNames from 'classnames';
import { IKeyValue } from 'types/common';

type Props = {
  children: React.ReactNode;
  component?: string;
  align?: 'left' | 'center' | 'right';
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
  className?: string;
  color?:
    | 'black'
    | 'gray-400'
    | 'gray'
    | 'gray-700'
    | 'gray-900'
    | 'blue'
    | 'white'
    | 'red'
    | 'blue-200';
  family?: 'brown' | 'silvia';
  id?: string;
  weight?: 'normal' | 'medium' | 'bold';
  htmlFor?: string;
  title?: string;
};

const Typography: React.FC<Props> = ({
  children,
  component = 'p',
  align = 'left',
  size = 'base',
  color = 'black',
  family = 'brown',
  weight = 'normal',
  className,
  ...props
}) => {
  const getFontFamily = () => {
    const availableFamily: IKeyValue = {
      brown: 'font-brown',
      silvia: 'font-silvia',
    };

    return availableFamily[family];
  };

  const getFontSize = () => {
    const availableFontSizes: IKeyValue = {
      xxs: 'text-xxs',
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    };

    return availableFontSizes[size];
  };

  const getTextAlign = () => {
    const availableAlignments: IKeyValue = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    return availableAlignments[align];
  };

  const getTextColor = () => {
    const availableColors: IKeyValue = {
      black: 'text-black',
      'gray-400': 'text-gray-400',
      gray: 'text-gray-500',
      'gray-700': 'text-gray-700',
      'gray-900': 'text-gray-900',
      blue: 'text-blue-600',
      white: 'text-white',
      red: 'text-red-600',
      'blue-200': 'text-blue-200',
    };

    return availableColors[color];
  };

  const getFontWeight = () => {
    const availableWeights: IKeyValue = {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    };

    return availableWeights[weight];
  };

  const titleClassNames = classNames(
    getFontSize(),
    getTextAlign(),
    getTextColor(),
    getFontFamily(),
    getFontWeight(),
    className,
  );

  return React.createElement(
    component,
    {
      className: titleClassNames,
      ...props,
    },
    children,
  );
};

export { Typography };
