import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {URL} from '../../utils/helpers'

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, {rejectWithValue}) => {
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

export const removeCategory = createAsyncThunk('categories/removeCategory', async (category, {rejectWithValue}) => {
    try {
        const categories = await fetch(`${URL}/admin/remove-category?category=${category}`)
            .then(res => res.json())
            .then(data => data)
        return categories
    } catch (err) {
        return rejectWithValue(err)
    }
})

export const addCategory = createAsyncThunk('categories/addCategory', async (name, {rejectWithValue}) => {
    return await fetch(`${URL}/admin/add-category`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: name})
    }).then(res => res.json()).then(data => data)
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        category: {},
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.isLoading = true
        },
        [getCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        },
        [getCategories.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [addCategory.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
        [removeCategory.fulfilled]: (state, action) => {
            state.categories = action.payload
        }
    },
})

export default categoriesSlice.reducer
