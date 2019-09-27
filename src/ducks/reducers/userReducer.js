import axios from 'axios';

const initialState = {
    userId: 0,
    username: ''
};

const GET_SESSION = 'GET_SESSION';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function getSession() {
    return {
        type: GET_SESSION,
        payload: axios.get('/auth/user')
    }
};

export function registerUser(newUser) {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', newUser)
    }
};

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', user)
    }
};

export function logoutUser() {
    axios.post('/auth/logout');
    return {
        type: LOGOUT_USER
    }
};

export default function reducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case `${GET_SESSION}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.id,
                username: payload.data.username
            };

        case `${REGISTER_USER}_FULFILLED`: 
            return {
                ...state,
                userId: payload.data.id,
                username: payload.data.username
            };

        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.id,
                username: payload.data.username
            };

        case LOGOUT_USER:
            return {
                id: 0,
                username: ''
            };
        
        default: return state;
    }
}