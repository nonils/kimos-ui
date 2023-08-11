import { createApplication, getApplicationsByProjectId } from '../api';
import applicationReducerConstants from '../constants/reducers/applications';
import { ICreateApplicationDTO } from '../types';

export const getApplicationsByProjectIdAction =
  (projectId: string, token: string) => async (dispatch: any) => {
    dispatch({
      type: applicationReducerConstants.GET_APPLICATIONS_BY_PROJECT_ID_REQUEST,
    });
    try {
      const response = await getApplicationsByProjectId(projectId, token);
      // eslint-disable-next-line no-debugger
      debugger;
      dispatch({
        type: applicationReducerConstants.GET_APPLICATIONS_BY_PROJECT_ID_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: applicationReducerConstants.GET_APPLICATIONS_BY_PROJECT_ID_FAILURE,
        payload: error,
      });
    }
  };

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
