import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import colors from 'tailwindcss/colors';

const PageLoader: React.FC = () => {
  return (
    <div className="grid place-content-center min-h-screen">
      <div className="py-12">
        <Spinner type="TailSpin" height={100} width={100} color={colors.gray[600]} />
      </div>
    </div>
  );
};

export { PageLoader };
