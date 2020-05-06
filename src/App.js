import React from 'react';
import logger from 'redux-logger';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import './App.css';
import StockListContainer from './StocksListContainer/StockListContainer';
import { Provider } from 'react-redux';

import { rootReducer } from './reducers'

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

function App() {
  return (
    <Provider store={store}>
      <StockListContainer></StockListContainer>
    </Provider>
  );
}

export default App;
