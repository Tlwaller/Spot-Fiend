import React from 'react';
import './SpotList.css';
import {HashRouter, Link} from 'react-router-dom';

export default function SpotList() {
    return (
        <div>
            <h1>Spot List</h1>
            <HashRouter>
                <Link to='/spot'>
                    <button>
                        Visit
                    </button>
                </Link>
            </HashRouter>
        </div>
    )
}