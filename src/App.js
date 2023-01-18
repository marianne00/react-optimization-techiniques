import React, { useCallback, useState, useMemo } from 'react';
import Button from '../src/components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/DemoList/DemoList';

function App() {
  const [visibility, setVisibility] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  const [listTitle, setlistTitle] = useState('My List')

  console.log('app running');

  // useMemo -  for storing any kinds of data
  // use callback - for functions

  // if u use another variable that is outside the callback function, put it on the dependency array
  const toggleVisibility = useCallback(() => {
    if (allowToggle) {
      setVisibility((prevVisibility) => !prevVisibility)
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  }

  const changeTitleHandler = useCallback(() => {
    setlistTitle('New Title')
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change title</Button>

      {/* <DemoOutput show={visibility} />
      <Button onClick={allowToggleHandler}>Allow toggling</Button> */}
      {/* { allowToggle && <Button onClick={toggleVisibility}>Toggle paragraph</Button> } */}
    </div>
  );
}

export default App;
