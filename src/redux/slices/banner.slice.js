import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {URL} from "../../utils/helpers"

export const getBannerData = createAsyncThunk(
  'banner/getBannerData',
  async (pageName, {rejectWithValue}) => {
    try {
        const bannerData = await fetch(`${URL}/banner/${pageName}`).then(res=>res.json()).then(data=>data)
        return bannerData
    } catch(error) {
        return rejectWithValue(error)
    }
  }
)

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    bannerData: {},
    error: null,
    isLoading: false
  },
  reducers: {},
  extraReducers: {
    [getBannerData.pending]: (state, action) => {
        state.isLoading = true
    },
    [getBannerData.fulfilled]: (state, action) => {
        state.isLoading = false
        state.bannerData = action.payload
    },
    [getBannerData.rejected]: (state, action) => {
        state.isLoading = false
        state.error = action.payload
    }
  },
})

export default bannerSlice.reducer
