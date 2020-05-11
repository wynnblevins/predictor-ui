import stockReducer from './stock';
import activeStockReducer from './activeStock';
import predictionReducer from './prediction';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stocks: stockReducer,
  activeStock: activeStockReducer,
  prediction: predictionReducer
});

export default rootReducer;