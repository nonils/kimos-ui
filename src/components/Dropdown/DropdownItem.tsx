import React from 'react';
import { Menu } from '@headlessui/react';

type Props = {
  children: React.ReactNode;
};

const DropdownItem: React.FC<Props> = ({ children }) => {
  return (
    <Menu.Item>
      <div className="dropdown__item">{children}</div>
    </Menu.Item>
  );
};

export default DropdownItem;
