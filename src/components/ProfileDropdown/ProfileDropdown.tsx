import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { LoginButton } from '../Buttons';
import { IAccount } from '../../types';

type ProfileDropdownProps = {
  isAuthenticated: boolean;
  user?: IAccount;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const userNavigation = [
  { name: 'Your Profile', href: '/settings/profile' },
  { name: 'Settings', href: '/settings/profile' },
  { name: 'Sign out', href: '/sign-out' },
];

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isAuthenticated, user }) => {
  if (isAuthenticated) {
    return (
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src={user?.imageUrl || '/user.png'}
              referrerPolicy="no-referrer"
              alt=""
            />
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    );
  } else {
    return <LoginButton />;
  }
};

export { ProfileDropdown };
