import React, { useEffect } from 'react';
import { useAppDispatch, useToast } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { AppLayout, ProjectInformationComponent } from '../../../components';
import { useSelector } from 'react-redux';
import { getProjectByIdAction } from '../../../actions';

const ProjectById: React.FC<any> = () => {
  const appDispatch = useAppDispatch();
  const { token, project, projectError } = useSelector((appState: any) => ({
    token: appState.authentication.token,
    project: appState.projects.project,
    projectError: appState.projects.error,
  }));
  const { danger } = useToast();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId != null && token != null) {
      appDispatch(getProjectByIdAction(projectId, token));
    }
  }, [token, projectId, appDispatch]);

  useEffect(() => {
    if (projectError != null) {
      danger('Error at the moment to get the project');
    }
  }, [projectError, danger]);

  return (
    <>
      <AppLayout showSearchInput={false} title={''}>
        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
          <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
            <ProjectInformationComponent project={project} />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export { ProjectById };
