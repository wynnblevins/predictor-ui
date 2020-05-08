import React from 'react';

export const StockDetail = (props) => {
  return (
    <div data-test="detail-section">
      <h1 data-test="detail-hdr">Stock Details</h1>
      <table data-test="detail-table">
        <tr data-test="ticker-row">
          <td>Symbol</td>
          <td>{props.activeStock['Global Quote']['01. symbol']}</td>
        </tr>
        <tr data-test="closing-value-row">
          <td>Prev. Closing Value</td>
          <td>{props.activeStock['Global Quote']['08. previous close']}</td>
        </tr>
        <tr data-test="last-trading-day-row">
          <td>Last Trading Day</td>
          <td>{props.activeStock['Global Quote']['07. latest trading day']}</td>
        </tr>
        <tr data-test="last-close-value">

        </tr>
        <tr data-test="change-percent-row">
          
        </tr>
      </table>
    </div>
    
  );
}