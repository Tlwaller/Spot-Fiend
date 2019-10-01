import React, {Component} from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {registerUser} from '../../ducks/reducers/userReducer';
import GuestNav from '../GuestNav/GuestNav';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            password2: '',
            email: '',
            pWstatus: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {username, password, email} = this.state;
        const {registerUser} = this.props;

        if(this.state.password === this.state.password2) {
            registerUser({username, password, email});
        }else {
            this.setState({pWstatus: 'Passwords do not match.'})
        }
        
    };

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        if (this.props.userId !== 0) {
            return <Redirect to='/Home'/>
        }
        return (
        <div id='register-page'>
            <GuestNav/>
            <form id='register-form' onSubmit={this.handleSubmit}>
                
                <Link to='/'>
                    <button className='back-btn'>‹Back</button>
                </Link>
                {this.state.pWstatus}
                    <div class='input'>
                    <input 
                    id='input-a'
                    className='register-input'
                    type='text'
                    name='username'
                    onChange={this.handleInput}/>
                    <label for='input-a'>{this.state.username ? '' : 'Username'}</label>
                    </div>
                    <div class='input'>
                    <input 
                    id='input-b'
                    className='register-input'
                    type='text' 
                    name='password'
                    onChange={this.handleInput}/>
                    <label for='input-b'>{this.state.password ? '' : 'Password'}</label>
                    </div>
                    <div class='input'>
                    <input
                    id='input-c'
                    className='register-input'
                    type='text'
                    name='password2'
                    onChange={this.handleInput}/>
                    <label for='input-c'>{this.state.password2 ? '' : 'Password Again'}</label>
                    </div>
                    <div class='input'>
                    <input 
                    id='input-d'
                    className='register-input'
                    type='text' 
                    name='email'
                    onChange={this.handleInput}/>
                    <label for='input-d'>{this.state.email ? '' : 'Email'}</label>
                    </div>
                    <button id='register' type='Submit'>Register</button>
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
    {registerUser})(Register);