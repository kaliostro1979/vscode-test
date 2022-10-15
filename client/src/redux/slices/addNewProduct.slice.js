import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URL} from '../../utils/helpers'

export const addNewProduct = createAsyncThunk('add_new_product/addNewProduct', async (data, {rejectWithValue})=>{
    return await fetch(`${URL}/admin/add-new-product`, {
      method: 'POST',
      body: data
    })
      .then((res) => res.json())
      .then((data) => data)
})

const addNewProductSlice = createSlice({
    name: "add_new_product",
    initialState: {
        product: {}
    },
    reducers: {},
    extraReducers: {
        [addNewProduct.fulfilled]: (state, action)=>{
            state.product = action.payload
        }
    }
})

export default addNewProductSlice.reducer
