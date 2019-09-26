import React, {Component} from 'react';
import './GuestNav.css';
import {HashRouter, Link} from 'react-router-dom';

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
                    src='https://png2.cleanpng.com/sh/a1df4078d84a2f39e9ae7073d5dc8eb0/L0KzQYm3VsA2N6NBhJH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tf1mdqYyeud9dHBxPbX2lB5td5JpRed8ZYKwebB7hgJnaZRqRd9uboWwgMTrTcVjOWc2S6YCM3azQIm5TsE0O2MAS6o6MUW1SIKAU8M5O2M6UKM3cH7q/kisspng-computer-icons-menu-button-download-user-interface-menu-psd-5b1613473f0082.1332938115281733832581.png'
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