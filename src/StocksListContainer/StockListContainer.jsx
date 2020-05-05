import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavBar, SearchBox } from '../components';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { stockSearchTextChanged } from '../actions';
import SearchResultsList from '../components/SearchResultsList'; 

const StyledDiv = styled.div`
  margin-top: 30px,
  margin-left: 15px
`

class StocksListContainer extends React.Component {
  stocks = [];
  
  componentDidMount() {}

  render() {
    
    return (
      <div>
        <NavBar title="Market Predictor"></NavBar>        
        <Grid container>
          <Grid item xs={4}>          
            <StyledDiv>
              <SearchBox onSearchChange={(e) => this.props.stockSearchTextChanged(e)}></SearchBox>
            </StyledDiv>
          </Grid>
          <Grid item xs={8}>
            {/* <SearchResultsList stocks={this.props.stocks}></SearchResultsList> */}
            { this.props.stocks && this.props.stocks.stocks && this.props.stocks.stocks.stocks && this.props.stocks.stocks.stocks.bestMatches ? 
                this.props.stocks.stocks.stocks.bestMatches.map((match) => {
                  return (
                    <h1 key={match['1. symbol']}>{match['1. symbol']}</h1>
                  );
                }) : null
            }
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
    stockSearchTextChanged: stockSearchTextChanged
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(StocksListContainer);