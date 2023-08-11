import templateReducerConstants from '../constants/reducers/templates';
import { getAllTemplates } from '../api';
import { GetAllTemplatesParams } from '../types';

export const getAllTemplatesPaginatedAction =
  (params: GetAllTemplatesParams) => async (dispatch: any) => {
    dispatch({
      type: templateReducerConstants.GET_TEMPLATES_REQUEST,
    });
    try {
      const response = await getAllTemplates(params);
      dispatch({
        type: templateReducerConstants.GET_TEMPLATES_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: templateReducerConstants.GET_TEMPLATES_FAILURE,
        payload: error,
      });
    }
  };
