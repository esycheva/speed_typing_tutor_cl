import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.scss'; // Import CSS

export default class Hello extends Component {
  render () {
    return (
      <div>Hello from react</div>
    );
  }
}

render (<Hello />, document.getElementById('app'));
