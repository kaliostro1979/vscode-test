import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {URL} from '../../utils/helpers'
export const userLogin = createAsyncThunk('user_auth/userLogin', async (data, { rejectWithValue }) => {
    const user = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
    if (user.status === 'ok' && user.token){
        sessionStorage.setItem('user_token', user.token)
    }
    return user
})

export const userRegistration = createAsyncThunk('user_auth/userRegistration', async (data, { rejectWithValue }) => {
    const user = await fetch(`${URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
    if (user.error){
        return user
    }

    return user.user
})


const userAuthSlice = createSlice({
    name: "user_auth",
    initialState: {
        user: null,
        isLoading: false,
        error: null
    },
    reducer: {},
    extraReducers: {
        [userLogin.pending]: (state, action)=>{
            state.isLoading = true
        },
        [userLogin.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.user = action.payload
            state.error = null
        },
        [userLogin.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        [userRegistration.pending]: (state, action)=>{
            state.isLoading = true
        },
        [userRegistration.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.user = action.payload
            state.error = null
        },
        [userRegistration.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default userAuthSlice.reducer