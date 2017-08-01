import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../scss/app.scss';

class App extends Component {
  name = 'App';

  componentDidMount() {
  }

  render() {
    return (
      <div id='app' tabIndex='-1'>
        <div className='statusbar-placeholder' />
        <h1>Hello World!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
