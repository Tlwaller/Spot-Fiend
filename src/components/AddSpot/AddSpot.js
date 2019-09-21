import React from 'react';
import './AddSpot.css';
import {Link} from 'react-router-dom';

export default function AddSpot() {
    return (
        <div>
            <h1>AddSpot</h1>
            <Link to='/my-spot'>
                <button>
                    Submit
                </button>
            </Link>
        </div>
    )
}
