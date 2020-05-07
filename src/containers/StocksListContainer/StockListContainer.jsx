import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { stockSearchTextChanged, fetchSymbolDetailsData, activeStockSelected } from '../../actions';
import { NavBar, SearchBox } from '../../components';

export class StocksListContainer extends Component {
  symbolClicked(match) {
    this.props.activeStockSelected(match[['1. symbol']])
    
    // This line performs rest call, commenting out for now
    //this.props.fetchSymbolDetailsData()
  }
  
  render() {
    return (
      <div>
        <Grid container>
          <NavBar title="Market Predictor"></NavBar>
          <Grid item xs={4}>          
            <SearchBox onSearchChange={ (e) => this.props.stockSearchTextChanged(e) }></SearchBox>
          </Grid>
          <Grid item xs={2}>
            { this.props.stocks && this.props.stocks.stocks && this.props.stocks.stocks.stocks && this.props.stocks.stocks.stocks.bestMatches ? 
                this.props.stocks.stocks.stocks.bestMatches.map((match) => {
                  return (
                    <h1 onClick={ () => this.symbolClicked(match) } key={match['1. symbol']}>{match['1. symbol']}</h1>
                  );
                }) : null }
          </Grid>
          <Grid item xs={6}>
              { this.props.activeStock && this.props.activeStock.activeStock && this.props.activeStock.activeStock.activeStock ? 
                <h1>{this.props.activeStock.activeStock.activeStock}</h1> : <h1>No Stock Selected</h1> }
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks,
    activeStock: state.activeStock
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    activeStockSelected: activeStockSelected,
    stockSearchTextChanged: stockSearchTextChanged,
    fetchSymbolDetailsData: fetchSymbolDetailsData
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(StocksListContainer);