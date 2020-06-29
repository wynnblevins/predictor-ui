import * as actions from '../actions'; 

export default function reduce(state = {}, action) {
  switch (action.type) {
    case actions.ACTIVE_STOCK_SELECTED:
      return {
        ...state,
        ...action.payload
      }
    case actions.ACTIVE_STOCK_FETCH_BEGIN:
      return {
        ...state,
        pending: true,
        ...action.payload,
      }
    case actions.ACTIVE_STOCK_FETCH_FAILED:
      return {
        ...state,
        pending: false
      }
    case actions.ACTIVE_STOCK_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload.activeStock
      }
    default:
      return state; 
  }
}