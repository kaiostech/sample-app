import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
  name = 'Home';

  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);
    this.element.focus();
  }

  onKeyDown(evt) {
    const target = evt.target;
    const key = evt.key;

    switch(key) {
      case 'Enter':
        console.log('Enter');
        break;
      case 'SoftRight':
        break;
      case 'SoftLeft':
        break;
    }
  }

  onFocus(evt) {
    var btns = this.element.getElementsByClassName('button');
    // foucs on the first button
    btns[0].focus();
  }

  render() {
    return (
      <div id="home" tabIndex="-1" onKeyDown={(e) => this.onKeyDown(e)} onFocus={(e) => this.onFocus(e)}>
        <h1>Hello World</h1>
        <div className="button" tabIndex="-1">Button</div>
      </div>
    );
  }

}
