import React, {Component} from 'react';
import './MySpotList.css';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {updateUserPosts, deletePost} from '../../ducks/reducers/postsReducer'

class MySpotList extends Component {
    componentDidMount() {
        this.props.updateUserPosts();
    }

    handleDelete = (spot_id) => {
        this.props.deletePost(spot_id);
    }

    render() {
        const postsMapped = this.props.posts.map((post, i) => {
            return (
                
                <div key={i} className='my-post'>
                    <div className='post-items-container'>
                        <h2 className='my-post-item'>{post.title}</h2>
                        <p className='my-post-item'>{post.description}</p>
                        <h5 className='my-post-item'>{post.address}</h5>
                    </div>
                    
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

export default connect(mapStateToProps, {updateUserPosts, deletePost})(MySpotList);