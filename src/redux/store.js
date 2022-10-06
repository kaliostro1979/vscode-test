import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardSlice from './slices/card.slice';

const rootReducer = combineReducers({
  cart: cardSlice
})

export const store = configureStore({
  reducer: { main: rootReducer }
})

