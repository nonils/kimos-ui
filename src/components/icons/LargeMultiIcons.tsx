import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const LargeMultiIcons: React.FC<IconConfigProps> = withSVGIconColor(
  ({ statusColor, className, ...props }) => {
    return (
      <svg
        width="372"
        height="30"
        viewBox="0 0 372 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <g opacity="0.2">
          <path
            d="M14.5 8.24707L7.28125 3.59863L0.0625 8.24707L7.28125 12.7861L0.0625 17.4346L7.28125 22.083L14.5 17.4346L7.28125 12.8408L14.5 8.24707ZM7.22656 23.5049L14.4453 28.0986L21.6641 23.5049L14.4453 18.9111L7.22656 23.5049ZM14.5 17.4346L21.6641 22.083L28.9375 17.4346L21.6641 12.8408L28.9375 8.24707L21.6641 3.59863L14.5 8.24707L21.7188 12.7861L14.5 17.4346Z"
            fill={statusColor}
          />
          <path
            d="M67.5391 19.0752H76.3438L67.375 3.59863H58.5703L67.5391 19.0752ZM59.9922 20.3877L55.5625 28.0986H72.5703L77 20.3877H59.9922ZM57.4219 5.56738L49 20.3877L53.375 28.0986L61.9609 13.2783L57.4219 5.56738Z"
            fill={statusColor}
          />
          <path
            d="M111.055 2.28613C103.562 2.28613 97.4922 8.35645 97.4922 15.8486C97.4922 23.3408 103.562 29.4111 111.055 29.4111C118.547 29.4111 124.617 23.3408 124.617 15.8486C124.617 8.35645 118.547 2.28613 111.055 2.28613ZM108.32 22.7939L101.43 15.958L108.32 9.06738L110.234 10.9814L108.922 12.2939L108.32 11.6924L104.109 15.958L108.32 20.1689L109.797 18.6924L106.844 15.7939L108.211 14.4814L112.422 18.6924L108.32 22.7939ZM113.734 22.6846L111.82 20.7705L113.133 19.4033L113.734 20.0596L117.945 15.7939L113.734 11.583L112.312 13.0596L115.211 15.958L113.844 17.2705L109.633 13.0596L113.734 8.95801L120.625 15.7939L113.734 22.6846Z"
            fill={statusColor}
          />
          <path
            d="M169.688 0.848633H150.312C147.378 0.848633 145 3.20679 145 6.11573V24.5815C145 27.4905 147.378 29.8486 150.312 29.8486H169.688C172.622 29.8486 175 27.4905 175 24.5815V6.11573C175 3.20679 172.622 0.848633 169.688 0.848633Z"
            fill={statusColor}
          />
          <path
            d="M168.327 22.6542H164.764C164.609 22.657 164.457 22.6141 164.327 22.5309C164.197 22.4478 164.094 22.3281 164.033 22.1871L160.165 13.2195C160.155 13.1846 160.133 13.1539 160.104 13.1318C160.075 13.1098 160.04 13.0976 160.003 13.0971C159.966 13.0967 159.931 13.1079 159.901 13.1292C159.871 13.1505 159.849 13.1807 159.838 13.2153L157.427 18.9091C157.414 18.9399 157.409 18.9734 157.412 19.0067C157.415 19.0399 157.427 19.0719 157.446 19.0998C157.464 19.1276 157.489 19.1504 157.519 19.1662C157.549 19.182 157.582 19.1903 157.616 19.1903H160.266C160.346 19.1903 160.424 19.2137 160.491 19.2577C160.558 19.3016 160.611 19.3641 160.642 19.4374L161.802 21.9972C161.833 22.069 161.845 22.1473 161.838 22.225C161.831 22.3027 161.804 22.3774 161.761 22.4425C161.717 22.5075 161.658 22.5609 161.589 22.5979C161.52 22.6348 161.442 22.6542 161.364 22.6542H151.717C151.644 22.6538 151.573 22.6356 151.509 22.6012C151.445 22.5668 151.391 22.5173 151.351 22.4572C151.312 22.397 151.288 22.328 151.281 22.2563C151.275 22.1847 151.287 22.1125 151.315 22.0464L157.451 7.55854C157.514 7.4052 157.622 7.27417 157.761 7.18256C157.9 7.09094 158.064 7.043 158.23 7.04499H161.77C161.937 7.0428 162.1 7.09066 162.239 7.1823C162.378 7.27394 162.486 7.40508 162.549 7.55854L168.727 22.0464C168.756 22.1124 168.768 22.1844 168.761 22.256C168.755 22.3276 168.731 22.3965 168.691 22.4566C168.652 22.5168 168.598 22.5663 168.534 22.6008C168.471 22.6353 168.4 22.6536 168.327 22.6542Z"
            fill="white"
          />
          <path
            d="M204.9 25.2482C199.4 25.2482 195 20.8482 195 15.3482C195 9.84824 199.4 5.44824 204.9 5.44824H216.5C222 5.44824 226.4 9.84824 226.4 15.3482C226.4 20.8482 222 25.2482 216.5 25.2482H204.9ZM216.2 21.7482C219.8 21.7482 222.6 18.8482 222.6 15.3482C222.6 11.7482 219.7 8.94824 216.2 8.94824H205.2C201.6 8.94824 198.8 11.8482 198.8 15.3482C198.8 18.8482 201.7 21.7482 205.2 21.7482H216.2Z"
            fill={statusColor}
          />
          <path
            d="M271.775 3.59863H249.025C247.548 3.59863 246.4 4.80176 246.4 6.22363V25.4736C246.4 26.9502 247.548 28.0986 249.025 28.0986H271.775C273.197 28.0986 274.4 26.9502 274.4 25.4736V6.22363C274.4 4.80176 273.197 3.59863 271.775 3.59863ZM260.4 7.09863C260.4 8.08301 259.58 8.84863 258.65 8.84863C257.666 8.84863 256.9 8.08301 256.9 7.09863C256.9 6.16895 257.666 5.34863 258.65 5.34863C259.58 5.34863 260.4 6.16895 260.4 7.09863ZM265.65 7.09863C265.65 8.08301 264.83 8.84863 263.9 8.84863C262.916 8.84863 262.15 8.08301 262.15 7.09863C262.15 6.16895 262.916 5.34863 263.9 5.34863C264.83 5.34863 265.65 6.16895 265.65 7.09863ZM270.9 7.09863C270.9 8.08301 270.08 8.84863 269.15 8.84863C268.166 8.84863 267.4 8.08301 267.4 7.09863C267.4 6.16895 268.166 5.34863 269.15 5.34863C270.08 5.34863 270.9 6.16895 270.9 7.09863Z"
            fill={statusColor}
          />
          <path
            d="M324.673 8.68457C324.345 7.37207 323.306 6.33301 322.048 6.00488C319.697 5.34863 310.4 5.34863 310.4 5.34863C310.4 5.34863 301.048 5.34863 298.697 6.00488C297.439 6.33301 296.4 7.37207 296.072 8.68457C295.416 10.9814 295.416 15.9033 295.416 15.9033C295.416 15.9033 295.416 20.7705 296.072 23.1221C296.4 24.4346 297.439 25.4189 298.697 25.7471C301.048 26.3486 310.4 26.3486 310.4 26.3486C310.4 26.3486 319.697 26.3486 322.048 25.7471C323.306 25.4189 324.345 24.4346 324.673 23.1221C325.33 20.7705 325.33 15.9033 325.33 15.9033C325.33 15.9033 325.33 10.9814 324.673 8.68457ZM307.337 20.333V11.4736L315.103 15.9033L307.337 20.333Z"
            fill={statusColor}
          />
          <path
            d="M368.689 3.59863H349.056C347.744 3.59863 346.65 4.74707 346.65 6.05957V25.6924C346.65 27.0049 347.744 28.0986 349.056 28.0986H368.689C370.002 28.0986 371.15 27.0049 371.15 25.6924V6.05957C371.15 4.74707 370.002 3.59863 368.689 3.59863ZM367.267 11.7471C367.158 13.4971 365.955 15.8486 363.658 18.8564C361.252 21.9736 359.173 23.5049 357.533 23.5049C356.494 23.5049 355.619 22.5752 354.908 20.6611C353.486 15.5752 352.939 12.5674 351.791 12.5674C351.627 12.5674 351.189 12.8408 350.369 13.3877L349.548 12.3486C351.572 10.5439 353.541 8.5752 354.744 8.46582C356.111 8.30176 356.986 9.23145 357.314 11.2549C358.408 18.4189 358.955 19.5127 360.978 16.2861C361.744 15.083 362.127 14.208 362.181 13.6064C362.4 11.8018 360.759 11.9111 359.666 12.4033C360.541 9.50488 362.236 8.1377 364.642 8.24707C366.502 8.24707 367.322 9.4502 367.267 11.7471Z"
            fill={statusColor}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="30" height="29" fill="white" transform="translate(145 0.848633)" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export { LargeMultiIcons };
