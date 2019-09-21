import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import SpotList from '../SpotList/SpotList';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/add-spot'>
                <button>
                    New Spot
                </button>
            </Link>
            <SpotList/>
        </div>
    )
}
