import axios from "axios";

interface StockTickersResponse {
  data: {
    tickers: any[];
  };
}

const polygonApiKey: string = "tFFNwM8_7kLNaEpuCRpqsgqTlJvDDY4K";

export const fetchStockTickersData = async (
  searchText: string
): Promise<StockTickersResponse> => {
  let endpoint = `https://api.polygon.io/v2/reference/tickers?search=${searchText}&sort=ticker&perpage=50&page=1&apiKey=${polygonApiKey}`;
  return await axios.get(endpoint);
};
