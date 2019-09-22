import React from 'react';
import './GuestLanding.css';
import {Link} from 'react-router-dom';

export default function GuestLanding() {
    return (
        <div id='guest-landing'>
            {/* <img className='mobileBG' src={mobileBG} alt='mobileBG'/> */}
            <h1 className='heading'>Welcome to Spot Fiend</h1>
            <div className='buttons'>
                <Link to='/login'>
                <button>Log In</button>
                </Link>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </div>
            
        </div>
    )
}
