import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { moviesReducer } from './reducerAPIcall';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  moviesReducer
});

export default createRootReducer;
