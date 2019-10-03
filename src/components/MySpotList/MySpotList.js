import React, {Component} from 'react';
import './MySpotList.css';
import Nav from '../Nav/Nav';
import MySpot from '../MySpot/MySpot';
import {connect} from 'react-redux';
import {updateUserPosts} from '../../ducks/reducers/postsReducer'
import {Link} from 'react-router-dom';

class MySpotList extends Component {

    componentDidMount() {
        this.props.updateUserPosts();
    }

    render() {
        const postsMapped = this.props.posts.map((post, i) => {
            return <MySpot key={i} post={post} i={i}/>
        })

        if (postsMapped.length === 0) {
            return (
                <div id='my-spots-page'>
                <Nav/>
                <h1>My Spots</h1>
                <div className='my-posts-container'>
                    <h2>No spots to show, get out there and find some!</h2>
                    <Link to='/add-spot'>
                        <button className='add-spot'>New Spot</button>
                    </Link>
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