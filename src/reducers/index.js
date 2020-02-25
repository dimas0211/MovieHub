import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { ApiReducer } from './reducerAPIcall';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ApiReducer
});

export default createRootReducer;
