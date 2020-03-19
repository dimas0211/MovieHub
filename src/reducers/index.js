import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { ApiReducer } from './reducerAPIcall';
import { setFiltrationParamsReducer } from './reducerSetFiltrationParams';
import { setSearchModeReducer } from './reducerSearch';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ApiReducer,
  setFiltrationParamsReducer,
  setSearchModeReducer
});

export default createRootReducer;
