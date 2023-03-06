import React from 'react';
import { AppLayout, LoginButton } from '../components';

const HomePage: React.FC = () => (
  <AppLayout title={'Hola'}>
    <>
      <LoginButton />
    </>
  </AppLayout>
);

export { HomePage };
