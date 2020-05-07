import { createStore } from 'redux';
import rootReducer from './reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {Store} - redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}