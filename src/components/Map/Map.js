import React, { Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import {updatePosts} from '../../ducks/reducers/postsReducer';
import {connect} from 'react-redux';

class Map extends Component {
    componentDidMount() {
        this.props.updatePosts()
    }

    render() {
        return (
            <div>
                <GoogleMap 
                defaultZoom={10}
                defaultCenter={{lat: 32.776665, lng: -96.796989}}
                >
                    {this.props.spots.map(spot => {
                        const latitude = parseFloat(spot.latitude);
                        const longitude = parseFloat(spot.longitude);
                        return <Marker 
                        key={spot.spot_id} 
                        position={{
                            lat: (latitude),
                            lng: (longitude)
                        }}
                        />
                    })}
            </GoogleMap>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        spots: reduxState.postsReducer.posts
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default connect(mapStateToProps, {updatePosts})(WrappedMap);