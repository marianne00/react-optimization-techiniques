import React, { useCallback, useState } from 'react';
import Button from '../src/components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [visibility, setVisibility] = useState(false)

  console.log('app running');

  const toggleVisibility = useCallback(() => {
    setVisibility((prevVisibility) => !prevVisibility)
  }, []);
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleVisibility}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
