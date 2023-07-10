import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from 'axios'
import {baseURL} from '../../configs/config'

const initialState = {
    name:'',
    user_id:null,
    loading: false,
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (email, password) => {
    return await axios.post(baseURL + 'api/users/signin', {
        email,
        password
    }).then(response => response)
    .catch(error => error)
    // return await fetch(baseURL + 'api/users/signin', {
    //     method:'POST',
    //     body: JSON.stringify({
    //       email : email,
    //       password : password
    //     }),
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //   }).then(result => result)
})

export const signUp = createAsyncThunk('user/signin', async (firstName, lastName, email, password, pictureUrl) => {
    return await axios.post(baseURL + 'api/users/signup', {
        firstName,
        lastName,
        email,
        password,
        pictureUrl
    }).then(response => response)
    .catch(error => error)
})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.name = action.payload.data.name
            state.user_id = action.payload.data.user_id
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })
        builder.addCase(signUp.pending, state => {
            state.loading = true
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.name = action.payload.data.first_name
            state.user_id = action.payload.data.id
            state.loading = false
        })
        builder.addCase(signUp.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })
    }
})

export default userSlice.reducer