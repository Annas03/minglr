import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import {baseURL} from '../../configs/config'

const initialState = {
    name:'',
    email:'',
    password:'',
    user_id:null,
    loading: false,
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (email, password) => {
    return await fetch(baseURL + 'api/users/signin', {
        method:'POST',
        body: JSON.stringify({
          email : email,
          password : password
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }).then(result => result)
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
            state.user_id = action.payload.user_id
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default userSlice