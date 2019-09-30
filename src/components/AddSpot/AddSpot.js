import React, {Component} from 'react';
import './AddSpot.css';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {addPost} from '../../ducks/reducers/postsReducer'
import Axios from 'axios';

class AddSpot extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            address: '',
            description: '',
            sent: 0,
            url: ''
        }
    }

    handleSubmit = e => {
        const {title, address, description, url} = this.state;
        const {addPost} = this.props;
        addPost({title, address, description, url}).then(this.setState({sent: 1}));
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    checkUploadResult = (error,resultEvent) => {
            if (resultEvent.event === "success") {
                console.log("Picture uploaded successfully")
                console.log(resultEvent.info.url);
                this.setState({url: resultEvent.info.url});
            }
        };

    render() {
        if (this.state.sent === 1) {
            return <Redirect to='/my-spots'/>
        }

        const widget = window.cloudinary.createUploadWidget(
            {
            cloudName: "spot-fiend",
            uploadPreset: "spot-fiend",
            sources: ["local", "url", "dropbox", "facebook", "instagram"]
            },
            (error, result) => {
            this.checkUploadResult(error, result);
            })
        
        return (
            <div id='post-spot-page'>
                <Nav/>
                <h1>New Spot</h1>
                <form id='add-spot-form'>
                    <button className='add-photo' onClick ={()=>widget.open()}>add pic</button>
                    <input className='new-spot-input' type='text' placeholder='Title' name='title' onChange={this.handleInput}/>
                    <input className='new-spot-input' type='text' placeholder='Address' name='address' onChange={this.handleInput}/>
                    <textarea className='desc-input' type='text' name='description' placeholder='Description' onChange={this.handleInput}/>
                    <button className='submit-btn' onClick={this.handleSubmit}>Send it!</button>
                </form>
                <div id='bg'/>
                
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