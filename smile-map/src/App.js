import React from 'react';
import './App.css';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="Map-Container">

        <Map className="App-Map" alt="smile-map"/>
        </div>
        <p>
          Hi Hi . Map Goes Here ^^^
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smile Inc =) 
        </a>
      </header>
    </div>
  );
}

export default App;
