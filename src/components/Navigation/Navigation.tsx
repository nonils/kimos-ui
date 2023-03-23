import React from 'react';
import { HomeIcon } from '@heroicons/react/20/solid';

type NavigationProps = {
  showNavigation: boolean;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const navigationOptions = {
  ADMIN: [{ name: 'Dashboard', href: '/dashboard', icon: HomeIcon }],
};
const Navigation: React.FC<NavigationProps> = ({ showNavigation }) => {
  const renderNavigation = () => {
    const opts = navigationOptions.ADMIN;

    return opts.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={classNames(
          location.pathname.includes(item.href)
            ? 'bg-gray-500 text-gray-200'
            : 'text-gray-100 hover:bg-gray-600',
          'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
        )}
      >
        <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300" aria-hidden="true" />
        {item.name}
      </a>
    ));
  };
  if (!showNavigation) {
    return <></>;
  } else {
    return (
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-gray-800 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-8 w-auto" src="/header-logo.png" alt="Kimos" />
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">{renderNavigation()}</nav>
          </div>
        </div>
      </div>
    );
  }
};

export { Navigation };
