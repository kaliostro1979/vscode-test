import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URL} from "../../utils/helpers";

export const loginAction = createAsyncThunk('auth/loginAction', async (body, {rejectWithValue}) => {
    const user = await fetch(`${URL}/admin/login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(data => data)

    if (user.status === 'ok' && user.token){
        sessionStorage.setItem('token', user.token)
    }
    return user
})

export const registrationAction = createAsyncThunk('auth/registrationAction/', async (body, {rejectWithValue}) => {
    try {
        const data = await fetch(`${URL}/admin/registration`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => data)

        if (data.error){
            return data
        }

        return data.user
    }catch (e) {
        return rejectWithValue(e)
    }
})

export const logoutAction = createAsyncThunk('auth/logoutAction', async ()=>{
    const data = await fetch(`${URL}/admin/logout`).then(res => res.json()).then(data => data)
    if (!data.token){
        sessionStorage.removeItem("token")
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        error: null,
        isLoggedIn: false
    },
    reducers: {
        checkIsLoggedIn(state){
            const token = sessionStorage.getItem("token")
            if (token){
                state.isLoggedIn = true
            }
        }
    },
    extraReducers: {
        [loginAction.fulfilled]: (state, action) => {
            state.user = action.payload

            if (state.user.status === "ok"){
                state.isLoggedIn = true
            }else {
                state.error = "Wrong email or password"
            }
        },
        [registrationAction.fulfilled]: (state, action) => {
            if (action.payload.status === 'error'){
                state.error = action.payload.error
            }
            state.user = action.payload
        },
        [registrationAction.rejected]: (state, action) => {
            state.error = action.payload
        },
        [logoutAction.fulfilled]: (state, action)=>{
            state.isLoggedIn = false
        }
    },
})

export default authSlice.reducer
export const {checkIsLoggedIn} = authSlice.actions
