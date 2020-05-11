import * as actions from '../actions/prediction';

export default function reduce(state = {}, action) {
  switch (action.type) {
    case actions.PREDICTION_FETCH_BEGIN:
      return {
        ...state,
        prediction: action.payload,
        pending: true
      }
    case actions.PREDICTION_FETCH_FAILED:
      return {
        ...state,
        pending: false
      }
    case actions.PREDICTION_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        prediction: action.payload
      }
    default:
      return state; 
  }
}