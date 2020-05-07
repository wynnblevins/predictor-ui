import stockReducer from './stock';
import activeStockReducer from './activeStock';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stocks: stockReducer,
  activeStock: activeStockReducer
});

export default rootReducer;