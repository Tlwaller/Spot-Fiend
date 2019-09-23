import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <form id='login-form'>
            <input className='login-input'
            type='text' 
            placeholder='Username'/>
            <input className='login-input'
            type='text' 
            placeholder='Password'/>
            <input className='login-input'
            type='text' 
            placeholder='Email'/>
            <Link to='/'>
                <input type='Log in' value='Log-In' className='login-input'/>
            </Link>
        </form>
    )
}
