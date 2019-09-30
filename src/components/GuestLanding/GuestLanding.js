import React, {useState} from 'react';
import './GuestLanding.css';
import {Link} from 'react-router-dom';

import GuestNav from '../GuestNav/GuestNav';

export default function GuestLanding() {
    

    return (
        <div id='guest-landing'>
            <GuestNav/>
            {/* <img className='mobileBG' src={mobileBG} alt='mobileBG'/> */}
            <h1 className='heading'>Welcome to Spot Fiend</h1>

            <div className='buttons-container'>
                <Link className='buttons' to='/login'>
                    <button>Log In</button>
                </Link>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </div>
            
        </div>
    )
}
