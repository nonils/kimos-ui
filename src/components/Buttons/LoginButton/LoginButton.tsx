import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={handleLogin} className="hidden lg:flex lg:flex-1 lg:justify-end">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
};

export { LoginButton };
