import React, { Fragment, useState } from 'react';
import './styles.scss';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { CloseButtonProps, ToastContainer } from 'react-toastify';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileDropdown } from '../../ProfileDropdown/ProfileDropdown';
import { Navigation } from '../../Navigation/Navigation';
import { useGetAuthenticatedUser } from '../../../hooks/user/useGetAuthenticatedUser';

const CloseButton = ({ closeToast }: Partial<CloseButtonProps>) => {
  return (
    <button className="Toastify__close-button" onClick={closeToast}>
      <XCircleIcon className="w-5 h-5" aria-hidden="true" />
    </button>
  );
};
type AppLayoutProps = {
  title: string;
  searchPlaceholder?: string;
  showSearchInput: boolean;
  showNavigation?: boolean;
  setSearchValue?: (value: string) => void;
  searchValue?: string;
  children: React.ReactElement | React.ReactElement[];
};

const AppLayout: React.FC<AppLayoutProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title,
  searchPlaceholder,
  children,
  showSearchInput,
  showNavigation = true,
  setSearchValue,
  searchValue,
}: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const authenticated = useAuth0().isAuthenticated;
  const user = useGetAuthenticatedUser();
  return (
    <>
      <div className="h-full">
        <ToastContainer position="top-right" closeButton={CloseButton} />
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-500">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img className="h-8 w-auto" src="/header-logo.png" alt="Chepido" />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1"></nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        <Navigation showNavigation={showNavigation} />
        <div className="z-20 md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-300 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            {showSearchInput && (
              <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                <div className="flex flex-1">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                      onClick={() => console.log('search')}
                    >
                      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      value={searchValue}
                      onChange={(e) => (setSearchValue ? setSearchValue(e.target.value) : null)}
                      name="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder={searchPlaceholder ? searchPlaceholder : 'Search'}
                      type="search"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex"></div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <ProfileDropdown isAuthenticated={authenticated} user={user} />
              </div>
            </div>
          </div>
          <main className="app" id="app-main">
            <>{children}</>
          </main>
        </div>
      </div>
    </>
  );
};

export { AppLayout };
