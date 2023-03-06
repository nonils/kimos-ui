import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const FullScreenIcon: React.FC<IconConfigProps> = withSVGIconColor(({ statusColor, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.6665 5.33366V2.66699M2.6665 2.66699H5.33317M2.6665 2.66699L5.99984 6.00033M13.3332 5.33366V2.66699M13.3332 2.66699H10.6665M13.3332 2.66699L9.99984 6.00033M2.6665 10.667V13.3337M2.6665 13.3337H5.33317M2.6665 13.3337L5.99984 10.0003M13.3332 13.3337L9.99984 10.0003M13.3332 13.3337V10.667M13.3332 13.3337H10.6665"
        stroke={statusColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export { FullScreenIcon };
