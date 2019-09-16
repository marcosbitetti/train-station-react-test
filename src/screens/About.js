import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg';

function About() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          piu
        </p>
        <Link to="/">Home</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default About;
