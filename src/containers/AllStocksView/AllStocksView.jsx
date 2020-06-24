import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StockDetail from '../../components/StockDetail';
import { SearchBox } from '../../components/SearchBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeStockSelected, stockSearchTextChanged, fetchSymbolDetailsData, watchedStockAdded } from '../../actions';

class AllStocksView extends Component {
  symbolClicked = async (match) => {
    this.props.activeStockSelected(match);
  }

  addToMyStocksClicked = async (stock) => {
    this.props.addToMyStocksClicked(stock)
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={4}>          
            <SearchBox onSearchChange={ (e) => this.props.stockSearchTextChanged(e) }></SearchBox>
        </Grid>    
        <Grid item xs={2}>
        { this.props.stocks && this.props.stocks.stocks && this.props.stocks.stocks.stocks && this.props.stocks.stocks.stocks.bestMatches ? 
        this.props.stocks.stocks.stocks.bestMatches.map((match) => {
          return (
            <h1 onClick={ () => {this.symbolClicked(match)} } key={match['1. symbol']}>{match['1. symbol']}</h1>
          );
        }) : null }
        </Grid>
        <Grid item xs={5}>
          { this.props.activeStock && this.props.activeStock.activeStock ? 
          <StockDetail onAddToMyStocksClicked={this.addToMyStocksClicked} stock={this.props.activeStock.activeStock}></StockDetail> : null }
        </Grid>
      </Grid>
    )
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
        fetchSymbolDetailsData: fetchSymbolDetailsData,
        addToMyStocksClicked: watchedStockAdded
    }, dispatch)
}
  

export default connect(mapStateToProps, matchDispatchToProps)(AllStocksView);