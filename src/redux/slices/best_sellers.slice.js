import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { URL } from '../../utils/helpers'

export const getBestSellersProductsByCategory = createAsyncThunk(
  'best_sellers/getBestSellersProductsByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const products = await fetch(`${URL}/best_seller/${category}`)
        .then((res) => res.json())
        .then((data) => data)
      return products
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const bestSellersSlice = createSlice({
  name: 'best_sellers',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getBestSellersProductsByCategory.pending]: (state, action)=>{
      state.isLoading = true
    },
    [getBestSellersProductsByCategory.fulfilled]: (state, action)=>{
      state.isLoading = false
      state.products = action.payload
    },
    [getBestSellersProductsByCategory.rejected]: (state, action)=>{
      state.isLoading = false
      state.error = action.payload
    }
  },
})

export default bestSellersSlice.reducer
