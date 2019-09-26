import React, {Component} from 'react';
import './MySpotList.css';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {updateUserPosts} from '../../ducks/reducers/postsReducer'

class MySpotList extends Component {
    componentDidMount() {
        this.props.updateUserPosts();
    }

    render() {
        const postsMapped = this.props.posts.map((post, i) => {
            return (
                <div key={i} className='my-post'>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <h5>{post.address}</h5>
                    {/* <h6>{post.user_id}</h6> */}

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

export default connect(mapStateToProps, {updateUserPosts})(MySpotList);