import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavBar, SearchBox } from '../components';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { stockSearchTextChanged, symbolClicked } from '../actions';

class StocksListContainer extends React.Component {
  stocks = [];

  render() {
    return (
      <div>
        <NavBar data-test="navbar" title="Market Predictor"></NavBar>        
        <Grid container>
          <Grid item xs={4}>          
            <SearchBox onSearchChange={ (e) => this.props.stockSearchTextChanged(e) }></SearchBox>
          </Grid>
          <Grid item xs={8}>
            { this.props.stocks && this.props.stocks.stocks && this.props.stocks.stocks.stocks && this.props.stocks.stocks.stocks.bestMatches ? 
                this.props.stocks.stocks.stocks.bestMatches.map((match) => {
                  return (
                    <h1 onClick={ (e, stock) => this.props.symbolClicked(match[['1. symbol']]) } key={match['1. symbol']}>{match['1. symbol']}</h1>
                  );
                }) : null }
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    stockSearchTextChanged: stockSearchTextChanged,
    symbolClicked: symbolClicked
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(StocksListContainer);