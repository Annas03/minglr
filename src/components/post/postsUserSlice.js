import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    posts:[],
    error:'',
    message:null,
    currentPage:1,
    limitReached: false
}

export const createUserPosts = createAsyncThunk('Userposts/createPosts', async (data, {dispatch}) => {
    const body = {
        content:data.postText,
        mediaUrl:data.resourceUrl
    }
    const config = {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')}
    }
    const response = await axios.post('http://localhost:5000/api/posts/createPost', body,config)
    await dispatch(fetchUserPosts({userPostsPage: 1}))
    return response
})

export const likePost = createAsyncThunk('posts/likePost', async (post_id) => {
    return await axios.post('http://localhost:5000/api/posts/likes/'+post_id)
    .then(response => response)
    .catch(error => error)
})

export const fetchUserPosts = createAsyncThunk('Userposts/fetchUserPosts', async (data) => {
    const config = {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')},
        params: {
            page:data.userPostsPage,
            limit:10,
        }
    }
    return axios.get('http://localhost:5000/api/posts/getPostsOfSignedInUser',config).then(response => response).catch( error => error)
})

const UserpostsSlice = createSlice({
    name:'postsUser',
    initialState,
    reducers:{
        updateUsersPage (state) {
            state.currentPage += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserPosts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
            state.loading = false
            if(action.payload.data.data.posts){
                state.posts.push(...action.payload.data.data.posts)
                state.limitReached = false
            }
            else{
                state.limitReached = true
            }
            state.message = action.payload.data.message
        })
        builder.addCase(createUserPosts.pending, state => {
            state.message = null
        })
        builder.addCase(createUserPosts.fulfilled, (state, action) => {
            if (action.payload.data.error){
                state.error = ''
            }
            else{
                state.message = action.payload.data.message
            }
        })
    }
})

export const {updateUsersPage} = UserpostsSlice.actions
export default UserpostsSlice.reducer