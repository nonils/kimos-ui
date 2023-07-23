import React, { useEffect } from 'react';
import { ActivityFeed, AppLayout, ProjectList } from '../../components';
import { IActivityItem, ILightProject } from '../../types';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../../api';
import { useAuth0 } from '@auth0/auth0-react';

const projects: ILightProject[] = [
  {
    id: '1',
    name: 'Workcation',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'debbielewis/workcation',
    tech: 'Laravel',
    lastDeploy: '3h ago',
    location: 'United states',
    starred: true,
    active: true,
  },
  {
    id: '2',
    name: 'kimos-ui',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'debbielewis/workcation',
    tech: 'Laravel',
    lastDeploy: '3h ago',
    location: 'United states',
    starred: true,
    active: true,
  },
];
const activityItems: IActivityItem[] = [
  { id: '1', project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
];
const DashboardPage: React.FC<any> = () => {
  const navigate = useNavigate();
  const { getIdTokenClaims } = useAuth0();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = React.useState<string | undefined>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = React.useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projectItems, setProjectItems] = React.useState<any[]>([]);
  const [accessToken, setAccessToken] = React.useState<string | undefined>();

  useEffect(() => {
    const getToken = async () => {
      return getIdTokenClaims();
    };
    getToken().then((potentialAccessToken) => {
      setAccessToken(potentialAccessToken?.__raw);
    });
  }, [getIdTokenClaims]);

  useEffect(() => {
    if (accessToken) {
      getProjects(accessToken).then((data) => setProjectItems(data));
    }
  }, [accessToken]);

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
