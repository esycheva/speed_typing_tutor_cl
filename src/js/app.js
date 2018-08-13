import React, { Component } from 'react';
import { render } from 'react-dom';
import Theme  from './components/theme';

import { ThemeProvider, ThemeConsumer } from './theme-context';

import Header from './components/Header/header';

import '../css/style.scss'; // Import CSS

// base
// poppy-1
// poppy-2
// lemon-1
// lemon-2
// flower-2
// desert-1
// desert-2
// desert-3
// desert-4
// coast-1
// coast-2
// coast-3
// tulip-1
// field-1
// field-2

//render (<Theme name='field-2' />, document.getElementById('app'));

class Letter extends Component {
  render(){
    const letter = this.props.letter;
    const class_names = ['letter'];

    if (this.props.current) {
      class_names.push('current-letter');
    }

    if (this.props.pressed) {
      class_names.push('pressed-letter');
    }

    if (this.props.error) {
      class_names.push('error-letter');
    }
    return (
      <span className={class_names.join(' ')}>{letter}</span>
    );
  }
}

class Row extends Component {
  render() {
    const row = this.props.row;
    const letters = row.split('').map((letter, index) =>
      <Letter letter={letter} key={index} />
    );
    return (
      <div className="row">{letters}</div>
    );
  }
}

class Typing extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.props.onKeyPress(e.key);
  }

  render() {
    const template_letters = Array.from(this.props.text);
    const user_letters     = this.props.user_letters;

    const rows = template_letters.map((letter, index) =>
      <Letter letter={letter}
              current={user_letters.length == index}
              pressed={user_letters.length > index}
              error={user_letters[index] && user_letters[index] != letter}
              key={index} />

     //  <Row row={str} key={index} />
    );
    return (
      <div className="typing" tabIndex="0" onKeyPress={this.handleKeyPress} >
        {rows}
      </div>
    );
  }
}

class RestartTyping extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onRestartClick();
  }

  render() {
    return (
      <button className="restart-typing" onClick={this.handleClick} >
        Restart
      </button>
    );
  }
}

class TypingContainer extends Component {
  constructor(props){
    super(props);
    this.state = { user_letters: [] };

    this.onRestartClick = this.onRestartClick.bind(this);
    this.onKeyPress     = this.onKeyPress.bind(this);
  }

  onRestartClick() {
    this.setState((prevState) => (
      { user_letters: [] }
    ));
  }

  onKeyPress(key) {
    this.setState((prevState) => (
      { user_letters: [...prevState.user_letters, key] }
    ));
  }

  render() {
    const text = this.props.text;
    return (
      <div className="typing-container">
        <RestartTyping user_letters={this.state.user_letters}
                       onRestartClick={this.onRestartClick} />
        <Typing text={text} user_letters={this.state.user_letters}
                            onKeyPress={this.onKeyPress}/>
      </div>
    );
  }
}

class LessonProgressItem extends Component {
  render() {
    const num = this.props.num;
    return (<button className="lesson-progress-item">{num}</button>);
  }
}

class LessonProgress extends Component {
  render() {
    const amount = this.props.amount;
    let i = 0;
    const a = [];
    do {
      i += 1;
      a.push(i);
    } while(i < amount);
    const items = a.map((n, index) =>
      <LessonProgressItem num={n} key={index} />
    );
    return (
      <div className='lesson-progress'>
        {items}
      </div>
    );
  }
}

class LessonContainer extends Component {
  render() {
    const exercises = this.props.exercises;
    const exercise = exercises[0];
    return (
      <div className="lesson-container">
        <h2>{exercise.name}</h2>
        <TypingContainer text={exercise.text}/>
        <LessonProgress amount={exercises.length} />
      </div>
    );
  }
}

const EXERCISES = [
  {lesson_id: 1, name: 'Произвольный текст', text: 'Цветок засохший безуханный забытый в книге вижу я и вот уже мечтою странной'},
  {lesson_id: 1, name: 'Другой произвольный текст', text: 'Я вас любил чего же боле'}
];

class Page extends Component {
  render() {

    return (
      <ThemeConsumer>
        { ({theme}) => <div className={theme}><Header /></div> }
      </ThemeConsumer>
    );
  }
}



class App extends Component {
  constructor(props) {
    super(props);

    this.changeTheme = (e) => {
      console.log(e.target.value)
      // this.setState( prevState => ({
      //   theme:e.target.value
      // }));
    };

    this.state = { theme: 'dark', changeTheme: this.changeTheme };
  }

  render() {
    return (
      <ThemeProvider value={this.state} >
        <Page />
      </ThemeProvider>
    );
  }
}

render (<App />, document.getElementById('app'));

//render (<LessonContainer exercises={EXERCISES}/>, document.getElementById('app'));
