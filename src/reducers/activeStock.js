import * as actions from '../actions'; 

export default function reduce(state = {}, action) {
  switch (action.type) {
    case actions.ACTIVE_STOCK_CHANGED:
      console.log('inside active stock changed case.'); 
      return state;
    default:
      console.log('Inside active stock default case.');
      return state; 
  }
}