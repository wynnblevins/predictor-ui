import predictionService from '../services/prediction';

export const PREDICTION_FETCH_BEGIN = 'PREDICTION_FETCH_BEGIN';
export const PREDICTION_FETCH_FAILED = 'PREDICTION_FETCH_FAILED';
export const PREDICTION_FETCH_SUCCESS = 'PREDICTION_FETCH_SUCCESS';
export const PREDICTION_BUTTON_CLICKED = 'PREDICTION_BUTTON_CLICKED';

export const predictionFetchBegin = () => ({
  type: PREDICTION_FETCH_BEGIN
});

export const predictionFetchSuccess = prediction => ({
  type: PREDICTION_FETCH_SUCCESS,
  payload: prediction
});

export const predictionFetchError = error => ({
  type: PREDICTION_FETCH_FAILED,
  payload: { error }
});

export const fetchPredictionData = (clickedStock) => {
  return function (dispatch) {
    dispatch(predictionFetchBegin());
    
    predictionService.getOutlook(clickedStock).then(res => { 
      dispatch(predictionFetchSuccess(res.data));
    }).catch((err) => {
      dispatch(predictionFetchError(err));
    });
  }
}