export const WATCHED_STOCK_ADDED = 'WATCHED_STOCK_ADDED';
export const WATCHED_STOCK_REMOVED = 'WATCHED_STOCK_REMOVED';

export const watchedStockAdded = (stock) => ({
  type: WATCHED_STOCK_ADDED,
  payload: { stock }
});

export const watchedStockRemoved = (stock, ndx) => ({
  type: WATCHED_STOCK_REMOVED,
  payload: { stock, ndx }
});