import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // 여러개의 middle ware 를 쓰기위한방식
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
