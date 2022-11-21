import { createStore, applyMiddleware, compose } from 'redux';
import countriesReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  countriesReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
