import React from 'react';

import '../../css/character.scss'; // Import CSS

const Character = (props) => {
  const class_names = ["character"];
  if(props.muted) { class_names.push("character-muted") }
  if(props.error) { class_names.push("character-error") }
  if(props.pointer) { class_name.push("character-pointer") }

  return (
    <span className={class_names.join(' ')}>{props.value}</span>
  );
};

export default Character;
