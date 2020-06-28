import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { watchedStockRemoved } from '../../actions';

class MyStocksList extends Component {
  removeFromMyStocksClicked(e, ndx) {
    this.props.watchedStockRemoved(e, ndx)
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        
        <ul>
          { this.props.watchedStocks ? this.props.watchedStocks.map((stock, ndx) => {    
            return (
              <li key={stock.stock['1. symbol']}>{stock.stock['1. symbol']}
                <button type="button" onClick={() => this.removeFromMyStocksClicked(stock, ndx)}>Stop Watching</button>
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