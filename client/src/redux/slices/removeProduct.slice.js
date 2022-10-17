import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {URL} from "../../utils/helpers"

export const removeProduct = createAsyncThunk('remove_product/removeProduct', async (id, {rejectWithValue})=>{
    await fetch(`${URL}/admin/remove-item?id=${id.id}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({_id: id})
    }).then(res=>res.json()).then(data=>data)
})

const removeProductSlice = createSlice({
    name: "remove_product",
    initialState: {
        product: {}
    },
    reducers: {},
    extraReducers: {
        [removeProduct.fulfilled]: (state, action)=>{
            state.product = action.payload
        }
    }
})

export default removeProductSlice.reducer
