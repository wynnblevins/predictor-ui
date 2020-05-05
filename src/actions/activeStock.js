import axios from 'axios';
import { timeSeriesURLForSymbol } from '../services/alphaVantage';
import { store } from '../App';

export const ACTIVE_STOCK_FETCH_BEGIN = 'ACTIVE_STOCK_FETCH_BEGIN';
export const ACTIVE_STOCK_FETCH_FAILED = 'ACTIVE_STOCK_FETCH_FAILED';
export const ACTIVE_STOCK_FETCH_SUCCESS = 'ACTIVE_STOCK_FETCH_SUCCESS';

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

export const symbolClicked = (symbol) => fetchSymbolDetailsData(symbol)


export const fetchSymbolDetailsData = (symbol) => {
  return function (dispatch) {
    console.log('inside active stock fetch');
    dispatch(activeStockFetchBegin());
    console.log(timeSeriesURLForSymbol(symbol))
    axios.get(timeSeriesURLForSymbol(symbol))
      .then((response) => {
        activeStockFetchSuccess(response.data)
      })
      .catch((err) => {
        activeStockFetchError(err)
      })
  } 
}
