import axios from 'axios';

const initialState = {
    posts: []
};

const UPDATE_POSTS = 'UPDATE_POSTS';
const UPDATE_USER_POSTS = 'UPDATE_USER_POSTS'
const ADD_POST = 'ADD_POST';

export function updatePosts(postId) {
    return {
        type:UPDATE_POSTS,
        payload: axios.get(`/api/spots/${postId}`)
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

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    console.log(payload)

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

        default: return state;
    }
};