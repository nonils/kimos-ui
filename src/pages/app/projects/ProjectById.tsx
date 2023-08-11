import React, { useEffect } from 'react';
import { useAppDispatch, useToast } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { AppLayout, ProjectInformationComponent } from '../../../components';
import { useSelector } from 'react-redux';
import { getApplicationsByProjectIdAction, getProjectByIdAction } from '../../../actions';
import ApplicationList from '../../../components/Application/ApplicationList';
import { useNavigate } from 'react-router-dom';

const ProjectById: React.FC<any> = () => {
  const appDispatch = useAppDispatch();
  const { token, project, projectError, applications } = useSelector((appState: any) => ({
    token: appState.authentication.token,
    project: appState.project.project,
    applications: appState.application.applications,
    projectError: appState.project.error,
  }));
  const { danger } = useToast();
  const { projectId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (projectId != null && token != null) {
      appDispatch(getProjectByIdAction(projectId, token));
      appDispatch(getApplicationsByProjectIdAction(projectId, token));
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
            <ApplicationList
              applications={applications}
              handleCreateApplicationsAction={() => {
                navigate(`/projects/${projectId}/applications/new`);
              }}
            />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export { ProjectById };
