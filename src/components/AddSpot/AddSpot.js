import React from 'react';
import './AddSpot.css';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';

export default function AddSpot() {
    return (
        <div id='post-spot-page'>
            <Nav/>
            <h1>AddSpot</h1>
            <Link to='/my-spot'>
                <button className='submit-btn'>Submit</button>
            </Link>
        </div>
    )
}
