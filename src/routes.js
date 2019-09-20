import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import Home from './components/Home/Home';
import GuestLanding from './components/GuestLanding/GuestLanding';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddSpot from './components/AddSpot/AddSpot';

export default (
    <Router>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/guest-landing' component={GuestLanding}/>
        <Route path='/login' component={Login}/>
        <Route path='/Register' component={Register}/>
        <Route path='/add-spot' component={AddSpot}/>
    </Switch>
    </Router>
)