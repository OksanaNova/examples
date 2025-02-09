import './App.css'
import LessonReducer from './LessonReducer';
import MyBlock from './MyBlock';
import TwoReducers from './TwoReducers';
import React from 'react';
import { useState } from 'react';

export const ColorContext = React.createContext()

function App() {

  const [myColor, setMyColor] = useState(true);

  function changeColor() {
    setMyColor((myFirstColor) => !myFirstColor)
  }
 

  return (
    <>

    <LessonReducer />

    <TwoReducers />

    <h1>Click here and the color will change</h1>

    <ColorContext.Provider value={myColor}>
        <button onClick={changeColor}>SWITCH COLORS</button>
        <MyBlock />
    </ColorContext.Provider>



    </>
  )
}

export default App
