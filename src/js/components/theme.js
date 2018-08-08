import React from 'react';

import '../../css/theme.scss'; // Import CSS

const ThemeButtons  = (props) => {
  const elem = 'button' + ' ' + 'button-' + props.type + ' ' + 'button-';

  return(
    <div>
      <button className={ elem + 'active' }>Active</button>
      <button className={ elem + 'hover' }>Hover</button>
      <button className={ elem + 'disabled' }>Disabled</button>
    </div>
  );
};

const Theme = (props) => {
  return (
    <div className={ 'theme' + ' theme-' + props.name }>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <ThemeButtons name={props.name} type="primary" />
      <ThemeButtons name={props.name} type="secondary" />
    </div>
  );
};

export default Theme;
