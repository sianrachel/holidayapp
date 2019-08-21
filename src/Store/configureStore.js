import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionCreators from './rootActions';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
  });
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
