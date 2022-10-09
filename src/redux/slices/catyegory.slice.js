import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { URL } from '../../utils/helpers'

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await fetch(`${URL}/categories`)
        .then((res) => res.json())
        .then((data) => data)
      return categories
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state, action) => {
        state.isLoading  = true
    },
    [getCategories.fulfilled]: (state, action) => {
         state.isLoading = false
         state.categories = action.payload
    },
    [getCategories.rejected]: (state, action) => {
        state.isLoading = false
        state.error = action.payload
    }
  },
})

export default categoriesSlice.reducer
