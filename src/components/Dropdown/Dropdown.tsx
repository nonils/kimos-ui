import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import DropdownItem from './DropdownItem';
import './styles.scss';

type Props = {
  title: string | React.ReactNode;
  dropIcon?: boolean;
  children: React.ReactNode;
  id: string;
};

const DropdownComponent: React.FC<Props> = ({ id, title, dropIcon = true, children }) => {
  return (
    <Menu as="div" className="dropdown">
      <div>
        <Menu.Button className="dropdown__button" id={id}>
          {title}
          {dropIcon && (
            <ChevronDownIcon className="dropdown__icon" aria-hidden="true" data-testid="dropicon" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="dropdown__items">
          <div className="dropdown__inner">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
});

export { Dropdown };
