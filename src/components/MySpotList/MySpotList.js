import React, {Component} from 'react';
import './MySpotList.css';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {updateUserPosts, deletePost, editPost} from '../../ducks/reducers/postsReducer'

class MySpotList extends Component {
    constructor() {
        super();
        this.state = {
                title: '',
                address: '',
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

    handleEdit = (spot_id) => {
        const {title, address, description} = this.state;
        console.log("myspotlist state: " + spot_id, title, address, description)
        this.props.editPost({spot_id, title, address, description})
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
        const postsMapped = this.props.posts.map((post, i) => {
            return (
                <div key={i} className='my-post'>
                    <div className='my-post-item-container'>
                        <h2 className='my-post-item'>{post.title}</h2>
                        <p className='my-post-item'>{post.description}</p>
                        <h5 className='my-post-item'>{post.address}</h5>
                    </div>

                    <button onClick={this.toggleEdit} className='toggle-edit'>{this.state.editing? 'Back' : 'Edit'}</button>

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
                    
                    

                    <button className='delet-btn'
                        onClick={() => this.handleDelete(post.spot_id)}
                    >Remove</button> 
                </div>
            )
        })

        if(postsMapped.length === 0) {
            return (
                <div id='my-spots-page'>
                <Nav/>
                <h1>My Spots</h1>
                <div className='my-posts-container'>
                    <h2>No spots to show, get out there and find some!</h2>
                </div>
            </div>
            )
        }
        return (
            <div id='my-spots-page'>
                <Nav/>
                <h1>My Spots</h1>
                <div className='my-posts-container'>
                    {postsMapped}
                </div>
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

export default connect(mapStateToProps, {updateUserPosts, deletePost, editPost})(MySpotList);