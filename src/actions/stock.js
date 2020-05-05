import axios from 'axios';

import { alphaVantageApiKey } from '../config/alphaVantageConfig'

export const STOCK_FETCH_BEGIN         = 'STOCK_FETCH_BEGIN';
export const STOCK_FETCH_SUCCESS       = 'STOCK_FETCH_SUCCESS';
export const STOCK_FETCH_FAILURE       = 'STOCK_FETCH_FAILURE';
export const STOCK_SEARCH_TEXT_CHANGED = 'STOCK_SEARCH_TEXT_CHANGED';

export const fetchStocksBegin = () => ({
  type: STOCK_FETCH_BEGIN
});

export const fetchStocksSuccess = stocks => ({
  type: STOCK_FETCH_SUCCESS,
  payload: { stocks }
});

export const fetchStocksFailure = error => ({
  type: STOCK_FETCH_FAILURE,
  payload: { error }
});

export const stockSearchTextChanged = updatedText => (
  fetchSymbolData(updatedText) 
);

export function fetchSymbolData(keyword) {
  let endpoint = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${alphaVantageApiKey}`
  
  return function(dispatch) {
    dispatch(fetchStocksBegin())
    axios.get(endpoint)
      .then(response => {
        dispatch(fetchStocksSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchStocksFailure(error));
      });
  }
}