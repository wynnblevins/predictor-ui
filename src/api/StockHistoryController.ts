import axios from "axios";
import { Stock } from "../App";

interface StockSnapshot {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

const alphaVantageApiKey: string = "8VG6XCZKT2JJ75FE";

export interface StockHistoryResponse {
  [x: string]: StockSnapshot;
}

export const fetchHistoryData = async (
  stock: Stock
): Promise<StockHistoryResponse> => {
  let endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock.ticker}&interval=5min&apikey=${alphaVantageApiKey}`;
  return await axios.get(endpoint);
};
