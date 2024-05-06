import React, { useState, useEffect } from 'react';
import Title from "./components/Title/Title";
import Info from "./components/Info/Info";
import Contact from "./components/Contact/Contact";
import RotateDevice from "./components/RotateDevice/RotateDevice";
import LoaderScreen from "./components/LoaderScreen/LoaderScreen";

import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    fetch('https://mariiakoikonova.com/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setIsContentVisible(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <LoaderScreen />
      ) : (
        <>
          <RotateDevice />
          <div className={`content ${isContentVisible ? 'visible' : ''}`}>
            <Title />
            <Info />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
