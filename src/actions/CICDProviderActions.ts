import CICDProviderReducerConstants from '../constants/reducers/CICDProviders';
import { getAllCICDProviders } from '../api';

export const getCICDProvidersAction = (token: string) => async (dispatch: any) => {
  dispatch({
    type: CICDProviderReducerConstants.GET_CICD_PROVIDERS_REQUEST,
  });
  try {
    const response = await getAllCICDProviders(token);
    dispatch({
      type: CICDProviderReducerConstants.GET_CICD_PROVIDERS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: CICDProviderReducerConstants.GET_CICD_PROVIDERS_FAILURE,
      payload: error,
    });
  }
};
