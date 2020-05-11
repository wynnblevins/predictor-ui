import React from 'react';

export const StockDetail = (props) => {  
  console.log(props);
  
  return (
    <div data-test="detail-section">
      { props.stock.activeStock ? <div>
      <h1 data-test="detail-hdr">Stock Details </h1>
      <table className="mui-table" data-test="detail-table">
        <tbody>
        <tr data-test="ticker-row">
          <td>Symbol</td>
          <td>{props.stock.activeStock['1. symbol']}</td>
        </tr>
        <tr data-test="name-row">
          <td>Name</td>
          <td>{props.stock.activeStock['2. name']}</td>
        </tr>
        <tr data-test="type-row">
          <td>Type</td>
          <td>{props.stock.activeStock['3. type']}</td> 
        </tr>
        <tr data-test="region-row">
          <td>Region</td>
          <td>{props.stock.activeStock['4. region']}</td> 
        </tr>
        <tr>
          <td>Advice</td>
          <td>{props.advice.prediction && props.advice.prediction.valueWillIncrease ? <p>Buy</p> : <p>Sell</p> }</td>
        </tr>
        </tbody>
      </table> 
      </div>: <h1>Search/Select Stock</h1> } 
    </div>
  );
}