import React from 'react';
import { ProgressLoader, VerticalCentered } from 'components';

const ContentLoading: React.FC = () => {
  return (
    <VerticalCentered>
      <div className="w-96">
        <ProgressLoader />
      </div>
    </VerticalCentered>
  );
};

export default ContentLoading;
