import React, {useState} from 'react';
import './GuestLanding.css';
import {Link} from 'react-router-dom';
import WrappedMap from '../Map/Map';
import GuestNav from '../GuestNav/GuestNav';
require('dotenv').config();

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

            <div style={{width: '50vw', height: '40vh'}}>
                <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLE_KEY
                }`}
                loadingElement={<div style={{height: '40vh'}}/>}
                containerElement={<div style={{height: '40vh'}}/>}
                mapElement={<div style={{height: '40vh'}}/>}
                />
            </div>
            
        </div>
    )
}
