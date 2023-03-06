import React from 'react';
import { ShapesConfigProps } from 'types/common';

const SquaresSmallThree: React.FC<ShapesConfigProps> = ({ className, ...rest }) => {
  return (
    <svg
      className={className}
      width="100"
      height="87"
      viewBox="0 0 100 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M38.3484 62.8672L52.2801 87.0001H24.4132L10.4814 62.8672H38.3484Z" fill="#F2F2F2" />
      <path
        d="M38.3486 62.8682L52.2804 87.0011L68.5386 58.8438L54.6035 34.7109L38.3486 62.8682Z"
        fill="#DADADA"
      />
      <path d="M38.3484 62.8682H10.4814L26.7363 34.7109H54.6032L38.3484 62.8682Z" fill="white" />
      <path d="M18.4242 18.6152L27.6346 34.5694H9.21039L0 18.6152H18.4242Z" fill="#001EA8" />
      <path
        d="M18.4238 18.6155L27.6342 34.5697L38.382 15.9542L29.1716 0L18.4238 18.6155Z"
        fill="#001E5A"
      />
      <path d="M18.4242 18.6155H0L10.7477 0H29.1719L18.4242 18.6155Z" fill="#3C00FF" />
      <path d="M89.62 58.1211L96.3365 69.7571H82.9001L76.1836 58.1211H89.62Z" fill="#001EA8" />
      <path
        d="M89.6201 58.1217L96.3366 69.7577L99.6914 63.9055L92.9715 52.2695L89.6201 58.1217Z"
        fill="#001E5A"
      />
      <path d="M89.62 58.1217H76.1836L79.535 52.2695H92.9714L89.62 58.1217Z" fill="#3C00FF" />
    </svg>
  );
};

export { SquaresSmallThree };
