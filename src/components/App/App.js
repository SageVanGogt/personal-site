import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './App.css';


class App extends Component {

  showSettings (event) {
    event.preventDefault();
  
  }

  render() {
    return (
      <div className="App">
        <Menu 
          right
          pageWrapId={"page-wrap"} 
          outerContainerId={"App"}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <section id="page-wrap">
          <header className="App-header">
            <h1 className="App-name">Sage L. Vogt</h1>
            <h1 className="App-job">Software Developer</h1>
          </header>
          <nav className="App-nav">
            <ul className="App-nav--list">
              <li><a>contact me</a></li>
              <li><a>projects</a></li>
              <li><a>resume</a></li>
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default App;
