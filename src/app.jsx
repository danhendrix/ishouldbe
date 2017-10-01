import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import UserHistory from './components/userhistory.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/history' component={UserHistory} />
      </Switch>
    )
  }
}