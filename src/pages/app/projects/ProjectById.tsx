import React, { useEffect } from 'react';
import { getProjectById } from '../../../api';
import { useAuth0 } from '@auth0/auth0-react';
import { useToast } from '../../../hooks';
import { IProjectDetail } from '../../../types';
import { useParams } from 'react-router-dom';
import { AppLayout, ProjectInformationComponent } from '../../../components';
const ProjectById: React.FC<any> = () => {
  const [accessToken, setAccessToken] = React.useState<string | undefined>();
  const [project, setProject] = React.useState<IProjectDetail>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { danger, success } = useToast();
  const { getIdTokenClaims } = useAuth0();
  const { projectId } = useParams();
  useEffect(() => {
    const getToken = async () => {
      return getIdTokenClaims();
    };
    getToken().then((potentialAccessToken) => {
      setAccessToken(potentialAccessToken?.__raw);
    });
  }, [getIdTokenClaims]);

  useEffect(() => {
    if (projectId != null && accessToken != null) {
      getProjectById(projectId, accessToken).then((data) => setProject(data));
    }
  }, [accessToken, projectId]);

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
