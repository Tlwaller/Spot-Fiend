import React from 'react';
import './SpotList.css';
import {HashRouter, Link} from 'react-router-dom';

export default function SpotList() {
    return (
        <div id='spot-list'>
            <h1>Spots</h1>
            <HashRouter>
                <Link to='/spot'>
                    <button id='go-to-spot'>Visit</button>
                </Link>
            </HashRouter>
        </div>
    )
}