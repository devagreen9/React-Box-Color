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

  toggleColor(e) {

  }

  render() {
    return (
      <div className='App'>
        <h1>Box Color Change</h1>
        <div className='colorBox' style={{backgroundColor: this.state.color}}
        onClick={this.onChange}
        >
          <p>Click Me!</p>
        </div>
      </div>
    )
  }
}