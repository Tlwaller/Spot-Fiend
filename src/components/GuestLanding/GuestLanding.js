import React from 'react';
import './GuestLanding.css';
import {Link} from 'react-router-dom';

export default function GuestLanding() {
    return (
        <div>
            <h1>Guest Landing</h1>
            <Link to='/login'>
                <button>
                    Log In
                </button>
            </Link>
            <Link to='/register'>
                <button>
                    Register
                </button>
            </Link>
        </div>
    )
}
