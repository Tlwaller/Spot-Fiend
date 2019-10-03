import React from 'react';
import './About.css';
import GuestNav from '../GuestNav/GuestNav';

export default function About() {
    return (
        <div >
            <GuestNav/>
            <span id='about'>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque augue risus, viverra non consequat vel, tincidunt egestas ligula. Fusce efficitur sapien vel feugiat eleifend. Proin congue orci at sollicitudin faucibus. Phasellus semper metus a iaculis volutpat. Nulla at malesuada augue, eu gravida erat. Sed porttitor urna odio, lobortis placerat sapien finibus non. Vestibulum lectus mauris, tincidunt vel convallis eu, hendrerit in libero. Vivamus posuere finibus interdum. Duis non tincidunt dolor. Nulla cursus risus arcu, in tincidunt urna suscipit eget. Proin vitae bibendum lacus. Nunc risus ante, laoreet eu dolor nec, pulvinar hendrerit quam. Integer tempor varius ipsum ut dignissim. Suspendisse ante nunc, condimentum eget facilisis ut, mollis et magna. Nullam a malesuada ipsum.</p>
            </span>
        </div>
    )
}