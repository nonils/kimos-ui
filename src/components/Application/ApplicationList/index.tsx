import React from 'react';
import { ILightApplication } from '../../../types';
import { Button } from '../../Button/Button';

type ApplicationListProps = {
  applications: ILightApplication[];
  handleCreateApplicationsAction: () => void;
};

const ApplicationList: React.FC<ApplicationListProps> = ({
  applications,
  handleCreateApplicationsAction,
}) => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Applications</h2>
        <Button
          id={'create-application-button'}
          onClick={handleCreateApplicationsAction}
          className="ml-auto px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          Create Application
        </Button>
      </div>
      <div className="flex-grow pt-11">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Name
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Title
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Role
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {application.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {application.status}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {application.isPrivateRepo ? 'Private' : 'Public'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {application.repositoryName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {application.createdAt}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a
                    href={`/applications/${application.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit<span className="sr-only"></span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
