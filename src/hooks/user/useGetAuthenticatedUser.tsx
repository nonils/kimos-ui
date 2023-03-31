import { IAccount } from '../../types';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { BASE_API_URL } from '../../config/constants';

function useGetAuthenticatedUser() {
  console.info('useGetAuthenticatedUser');
  const { getIdTokenClaims } = useAuth0();
  const [user, setUser] = useState<IAccount>();
  useEffect(() => {
    const getUser = async () => {
      const token = await getIdTokenClaims();
      // @ts-ignore
      const accessToken = token?.__raw;
      axios
        .get<IAccount>(`${BASE_API_URL}/accounts/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(JSON.stringify(res.data));
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return user;
}

export { useGetAuthenticatedUser };
