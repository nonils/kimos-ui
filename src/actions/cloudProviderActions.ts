import cloudProviderReducerConstants from '../constants/reducers/cloudProviders';
import { getAllCloudProviders } from '../api/cloudProviders';

export const getCloudProvidersAction = (token: string) => async (dispatch: any) => {
  dispatch({
    type: cloudProviderReducerConstants.GET_CLOUD_PROVIDERS_REQUEST,
  });
  try {
    const response = await getAllCloudProviders(token);
    dispatch({
      type: cloudProviderReducerConstants.GET_CLOUD_PROVIDERS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: cloudProviderReducerConstants.GET_CLOUD_PROVIDERS_FAILURE,
      payload: error,
    });
  }
};
