import templateImplementationReducerConstants from '../constants/reducers/templateImplementations';
import templateImplementations from '../constants/reducers/templateImplementations';
import { getAllTemplateImplementations } from '../api/templateImplementations';

export const getTemplateImplementationsByTemplateIdAction =
  (templateId: string, token: string) => async (dispatch: any) => {
    dispatch({
      type: templateImplementationReducerConstants.GET_TEMPLATE_IMPLEMENTATIONS_REQUEST,
    });
    try {
      const response = await getAllTemplateImplementations(templateId, token);
      dispatch({
        type: templateImplementations.GET_TEMPLATE_IMPLEMENTATIONS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: templateImplementations.GET_TEMPLATE_IMPLEMENTATIONS_FAILURE,
        payload: error,
      });
    }
  };
