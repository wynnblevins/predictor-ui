import axios from 'axios';

import alphaVantageService from '../services';

export const ACTIVE_STOCK_FETCH_BEGIN = 'ACTIVE_STOCK_FETCH_BEGIN';
export const ACTIVE_STOCK_FETCH_FAILED = 'ACTIVE_STOCK_FETCH_FAILED';
export const ACTIVE_STOCK_FETCH_SUCCESS = 'ACTIVE_STOCK_FETCH_SUCCESS';
export const ACTIVE_STOCK_SELECTED = 'ACTIVE_STOCK_SELECTED';

export const activeStockSelected = (activeStock) => ({
  type: ACTIVE_STOCK_SELECTED,
  payload: { activeStock }
})

export const activeStockFetchBegin = () => ({
  type: ACTIVE_STOCK_FETCH_BEGIN
});

export const activeStockFetchSuccess = activeStock => ({
  type: ACTIVE_STOCK_FETCH_SUCCESS,
  payload: { activeStock }
});

export const activeStockFetchError = error => ({
  type: ACTIVE_STOCK_FETCH_FAILED,
  payload: { error }
});

export const fetchSymbolDetailsData = (symbol) => {
  return function (dispatch) {
    dispatch(activeStockFetchBegin());
    
    axios.get(alphaVantageService.timeSeriesURLForSymbol(symbol))
      .then((response) => {
        dispatch(activeStockFetchSuccess(response.data))
      })
      .catch((err) => {
        dispatch(activeStockFetchError(err))
      })
  } 
}