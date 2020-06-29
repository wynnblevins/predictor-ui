import * as actions from '../actions'; 

export default function reduce(state = [], action) {
  switch (action.type) {
    case actions.WATCHED_STOCK_ADDED:
      return [
        ...state, 
        action.payload
      ]      
    case actions.WATCHED_STOCK_REMOVED:
      return state.filter((val) => { 
        return val.stock['1. symbol'] !== action.payload.stock.stock['1. symbol'] 
      });
    default:
        return state;
    }
}