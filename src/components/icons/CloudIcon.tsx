import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const CloudIcon: React.FC<IconConfigProps> = withSVGIconColor(({ statusColor, ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.66667 14.1667C4.36548 14.1667 2.5 12.3012 2.5 10C2.5 7.95961 3.9666 6.26177 5.90313 5.90314C6.26177 3.9666 7.95961 2.5 10 2.5C12.0404 2.5 13.7382 3.9666 14.0969 5.90314C16.0334 6.26177 17.5 7.95961 17.5 10C17.5 12.3012 15.6345 14.1667 13.3333 14.1667M7.5 10L10 7.5M10 7.5L12.5 10M10 7.5V17.5"
        stroke={statusColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export { CloudIcon };
