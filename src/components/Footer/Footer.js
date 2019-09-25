import React from 'react';
import './Footer.css'
import {HashRouter, Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div id='footer'>
        <HashRouter>
            <Link to='/about'>
                <h3 className='footer-item'>About</h3>
            </Link>
            <Link to='/contact'>
                <h3 className='footer-item'>Contact</h3>
            </Link>
        </HashRouter>
        <span id='small-txt'>In Loving Memory Of Mimi</span>
        </div>
    )
}
