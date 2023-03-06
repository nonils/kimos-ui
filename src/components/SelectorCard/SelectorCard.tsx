import React from 'react';
import { Stack, Typography } from 'components';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
  onClick: () => void;
  isSelected: boolean;
  id: string;
  error?: string | boolean;
};

const SelectorCard: React.FC<Props> = ({ icon, text, title, onClick, isSelected, id, error }) => {
  const selectorClasses = classNames('selector-card', {
    'selector-card--active': isSelected,
    'selector-card--error': error,
  });

  return (
    <button type="button" className={selectorClasses} onClick={onClick} id={id}>
      <Stack direction="horizontal">
        <div>{icon}</div>
        <div>
          <Stack direction="vertical">
            <Typography component="h3" size="sm" color="white">
              {title}
            </Typography>
            <Typography size="xs" color="blue-200">
              {text}
            </Typography>
          </Stack>
        </div>
      </Stack>
    </button>
  );
};

export { SelectorCard };
