import React from 'react';
import Tittle from './components/Tittle/Tittle';
import Info from './components/Info/Info';
import Contact from './components/Contact/Contact';
// import Background from './components/Background/Background';

import './App.scss';

function App() {
  return (
    <div className="app">
      {/* <Background /> */}
      <div className='content'>
      <Tittle />
      <Contact />
      <Info />
      </div>
    </div>
  );
}

export default App;
