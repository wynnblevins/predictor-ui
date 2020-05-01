import stockReducer from './stock';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stocks: stockReducer
});

export default rootReducer;