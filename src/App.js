import React from 'react';
import parte from './parte.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={parte} className="App-logo" alt="logo" />
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <p>
          🎶 🎵 Parte after Parte 😂🤣
        </p>
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
  );
}

export default App;
