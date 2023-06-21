import React from 'react';
import { ActivityFeed, AppLayout, ProjectList } from '../../components';
import { IActivityItem, IProject } from '../../types';
import { useNavigate } from 'react-router-dom';

const projects: IProject[] = [
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

  const handleRedirectCreateNewProject = () => {
    navigate('/project/new', { replace: true });
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
