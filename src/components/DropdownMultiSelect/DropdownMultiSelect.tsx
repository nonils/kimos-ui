import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { IMultiSelectValues } from 'types';
import './styles.scss';

type Props = {
  id: string;
  label: string;
  values: IMultiSelectValues[];
  onSelect: (value: IMultiSelectValues) => void;
};

const DropdownMultiSelect: React.FC<Props> = ({ id, label, values, onSelect }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
    const { checked, name } = event.target;

    onSelect({
      value: name,
      checked: !checked,
      label,
    });
  };

  return (
    <Menu as="div" className="multi-select" id={id}>
      <Menu.Button className="multi-select__button" id={`${id}-button`}>
        {label}
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="multi-select__items" id="multi-select-items">
          {values.map((item, index: number) => {
            return (
              <div key={index} className="flex items-center px-4 py-3">
                <input
                  id={item.value}
                  name={item.value}
                  type="checkbox"
                  checked={item.checked}
                  onChange={(event) => handleChange(event, item.label)}
                />
                <label
                  htmlFor={item.value}
                  className="block text-sm text-gray-900 ml-2 cursor-pointer"
                >
                  {item.label}
                </label>
              </div>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export { DropdownMultiSelect };
