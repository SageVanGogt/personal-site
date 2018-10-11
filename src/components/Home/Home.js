import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="home-container">
    <section id="page-wrap">
      <header className="App-header">
        <h1 className="App-name">Sage L. Vogt</h1>
        <h1 className="App-job">Software Developer</h1>
      </header>
      <nav className="App-nav">
        <ul className="App-nav--list">
          <li><Link to="/contact">contact me</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/resume">resume</Link></li>
        </ul>
      </nav>
    </section>
  </div>
);