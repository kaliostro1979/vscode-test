import { createSlice } from '@reduxjs/toolkit'

const cartAction = createSlice({
    name: 'addToCart',
    initialState: {
        cartItems: [],
        quantity: 1,
        localStorageItems: [],
        isLoading: false,
        error: false
    },
    reducers: {
        addToShoppingCart(state, action) {
            const cartProducts = JSON.parse(window.localStorage.getItem('added_product'))
            const currentProduct = action.payload[0]
            const quantity = action.payload[1]

            if (!cartProducts || cartProducts.filter((product) => product._id === currentProduct._id).length <= 0) {
                state.cartItems.push(currentProduct)
            }else {
                cartProducts.find((product) => product._id === currentProduct._id).qnty = quantity
                state.cartItems = cartProducts
            }
            window.localStorage.setItem('added_product', JSON.stringify(state.cartItems))
        },
        removeProductFromCart(state, action) {
            const cartProducts = JSON.parse(window.localStorage.getItem('added_product'))
            state.cartItems = cartProducts.filter((product) => product._id !== action.payload)
            window.localStorage.setItem('added_product', JSON.stringify(state.cartItems))
        },
        removeAllProductsFromCart(state) {
            state.cartItems = []
            window.localStorage.setItem('added_product', JSON.stringify(state.cartItems))
        },
        getProductsFromLocalStorage(state){
            state.localStorageItems = JSON.parse(
              window.localStorage.getItem('added_product')
            )
        }
    },
    extraReducers: {},
})

export default cartAction.reducer
export const {
  addToShoppingCart,
  removeProductFromCart,
  removeAllProductsFromCart,
  getProductsFromLocalStorage,
} = cartAction.actions
