import React from 'react';
import logo from './logo.svg';
import './App.css';

import Facebook from './components/facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to GetVolvd</h1>
        <p>
          To get started, please log in with Facebook.
        </p>
        <Facebook />

      <p></p>
      <p></p>
      <p></p>

 For information on our use of your Facebook data click
        <a
          className="App-link"
          href="./privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          >
here        </a>
      </header>
    </div>
  );
}

export default App;
