import codeVersionManagerProviderReducerConstants from '../constants/reducers/codeVersionManagerProviders';
import { getAllCodeVersionProviders } from '../api/codeVersionManagerProviders';

export const getCodeVersionManagerProvidersAction = (token: string) => async (dispatch: any) => {
  dispatch({
    type: codeVersionManagerProviderReducerConstants.GET_CODE_VERSION_MANAGER_PROVIDERS_REQUEST,
  });
  try {
    const response = await getAllCodeVersionProviders(token);
    dispatch({
      type: codeVersionManagerProviderReducerConstants.GET_CODE_VERSION_MANAGER_PROVIDERS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: codeVersionManagerProviderReducerConstants.GET_CODE_VERSION_MANAGER_PROVIDERS_FAILURE,
      payload: error,
    });
  }
};
