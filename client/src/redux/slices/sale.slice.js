import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {URL} from '../../utils/helpers'

export const getSaleProducts = createAsyncThunk(
  'sale/getSaleProducts',
  async (_, {rejectWithValue}) => {
    try {
      const result = await fetch(`${URL}/sale`)
        .then((res) => res.json())
        .then((data) => data)
      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const saleSlice = createSlice({
  name: 'sale',
  initialState: {
    products: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getSaleProducts.pending]: (state, action) => {
      state.isLoading = true
    },
    [getSaleProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    [getSaleProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default saleSlice.reducer
