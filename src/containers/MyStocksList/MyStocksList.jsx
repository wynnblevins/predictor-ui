import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { watchedStockRemoved } from '../../actions';

class MyStocksList extends Component {
  removeFromMyStocksClicked() {
    console.log('Inside remove from myStocksClicked');
  }
  
  render() {
    return (
      <div>
        <ul>
          { this.props.watchedStocks && this.props.watchedStocks.watchedStocks ? this.props.watchedStocks.watchedStocks.map((stock) => {
            return (
              <li key={stock['1. symbol']}>{stock['1. symbol']}
                <button type="button" onClick={() => this.removeFromMyStocksClicked()}>Stop Watching</button>
              </li>
            )
          }) : null }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      watchedStocks: state.watchedStocks
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    watchedStockRemoved: watchedStockRemoved    
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MyStocksList);