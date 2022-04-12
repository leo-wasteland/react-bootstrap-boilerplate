import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <img
              src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
              className="App-logo"
            />
          </div>
          <div>
            <img
              src="https://axios-http.com/assets/logo.svg"
              style={{ paddingTop: '20%', paddingLeft: '25px' }}
            />
          </div>
        </div>
        <p>React TypeScript Biolerplate ✨</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
