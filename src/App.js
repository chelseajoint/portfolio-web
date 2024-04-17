import React from 'react';
import Title from './components/Title/Title';
import Info from './components/Info/Info';
import Contact from './components/Contact/Contact';
// import Background from './components/Background/Background';

import './App.scss';

function App() {
  return (
    <div className="app">
      {/* <Background /> */}
      <div className='content'>
      <Title />
      <Info />
      <Contact />
      </div>
    </div>
  );
}

export default App;
