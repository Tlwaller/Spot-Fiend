import React, {useState} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import SpotList from '../SpotList/SpotList';
import Nav from '../Nav/Nav';
import ReactMapGL from 'react-map-gl';
require('dotenv').config();

export default function Home() {
    const [viewport, setViewPort] = useState({
        latitude: 45,
        longitude: -75,
        width: '40vw',
        height: '40vh',
        zoom: 0
    });

    return (
        <div id='homepage'>
            <Nav/>
            <h1 id='main-title'>SPOT FIEND</h1>
            <ReactMapGL
                className='map'
                {...viewport}
                mapboxApiAccessToken={'pk.eyJ1IjoidGx3YWxsZXIiLCJhIjoiY2swdmIxbW0xMHZyczNjbjB6aGIwNnI4YSJ9.2XmDkgEbIDfTwrmvxyzgxw'}
                mapStyle={`mapbox://styles/tlwaller/ck0vbxh2s49f01cqpxxpu0amc`}
                onViewportChange={(viewport) => {setViewPort(viewport)}}
                >
                    markers here
                </ReactMapGL>
                <Link to='/add-spot'>
                    <button className='add-spot'>New Spot</button>
                </Link>
            <SpotList/>
        </div>
    )
}
