import { createSlice } from '@reduxjs/toolkit'
import items from '../../data/items.json'

const cardSlice = createSlice({
  name: 'cart',
  initialState: {
    product: {},
    cardItems: [],
    cardItemsCount: 0,
    selectedItemCount: 0,
  },
  reducers: {
    addToCard(state, action) {
      state.product = items.products.filter(
        (product) => product.id === action.payload
      )
      state.cardItems.push(...state.product)
      state.cardItemsCount = state.cardItems.length
    },
    removeCardItem(state, action) {
      state.cardItems = state.cardItems.filter(
        (item) => item.id !== action.payload
      )
      state.cardItemsCount = state.cardItems.length
    },
    removeAllItems(state) {
      state.cardItems = []
    },
    incrementItemCount(state, action) {      
      state.product = items.products.filter(
        (product) => product.id === action.payload
      )
      state.product.qnty = state.selectedItemCount + 1
    },
    decrementItemCount(state, action) {
         state.product = items.products.filter(
           (product) => product.id === action.payload
         )
         state.product.qnty = state.selectedItemCount - 1
    },
  },
})

export default cardSlice.reducer
export const {
  addToCard,
  removeCardItem,
  removeAllItems,
  incrementItemCount,
  decrementItemCount,
} = cardSlice.actions
