import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Content from './components/Content';
import HeroBanner from './components/HeroBanner';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App container">
      <NavBar />
      <Content />
      <HeroBanner />
    </div>
  );
}

export default App;
