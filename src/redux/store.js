import { combineReducers, configureStore } from '@reduxjs/toolkit'
import addToCartSlice from './slices/cartActions.slice'
import productsSlice from './slices/products.slice'
import miniCartSlice from './slices/miniCart.slice'
import bannerSlice from './slices/banner.slice';
import saleSlice from './slices/sale.slice';
import bestSellersSlice from './slices/best_sellers.slice';
import categoriesSlice from './slices/catyegory.slice'
import testSlice from './slices/test.slice';

const rootReducer = combineReducers({
  shoppingCart: productsSlice,
  addToCart: addToCartSlice,
  miniCartProducts: miniCartSlice,
  banner: bannerSlice,
  sale: saleSlice,
  best_sellers: bestSellersSlice,
  categories: categoriesSlice,
  test: testSlice
})

export const store = configureStore({
  reducer: { main: rootReducer },
})
