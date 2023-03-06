import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const YourContentIcon: React.FC<IconConfigProps> = withSVGIconColor(({ statusColor, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.33333 4.00001C1.33333 2.52725 2.52724 1.33334 3.99999 1.33334H6.66666C8.13942 1.33334 9.33333 2.52725 9.33333 4.00001V6.66668C9.33333 8.13944 8.13942 9.33334 6.66666 9.33334H3.99999C2.52724 9.33334 1.33333 8.13944 1.33333 6.66668V4.00001Z"
        stroke={statusColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 4.00001C14.6667 2.52725 15.8606 1.33334 17.3333 1.33334H20C21.4728 1.33334 22.6667 2.52725 22.6667 4.00001V6.66668C22.6667 8.13944 21.4728 9.33334 20 9.33334H17.3333C15.8606 9.33334 14.6667 8.13944 14.6667 6.66668V4.00001Z"
        stroke={statusColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33333 17.3333C1.33333 15.8606 2.52724 14.6667 3.99999 14.6667H6.66666C8.13942 14.6667 9.33333 15.8606 9.33333 17.3333V20C9.33333 21.4728 8.13942 22.6667 6.66666 22.6667H3.99999C2.52724 22.6667 1.33333 21.4728 1.33333 20V17.3333Z"
        stroke={statusColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 17.3333C14.6667 15.8606 15.8606 14.6667 17.3333 14.6667H20C21.4728 14.6667 22.6667 15.8606 22.6667 17.3333V20C22.6667 21.4728 21.4728 22.6667 20 22.6667H17.3333C15.8606 22.6667 14.6667 21.4728 14.6667 20V17.3333Z"
        stroke={statusColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export { YourContentIcon };
