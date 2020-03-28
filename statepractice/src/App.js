import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'purple',
      clickCounter: 0
    }
  }

  onChange = (e) => {
    this.setState({
      color: 'orange',
      clickCounter: this.state.clickCounter++
    })
    console.log('click counter ===>', this.state.clickCounter)
  }

  purple = false
  if toggle is off purple would Show 
  if toggle is on orange would show 
  orange = true 
  toggleButton() {
    if ()
  }

  render() {
    return (
      <div className='App'>
        <h1>Box Color Change</h1>
        <div className='colorBox' style={{backgroundColor: this.state.color}}
        onClick={this.onChange}
        >
        </div>
        <button>Click Me!</button>
      </div>
    )
  }
}