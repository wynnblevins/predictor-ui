export const alphaVantageApiKey = '';

export const timeSeriesURLForSymbol = (symbol) => {
  if (!symbol || typeof symbol != 'string') {
    throw 'Invalid value for symbol parameter provided to timeSeriesURLForSymbol method in alphaVantage.js';  
  }

  return `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${alphaVantageApiKey}`;
}