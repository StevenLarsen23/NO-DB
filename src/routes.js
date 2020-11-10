import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header'
import MyGames from './components/MyGames';
import Games from './components/Games';

export default (
    <Switch>
        <Route exact path='/' component={Header}/> 
        <Route path='/games' component={Games}/> 
        <Route path='/mygames' component={MyGames}/> 
    </Switch>
)