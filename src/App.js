import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from './components';
import { MyStocksList, AllStocksView } from './containers';
import { bindActionCreators } from 'redux';
import { stockSearchTextChanged, fetchSymbolDetailsData, activeStockSelected } from './actions';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';


class App extends Component {
  symbolClicked = async (match) => {
    this.props.activeStockSelected(match)
  }
  
  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Container>
          <Switch>
            <Route exact path='/' component={AllStocksView}></Route>
            <Route path='/myStocks' component={MyStocksList}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
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

export default connect(mapStateToProps, matchDispatchToProps)(App);
