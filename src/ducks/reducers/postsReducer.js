import axios from 'axios';

const initialState = {
    posts: []
};

const UPDATE_POSTS = 'UPDATE_POSTS';
const ADD_POST = 'ADD_POST';

export function updatePosts(postId) {
    return {
        type:UPDATE_POSTS,
        payload: axios.get(`/api/spots/${postId}`)
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

        case `${ADD_POST}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };

        default: return state;
    }
};