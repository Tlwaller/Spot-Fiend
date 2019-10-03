import {connect} from 'react-redux';
import {updateUserPosts, deletePost, editPost} from '../../ducks/reducers/postsReducer'
import React, { Component } from 'react'
import './MySpot.css';
import axios from 'axios';

class MySpot extends Component {
    constructor() {
        super();
        this.state = {
                title: '',
                address: '',
                latitude: 0,
                longitude: 0,
                description: '',
                editing: false
        }
    }

    componentDidMount() {
        this.props.updateUserPosts();
    }

    handleTitle = e => {
        this.setState({title: e.target.value})
    }

    handleDelete = (spot_id) => {
        this.props.deletePost(spot_id);
    }

    handleEdit = async(spot_id) => {
        var property;
        for (property in this.state) {
            if(this.state[property] === '') {
                continue;
            }
        }
        await console.log(this.state.address);
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address},+CA&key=AIzaSyBwT3Ed-0Ekc7tkjNUKFWEdsb8C3qek8_4`)
        .then((response) => this.setState(
            {
                latitude: (response.data.results[0].geometry.location.lat),
                longitude: (response.data.results[0].geometry.location.lng)
            }
        ));
        const {title, address, latitude, longitude, description} = this.state;
        this.props.editPost({spot_id, title, address, latitude, longitude, description});
    }

    toggleEdit = () => {
        if(this.state.editing === false){
            this.setState({editing: true})
        } else this.setState({editing: false})
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {post, i} = this.props;
            return (
                <div key={i} className='my-post'>
                    <div className='photo-container'>
                        <img className='my-spot-photo' src={post.url} alt='spot photo'/>
                    </div>
                    <div className='my-post-item-container'>
                        <h2 className='my-post-item'>{post.title}</h2>
                        <p className='my-post-item'>{post.description}</p>
                        <h5 className='my-post-item'>{post.address}</h5>
                        <div className='mypost-btn-container'>
                            <img src='https://www.shareicon.net/data/128x128/2016/09/05/825547_document_512x512.png'
                            onClick={this.toggleEdit}
                            className='toggle-edit'
                            alt='Edit'/>
                            <img src='https://www.shareicon.net/data/128x128/2016/09/05/825117_delete_512x512.png'
                            className='delet-btn'
                            onClick={() => this.handleDelete(post.spot_id)}
                            alt='Remove'/>
                    </div>
                    </div>
                        

                    

                    <form className='edit-post-form' style={this.state.editing? {display: 'flex'} : {display: 'none'}}>
                        <input
                        className='edit-post-input'
                            type='text'
                            placeholder='edit title'
                            name='title'
                            onChange={this.handleInput}
                        />
                        <input
                        className='edit-post-input'
                            type='text'
                            placeholder='edit address'
                            name='address'
                            onChange={this.handleInput}
                        />

                        <input
                        className='edit-post-input'
                            type='text'
                            placeholder='edit description'
                            name='description'
                            onChange={this.handleInput}
                        />
                        
                            <button
                                className='edit-btn'
                                onClick={() => this.handleEdit(post.spot_id)}
                            >Submit</button>
                    </form>
                </div>
            )
    }
}

const mapStateToProps = reduxState => {
    return {
        posts: reduxState.postsReducer.posts,
        userId: reduxState.userReducer.userId
    }
}

export default connect(mapStateToProps, {updateUserPosts, deletePost, editPost})(MySpot);