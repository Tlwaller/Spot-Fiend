import React from 'react';
import './Footer.css';
import {HashRouter, Link} from 'react-router-dom';

export default function Footer() {
    return (
        <HashRouter>
            <h1>______________</h1>
            <Link to='/about'>
                About
            </Link>
            <Link to='/contact'>
                Contact
            </Link>
        </HashRouter>
    )
}
