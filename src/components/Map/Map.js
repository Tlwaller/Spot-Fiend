import React, {Component, useState} from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import {updatePosts} from '../../ducks/reducers/postsReducer';
import {connect} from 'react-redux';
import mapStyles from './MapStyles';
import axios from 'axios';

function Map(props) {
    const [selectedSpot, setSelectedSpot] = useState(null);

    return (
        <div>
            <GoogleMap 
            defaultZoom={9}
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
                        setSelectedSpot(spot);
                    }}
                    />
                })}

                <Marker position={props.userLocation} icon={{url: 'http://www.clker.com/cliparts/2/2/f/d/1207431991683287184skate%20boarding%20black.svg.hi.png', 
                scaledSize: new window.google.maps.Size(30, 30)}} />

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
                            <img src={selectedSpot.url} style={{height: '100px'}}/>
                            <h3>{selectedSpot.title}</h3>
                            <p>{selectedSpot.description}</p>
                            <h6>{selectedSpot.address}</h6>
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