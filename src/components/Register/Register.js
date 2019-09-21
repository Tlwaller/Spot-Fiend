import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <input 
                type='text' 
                placeholder='Username'/>
                <input 
                type='text' 
                placeholder='Password'/>
                <input 
                type='text' 
                placeholder='Email'/>
                <Link to='/'>
                    <input type='Submit'/>
                </Link>
            </form>
        </div>
    )
}
