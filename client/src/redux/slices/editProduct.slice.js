import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URL} from "../../utils/helpers"

export const editProduct = createAsyncThunk('edit_product/editProduct', async (product, {rejectWithValue})=>{
    return await fetch(`${URL}/admin/edit-product?id=${product._id}&price=${product.price}&sale_price=${product.sale_price}&sale=${product.sale}&category=${product.category}&description=${product.description}`)
        .then(res=>res.json())
        .then(data=>data)
})

const editProductSlice = createSlice({
    name: "edit_product",
    initialState: {
        product: {}
    },
    reducers: {},
    extraReducers: {
        [editProduct.fulfilled]: (state, action)=>{
            state.product = action.payload
        }
    }
})

export default editProductSlice.reducer
