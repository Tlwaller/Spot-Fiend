import React, {Component} from 'react';
import './SpotList.css';
import {updatePosts} from '../../ducks/reducers/postsReducer';
import {connect} from 'react-redux';

class SpotList extends Component {
    componentDidMount() {
        this.props.updatePosts();
    }
    render() {
        const postsMapped = this.props.posts.map((post, i) => {
            return (
                <div key={i} className='post-container'>
                    <img className='post-img' src={post.url} alt=''/> 
                    <div  className='post'>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h5>{post.address}</h5>
                    </div>
                    
                </div>
            )
        })

        return (
            <div id='spot-list'>
                {postsMapped}
            </div>
        )
    }
    
}

const mapStateToProps = reduxState => {
    return {
        posts: reduxState.postsReducer.posts
    }
}

export default connect(mapStateToProps, {updatePosts})(SpotList);