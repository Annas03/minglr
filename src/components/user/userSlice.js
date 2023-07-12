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
    return await axios.post(baseURL + 'api/users/signin', data).then(response => response).catch( error => {console.log(error.response.data.error); return error.response.data.error})
})

export const signUp = createAsyncThunk('user/signup', async (body) => {
    const data = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.userMail,
        password: body.userPassword,
        pictureUrl: body.pictureUrl
    }
    return await axios.post(baseURL + 'api/users/signup', data).then(response => response)
    .catch(error => error => {console.log(error.response.data.error); return error.response.data.error})
})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            if(action.payload.data){
                localStorage.setItem('jwt-token',action.payload.data.data.data.token)
                state.name = action.payload.data.data.data.firstName
                state.user_id = action.payload.data.data.data.id
                state.pictureUrl = action.payload.data.data.data.pictureUrl
                state.error = null
            }
            else{
                state.error = action.payload
            }
            state.loading = false
        })
        builder.addCase(signUp.pending, state => {
            state.loading = true
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            if(action.payload.data){
                state.name = action.payload.data.data.user.first_name
                state.user_id = action.payload.data.data.user.id
                state.pictureUrl = action.payload.data.data.user.picture_url
                state.error = null
            }
            else{
                state.error = action.payload
            }
            state.loading = false
        })
    }
})

export default userSlice.reducer