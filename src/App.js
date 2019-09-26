import React from 'react';
import './App.css';
import Routes from './routes';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
  <div className="App">
    {Routes}
    <Footer/>
  </div>
  );
}