import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from 'axios'
import {baseURL} from '../../configs/config'

const initialState = {
    name:'',
    user_id:null,
    pictureUrl:null,
    loading: false,
    error: null
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (body) => {
    const data = {
        email: body.userEmail,
        password: body.userPassword
    }
    return axios.post(baseURL + 'api/users/signin', data).then(response => response)
    .catch(error => error)
})

export const signUp = createAsyncThunk('user/signup', async (firstName, lastName, email, password, pictureUrl) => {
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
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.error = action    
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            localStorage.setItem('jwt-token',action.payload.data.data.data.token)
            state.name = action.payload.data.data.data.firstName
            state.user_id = action.payload.data.data.data.id
            state.pictureUrl = action.payload.data.data.data.pictureUrl
            state.loading = false
        })
        builder.addCase(signUp.pending, state => {
            state.loading = true
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.name = action.payload.data.data.data.firstName
            state.user_id = action.payload.data.data.data.id
            state.loading = false
        })
        builder.addCase(signUp.rejected, (state, action) => {
            state.loading = false
            state.error = action
        })
    }
})

export default userSlice.reducer