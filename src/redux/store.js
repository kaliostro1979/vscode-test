import { combineReducers, configureStore } from '@reduxjs/toolkit'
import addToCartSlice from './slices/cartActions.slice'
import productsSlice from './slices/products.slice'
import miniCartSlice from './slices/miniCart.slice'

const rootReducer = combineReducers({
  shoppingCart: productsSlice,
  addToCart: addToCartSlice,
  miniCartProducts: miniCartSlice,
})

export const store = configureStore({
  reducer: { main: rootReducer },
})
