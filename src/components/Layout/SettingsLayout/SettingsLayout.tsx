import React from 'react';
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';
import { AppLayout } from '../AppLayout/AppLayout';

const subNavigation = [
  { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: true },
  { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
type SettingsLayoutProps = {
  children: React.ReactElement | React.ReactElement[];
};
const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <AppLayout title={'Settings'} showSearchInput={false}>
      <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
            <nav className="space-y-1">
              {subNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-50 text-orange-600 hover:bg-white'
                      : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-500',
                      '-ml-1 mr-3 h-6 w-6 flex-shrink-0',
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </nav>
          </aside>
          <>{children}</>
        </div>
      </main>
    </AppLayout>
  );
};

export { SettingsLayout };
