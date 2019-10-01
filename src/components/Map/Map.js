import React, {Component, useState} from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import {updatePosts} from '../../ducks/reducers/postsReducer';
import {connect} from 'react-redux';
import mapStyles from './MapStyles';

function Map(props) {
    const [selectedSpot, setSelectedSpot] = useState(null);

    return (
        <div>
            <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat: 32.776665, lng: -96.796989}}
            defaultOptions={{styles: mapStyles}}
            >
                {props.spots.map(spot => {
                    const latitude = parseFloat(spot.latitude);
                    const longitude = parseFloat(spot.longitude);
                    return <Marker 
                    key={spot.spot_id} 
                    position={{
                        lat: (latitude),
                        lng: (longitude)
                    }}
                    onClick={() => {
                        console.log(spot)
                        setSelectedSpot(spot);
                    }}
                    />
                })}

                {selectedSpot && (
                    <InfoWindow 
                    position={{
                        lat: (parseFloat(selectedSpot.latitude)),
                        lng: (parseFloat(selectedSpot.longitude))
                    }}
                    onCloseClick={() => {
                        setSelectedSpot(null);
                    }}
                    >
                        <div>
                        <h3>{selectedSpot.title}</h3>
                        <p>{selectedSpot.description}</p>
                        </div>
                    </InfoWindow>
                )}
        </GoogleMap>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        spots: reduxState.postsReducer.posts
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default connect(mapStateToProps, {updatePosts})(WrappedMap);