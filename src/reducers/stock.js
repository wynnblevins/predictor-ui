import { STOCK_SEARCH_TEXT_CHANGED, STOCK_FETCH_BEGIN, STOCK_FETCH_FAILURE, STOCK_FETCH_SUCCESS } from '../actions';

export default function reduce(state = [], action) {
  console.log(action);
  switch (action.type) {
    case STOCK_SEARCH_TEXT_CHANGED:
      return state;  
    case STOCK_FETCH_BEGIN: 
      return {
        ...state,
        pending: true
      }
    case STOCK_FETCH_FAILURE:
      return {
        ...state,
        error: action.error,
        pending: false
      }
    case STOCK_FETCH_SUCCESS:
      
      let obj = {
        ...state,
        stocks: action.payload,
        pending: false
      }
      console.log(obj);
      return obj;
    default:
      return state; 
  }
}

export const getStocks = state => state.stocks;