import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const NewspaperIcon: React.FC<IconConfigProps> = withSVGIconColor(({ statusColor, ...props }) => {
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
        d="M12.6667 13.3337H3.33333C2.59695 13.3337 2 12.7367 2 12.0003L2 4.00033C2 3.26395 2.59695 2.66699 3.33333 2.66699L10 2.66699C10.7364 2.66699 11.3333 3.26395 11.3333 4.00033V4.66699M12.6667 13.3337C11.9303 13.3337 11.3333 12.7367 11.3333 12.0003L11.3333 4.66699M12.6667 13.3337C13.403 13.3337 14 12.7367 14 12.0003V6.00033C14 5.26395 13.403 4.66699 12.6667 4.66699L11.3333 4.66699M8.66667 2.66699L6 2.66699M4.66667 10.667H8.66667M4.66667 5.33366H8.66667V8.00033H4.66667V5.33366Z"
        stroke={statusColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export { NewspaperIcon };
