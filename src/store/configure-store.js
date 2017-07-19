import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
export default createStore(RootReducer, middleware);