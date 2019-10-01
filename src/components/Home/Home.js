import React, {useState, useEffect} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import SpotList from '../SpotList/SpotList';
import Nav from '../Nav/Nav';
import WrappedMap from '../Map/Map';

import {updatePosts} from '../../ducks/reducers/postsReducer';
import {connect} from 'react-redux';

function Home(props) {
    

    return (
        <div id='homepage'>
            <Nav/>
            <h1 id='main-title'>SPOT FIEND</h1>
            <Link to='/add-spot'>
                    <button className='add-spot'>New Spot</button>
                </Link>
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