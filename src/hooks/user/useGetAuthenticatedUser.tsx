import { IAccount } from '../../types';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { BASE_API_URL } from '../../config/constants';

function useGetAuthenticatedUser() {
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
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getUser();
  }, [getIdTokenClaims]);
  return user;
}

export { useGetAuthenticatedUser };
