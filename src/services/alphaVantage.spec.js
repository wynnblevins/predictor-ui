import alphaVantageService from './alphaVantage'

describe('alphavantage config service', () => {
  beforeEach(() => {});

  describe('timeSeriesURLForSymbol happy path', () => {
    it('returns expected URL when given parameters', () => {
      const tickerSymbol = 'APPL';
      const intervalParam = '5min';
      const apiKey = process.env.ALPHAVANTAGE_API_KEY;
      const expectedURL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${tickerSymbol}&interval=${intervalParam}&apikey=${apiKey}`
      
      const resultURL = alphaVantageService.timeSeriesURLForSymbol(tickerSymbol, intervalParam)

      expect(resultURL).toEqual(expectedURL);
    });

    describe('given invalid symbol parameter', () => {
      const expectedErrText = 'Invalid value for symbol parameter provided to timeSeriesURLForSymbol in alphaVantage config service';
      
      it('throws expected error if symbol parameter is an empty string', () => {
        const tickerSymbolParam = '';
        expect(() => { alphaVantageService.timeSeriesURLForSymbol(tickerSymbolParam) }).toThrow(expectedErrText);
      });
  
      it('throws expected error if symbol parameter is a number', () => {
        const tickerSymbolParam = 2;
        expect(() => { alphaVantageService.timeSeriesURLForSymbol(tickerSymbolParam) }).toThrow(expectedErrText);
      });
  
      it('throws expected error if symbol paramer is an object', () => {
        const tickerSymbolParam = { val: 'say what?!' };
        expect(() => { alphaVantageService.timeSeriesURLForSymbol(tickerSymbolParam) }).toThrow(expectedErrText);
      });
    });
    
    describe('given invalid interval parameter', () => {
      const expectedErrText = 'Invalid value for interval parameter provided to timeSeriesURLForSymbol in alphaVantage config service';
      const tickerSymbol = 'AAPL';
  
      it('throws expected error if interval parameter is object', () => {
        const invalidIntervalParam = { huh: "Whaaa?" };
        expect(() => { alphaVantageService.timeSeriesURLForSymbol(tickerSymbol, invalidIntervalParam) }).toThrow(expectedErrText);
      });
  
      it('throws expected error if interval parameter is number', () => {
        const invalidIntervalParam = 2;
        expect(() => { alphaVantageService.timeSeriesURLForSymbol(tickerSymbol, invalidIntervalParam) }).toThrow(expectedErrText);
      });
    });  
  });
    
  
  describe('stockDetailsURLForSymbol', () => {
    it('returns expected URL when given valid parameters', () => {
      const apiKey = process.env.ALPHAVANTAGE_API_KEY;
      const tickerSymbol = 'APPL';
      const expectedURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tickerSymbol}&apikey=${apiKey}`
      const actualURL = alphaVantageService.stockDetailsURLForSymbol(tickerSymbol);
      expect(expectedURL).toEqual(actualURL)
    });

    describe('given invalid symbol parameter', () => {
      const expectedErrText = 'Invalid value for symbol parameter provided to stockDetailsURLForSymbol in alphaVantage config service';

      it('throws expected error if symbol parameter is an empty string', () => {
        const tickerSymbolParam = '';
        expect(() => { alphaVantageService.stockDetailsURLForSymbol(tickerSymbolParam) }).toThrow(expectedErrText);
      });
  
      it('throws expected error if symbol parameter is a number', () => {
        const tickerSymbolParam = 2;
        expect(() => { alphaVantageService.stockDetailsURLForSymbol(tickerSymbolParam) }).toThrow(expectedErrText);
      });
  
      it('throws expected error if symbol paramer is an object', () => {
        const tickerSymbolParam = { val: 'say what?!' };
        expect(() => { alphaVantageService.stockDetailsURLForSymbol(tickerSymbolParam) }).toThrow(expectedErrText);
      });
    });
  });
});