import React from 'react';
import { NavBar, StocksList } from '../components';
import axios from 'axios';

class StocksListContainer extends React.Component {
  apiKey = '8VG6XCZKT2JJ75FE';
  stocks = [];

  componentDidMount() {
    let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${''}&apikey=${this.apiKey}`
    
    // load stock data
    // axios.get(url).then(() => {

    // });    
  }

  render() {
    return (
      <div>
        <NavBar title="Market Predictor"></NavBar>        
        { this.stocks ? <StocksList stocks={[]}></StocksList> : null }
      </div>
    );
  }
}

export default StocksListContainer;