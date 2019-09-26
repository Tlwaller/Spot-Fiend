import React, {Component} from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {registerUser} from '../../ducks/reducers/userReducer';

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
        <form id='register-form' onSubmit={this.handleSubmit}>
            <Link to='/'>
                <button className='back-btn'>‹Back</button>
            </Link>
            <h1>Register</h1>
            {this.state.pWstatus}
                <input 
                className='register-input'
                type='text'
                placeholder='Username'
                name='username'
                onChange={this.handleInput}/>
                <input 
                className='register-input'
                type='text' 
                placeholder='Password'
                name='password'
                onChange={this.handleInput}/>
                <input
                className='register-input'
                type='text'
                placeholder='Password again'
                name='password2'
                onChange={this.handleInput}/>
                <input 
                className='register-input'
                type='text' 
                placeholder='Email'
                name='email'
                onChange={this.handleInput}/>
                <button type='submit' className='register-input' type='Submit'>Register</button>
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
    {registerUser})(Register);