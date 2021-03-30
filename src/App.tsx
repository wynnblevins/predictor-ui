import React, { useState, useEffect } from "react";
import "./App.css";
import {
  AppBar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { fetchStockTickersData } from "./api/StockTickerController";
import {
  fetchHistoryData,
  StockHistoryResponse,
} from "./api/StockHistoryController";
import LineChart from "react-linechart";

export interface Stock {
  active: boolean;
  codes: {
    cik: string;
    figiuid: string;
    scfigi: string;
    cfigi: string;
    figi: string;
  };
  currency: string;
  locale: string;
  market: string;
  name: string;
  primaryExch: string;
  ticker: string;
  type: string;
  updated: string;
  url: string;
}

export interface StockValueSnapshot {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

const App = () => {
  const [state, setState] = useState({
    searchResults: [],
    activeStock: null,
    searchText: "",
    chartData: [],
  });

  useEffect(() => {
    async function getData(activeStock) {
      const historyResponse = await fetchHistoryData(activeStock);
      setState({
        ...state,
        chartData: buildGraphArray(historyResponse, "2. high"),
        activeStock: activeStock,
      });
    }
    if (state.activeStock) {
      getData(state.activeStock);
    }
  }, [state.activeStock]);

  const buildGraphArray = (
    response: StockHistoryResponse,
    responseKey: string
  ): any => {
    if (!response.data["Time Series (5min)"]) {
      return [];
    }

    const values: any[] = Object.values(response.data["Time Series (5min)"]);
    const data = [
      {
        color: "steelblue",
        points: values.map((value: any, i: any) => {
          return { y: value[responseKey], x: i };
        }),
      },
    ];
    return data;
  };

  const onSearchTextChange = async (e) => {
    const searchResults: any = await fetchStockTickersData(e.target.value);
    setState({
      ...state,
      searchText: e.target.value,
      searchResults: searchResults.data.tickers,
    });
  };

  const handleStockSelect = async (stock: any) => {
    const historyResponse = await fetchHistoryData(stock);
    const chartData: any = buildGraphArray(historyResponse, "2. high");
    setState({
      ...state,
      chartData: chartData,
      activeStock: stock.name,
    });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Market Predictor</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextField
              onChange={(e) => {
                onSearchTextChange(e);
              }}
              id="stockSearchBox"
              label="Search"
            />
            <div>
              <List>
                {state.searchResults ? (
                  state.searchResults.map((stock: any, i: number) => {
                    return (
                      <ListItem key={i}>
                        <ListItemText
                          primary={`${stock.ticker} : ${stock.name}`}
                          onClick={() => handleStockSelect(stock)}
                        />
                      </ListItem>
                    );
                  })
                ) : (
                  <></>
                )}
              </List>
            </div>
          </Grid>
          <Grid item xs={3} md={3}>
            {state.activeStock ? <h2>{state?.activeStock}</h2> : null}
          </Grid>
          <Grid item xs={6} md={3}>
            {state.chartData && (
              <LineChart width={600} height={400} data={state.chartData} />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
