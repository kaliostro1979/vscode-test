import { createSlice } from '@reduxjs/toolkit'

const miniCartSlice = createSlice({
    name: "mini_cart",
    initialState: {
        addedPorducts: []
    },
    reducers: {
        getMiniCartProducts(state, action){
            const products = JSON.parse(
              window.localStorage.getItem('added_product')
            )
            state.addedPorducts = products
        }
    }
})

export default miniCartSlice.reducer
export const { getMiniCartProducts } = miniCartSlice.actions
