import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './home';

import '../scss/app.scss';

class App extends Component {
  name = 'App';

  render() {
    return (
      <div id='app' tabIndex='-1'>
        <div className='statusbar-placeholder' />
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
