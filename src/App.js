import React from 'react';
import './App.css';
import Routes from './routes';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      {Routes}
    </div>
  );
}

export default App;
