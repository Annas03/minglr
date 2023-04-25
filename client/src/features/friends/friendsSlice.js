import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading:false,
    friends:[],
    error:''
}

export const fetchFriends = createAsyncThunk('friends/fetchFriends', (user_id) => {
    return axios.get("http://localhost:5000/fetchFriends/", user_id).then(response => response)
})

const friendsSlice = createSlice({
    name:'friends',
    initialState,  
    extraReducers: (builder) => {
        builder.addCase(fetchFriends.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchFriends.fulfilled, (state, action) => {
            state.friends = action.payload
            state.loading = false
        })
        builder.addCase(fetchFriends.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default friendsSlice