import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { URL } from '../../utils/helpers'

export const getBestSellersProductsByCategory = createAsyncThunk(
  'best_sellers/getBestSellersProductsByCategory',
  async (category='all', { rejectWithValue }) => {

    try {
      const products = await fetch(`${URL}/best-sellers?category=${category}`)
        .then((res) => res.json())
        .then((data) => data)
      return products
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const addRemoveFromBestSeller = createAsyncThunk('cart/addRemoveFromBestSeller', async (arg, {rejectWithValue})=>{
  try {
    const products = await fetch(`${URL}/product-remove-bestseller?id=${arg.id}&status=${arg.status}`)
        .then((res) => res.json())
        .then((data) => data)
    return products
  } catch (error) {
    rejectWithValue(error)
  }
})

const bestSellersSlice = createSlice({
  name: 'best_sellers',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getBestSellersProductsByCategory.pending]: (state, action) => {
      state.isLoading = true
    },
    [getBestSellersProductsByCategory.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    [getBestSellersProductsByCategory.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [addRemoveFromBestSeller.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    }
  },
})

export default bestSellersSlice.reducer
