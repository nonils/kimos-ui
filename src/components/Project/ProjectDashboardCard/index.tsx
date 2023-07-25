import { ILightProject } from '../../../types';
import React from 'react';

type ProjectDashboardCardProps = {
  project: ILightProject;
  key: string;
  baseUrlToRedirect: string;
};

const ProjectDashboardCard: React.FC<ProjectDashboardCardProps> = ({
  project,
  key,
  baseUrlToRedirect,
}) => {
  return (
    <li key={key}>
      <div className="flex flex-col justify-between p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
        <div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {project.type}
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href={`${baseUrlToRedirect}${project.id}`}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {project.name}
          </a>{' '}
          {/* You can replace # with a project link if available */}
          <p className="mt-2 text-gray-500">{project.description}</p>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          Created by {project.createdByUser} on {new Date(project.createdAt).toLocaleString()}
        </div>
      </div>
    </li>
  );
};

export { ProjectDashboardCard };
