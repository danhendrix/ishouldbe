import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log("hi from App")
  }
  render() {
    return (
      <Switch>
        <Route exact path='' component={Home}/>
      </Switch>
    )
  }
}