import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, Switch, Route } from 'react-router-dom';
import { Projects } from './../Projects/Projects';
import { Contact } from './../Contact/Contact';
import { Home } from './../Home/Home';
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
        <Switch>
          <Route 
            exact path="/"
            component={Home}
          />
          <Route 
            exact path="/contact"
            component={Contact}
          />
          <Route 
            exact path="/projects" 
            component={Projects}
          />
        </Switch> 
      </div>
    );
  }
}

export default App;
