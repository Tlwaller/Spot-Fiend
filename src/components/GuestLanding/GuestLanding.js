import { Marker } from 'react-google-maps';
import React, {Component} from 'react';
import './GuestLanding.css';
import {Link} from 'react-router-dom';
import WrappedMap from '../Map/Map';
import GuestNav from '../GuestNav/GuestNav';
require('dotenv').config();

export default class GuestLanding extends Component {
    render() {
        return (
            <div id='guest-landing'>
                <GuestNav/>
                <div id='heading-container'>
                    <h1 className='heading'>Welcome to Spot Fiend</h1>
                </div>
                <div className='buttons-container'>
                    <Link className='buttons' to='/login'>
                        <button>Log In</button>
                    </Link>
                    <Link className='buttons' to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        )
    }
}
