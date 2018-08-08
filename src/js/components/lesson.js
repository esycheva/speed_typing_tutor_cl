import React, { Component } from 'react';
import { render } from 'react-dom';
import Key from './key.js';
import Character from './character.js';


// import '../../css/lesson.scss'; // Import CSS

export default class Lesson extends Component {

  constructor(props) {
    super(props);
    this.t = ['a', 'b', 'c', ' ', 'c', 'b', 'a', 'a', 'a', 'a', 'a', 'c'];
    this.state = {
      lessonStatus: 'new', // 'new', 'done', 'learning'
    };
  }


  render () {
    return (
      <div className='lesson'>
        <h1 className='lesson-title'>{this.props.title}</h1>
        <button className='lesson-exercise-restart'>Restart</button>
        <div className='lesson-exercise-panel'>
          {this.t.map((value, index) =>
            <Character key={index} value={value} />
          )}
        </div>
        <div className='lesson-progress'></div>
        <div>
          <button className="active-element">Active</button>
          <button className="hover-element">Hover</button>
          <button className="disable-element">Disable</button>
        </div>
      </div>
    );
  }
};
