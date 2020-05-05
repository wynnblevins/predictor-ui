import React from 'react';

const SearchResultsList = (props) => {
  return (props.stocks && props.stocks.stocks && props.stocks.stocks.stocks && props.stocks.stocks.stocks.bestMatches ? 
    props.stocks.stocks.stocks.bestMatches.map((match) => {
      return (
        <h1 key={match['1. symbol']}>{match['1. symbol']}</h1>
      );
    }) : null );
  }

export default SearchResultsList;