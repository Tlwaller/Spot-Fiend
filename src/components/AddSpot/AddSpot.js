import React, {Component} from 'react';
import './AddSpot.css';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {addPost} from '../../ducks/reducers/postsReducer'
import {Link} from 'react-router-dom';

class AddSpot extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            long: 0,
            latitude: 0,
            longitude: 0,
            description: '',
            sent: 0,
            url: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {title, latitude, longitude, description, url} = this.state;
        const {addPost} = this.props;

        addPost({title, latitude, longitude, description, url}).then(this.setState({sent: 1}));
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
                    <input className='new-spot-input' type='text' placeholder='latitude' name='latitude' onChange={this.handleInput}/>
                    <input className='new-spot-input' type='text' placeholder='longitude' name='longitude' onChange={this.handleInput}/>
                    <h4>
                        Check out <a href="https://www.latlong.net" target="_blank">latlong.net</a> for coordinates
                    </h4>
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