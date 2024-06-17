import React, { useState, useEffect } from 'react';
import Title from "./components/Title/Title";
import Info from "./components/Info/Info";
import Contact from "./components/Contact/Contact";
import RotateDevice from "./components/RotateDevice/RotateDevice";
import LoaderScreen from "./components/LoaderScreen/LoaderScreen";

import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <LoaderScreen />
      ) : (
        <>
          <RotateDevice />
          <div className="content">
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
