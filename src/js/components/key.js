import React, { Component } from 'react';
import render from 'react-dom';

export default class Key extends Component {
  render () {
    return (
      <div className='key'>{this.props.value}</div>
    );
  };
};
