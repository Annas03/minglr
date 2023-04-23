import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

initialState = {
    name:'',
    email:'',
    password:'',
    loading: false,
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', (email, password) => {
    return axios.get('http://localhost:5000/getUser').then(response => response)
})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default userSlice