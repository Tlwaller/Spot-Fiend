import React, {useState} from 'react';
import './GuestLanding.css';
import {Link} from 'react-router-dom';
import ReactMapGL from 'react-map-gl';

export default function GuestLanding() {
    const [viewport, setViewPort] = useState({
        latitude: 45,
        longitude: -75,
        width: '70vw',
        height: '50vh',
        zoom: 10
    });

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
            
                <ReactMapGL
                className='map'
                {...viewport}
                mapboxApiAccessToken={`pk.eyJ1IjoidGx3YWxsZXIiLCJhIjoiY2swdmIxbW0xMHZyczNjbjB6aGIwNnI4YSJ9.2XmDkgEbIDfTwrmvxyzgxw`}
                mapStyle={`mapbox://styles/tlwaller/ck0vbxh2s49f01cqpxxpu0amc`}
                onViewportChange={(viewport) => {setViewPort(viewport)}}
                >
                    markers here
                </ReactMapGL>
        </div>
    )
}
