import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/index';
import rootSaga from '../sagas/index';

// saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// const enhancer =
//   process.env.NODE_ENV === 'production'
//     ? applyMiddleware(sagaMiddleware)
//     : composeWithDevTools(applyMiddleware(sagaMiddleware));

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
