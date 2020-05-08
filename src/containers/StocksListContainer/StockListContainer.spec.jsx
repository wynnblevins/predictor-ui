import React from 'react';
import { shallow } from 'enzyme';

import StockListContainer from './StockListContainer';
import { storeFactory, findByTestAttr } from '../../testUtils';


const setup = (activeStock = {}) => {
  const store = storeFactory(activeStock);
  return shallow(<StockListContainer store={store}></StockListContainer>).dive().dive();
};

describe('StockListContainer', () => {
  beforeEach(() => {});

  it('renders NavBar with the title of "Market Predictor"', () => {
    const wrapper = setup();
    const navbar = wrapper.find('NavBar');

    expect(navbar.prop('title')).toEqual("Market Predictor");    
  });

  it('renders something when a stock is selected', () => {
    const initialState = { activeStock: {  } };
    const wrapper = setup(initialState);

    expect(wrapper.children().length).toEqual(1);
  });
});