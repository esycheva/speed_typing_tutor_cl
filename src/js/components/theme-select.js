import React, { Component } from 'react';
import {ThemeProvider, ThemeConsumer} from '../theme-context';

class ThemeSelect extends Component {
  render() {
    return (
      <ThemeConsumer>
        { ({theme, changeTheme}) => (
            <select value={theme} onChange={changeTheme}>
              <option value='base'>base</option>
              <option value='desert'>desert</option>
              <option value='poppy'>poppy</option>
              <option value='flower'>flower</option>
              <option value='coast'>coast</option>
              <option value='tulip'>tulip</option>
            </select>)
          }
      </ThemeConsumer>
    )
  }
}

export default ThemeSelect;
