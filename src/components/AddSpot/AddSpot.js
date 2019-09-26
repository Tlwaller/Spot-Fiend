import React, {Component} from 'react';
import './AddSpot.css';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';

export default class AddSpot extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            address: '',
            description: ''
        }
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div id='post-spot-page'>
                <Nav/>
                <h1>New Spot</h1>
                <form id='add-spot-form'>
                    <input className='new-spot-input' type='text' placeholder='Title' name='title' onChange={this.handleInput}/>
                    <input className='new-spot-input' type='text' placeholder='Address' name='address' onChange={this.handleInput}/>
                    <input className='new-spot-input' type='text' name='description' placeholder='Description' onChange={this.handleInput}/>
                </form>
                <button className='submit-btn'>Send it!</button>
            </div>
        )
    }
}
