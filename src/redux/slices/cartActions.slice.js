import { createSlice } from '@reduxjs/toolkit'

const cartAction = createSlice({
  name: 'addToCart',
  initialState: {
    cartItems: [],
    quantity: 0,
    isLoadingh: false,
    error: false,
  },
  reducers: {
    addToShoppingCart(state, action) {
      const cartProducts = JSON.parse(
        window.localStorage.getItem('added_product')
      )

      if (
        !cartProducts ||
        cartProducts.filter((product) => product.id === action.payload.id)
          .length <= 0
      ) {
        state.cartItems.push(action.payload)
      } else {
        cartProducts &&
          cartProducts.find((product) => product.id === action.payload.id)
            .qnty++
        state.cartItems = cartProducts
      }

      window.localStorage.setItem(
        'added_product',
        JSON.stringify(state.cartItems)
      )
    },
    removeProductFromCart(state, action) {
      const cartProducts = JSON.parse(
        window.localStorage.getItem('added_product')
      )
      state.cartItems = cartProducts.filter(
        (product) => product.id !== action.payload
      )
      window.localStorage.setItem(
        'added_product',
        JSON.stringify(state.cartItems)
      )
    },
    removeAllProductsFromCart(state) {
      state.cartItems = []
      window.localStorage.setItem(
        'added_product',
        JSON.stringify(state.cartItems)
      )
    },
  },
  extraReducers: {},
})

export default cartAction.reducer
export const {
  addToShoppingCart,
  removeProductFromCart,
  removeAllProductsFromCart,
} = cartAction.actions
