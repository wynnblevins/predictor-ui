import React from 'react';
import { Button } from '@material-ui/core';

export const StockDetail = (props) => {  
  if (props.stock) {
    return (
      <div data-test="detail-section">
        <div>
          <h1 data-test="detail-hdr">Stock Details </h1>
          <table className="mui-table" data-test="detail-table">
            <tbody>
            <tr data-test="ticker-row">
              <td>Symbol</td>
              <td>{props.stock['1. symbol']}</td>
            </tr>
            <tr data-test="name-row">
              <td>Name</td>
              <td>{props.stock['2. name']}</td>
            </tr>
            <tr data-test="type-row">
              <td>Type</td>
              <td>{props.stock['3. type']}</td> 
            </tr>
            <tr data-test="region-row">
              <td>Region</td>
              <td>{props.stock['4. region']}</td> 
            </tr>
            </tbody>
          </table> 
          <Button color="primary" onClick={() => props.onAddToMyStocksClicked(props.stock)}>Add To My Stocks</Button>
        </div>
      </div>
    );
  }
  return null;
}