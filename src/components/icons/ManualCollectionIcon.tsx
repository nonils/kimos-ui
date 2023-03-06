import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const ManualCollectionIcon: React.FC<IconConfigProps> = withSVGIconColor(
  ({ statusColor, ...props }) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4.66602 7.66667V9.33333M4.66602 7.66667V3.66667C4.66602 3.11438 5.11373 2.66667 5.66602 2.66667C6.2183 2.66667 6.66602 3.11438 6.66602 3.66667M4.66602 7.66667C4.66602 7.11438 4.2183 6.66667 3.66602 6.66667C3.11373 6.66667 2.66602 7.11438 2.66602 7.66667V9C2.66602 11.7614 4.90459 14 7.66602 14C10.4274 14 12.666 11.7614 12.666 9V5.66667C12.666 5.11438 12.2183 4.66667 11.666 4.66667C11.1137 4.66667 10.666 5.11438 10.666 5.66667M6.66602 3.66667V7.33333M6.66602 3.66667V3C6.66602 2.44772 7.11373 2 7.66602 2C8.2183 2 8.66602 2.44772 8.66602 3V3.66667M8.66602 3.66667V7.33333M8.66602 3.66667C8.66602 3.11438 9.11373 2.66667 9.66602 2.66667C10.2183 2.66667 10.666 3.11438 10.666 3.66667V5.66667M10.666 5.66667V7.33333"
          stroke={statusColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export { ManualCollectionIcon };
