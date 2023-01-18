import React, { useCallback, useState } from 'react';
import Button from '../src/components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [visibility, setVisibility] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  console.log('app running');

  // if u use another variable that is outside the callback function, put it on the dependency array
  const toggleVisibility = useCallback(() => {
    if (allowToggle) {
      setVisibility((prevVisibility) => !prevVisibility)
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  }
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={visibility} />
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      { allowToggle && <Button onClick={toggleVisibility}>Toggle paragraph</Button> }
    </div>
  );
}

export default App;
