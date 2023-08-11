import authenticationReducerConstant from '../constants/reducers/authentication';
import axios from 'axios';
import { IAccount } from '../types';
import { BASE_API_URL } from '../config/constants';
export const setAccessTokenAction = (token: string | undefined) => async (dispatch: any) => {
  dispatch({
    type: authenticationReducerConstant.SET_ACCESS_TOKEN,
    payload: token,
  });
};

export const getUserAction = (accessToken: string) => async (dispatch: any) => {
  dispatch({
    type: authenticationReducerConstant.GET_USER_REQUEST,
  });
  try {
    const { data } = await axios.get<IAccount>(`${BASE_API_URL}/accounts/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({
      type: authenticationReducerConstant.GET_USER_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: authenticationReducerConstant.GET_USER_FAILURE,
      payload: e,
    });
  }
};
