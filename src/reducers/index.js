import stockReducer from './stock';
import activeStockReducer from './activeStock';
import watchedStocksReducer from './watchedStocks';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stocks: stockReducer,
  activeStock: activeStockReducer,
  watchedStocks: watchedStocksReducer
});

export default rootReducer;