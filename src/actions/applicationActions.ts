import { createApplication } from '../api';
import applicationReducerConstants from '../constants/reducers/applications';
import { ICreateApplicationDTO } from '../types';

export const createApplicationAction =
  (applicationModel: ICreateApplicationDTO, token: string) => async (dispatch: any) => {
    dispatch({
      type: applicationReducerConstants.CREATE_APPLICATION_REQUEST,
    });
    try {
      const response = await createApplication(applicationModel, token);
      dispatch({
        type: applicationReducerConstants.CREATE_APPLICATION_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: applicationReducerConstants.CREATE_APPLICATION_FAILURE,
        payload: error,
      });
    }
  };
