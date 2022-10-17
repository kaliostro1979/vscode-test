import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const URL = process.env.REACT_APP_PRYMARY_URL

export const getProducts = createAsyncThunk(
  'cart/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const products = await fetch(`${URL}/products`)
        .then((res) => res.json())
        .then((data) => data)
      return products
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const getSingleProduct = createAsyncThunk('cart/getSingleProduct', async (id, {rejectWithValue})=>{

  try {
    const product = await fetch(`${URL}/products?id=${id}`)
      .then((res) => res.json())
      .then((data) => data)
    return product
  } catch (error) {
    rejectWithValue(error)
  }
})

export const addRemoveFromBestSeller = createAsyncThunk('cart/addRemoveFromBestSeller', async (arg, {rejectWithValue})=>{

  try {
    const product = await fetch(`${URL}/product-remove-bestseller?id=${arg.id}&status=${arg.status}`)
      .then((res) => res.json())
      .then((data) => data)
    return product
  } catch (error) {
    rejectWithValue(error)
  }
})

export const changeProductCategory = createAsyncThunk('cart/changeProductCategory', async (arg, {rejectWithValue})=>{
  console.log(arg)
  try {
    const product = await fetch(`${URL}/product-change-category?id=${arg.id}&category=${arg.category}`)
        .then((res) => res.json())
        .then((data) => data)
    return product
  } catch (error) {
    rejectWithValue(error)
  }
})

const productsSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    product: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [getSingleProduct.pending]: (state, action) => {
      state.isLoading = true
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.isLoading = false
      state.product = action.payload
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [addRemoveFromBestSeller.fulfilled]: (state, action) => {
      state.isLoading = false
      state.product = action.payload
    },
    [changeProductCategory.fulfilled]: (state, action) => {
      state.isLoading = false
      state.product = action.payload
    }
  },
})

export default productsSlice.reducer
