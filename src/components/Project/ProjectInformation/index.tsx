import React from 'react';
import { ILightProject } from '../../../types';
import { ProjectInformationField } from './ProjectInformationField';

type ProjectInformationProps = {
  project: ILightProject | undefined;
};
const ProjectInformationComponent: React.FC<ProjectInformationProps> = ({ project }) => {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Project Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Project details and integrations status.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <ProjectInformationField label="Project name" value={project ? project.name : '-'} />
          <ProjectInformationField
            label="Project description"
            value={project ? project.description : '-'}
          />
        </dl>
      </div>
    </div>
  );
};

export { ProjectInformationComponent };
