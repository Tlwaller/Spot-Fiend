import React, {Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../ducks/reducers/userReducer';
import GuestNav from '../GuestNav/GuestNav';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    };

    handleSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state;
        const {loginUser} = this.props;

        loginUser({username, password})
    };

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        if (this.props.userId !== 0) {
            return <Redirect to='/Home'/>
        }
        return (
            <div id='login-page'>
                <GuestNav/>
                <form id='login-form'>
                    
                    <div class='input'>
                    <input id='input-a'
                    className='login-input'
                    type='text'
                    name='username'
                    onChange={this.handleInput}/>
                    <label for='input-a'>{this.state.username ? '' : 'Username'}</label>
                    </div>
                    <div class='input'>
                    <input id='input-b'
                    className='login-input'
                    type='password' 
                    name='password'
                    onChange={this.handleInput}/>
                    <label for='input-b'>{this.state.password ? '' : 'Password'}</label>
                    </div>

                    <button type='submit' onClick={this.handleSubmit} id='login'>Log In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId
    }
}

export default connect(mapStateToProps,
    {loginUser})(Login);