import React, {Component} from 'react';
import './AddSpot.css';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {addPost} from '../../ducks/reducers/postsReducer'

class AddSpot extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            address: '',
            description: ''
        }
    }

    handleSubmit = e => {
        const {title, address, description} = this.state;
        const {addPost} = this.props;
        addPost({title, address, description});
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
                <button className='submit-btn' onClick={this.handleSubmit}>Send it!</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        postId: reduxState.postsReducer.postId
    }
}

export default connect(mapStateToProps,
    {addPost})(AddSpot);