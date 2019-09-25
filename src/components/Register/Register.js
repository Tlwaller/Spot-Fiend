import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <form id='register-form'>
            <Link to='/'>
                <button className='back-btn'>‹Back</button>
            </Link>
            <h1>Register</h1>
                <input 
                className='register-input'
                type='text' 
                placeholder='Username'/>
                <input 
                className='register-input'
                type='text' 
                placeholder='Password'/>
                <input 
                className='register-input'
                type='text' 
                placeholder='Email'/>
                <Link to='/'>
                    <input className='register-input' type='Submit'/>
                </Link>
            </form>
    )
}
