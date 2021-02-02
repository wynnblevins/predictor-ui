import React, { useState } from "react";
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
import axios from "axios";

const App = () => {
  const handleStockSelect = (stock: object) => {
    setState({ activeStock: stock, stocks: state.stocks });
  };

  const fetchStockTickers = async (searchText: string) => {
    let endpoint = `https://api.polygon.io/v2/reference/tickers?search=${searchText}&sort=ticker&perpage=50&page=1&apiKey=tFFNwM8_7kLNaEpuCRpqsgqTlJvDDY4K`;
    const response = await axios.get(endpoint);
    setState({ stocks: response.data.tickers, activeStock: null });
  };

  const [state, setState] = useState({
    stocks: [],
    activeStock: null,
    searchText: "",
  });

  if (state.stocks && state.stocks.length === 0) fetchStockTickers("");

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
                setState({ searchText: e.target.value });
                fetchStockTickers(e.target.value);
              }}
              id="stockSearchBox"
              label="Search"
            />
            <div>
              {state.stocks ? (
                state.stocks.map((stock) => {
                  return (
                    <List>
                      <ListItem>
                        <ListItemText
                          primary={`${stock.ticker} : ${stock.name}`}
                          onClick={() => handleStockSelect(stock)}
                        />
                      </ListItem>
                    </List>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </Grid>
          <Grid item xs={6} md={9}>
            {state.activeStock ? <h2>{state.activeStock.name}</h2> : null}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
