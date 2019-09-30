import React, {useState, useEffect} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import SpotList from '../SpotList/SpotList';
import Nav from '../Nav/Nav';
import ReactMapGL, {GeolocateControl} from 'react-map-gl';
import {updatePosts} from '../../ducks/reducers/postsReducer';
import {connect} from 'react-redux';

function Home(props) {
    const [viewport, setViewPort] = useState({
        latitude: 45,
        longitude: -75,
        width: '40vw',
        height: '40vh',
        zoom: 0
    });

    // const [setSelectedSpot] = useState(null);

    useEffect(() => {
        const listener = e => {
            if(e.key === "Escape") {
                // setSelectedSpot(null);
            }
        }
        window.addEventListener("keydown", listener)
    }, [])

    return (
        <div id='homepage'>
            <Nav/>
            <h1 id='main-title'>SPOT FIEND</h1>
            <Link to='/add-spot'>
                    <button className='add-spot'>New Spot</button>
                </Link>
                <ReactMapGL
                    className='map'
                    {...viewport}
                    mapboxApiAccessToken={'pk.eyJ1IjoidGx3YWxsZXIiLCJhIjoiY2swdmIxbW0xMHZyczNjbjB6aGIwNnI4YSJ9.2XmDkgEbIDfTwrmvxyzgxw'}
                    mapStyle={`mapbox://styles/tlwaller/ck0vbxh2s49f01cqpxxpu0amc`}
                    onViewportChange={(viewport) => {setViewPort(viewport)}}
                    >
                        <GeolocateControl 
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                        />
                    </ReactMapGL>
                
            <SpotList/>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        posts: reduxState.postsReducer.posts
    }
}

export default connect(mapStateToProps, {updatePosts})(Home);