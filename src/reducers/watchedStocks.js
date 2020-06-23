import * as actions from '../actions'; 

export default function reduce(state = {}, action) {
  switch (action.type) {
    case actions.WATCHED_STOCK_ADDED:
        return state;
    case actions.WATCHED_STOCK_REMOVED:
        return state;
    default:
        return state;
  }
}