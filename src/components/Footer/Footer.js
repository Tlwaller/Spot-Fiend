import React from 'react';
import './Footer.css';
import {HashRouter, Link} from 'react-router-dom';

export default function Footer() {
    return (
        <HashRouter>
            <Link to='/about'>
                About
            </Link>
            <Link to='/contact'>
                Contact
            </Link>
            <h1>Footer</h1>
        </HashRouter>
    )
}
