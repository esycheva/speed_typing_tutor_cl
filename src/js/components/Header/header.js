import React, { Component } from 'react';
import ThemeSelect from '../theme-select';

class Header extends Component {
  render () {
    return (
      <header>
        <h1>Touch-typing tutor</h1>
        <ThemeSelect />
      </header>
    )
  }
}

export default Header;
