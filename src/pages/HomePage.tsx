import React from 'react';
import { LoginButton } from '../components';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const authenticated = useAuth0().isAuthenticated;
  const navigate = useNavigate();
  if (authenticated) {
    navigate('/dashboard', { replace: true });
    return <></>;
  } else {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <LoginButton />
          </div>
        </div>
      </div>
    );
  }
};
export { HomePage };
