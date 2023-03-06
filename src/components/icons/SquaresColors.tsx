import React from 'react';
import { ShapesConfigProps } from 'types/common';

const SquaresColors: React.FC<ShapesConfigProps> = ({ className, ...rest }) => {
  return (
    <svg
      className={className}
      width="128"
      height="210"
      viewBox="0 0 128 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M37.16 177.551L55.75 209.741H18.58L0 177.551H37.16Z" fill="#F2F2F2" />
      <path
        d="M37.1602 177.55L55.7501 209.74L77.4201 172.19L58.8401 140L37.1602 177.55Z"
        fill="#DADADA"
      />
      <path d="M37.16 177.55H0L21.68 140H58.84L37.16 177.55Z" fill="white" />
      <path d="M68.7299 54.4902L95.6898 101.19H41.7598L14.7998 54.4902H68.7299Z" fill="#001EA8" />
      <path
        d="M68.7295 54.49L95.6895 101.19L127.149 46.7L100.189 0L68.7295 54.49Z"
        fill="#001E5A"
      />
      <path d="M68.7299 54.49H14.7998L46.2598 0H100.19L68.7299 54.49Z" fill="#3C00FF" />
    </svg>
  );
};

export { SquaresColors };
