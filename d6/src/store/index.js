import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducer';
import mySaga from '../saga/';

const sagaMiddleware=createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function reduxStore(initialState) {
  const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(thunk,sagaMiddleware)
  ));
  sagaMiddleware.run(mySaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => store.replaceReducer(reducers));
  }

  return store;
}

export default reduxStore;
