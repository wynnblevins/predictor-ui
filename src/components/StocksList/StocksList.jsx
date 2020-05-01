import React from 'react';

export const StocksList = (props) => {
  return (
    <ul>
      {props.stocks.map((stock) => <li><span>stock</span></li>)}
    </ul>
  )
}