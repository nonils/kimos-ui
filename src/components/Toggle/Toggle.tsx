import React from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  label: string;
  secondLevelLabel?: string;
  value?: boolean;
  name: string;
  onChange?: (event: any) => void;
  id: string;
  disabled?: boolean;
};

const Toggle: React.FC<Props> = ({ label, secondLevelLabel, value = false, onChange, name }) => {
  const handleOnChange = (isChecked: boolean) => {
    value = isChecked;
    if (onChange) {
      onChange({ target: { value: isChecked, name } });
    }
  };

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={value}
        onChange={handleOnChange}
        className={classNames(
          value ? 'bg-blue-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            value ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className="text-sm text-gray-500">{secondLevelLabel}</span>
      </Switch.Label>
    </Switch.Group>
  );
};

export { Toggle };
