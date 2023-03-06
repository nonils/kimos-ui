import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Typography, Stack } from 'components';
import './styles.scss';
import classNames from 'classnames';

type Props = {
  id: string;
  name: string;
  description: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  checked: boolean;
  loading?: boolean;
};

const RadioGroupItem: React.FC<Props> = ({
  id,
  name,
  description,
  onChange,
  checked,
  onClick,
  loading,
}) => {
  const listClassNames = classNames({
    'opacity-50': loading,
  });

  return (
    <li className={listClassNames}>
      <div id={`collection-${id}`} className="area-selector__card">
        <Stack direction="horizontal" space="3" className="area-selector__inner">
          <div className="area-selector__left">
            <label htmlFor={`selector-collection-${id}`} className="area-selector__label">
              <input
                id={`selector-collection-${id}`}
                name="push-notifications"
                type="radio"
                className="area-selector__radio"
                checked={checked}
                onChange={onChange}
                disabled={loading}
              />
              <Stack direction="vertical" space="1" className="ml-2">
                <Typography size="sm" color="gray-900" align="left">
                  {name}
                </Typography>
                <Typography size="xs" color="gray-400">
                  {description}
                </Typography>
              </Stack>
            </label>
          </div>
          <div className="area-selector__right">
            <button
              id={`collection-${id}-btn`}
              type="button"
              className="area-selector__button"
              onClick={onClick}
              disabled={loading}
            >
              <div className="area-selector__right">
                <ChevronRightIcon className="area-selector__icon" aria-hidden="true" />
              </div>
            </button>
          </div>
        </Stack>
      </div>
    </li>
  );
};

export default RadioGroupItem;
