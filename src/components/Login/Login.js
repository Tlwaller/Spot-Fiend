import React, {Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../ducks/reducers/userReducer';

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
            <form id='login-form'>
                <Link to='/'>
                    <button className='back-btn'>‹Back</button>
                </Link>
                <h1>Log In</h1>
                <input className='login-input'
                type='text'
                placeholder='Username'
                name='username'
                onChange={this.handleInput}/>
                <input className='login-input'
                type='text' 
                placeholder='Password'
                name='password'
                onChange={this.handleInput}/>
                <button type='submit' onClick={this.handleSubmit} className='login-input'>Log In</button>
            </form>
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