import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('app'));

