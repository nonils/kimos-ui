import React from 'react';
import colors from 'tailwindcss/colors';
import { IconConfigProps } from 'types/common';

type IconComponentTypes = {
  statusColor: string;
  className?: string;
};

const withSVGIconColors = (Component: React.ComponentType<IconComponentTypes>) => {
  const ComponentWithConversion: React.FC<IconConfigProps> = ({
    isActive = false,
    defaultColor = colors.gray[600],
    ...props
  }) => {
    const statusColor = isActive ? colors.indigo[600] : defaultColor;

    return <Component statusColor={statusColor} {...props} />;
  };

  return ComponentWithConversion;
};

export default withSVGIconColors;
