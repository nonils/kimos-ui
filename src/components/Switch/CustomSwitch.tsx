import React from 'react';
import { Switch } from '@headlessui/react';
type CustomSwitchProps = {
  name: string;
  id: string;
  label?: string;
  shortDescription?: string;
  value: boolean;
  loading?: boolean;
  onChange: (event: any) => void;
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  name,
  id,
  label,
  loading = false,
  shortDescription,
  value,
  onChange,
}: CustomSwitchProps) => {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        id={id}
        name={name}
        disabled={loading}
        checked={value}
        onChange={(value: boolean) => onChange({ target: { name, value } })}
        className={classNames(
          value ? 'bg-red-300' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2',
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            value ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className="text-sm text-gray-500">&nbsp;{shortDescription}</span>
      </Switch.Label>
    </Switch.Group>
  );
};

export { CustomSwitch };
