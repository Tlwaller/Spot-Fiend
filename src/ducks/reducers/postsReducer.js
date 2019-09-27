import axios from 'axios';

const initialState = {
    posts: []
};

const UPDATE_POSTS = 'UPDATE_POSTS';
const UPDATE_USER_POSTS = 'UPDATE_USER_POSTS'
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';

export function updatePosts() {
    return {
        type:UPDATE_POSTS,
        payload: axios.get(`/api/spots`)
    }
};

export function updateUserPosts() {
    return {
        type:UPDATE_USER_POSTS,
        payload: axios.get(`/api/my-spots`)
    }
};

export function addPost(newPost) {
    return {
        type: ADD_POST,
        payload: axios.post('/api/spots', newPost)
    }
};

export function deletePost(spot_id) {
    return {
        type: DELETE_POST,
        payload: axios.delete('/api/spots/', {data: {spot_id}})
    }
}

export function editPost(postInfo) {
    return {
        type: EDIT_POST,
        payload: axios.put('/api/spots/', postInfo)
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case `${UPDATE_POSTS}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };

        case `${UPDATE_USER_POSTS}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };

        case `${ADD_POST}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };
        
        case `${DELETE_POST}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };

        case `${EDIT_POST}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };

        default: return state;
    }
};