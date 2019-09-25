// import React, { Component } from 'react'
// import {storage} from '../../firebase/index'

// export default class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: null,
//             url: ''
//         }
//     }

//     handleUpload = () => {
//         const {image} = this.state;
//         const uploadTask = storage.ref(`images/${image.name}`).put(image);
//         uploadTask.on('state_changed', 
//         (snapshot) => {
            
//         }, 
//         (error) => {
//             console.log(error)
//         }, 
//         () => {
//             storage.ref('images').child('image.name').child(image.name).getDownloadURL().then(async url => {
//                 this.setState({url})
//             })
//         }
//         )
//     }

//     handleChange = e => {
//         if(e.target.files[0]) {
//             const image = e.target.files[0];
//             this.setState(() => ({image}));
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <input type='file' onChange={this.handleChange}/>
//                     <button onClick={this.handleUpload}>Upload</button>
//                     <br/>
//                     <img src={this.state.url || 'https://via.placeholder.com/350x150'}/>
//                 </div>
//             </div>
//         )
//     }
// }
