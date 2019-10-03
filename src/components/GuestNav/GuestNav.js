import React, {Component} from 'react';
import './GuestNav.css';
import {HashRouter, Link} from 'react-router-dom';
import hamburger from './hbgr.png';

export default class Nav extends Component{
    constructor() {
        super();
        this.state = {
            menuOpenStatus: 'drop-down'
        }
    }

    toggle = () => {
        if (this.state.menuOpenStatus === 'drop-down-close' || this.state.menuOpenStatus === 'drop-down') {
            this.setState({menuOpenStatus: 'drop-down-open'});
        }else if (this.state.menuOpenStatus === 'drop-down-open') {
            this.setState({menuOpenStatus: 'drop-down-close'});
        }
    }

    render() {
        return (
            <>
                <nav id='guest-nav'>
                    <HashRouter>
                        <Link className='title-link' to='/'>
                            <h1 id='title'>SPOT FIEND</h1>
                        </Link>
                        <ul className='menu'>
                                <li><Link className='nav-item' to='/login'>LOG IN</Link></li>
                                <li><Link className='nav-item' to='/register'>REGISTER</Link></li>
                        </ul>
                    </HashRouter>
                    
                    <img
                    className='hbgr hidden-by-default' onClick={this.toggle}
                    src={hamburger}
                    alt='menu'/>
                </nav>

                    <HashRouter>
                        <ul className={`hidden-by-default ${this.state.menuOpenStatus}`}>
                                <li><Link className='nav-item' to='/login'>LOG IN</Link></li>
                                <li><Link className='nav-item' to='/register'>REGISTER</Link></li>
                        </ul>
                    </HashRouter>
            </>
        )
    }
}