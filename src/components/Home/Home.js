import React, {useState, useEffect} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import SpotList from '../SpotList/SpotList';
import Nav from '../Nav/Nav';

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