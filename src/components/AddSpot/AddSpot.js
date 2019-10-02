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
                    <form id='add-spot-form'>
                        <img src={this.state.url ? this.state.url : 'data:image/png;base64,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'}  className='add-photo' onClick ={()=>widget.open()}/>
                        <div class='input'>
                        <input id='input-a' className='new-spot-input' type='text' name='title' onChange={this.handleInput}/>
                        <label for='input-a'>{this.state.title ? '' : 'Title'}</label>
                        </div>
                        <div class='input'>
                        <input id='input-b' className='new-spot-input' type='text' name='latitude' onChange={this.handleInput}/>
                        <label for='input-b'>{this.state.latitude ? '' : 'Latitude'}</label>
                        </div>
                        <div class='input'>
                        <input id='input-c' className='new-spot-input' type='text' name='longitude' onChange={this.handleInput}/>
                        <label for='input-c'>{this.state.longitude ? '' : 'Longitude'}</label>
                        </div>
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