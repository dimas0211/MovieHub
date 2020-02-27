import { SET_FILTRATION_PARAMS, CLEAR_FILTRATION_PARAMS } from '../constants/actionTypes';

export const setFiltrationParamsAction = (year, genre) => ({ type: SET_FILTRATION_PARAMS, year, genre });

export const clearFiltrationParamsAction = () => ({ type: CLEAR_FILTRATION_PARAMS });

export const setFiltrationParams = (year, genre) => (dispatch) => dispatch(setFiltrationParamsAction(year, genre));

export const clearFiltrationParams = () => (dispatch) => dispatch(clearFiltrationParamsAction());
