import React, { Component } from 'react';
import {ThemeProvider, ThemeConsumer} from '../theme-context';

class ThemeSelect extends Component {
  render() {
    return (
      <ThemeConsumer>
        { ({theme, changeTheme}) => (
            <select value={theme} onChange={changeTheme}>
              <option value='light'>light</option>
              <option value='dark'>dark</option>
              <option value='coast'>coast</option>
            </select>)
          }
      </ThemeConsumer>
    )
  }
}

export default ThemeSelect;
