import React from 'react';
import './App.css';
import Routes from './routes';
// import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      {Routes}
      <Footer/>
    </div>
  );
}

export default App;
