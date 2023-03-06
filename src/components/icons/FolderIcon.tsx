import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const FolderIcon: React.FC<IconConfigProps> = withSVGIconColor(({ statusColor, ...props }) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.600098 1.79995C0.600098 0.916296 1.31644 0.199951 2.2001 0.199951H6.2001L7.8001 1.79995H11.8001C12.6838 1.79995 13.4001 2.5163 13.4001 3.39995V8.19995C13.4001 9.08361 12.6838 9.79995 11.8001 9.79995H2.2001C1.31644 9.79995 0.600098 9.08361 0.600098 8.19995V1.79995Z"
        fill={statusColor}
      />
    </svg>
  );
});

export { FolderIcon };
