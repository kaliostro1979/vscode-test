import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {URL} from '../../utils/helpers'
import jwtDecode from "jwt-decode";


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

export const userLogout = createAsyncThunk('user_auth/userLogout', async ()=>{
    const data = await fetch(`${URL}/auth/logout`).then(res => res.json()).then(data => data)
    if (!data.token){
        sessionStorage.removeItem("user_token")
    }
})


const userAuthSlice = createSlice({
    name: "user_auth",
    initialState: {
        user: null,
        isLoading: false,
        error: null,
        isLoggedIn: false,
        loggedInUser: null
    },
    reducers: {
        checkUserIsLoggedIn(state){
            const token = sessionStorage.getItem("user_token")
            if (token){
                state.isLoggedIn = true
                state.loggedInUser = jwtDecode(token)
            }
        }
    },
    extraReducers: {
        [userLogin.pending]: (state, action)=>{
            state.isLoading = true
        },
        [userLogin.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.loggedInUser = jwtDecode(action.payload.token)
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
        },
        [userLogout.pending]: (state, action)=>{
            state.isLoading = true
        },
        [userLogout.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.loggedInUser = null
            state.error = null
        },
        [userLogout.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default userAuthSlice.reducer
export const {checkUserIsLoggedIn} = userAuthSlice.actions
