import { Menu } from '@headlessui/react';
import { BarsArrowUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { ILightProject } from '../../../types';
import { CreateActionButton } from '../../CreateActionButton/CreateActionButton';
import { ProjectDashboardCard } from '../ProjectDashboardCard';
import { Pagination } from '../../Pagination/Pagination';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

type ProjectListType = {
  projects: ILightProject[];
  loading: boolean;
  pageSize: number;
  page: number;
  handleChangePage: (page: number) => void;
  totalElements: number;
  createNewProjectAction: () => void;
  baseUrlToRedirectElement?: string;
};

const ProjectList: React.FC<ProjectListType> = ({
  pageSize,
  page,
  totalElements,
  handleChangePage,
  loading,
  projects,
  createNewProjectAction,
  baseUrlToRedirectElement = '/projects/',
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="bg-white lg:min-w-0 lg:flex-1">
      <div className="border-b border-t border-gray-200 pb-4 pl-4 pr-6 pt-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
        <div className="flex items-center">
          <h1 className="flex-1 text-lg font-mediumø">Projects</h1>
          <CreateActionButton text="Create new project" action={createNewProjectAction} />
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Sort
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      Name
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      Date modified
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      Date created
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
        {projects.map((project) => (
          <ProjectDashboardCard
            key={project.id}
            baseUrlToRedirect={baseUrlToRedirectElement}
            project={project}
          />
        ))}
      </ul>
      <Pagination
        changePageHandler={handleChangePage}
        page={page}
        size={pageSize}
        total={totalElements}
      />
    </div>
  );
};

export { ProjectList };
