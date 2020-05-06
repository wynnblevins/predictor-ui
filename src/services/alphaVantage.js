export const alphaVantageService = {
  timeSeriesURLForSymbol: (symbol, interval = '5min') => {
    if (!symbol || typeof symbol != 'string') {
      throw 'Invalid value for symbol parameter provided to timeSeriesURLForSymbol in alphaVantage config service';  
    }
  
    if (typeof interval != 'string') {
      throw 'Invalid value for interval parameter provided to timeSeriesURLForSymbol in alphaVantage config service';
    }

    return `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`;
  }
}