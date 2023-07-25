import React, { useEffect } from 'react';
import { ActivityFeed, AppLayout, ProjectList } from '../../components';
import { IActivityItem } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useToast } from '../../hooks';
import { getProjectsAction } from '../../actions/projectActions';

const activityItems: IActivityItem[] = [
  { id: '1', project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
];
const DashboardPage: React.FC<any> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    projectLoading,
    projectsPageSize,
    projectsPage,
    projectsTotalElements,
    projectError,
    projects,
  } = useSelector((appState: any) => ({
    projectLoading: appState.projects.loading,
    projectsPage: appState.projects.currentPage,
    projectsPageSize: appState.projects.pageSize,
    projectsTotalElements: appState.projects.totalElements,
    projectError: appState.projects.error,
    projects: appState.projects.projects,
  }));
  const appDispatch = useAppDispatch();
  const { danger } = useToast();
  const navigate = useNavigate();
  const { getIdTokenClaims } = useAuth0();
  const [accessToken, setAccessToken] = React.useState<string | undefined>();

  useEffect(() => {
    if (accessToken == null) {
      getIdTokenClaims().then((potentialAccessToken) => {
        const rawAccessToken = potentialAccessToken?.__raw;
        setAccessToken(rawAccessToken);
        if (rawAccessToken != null) {
          appDispatch(getProjectsAction(rawAccessToken));
        }
      });
    }
  }, [accessToken, appDispatch, getIdTokenClaims]);

  const handleProjectChangePage = (page: number) => {
    if (accessToken != null) {
      appDispatch(getProjectsAction(accessToken, page));
    }
  };

  useEffect(() => {
    if (projectError) {
      danger('The projects could not be loaded');
    }
  }, [danger, projectError]);

  const handleRedirectCreateNewProject = () => {
    navigate('/projects/new', { replace: true });
  };
  return (
    <AppLayout title="Home" showSearchInput={false}>
      <div className="mx-auto w-full max-w-9xl flex-grow lg:flex xl:px-8">
        {/* Left sidebar & main wrapper */}
        <div className="min-w-0 flex-1 bg-white xl:flex">
          <ProjectList
            projects={projects}
            baseUrlToRedirectElement={'/projects/'}
            handleChangePage={handleProjectChangePage}
            pageSize={projectsPageSize}
            page={projectsPage}
            totalElements={projectsTotalElements}
            loading={projectLoading}
            createNewProjectAction={handleRedirectCreateNewProject}
          />
        </div>
        {/* Activity feed */}
        <div className="bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
          <ActivityFeed activityItems={activityItems} />
        </div>
      </div>
    </AppLayout>
  );
};

export { DashboardPage };
