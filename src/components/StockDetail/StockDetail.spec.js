import React from 'react';
import { shallow } from 'enzyme';

import { StockDetail } from './StockDetail';
import { findByTestAttr } from '../../testUtils';

const createWrapper = (activeStock) => {
  return shallow(<StockDetail activeStock={activeStock} />);
}

describe('StockDetail', () => {
  let wrapper = null;
  
  beforeEach(() => {
    const symbol = 'IBM';
    const prevClosingValue = '42';
    const activeStock = {
      'Global Quote': {
        '01. symbol': symbol,
        '08. previous close': prevClosingValue
      }
    };
    wrapper = createWrapper(activeStock);
  });

  it('shows detail view header and details table', () => {
    const detailSectionWrapper = findByTestAttr(wrapper, 'detail-hdr');
    expect(detailSectionWrapper.length).toEqual(1);
    expect(detailSectionWrapper.text()).toEqual('Stock Details');
    
    const detailTbl = findByTestAttr(wrapper, 'detail-table');
    expect(detailTbl.length).toEqual(1);
    expect(detailTbl.children().length).toEqual(5);
  });

  // it('shows expected last trading day in details table', () => {
  //   const lastTradeDayChildren = findByTestAttr(wrapper, 'last-trading-day-row').children();
  //   expect(lastTradeDayChildren.first().text()).toEqual('Last Trading Day');
  //   expect(lastTradeDayChildren.last().text()).toEqual('05/25/2020');
  // });

  // it('shows expected last close value in details table', () => {
  //   const lastClosingValRow = findByTestAttr(wrapper, 'closing-value-row');
  //   expect(lastClosingValRow.length).toEqual(1);
  // });
  
  // it('shows change percent value in details table', () => {
  //   const changePercentRow = findByTestAttr(wrapper, 'change-percent-row');
  //   expect(changePercentRow.length).toEqual(1);
  // });
});