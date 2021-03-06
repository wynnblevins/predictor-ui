const apiKey = '8VG6XCZKT2JJ75FE'

const alphaVantageService = {
  timeSeriesURLForSymbol: (symbol, interval = '5min') => {
    if (!symbol || typeof symbol != 'string') {
      throw 'Invalid value for symbol parameter provided to timeSeriesURLForSymbol in alphaVantage config service';  
    }
  
    if (typeof interval != 'string') {
      throw 'Invalid value for interval parameter provided to timeSeriesURLForSymbol in alphaVantage config service';
    }

    return `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;
  },

  stockDetailsURLForSymbol: (symbol) => {
    if (!symbol || typeof symbol != 'string') {
      throw 'Invalid value for symbol parameter provided to stockDetailsURLForSymbol in alphaVantage config service';  
    }
    
    return `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
  }
}

export default alphaVantageService;