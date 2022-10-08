import { createSlice } from '@reduxjs/toolkit'

const cartAction = createSlice({
    name: 'addToCart',
    initialState: {
        cartItems: [],
        quantity: 1,
        isLoading: false,
        error: false,
    },
    reducers: {
        addToShoppingCart(state, action) {
            const cartProducts = JSON.parse(window.localStorage.getItem('added_product'))
            const currentProduct = action.payload[0]
            const quantity = action.payload[1]

            if (!cartProducts || cartProducts.filter((product) => product.id === currentProduct.id).length <= 0) {
                state.cartItems.push(currentProduct)
            }else {
                cartProducts.find((product) => product.id === currentProduct.id).qnty = quantity
                state.cartItems = cartProducts
            }

            window.localStorage.setItem('added_product', JSON.stringify(state.cartItems))
        },
        removeProductFromCart(state, action) {
            const cartProducts = JSON.parse(window.localStorage.getItem('added_product'))
            window.localStorage.setItem('added_product', JSON.stringify(state.cartItems))
            state.cartItems = cartProducts.filter((product) => product.id !== action.payload)
        },
        removeAllProductsFromCart(state) {
            state.cartItems = []
            window.localStorage.setItem('added_product', JSON.stringify(state.cartItems))
        }
    },
    extraReducers: {},
})

export default cartAction.reducer
export const {
    addToShoppingCart,
    removeProductFromCart,
    removeAllProductsFromCart
} = cartAction.actions
