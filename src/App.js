import React from 'react';
import logo from './logo.svg';
import greenLantern from "./greenLantern.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={greenLantern} className="greenLanternLogo"/>


        <h2>Welcome to roohoo.dev</h2>
      </header>
    </div>
  );
}

export default App;
