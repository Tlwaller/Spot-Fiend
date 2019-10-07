import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import Home from './components/Home/Home';
import GuestLanding from './components/GuestLanding/GuestLanding';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddSpot from './components/AddSpot/AddSpot';
import MySpot from './components/MySpot/MySpot';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MySpotList from './components/MySpotList/MySpotList';

export default (
    <Router>
        <Switch>
            <Route exact path='/' component={GuestLanding}/>
            <Route path='/home' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/add-spot' component={AddSpot}/>
            <Route path='/my-spot' component={MySpot}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/my-spots' component={MySpotList}/>
        </Switch>
    </Router>
)