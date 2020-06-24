import * as actions from '../actions'; 

export default function reduce(state = { watchedStocks: [] }, action) {
  switch (action.type) {
    case actions.WATCHED_STOCK_ADDED:
        
    return {
      ...state,
      watchedStocks: [ 
        ...state.watchedStocks, 
        action.payload 
      ]
    }
    default:
        return state;
    }
}