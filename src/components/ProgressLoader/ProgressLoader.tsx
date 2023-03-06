import React from 'react';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';
import './styles.scss';

type Props = {
  showLabel?: boolean;
};

const ProgressLoader: React.FC<Props> = ({ showLabel = true }) => {
  return (
    <Stack direction="vertical" space="3" className="progress">
      <div className="progress__wrapper">
        <div className="progress__bar" />
      </div>
      {showLabel && (
        <Typography component="h2" family="silvia" color="gray" align="center" size="xl">
          Loading...
        </Typography>
      )}
    </Stack>
  );
};

export { ProgressLoader };
