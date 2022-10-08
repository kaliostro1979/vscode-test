import { combineReducers, configureStore } from '@reduxjs/toolkit'
import addToCartSlice from './slices/cartActions.slice'
import productsSlice from './slices/products.slice'
import miniCartSlice from './slices/miniCart.slice'
import bannerSlice from './slices/banner.slice';

const rootReducer = combineReducers({
  shoppingCart: productsSlice,
  addToCart: addToCartSlice,
  miniCartProducts: miniCartSlice,
  banner: bannerSlice
})

export const store = configureStore({
  reducer: { main: rootReducer },
})
