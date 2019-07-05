import React from 'react';
import './App.scss';
import MazeGenerator from './modules/MazeGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MazeGenerator />
      </header>
    </div>
  );
}

export default App;
