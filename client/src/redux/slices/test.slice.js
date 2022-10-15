import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const asyncTest = createAsyncThunk('test/asuncTest', async () => {
    const res = await fetch('http://localhost:5000/products').then(res=>res.json()).then(data=>data)
    return res
})

const testSlice = createSlice({
  name: 'test',
  initialState: {
    test: []
  },
  reducers: {},
  extraReducers: {
    [asyncTest.pending]: (state, action)=>{

    },
    [asyncTest.fulfilled]: (state, action)=>{
        state.test = action.payload
    },
    [asyncTest.rejected]: (state, action)=>{}
  },
})

export default testSlice.reducer
