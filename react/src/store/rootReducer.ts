import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counterReducer from '../app/counter/reducer';
import starsReducer from '../app/stars/reducer';
import IStore from './index';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
