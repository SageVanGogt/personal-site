import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <h1 className="App-title">Sage Vogt</h1>
        </header>
        <nav className="App-nav"> 
          <ul className="App-nav--list">
            <li>contact me</li>
            <li>projects</li>
            <li>resume</li>
          </ul>
        </nav>


      </div>
    );
  }
}

export default App;