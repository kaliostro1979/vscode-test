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

export const removeProduct = createAsyncThunk('cart/removeProduct', async (id, {rejectWithValue})=>{
  const products = await fetch(`${URL}/admin/remove-item?id=${id.id}`).then(res=>res.json()).then(data=>data)
  console.log(products)
  return products
})

export const editProduct = createAsyncThunk('edit_product/editProduct', async (product, {rejectWithValue})=>{
  return await fetch(`${URL}/admin/edit-product?id=${product._id}&price=${product.price}&sale_price=${product.sale_price}&sale=${product.sale}&category=${product.category}&description=${product.description}&best_seller=${product.best_seller}`)
      .then(res=>res.json())
      .then(data=>data)
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
    [removeProduct.fulfilled]: (state, action)=>{
      state.products = action.payload
    },
    [editProduct.fulfilled]: (state, action)=>{
      state.products = action.payload
    }
  },
})

export default productsSlice.reducer
